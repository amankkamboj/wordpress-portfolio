const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('assets/js/analytics.js', 'utf8');
function run(choice, search = '') {
  const listeners = {};
  const scripts = [];
  const element = () => ({ setAttribute() {}, addEventListener() {} });
  const document = {
    currentScript: { src: 'https://example.com/wordpress-portfolio/assets/js/analytics.js' },
    referrer: 'https://www.google.com/search?q=private',
    createElement: element, body: { append() {} }, head: { append(s) { scripts.push(s); } },
    querySelectorAll: () => [], addEventListener(type, fn) { listeners[type] = fn; }
  };
  const window = {};
  vm.runInNewContext(source, { document, window, URL, URLSearchParams, Date,
    location: { origin: 'https://example.com', pathname: '/wordpress-portfolio/', search,
      href: 'https://example.com/wordpress-portfolio/' + search },
    localStorage: { getItem: () => JSON.stringify({ value: choice, time: Date.now() }) }
  });
  return { window, scripts, click(href, button = false) { listeners.click({ target: { closest: () => ({ getAttribute: () => href, closest: () => null, matches: () => button, textContent: 'Discuss Your Project' }) } }); } };
}
for (const choice of [null, 'declined']) {
  const result = run(choice);
  result.click('mailto:test@example.com');
  assert.equal(result.scripts.length, 0);
  assert.equal(result.window.dataLayer, undefined);
}
const result = run('accepted', '?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=vendor-case&email=private@example.com&utm_term=private%40example.com#secret');
assert.equal(result.scripts.length, 1);
const config = result.window.dataLayer.find(item => item[0] === 'config')[2];
assert.equal(config.page_location, 'https://example.com/wordpress-portfolio/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=vendor-case');
assert.equal(config.page_referrer, 'https://www.google.com');
for (const href of ['mailto:test@example.com?subject=private', 'https://www.linkedin.com/in/test/', '#contact', '/wordpress-portfolio/case-study-woocommerce-vendor-workflows/?private=value', 'https://external.example/case-study-test/', '/wordpress-portfolio/assets/images/case-studies/test.webp']) result.click(href);
const events = result.window.dataLayer.filter(item => item[0] === 'event');
assert.deepEqual(Array.from(events, item => item[1]), ['contact_click', 'contact_click', 'project_cta_click', 'case_study_click']);
assert.equal(events[3][2].destination_path, '/wordpress-portfolio/case-study-woocommerce-vendor-workflows/');
assert.ok(!JSON.stringify(events).includes('private'));
result.click('#contact', true);
result.click('/wordpress-portfolio/wordpress-security/');
result.click('/wordpress-portfolio/client-feedback/');
result.click('https://www.upwork.com/freelancers/test');
const additional = result.window.dataLayer.filter(item => item[0] === 'event').slice(4);
assert.deepEqual(Array.from(additional, item => item[1]), ['cta_click', 'project_cta_click', 'service_click', 'feedback_click', 'contact_click']);
assert.equal(additional[0][2].cta_label, 'Discuss Your Project');
assert.equal(additional[4][2].contact_method, 'upwork');
for (const choice of [null, 'declined']) {
  const disabled = run(choice);
  disabled.window.portfolioTrack('generate_lead', { form_id: 'portfolio-enquiry-form' });
  assert.equal(disabled.window.dataLayer, undefined);
}
const pages = ['index.html', ...fs.readdirSync('.').filter(name => fs.existsSync(name + '/index.html')).map(name => name + '/index.html')];
for (const page of pages) assert.equal((fs.readFileSync(page, 'utf8').match(/assets\/js\/analytics\.js/g) || []).length, 1, page);
console.log(`Analytics checks passed: consent, safe attribution, contact/navigation events, ${pages.length} pages.`);
