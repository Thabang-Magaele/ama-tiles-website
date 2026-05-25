/* ================================================================
   AMA TILES — CONFIGURATION
   ----------------------------------------------------------------
   ▶ WHATSAPP_NUMBER — where quote requests & enquiries are sent.
     Full international format, digits only, no "+" and no spaces.
     South Africa country code = 27.
     Currently set to the factory line 013 796 0696.
     If your WhatsApp Business runs on a mobile (e.g. 082 123 4567)
     enter it as "27821234567".

   ▶ PALLET & DELIVERY — change these numbers any time:
       TILES_PER_PALLET      tiles in one pallet (pallets are strict
                             multiples of this)
       DELIVERY_TRIPS        2 = there-and-back (round trip)
       MAX_DELIVERY_PALLETS  largest order we will deliver
     No prices are shown on the site — AMA Tiles generates all
     pricing when the quote request is received.

   ▶ CLOUDINARY — house-plan uploads. When a customer uploads a plan
     it is sent to your Cloudinary account and a download link is
     added to the WhatsApp quote message. Both values come from your
     Cloudinary dashboard (Settings → Upload → unsigned preset).
     Leave either blank to disable uploads (the field hides itself).
   ================================================================ */
const WHATSAPP_NUMBER     = "27760915274";

const CLOUDINARY_CLOUD_NAME    = "da7rvgazf";
const CLOUDINARY_UPLOAD_PRESET = "ama_plans";

const TILES_PER_PALLET    = 200;
const DELIVERY_TRIPS      = 2;
const MAX_DELIVERY_PALLETS= 10;
const MAX_DELIVERY_TILES  = MAX_DELIVERY_PALLETS * TILES_PER_PALLET; // 2000

/* ---------- COLOUR PALETTE (for swatches & thumbs) ---------- */
/* ---------- COLOUR PALETTE ----------
   The 10 colours from the AMA Tiles colour chart. "mottle" gives the
   streaked look of the Cottage finishes. Every profile is available
   in every colour. */
const COLORS = {
  red:        {name:"Red",                hex:"#A8472E"},
  charcoal:   {name:"Charcoal",           hex:"#3D3E40"},
  terracotta: {name:"Terracotta",         hex:"#BC5F35"},
  brown:      {name:"Brown",              hex:"#5F4C3C"},
  tan:        {name:"Tan",                hex:"#C9A765"},
  grey:       {name:"Grey",               hex:"#8E8C85"},
  cotgrey:    {name:"Cottage Grey",       hex:"#9E9A90", mottle:true},
  cotbrown:   {name:"Cottage Brown",      hex:"#8A6E45", mottle:true},
  cotterra:   {name:"Cottage Terracotta", hex:"#A9572F", mottle:true},
  cottan:     {name:"Cottage Tan",        hex:"#B2A079", mottle:true},
};
/* every product can be ordered in any of these */
const ALL_COLORS = Object.keys(COLORS);

const PROFILES = [
  {key:"majorca", name:"Majorca", sku:"SK2", tagline:"Classic Spanish-style barrel", img:"images/sk2.png",
   desc:"A timeless single-wave roman barrel profile. Bold shadow lines and a warm, traditional silhouette suited to homes and estates."},
  {key:"double", name:"Double Roman", sku:"SK17", tagline:"Twin-wave architectural profile", img:"images/sk17.png",
   desc:"Two crisp barrel waves per tile for a rhythmic, contemporary roofscape — a striking, modern roofline."},
  {key:"flat", name:"Flat Goodtile", sku:"SK10", tagline:"Sleek modern flat profile", img:"images/sk10.png",
   desc:"A clean, low-profile flat tile for a refined, contemporary look that suits modern architecture."},
  {key:"flatrustic", name:"Flat Goodtile Rustic", sku:"SK11", tagline:"Textured rustic flat profile", img:"images/sk11.png",
   desc:"The Flat Goodtile with a rustic textured face — added depth and character while keeping the low, modern profile."},
];

/* ---------- PRODUCTS ----------
   cat: tiles | accessories.  Every product is offered in all 10
   colours (chosen on the card). Add a photo: set img to a filename. */
const PRODUCTS = [
  // --- Roof tile profiles ---
  {sku:"SK2",  cat:"tiles", profile:"Majorca",              customName:"Majorca",              img:"images/sk2.png"},
  {sku:"SK17", cat:"tiles", profile:"Double Roman",         customName:"Double Roman",         img:"images/sk17.png"},
  {sku:"SK10", cat:"tiles", profile:"Flat Goodtile",        customName:"Flat Goodtile",        img:"images/sk10.png"},
  {sku:"SK11", cat:"tiles", profile:"Flat Goodtile Rustic", customName:"Flat Goodtile Rustic", img:"images/sk11.png"},
  // --- Ridging & fittings ---
  {sku:"SK20", cat:"accessories", profile:"Ridging & Fittings", customName:"Taper Ridge",    img:"images/sk20.png"},
  {sku:"SK22", cat:"accessories", profile:"Ridging & Fittings", customName:"Hip Starter",    img:"images/sk22.png"},
  {sku:"SK21", cat:"accessories", profile:"Ridging & Fittings", customName:"Rake Verge",     img:"images/sk21.png"},
  {sku:"SK23", cat:"accessories", profile:"Ridging & Fittings", customName:"V/Ridge",        img:"images/sk23.png"},
  {sku:"SK24", cat:"accessories", profile:"Ridging & Fittings", customName:"V/Hip Starter",  img:"images/sk24.png"},
];

const FILTERS = [
  {key:"all",         label:"All Products"},
  {key:"tiles",       label:"Roof Tiles"},
  {key:"accessories", label:"Ridging & Fittings"},
];

/* ---------- PROJECTS ----------
   The completed projects shown on amatiles.co.za. Each img points to
   the photo on the live AMA Tiles site. To host the photos yourself,
   download them and replace each img with your own filename. */
const HOST = "https://amatiles.co.za/wp-content/uploads/2025/01/";
const PROJECTS = [
  {name:"Rubicon Retirement Village", location:"Nelspruit", tile:"Lowveld Mix",
   img:HOST+"Rubicon-Retirement-Villiage-Nelspruit-Lowveld-Mix-1.jpg"},
  {name:"Sillbury Hill", location:"Nelspruit", tile:"Flat Goodtile · Cottage Terracotta",
   img:HOST+"Sillbury-Hill-Nelspruit-SK10-13-Flat-Gootile-Cottage-Terracotta-1.jpg"},
  {name:"Stonehenge", location:"Nelspruit", tile:"Double Roman · Brown",
   img:HOST+"Stonehenge-Nelspruit-SK17-04-Double-Roman-Brown.jpg"},
  {name:"Fever Tree Estate", location:"Nelspruit", tile:"Majorca · Charcoal",
   img:HOST+"Fever-Tree-Estate-Nelpsruit-SK17-02-Double-Roman-Charcoal-1.jpg"},
  {name:"Pamushane Estate", location:"White River", tile:"Flat Goodtile · Rustic Charcoal",
   img:HOST+"Pamushane-Estate-White-River-SK10-02-Flat-Gootile-Brown-1.jpg"},
  {name:"Sonyaka Estate", location:"White River", tile:"Flat Goodtile · Rustic Cottage",
   img:HOST+"Sonyaka-Estate-White-River-SK10-04-Flat-Gootile-Brown-1.jpg"},
  {name:"Residential", location:"Nelspruit", tile:"Double Roman · Maroon",
   img:HOST+"Residential-Nelspruit-SK17-08-Double-Roman-Maroon-1.jpg"},
  {name:"Siteke Hospital", location:"Swaziland", tile:"Double Roman · Red",
   img:HOST+"Siteke-Hospital-Swaziland-SK17-01-Double-Roman-Red.jpg"},
  {name:"Lifestyle Centre", location:"Karino", tile:"Double Roman · Cottage Grey",
   img:HOST+"Karino-Lifestyle-Centre-SK17-05-Double-Roman-Cottage-Grey.jpg"},
  {name:"Orchards Shopping Mall", location:"Nelspruit", tile:"Double Roman · Terracotta",
   img:HOST+"Orchards-Shopping-Mall-Nelspruit-SK17-03-Double-Roman-Terracotta.jpg"},
  {name:"Residential", location:"Hazyview", tile:"Flat Goodtile · Cottage Grey",
   img:HOST+"Matumi-Golf-Estate-Nelspruit-SK11-14-Flat-Gootile-Cottage-Grey.jpg"},
  {name:"Residential", location:"Sabie", tile:"Flat Goodtile · Cottage Grey",
   img:HOST+"Golf-Estate-White-River-SK10-18-Flat-Gootile-Cottage-Green-1.jpg"},
];

/* ================================================================
   HELPERS
   ================================================================ */
const $=id=>document.getElementById(id);

function shade(hex,p){
  const n=parseInt(hex.slice(1),16);
  let r=(n>>16)&255,g=(n>>8)&255,b=n&255;
  r=Math.round(r*(1+p));g=Math.round(g*(1+p));b=Math.round(b*(1+p));
  const c=v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,"0");
  return "#"+c(r)+c(g)+c(b);
}
function swatchBg(colorKey){
  const c=COLORS[colorKey];
  return c.mottle
    ? `radial-gradient(circle at 35% 30%, ${shade(c.hex,.4)}, ${shade(c.hex,-.32)})`
    : `linear-gradient(160deg, ${shade(c.hex,.2)}, ${shade(c.hex,-.24)})`;
}
/* "3 pallets" / "1 pallet" */
function palletWord(n){ return n+" pallet"+(n!==1?"s":""); }
/* "600 tiles" / "1 tile" */
function tileWord(n){ return n+" tile"+(n!==1?"s":""); }
/* describe a tile count in pallet terms (whole or fractional) */
function palletStr(tiles){
  const p=tiles/TILES_PER_PALLET;
  if(Number.isInteger(p)) return palletWord(p);
  return (Math.round(p*100)/100)+" pallets";
}
function placeholderSVG(label){
  return `<div class="ph">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.6"/><path d="m21 15-5-5L5 21"/></svg>
    <span>${label}</span>
  </div>`;
}

/* ================================================================
   RENDER — HERO GRID
   ================================================================ */
(function(){
  const keys=["terracotta","red","charcoal","brown","tan","grey",
              "cotterra","cotgrey","terracotta","charcoal","cotbrown","red"];
  $("heroGrid").innerHTML=keys.map(k=>
    `<div style="background:${swatchBg(k)}"></div>`).join("");
})();

/* ================================================================
   RENDER — PROFILES
   ================================================================ */
$("profilesGrid").innerHTML = PROFILES.map(p=>`
  <div class="profile-card reveal" data-sku="${p.sku}">
    <div class="pc-visual">
      ${p.img ? `<img src="${p.img}" alt="${p.name} roof tile" />`
              : placeholderSVG("Add "+p.name+" photo")}
    </div>
    <span class="p-prof" style="font-size:.72rem">${p.sku} &middot; ${p.tagline}</span>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <span class="pc-link">View in catalogue
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </span>
  </div>`).join("");
document.querySelectorAll(".profile-card").forEach(card=>{
  card.addEventListener("click",()=>{
    setFilter("tiles");
    $("products").scrollIntoView({behavior:"smooth"});
  });
});

/* ================================================================
   RENDER — FILTERS & PRODUCTS
   ================================================================ */
let activeFilter="all";
const cardQty={};      // product index -> tile quantity
const cardPallet={};   // product index -> true if ordering by pallet
const cardColor={};    // product index -> chosen colour key

function buildFilters(){
  $("filters").innerHTML=FILTERS.map(f=>
    `<button class="filter ${f.key===activeFilter?'active':''}" data-f="${f.key}">${f.label}</button>`
  ).join("");
  document.querySelectorAll(".filter").forEach(b=>
    b.addEventListener("click",()=>setFilter(b.dataset.f)));
}
function setFilter(key){
  activeFilter=key;
  document.querySelectorAll(".filter").forEach(b=>
    b.classList.toggle("active",b.dataset.f===key));
  renderProducts();
}
function productName(p){ return p.customName || p.profile; }

/* helper text under the quantity control */
function cardHelpText(idx){
  if(cardPallet[idx]){
    const pal=Math.max(1,Math.round((cardQty[idx]||TILES_PER_PALLET)/TILES_PER_PALLET));
    return `<b>${palletWord(pal)}</b> &nbsp;·&nbsp; ${pal*TILES_PER_PALLET} tiles total`;
  }
  const q=Math.max(1,cardQty[idx]||1);
  return `<b>${tileWord(q)}</b> &nbsp;·&nbsp; loose (not palletised)`;
}
function refreshHelp(idx){
  const el=document.querySelector(`[data-help="${idx}"]`);
  if(el) el.innerHTML=cardHelpText(idx);
}

function renderProducts(){
  const list = activeFilter==="all" ? PRODUCTS
             : PRODUCTS.filter(p=>p.cat===activeFilter);
  $("productGrid").innerHTML=list.map(p=>{
    const idx=PRODUCTS.indexOf(p);
    if(cardPallet[idx]===undefined) cardPallet[idx]=false;     // default: single tiles
    if(cardQty[idx]===undefined)    cardQty[idx]=1;
    if(cardColor[idx]===undefined)  cardColor[idx]=ALL_COLORS[0];
    const byPallet=cardPallet[idx];
    const curColor=cardColor[idx];

    // every product is available in all 10 colours
    const colorBlock=`<div class="p-colorsel">
      <label>Choose colour</label>
      <div class="p-colorrow">
        <span class="p-swatch" data-swatch="${idx}" style="background:${swatchBg(curColor)}"></span>
        <select data-colorsel="${idx}">
          ${ALL_COLORS.map(ck=>
            `<option value="${ck}" ${ck===curColor?"selected":""}>${COLORS[ck].name}</option>`).join("")}
        </select>
      </div></div>`;

    const stepperVal = byPallet
      ? Math.max(1,Math.round(cardQty[idx]/TILES_PER_PALLET))
      : Math.max(1,cardQty[idx]);
    const qtyLabel = byPallet ? "Number of pallets" : "Quantity (tiles)";
    const quickChips = byPallet
      ? `<button type="button" data-set="${idx}" data-v="1">1 pallet</button>
         <button type="button" data-set="${idx}" data-v="5">5 pallets</button>
         <button type="button" data-set="${idx}" data-v="10">10 pallets</button>`
      : `<button type="button" data-set="${idx}" data-v="1">1 tile</button>
         <button type="button" data-set="${idx}" data-v="25">25 tiles</button>
         <button type="button" data-set="${idx}" data-v="100">100 tiles</button>`;

    return `<article class="product">
      <div class="p-visual">
        <span class="p-sku">${p.sku}</span>
        ${p.img ? `<img src="${p.img}" alt="${p.profile}" />`
                : placeholderSVG("Add photo")}
      </div>
      <div class="p-body">
        <span class="p-prof">${p.cat==="accessories"?"Ridging & Fittings":"Roof Tile"}</span>
        <span class="p-name">${productName(p)}</span>
        ${colorBlock}

        <div class="p-pallet">
          <span class="p-pallet-q">Would you like a pallet?</span>
          <div class="p-toggle" role="group" aria-label="Order by pallet">
            <button type="button" class="${!byPallet?'on':''}" data-pallet="${idx}" data-v="0">No</button>
            <button type="button" class="${byPallet?'on':''}" data-pallet="${idx}" data-v="1">Yes</button>
          </div>
        </div>
        <p class="p-pallet-note">${byPallet
          ? "Sold in pallets of "+TILES_PER_PALLET+" tiles."
          : "Buy any number of loose tiles, from 1 up."}</p>

        <div class="p-qty-wrap">
          <label>${qtyLabel}</label>
          <div class="p-stepper">
            <button type="button" data-step="${idx}" data-d="-1" aria-label="Less">&minus;</button>
            <input type="number" min="1" value="${stepperVal}" data-cardqty="${idx}" />
            <button type="button" data-step="${idx}" data-d="1" aria-label="More">+</button>
          </div>
          <div class="p-quick">${quickChips}</div>
          <div class="p-help" data-help="${idx}">${cardHelpText(idx)}</div>
        </div>
        <button class="btn btn-dark p-add" data-add="${idx}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          Add to Quote
        </button>
      </div>
    </article>`;
  }).join("");

  // colour select -> update swatch preview
  document.querySelectorAll("[data-colorsel]").forEach(sel=>{
    sel.addEventListener("change",()=>{
      const idx=sel.dataset.colorsel;
      cardColor[idx]=sel.value;
      const sw=document.querySelector(`[data-swatch="${idx}"]`);
      if(sw) sw.style.background=swatchBg(sel.value);
    });
  });

  // pallet Yes/No toggle
  document.querySelectorAll("[data-pallet]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx=btn.dataset.pallet, want=btn.dataset.v==="1";
      if(cardPallet[idx]===want) return;
      cardPallet[idx]=want;
      if(want){
        const pal=Math.max(1,Math.round(cardQty[idx]/TILES_PER_PALLET));
        cardQty[idx]=pal*TILES_PER_PALLET;
      }else{
        cardQty[idx]=Math.max(1,cardQty[idx]);
      }
      renderProducts();
    });
  });

  // quantity typed
  document.querySelectorAll("[data-cardqty]").forEach(inp=>{
    inp.addEventListener("input",()=>{
      const idx=inp.dataset.cardqty;
      let v=parseInt(inp.value)||0;
      cardQty[idx]=cardPallet[idx] ? v*TILES_PER_PALLET : v;
      refreshHelp(idx);
    });
    inp.addEventListener("blur",()=>{
      const idx=inp.dataset.cardqty;
      let unit=cardPallet[idx]?TILES_PER_PALLET:1;
      if(!cardQty[idx]||cardQty[idx]<unit){ cardQty[idx]=unit; inp.value=1; }
      refreshHelp(idx);
    });
  });
  // stepper +/-
  document.querySelectorAll("[data-step]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx=btn.dataset.step, d=parseInt(btn.dataset.d);
      const unit=cardPallet[idx]?TILES_PER_PALLET:1;
      cardQty[idx]=Math.max(unit,(cardQty[idx]||unit)+d*unit);
      document.querySelector(`[data-cardqty="${idx}"]`).value=cardQty[idx]/unit;
      refreshHelp(idx);
    });
  });
  // quick-set chips (value is in the active unit)
  document.querySelectorAll("[data-set]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx=btn.dataset.set;
      const unit=cardPallet[idx]?TILES_PER_PALLET:1;
      cardQty[idx]=parseInt(btn.dataset.v)*unit;
      document.querySelector(`[data-cardqty="${idx}"]`).value=parseInt(btn.dataset.v);
      refreshHelp(idx);
    });
  });
  // add to quote
  document.querySelectorAll("[data-add]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx=btn.dataset.add;
      const p=PRODUCTS[idx];
      const unit=cardPallet[idx]?TILES_PER_PALLET:1;
      let qty=Math.max(unit,parseInt(cardQty[idx])||unit);
      const colorKey=cardColor[idx]||ALL_COLORS[0];
      addToQuote(p,colorKey,qty,cardPallet[idx]);
      btn.classList.add("added");
      btn.innerHTML=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Added to quote`;
      setTimeout(()=>{
        btn.classList.remove("added");
        btn.innerHTML=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg> Add to Quote`;
      },1300);
    });
  });
}

/* ================================================================
   RENDER — PROJECTS
   ================================================================ */
$("projectsGrid").innerHTML = PROJECTS.map((pr,i)=>`
  <article class="project reveal" style="transition-delay:${(i%3)*70}ms">
    <div class="proj-media">
      ${pr.img
        ? `<img src="${pr.img}" alt="${pr.name}, ${pr.location}" loading="lazy" />`
        : placeholderSVG("Add project photo")}
      <span class="proj-tile">${pr.tile}</span>
      <div class="proj-grad"></div>
      <div class="proj-caption">
        <h4>${pr.name}</h4>
        <span class="proj-loc">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z"/></svg>
          ${pr.location}
        </span>
      </div>
    </div>
  </article>`).join("");

/* ================================================================
   QUOTE LIST
   ================================================================ */
const quote = new Map();   // key -> {profile,name,colorKey,colorName,sku,qty,palletised}
let housePlan = null;

function quoteKey(p,colorKey,palletised){
  return p.sku+"::"+colorKey+"::"+(palletised?"P":"L");
}

function addToQuote(p,colorKey,qty,palletised){
  const k=quoteKey(p,colorKey,palletised);
  if(quote.has(k)){ quote.get(k).qty += qty; }
  else{
    quote.set(k,{
      profile:p.profile,
      name:productName(p),
      colorKey:colorKey,
      colorName:COLORS[colorKey].name,
      sku:p.sku,
      qty:qty,
      palletised:!!palletised
    });
  }
  updateCart();
  if(($("drawer")).classList.contains("open")) renderDrawer();
  showToast(palletised
    ? palletWord(qty/TILES_PER_PALLET)+" added to quote"
    : tileWord(qty)+" added to quote");
}
function setQty(k,v){
  if(!quote.has(k))return;
  const it=quote.get(k);
  v=parseInt(v)||0;
  if(it.palletised){
    // strict multiples of a pallet
    v=Math.round(v/TILES_PER_PALLET)*TILES_PER_PALLET;
  }
  if(v<=0){ quote.delete(k); }
  else{ it.qty=v; }
  updateCart(); renderDrawer();
}
function quoteStats(){
  let tiles=0;
  quote.forEach(i=>tiles+=i.qty);
  return {tiles, pallets:tiles/TILES_PER_PALLET};
}
function updateCart(){
  const {tiles}=quoteStats();
  const badge=$("cartCount");
  if(tiles>0){
    badge.style.display="flex"; badge.textContent=tiles>999?"999+":tiles;
    badge.classList.add("pop"); setTimeout(()=>badge.classList.remove("pop"),200);
  }else{ badge.style.display="none"; }
  $("drawerSub").textContent = quote.size
    ? quote.size+" line"+(quote.size>1?"s":"")+" · "+tileWord(tiles)
    : "No items yet";
}

function renderDrawer(){
  const body=$("drawerBody"), foot=$("drawerFoot");
  if(quote.size===0){
    foot.style.display="none";
    body.innerHTML=`<div class="q-empty">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
      <p>Your quote list is empty.<br>Add tiles and fittings from the catalogue to build a request.</p>
    </div>`;
    return;
  }
  foot.style.display="block";
  let html="";
  quote.forEach((it,k)=>{
    const step=it.palletised?TILES_PER_PALLET:1;
    const qtyLine=it.palletised
      ? palletWord(it.qty/TILES_PER_PALLET)+" &middot; "+it.qty+" tiles"
      : tileWord(it.qty)+" &middot; loose";
    html+=`<div class="q-item">
      <div class="q-thumb" style="background:${swatchBg(it.colorKey)}"></div>
      <div class="q-info">
        <span class="qp">${it.profile}</span>
        <h4>${it.name}</h4>
        <span class="qsku">${it.sku} · ${it.colorName}</span>
        <div class="q-controls">
          <div class="qty">
            <button data-dec="${k}">&minus;</button>
            <input type="number" min="1" value="${it.qty}" data-qty="${k}" data-step="${step}" />
            <button data-inc="${k}">+</button>
          </div>
          <button class="q-remove" data-rm="${k}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>
            Remove
          </button>
        </div>
        <div class="q-line">
          <span class="qpall ${it.palletised?'is-pallet':''}">${qtyLine}</span>
        </div>
      </div>
    </div>`;
  });
  body.innerHTML=html;

  body.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{
    const k=b.dataset.inc,it=quote.get(k);
    setQty(k,it.qty+(it.palletised?TILES_PER_PALLET:1));});
  body.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{
    const k=b.dataset.dec,it=quote.get(k);
    setQty(k,it.qty-(it.palletised?TILES_PER_PALLET:1));});
  body.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>setQty(b.dataset.rm,0));
  body.querySelectorAll("[data-qty]").forEach(inp=>inp.onchange=()=>
    setQty(inp.dataset.qty,inp.value));

  updateTotals();
}

/* delivery + summary block (no pricing — AMA quotes the cost) */
function updateTotals(){
  const {tiles,pallets}=quoteStats();
  const km=parseFloat($("qKm").value)||0;
  const overLimit = pallets > MAX_DELIVERY_PALLETS;

  const info=$("deliveryInfo");
  if(overLimit){
    info.className="deliv-info warn";
    info.innerHTML=`<b>Order exceeds ${MAX_DELIVERY_PALLETS} pallets</b>
      (${palletStr(tiles)}). Delivery isn't available for orders this size —
      please arrange your own transport or collection from the factory.
      Our team will gladly help load.`;
  }else if(km>0){
    info.className="deliv-info ok";
    info.innerHTML=`Site is <b>${km} km</b> away — that's a
      <b>${km*DELIVERY_TRIPS} km round trip</b>. AMA Tiles will confirm the
      delivery fee in your quote.`;
  }else{
    info.className="deliv-info neutral";
    info.innerHTML=`Enter the distance to your site so we can work out delivery.
      We deliver orders up to ${MAX_DELIVERY_PALLETS} pallets.`;
  }

  let deliveryRow;
  if(overLimit){
    deliveryRow=`<div class="qt-row muted-fee"><span>Delivery</span><b>Own transport required</b></div>`;
  }else if(km>0){
    deliveryRow=`<div class="qt-row"><span>Delivery distance</span><b>${km} km (one way)</b></div>`;
  }else{
    deliveryRow=`<div class="qt-row"><span>Delivery</span><b>Add distance above</b></div>`;
  }
  $("qTotals").innerHTML=`
    <div class="qt-row"><span>Total tiles</span><b>${tiles}</b></div>
    <div class="qt-row"><span>Equivalent</span><b>${palletStr(tiles)}</b></div>
    ${deliveryRow}
    <div class="qt-row grand"><span>Pricing</span><b>Quoted by AMA Tiles</b></div>`;
}

/* ---------- house plan upload (Cloudinary) ---------- */
const CLOUD_READY = CLOUDINARY_CLOUD_NAME.trim() !== "" &&
                    CLOUDINARY_UPLOAD_PRESET.trim() !== "";
const MAX_PLAN_MB = 10;

/* housePlan states:
   {status:"uploading", name}
   {status:"done", name, url}
   {status:"error", name}            */

$("qPlan").addEventListener("change",e=>{
  const f=e.target.files[0];
  if(!f) return;

  if(f.size > MAX_PLAN_MB*1024*1024){
    showToast("File is too large (max "+MAX_PLAN_MB+" MB)");
    $("qPlan").value="";
    return;
  }
  if(!CLOUD_READY){
    // fallback: no Cloudinary configured — keep manual-attach flow
    housePlan={status:"local", name:f.name};
    renderPlanChip();
    return;
  }

  housePlan={status:"uploading", name:f.name};
  renderPlanChip();
  uploadPlan(f);
});

function uploadPlan(file){
  const data=new FormData();
  data.append("file",file);
  data.append("upload_preset",CLOUDINARY_UPLOAD_PRESET);
  data.append("folder","house-plans");

  fetch("https://api.cloudinary.com/v1_1/"+CLOUDINARY_CLOUD_NAME+"/auto/upload",
        {method:"POST",body:data})
    .then(r=>{ if(!r.ok) throw new Error("upload failed"); return r.json(); })
    .then(json=>{
      housePlan={status:"done", name:file.name, url:json.secure_url};
      renderPlanChip();
      showToast("House plan uploaded");
    })
    .catch(()=>{
      housePlan={status:"error", name:file.name};
      renderPlanChip();
      showToast("Upload failed — please try again");
    });
}

function renderPlanChip(){
  const box=$("planChip");
  if(!housePlan){ box.innerHTML=""; return; }
  const xBtn=`<button id="rmPlan" aria-label="Remove plan">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>`;
  const fileIcon=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`;

  if(housePlan.status==="uploading"){
    box.innerHTML=`<div class="plan-chip uploading">
        <span class="plan-spin"></span>
        <span class="pn">Uploading ${housePlan.name}…</span>
      </div>`;
    return;
  }
  if(housePlan.status==="error"){
    box.innerHTML=`<div class="plan-chip error">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
        <span class="pn">Upload failed — ${housePlan.name}</span>
        ${xBtn}
      </div>
      <p class="plan-hint">Something went wrong. Remove this and try uploading again.</p>`;
    $("rmPlan").onclick=clearPlan;
    return;
  }
  if(housePlan.status==="local"){
    box.innerHTML=`<div class="plan-chip">
        ${fileIcon}<span class="pn">${housePlan.name}</span>${xBtn}
      </div>
      <p class="plan-hint">Selected. When WhatsApp opens, tap the attachment (📎)
        icon and send this file so our team can size your order.</p>`;
    $("rmPlan").onclick=clearPlan;
    return;
  }
  // done
  box.innerHTML=`<div class="plan-chip done">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
      <span class="pn">${housePlan.name}</span>${xBtn}
    </div>
    <p class="plan-hint">Uploaded ✓ A download link to your plan will be included
      in the WhatsApp message automatically.</p>`;
  $("rmPlan").onclick=clearPlan;
}
function clearPlan(){ housePlan=null; $("qPlan").value=""; renderPlanChip(); }

/* ================================================================
   WHATSAPP SENDERS
   ================================================================ */
function waLink(text){
  return "https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(text);
}
function sendQuote(){
  if(quote.size===0){ showToast("Add products to your quote first"); return; }
  const name=$("qName").value.trim();
  const phone=$("qPhone").value.trim();
  if(!name||!phone){
    showToast("Please add your name and phone number");
    (!name?$("qName"):$("qPhone")).focus();
    return;
  }
  if(housePlan && housePlan.status==="uploading"){
    showToast("Your house plan is still uploading — one moment");
    return;
  }
  const place=$("qPlace").value.trim();
  const note=$("qNote").value.trim();
  const km=parseFloat($("qKm").value)||0;
  const {tiles,pallets}=quoteStats();
  const overLimit=pallets>MAX_DELIVERY_PALLETS;

  let msg="*REQUEST FOR QUOTATION — AMA TILES*\n\n";
  msg+="*Name:* "+name+"\n*Phone:* "+phone+"\n";
  if(place) msg+="*Delivery area:* "+place+"\n";
  if(km>0)  msg+="*Distance to site:* "+km+" km (one way)\n";

  msg+="\n*Items requested:*\n";
  let n=1;
  quote.forEach(it=>{
    const qtyStr = it.palletised
      ? palletWord(it.qty/TILES_PER_PALLET)+" ("+it.qty+" tiles)"
      : tileWord(it.qty)+" (loose)";
    msg+=n+". "+it.name+" — "+it.colorName+"\n";
    msg+="   "+it.sku+" · "+qtyStr+"\n";
    n++;
  });

  msg+="\n*Total tiles:* "+tiles+"  ("+palletStr(tiles)+")\n";
  if(overLimit){
    msg+="*Delivery:* Over "+MAX_DELIVERY_PALLETS+" pallets — own transport / collection to be arranged\n";
  }else if(km>0){
    msg+="*Delivery:* "+km+" km to site — please confirm the delivery fee\n";
  }else{
    msg+="*Delivery:* To be discussed\n";
  }

  if(housePlan){
    if(housePlan.status==="done" && housePlan.url){
      msg+="\n📐 *House plan:* "+housePlan.url+"\n"
          +"(Uploaded — please open the link to view "+housePlan.name+" and confirm the quantity.)\n";
    }else if(housePlan.status==="local"){
      msg+="\n📐 *House plan:* I have a plan to share ("+housePlan.name
          +") — I'll attach it in this chat so you can confirm the quantity.\n";
    }
  }
  if(note) msg+="\n*Notes:* "+note+"\n";
  msg+="\nPlease send me a full quotation with pricing. Thank you!";

  window.open(waLink(msg),"_blank");
}
function sendEnquiry(){
  const name=$("enqName").value.trim();
  const phone=$("enqPhone").value.trim();
  const place=$("enqPlace").value.trim();
  const topic=$("enqTopic").value;
  const text=$("enqMsg").value.trim();
  if(!name||!phone){
    showToast("Please add your name and phone number");
    (!name?$("enqName"):$("enqPhone")).focus();
    return;
  }
  let msg="*GENERAL ENQUIRY — AMA TILES*\n\n";
  msg+="*Name:* "+name+"\n*Phone:* "+phone+"\n";
  if(place) msg+="*Area:* "+place+"\n";
  msg+="*Enquiry about:* "+topic+"\n";
  if(text) msg+="\n*Message:*\n"+text+"\n";
  msg+="\nPlease get back to me. Thank you!";
  window.open(waLink(msg),"_blank");
}
$("sendQuote").onclick=sendQuote;
$("sendEnquiry").onclick=sendEnquiry;
$("qKm").addEventListener("input",()=>{ if(quote.size) updateTotals(); });

/* ================================================================
   DRAWER / NAV / MISC
   ================================================================ */
function openDrawer(){
  renderDrawer();
  $("drawer").classList.add("open");
  $("overlay").classList.add("open");
  document.body.style.overflow="hidden";
}
function closeDrawer(){
  $("drawer").classList.remove("open");
  $("overlay").classList.remove("open");
  document.body.style.overflow="";
}
$("openCart").onclick=openDrawer;
$("closeCart").onclick=closeDrawer;
$("overlay").onclick=closeDrawer;
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeDrawer(); });

let toastT;
function showToast(m){
  $("toastMsg").textContent=m;
  $("toast").classList.add("show");
  clearTimeout(toastT);
  toastT=setTimeout(()=>$("toast").classList.remove("show"),2600);
}

window.addEventListener("scroll",()=>{
  $("header").classList.toggle("scrolled",window.scrollY>40);
});
$("burger").onclick=()=>{
  $("navLinks").classList.toggle("open");
  $("burger").classList.toggle("active");
};
document.querySelectorAll(".nav-links a").forEach(a=>
  a.addEventListener("click",()=>$("navLinks").classList.remove("open")));

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in");
    io.unobserve(e.target);}});
},{threshold:.12});
function observeReveals(){
  document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el));
}

/* ---------- INIT ---------- */
buildFilters();
renderProducts();
updateCart();
observeReveals();
$("year").textContent=new Date().getFullYear();