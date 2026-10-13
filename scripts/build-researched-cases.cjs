'use strict';
const fs = require('node:fs');
const path = require('node:path');
const cases = require('./researched-case-content.cjs');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const write = (file, text) => fs.writeFileSync(path.join(root, file), text);
const template = read('case-study-woocommerce-cart-whatsapp/index.html');
const base = new URL(read('index.html').match(/<link rel="canonical" href="([^"]+)"/)[1]);
const prefix = base.pathname;
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const card = c => `<article class="case-card"><a class="case-card-media case-card-placeholder" href="${prefix}${c.slug}/" aria-label="Read case study: ${esc(c.heading)}"><svg aria-hidden="true" viewBox="0 0 64 64"><rect x="10" y="12" width="44" height="40" rx="4"/><path d="M10 23h44M20 33h24M20 42h16"/></svg><span>Project case study</span></a><p class="case-category">${esc(c.category)}</p><h3><a href="${prefix}${c.slug}/">${esc(c.heading)}</a></h3><p>${esc(c.summary)}</p><div class="case-card-result"><span>${esc(c.evidence)}</span><p>${esc(c.outcome)}</p></div><a class="case-read" href="${prefix}${c.slug}/">Read case study <span aria-hidden="true">→</span></a></article>`;
for (const c of cases) {
 const url = new URL(c.slug+'/', base).href;
 let page = template.replace(/<title>[\s\S]*?<\/title>/, '<title>'+esc(c.title)+'</title>');
 page = page.replace(/<link rel="canonical" href="[^"]+">/, '<link rel="canonical" href="'+url+'">');
 for (const [key,value] of [['description',c.description],['og:description',c.description],['twitter:description',c.description],['og:title',c.title],['twitter:title',c.title],['og:url',url]]) {
  page = page.replace(new RegExp('(<meta (?:name|property)="'+key+'" content=")[^"]*'), (_,start)=>start+esc(value));
 }
 page = page.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/, (_,json)=>{
  const person = JSON.parse(json)['@graph'].find(n=>n['@type']==='Person');
  return '<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':[person,{'@type':'WebPage','@id':url+'#webpage',url,name:c.title,description:c.description,inLanguage:'en',author:{'@id':person['@id']},breadcrumb:{'@id':url+'#breadcrumbs'}},{'@type':'BreadcrumbList','@id':url+'#breadcrumbs',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base.href},{'@type':'ListItem',position:2,name:'Case studies',item:new URL('case-studies/',base).href},{'@type':'ListItem',position:3,name:c.heading,item:url}]}]},null,2)+'</script>';
 });
 const related = cases.filter(other=>other!==c).sort((a,b)=>Number(b.service===c.service)-Number(a.service===c.service)).slice(0,2);
 const main = `<main id="main" tabindex="-1"><section class="section case-hero"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="${prefix}">Home</a></li><li><a href="${prefix}case-studies/">Case studies</a></li><li aria-current="page">Case study</li></ol></nav><p class="eyebrow">${esc(c.category)}</p><h1>${esc(c.heading)}</h1><p class="case-lead">${esc(c.summary)}</p><dl class="case-facts"><div><dt>Client context</dt><dd>${esc(c.client)}</dd></div><div><dt>Project period</dt><dd>${esc(c.period)}</dd></div><div><dt>My role</dt><dd>${esc(c.role)}</dd></div></dl><ul class="skills case-tools" aria-label="Technologies">${c.tools.map(t=>'<li>'+esc(t)+'</li>').join('')}</ul></div></section><div class="container service-reading-layout"><aside class="service-contents"><p>In this case study</p><nav aria-label="On this page">${c.sections.map((s,i)=>'<a href="#section-'+(i+1)+'">'+esc(s[0])+'</a>').join('')}<a href="#evidence">About this case study</a></nav><a class="case-back" href="${prefix}case-studies/">← All case studies</a></aside><div class="service-prose"><div class="case-outcome"><p class="eyebrow">${esc(c.evidence)}</p><p>${esc(c.outcome)}</p></div><ol class="case-flow" aria-label="Project approach">${c.flow.map(s=>'<li>'+esc(s)+'</li>').join('')}</ol>${c.sections.map((s,i)=>'<section class="service-copy-section" id="section-'+(i+1)+'"><h2>'+esc(s[0])+'</h2>'+s.slice(1).map(p=>'<p>'+esc(p)+'</p>').join('')+'</section>').join('')}<section class="case-evidence" id="evidence"><h2>About this case study</h2><p>${esc(c.evidenceNote)}</p></section></div></div><section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">MORE PROJECT WORK</p><h2>Explore another <span>case study.</span></h2></div></div><div class="case-grid case-grid-two">${related.map(card).join('')}</div></div></section><section class="section contact service-contact"><div class="container"><h2>${esc(c.cta)}</h2><p>${esc(c.ctaText)}</p><div class="button-row"><a class="button primary" href="${prefix}#contact">Discuss Your Project →</a><a class="button" href="${prefix}${c.service}/">${esc(c.serviceLabel)}</a></div></div></section></main>`;
 page = page.replace(/<main\b[^>]*>[\s\S]*?<\/main>/,main);
 page = page.replace(/<script[^>]*src="[^"]*case-gallery.js"[^>]*><\/script>/g,'');
 fs.mkdirSync(path.join(root,c.slug),{recursive:true});
 write(c.slug+'/index.html',page);
}
for (const file of ['index.html','case-studies/index.html',...new Set(cases.map(c=>c.service+'/index.html'))]) {
 let html = read(file);
 const relevant = file==='index.html' ? cases.slice(0,3) : file==='case-studies/index.html' ? cases : cases.filter(c=>file===c.service+'/index.html');
 html = html.replace(/<article class="case-card(?: [^"]*)?">[\s\S]*?<\/article>/g,item=>cases.some(c=>item.includes(prefix+c.slug+'/'))?'':item);
 const marker = file==='index.html' ? '<!-- CASE-STUDIES START -->' : file==='case-studies/index.html' ? '<section id="reviewed"' : '<!-- CASE-STUDY-TEASER START -->';
 if(!html.includes(marker) && file!=='index.html' && file!=='case-studies/index.html') {
  const teaser='<!-- CASE-STUDY-TEASER START --><section class="section case-service-teaser"><div class="container"><p class="eyebrow">RELATED PROJECT WORK</p><h2>Explore migration and rebuild projects.</h2><div class="case-grid case-grid-two"></div></div></section><!-- CASE-STUDY-TEASER END -->';
  html=html.replace('</main>',teaser+'</main>');
 }
 const start=html.indexOf(marker), grid=html.indexOf('<div class="case-grid',start);
 if(start<0||grid<0) throw new Error('Missing case grid: '+file);
 const end=html.indexOf('>',grid)+1;
 html=html.slice(0,end)+relevant.map(card).join('')+html.slice(end);
 write(file,html);
}
let sitemap=read('sitemap.xml');
for(const c of cases) {
 const url=new URL(c.slug+'/',base).href;
 if(!sitemap.includes('<loc>'+url+'</loc>')) sitemap=sitemap.replace('</urlset>','  <url><loc>'+url+'</loc></url>\n</urlset>');
}
write('sitemap.xml',sitemap);
console.log('Built six researched case studies, homepage previews, service links and sitemap entries.');
