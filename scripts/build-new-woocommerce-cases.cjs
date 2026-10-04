// Add the three focused WooCommerce cases without rebuilding existing editorial pages.
const fs=require('node:fs'),path=require('node:path');
const cases=require('./new-woocommerce-case-content'),prefix='/wordpress-portfolio/';
const base='https://amankkamboj.github.io'+prefix;
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const template=fs.readFileSync('case-study-woocommerce-stripe-tax/index.html','utf8');
const card=c=>`<article class="case-card"><p class="case-category">${esc(c.category)}</p><h3><a href="${prefix}${c.slug}/">${esc(c.heading)}</a></h3><p>${esc(c.summary)}</p><div class="case-card-result"><span>${esc(c.evidence)}</span><p>${esc(c.outcome)}</p></div><a class="case-read" href="${prefix}${c.slug}/">Read case study →</a></article>`;
for(const c of cases){
 let page=template,url=base+c.slug+'/';
 page=page.replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(c.title)}</title>`);
 page=page.replace(/<link rel="canonical" href="[^"]+">/,`<link rel="canonical" href="${url}">`);
 for(const [key,value] of [['description',c.description],['og:description',c.description],['twitter:description',c.description],['og:title',c.title],['twitter:title',c.title],['og:url',url]])page=page.replace(new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*`),'$1'+esc(value));
 // Use the representative portrait for social sharing, without revealing the client.
 const portrait=base+'assets/images/aman-professional-social.jpg';
 for(const key of ['og:image','twitter:image'])page=page.replace(new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*`),'$1'+portrait);
 for(const key of ['og:image:width','og:image:height'])page=page.replace(new RegExp(`(<meta property="${key}" content=")[^"]*`),'$1'+'1200');
 for(const key of ['og:image:alt','twitter:image:alt'])page=page.replace(new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*`),'$1'+'Aman Kumar, WordPress and WooCommerce developer');
 page=page.replace(/(<meta property="og:image:type" content=")[^"]*/,'$1image/jpeg');
 page=page.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/,(tag,json)=>{
  const data=JSON.parse(json),person=data['@graph'].find(n=>n['@type']==='Person');
  return '<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':[person,{'@type':'WebPage','@id':url+'#webpage',url,name:c.title,description:c.description,inLanguage:'en',author:{'@id':person['@id']},breadcrumb:{'@id':url+'#breadcrumbs'}},{'@type':'BreadcrumbList','@id':url+'#breadcrumbs',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base},{'@type':'ListItem',position:2,name:'Case studies',item:base+'case-studies/'},{'@type':'ListItem',position:3,name:c.heading,item:url}]}]},null,2)+'</script>';
 });
 page=page.replace(/<link[^>]*stripe-tax-evidence\.css[^>]*>/g,'');
 const gallery=`<section class="case-gallery" id="project-images"><h2>Original project images</h2><p>Selected interface crops from the project conversation. Captions distinguish review-stage evidence from confirmed outcomes.</p><div class="case-gallery-grid">${c.images.map(i=>`<figure><a href="${prefix}assets/images/case-studies/${i.file}" data-case-image aria-label="View screenshot: ${esc(i.alt)}"><img src="${prefix}assets/images/case-studies/${i.file}" width="${i.width}" height="${i.height}" loading="lazy" decoding="async" alt="${esc(i.alt)}"></a><figcaption>${esc(i.caption)}</figcaption></figure>`).join('')}</div></section>`;
 const main=`<main id="main" tabindex="-1"><section class="section case-hero"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="${prefix}">Home</a></li><li><a href="${prefix}case-studies/">Case studies</a></li><li aria-current="page">Case study</li></ol></nav><p class="eyebrow">${esc(c.category)}</p><h1>${esc(c.heading)}</h1><p class="case-lead">${esc(c.summary)}</p><dl class="case-facts"><div><dt>Client context</dt><dd>${esc(c.client)}</dd></div><div><dt>Project period</dt><dd>${c.period}</dd></div><div><dt>My role</dt><dd>${esc(c.role)}</dd></div></dl><ul class="skills case-tools" aria-label="Technologies">${c.tools.map(t=>`<li>${t}</li>`).join('')}</ul></div></section><div class="container service-reading-layout"><aside class="service-contents"><p>In this case study</p><nav aria-label="On this page">${c.sections.map((s,i)=>`<a href="#section-${i+1}">${esc(s[0])}</a>`).join('')}<a href="#project-images">Original project images</a><a href="#evidence">About this case study</a></nav><a class="case-back" href="${prefix}case-studies/">← All case studies</a></aside><div class="service-prose"><div class="case-outcome"><p class="eyebrow">${esc(c.evidence)}</p><p>${esc(c.outcome)}</p></div><ol class="case-flow" aria-label="Project approach">${c.flow.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>${c.sections.map((s,i)=>`<section class="service-copy-section" id="section-${i+1}"><h2>${esc(s[0])}</h2>${s.slice(1).map(p=>`<p>${esc(p)}</p>`).join('')}</section>`).join('')}${gallery}<section class="case-evidence" id="evidence"><h2>About This Case Study</h2><p>${esc(c.evidenceNote)}</p></section></div></div><section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">MORE PROJECT WORK</p><h2>Explore another <span>case study.</span></h2></div></div><div class="case-grid case-grid-two">${cases.filter(other=>other!==c).map(card).join('')}</div></div></section><section class="section contact service-contact"><div class="container"><h2>${esc(c.cta)}</h2><p>${esc(c.ctaText)}</p><div class="button-row"><a class="button primary" href="${prefix}#contact">Discuss Your Project →</a><a class="button" href="${prefix}woocommerce-development/">WooCommerce development</a></div></div></section></main>`;
 page=page.replace(/<main\b[^>]*>[\s\S]*?<\/main>/,main);
 if(!page.includes('assets/js/case-gallery.js'))page=page.replace('</head>',`<script src="${prefix}assets/js/case-gallery.js" defer></script></head>`);
 fs.mkdirSync(c.slug,{recursive:true});fs.writeFileSync(c.slug+'/index.html',page);
}
for(const file of ['index.html','case-studies/index.html','woocommerce-development/index.html']){
 let html=fs.readFileSync(file,'utf8');
 html=html.replace(/<article class="case-card(?: [^"]*)?">[\s\S]*?<\/article>/g,item=>cases.some(c=>item.includes(prefix+c.slug+'/'))?'':item);
 const marker=file==='index.html'?'<!-- CASE-STUDIES START -->':file.startsWith('case-studies')?'<section id="reviewed"':'<!-- CASE-STUDY-TEASER START -->';
 const start=html.indexOf(marker),grid=html.indexOf('<div class="case-grid',start),end=html.indexOf('>',grid)+1;
 if(start<0||grid<0)throw Error('Missing destination grid: '+file);
 html=html.slice(0,end)+cases.map(card).join('')+html.slice(end);fs.writeFileSync(file,html);
}
// Make the new work discoverable from existing WooCommerce case studies too.
for(const dir of fs.readdirSync('.').filter(d=>d.startsWith('case-study-woocommerce-')&&!cases.some(c=>c.slug===d))){
 const file=dir+'/index.html';if(!fs.existsSync(file))continue;
 let html=fs.readFileSync(file,'utf8');
 html=html.replace(/(<p class="eyebrow">MORE PROJECT WORK<\/p>[\s\S]*?<div class="case-grid case-grid-two">)[\s\S]*?(<\/div><\/div><\/section>)/,'$1'+cases.slice(0,2).map(card).join('')+'$2');
 fs.writeFileSync(file,html);
}
const pages=['',...fs.readdirSync('.',{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(path.join(d.name,'index.html'))).map(d=>d.name+'/')];
fs.writeFileSync('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>'  <url><loc>'+base+p+'</loc></url>').join('\n')+'\n</urlset>\n');
console.log('Added three anonymous WooCommerce cases, listing/service cards, related links and sitemap entries.');
