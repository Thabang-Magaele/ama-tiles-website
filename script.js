/* ================================================================
   AMA TILES — CONFIGURATION
   ----------------------------------------------------------------
   ▶ WHATSAPP_NUMBER: the WhatsApp Business number that quote
     requests and enquiries are sent to. Full international format,
     digits only, no "+" and no spaces.
     South Africa country code = 27.
     (Currently set to the factory line 013 796 0696.)
     If your WhatsApp is on a mobile, e.g. 082 123 4567,
     enter it as "27821234567".
   ================================================================ */
const WHATSAPP_NUMBER = "27137960696";

/* ---------- COLOUR PALETTE (visual swatches) ---------- */
const COLORS = {
  red:        {name:"Red",               hex:"#9C3A2B"},
  charcoal:   {name:"Charcoal",          hex:"#3A3B3D"},
  terracotta: {name:"Terracotta",        hex:"#BE6038"},
  brown:      {name:"Brown",             hex:"#6E5544"},
  grey:       {name:"Grey",              hex:"#9A988E"},
  tan:        {name:"Tan",               hex:"#C7A877"},
  cotterra:   {name:"Cottage Terracotta",hex:"#B05C3E", mottle:true},
  cotgrey:    {name:"Cottage Grey",      hex:"#A29E91", mottle:true},
  cotred:     {name:"Cottage Red",       hex:"#9E4334", mottle:true},
  rusticchar: {name:"Rustic Charcoal",   hex:"#43413F", mottle:true},
  rusticterra:{name:"Rustic Terracotta", hex:"#A85B39", mottle:true},
  rusticbrown:{name:"Rustic Cottage Brown",hex:"#7A634D", mottle:true},
  lowveld:    {name:"Lowveld Mix",       hex:"#A85F3F", mottle:true},
};

/* ---------- TILE VISUAL (SVG, tinted) ---------- */
function shade(hex,p){
  const n=parseInt(hex.slice(1),16);
  let r=(n>>16)&255,g=(n>>8)&255,b=n&255;
  r=Math.round(r*(1+p));g=Math.round(g*(1+p));b=Math.round(b*(1+p));
  const c=v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,"0");
  return "#"+c(r)+c(g)+c(b);
}
/* profile: barrel = 1 wave (Majorca), double = 2 waves (Double Roman),
   flat = flat slab (Goodtile), ridge = half-pipe fitting */
function tileSVG(profile,colorKey){
  const c=COLORS[colorKey]||COLORS.terracotta;
  const base=c.hex, lite=shade(base,.22), dark=shade(base,-.26), edge=shade(base,-.4);
  const gid="g"+profile+colorKey.replace(/[^a-z]/gi,"");
  let top="";
  if(profile==="barrel"){
    top=`<path d="M30 78 Q70 26 110 60 Q150 94 170 70 L170 108 L30 108 Z" fill="url(#${gid})"/>
         <path d="M30 78 Q70 26 110 60 Q150 94 170 70" fill="none" stroke="${edge}" stroke-width="2.5"/>`;
  }else if(profile==="double"){
    top=`<path d="M30 80 Q55 40 80 66 Q105 92 122 66 Q140 38 170 72 L170 108 L30 108 Z" fill="url(#${gid})"/>
         <path d="M30 80 Q55 40 80 66 Q105 92 122 66 Q140 38 170 72" fill="none" stroke="${edge}" stroke-width="2.5"/>`;
  }else if(profile==="ridge"){
    top=`<path d="M40 96 Q100 28 160 96 L160 110 L40 110 Z" fill="url(#${gid})"/>
         <path d="M40 96 Q100 28 160 96" fill="none" stroke="${edge}" stroke-width="2.5"/>`;
  }else{ /* flat */
    top=`<path d="M30 62 L170 62 L170 108 L30 108 Z" fill="url(#${gid})"/>
         <path d="M30 70 L170 70 M30 84 L170 84 M30 98 L170 98" stroke="${dark}" stroke-width="1.6" opacity=".55"/>
         <path d="M30 62 L170 62" stroke="${lite}" stroke-width="3"/>`;
  }
  const mottle=c.mottle?`<rect x="30" y="40" width="140" height="74" fill="url(#m${gid})" opacity=".5"/>`:"";
  return `<svg viewBox="0 0 200 130" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${lite}"/>
        <stop offset="1" stop-color="${dark}"/>
      </linearGradient>
      <radialGradient id="m${gid}" cx="35%" cy="30%" r="80%">
        <stop offset="0" stop-color="${shade(base,.4)}"/>
        <stop offset="1" stop-color="${shade(base,-.35)}"/>
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="118" rx="74" ry="9" fill="rgba(0,0,0,.12)"/>
    ${top}
    ${mottle}
    <path d="M30 108 L170 108 L170 113 L30 113 Z" fill="${edge}"/>
  </svg>`;
}

/* ---------- PROFILE DATA ---------- */
const PROFILES = [
  {key:"majorca", svg:"barrel", name:"Majorca",
   tagline:"Classic Spanish-style barrel",
   desc:"A timeless single-wave roman barrel profile. Bold shadow lines and a warm, traditional silhouette suited to homes and estates."},
  {key:"double", svg:"double", name:"Double Roman",
   tagline:"Twin-wave architectural profile",
   desc:"Two crisp barrel waves per tile for a rhythmic, contemporary roofscape. The base of our signature Lowveld Mix blend."},
  {key:"flat", svg:"flat", name:"Flat Goodtile",
   tagline:"Sleek modern flat profile",
   desc:"A clean, low-profile flat tile — available in smooth, cottage and rustic textured finishes for a refined modern look."},
];

/* ---------- PRODUCTS ---------- */
/* cat: majorca | double | flat | accessories */
const PRODUCTS = [
  // --- Majorca (SK2) ---
  {sku:"SK2-01", cat:"majorca", svg:"barrel", profile:"Majorca", color:"red"},
  {sku:"SK2-02", cat:"majorca", svg:"barrel", profile:"Majorca", color:"charcoal"},
  {sku:"SK2-03", cat:"majorca", svg:"barrel", profile:"Majorca", color:"terracotta"},
  {sku:"SK2-04", cat:"majorca", svg:"barrel", profile:"Majorca", color:"brown"},
  {sku:"SK2-05", cat:"majorca", svg:"barrel", profile:"Majorca", color:"grey"},
  {sku:"SK2-13", cat:"majorca", svg:"barrel", profile:"Majorca", color:"cotterra"},
  // --- Double Roman (SK17) ---
  {sku:"SK17-01", cat:"double", svg:"double", profile:"Double Roman", color:"red"},
  {sku:"SK17-02", cat:"double", svg:"double", profile:"Double Roman", color:"charcoal"},
  {sku:"SK17-03", cat:"double", svg:"double", profile:"Double Roman", color:"terracotta"},
  {sku:"SK17-04", cat:"double", svg:"double", profile:"Double Roman", color:"brown"},
  {sku:"SK17-05", cat:"double", svg:"double", profile:"Double Roman", color:"grey"},
  {sku:"SK17-10", cat:"double", svg:"double", profile:"Double Roman", color:"tan"},
  {sku:"SK17-12", cat:"double", svg:"double", profile:"Double Roman", color:"cotred"},
  {sku:"LV-MIX", cat:"double", svg:"double", profile:"Double Roman", color:"lowveld",
   featured:true, customName:"Lowveld Mix",
   note:"Blended pack of Double Roman — Red, Terracotta, Brown, Grey & Cottage Red."},
  // --- Flat Goodtile (SK10 / SK11) ---
  {sku:"SK10-02", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"charcoal"},
  {sku:"SK10-03", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"terracotta"},
  {sku:"SK10-04", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"brown"},
  {sku:"SK10-13", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"cotterra"},
  {sku:"SK10-14", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"cotgrey"},
  {sku:"SK11-02", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"rusticchar"},
  {sku:"SK11-03", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"rusticterra"},
  {sku:"SK11-16", cat:"flat", svg:"flat", profile:"Flat Goodtile", color:"rusticbrown"},
  // --- Accessories: colour chosen via dropdown ---
  {sku:"SK20", cat:"accessories", svg:"ridge", profile:"Ridging", customName:"Taper Ridge",
   colorOptions:["red","charcoal","terracotta","brown","grey","tan"]},
  {sku:"SK22", cat:"accessories", svg:"ridge", profile:"Ridging", customName:"Hip Starter",
   colorOptions:["red","charcoal","terracotta","brown","grey","tan"]},
  {sku:"SK21", cat:"accessories", svg:"ridge", profile:"Ridging", customName:"Rake Verge",
   colorOptions:["red","charcoal","terracotta","brown","grey","tan"]},
];

const FILTERS = [
  {key:"all",         label:"All Products"},
  {key:"majorca",     label:"Majorca"},
  {key:"double",      label:"Double Roman"},
  {key:"flat",        label:"Flat Goodtile"},
  {key:"accessories", label:"Ridging & Fittings"},
];

/* ---------- PROJECTS (placeholders — edit img to add real photos) ---------- */
const PROJECTS = [
  {type:"Residential Estate", name:"Estate Roofing — Mbombela", location:"Mbombela, Mpumalanga", img:"", wide:true},
  {type:"Healthcare",          name:"Themba Hospital",          location:"Kabokweni, Mpumalanga", img:""},
  {type:"Healthcare",          name:"Siteke Hospital",          location:"eSwatini",             img:""},
  {type:"Retail",              name:"Shopping Centre Project",  location:"Mpumalanga",           img:""},
  {type:"Residential",         name:"Private Home",             location:"Lowveld",              img:"", wide:true},
];

/* ================================================================
   RENDER
   ================================================================ */
const $=id=>document.getElementById(id);

/* hero grid */
(function(){
  const keys=["terracotta","red","charcoal","brown","tan","grey","cotterra","rusticterra",
              "terracotta","charcoal","red","brown"];
  $("heroGrid").innerHTML=keys.map(k=>{
    const c=COLORS[k];
    const bg=c.mottle
      ? `radial-gradient(circle at 35% 30%, ${shade(c.hex,.35)}, ${shade(c.hex,-.3)})`
      : `linear-gradient(160deg, ${shade(c.hex,.2)}, ${shade(c.hex,-.22)})`;
    return `<div style="background:${bg}"></div>`;
  }).join("");
})();

/* profiles */
$("profilesGrid").innerHTML = PROFILES.map(p=>`
  <div class="profile-card reveal" data-prof="${p.key}">
    <div class="pc-visual">${tileSVG(p.svg, p.svg==="flat"?"charcoal":(p.key==="double"?"terracotta":"red"))}</div>
    <span class="p-prof" style="font-size:.72rem">${p.tagline}</span>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <span class="pc-link">View tiles
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </span>
  </div>`).join("");
document.querySelectorAll(".profile-card").forEach(card=>{
  card.addEventListener("click",()=>{
    setFilter(card.dataset.prof);
    $("products").scrollIntoView({behavior:"smooth"});
  });
});

/* filters */
let activeFilter="all";
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

/* products */
function productName(p){
  if(p.customName) return p.customName;
  return COLORS[p.color].name;
}
function productSwatch(colorKey){
  const c=COLORS[colorKey];
  const bg=c.mottle
    ? `radial-gradient(circle at 35% 30%, ${shade(c.hex,.4)}, ${shade(c.hex,-.32)})`
    : c.hex;
  return `<span class="p-swatch" style="background:${bg}"></span>`;
}
function renderProducts(){
  const list = activeFilter==="all" ? PRODUCTS
             : PRODUCTS.filter(p=>p.cat===activeFilter);
  $("productGrid").innerHTML=list.map((p,i)=>{
    const idx=PRODUCTS.indexOf(p);
    const isAcc=p.cat==="accessories";
    const defColor = isAcc ? p.colorOptions[0] : p.color;
    const visualBg = "linear-gradient(165deg,#F3ECDF,#E3D7C0)";
    let colorBlock;
    if(isAcc){
      colorBlock=`<div class="p-colorsel">
        <label>Choose colour</label>
        <select data-colorsel="${idx}">
          ${p.colorOptions.map(ck=>`<option value="${ck}">${COLORS[ck].name}</option>`).join("")}
        </select></div>`;
    }else{
      colorBlock=`<div class="p-swatch-row">
        ${productSwatch(p.color)}
        <span class="p-colorname">${COLORS[p.color].name}</span></div>`;
    }
    return `<article class="product ${p.featured?'featured':''}">
      <div class="p-visual" style="background:${visualBg}">
        <span class="p-sku">${p.sku}</span>
        ${p.featured?'<span class="p-tag">★ POPULAR</span>':''}
        <div data-visual="${idx}" style="width:80%;height:80%">${tileSVG(p.svg,defColor)}</div>
      </div>
      <div class="p-body">
        <span class="p-prof">${p.profile}</span>
        <span class="p-name">${productName(p)}</span>
        ${colorBlock}
        ${p.note?`<p style="font-size:.78rem;color:var(--muted);margin:-6px 0 12px;line-height:1.45">${p.note}</p>`:''}
        <button class="btn btn-dark p-add" data-add="${idx}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          Add to Quote
        </button>
      </div>
    </article>`;
  }).join("");

  // accessory colour change -> update swatch visual
  document.querySelectorAll("[data-colorsel]").forEach(sel=>{
    sel.addEventListener("change",()=>{
      const idx=sel.dataset.colorsel;
      const p=PRODUCTS[idx];
      document.querySelector(`[data-visual="${idx}"]`).innerHTML=tileSVG(p.svg,sel.value);
    });
  });
  // add to quote
  document.querySelectorAll("[data-add]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx=btn.dataset.add;
      const p=PRODUCTS[idx];
      let colorKey = p.cat==="accessories"
        ? document.querySelector(`[data-colorsel="${idx}"]`).value
        : p.color;
      addToQuote(p,colorKey);
      btn.classList.add("added");
      btn.innerHTML=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Added`;
      setTimeout(()=>{
        btn.classList.remove("added");
        btn.innerHTML=`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg> Add to Quote`;
      },1300);
    });
  });
}

/* projects */
$("projectsGrid").innerHTML = PROJECTS.map(pr=>`
  <article class="project reveal ${pr.wide?'wide':''}">
    <div class="proj-img">
      ${pr.img
        ? `<img src="${pr.img}" alt="${pr.name}" />`
        : `<div class="ph">
             <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.6"/><path d="m21 15-5-5L5 21"/></svg>
             <span>Add project photo</span>
           </div>`}
    </div>
    <div class="proj-body">
      <span class="ptype">${pr.type}</span>
      <h4>${pr.name}</h4>
      <p>${pr.location}</p>
    </div>
  </article>`).join("");

/* ================================================================
   QUOTE LIST
   ================================================================ */
const quote = new Map();  // key -> {profile,name,sku,colorKey,qty,svg}

function quoteKey(p,colorKey){ return p.sku+"::"+colorKey; }

function addToQuote(p,colorKey){
  const k=quoteKey(p,colorKey);
  if(quote.has(k)){ quote.get(k).qty++; }
  else{
    quote.set(k,{
      profile:p.profile,
      name:productName(p),
      sku:p.sku,
      colorKey:colorKey,
      colorName:COLORS[colorKey].name,
      svg:p.svg,
      qty:1
    });
  }
  updateCart();
  showToast((p.customName||productName(p))+" added to quote");
}
function setQty(k,v){
  if(!quote.has(k))return;
  v=parseInt(v)||0;
  if(v<=0){ quote.delete(k); }
  else{ quote.get(k).qty=v; }
  updateCart(); renderDrawer();
}
function totalItems(){
  let t=0; quote.forEach(i=>t+=i.qty); return t;
}
function updateCart(){
  const n=totalItems();
  const badge=$("cartCount");
  if(n>0){
    badge.style.display="flex"; badge.textContent=n;
    badge.classList.add("pop"); setTimeout(()=>badge.classList.remove("pop"),200);
  }else{ badge.style.display="none"; }
  $("drawerSub").textContent = quote.size
    ? quote.size+" line"+(quote.size>1?"s":"")+" · "+n+" item"+(n>1?"s":"")
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
    const c=COLORS[it.colorKey];
    const bg=c.mottle
      ? `radial-gradient(circle at 35% 30%, ${shade(c.hex,.4)}, ${shade(c.hex,-.32)})`
      : `linear-gradient(160deg,${shade(c.hex,.2)},${shade(c.hex,-.24)})`;
    html+=`<div class="q-item">
      <div class="q-thumb" style="background:${bg}"></div>
      <div class="q-info">
        <span class="qp">${it.profile}</span>
        <h4>${it.name==='Lowveld Mix'||it.name==='Taper Ridge'||it.name==='Hip Starter'||it.name==='Rake Verge'?it.name:it.colorName}</h4>
        <span class="qsku">${it.sku} · ${it.colorName}</span>
        <div class="q-controls">
          <div class="qty">
            <button data-dec="${k}">–</button>
            <input type="number" min="1" value="${it.qty}" data-qty="${k}" />
            <button data-inc="${k}">+</button>
          </div>
          <button class="q-remove" data-rm="${k}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>
            Remove
          </button>
        </div>
      </div>
    </div>`;
  });
  body.innerHTML=html;
  $("qTotal").textContent=totalItems();

  body.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{
    const k=b.dataset.inc; setQty(k,quote.get(k).qty+1);});
  body.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{
    const k=b.dataset.dec; setQty(k,quote.get(k).qty-1);});
  body.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>setQty(b.dataset.rm,0));
  body.querySelectorAll("[data-qty]").forEach(inp=>inp.onchange=()=>
    setQty(inp.dataset.qty,inp.value));
}

/* ---------- WhatsApp senders ---------- */
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
  const place=$("qPlace").value.trim();
  const note=$("qNote").value.trim();
  let msg="*REQUEST FOR QUOTATION — AMA TILES*\n\n";
  msg+="*Name:* "+name+"\n*Phone:* "+phone+"\n";
  if(place) msg+="*Delivery area:* "+place+"\n";
  msg+="\n*Items requested:*\n";
  let n=1;
  quote.forEach(it=>{
    msg+=n+". "+it.profile+" — "+it.name
       +(it.name.startsWith("Cottage")||it.colorName===it.name?"":" ("+it.colorName+")")
       +"  ·  "+it.sku+"  ·  Qty: "+it.qty+"\n";
    n++;
  });
  msg+="\n*Total items:* "+totalItems();
  if(note) msg+="\n\n*Notes:* "+note;
  msg+="\n\nPlease send me pricing and availability. Thank you!";
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

/* ---------- Drawer open/close ---------- */
function openDrawer(){ renderDrawer(); $("drawer").classList.add("open");
  $("overlay").classList.add("open"); document.body.style.overflow="hidden"; }
function closeDrawer(){ $("drawer").classList.remove("open");
  $("overlay").classList.remove("open"); document.body.style.overflow=""; }
$("openCart").onclick=openDrawer;
$("closeCart").onclick=closeDrawer;
$("overlay").onclick=closeDrawer;
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeDrawer(); });

/* ---------- Toast ---------- */
let toastT;
function showToast(m){
  $("toastMsg").textContent=m;
  $("toast").classList.add("show");
  clearTimeout(toastT);
  toastT=setTimeout(()=>$("toast").classList.remove("show"),2600);
}

/* ---------- Nav ---------- */
window.addEventListener("scroll",()=>{
  $("header").classList.toggle("scrolled",window.scrollY>40);
});
$("burger").onclick=()=>{
  $("navLinks").classList.toggle("open");
  $("burger").classList.toggle("active");
};
document.querySelectorAll(".nav-links a").forEach(a=>
  a.addEventListener("click",()=>$("navLinks").classList.remove("open")));

/* ---------- Reveal on scroll ---------- */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in");
    io.unobserve(e.target);}});
},{threshold:.12});
function observeReveals(){ document.querySelectorAll(".reveal:not(.in)")
  .forEach(el=>io.observe(el)); }

/* ---------- Init ---------- */
buildFilters();
renderProducts();
updateCart();
observeReveals();
$("year").textContent=new Date().getFullYear();