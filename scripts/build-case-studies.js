'use strict';
const fs = require('node:fs');
const path = require('node:path');
const cases = require('./case-study-content');
const root = path.resolve(__dirname, '..');
const homeFile = path.join(root, 'index.html');
let home = fs.readFileSync(homeFile, 'utf8');
const base = home.match(/<link rel="canonical" href="([^"]+)"/)[1];
const prefix = new URL(base).pathname;
const template = fs.readFileSync(path.join(root, 'wordpress-troubleshooting/index.html'), 'utf8');
const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const person = JSON.parse(home.match(/<script type="application\/ld\+json" id="person-schema">([\s\S]*?)<\/script>/)[1]);
const card = c => `<article class="case-card"><div class="icon-box"><svg aria-hidden="true"><use href="#${c.icon}"/></svg></div><p class="case-category">${escape(c.category)}</p><h3><a href="${prefix}${c.slug}/">${escape(c.heading)}</a></h3><p>${escape(c.summary)}</p><div class="case-card-result"><span>${escape(c.evidence)}</span><p>${escape(c.outcome)}</p></div><a class="case-read" href="${prefix}${c.slug}/">Read case study <span aria-hidden="true">→</span></a></article>`;
const gallery = c => c.images?.length ? `<section class="case-gallery" id="project-images"><h2>Project screenshots</h2><p>Original supplied screenshots, cropped and redacted for confidentiality. Interface content has not been recreated.</p>${c.images.map(i=>`<figure><a href="${prefix}assets/images/case-studies/${escape(i.file)}" aria-label="View full-size screenshot: ${escape(i.alt)}"><img src="${prefix}assets/images/case-studies/${escape(i.file)}" width="${i.width}" height="${i.height}" alt="${escape(i.alt)}" loading="lazy" decoding="async"></a><figcaption>${escape(i.caption)}</figcaption></figure>`).join('')}</section>` : '';
for (const c of cases) {
  const url = base + c.slug + '/';
  let page = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(c.title)}</title>`);
  for (const key of ['description','og:description','twitter:description']) page = page.replace(new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*(">)`), `$1${escape(c.description)}$2`);
  for (const key of ['og:title','twitter:title']) page = page.replace(new RegExp(`(<meta (?:name|property)="${key}" content=")[^"]*(">)`), `$1${escape(c.title)}$2`);
  page = page.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${url}">`).replace(/<meta property="og:url" content="[^"]+">/, `<meta property="og:url" content="${url}">`);
  const graph = {'@context':'https://schema.org','@graph':[person,{'@type':'WebPage','@id':url+'#webpage',url,name:c.title,description:c.description,inLanguage:'en',author:{'@id':person['@id']},breadcrumb:{'@id':url+'#breadcrumbs'}},{'@type':'BreadcrumbList','@id':url+'#breadcrumbs',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base},{'@type':'ListItem',position:2,name:c.heading,item:url}]}]};
  page = page.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(graph,null,2)}</script>`);
  page = page.replace(/<body[^>]*>/, '<body class="service-page case-study-page">');
  const main = `<main id="main">
<section class="section service-hero case-hero"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="${prefix}">Home</a></li><li aria-current="page">Case study</li></ol></nav><p class="eyebrow">${escape(c.category)}</p><h1>${escape(c.heading)}</h1><p class="case-lead">${escape(c.summary)}</p><dl class="case-facts"><div><dt>Client context</dt><dd>${escape(c.client)}</dd></div><div><dt>Project period</dt><dd>${escape(c.period)}</dd></div><div><dt>My role</dt><dd>${escape(c.role)}</dd></div></dl><ul class="skills case-tools" aria-label="Technologies">${c.tools.map(t=>`<li>${escape(t)}</li>`).join('')}</ul></div></section>
<div class="container service-reading-layout"><aside class="service-contents"><p>In this case study</p><nav aria-label="On this page">${c.sections.map((s,i)=>`<a href="#section-${i+1}">${escape(s[0])}</a>`).join('')}<a href="#evidence">Evidence and scope</a></nav><a class="case-back" href="${prefix}case-studies/">← All case studies</a></aside><div class="service-prose"><div class="case-outcome"><p class="eyebrow">${escape(c.evidence)}</p><p>${escape(c.outcome)}</p></div><ol class="case-flow" aria-label="Project approach">${c.flow.map(s=>`<li>${escape(s)}</li>`).join('')}</ol>${c.sections.map((s,i)=>`<section class="service-copy-section" id="section-${i+1}"><h2>${escape(s[0])}</h2>${s.slice(1).map(p=>`<p>${escape(p)}</p>`).join('')}</section>`).join('\n')}<section class="case-evidence" id="evidence"><h2>Evidence and scope</h2><p>${escape(c.evidenceNote)}</p><p>Client identity is withheld. This is a summary of project work, not a reproduction of private messages.</p></section></div></div>
<section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">MORE PROJECT WORK</p><h2>Explore another <span>case study.</span></h2></div></div><div class="case-grid case-grid-two">${cases.filter(other=>other!==c).sort((a,b)=>Number(b.service===c.service)-Number(a.service===c.service)).slice(0,2).map(card).join('')}</div></div></section>
<section class="section contact service-contact"><div class="container"><h2>${escape(c.cta)}</h2><p>${escape(c.ctaText)}</p><div class="button-row"><a class="button primary" href="${c.contactHref ? escape(c.contactHref) : prefix+'#contact'}">Discuss Your Project <svg aria-hidden="true"><use href="#arrow"/></svg></a><a class="button" href="${prefix}${c.service}/">${escape(c.serviceLabel)}</a></div></div></section></main>`;
  page = page.replace(/<main id="main">[\s\S]*?<\/main>/, main);
  if (c.images?.length) {
    page = page.replace('<a href="#evidence">Evidence and scope</a>', '<a href="#project-images">Project screenshots</a><a href="#evidence">Evidence and scope</a>');
    page = page.replace('<section class="case-evidence" id="evidence">', gallery(c)+'<section class="case-evidence" id="evidence">');
  }
  fs.mkdirSync(path.join(root,c.slug),{recursive:true});
  fs.writeFileSync(path.join(root,c.slug,'index.html'),page);
}
for (const serviceSlug of new Set(cases.map(c=>c.service))) {
  const relevant = cases.filter(c=>c.service===serviceSlug);
  const c = relevant[0];
  const serviceFile = path.join(root,serviceSlug,'index.html');
  let service = fs.readFileSync(serviceFile,'utf8');
  const teaser = `<!-- CASE-STUDY-TEASER START --><section class="section case-service-teaser"><div class="container"><p class="eyebrow">RELATED PROJECT WORK</p><h2>See how I approach <span>real projects.</span></h2><div class="case-grid ${relevant.length===1?'case-grid-single':'case-grid-two'}">${relevant.map(card).join('')}</div></div></section><!-- CASE-STUDY-TEASER END -->`;
  service = service.includes('<!-- CASE-STUDY-TEASER START -->') ? service.replace(/<!-- CASE-STUDY-TEASER START -->[\s\S]*?<!-- CASE-STUDY-TEASER END -->/,teaser) : service.replace('<section class="section related-services">',teaser+'\n<section class="section related-services">');
  fs.writeFileSync(serviceFile,service);
}
const previews = `<!-- CASE-STUDIES START --><section id="case-studies" class="section case-studies"><div class="container"><div class="section-heading"><div><p class="eyebrow">BEHIND THE WORK</p><h2>Real problems.<br><span>Practical solutions.</span></h2></div><p class="section-intro">Explore the brief, the work and the outcome. These project stories explain my contribution and the evidence behind each result.</p></div><div class="case-grid">${cases.filter(c=>c.evidence.startsWith('Client')).map(card).join('')}</div><a class="button case-all-link" href="${prefix}case-studies/">Explore all case studies <span aria-hidden="true">→</span></a></div></section><!-- CASE-STUDIES END -->`;
home = home.includes('<!-- CASE-STUDIES START -->') ? home.replace(/<!-- CASE-STUDIES START -->[\s\S]*?<!-- CASE-STUDIES END -->/,previews) : home.replace('<section id="work"',previews+'\n<section id="work"');
home = home.replace('<a class="button" href="#work">Explore My Work</a>', '<a class="button" href="#case-studies">Read Case Studies</a>');
if (!home.includes('<a href="#case-studies">Case Studies</a>')) home = home.replace('<a href="#work">Portfolio</a>', '<a href="#work">Portfolio</a><a href="#case-studies">Case Studies</a>');
fs.writeFileSync(homeFile,home);
const sitemapFile = path.join(root,'sitemap.xml');
let sitemap = fs.readFileSync(sitemapFile,'utf8');
for(const c of cases) if(!sitemap.includes(base+c.slug+'/')) sitemap=sitemap.replace('</urlset>',`  <url><loc>${base}${c.slug}/</loc></url>\n</urlset>`);
fs.writeFileSync(sitemapFile,sitemap);
console.log(`Built ${cases.length} anonymized case studies, homepage previews and related service links.`);
