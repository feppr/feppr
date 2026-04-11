<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="FIRME EN PROPÓSITO — Bienes Raíces, Rehabilitación y Finanzas en Puerto Rico. Rafael Valentín Bermúdez.">
<title>Firme en Propósito — Puerto Rico</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
/* ═══════════════════════════════════════
   RESET & ROOT
═══════════════════════════════════════ */
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --noir:#0A0A08;
  --noir2:#111109;
  --bone:#F5F0E8;
  --terra:#A0522D;
  --terra-lt:rgba(160,82,45,0.08);
  --terra-mid:rgba(160,82,45,0.18);
  --sand:#D4C4A8;
  --ash:#6B6560;
  --warm-white:#FAF8F4;
  --warm-mid:#F0EAE0;
  --gold:#C9A96E;
  --gold-lt:rgba(201,169,110,0.12);
  --border:rgba(212,196,168,0.15);
  --border-mid:rgba(212,196,168,0.28);
  --success:#4A7C59;
}
html{scroll-behavior:smooth;font-size:16px}
body{background:var(--noir);color:var(--bone);font-family:'Outfit',sans-serif;overflow-x:hidden}
img{display:block;max-width:100%}
a{text-decoration:none}
button{font-family:'Outfit',sans-serif}

/* ═══════════════════════════════════════
   UTILITIES
═══════════════════════════════════════ */
.label{font-size:.65rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:1.25rem}
.divider-line{width:40px;height:.5px;background:var(--gold);margin-bottom:1.5rem}
.serif{font-family:'Cormorant Garamond',serif}
.btn-primary{font-family:'Outfit',sans-serif;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;padding:1rem 2.25rem;background:var(--gold);color:var(--noir);border:none;cursor:pointer;transition:background .3s;font-weight:500}
.btn-primary:hover{background:var(--bone)}
.btn-ghost{font-family:'Outfit',sans-serif;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;padding:1rem 2.25rem;background:transparent;color:var(--sand);border:.5px solid rgba(212,196,168,.35);cursor:pointer;transition:all .3s}
.btn-ghost:hover{border-color:var(--gold);color:var(--gold)}
section{padding:7rem 10vw}

/* ═══════════════════════════════════════
   NAV
═══════════════════════════════════════ */
nav{
  position:fixed;top:0;left:0;right:0;z-index:200;
  padding:1.25rem 3rem;
  display:flex;justify-content:space-between;align-items:center;
  background:rgba(10,10,8,.93);
  backdrop-filter:blur(14px);
  border-bottom:.5px solid var(--border);
  transition:padding .4s;
}
nav.scrolled{padding:.9rem 3rem}
.nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:300;letter-spacing:.2em;color:var(--bone);text-transform:uppercase;cursor:pointer}
.nav-logo span{color:var(--gold)}
.nav-links{display:flex;gap:2.25rem;list-style:none}
.nav-links a{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--sand);transition:color .3s}
.nav-links a:hover{color:var(--gold)}
.nav-cta{font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;padding:.55rem 1.5rem;border:.5px solid var(--gold);color:var(--gold);background:transparent;cursor:pointer;transition:all .3s}
.nav-cta:hover{background:var(--gold);color:var(--noir)}
.nav-mobile-toggle{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px}
.nav-mobile-toggle span{display:block;width:22px;height:.5px;background:var(--sand);transition:all .3s}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
#hero{
  min-height:100vh;
  display:flex;flex-direction:column;justify-content:center;
  padding-top:9rem;padding-bottom:6rem;
  position:relative;overflow:hidden;
}
.hero-bg{
  position:absolute;inset:0;
  background:radial-gradient(ellipse 65% 55% at 80% 45%, rgba(139,69,19,.13) 0%, transparent 70%);
  pointer-events:none;
}
.hero-vline{
  position:absolute;top:0;right:16vw;
  width:.5px;height:100%;
  background:linear-gradient(to bottom,transparent,rgba(201,169,110,.28),transparent);
  pointer-events:none;
}
.hero-grain{
  position:absolute;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.035'/%3E%3C/svg%3E");
  pointer-events:none;opacity:.6;
}
.hero-eyebrow{font-size:.62rem;letter-spacing:.38em;text-transform:uppercase;color:var(--gold);margin-bottom:2.25rem;opacity:0;animation:fadeUp .8s .2s forwards}
.hero-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(3.4rem,7vw,6.5rem);
  font-weight:300;line-height:1.04;
  color:var(--bone);max-width:820px;
  opacity:0;animation:fadeUp .9s .4s forwards;
}
.hero-title em{font-style:italic;color:var(--gold)}
.hero-sub{
  font-size:.95rem;font-weight:300;color:var(--ash);
  max-width:480px;line-height:1.85;
  margin:2.25rem 0 3.5rem;
  opacity:0;animation:fadeUp .9s .6s forwards;
}
.hero-actions{display:flex;gap:1.25rem;flex-wrap:wrap;opacity:0;animation:fadeUp .9s .8s forwards}
.hero-scroll{
  position:absolute;bottom:2.75rem;left:10vw;
  display:flex;align-items:center;gap:1rem;
  opacity:0;animation:fadeIn 1s 1.4s forwards;
}
.hero-scroll span{font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:var(--ash)}
.scroll-line{width:38px;height:.5px;background:var(--ash)}

/* ═══════════════════════════════════════
   BRAND
═══════════════════════════════════════ */
#brand{background:var(--warm-white);color:var(--noir)}
.brand-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.brand-quote{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(1.9rem,3vw,2.9rem);
  font-weight:300;line-height:1.28;color:var(--noir);
}
.brand-quote em{font-style:italic;color:var(--terra)}
.brand-text p{font-size:.9rem;line-height:1.95;color:#4A4540;margin-bottom:1.5rem}
.brand-pillars{display:grid;grid-template-columns:1fr 1fr;gap:.85rem;margin-top:2.5rem}
.pillar{padding:1.1rem 1.25rem;border-left:2px solid var(--terra);background:rgba(160,82,45,.05)}
.pillar-name{font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--terra);font-weight:500}

/* ═══════════════════════════════════════
   DIVISIONS
═══════════════════════════════════════ */
#divisions{background:var(--noir)}
.division-header{text-align:center;margin-bottom:5rem}
.division-main-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,4vw,3.5rem);
  font-weight:300;color:var(--bone);margin-bottom:1rem;
}
.divisions-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5px;background:rgba(212,196,168,.08)}
.division-card{
  background:var(--noir);padding:3rem 2.5rem;
  cursor:pointer;position:relative;overflow:hidden;
  transition:background .4s;
}
.division-card::before{
  content:'';position:absolute;bottom:0;left:0;
  width:0;height:2px;background:var(--gold);
  transition:width .45s;
}
.division-card:hover::before{width:100%}
.division-card:hover{background:rgba(201,169,110,.04)}
.div-num{
  font-family:'Cormorant Garamond',serif;
  font-size:3.8rem;font-weight:300;
  color:rgba(201,169,110,.12);line-height:1;
  margin-bottom:1rem;display:block;
}
.div-tag{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:.75rem}
.div-title{
  font-family:'Cormorant Garamond',serif;
  font-size:1.6rem;font-weight:300;
  color:var(--bone);margin-bottom:1rem;line-height:1.2;
}
.div-desc{font-size:.84rem;color:var(--ash);line-height:1.8}
.coming-badge{
  display:inline-block;margin-top:1.25rem;
  font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;
  padding:.38rem 1rem;border:.5px solid var(--terra);color:var(--terra);
}

/* ═══════════════════════════════════════
   BIENES RAICES
═══════════════════════════════════════ */
#realty{background:var(--warm-white);color:var(--noir)}
.section-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.2rem,4vw,3.4rem);
  font-weight:300;color:var(--noir);line-height:1.15;
}
.section-sub{font-size:.9rem;color:var(--ash);max-width:560px;line-height:1.85;margin-top:1rem}
.props-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-bottom:4rem;margin-top:2.5rem}
.prop-card{
  background:#fff;border:.5px solid rgba(107,101,96,.14);
  overflow:hidden;transition:transform .3s,box-shadow .3s;
}
.prop-card:hover{transform:translateY(-5px);box-shadow:0 18px 40px rgba(0,0,0,.09)}
.prop-img{
  height:210px;
  background:linear-gradient(140deg,rgba(160,82,45,.12),rgba(139,69,19,.22));
  display:flex;align-items:center;justify-content:center;position:relative;
}
.prop-status{
  position:absolute;top:1rem;left:1rem;
  font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;
  padding:.35rem .9rem;background:var(--terra);color:#fff;
}
.prop-status.contrato{background:#5A7A5A}
.prop-icon{font-size:2.8rem;opacity:.2}
.prop-body{padding:1.5rem}
.prop-location{font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--terra);margin-bottom:.45rem}
.prop-name{
  font-family:'Cormorant Garamond',serif;
  font-size:1.3rem;font-weight:400;color:var(--noir);margin-bottom:.45rem;
}
.prop-price{font-size:1rem;font-weight:500;color:var(--noir);margin-bottom:.75rem}
.prop-details{font-size:.76rem;color:var(--ash);display:flex;gap:1.1rem}
.sold-title{
  font-family:'Cormorant Garamond',serif;
  font-size:1.6rem;font-weight:300;color:var(--noir);
  margin-bottom:.75rem;
}
.sold-sub{font-size:.84rem;color:var(--ash);margin-bottom:2rem;max-width:480px;line-height:1.8}
.sold-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
.sold-card{padding:1.5rem;background:var(--noir);text-align:center}
.sold-year{font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.45rem}
.sold-addr{font-size:.8rem;color:var(--sand);margin-bottom:.45rem}
.sold-price{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:300;color:var(--gold)}

/* ═══════════════════════════════════════
   REHAB
═══════════════════════════════════════ */
.rehab-wrap{
  margin-top:5.5rem;padding-top:5rem;
  border-top:.5px solid rgba(107,101,96,.18);
}
.rehab-intro{max-width:640px;margin-bottom:4rem}
.rehab-intro .section-title{color:var(--noir)}
.rehab-intro .section-sub{color:var(--ash);margin-top:.85rem}
.project{
  display:grid;grid-template-columns:1fr 2fr;
  border:.5px solid rgba(107,101,96,.14);overflow:hidden;
  margin-bottom:1.5rem;
  transition:border-color .3s;
}
.project:hover{border-color:rgba(160,82,45,.35)}
.ba-grid{display:grid;grid-template-columns:1fr 1fr;min-height:280px}
.ba-panel{
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;padding:2rem;
  position:relative;
}
.ba-before{background:rgba(107,101,96,.12)}
.ba-after{background:rgba(160,82,45,.1)}
.ba-label{font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;margin-bottom:.5rem}
.ba-before .ba-label{color:var(--ash)}
.ba-after .ba-label{color:var(--terra)}
.ba-placeholder{font-size:2.5rem;opacity:.18}
.proj-info{padding:2.75rem;background:#fff}
.proj-num{
  font-family:'Cormorant Garamond',serif;
  font-size:5rem;font-weight:300;
  color:rgba(160,82,45,.08);line-height:1;margin-bottom:.75rem;
}
.proj-loc{font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--terra);margin-bottom:.65rem}
.proj-title{
  font-family:'Cormorant Garamond',serif;
  font-size:1.75rem;font-weight:300;color:var(--noir);
  margin-bottom:.85rem;
}
.proj-desc{font-size:.84rem;color:#5A5550;line-height:1.88;margin-bottom:1.5rem}
.proj-stats{display:flex;gap:2.25rem}
.stat-val{
  font-family:'Cormorant Garamond',serif;
  font-size:1.7rem;font-weight:300;color:var(--terra);
}
.stat-label{font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ash);margin-top:.2rem}

/* ═══════════════════════════════════════
   LEADS / CONTACT FORM
═══════════════════════════════════════ */
#contacto{background:var(--noir);position:relative;overflow:hidden}
#contacto::before{
  content:'';position:absolute;
  top:50%;left:-8%;transform:translateY(-50%);
  width:500px;height:500px;
  background:radial-gradient(circle,rgba(160,82,45,.07) 0%,transparent 70%);
  pointer-events:none;
}
#contacto::after{
  content:'';position:absolute;
  top:0;right:16vw;
  width:.5px;height:100%;
  background:linear-gradient(to bottom,transparent,rgba(201,169,110,.2),transparent);
  pointer-events:none;
}
.leads-header{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:end;margin-bottom:4.5rem}
.leads-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.4rem,4.5vw,3.8rem);
  font-weight:300;line-height:1.08;color:var(--bone);
}
.leads-title em{font-style:italic;color:var(--gold)}
.leads-desc{font-size:.88rem;color:var(--ash);line-height:1.95;max-width:420px}
.leads-desc strong{color:var(--sand);font-weight:400}
.type-selector{display:flex;border:.5px solid var(--border-mid);margin-bottom:3rem;width:fit-content}
.type-btn{
  font-family:'Outfit',sans-serif;font-size:.66rem;
  letter-spacing:.18em;text-transform:uppercase;
  padding:.9rem 1.85rem;background:transparent;
  color:var(--ash);border:none;border-right:.5px solid var(--border);
  cursor:pointer;transition:all .3s;position:relative;white-space:nowrap;
}
.type-btn:last-child{border-right:none}
.type-btn::after{
  content:'';position:absolute;bottom:-.5px;left:0;right:0;
  height:2px;background:var(--gold);transform:scaleX(0);transition:transform .3s;
}
.type-btn.active{color:var(--gold);background:var(--gold-lt)}
.type-btn.active::after{transform:scaleX(1)}
.type-btn:hover:not(.active){color:var(--sand)}
.leads-form-wrap{display:grid;grid-template-columns:3fr 2fr;gap:3rem;align-items:start;position:relative;z-index:1}
.leads-form{background:rgba(212,196,168,.03);border:.5px solid var(--border);padding:3rem}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-bottom:1.2rem}
.form-row.full{grid-template-columns:1fr}
.form-row.three{grid-template-columns:1fr 1fr 1fr}
.field{display:flex;flex-direction:column;gap:.5rem}
.field label{font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--ash)}
.field label .req{color:var(--terra);margin-left:3px}
.field input,.field select,.field textarea{
  background:transparent;border:.5px solid rgba(212,196,168,.2);
  padding:.85rem 1rem;color:var(--bone);font-family:'Outfit',sans-serif;
  font-size:.84rem;outline:none;transition:border-color .3s,background .3s;
  width:100%;appearance:none;-webkit-appearance:none;
}
.field input::placeholder,.field textarea::placeholder{color:rgba(107,101,96,.55);font-size:.8rem}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--gold);background:rgba(201,169,110,.03)}
.field select{
  cursor:pointer;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236B6560' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 1rem center;padding-right:2.5rem;
}
.field select option{background:#1A1A17;color:var(--bone)}
.field textarea{resize:vertical;min-height:110px;line-height:1.7}
.field.error input,.field.error select,.field.error textarea{border-color:rgba(220,80,60,.5)}
.field-error-msg{font-size:.6rem;color:#E07060;display:none}
.field.error .field-error-msg{display:block}
.conditional-panel{display:none}
.conditional-panel.visible{display:contents}
.form-divider{height:.5px;background:var(--border);margin:1.75rem 0}
.form-section-label{font-size:.58rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;display:block}
.check-group{display:grid;grid-template-columns:1fr 1fr;gap:.55rem}
.check-item{display:flex;align-items:center;gap:.65rem;cursor:pointer;padding:.5rem .75rem;border:.5px solid transparent;transition:all .25s}
.check-item:hover{border-color:rgba(201,169,110,.2);background:var(--gold-lt)}
.check-item input[type="checkbox"]{width:14px;height:14px;min-width:14px;border:.5px solid rgba(212,196,168,.35);background:transparent;padding:0;cursor:pointer;accent-color:var(--gold);appearance:auto;-webkit-appearance:auto}
.check-item span{font-size:.76rem;color:var(--sand)}
.consent-row{display:flex;align-items:flex-start;gap:.85rem;margin:1.5rem 0 2rem}
.consent-row input[type="checkbox"]{width:15px;height:15px;min-width:15px;margin-top:2px;accent-color:var(--gold);cursor:pointer;appearance:auto;-webkit-appearance:auto}
.consent-text{font-size:.73rem;color:var(--ash);line-height:1.7}
.consent-text a{color:var(--gold)}
.submit-btn{
  width:100%;font-family:'Outfit',sans-serif;font-size:.72rem;
  letter-spacing:.18em;text-transform:uppercase;font-weight:500;
  padding:1.15rem 2rem;background:var(--gold);color:var(--noir);
  border:none;cursor:pointer;transition:background .3s;
}
.submit-btn:hover{background:var(--bone)}
.submit-btn:disabled{opacity:.5;cursor:not-allowed}
.success-msg{
  display:none;padding:2.5rem;
  border:.5px solid rgba(74,124,89,.4);
  background:rgba(74,124,89,.06);text-align:center;
}
.success-msg.visible{display:block}
.success-icon{
  width:48px;height:48px;border:.5px solid rgba(74,124,89,.5);
  border-radius:50%;display:flex;align-items:center;justify-content:center;
  margin:0 auto 1.5rem;font-size:1.2rem;color:#6BAF7A;
}
.success-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:var(--bone);margin-bottom:.75rem}
.success-sub{font-size:.82rem;color:var(--ash);line-height:1.8}
.privacy-bar{display:flex;align-items:center;gap:1rem;padding:1rem 0 0;border-top:.5px solid var(--border);margin-top:0}
.privacy-icon{font-size:.85rem;opacity:.4}
.privacy-text{font-size:.68rem;color:rgba(107,101,96,.65);line-height:1.6}
.leads-sidebar{display:flex;flex-direction:column;gap:1.5rem;position:sticky;top:6rem}
.sidebar-card{padding:2rem;border:.5px solid var(--border);background:rgba(212,196,168,.02)}
.sidebar-card-label{font-size:.58rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem;display:block}
.sidebar-card-title{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:300;color:var(--bone);margin-bottom:.75rem;line-height:1.3}
.sidebar-card p{font-size:.8rem;color:var(--ash);line-height:1.8}
.sidebar-promise{display:flex;flex-direction:column;gap:.7rem;margin-top:1.5rem}
.promise-item{display:flex;align-items:center;gap:.85rem;font-size:.76rem;color:var(--sand)}
.promise-dot{width:4px;height:4px;background:var(--gold);border-radius:50%;flex-shrink:0}
.sidebar-stats{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.sidebar-stat{padding:1.5rem;border:.5px solid var(--border);text-align:center}
.stat-big{font-family:'Cormorant Garamond',serif;font-size:2.8rem;font-weight:300;color:var(--gold);line-height:1;margin-bottom:.35rem}
.stat-sm{font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ash)}
.sidebar-mini-btn{
  width:100%;font-family:'Outfit',sans-serif;font-size:.65rem;
  letter-spacing:.16em;text-transform:uppercase;padding:.85rem 1.5rem;
  background:transparent;color:var(--sand);border:.5px solid rgba(212,196,168,.22);
  cursor:pointer;transition:all .3s;margin-top:1rem;
}
.sidebar-mini-btn:hover{border-color:var(--gold);color:var(--gold)}

/* ═══════════════════════════════════════
   CONTABILIDAD
═══════════════════════════════════════ */
#contabilidad{background:var(--warm-white);color:var(--noir)}
.cs-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.cs-badge{display:inline-flex;align-items:center;gap:.75rem;margin-bottom:2rem}
.cs-dot{width:8px;height:8px;background:var(--terra);border-radius:50%;animation:pulse 2s infinite}
.cs-badge-label{font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:var(--terra)}
.cs-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4vw,3rem);font-weight:300;color:var(--noir);line-height:1.2;margin-bottom:1.5rem}
.cs-desc{font-size:.9rem;color:#4A4540;line-height:1.95}
.cs-services{display:flex;flex-direction:column;gap:.85rem;margin-top:2.5rem}
.cs-service{display:flex;align-items:center;gap:1.25rem;padding:1rem 1.5rem;border:.5px solid rgba(160,82,45,.18);background:rgba(160,82,45,.03)}
.cs-service-dot{width:4px;height:4px;background:var(--terra);border-radius:50%;flex-shrink:0}
.cs-service-text{font-size:.82rem;color:#4A4540}
.cs-panel{background:rgba(160,82,45,.05);border:.5px solid rgba(160,82,45,.14);padding:4rem;text-align:center}
.cs-panel-num{font-family:'Cormorant Garamond',serif;font-size:5.5rem;font-weight:300;color:rgba(160,82,45,.18);line-height:1;margin-bottom:1.5rem}
.cs-panel-tag{font-size:.64rem;letter-spacing:.25em;text-transform:uppercase;color:var(--terra);margin-bottom:1.5rem;display:block}
.cs-panel p{font-size:.84rem;color:#6B6560;line-height:1.82;margin-bottom:2rem}
.cs-input{width:100%;background:transparent;border:.5px solid rgba(160,82,45,.22);padding:.85rem 1rem;color:var(--noir);font-family:'Outfit',sans-serif;font-size:.84rem;outline:none;margin-bottom:1rem;transition:border-color .3s}
.cs-input::placeholder{color:rgba(107,101,96,.5)}
.cs-input:focus{border-color:var(--terra)}
.cs-btn{width:100%;font-family:'Outfit',sans-serif;font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;padding:1rem;background:var(--terra);color:#fff;border:none;cursor:pointer;transition:background .3s}
.cs-btn:hover{background:#8B4010}

/* ═══════════════════════════════════════
   AGENDA
═══════════════════════════════════════ */
#agenda{background:var(--noir2)}
.agenda-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start}
.agenda-big-num{font-family:'Cormorant Garamond',serif;font-size:9rem;font-weight:300;color:rgba(201,169,110,.1);line-height:1;margin-bottom:-1.5rem}
.agenda-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,4vw,3.2rem);font-weight:300;color:var(--bone);line-height:1.18;margin-bottom:1.5rem}
.agenda-desc{font-size:.88rem;color:var(--ash);line-height:1.88;margin-bottom:2.5rem}
.agenda-topics{display:flex;flex-direction:column;gap:.72rem;margin-bottom:3rem}
.topic{display:flex;align-items:center;gap:1rem;font-size:.82rem;color:var(--sand)}
.topic-dash{width:20px;height:.5px;background:var(--gold);flex-shrink:0}
.agenda-form{background:rgba(212,196,168,.03);border:.5px solid var(--border);padding:3rem}
.agenda-form-title{font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:2rem}
.agenda-field{margin-bottom:1.4rem}
.agenda-field label{display:block;font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;color:var(--ash);margin-bottom:.55rem}
.agenda-field input,.agenda-field select{
  width:100%;background:transparent;border:.5px solid rgba(212,196,168,.2);
  padding:.85rem 1rem;color:var(--bone);font-family:'Outfit',sans-serif;
  font-size:.84rem;outline:none;transition:border-color .3s;
  appearance:none;-webkit-appearance:none;
}
.agenda-field input::placeholder{color:rgba(107,101,96,.5)}
.agenda-field input:focus,.agenda-field select:focus{border-color:var(--gold)}
.agenda-field select{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236B6560' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 1rem center;
  padding-right:2.5rem;cursor:pointer;
}
.agenda-field select option{background:#1A1A17;color:var(--bone)}
.agenda-submit{width:100%;font-family:'Outfit',sans-serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:500;padding:1.15rem;background:var(--gold);color:var(--noir);border:none;cursor:pointer;transition:background .3s;margin-top:.5rem}
.agenda-submit:hover{background:var(--bone)}
.agenda-note{font-size:.7rem;color:var(--ash);margin-top:1rem;text-align:center;line-height:1.7}

/* ═══════════════════════════════════════
   ABOUT
═══════════════════════════════════════ */
#about{background:var(--warm-white);color:var(--noir)}
.about-grid{display:grid;grid-template-columns:2fr 3fr;gap:6rem;align-items:start}
.about-portrait{
  background:linear-gradient(155deg,rgba(160,82,45,.14),rgba(139,69,19,.24));
  aspect-ratio:3/4;display:flex;align-items:center;justify-content:center;
  position:relative;
}
.portrait-initials{font-family:'Cormorant Garamond',serif;font-size:5.5rem;font-weight:300;color:rgba(160,82,45,.28)}
.portrait-tag{
  position:absolute;bottom:2rem;left:2rem;right:2rem;
  background:var(--noir);padding:1.25rem 1.5rem;
}
.portrait-name{font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:400;color:var(--bone);margin-bottom:.22rem}
.portrait-role{font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold)}
.about-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.5vw,2.8rem);font-weight:300;color:var(--noir);line-height:1.2;margin-bottom:2rem}
.about-content p{font-size:.9rem;color:#4A4540;line-height:1.95;margin-bottom:1.5rem}
.about-creds{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.cred{padding:1.2rem;border:.5px solid rgba(160,82,45,.2)}
.cred-label{font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:var(--terra);margin-bottom:.32rem}
.cred-val{font-size:.84rem;color:var(--noir)}

/* ═══════════════════════════════════════
   VISION
═══════════════════════════════════════ */
#vision{background:var(--noir);text-align:center}
.vision-inner{max-width:820px;margin:0 auto}
.vision-quote{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,4.5vw,3.8rem);
  font-weight:300;line-height:1.22;
  color:var(--bone);margin-bottom:3rem;
}
.vision-quote em{color:var(--gold);font-style:italic}
.vision-sub{font-size:.9rem;color:var(--ash);line-height:1.9;max-width:600px;margin:0 auto}
.vision-pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(212,196,168,.08);margin-top:5rem;text-align:left}
.vp-item{background:var(--noir);padding:2.5rem 2rem}
.vp-num{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:rgba(201,169,110,.18);margin-bottom:1rem;display:block}
.vp-tag{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:.7rem}
.vp-text{font-size:.82rem;color:var(--ash);line-height:1.82}

/* ═══════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════ */
#testimonials{background:rgba(212,196,168,.03);border-top:.5px solid rgba(212,196,168,.08);border-bottom:.5px solid rgba(212,196,168,.08)}
.t-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:3rem}
.t-card{padding:2.5rem;border:.5px solid rgba(212,196,168,.1)}
.t-quote{font-family:'Cormorant Garamond',serif;font-size:1.08rem;font-style:italic;font-weight:300;color:var(--sand);line-height:1.72;margin-bottom:1.5rem}
.t-author{display:flex;align-items:center;gap:1rem}
.t-avatar{width:36px;height:36px;border-radius:50%;background:rgba(160,82,45,.18);display:flex;align-items:center;justify-content:center;font-size:.74rem;color:var(--terra);font-weight:500;flex-shrink:0}
.t-name{font-size:.78rem;color:var(--bone);font-weight:500}
.t-detail{font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ash);margin-top:.18rem}
.t-placeholder{background:rgba(201,169,110,.03);border:.5px dashed rgba(201,169,110,.18);display:flex;align-items:center;justify-content:center;min-height:185px}
.t-placeholder-text{font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(201,169,110,.28);text-align:center;line-height:1.8}

/* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */
footer{background:var(--noir);padding:5.5rem 10vw 3rem;border-top:.5px solid rgba(212,196,168,.1)}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:4rem;margin-bottom:4rem}
.footer-logo{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:300;letter-spacing:.18em;text-transform:uppercase;color:var(--bone);margin-bottom:1rem}
.footer-logo span{color:var(--gold)}
.footer-brand-desc{font-size:.82rem;color:var(--ash);line-height:1.82;max-width:280px}
.footer-col h4{font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1.25rem}
.footer-col ul{list-style:none;display:flex;flex-direction:column;gap:.72rem}
.footer-col a{font-size:.8rem;color:var(--ash);transition:color .3s}
.footer-col a:hover{color:var(--sand)}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:2rem;border-top:.5px solid rgba(212,196,168,.07)}
.footer-copy{font-size:.7rem;color:rgba(107,101,96,.65);letter-spacing:.08em}
.footer-tagline{font-family:'Cormorant Garamond',serif;font-size:.92rem;font-style:italic;color:rgba(201,169,110,.45)}

/* ═══════════════════════════════════════
   ANIMATIONS
═══════════════════════════════════════ */
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}

.reveal{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .75s ease}
.reveal.in-view{opacity:1;transform:translateY(0)}

/* ═══════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════ */
@media(max-width:1024px){
  .brand-grid,.cs-grid,.leads-header,.agenda-grid,.about-grid,.footer-top{grid-template-columns:1fr;gap:2.5rem}
  .divisions-grid,.props-grid{grid-template-columns:1fr 1fr}
  .sold-grid{grid-template-columns:repeat(3,1fr)!important}
  .leads-form-wrap{grid-template-columns:1fr}
  .leads-sidebar{position:static;display:grid;grid-template-columns:1fr 1fr;gap:1rem}
  .sidebar-stats{display:flex;gap:1rem}
  .project{grid-template-columns:1fr}
  .about-grid{grid-template-columns:1fr}
  .about-portrait{max-height:380px}
}
@media(max-width:768px){
  nav{padding:1rem 1.5rem}
  nav.scrolled{padding:.8rem 1.5rem}
  .nav-links,.nav-cta{display:none}
  .nav-mobile-toggle{display:flex}
  section{padding:5rem 6vw}
  .hero-title{font-size:clamp(2.8rem,11vw,4rem)}
  .divisions-grid,.props-grid{grid-template-columns:1fr}
  .sold-grid{grid-template-columns:repeat(2,1fr)!important}
  .form-row,.form-row.three{grid-template-columns:1fr}
  .type-selector{flex-direction:column;width:100%}
  .type-btn{border-right:none;border-bottom:.5px solid var(--border)}
  .type-btn:last-child{border-bottom:none}
  .vision-pillars{grid-template-columns:1fr}
  .t-grid{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr 1fr}
  .footer-bottom{flex-direction:column;gap:1rem;text-align:center}
  .leads-sidebar{grid-template-columns:1fr}
  .check-group{grid-template-columns:1fr}
  .ba-grid{grid-template-columns:1fr 1fr;min-height:160px}
  .proj-stats{gap:1.5rem}
}
@media(max-width:480px){
  section{padding:4rem 5vw}
  .footer-top{grid-template-columns:1fr}
  .sold-grid{grid-template-columns:1fr 1fr!important}
  .about-creds,.brand-pillars{grid-template-columns:1fr}
}
/* Mobile nav drawer */
.mobile-nav{
  position:fixed;inset:0;z-index:190;
  background:rgba(10,10,8,.98);
  display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2.5rem;
  transform:translateY(-100%);transition:transform .4s ease;
}
.mobile-nav.open{transform:translateY(0)}
.mobile-nav a{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:300;color:var(--bone);letter-spacing:.08em;transition:color .3s}
.mobile-nav a:hover{color:var(--gold)}
.mobile-nav .mobile-cta{font-family:'Outfit',sans-serif;font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;padding:1rem 2.5rem;border:.5px solid var(--gold);color:var(--gold);background:transparent;cursor:pointer;transition:all .3s;margin-top:1rem}
.mobile-nav .mobile-cta:hover{background:var(--gold);color:var(--noir)}
</style>
</head>
<body>

<!-- MOBILE NAV DRAWER -->
<div class="mobile-nav" id="mobileNav">
  <a href="#brand" onclick="closeMobileNav()">La Marca</a>
  <a href="#realty" onclick="closeMobileNav()">Bienes Raíces</a>
  <a href="#contacto" onclick="closeMobileNav()">Propiedades</a>
  <a href="#contabilidad" onclick="closeMobileNav()">Finanzas</a>
  <a href="#about" onclick="closeMobileNav()">Rafael</a>
  <button class="mobile-cta" onclick="closeMobileNav();document.getElementById('agenda').scrollIntoView({behavior:'smooth'})">Agenda 1:1</button>
</div>

<!-- ═══════════ NAV ═══════════ -->
<nav id="mainNav">
  <div class="nav-logo" onclick="window.scrollTo({top:0,behavior:'smooth'})">Firme en <span>Propósito</span></div>
  <ul class="nav-links">
    <li><a href="#brand">La Marca</a></li>
    <li><a href="#realty">Bienes Raíces</a></li>
    <li><a href="#contacto">Propiedades</a></li>
    <li><a href="#contabilidad">Finanzas</a></li>
    <li><a href="#about">Rafael</a></li>
  </ul>
  <button class="nav-cta" onclick="document.getElementById('agenda').scrollIntoView({behavior:'smooth'})">Agenda 1:1</button>
  <button class="nav-mobile-toggle" id="mobileToggle" onclick="toggleMobileNav()" aria-label="Abrir menú">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- ═══════════ HERO ═══════════ -->
<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-vline"></div>
  <div class="hero-grain"></div>
  <p class="hero-eyebrow">Puerto Rico · Bienes Raíces · Rehab · Visión · Propósito</p>
  <h1 class="hero-title">Construido con<br><em>intención.</em><br>Creciendo con<br>propósito.</h1>
  <p class="hero-sub">FIRME EN PROPÓSITO es más que una empresa de bienes raíces. Es una plataforma de crecimiento, transformación y visión construida desde Puerto Rico para durar.</p>
  <div class="hero-actions">
    <button class="btn-primary" onclick="document.getElementById('realty').scrollIntoView({behavior:'smooth'})">Ver Propiedades</button>
    <button class="btn-ghost" onclick="document.getElementById('agenda').scrollIntoView({behavior:'smooth'})">Agenda una Llamada</button>
    <button class="btn-ghost" onclick="document.getElementById('brand').scrollIntoView({behavior:'smooth'})">Conocer la Marca</button>
  </div>
  <div class="hero-scroll">
    <div class="scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>

<!-- ═══════════ BRAND ═══════════ -->
<section id="brand">
  <div class="brand-grid reveal">
    <div>
      <span class="label">¿Qué es Firme en Propósito?</span>
      <blockquote class="brand-quote">No es un nombre.<br>Es una <em>declaración.</em></blockquote>
    </div>
    <div class="brand-text">
      <p>FIRME EN PROPÓSITO nació de una convicción: que el trabajo real, hecho con disciplina, visión y estructura, transforma vidas. No vendemos promesas. Construimos trayectoria.</p>
      <p>Hoy somos bienes raíces y rehabilitación de propiedades. Mañana seremos contabilidad, educación financiera, y todo lo que une crecimiento personal con solidez profesional. Cada división de esta marca existe con intención y se construye con base.</p>
      <p>Nacimos en Puerto Rico. Pensamos en grande. Actuamos con propósito.</p>
      <div class="brand-pillars">
        <div class="pillar"><div class="pillar-name">Visión</div></div>
        <div class="pillar"><div class="pillar-name">Disciplina</div></div>
        <div class="pillar"><div class="pillar-name">Estructura</div></div>
        <div class="pillar"><div class="pillar-name">Propósito</div></div>
        <div class="pillar"><div class="pillar-name">Transformación</div></div>
        <div class="pillar"><div class="pillar-name">Fe</div></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ DIVISIONS ═══════════ -->
<section id="divisions">
  <div class="division-header reveal">
    <span class="label">Nuestras Divisiones</span>
    <div class="division-main-title">Tres pilares.<br>Una sola visión.</div>
  </div>
  <div class="divisions-grid">
    <div class="division-card reveal" onclick="document.getElementById('realty').scrollIntoView({behavior:'smooth'})">
      <span class="div-num">01</span>
      <div class="div-tag">FEP División</div>
      <div class="div-title">Bienes Raíces<br>+ Rehab</div>
      <p class="div-desc">Compra, venta y rehabilitación de propiedades en Puerto Rico. FEP Realty y FEP Rehab trabajan juntos para encontrar valor donde otros no lo ven.</p>
    </div>
    <div class="division-card reveal" style="animation-delay:.1s" onclick="document.getElementById('contabilidad').scrollIntoView({behavior:'smooth'})">
      <span class="div-num">02</span>
      <div class="div-tag">FEP División</div>
      <div class="div-title">Contabilidad<br>& Finanzas</div>
      <p class="div-desc">Organización financiera, contabilidad, educación y dirección con propósito para individuos y pequeños negocios.</p>
      <span class="coming-badge">Coming Soon</span>
    </div>
    <div class="division-card reveal" style="animation-delay:.2s" onclick="document.getElementById('agenda').scrollIntoView({behavior:'smooth'})">
      <span class="div-num">03</span>
      <div class="div-tag">FEP Servicio</div>
      <div class="div-title">Agenda<br>1:1</div>
      <p class="div-desc">15 minutos directos con Rafael. Orientación, dirección y claridad para tus próximos pasos en bienes raíces o visión de negocio.</p>
    </div>
  </div>
</section>

<!-- ═══════════ BIENES RAICES ═══════════ -->
<section id="realty">
  <div class="reveal">
    <span class="label">FEP Bienes Raíces</span>
    <h2 class="section-title">Propiedades que mueven.<br>Resultados que hablan.</h2>
    <p class="section-sub">No solo vendemos propiedades. Las entendemos, las analizamos y las posicionamos con estrategia. Cada transacción es una historia de confianza y ejecución.</p>
  </div>

  <!-- FEP REALTY -->
  <div style="margin-top:3.5rem" class="reveal">
    <span class="label">FEP Realty — Propiedades en Venta</span>
    <div class="props-grid" style="grid-template-columns:repeat(2,1fr)">
      <div class="prop-card">
        <div class="prop-img"><span class="prop-status">En Venta</span><span class="prop-icon">⌂</span></div>
        <div class="prop-body">
          <div class="prop-location">Guayama, Puerto Rico</div>
          <div class="prop-name">Terreno en Caribe</div>
          <div class="prop-price">$64,000</div>
          <div class="prop-details" style="flex-wrap:wrap;gap:.65rem">
            <span>1.96 cuerdas</span>
            <span>Contador de agua</span>
            <span>Zonificación: Suelo Rústico Común</span>
          </div>
        </div>
      </div>
      <div class="prop-card">
        <div class="prop-img"><span class="prop-status">En Venta</span><span class="prop-icon">⌂</span></div>
        <div class="prop-body">
          <div class="prop-location">Ponce, Puerto Rico</div>
          <div class="prop-name">Terreno Comercial — PR-14</div>
          <div class="prop-price">$1,200,000</div>
          <div class="prop-details" style="flex-wrap:wrap;gap:.65rem">
            <span>9.46 cuerdas</span>
            <span>Zonificación: Suelo Urbano</span>
            <span>Excelente para desarrollo comercial, residencial y mixto</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SOLD PORTFOLIO -->
  <div style="margin-top:3rem" class="reveal">
    <div class="divider-line"></div>
    <div class="sold-title">Historial de Cierres</div>
    <p class="sold-sub">Cada cierre es una historia de confianza. Esta es la trayectoria que construimos juntos.</p>
    <div class="sold-grid" style="grid-template-columns:repeat(5,1fr)">
      <div class="sold-card"><div class="sold-year">2026</div><div class="sold-addr">Guayama, PR</div><div class="sold-price">$45K</div></div>
      <div class="sold-card"><div class="sold-year">2025</div><div class="sold-addr">Guayama, PR</div><div class="sold-price">$106K</div></div>
      <div class="sold-card"><div class="sold-year">2025</div><div class="sold-addr">Guayama, PR</div><div class="sold-price">$72K</div></div>
      <div class="sold-card"><div class="sold-year">2025</div><div class="sold-addr">Guayama, PR</div><div class="sold-price">$1,500<span style="font-size:.65rem;color:var(--ash);display:block;margin-top:.2rem">/mes</span></div></div>
      <div class="sold-card" style="background:rgba(201,169,110,.04);border:.5px dashed rgba(201,169,110,.18);display:flex;align-items:center;justify-content:center">
        <div style="text-align:center"><div style="font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(201,169,110,.35)">Próximo<br>cierre</div></div>
      </div>
    </div>
  </div>

  <!-- FEP REHAB -->
  <div class="rehab-wrap reveal">
    <span class="label">FEP Rehab — bajo FEP Bienes Raíces</span>
    <div class="rehab-intro">
      <h2 class="section-title" style="color:var(--noir)">Rescatamos lo que<br>otros abandonaron.</h2>
      <p class="section-sub" style="color:var(--ash)">FEP Rehab no hace flips. Devuelve propiedades a la vida con intención, trabajo y visión. Cada proyecto tiene una historia, y esa historia merece ser contada.</p>
    </div>

    <div class="project reveal">
      <div class="ba-grid">
        <div class="ba-panel ba-before"><div class="ba-label">Antes</div><div class="ba-placeholder">⌂</div></div>
        <div class="ba-panel ba-after"><div class="ba-label">Después</div><div class="ba-placeholder" style="opacity:.15;color:var(--terra)">⌂</div></div>
      </div>
      <div class="proj-info">
        <div class="proj-num">001</div>
        <div class="proj-loc">Proyecto 001 · Guayama, Puerto Rico</div>
        <div class="proj-title">La Casa del Barrio en Progreso</div>
        <p class="proj-desc">Una propiedad olvidada, invisibilizada por el tiempo. La vimos donde otros no vieron nada. Con trabajo real, disciplina y propósito, la devolvimos a la vida en 300 días. Hoy es prueba de que rehabilitar con intención transforma más que paredes.</p>
        <div class="proj-stats">
          <div><div class="stat-val">300</div><div class="stat-label">Días</div></div>
          <div><div class="stat-val">78%</div><div class="stat-label">Valor añadido</div></div>
          <div><div class="stat-val">2026</div><div class="stat-label">Completado</div></div>
        </div>
      </div>
    </div>

    <div class="project reveal">
      <div class="ba-grid">
        <div class="ba-panel ba-before" style="background:rgba(107,101,96,.08)">
          <div class="ba-label">Próximo</div>
          <div style="font-size:2rem;opacity:.12;color:var(--ash)">⌂</div>
        </div>
        <div class="ba-panel ba-after" style="background:rgba(201,169,110,.05)">
          <div class="ba-label" style="color:var(--gold)">Coming Soon</div>
          <div style="font-size:2rem;opacity:.1;color:var(--gold)">⌂</div>
        </div>
      </div>
      <div class="proj-info">
        <div class="proj-num">002</div>
        <div class="proj-loc" style="color:var(--ash)">Proyecto 002 · · · · · · · · · ·</div>
        <div class="proj-title" style="color:#888">Próximo Proyecto</div>
        <p class="proj-desc" style="color:#888">Este proyecto está en proceso de selección. El municipio y los detalles se revelarán pronto. FEP Rehab sigue encontrando valor donde otros no lo ven.</p>
        <span style="display:inline-block;font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;padding:.38rem 1rem;border:.5px solid rgba(201,169,110,.3);color:rgba(201,169,110,.5)">Coming Soon</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ LEADS FORM ═══════════ -->
<section id="contacto">
  <div class="leads-header reveal">
    <div>
      <span class="label">FEP Bienes Raíces · Cuéntanos</span>
      <h2 class="leads-title">Tu propiedad merece<br>una <em>conversación real.</em></h2>
    </div>
    <p class="leads-desc">¿Tienes una propiedad abandonada que no sabes qué hacer con ella? ¿Quieres vender, comprar o explorar opciones? <strong>Cuéntanos. Rafael te responde personalmente.</strong><br><br>Sin compromiso. Sin presión.</p>
  </div>

  <div class="type-selector reveal" role="tablist">
    <button class="type-btn active" data-type="vender"    onclick="switchType('vender')">Quiero Vender</button>
    <button class="type-btn"        data-type="comprar"   onclick="switchType('comprar')">Quiero Comprar</button>
    <button class="type-btn"        data-type="abandonada" onclick="switchType('abandonada')">Propiedad Abandonada</button>
    <button class="type-btn"        data-type="otro"      onclick="switchType('otro')">Otra Consulta</button>
  </div>

  <div class="leads-form-wrap reveal">
    <div>
      <form class="leads-form" id="leadsForm" novalidate>
        <input type="hidden" id="tipoConsulta" name="tipo" value="vender">

        <span class="form-section-label">Información de Contacto</span>
        <div class="form-row">
          <div class="field" id="fw-nombre">
            <label>Nombre completo <span class="req">*</span></label>
            <input type="text" name="nombre" id="fNombre" placeholder="Tu nombre completo">
            <span class="field-error-msg">Este campo es requerido.</span>
          </div>
          <div class="field" id="fw-tel">
            <label>Teléfono <span class="req">*</span></label>
            <input type="tel" name="telefono" id="fTel" placeholder="(787) 000-0000">
            <span class="field-error-msg">Ingresa un teléfono válido.</span>
          </div>
        </div>
        <div class="form-row">
          <div class="field" id="fw-email">
            <label>Correo electrónico <span class="req">*</span></label>
            <input type="email" name="email" id="fEmail" placeholder="tu@correo.com">
            <span class="field-error-msg">Ingresa un correo válido.</span>
          </div>
          <div class="field">
            <label>¿Cómo nos conociste?</label>
            <select name="fuente">
              <option value="">Selecciona</option>
              <option>Instagram</option><option>Facebook</option>
              <option>Referido / Amigo</option><option>Google</option>
              <option>LinkedIn</option><option>Otro</option>
            </select>
          </div>
        </div>

        <div class="form-divider"></div>
        <span class="form-section-label">Ubicación de la Propiedad</span>
        <div class="form-row three">
          <div class="field" id="fw-muni">
            <label>Municipio <span class="req">*</span></label>
            <select name="municipio" id="fMuni">
              <option value="">Selecciona municipio</option>
              <option>Adjuntas</option><option>Aguada</option><option>Aguadilla</option><option>Aguas Buenas</option><option>Aibonito</option><option>Añasco</option><option>Arecibo</option><option>Arroyo</option><option>Barceloneta</option><option>Barranquitas</option><option>Bayamón</option><option>Cabo Rojo</option><option>Caguas</option><option>Camuy</option><option>Canóvanas</option><option>Carolina</option><option>Cataño</option><option>Cayey</option><option>Ceiba</option><option>Ciales</option><option>Cidra</option><option>Coamo</option><option>Comerío</option><option>Corozal</option><option>Culebra</option><option>Dorado</option><option>Fajardo</option><option>Florida</option><option>Guánica</option><option>Guayama</option><option>Guayanilla</option><option>Guaynabo</option><option>Gurabo</option><option>Hatillo</option><option>Hormigueros</option><option>Humacao</option><option>Isabela</option><option>Jayuya</option><option>Juana Díaz</option><option>Juncos</option><option>Lajas</option><option>Lares</option><option>Las Marías</option><option>Las Piedras</option><option>Loíza</option><option>Luquillo</option><option>Manatí</option><option>Maricao</option><option>Maunabo</option><option>Mayagüez</option><option>Moca</option><option>Morovis</option><option>Naguabo</option><option>Naranjito</option><option>Orocovis</option><option>Patillas</option><option>Peñuelas</option><option>Ponce</option><option>Quebradillas</option><option>Rincón</option><option>Río Grande</option><option>Sabana Grande</option><option>Salinas</option><option>San Germán</option><option>San Juan</option><option>San Lorenzo</option><option>San Sebastián</option><option>Santa Isabel</option><option>Toa Alta</option><option>Toa Baja</option><option>Trujillo Alto</option><option>Utuado</option><option>Vega Alta</option><option>Vega Baja</option><option>Vieques</option><option>Villalba</option><option>Yabucoa</option><option>Yauco</option>
            </select>
            <span class="field-error-msg">Selecciona un municipio.</span>
          </div>
          <div class="field">
            <label>Sector / Urbanización</label>
            <input type="text" name="sector" placeholder="Urb. El Monte, Bo. Centro…">
          </div>
          <div class="field">
            <label>Código Postal</label>
            <input type="text" name="zip" placeholder="00000" maxlength="5">
          </div>
        </div>

        <div class="form-divider"></div>

        <!-- VENDER -->
        <div class="conditional-panel visible" id="panel-vender">
          <span class="form-section-label">Detalles de tu Propiedad</span>
          <div class="form-row">
            <div class="field"><label>Tipo de propiedad</label><select name="tipo_prop_v"><option value="">Selecciona</option><option>Residencia familiar</option><option>Apartamento / Condominio</option><option>Terreno / Solar</option><option>Propiedad comercial</option><option>Multifamiliar</option><option>Finca / Chalet</option><option>Otro</option></select></div>
            <div class="field"><label>Precio estimado</label><select name="precio_v"><option value="">Selecciona rango</option><option>Menos de $100,000</option><option>$100K – $175K</option><option>$175K – $250K</option><option>$250K – $400K</option><option>$400K – $600K</option><option>Más de $600K</option><option>No estoy seguro/a</option></select></div>
          </div>
          <div class="form-row three">
            <div class="field"><label>Habitaciones</label><select name="hab"><option value="">Sel.</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option><option>N/A</option></select></div>
            <div class="field"><label>Baños</label><select name="ban"><option value="">Sel.</option><option>1</option><option>2</option><option>3</option><option>3+</option><option>N/A</option></select></div>
            <div class="field"><label>¿Cuándo quieres vender?</label><select name="urgencia_v"><option value="">Selecciona</option><option>Lo antes posible</option><option>1 – 3 meses</option><option>3 – 6 meses</option><option>No tengo prisa</option><option>Solo explorando</option></select></div>
          </div>
        </div>

        <!-- COMPRAR -->
        <div class="conditional-panel" id="panel-comprar">
          <span class="form-section-label">¿Qué estás buscando?</span>
          <div class="form-row">
            <div class="field"><label>Tipo de propiedad</label><select name="tipo_prop_c"><option value="">Selecciona</option><option>Residencia familiar</option><option>Apartamento / Condominio</option><option>Terreno / Solar</option><option>Comercial</option><option>Multifamiliar / Inversión</option><option>Finca / Chalet</option><option>Abierto a opciones</option></select></div>
            <div class="field"><label>Presupuesto aproximado</label><select name="presupuesto_c"><option value="">Selecciona rango</option><option>Menos de $100K</option><option>$100K – $175K</option><option>$175K – $250K</option><option>$250K – $400K</option><option>$400K – $600K</option><option>Más de $600K</option><option>Aún no lo tengo claro</option></select></div>
          </div>
          <div class="form-row">
            <div class="field"><label>¿Ya tienes preaprobación?</label><select name="preaprobacion"><option value="">Selecciona</option><option>Sí, ya tengo preaprobación</option><option>En proceso</option><option>No, necesito orientación</option><option>Compra en efectivo</option></select></div>
            <div class="field"><label>¿Cuándo quieres comprar?</label><select name="urgencia_c"><option value="">Selecciona</option><option>Lo antes posible</option><option>1 – 3 meses</option><option>3 – 6 meses</option><option>No tengo prisa</option><option>Solo explorando</option></select></div>
          </div>
          <div class="field"><label>Características importantes</label>
            <div class="check-group" style="margin-top:.25rem">
              <label class="check-item"><input type="checkbox" name="feat[]" value="garage"><span>Garaje / Marquesina</span></label>
              <label class="check-item"><input type="checkbox" name="feat[]" value="piscina"><span>Piscina</span></label>
              <label class="check-item"><input type="checkbox" name="feat[]" value="patio"><span>Patio / Jardín</span></label>
              <label class="check-item"><input type="checkbox" name="feat[]" value="solar"><span>Energía Solar</span></label>
              <label class="check-item"><input type="checkbox" name="feat[]" value="cond"><span>Condominio cerrado</span></label>
              <label class="check-item"><input type="checkbox" name="feat[]" value="acc"><span>Accesibilidad</span></label>
            </div>
          </div>
        </div>

        <!-- ABANDONADA -->
        <div class="conditional-panel" id="panel-abandonada">
          <span class="form-section-label">Propiedad Abandonada</span>
          <div class="form-row">
            <div class="field"><label>Tu relación con la propiedad</label><select name="relacion"><option value="">Selecciona</option><option>Soy el dueño o heredero</option><option>Es de un familiar</option><option>La encontré y quiero reportarla</option><option>Otro</option></select></div>
            <div class="field"><label>Años abandonada</label><select name="anos"><option value="">Selecciona</option><option>Menos de 1 año</option><option>1 – 3 años</option><option>3 – 5 años</option><option>5 – 10 años</option><option>Más de 10 años</option><option>No estoy seguro/a</option></select></div>
          </div>
          <div class="form-row">
            <div class="field"><label>Tipo de propiedad</label><select name="tipo_ab"><option value="">Selecciona</option><option>Residencia</option><option>Solar / Terreno</option><option>Edificio / Multifamiliar</option><option>Comercial</option><option>Finca</option><option>No sé</option></select></div>
            <div class="field"><label>Estado de los títulos</label><select name="titulo"><option value="">Selecciona</option><option>Títulos claros</option><option>Problemas con el título</option><option>Herencia sin resolver</option><option>No lo sé</option></select></div>
          </div>
          <div class="form-row full">
            <div class="field"><label>¿Qué quieres lograr?</label><textarea name="objetivo_ab" placeholder="Cuéntanos tu situación. No tienes que tenerlo todo claro — para eso estamos nosotros."></textarea></div>
          </div>
        </div>

        <!-- OTRO -->
        <div class="conditional-panel" id="panel-otro">
          <span class="form-section-label">¿En qué podemos ayudarte?</span>
          <div class="form-row full">
            <div class="field"><label>Tu consulta</label><textarea name="mensaje_otro" placeholder="Escribe aquí tu consulta o situación. Respuesta personalizada garantizada."></textarea></div>
          </div>
        </div>

        <div class="form-divider"></div>
        <div class="form-row full">
          <div class="field"><label>Mensaje adicional (opcional)</label><textarea name="mensaje" placeholder="¿Algo más que quieras añadir?"></textarea></div>
        </div>

        <div class="consent-row">
          <input type="checkbox" id="fConsent" name="consent" required>
          <label for="fConsent" class="consent-text">Acepto que FIRME EN PROPÓSITO guarde mi información de contacto para dar seguimiento a esta consulta. Tu información no se comparte con terceros. <a href="#">Política de privacidad.</a></label>
        </div>

        <button type="submit" class="submit-btn" id="fSubmit">Enviar mi Consulta →</button>

        <div class="success-msg" id="fSuccess">
          <div class="success-icon">✓</div>
          <div class="success-title">¡Mensaje recibido!</div>
          <p class="success-sub">Rafael o su equipo se comunicarán contigo en un máximo de <strong style="color:var(--sand)">24 horas</strong>.<br>Gracias por confiar en FIRME EN PROPÓSITO.</p>
        </div>
        <div class="privacy-bar">
          <span class="privacy-icon">🔒</span>
          <p class="privacy-text">Tu información es privada y segura. No vendemos ni compartimos datos. FIRME EN PROPÓSITO, Puerto Rico.</p>
        </div>
      </form>
    </div>

    <!-- SIDEBAR -->
    <aside class="leads-sidebar">
      <div class="sidebar-card">
        <span class="sidebar-card-label">¿Por qué contactarnos?</span>
        <div class="sidebar-card-title">Respuesta real.<br>Sin rodeos.</div>
        <p>No recibirás una respuesta automática. Rafael y su equipo leen cada consulta y responden de forma personalizada.</p>
        <div class="sidebar-promise">
          <div class="promise-item"><div class="promise-dot"></div>Respuesta en menos de 24 hrs</div>
          <div class="promise-item"><div class="promise-dot"></div>Sin compromiso ni presión</div>
          <div class="promise-item"><div class="promise-dot"></div>Orientación honesta y directa</div>
          <div class="promise-item"><div class="promise-dot"></div>Cobertura en todo Puerto Rico</div>
          <div class="promise-item"><div class="promise-dot"></div>Propiedades en cualquier condición</div>
        </div>
      </div>
      <div class="sidebar-stats">
        <div class="sidebar-stat"><div class="stat-big">78</div><div class="stat-sm">Municipios</div></div>
        <div class="sidebar-stat"><div class="stat-big">24h</div><div class="stat-sm">Respuesta</div></div>
      </div>
      <div class="sidebar-card">
        <span class="sidebar-card-label">¿Prefieres hablar directo?</span>
        <div class="sidebar-card-title">Agenda una llamada de 15 minutos.</div>
        <p>Si tienes preguntas urgentes o prefieres conversar antes de llenar el formulario, reserva tu espacio.</p>
        <button class="sidebar-mini-btn" onclick="document.getElementById('agenda').scrollIntoView({behavior:'smooth'})">Ver disponibilidad →</button>
      </div>
    </aside>
  </div>
</section>

<!-- ═══════════ CONTABILIDAD ═══════════ -->
<section id="contabilidad">
  <div class="cs-grid reveal">
    <div>
      <div class="cs-badge"><div class="cs-dot"></div><span class="cs-badge-label">Coming Soon — En Construcción</span></div>
      <h2 class="cs-title">FEP Contabilidad<br>& Finanzas</h2>
      <p class="cs-desc">El dinero no se administra solo. Se entiende, se organiza y se dirige con claridad. La próxima división de FIRME EN PROPÓSITO llegará para darle estructura financiera a individuos y pequeños negocios que quieren crecer sin perderse en el camino.</p>
      <div class="cs-services">
        <div class="cs-service"><div class="cs-service-dot"></div><div class="cs-service-text">Contabilidad básica para individuos y pequeños negocios</div></div>
        <div class="cs-service"><div class="cs-service-dot"></div><div class="cs-service-text">Organización y estructura financiera personalizada</div></div>
        <div class="cs-service"><div class="cs-service-dot"></div><div class="cs-service-text">Educación financiera con propósito y dirección real</div></div>
        <div class="cs-service"><div class="cs-service-dot"></div><div class="cs-service-text">Planificación y visión a largo plazo con base sólida</div></div>
      </div>
    </div>
    <div class="cs-panel">
      <div class="cs-panel-num">FEP</div>
      <span class="cs-panel-tag">Contabilidad & Finanzas</span>
      <p>¿Quieres ser de las primeras personas en saber cuándo llegamos? Déjanos tu correo y te avisamos.</p>
      <input class="cs-input" type="email" id="csEmail" placeholder="Tu correo electrónico">
      <button class="cs-btn" onclick="handleCsEmail()">Notifícame cuando lancemos</button>
    </div>
  </div>
</section>

<!-- ═══════════ AGENDA ═══════════ -->
<section id="agenda">
  <div class="agenda-grid reveal">
    <div>
      <span class="label">Agenda 1:1 con Rafael</span>
      <div class="agenda-big-num">15</div>
      <h2 class="agenda-title">Una llamada que puede cambiar tu dirección.</h2>
      <p class="agenda-desc">No es una llamada de ventas. Es una conversación real. 15 minutos enfocados en ti, en lo que quieres lograr, en lo que te detiene y en los próximos pasos concretos. El tiempo de Rafael es limitado — y lo toma en serio.</p>
      <div class="agenda-topics">
        <div class="topic"><div class="topic-dash"></div>Orientación inicial en bienes raíces</div>
        <div class="topic"><div class="topic-dash"></div>Visión de inversión y oportunidades</div>
        <div class="topic"><div class="topic-dash"></div>Proceso de compra o venta</div>
        <div class="topic"><div class="topic-dash"></div>Dirección y estrategia de negocio</div>
        <div class="topic"><div class="topic-dash"></div>Dudas, claridad y próximos pasos</div>
      </div>
    </div>
    <div class="agenda-form">
      <div class="agenda-form-title">Reserva tu espacio</div>
      <div class="agenda-field">
        <label>Nombre completo</label>
        <input type="text" id="agNombre" placeholder="Tu nombre">
      </div>
      <div class="agenda-field">
        <label>Correo electrónico</label>
        <input type="email" id="agEmail" placeholder="tu@correo.com">
      </div>
      <div class="agenda-field">
        <label>¿Sobre qué quieres hablar?</label>
        <select id="agTema">
          <option value="">Selecciona un tema</option>
          <option>Comprar una propiedad</option>
          <option>Vender una propiedad</option>
          <option>Invertir en bienes raíces</option>
          <option>Visión y estrategia de negocio</option>
          <option>Otro tema</option>
        </select>
      </div>
      <button class="agenda-submit" onclick="handleAgenda()">Reservar Mi Llamada →</button>
      <p class="agenda-note">Solo hay un número limitado de espacios por semana. Recibirás confirmación en menos de 24 horas.</p>
      <div id="agSuccess" style="display:none;margin-top:1.5rem;padding:1.25rem;border:.5px solid rgba(74,124,89,.4);background:rgba(74,124,89,.06);text-align:center">
        <p style="font-size:.84rem;color:var(--sand)">¡Solicitud recibida! Te confirmamos pronto.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ ABOUT ═══════════ -->
<section id="about">
  <div class="about-grid reveal">
    <div class="about-portrait">
      <div class="portrait-initials">RV</div>
      <div class="portrait-tag">
        <div class="portrait-name">Rafael Valentín Bermúdez</div>
        <div class="portrait-role">Fundador · Corredor de Bienes Raíces</div>
      </div>
    </div>
    <div>
      <span class="label">Sobre el Fundador</span>
      <h2 class="about-title">Esto no fue<br>accidente.<br>Fue construcción.</h2>
      <div class="divider-line"></div>
      <div class="about-content">
        <p>Tengo 24 años, me gradué en contabilidad y soy corredor de bienes raíces. Pero FIRME EN PROPÓSITO no nació de un título ni de un logro. Nació de una decisión: la decisión de construir algo real, con propósito, con base y con visión a largo plazo.</p>
        <p>Empecé joven porque entendí algo temprano: que el tiempo es el activo más valioso, y que la disciplina es la única inversión que siempre da retorno. Cada transacción que cierro, cada propiedad que rehabilito y cada persona que asesoro forma parte de algo más grande que yo.</p>
        <p>No soy un "guru". No tengo fórmulas mágicas. Tengo trabajo, educación, honestidad y el compromiso de crecer junto a las personas que confían en mí. FIRME EN PROPÓSITO es lo que soy, lo que construyo y lo que quiero dejar en Puerto Rico.</p>
      </div>
      <div class="about-creds">
        <div class="cred"><div class="cred-label">Profesión</div><div class="cred-val">Corredor de Bienes Raíces</div></div>
        <div class="cred"><div class="cred-label">Educación</div><div class="cred-val">B.S. Contabilidad</div></div>
        <div class="cred"><div class="cred-label">Base</div><div class="cred-val">Puerto Rico</div></div>
        <div class="cred"><div class="cred-label">Enfoque</div><div class="cred-val">Bienes Raíces · Rehab · Finanzas</div></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ VISION ═══════════ -->
<section id="vision">
  <div class="vision-inner reveal">
    <span class="label" style="text-align:center">La Visión</span>
    <blockquote class="vision-quote">"FIRME EN PROPÓSITO no es lo que somos hoy.<br>Es <em>todo lo que estamos construyendo.</em>"</blockquote>
    <p class="vision-sub">Esta marca se construye con intención y se diseña para crecer. No improvisamos. Cada paso tiene propósito, cada división tiene estructura y cada persona que toca esta marca se lleva algo real.</p>
  </div>
  <div class="vision-pillars reveal" style="margin-top:5rem">
    <div class="vp-item">
      <span class="vp-num">I</span>
      <div class="vp-tag">Impacto en Puerto Rico</div>
      <p class="vp-text">Transformar propiedades, mercados y vidas en la isla. Dejar una marca tangible en cada comunidad que tocamos.</p>
    </div>
    <div class="vp-item">
      <span class="vp-num">II</span>
      <div class="vp-tag">Plataforma Multidivisional</div>
      <p class="vp-text">Bienes raíces, rehabilitación y contabilidad son solo el comienzo. La visión es una plataforma completa de crecimiento y estructura.</p>
    </div>
    <div class="vp-item">
      <span class="vp-num">III</span>
      <div class="vp-tag">Legado con Propósito</div>
      <p class="vp-text">No construimos para mañana. Construimos para que lo que hagamos hoy tenga valor dentro de 10 y 20 años.</p>
    </div>
  </div>
</section>

<!-- ═══════════ TESTIMONIALS ═══════════ -->
<section id="testimonials">
  <span class="label">Testimonios</span>
  <h2 class="serif" style="font-size:clamp(1.8rem,3vw,2.5rem);font-weight:300;color:var(--bone);line-height:1.2;margin-bottom:.75rem">Lo que dicen quienes<br>han trabajado conmigo.</h2>
  <div class="t-grid reveal">
    <div class="t-card">
      <p class="t-quote">"Rafael fue transparente desde el primer día. Nos explicó todo el proceso y cerró nuestra venta en tiempo récord. No fue solo nuestro agente, fue nuestro asesor."</p>
      <div class="t-author">
        <div class="t-avatar">MR</div>
        <div><div class="t-name">M. Rivera</div><div class="t-detail">Vendedor · Bayamón, PR</div></div>
      </div>
    </div>
    <div class="t-card t-placeholder"><div class="t-placeholder-text">Tu testimonio<br>aquí pronto</div></div>
    <div class="t-card t-placeholder"><div class="t-placeholder-text">Tu testimonio<br>aquí pronto</div></div>
  </div>
</section>

<!-- ═══════════ FOOTER ═══════════ -->
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-logo">Firme en <span>Propósito</span></div>
      <p class="footer-brand-desc">Una plataforma de bienes raíces, rehabilitación y finanzas construida con disciplina, visión y propósito desde Puerto Rico.</p>
    </div>
    <div class="footer-col">
      <h4>FEP Bienes Raíces</h4>
      <ul>
        <li><a href="#realty">FEP Realty</a></li>
        <li><a href="#realty">Propiedades Vendidas</a></li>
        <li><a href="#realty">FEP Rehab</a></li>
        <li><a href="#contacto">Enviar Propiedad</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>La Marca</h4>
      <ul>
        <li><a href="#brand">Nuestra Visión</a></li>
        <li><a href="#about">Rafael Valentín</a></li>
        <li><a href="#vision">El Futuro</a></li>
        <li><a href="#contabilidad">FEP Finanzas</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contacto</h4>
      <ul>
        <li><a href="#agenda">Agenda 1:1</a></li>
        <li><a href="#contacto">Enviar Consulta</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">WhatsApp</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2025 Firme en Propósito · Puerto Rico · Todos los derechos reservados</span>
    <span class="footer-tagline">Construido con intención.</span>
  </div>
</footer>

<!-- ═══════════════════════════════════════
     JAVASCRIPT
═══════════════════════════════════════ -->
<script>
/* NAV SCROLL */
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>60);
});

/* MOBILE NAV */
function toggleMobileNav(){
  document.getElementById('mobileNav').classList.toggle('open');
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
}

/* SCROLL REVEAL */
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');}});
},{threshold:.1,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

/* TYPE SWITCHER */
function switchType(type){
  document.querySelectorAll('.type-btn').forEach(b=>{
    b.classList.toggle('active',b.dataset.type===type);
  });
  document.querySelectorAll('.conditional-panel').forEach(p=>p.classList.remove('visible'));
  const t=document.getElementById('panel-'+type);
  if(t){t.classList.add('visible');}
  document.getElementById('tipoConsulta').value=type;
}

/* LEADS FORM VALIDATION */
function validateEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);}
function validatePhone(v){return v.replace(/\D/g,'').length>=10;}
function setErr(id,show){
  const w=document.getElementById('fw-'+id);
  if(w)w.classList.toggle('error',show);
}
function validateLeads(){
  let ok=true;
  const n=document.getElementById('fNombre').value.trim();
  const e=document.getElementById('fEmail').value.trim();
  const t=document.getElementById('fTel').value.trim();
  const m=document.getElementById('fMuni').value;
  if(!n){setErr('nombre',true);ok=false;}else{setErr('nombre',false);}
  if(!validateEmail(e)){setErr('email',true);ok=false;}else{setErr('email',false);}
  if(!validatePhone(t)){setErr('tel',true);ok=false;}else{setErr('tel',false);}
  if(!m){setErr('muni',true);ok=false;}else{setErr('muni',false);}
  return ok;
}
document.getElementById('leadsForm').addEventListener('submit',function(e){
  e.preventDefault();
  if(!document.getElementById('fConsent').checked||!validateLeads())return;
  const btn=document.getElementById('fSubmit');
  btn.disabled=true;btn.textContent='Enviando...';
  // ── INTEGRATION POINT: replace setTimeout with fetch('/api/leads', {...}) ──
  setTimeout(()=>{
    this.style.display='none';
    const s=document.getElementById('fSuccess');
    s.style.display='block';
    s.classList.add('visible');
    s.scrollIntoView({behavior:'smooth',block:'center'});
  },900);
});

/* PHONE FORMAT */
document.getElementById('fTel').addEventListener('input',function(){
  let v=this.value.replace(/\D/g,'').slice(0,10);
  if(v.length>=6)v='('+v.slice(0,3)+') '+v.slice(3,6)+'-'+v.slice(6);
  else if(v.length>=3)v='('+v.slice(0,3)+') '+v.slice(3);
  this.value=v;
});

/* AGENDA FORM */
function handleAgenda(){
  const n=document.getElementById('agNombre').value.trim();
  const e=document.getElementById('agEmail').value.trim();
  if(!n||!e)return;
  // ── INTEGRATION POINT ──
  document.getElementById('agSuccess').style.display='block';
}

/* CS EMAIL */
function handleCsEmail(){
  const e=document.getElementById('csEmail').value.trim();
  if(!e)return;
  const btn=event.target;
  btn.textContent='¡Listo! Te avisamos pronto.';
  btn.style.background='#4A7C59';
  btn.disabled=true;
}

/* SMOOTH ANCHOR SCROLL for footer/nav links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    const target=document.querySelector(this.getAttribute('href'));
    if(target)target.scrollIntoView({behavior:'smooth'});
  });
});
</script>
</body>
</html>
