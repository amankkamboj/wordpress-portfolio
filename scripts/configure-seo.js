/** Update the production base URL across static pages and rebuild the sitemap. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const raw = process.argv[2];
if (!raw) throw new Error('Usage: node scripts/configure-seo.js YOUR_REAL_HTTPS_HOMEPAGE_URL');
const site = new URL(raw);
if (site.protocol !== 'https:' || site.search || site.hash || site.username || site.password) throw new Error('Use a public HTTPS URL without credentials, query or fragment.');
if (/^(localhost|127\.0\.0\.1|example\.(com|org|net))$/.test(site.hostname)) throw new Error('Use the actual production domain.');
site.pathname = site.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/');
const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const old = new URL(home.match(/<link rel="canonical" href="([^"]+)"/)[1]);
const pages = ['', ...fs.readdirSync(root, {withFileTypes:true}).filter(entry => entry.isDirectory() && !entry.name.startsWith('.') && fs.existsSync(path.join(root, entry.name, 'index.html'))).map(entry => entry.name + '/')];
for (const page of pages) {
  const file = path.join(root, page, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.split(old.href).join(site.href);
  for (const attr of ['href', 'src']) html = html.split(`${attr}="${old.pathname}`).join(`${attr}="${site.pathname}`);
  fs.writeFileSync(file, html);
}
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;');
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${escape(new URL(page, site).href)}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', site).href}\n`);
console.log(`Updated production URLs across ${pages.length} pages. No deployment date has been asserted.`);
if (site.pathname !== '/') console.log('Submit this project sitemap directly in Search Console; robots.txt is honored only at the origin root.');
