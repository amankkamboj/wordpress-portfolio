/** Maintenance utility for changing the public homepage URL. No runtime dependency. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const raw = process.argv[2];
if (!raw) throw new Error('Usage: node scripts/configure-seo.js https://your-real-domain-or-pages-url/');
const site = new URL(raw);
if (site.protocol !== 'https:' || site.search || site.hash || site.username || site.password) {
  throw new Error('Provide the public HTTPS homepage URL without credentials, query or fragment.');
}
if (/^(localhost|127\.0\.0\.1|example\.(com|org|net))$/.test(site.hostname)) throw new Error('Use the actual production domain.');
site.pathname = site.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/');
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<link rel="canonical"[^>]*>\s*/g, '').replace(/<meta property="og:url"[^>]*>\s*/g, '');
html = html.replace('</head>', `<link rel="canonical" href="${escape(site.href)}">\n<meta property="og:url" content="${escape(site.href)}">\n</head>`);
html = html.replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${escape(new URL('assets/images/profile.jpg', site).href)}">`);
html = html.replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${escape(new URL('assets/images/profile.jpg', site).href)}">`);
html = html.replace(/(<script type="application\/ld\+json" id="person-schema">)([\s\S]*?)(<\/script>)/, (_,open,json,close) => {
  const person = JSON.parse(json);
  person.url = site.href;
  person.image = new URL('assets/images/profile.jpg', site).href;
  person['@id'] = site.href + '#aman-kumar';
  return open + '\n' + JSON.stringify(person, null, 2).replace(/</g, '\\u003c') + '\n' + close;
});
fs.writeFileSync(path.join(root, 'index.html'), html);
const sitemapPath = path.join(root, 'sitemap.xml');
const oldSitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const lastmod = oldSitemap.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/)?.[1];
fs.writeFileSync(sitemapPath, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${escape(site.href)}</loc>${lastmod ? '\n    <lastmod>' + lastmod + '</lastmod>' : ''}\n  </url>\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', site).href}\n`);
console.log('Updated canonical URL, social URLs, person schema, sitemap.xml and robots.txt.');
if (site.pathname !== '/') console.log('robots.txt is only honored at the origin root. Submit this project sitemap directly in Search Console.');
