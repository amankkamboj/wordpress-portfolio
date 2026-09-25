'use strict';
// Optional authoring utility: generated pages are ordinary HTML, with no runtime build.
const fs=require('node:fs');
const path=require('node:path');
const services=require('./service-content');
const root=path.resolve(__dirname,'..');

const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
let home=fs.readFileSync(path.join(root,'index.html'),'utf8');
const base=home.match(/<link rel="canonical" href="([^"]+)"/)[1];
const prefix=new URL(base).pathname;
const icons=home.match(/<svg[^>]*class="icon-definitions"[\s\S]*?<\/svg>/)[0];
const person=JSON.parse(home.match(/<script type="application\/ld\+json" id="person-schema">([\s\S]*?)<\/script>/)[1]);
delete person['@context'];
const link=(slug,isHome)=>isHome?`${slug}/`:`${prefix}${slug}/`;
function navigation(isHome){const dest=id=>isHome?`#${id}`:`${prefix}#${id}`;return `<a href="${dest('home')}">Home</a>
<details class="services-menu"><summary>Services</summary><ul class="services-dropdown"><li><a href="${dest('services')}">All services</a></li>${services.map(s=>`<li><a href="${link(s.slug,isHome)}">${esc(s.label)}</a></li>`).join('')}</ul></details>
${[['work','Work'],['testimonials','Recommendations'],['about','About'],['contact','Contact']].map(([id,label])=>`<a href="${dest(id)}">${label}</a>`).join('\n')}`;}
function header(isHome){return `<header class="site-header"><div class="container header-inner">
<a class="logo" href="${isHome?'#home':base}" aria-label="Aman Kumar home">AK<span>.</span></a>
<button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>
<nav id="main-nav" aria-label="Main navigation">${navigation(isHome)}</nav>
<a class="button header-cta" href="${isHome?'#contact':prefix+'#contact'}">Let's Talk <svg aria-hidden="true"><use href="#arrow"/></svg></a>
</div></header>`;}
function footer(isHome){const dest=id=>isHome?`#${id}`:`${prefix}#${id}`;return `<footer>
<div class="container footer-main"><div class="footer-brand"><a class="logo" href="${isHome?'#home':base}" aria-label="Aman Kumar home">AK<span>.</span></a><p>Building better WordPress websites, together.</p></div>
<nav aria-label="Footer navigation">${[['home','Home'],['services','Services'],['work','Work'],['testimonials','Recommendations'],['about','About'],['contact','Contact']].map(([id,label])=>`<a href="${dest(id)}">${label}</a>`).join('')}</nav></div>
<div class="container footer-services"><p>Services</p><nav aria-label="Service pages">${services.map(s=>`<a href="${link(s.slug,isHome)}">${esc(s.label)}</a>`).join('')}</nav></div>
<p class="copyright">© <span id="year">2026</span> Aman Kumar. All rights reserved.</p></footer>`;}
home=home.replace(/<header class="site-header">[\s\S]*?<\/header>/,header(true));
home=home.replace(/<footer>[\s\S]*?<\/footer>/,footer(true));
const homepageCards=[
[services[0],'Custom WordPress Development','Tailored solutions for your unique needs.'],
[services[1],'WooCommerce Development','Custom stores, checkout and integrations.'],
[services[2],'Troubleshooting & Bug Fixes','Investigate errors, conflicts and difficult issues.'],
[services[3],'Performance Optimization','Faster websites and better Core Web Vitals.'],
[services[4],'WordPress Security','Malware cleanup and practical site hardening.'],
[{icon:'cloud'},'Website Migration & Maintenance','Move hosts, keep updates managed and your site running smoothly.']
];
const cards=homepageCards.map(([s,title,copy])=>`<a class="service-card service-card-link" href="${s.slug?link(s.slug,true):'#contact'}"><div class="icon-box"><svg aria-hidden="true"><use href="#${s.icon}"/></svg></div><div><h3>${esc(title)}</h3><p>${copy}</p></div></a>`).join('\n');
const start=home.indexOf('<div class="services-grid">');
const end=home.indexOf('<section id="about"',start);
home=home.slice(0,start)+`<div class="services-grid">\n${cards}\n</div></div></section>\n`+home.slice(end);
home=home.replace(/<!-- Google Search Console verification:[\s\S]*?-->/,''); // Real verification tag is preserved.
fs.writeFileSync(path.join(root,'index.html'),home);
for(const s of services){
 const url=base+s.slug+'/';
 const breadcrumbs={'@type':'BreadcrumbList','@id':url+'#breadcrumbs',itemListElement:[['Home',base],['Services',base+'#services'],[s.label,url]].map(([name,item],i)=>({'@type':'ListItem',position:i+1,name,item}))};
 const schema={'@context':'https://schema.org','@graph':[person,{'@type':'WebPage','@id':url+'#webpage',url,name:s.title,description:s.description,inLanguage:'en',about:{'@id':url+'#service'},breadcrumb:{'@id':url+'#breadcrumbs'}},{'@type':'Service','@id':url+'#service',name:s.h1,serviceType:s.label,description:s.description,url,provider:{'@id':person['@id']}},breadcrumbs]};
 const prose=p=>esc(p).replace('If your main concern is load time rather than new functionality, the dedicated performance service is a useful starting point.', `If your main concern is load time rather than new functionality, <a href="${prefix}wordpress-performance-optimization/">explore the performance service</a>.`).replace('Where the incident also reveals a separate bug or failed integration, it can be scoped as troubleshooting instead of silently expanding the cleanup.', `Where the incident also reveals a separate bug or failed integration, it can be <a href="${prefix}wordpress-troubleshooting/">scoped as troubleshooting</a> instead of silently expanding the cleanup.`);
 const content=s.sections.map(([heading,paragraphs],i)=>`<section class="service-copy-section" id="section-${i+1}"><h2>${esc(heading)}</h2>${paragraphs.map(p=>`<p>${prose(p)}</p>`).join('\n')}${heading==='Continuous Cybersecurity Learning'?'\n<!-- Add verified cybersecurity certification here once completed: name, issuer, credential URL, completion date and image. No empty card is rendered. -->':''}</section>`).join('\n');
 const related=s.related.map(i=>services[i]);
 const html=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(s.title)}</title>
<meta name="description" content="${esc(s.description)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="author" content="Aman Kumar">
<meta name="theme-color" content="#001521">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${esc(s.title)}">
<meta property="og:description" content="${esc(s.description)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_IN">
<meta property="og:site_name" content="Aman Kumar — WordPress &amp; PHP Developer">
<meta property="og:image" content="${base}assets/images/profile.jpg">
<meta property="og:image:width" content="1106">
<meta property="og:image:height" content="1422">
<meta property="og:image:alt" content="Aman Kumar, WordPress and PHP developer">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(s.title)}">
<meta name="twitter:description" content="${esc(s.description)}">
<meta name="twitter:image" content="${base}assets/images/profile.jpg">
<meta name="twitter:image:alt" content="Aman Kumar, WordPress and PHP developer">
<link rel="icon" href="${prefix}assets/images/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${prefix}assets/css/style.css">
<script src="${prefix}assets/js/main.js" defer></script>
<script type="application/ld+json">${JSON.stringify(schema,null,2).replace(/</g,'\\u003c')}</script>
</head>
<body class="service-page">
${icons}
<a class="skip-link" href="#main">Skip to content</a>
${header(false)}
<main id="main">
<section class="service-hero section"><div class="container">
<nav class="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="${base}">Home</a></li><li><a href="${prefix}#services">Services</a></li><li aria-current="page">${esc(s.label)}</li></ol></nav>
<div class="service-hero-grid"><div><p class="eyebrow">WORDPRESS &amp; PHP SERVICES</p><h1>${esc(s.h1)}</h1>${s.intro.map(p=>`<p class="service-lead">${esc(p)}</p>`).join('\n')}<a class="button primary" href="${prefix}#contact">${esc(s.cta)} <svg aria-hidden="true"><use href="#arrow"/></svg></a></div>
<aside class="service-author" aria-label="Your developer"><img class="portrait" src="${prefix}assets/images/profile.jpg" width="1106" height="1422" alt="Aman Kumar, WordPress and PHP developer" decoding="async"><div><p class="service-author-name">Aman Kumar</p><p>WordPress &amp; PHP Developer</p><p>Chandigarh, India<br>Working with clients worldwide</p><a href="${prefix}#testimonials">Read client recommendations →</a></div></aside></div>
</div></section>
<div class="container service-reading-layout"><aside class="service-contents"><p>On this page</p><nav aria-label="On this page">${s.sections.map(([title],i)=>`<a href="#section-${i+1}">${esc(title)}</a>`).join('\n')}</nav></aside><div class="service-prose">${content}</div></div>
<section class="section related-services"><div class="container"><p class="eyebrow">KEEP EXPLORING</p><h2>Related <span>services.</span></h2><div class="related-grid">${related.map(r=>`<a class="service-card service-card-link" href="${prefix}${r.slug}/"><div class="icon-box"><svg aria-hidden="true"><use href="#${r.icon}"/></svg></div><div><h3>${esc(r.label)}</h3><p>${esc(r.description)}</p></div></a>`).join('\n')}</div></div></section>
<section class="section contact service-contact"><div class="container"><h2>${esc(s.ctaHeading)}</h2><p>${esc(s.ctaText)}</p><a class="button primary" href="${prefix}#contact">${esc(s.cta)} <svg aria-hidden="true"><use href="#arrow"/></svg></a></div></section>
</main>
${footer(false)}
</body></html>\n`;
 fs.mkdirSync(path.join(root,s.slug),{recursive:true});fs.writeFileSync(path.join(root,s.slug,'index.html'),html);
}
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['',...services.map(s=>s.slug+'/')].map(p=>`  <url><loc>${base}${p}</loc></url>`).join('\n')}\n</urlset>\n`);
const report=`# Service pages — implementation report\n\nFive static directory index pages use the existing stylesheet and JavaScript. There is no client-side router or required build on GitHub Pages.\n\n${services.map(s=>`## ${s.label}\n- URL: ${base}${s.slug}/\n- File: ${s.slug}/index.html\n- SEO title: ${s.title}\n- Meta description: ${s.description}\n`).join('\n')}\n## Shared implementation\nEach page has one H1, a self-referencing canonical, unique social metadata, visible breadcrumbs and Person, WebPage, Service and BreadcrumbList JSON-LD. All providers refer to the homepage Person ID. No review, pricing or certification claims were added.\n\nThe homepage retains six service cards: development, WooCommerce, troubleshooting, performance, security, and combined migration/maintenance. The first five link to dedicated pages; the sixth links to Contact. Header Services disclosure and footer service links make all pages reachable. Each service page has three related links before its contact CTA.\n\nThe sitemap includes the homepage and all five services. No deployment date is asserted. robots.txt remains permissive and unchanged. The existing Search Console tag remains on the homepage.\n\n## Editing\nContent source: scripts/service-content.js. Shared generation: scripts/build-services.js. Run node scripts/build-services.js after editing the source. This regenerates service pages, homepage navigation/service cards/footer, and sitemap; do not edit generated service HTML and expect those edits to survive regeneration. The rest of the homepage is retained. The generated HTML can be deployed directly without Node.\n\n## Deployment\nUpload all five directories together with index.html, assets/css/style.css, assets/js/main.js and sitemap.xml. Live service availability cannot be established until these files are published. No commits or pushes are part of this change.\n`;
fs.writeFileSync(path.join(root,'SERVICE-PAGES.md'),report);
console.log('Built five static service pages and updated shared navigation, homepage service cards and sitemap.');
