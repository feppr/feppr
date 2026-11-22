# feppr.com — Firme en Propósito

Sitio estático en Vercel.

## Propiedades (`/propiedades`)

- **Exclusivos FEP**: se editan en `data/listados-fep.json` (nombre, precio, foto, datos, historia, potencial).
- **Explorar el mercado**: búsqueda del MLS vía `api/mls.js` (función de Vercel).
  - Sin credenciales muestra **datos de prueba** (`data/mls-demo.json`) con un aviso visible.
  - Para conectar Stellar MLS (Bridge API), en Vercel → Settings → Environment Variables:
    - `MLS_BRIDGE_TOKEN` — server token que entrega Stellar
    - `MLS_BRIDGE_DATASET` — ID del dataset de Stellar en Bridge
    - `FEP_AGENT_MLS_ID` — (opcional) tu MLS ID de agente
  - Luego hacer *Redeploy*. El aviso de prueba desaparece solo.

### Antes de publicar con datos reales
- Reemplazar el texto de `#disclaimer` en `propiedades.html` con el disclaimer exacto que exige el acuerdo IDX de Stellar.
- Confirmar con Stellar la frecuencia de actualización requerida (la función guarda caché 1 hora).
- Los formularios de interés envían a Formspree (mismo endpoint del formulario principal).
