// Run after general generators to restore this case's public-page evidence.
const fs=require('node:fs');
const sharp=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const prefix='/wordpress-portfolio/';
const slug='case-study-wordpress-enquiry-workflow';
const file=slug+'/index.html';
const c=require('./case-study-content').find(c=>c.slug===slug);
(async()=>{
 const dir='assets/images/case-studies/';
 await sharp(dir+'clarus-companionship-service.webp').extract({left:0,top:0,width:1440,height:1000}).webp({quality:85}).toFile(dir+'clarus-companionship-service-preview.webp');
 const shots=[
 ['clarus-companionship-service.webp','Public companionship service page','The live service page explains the offer and gives visitors a clear route to contact the team. This screenshot records the current public page, not a measured SEO or conversion result.','https://clarushealthcare.co.uk/companionship/'],
 ['clarus-companionship-enquiry-form.webp','Form A: the public enquiry journey','The blank first step shows contact and relationship questions, age options and progress through a three-step form. No personal information was entered and no enquiry was submitted for this capture.','https://clarushealthcare.co.uk/companionship-enquiry/'],
 ['clarus-about-us.webp','Supporting About Us page','The page includes the Companionship Lead section updated during this phase, alongside the provider’s mission and values.','https://clarushealthcare.co.uk/about-us/']
 ];
 let html=fs.readFileSync(file,'utf8').replace('<main id="main">','<main id="main" tabindex="-1">');
 html=html.replace(/(<dt>Client context<\/dt><dd>)[^<]*/,'$1'+c.client);
 html=html.replace(/<section class="clarus-hero-evidence">[\s\S]*?<\/section>/g,'');
 const hero=`<section class="clarus-hero-evidence"><div class="container"><figure><div class="clarus-browser-bar">clarushealthcare.co.uk · Companionship</div><a href="${prefix}${dir}clarus-companionship-service.webp"><img src="${prefix}${dir}clarus-companionship-service-preview.webp" width="1440" height="1000" fetchpriority="high" alt="Clarus Healthcare companionship service page with its introduction and visitor contact actions"></a><figcaption>Real client website, captured October 4, 2026. The enquiry-workflow phase was delivered in September 2026.</figcaption></figure><a class="button" href="https://clarushealthcare.co.uk/companionship/" target="_blank" rel="noopener noreferrer">View Companionship Page ↗</a></div></section>`;
 html=html.replace('<div class="container service-reading-layout">',hero+'<div class="container service-reading-layout">');
 html=html.replace(/<section class="clarus-page-evidence" id="project-pages">[\s\S]*?<\/section>/g,'');
 const figures=[];
 for(const [image,title,caption,url] of shots){
  const meta=await sharp(dir+image).metadata();
  figures.push(`<article><h3>${title}</h3><figure><a href="${prefix}${dir}${image}" aria-label="Open full-size screenshot: ${title}"><img src="${prefix}${dir}${image}" width="${meta.width}" height="${meta.height}" loading="lazy" decoding="async" alt="${title} on the Clarus Healthcare website"></a><figcaption>${caption} Captured October 4, 2026. <a href="${url}" target="_blank" rel="noopener noreferrer">View live page ↗</a> · <a href="${prefix}${dir}${image}">Open full-size image</a></figcaption></figure></article>`);
 }
 const gallery=`<section class="clarus-page-evidence" id="project-pages"><p class="eyebrow">REAL CLIENT PAGES</p><h2>From service information to an enquiry</h2><p>The public journey connects the Companionship offer to Form A. These are screenshots of the live pages, with no submitted client or care-recipient data.</p><ol class="case-flow" aria-label="Public enquiry journey"><li>Understand the service</li><li>Complete the enquiry form</li><li>Team reviews and follows up</li></ol>${figures.join('')}<h3>What stayed outside the public journey</h3><p>The client signed off Form A as published with noindex, while Form B remained unpublished for a later workflow decision. Form B is not shown here. Search-indexing settings do not restrict who can access a published page.</p></section>`;
 html=html.replace('<section class="service-copy-section" id="section-4">',gallery+'<section class="service-copy-section" id="section-4">');
 html=html.replace(/<section class="clarus-client-feedback" id="client-confirmation">[\s\S]*?<\/section>/g,'');
 const feedback=`<section class="clarus-client-feedback" id="client-confirmation"><p class="eyebrow">CLIENT TESTING · SEPTEMBER 9, 2026</p><h2>Client-tested and signed off</h2><figure><blockquote><p>“Form A test successfull. Thanks”</p></blockquote><figcaption>Verbatim client message following form and notification testing.</figcaption></figure><p>The client then signed off the phase: the Companionship page could be published and indexed, Form A published without indexing, and Form B held back while the team gained experience with the workflow.</p></section>`;
 html=html.replace(/<section class="case-evidence" id="evidence">[\s\S]*?<\/section>/,feedback+`<section class="case-evidence" id="evidence"><h2>About This Case Study</h2><p>This case study documents my September 2026 page updates, Gravity Forms configuration, privacy-link repair and notification-routing work for Clarus Healthcare. The client confirmed successful Form A testing and signed off the agreed phase.</p><p>The gallery shows the current public pages as captured on October 4, 2026. It does not expose form submissions, unpublished internal forms, account credentials or private notification recipients. The selected client quote preserves the original wording.</p><p>The work demonstrates a delivered public enquiry journey. It does not claim measured enquiry growth, guaranteed email delivery or legal or healthcare compliance.</p></section>`);
 html=html.replace(/<a href="#(?:project-pages|client-confirmation)">[^<]*<\/a>/g,'');
 html=html.replace(/<a href="#evidence">(?:Evidence and scope|About this case study)<\/a>/,'<a href="#project-pages">Live pages and form</a><a href="#client-confirmation">Client testing</a><a href="#evidence">About this case study</a>');
 if(!html.includes('assets/css/clarus-evidence.css'))html=html.replace('</head>',`<link rel="stylesheet" href="${prefix}assets/css/clarus-evidence.css"></head>`);
 for(const key of ['og:image','twitter:image'])html=html.replace(new RegExp(`(<meta (?:property|name)="${key}" content=")[^"]*`),'$1https://amankkamboj.github.io'+prefix+dir+'clarus-companionship-service-preview.webp');
 html=html.replace(/(<meta property="og:image:width" content=")[^"]*/,'$11440').replace(/(<meta property="og:image:height" content=")[^"]*/,'$11000').replace('name="twitter:card" content="summary"','name="twitter:card" content="summary_large_image"').replace('content="image/jpeg"','content="image/webp"').replaceAll('content="Aman Kumar, WordPress and PHP developer"','content="Clarus Healthcare companionship service page"');
 fs.writeFileSync(file,html);
 for(const listing of ['index.html','case-studies/index.html','wordpress-development/index.html']){
  let page=fs.readFileSync(listing,'utf8');
  page=page.replace(/<article class="case-card">[\s\S]*?<\/article>/g,card=>{
   if(!card.includes(prefix+slug+'/'))return card;
   card=card.replace(/<a data-clarus-preview[^>]*>[\s\S]*?<\/a>/g,'');
   return card.replace('<article class="case-card">',`<article class="case-card"><a data-clarus-preview href="${prefix}${slug}/"><img src="${prefix}${dir}clarus-companionship-service-preview.webp" width="1440" height="1000" alt="Clarus Healthcare companionship service page" loading="lazy" style="display:block;width:100%;height:auto;border-radius:12px;margin-bottom:20px"></a>`);
  });fs.writeFileSync(listing,page);
 }
})();
