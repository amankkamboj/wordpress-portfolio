// Run after page/evidence builders so every project preview uses one shared layout.
const fs = require('node:fs');
const path = require('node:path');
const prefix = '/wordpress-portfolio/';
const images = {
 'case-study-divi-wordpress-maintenance': ['agency-divi-legacy-module-warning.webp', 'Anonymous Divi compatibility finding'],
 'case-study-wordpress-malware-removal': ['sav-associates-wordpress-malware-recovery.webp', 'SAV Associates recovered homepage'],
 'case-study-woocommerce-stripe-tax': ['irreconcilable-differences-store.webp', 'Apparel storefront from the Stripe Tax project'],
 'case-study-wordpress-enquiry-workflow': ['clarus-companionship-service-preview.webp', 'Companionship enquiry service page'],
 'case-study-wordpress-quiz-funnel': ['quiz-funnel-redesigned-landing.webp', 'Redesigned quiz funnel landing page'],
 'case-study-woocommerce-vendor-workflows': ['marketplace-order-navigation.webp', 'Marketplace order navigation interface'],
 'case-study-woocommerce-affiliate-tracking': ['affiliate-dashboard.webp', 'Affiliate tracking dashboard']
};
const files = ['index.html', ...fs.readdirSync('.',{withFileTypes:true}).filter(d=>d.isDirectory() && fs.existsSync(path.join(d.name,'index.html'))).map(d=>path.join(d.name,'index.html'))];
const pattern = /<article class="case-card(?: [^"]*)?">[\s\S]*?<\/article>/g;
const canonical = new Map();
for (const file of files) {
 for (const card of fs.readFileSync(file,'utf8').match(pattern)||[]) {
  const slug = card.match(/href="\/wordpress-portfolio\/(case-study-[^/]+)\//)?.[1];
  if (slug && !canonical.has(slug)) canonical.set(slug,card);
 }
}
let count=0;
for (const file of files) {
 const html=fs.readFileSync(file,'utf8');
 const updated=html.replace('<main id="main">','<main id="main" tabindex="-1">').replace(pattern,card=>{
  const slug=card.match(/href="\/wordpress-portfolio\/(case-study-[^/]+)\//)?.[1];
  if(!slug)return card;
  let content=canonical.get(slug).replace(/<article[^>]*>/,'<article class="case-card">');
  content=content.replace(/<a\b[^>]*>\s*<img\b[^>]*>\s*<\/a>/g,'').replace(/<div class="icon-box">[\s\S]*?<\/div>/g,'');
  const image=images[slug];
  const media=image ? `<a class="case-card-media" href="${prefix}${slug}/" aria-label="View case study: ${image[1]}"><img src="${prefix}assets/images/case-studies/${image[0]}" alt="${image[1]}" loading="lazy" decoding="async"></a>` : `<a class="case-card-media case-card-placeholder" href="${prefix}${slug}/" aria-label="View project case study"><svg aria-hidden="true" viewBox="0 0 64 64"><rect x="10" y="12" width="44" height="40" rx="4"/><path d="M10 23h44M20 33h24M20 42h16"/></svg><span>Project case study</span></a>`;
  content=content.replace('<article class="case-card">','<article class="case-card">'+media);
  content=content.replace(/<a class="case-read"[^>]*>[\s\S]*?<\/a>/,`<a class="case-read" href="${prefix}${slug}/">Read case study <span aria-hidden="true">→</span></a>`);
  count++;return content;
 });
 if(updated!==html)fs.writeFileSync(file,updated);
}
console.log(`Standardized ${count} project cards across ${files.length} pages.`);
