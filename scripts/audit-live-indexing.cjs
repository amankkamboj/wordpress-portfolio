const fs = require('node:fs');
(async () => {
  const base = 'https://amankkamboj.github.io/wordpress-portfolio/';
  const urls = [...fs.readFileSync('sitemap.xml', 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  const results = await Promise.all(urls.map(async url => {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
      const html = await response.text();
      return { url, status: response.status,
        analytics: (html.match(/assets\/js\/analytics\.js/g) || []).length,
        canonical: [...html.matchAll(/<link\b[^>]*>/g)].some(m => /rel="canonical"/.test(m[0]) && m[0].includes(`href="${url}"`)),
        noindex: /<meta[^>]+name="(?:robots|googlebot)"[^>]+noindex/i.test(html),
        robotsHeader: response.headers.get('x-robots-tag') };
    } catch (error) { return { url, error: error.message }; }
  }));
  for (const file of ['robots.txt', 'sitemap.xml', 'assets/js/analytics.js', 'assets/js/main.js']) {
    try {
      const response = await fetch(base + file, { signal: AbortSignal.timeout(15000) });
      const body = await response.text();
      results.push({ url: base + file, status: response.status, matchesLocal: body.replace(/\r\n/g, '\n') === fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n') });
    } catch (error) { results.push({ url: base + file, error: error.message }); }
  }
  fs.writeFileSync('live-indexing-audit.json', JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2) + '\n');
  console.log(JSON.stringify(results, null, 2));
  if (results.some(r => r.error || r.status !== 200 || r.noindex || r.robotsHeader?.includes('noindex') || ('analytics' in r && (r.analytics !== 1 || !r.canonical)))) process.exitCode = 1;
})();
