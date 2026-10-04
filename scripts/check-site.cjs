const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = 'https://amankkamboj.github.io/wordpress-portfolio/';
const pages = ['index.html', ...fs.readdirSync('.').filter(x => fs.existsSync(x + '/index.html')).map(x => x + '/index.html')];
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(x => [x[1], x[2]]));
const titles = new Set();
const descriptions = new Set();
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const url = base + (file === 'index.html' ? '' : file.replace(/index\.html$/, ''));
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(x => attributes(x[0]));
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(x => attributes(x[0]));
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), file + ': unique title'); titles.add(title);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, file + ': one H1');
  assert.ok(metas.find(x => x.name === 'description')?.content, file + ': description');
  const description = metas.find(x => x.name === 'description').content;
  assert.ok(!descriptions.has(description), file + ': unique description'); descriptions.add(description);
  assert.ok(metas.find(x => x.name === 'viewport'), file + ': mobile viewport');
  assert.ok(/<html\b[^>]*lang="en"/.test(html), file + ': document language');
  assert.ok(!/noindex/.test(metas.find(x => x.name === 'robots')?.content || ''), file + ': indexable');
  assert.equal(links.find(x => x.rel === 'canonical')?.href, url, file + ': canonical');
  assert.equal(metas.find(x => x.property === 'og:url')?.content, url, file + ': social URL');
  for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (attributes(script[1]).type === 'application/ld+json') JSON.parse(script[2]);
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x => x[1]);
  assert.equal(ids.length, new Set(ids).size, file + ': unique IDs');
  for (const tag of html.matchAll(/<(a|img|script|link)\b[^>]*>/g)) {
    const attr = attributes(tag[0]);
    if (tag[1] === 'img') {
      assert.ok('alt' in attr, file + ': image alt');
      if (attr.src && !attr.src.endsWith('.svg')) assert.ok(Number(attr.width)>0 && Number(attr.height)>0, file + ': image dimensions');
      for (const candidate of (attr.srcset || '').split(',').filter(Boolean)) {
        const imageUrl = new URL(candidate.trim().split(/\s+/)[0], url);
        if (imageUrl.origin === new URL(base).origin) assert.ok(fs.existsSync(imageUrl.pathname.slice(new URL(base).pathname.length)), file + ': responsive image missing');
      }
    }
    const raw = attr.href || attr.src;
    if (!raw || /^(?:mailto:|tel:|data:)/.test(raw)) continue;
    const target = new URL(raw.replaceAll('&amp;', '&'), url);
    if (target.origin !== new URL(base).origin || !target.pathname.startsWith(new URL(base).pathname)) continue;
    let local = decodeURIComponent(target.pathname.slice(new URL(base).pathname.length));
    if (!local || local.endsWith('/')) local += 'index.html';
    assert.ok(fs.existsSync(local), file + ': missing ' + local);
    if (target.hash && local.endsWith('.html')) {
      assert.ok(fs.readFileSync(local, 'utf8').includes('id="' + target.hash.slice(1) + '"'), file + ': missing anchor ' + raw);
    }
  }
  if (file.startsWith('case-study-') || /^(wordpress|woocommerce)-/.test(file)) {
    const cta = html.match(/<section class="section contact service-contact">([\s\S]*?)<\/section>/)?.[1];
    assert.ok(cta?.includes('href="/wordpress-portfolio/#contact"'), file + ': enquiry CTA');
  }
}
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, pages.length, 'sitemap count');
for (const file of pages) assert.ok(sitemap.includes(base + (file === 'index.html' ? '' : file.replace(/index\.html$/, ''))), 'sitemap: ' + file);
assert.equal((fs.readFileSync('index.html', 'utf8').match(/<a href="\/wordpress-portfolio\/case-studies\/">Case Studies<\/a>/g) || []).length, 2, 'one header and one footer case-studies link');
console.log(`Site checks passed across ${pages.length} pages: metadata, H1s, canonicals, schema JSON, local links/assets/anchors, image alt, CTA routing and sitemap.`);
