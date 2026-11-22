// /api/mls — Búsqueda de listados del MLS para feppr.com
//
// Sin credenciales: responde con datos de prueba (data/mls-demo.json).
// Con credenciales (Vercel → Settings → Environment Variables):
//   MLS_BRIDGE_TOKEN    Server token de Bridge API (lo entrega Stellar MLS)
//   MLS_BRIDGE_DATASET  ID del dataset de Stellar en Bridge (ej. "stellar")
//   FEP_AGENT_MLS_ID    (opcional) tu MLS ID de agente, para ?agent=fep
//
// Nunca pongas el token en el código ni en el repositorio.

const demo = require('../data/mls-demo.json');

const TYPES = ['Residential', 'Land', 'Commercial Sale', 'Residential Income'];
const PAGE_SIZE = 24;

const num = (v) => {
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? n : null;
};
const odataStr = (s) => String(s).replace(/'/g, "''").slice(0, 60);

function normalize(p) {
  const media = Array.isArray(p.Media) ? p.Media : [];
  const photos = media
    .filter((m) => m && m.MediaURL && (!m.MediaCategory || /photo/i.test(m.MediaCategory)))
    .sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0))
    .map((m) => m.MediaURL);
  const address = [p.StreetNumber, p.StreetName, p.StreetSuffix].filter(Boolean).join(' ') || p.UnparsedAddress || '';
  return {
    id: p.ListingId || p.ListingKey,
    address,
    city: p.City || '',
    price: p.ListPrice ?? null,
    type: p.PropertyType || '',
    subType: p.PropertySubType || '',
    beds: p.BedroomsTotal ?? null,
    baths: p.BathroomsTotalInteger ?? null,
    sqft: p.LivingArea ?? null,
    acres: p.LotSizeAcres ?? null,
    status: p.StandardStatus || '',
    remarks: p.PublicRemarks || '',
    photos,
    listOffice: p.ListOfficeName || '',
    listAgent: p.ListAgentFullName || '',
    modified: p.ModificationTimestamp || null,
  };
}

function filterDemo(listings, f) {
  return listings.filter((l) =>
    (!f.city || l.city === f.city) &&
    (!f.type || l.type === f.type) &&
    (f.minPrice == null || (l.price ?? 0) >= f.minPrice) &&
    (f.maxPrice == null || (l.price ?? 0) <= f.maxPrice) &&
    (!f.q || `${l.address} ${l.city} ${l.remarks}`.toLowerCase().includes(f.q.toLowerCase()))
  );
}

module.exports = async (req, res) => {
  const query = req.query || {};
  const f = {
    city: query.city ? String(query.city).slice(0, 60) : '',
    type: TYPES.includes(query.type) ? query.type : '',
    minPrice: num(query.minPrice),
    maxPrice: num(query.maxPrice),
    q: query.q ? String(query.q).slice(0, 60) : '',
    page: Math.max(1, Math.min(50, parseInt(query.page, 10) || 1)),
    agentOnly: query.agent === 'fep',
  };

  const token = process.env.MLS_BRIDGE_TOKEN;
  const dataset = process.env.MLS_BRIDGE_DATASET;

  // ── Modo prueba ──────────────────────────────────────────
  if (!token || !dataset) {
    const all = filterDemo(demo.listings, f);
    const start = (f.page - 1) * PAGE_SIZE;
    res.setHeader('Cache-Control', 's-maxage=300');
    return res.status(200).json({
      source: 'demo',
      updatedAt: demo.updatedAt,
      total: all.length,
      page: f.page,
      pageSize: PAGE_SIZE,
      listings: all.slice(start, start + PAGE_SIZE),
    });
  }

  // ── Modo real: Bridge API (RESO Web API / OData) ─────────
  const filters = ["StandardStatus eq 'Active'", "StateOrProvince eq 'PR'"];
  if (f.city) filters.push(`City eq '${odataStr(f.city)}'`);
  if (f.type) filters.push(`PropertyType eq '${odataStr(f.type)}'`);
  if (f.minPrice != null) filters.push(`ListPrice ge ${f.minPrice}`);
  if (f.maxPrice != null) filters.push(`ListPrice le ${f.maxPrice}`);
  if (f.agentOnly && process.env.FEP_AGENT_MLS_ID) {
    filters.push(`ListAgentMlsId eq '${odataStr(process.env.FEP_AGENT_MLS_ID)}'`);
  }
  if (f.q) filters.push(`contains(PublicRemarks,'${odataStr(f.q)}')`);

  const select = [
    'ListingId', 'ListingKey', 'StreetNumber', 'StreetName', 'StreetSuffix', 'UnparsedAddress',
    'City', 'ListPrice', 'PropertyType', 'PropertySubType', 'BedroomsTotal', 'BathroomsTotalInteger',
    'LivingArea', 'LotSizeAcres', 'StandardStatus', 'PublicRemarks', 'Media',
    'ListOfficeName', 'ListAgentFullName', 'ModificationTimestamp',
  ].join(',');

  const params = new URLSearchParams({
    $filter: filters.join(' and '),
    $select: select,
    $orderby: 'ModificationTimestamp desc',
    $top: String(PAGE_SIZE),
    $skip: String((f.page - 1) * PAGE_SIZE),
    $count: 'true',
  });
  const url = `https://api.bridgedataoutput.com/api/v2/OData/${encodeURIComponent(dataset)}/Property?${params.toString().replace(/\+/g, "%20")}`;

  try {
    const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!r.ok) {
      console.error('Bridge API error', r.status, await r.text().catch(() => ''));
      return res.status(502).json({ error: 'No se pudo cargar el MLS en este momento.' });
    }
    const data = await r.json();
    // Caché en el edge de Vercel: 1 hora fresco, hasta 12 horas mientras se refresca.
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=43200');
    return res.status(200).json({
      source: 'mls',
      updatedAt: new Date().toISOString(),
      total: data['@odata.count'] ?? null,
      page: f.page,
      pageSize: PAGE_SIZE,
      listings: (data.value || []).map(normalize),
    });
  } catch (e) {
    console.error('Bridge API fetch failed', e);
    return res.status(502).json({ error: 'No se pudo cargar el MLS en este momento.' });
  }
};
