// Run last after other service/case generators. Does not rebuild shared headers or forms.
const fs = require('node:fs');
const path = require('node:path');
const content = require('./search-improvement-content.cjs');
const root = path.resolve(__dirname, '..');
const prefix = '/wordpress-portfolio/';
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
for (const page of content) {
  const file = path.join(root, page.slug, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(page.title)}</title>`);
  html = html.replace(/(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*/g, (_, start) => start + escape(page.description));
  html = html.replace(/(<meta\s+(?:name|property)="(?:og:title|twitter:title)"\s+content=")[^"]*/g, (_, start) => start + escape(page.title));
  html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (tag, json) => {
    const data = JSON.parse(json);
    for (const node of data['@graph'] || [data]) {
      if (node['@type'] === 'WebPage') { node.name = page.title; node.description = page.description; }
      if (node['@type'] === 'Service') node.description = page.description;
    }
    return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
  });
  const summary = `<!-- SEARCH-SUMMARY START --><section class="section service-search-summary"><div class="container"><p class="eyebrow">SCOPE &amp; PROJECT EVIDENCE</p><h2>${escape(page.heading)}</h2><p class="search-summary-intro">${escape(page.intro)}</p><div class="case-proof">${page.evidence.map(([heading, text, slug, label]) => `<article><h3>${escape(heading)}</h3><p>${escape(text)}</p>${slug ? `<p><a href="${prefix}${slug}">${escape(label)} →</a></p>` : ''}</article>`).join('')}</div></div></section><!-- SEARCH-SUMMARY END -->`;
  html = html.replace(/<!-- SEARCH-SUMMARY START -->[\s\S]*?<!-- SEARCH-SUMMARY END -->\s*/g, '');
  const anchor = '<div class="container service-reading-layout">';
  if (!html.includes(anchor)) throw new Error('Missing reading layout: ' + page.slug);
  html = html.replace(anchor, summary + '\n' + anchor);
  const faq = `<!-- SEARCH-FAQ START --><section class="section hiring-faq" id="service-questions"><div class="container"><h2>Questions about ${page.slug.startsWith('woocommerce') ? 'WooCommerce development' : 'WordPress performance'}</h2><div class="faq-list">${page.faqs.map(([question, answer]) => `<details><summary>${escape(question)}</summary><p>${escape(answer)}</p></details>`).join('')}</div><p><a class="button" href="${prefix}#contact">Discuss your ${page.slug.startsWith('woocommerce') ? 'store' : 'website performance'} →</a></p></div></section><!-- SEARCH-FAQ END -->`;
  html = html.replace(/<!-- SEARCH-FAQ START -->[\s\S]*?<!-- SEARCH-FAQ END -->\s*/g, '');
  const faqAnchor = '<!-- CASE-STUDY-TEASER START -->';
  if (!html.includes(faqAnchor)) throw new Error('Missing project teaser: ' + page.slug);
  html = html.replace(faqAnchor, faq + '\n' + faqAnchor);
  if (!html.includes('href="#service-questions"')) html = html.replace('<nav aria-label="On this page">', '<nav aria-label="On this page"><a href="#service-questions">Service questions</a>');
  fs.writeFileSync(file, html);
}
console.log('Updated two priority service pages: metadata, evidence summaries and hiring questions.');
