'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),prefix='/wordpress-portfolio/';
const reviews=[
 ['management','Website Management and Development','5.0','Jun 4, 2026 – Oct 3, 2026','Excellent programmer who is committed to success. Thank you for your help!'],
 ['server','Troubleshoot 404 Error on LiteSpeed Server with SSL','5.0','Sep 26, 2025 – Sep 26, 2025','He was a great quick and reliable help! I do approve'],
 ['store','WooCommerce','5.0','May 22, 2025 – Jun 13, 2025','We hired Aman to complete an eCommerce website, and he delivered it incredibly fast with great quality. I highly recommend Aman for anyone looking for a reliable and efficient developer!'],
 ['maintenance','WordPress Developer – Troubleshooting, Maintenance & WooCommerce','5.0','Feb 11, 2026 – Mar 19, 2026',''],
 ['development','WordPress development and maintenance','5.0','Mar 8, 2026 – Mar 10, 2026','Thank you'],
 ['filters','WooCommerce Product Filter Development for Homepage','5.0','Oct 4, 2025 – Oct 6, 2025',''],
 ['theme','WordPress Expert Needed for Theme Customization','4.8','Jul 1, 2025 – Jul 31, 2025',''],
 ['woocommerce','Wordpress/Woocommerce','5.0','Apr 4, 2023 – Jul 29, 2025',''],
 ['migration','Expert Website Migration Specialist Needed','5.0','May 31, 2025 – Jun 20, 2025',''],
 ['directory','Business Directory using GravityForm/GravityKit/GravityView built needed','5.0','May 20, 2025 – May 24, 2025','Excellent service, understood what the task was.']
];
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const card=r=>`<article class="feedback-card"><h2>${esc(r[1])}</h2><p class="feedback-rating">${r[2]}/5 client rating</p><p class="feedback-date">${r[3]}</p>${r[4]?`<blockquote>“${esc(r[4])}”</blockquote>`:''}<a href="${prefix}assets/images/client-feedback/${r[0]}.webp" aria-label="Open original feedback screenshot for ${esc(r[1])}"><img src="${prefix}assets/images/client-feedback/${r[0]}.webp" alt="Supplied Upwork feedback for ${esc(r[1])}, rated ${r[2]} out of 5" loading="lazy" decoding="async"></a></article>`;
let html=fs.readFileSync(path.join(root,'privacy/index.html'),'utf8');
const url='https://amankkamboj.github.io'+prefix+'client-feedback/';
const title='Upwork Client Feedback | Aman Kumar';
const desc='Feedback from completed Upwork contracts, with original screenshots covering WordPress development, WooCommerce, maintenance and migration work.';
html=html.replace(/<title>.*?<\/title>/,`<title>${title}</title>`).replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g,`$1${desc}`).replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*/g,`$1${title}`).replace(/(<link rel="canonical" href=")[^"]*/,`$1${url}`).replace(/(<meta property="og:url" content=")[^"]*/,`$1${url}`).replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'CollectionPage',url,name:title,description:desc})}</script>`);
html=html.replace(/<main id="main">[\s\S]*?<\/main>/,`<main id="main"><section class="section case-hero"><div class="container"><p class="eyebrow">CLIENT FEEDBACK</p><h1>Upwork client <span>feedback.</span></h1><p class="case-lead">Feedback from completed Upwork contracts</p><p>Original supplied screenshots, cropped for privacy. Repeated screenshots appear once; client branding and billing details are withheld.</p><a class="button" href="https://www.upwork.com/freelancers/~0178b1b3d3b2fd6baa">View Upwork Profile ↗</a></div></section><section class="section"><div class="container feedback-grid">${reviews.map(card).join('')}</div></section></main>`);
fs.mkdirSync(path.join(root,'client-feedback'),{recursive:true});fs.writeFileSync(path.join(root,'client-feedback/index.html'),html);
const widget=`<!-- CLIENT-FEEDBACK START --><div class="feedback-trust"><a class="feedback-trigger" href="${prefix}client-feedback/" data-feedback-open><strong>Upwork Client Feedback</strong><span>View Reviews →</span></a></div><script src="${prefix}assets/js/client-feedback.js" defer></script><!-- CLIENT-FEEDBACK END -->`;
const dirs=['',...fs.readdirSync(root,{withFileTypes:true}).filter(e=>e.isDirectory()&&fs.existsSync(path.join(root,e.name,'index.html'))).map(e=>e.name)];
for(const dir of dirs){const file=path.join(root,dir,'index.html');let p=fs.readFileSync(file,'utf8').replace(/<!-- CLIENT-FEEDBACK START -->[\s\S]*?<!-- CLIENT-FEEDBACK END -->/g,'');p=p.replace('</body>',widget+'\n</body>');if(dir===''&&!p.includes('data-feedback-page-link'))p=p.replace('<p class="recommendations-link">',`<p class="recommendations-link" data-feedback-page-link><a href="${prefix}client-feedback/">Browse Upwork client feedback →</a></p><p class="recommendations-link">`);if(['case-study-divi-wordpress-maintenance','case-study-woocommerce-product-filters'].includes(dir)&&!p.includes('Browse completed-contract feedback'))p=p.replace('<h2>Evidence and scope</h2>',`<h2>Evidence and scope</h2><p><a href="${prefix}client-feedback/">Browse completed-contract feedback →</a></p>`);fs.writeFileSync(file,p);}
let sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');if(!sitemap.includes(url))fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap.replace('</urlset>',`<url><loc>${url}</loc></url>\n</urlset>`));
fs.writeFileSync(path.join(root,'assets/js/client-feedback-data.json'),JSON.stringify(reviews.slice(0,3).map(r=>({title:r[1],rating:r[2],date:r[3],quote:r[4],image:prefix+'assets/images/client-feedback/'+r[0]+'.webp'}))));
console.log('Built client feedback page and shared trust links.');
