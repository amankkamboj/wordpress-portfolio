'use strict';
(() => {
  const measurementId = 'G-5N5BEMMRD2';
  const storageKey = 'aman-portfolio-analytics-v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  const scriptUrl = new URL(document.currentScript.src);
  const siteRoot = new URL('../../', scriptUrl);
  let choice = null;
  let loaded = false;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && Date.now() - saved.time < lifetime && ['accepted', 'declined'].includes(saved.value)) choice = saved.value;
  } catch (_) { /* Storage can be unavailable; default to no analytics. */ }
  const panel = document.createElement('section');
  panel.className = 'analytics-choice';
  panel.setAttribute('aria-labelledby', 'analytics-heading');
  panel.innerHTML = `<div><h2 id="analytics-heading">Your analytics choice</h2><p>Allow Google Analytics to help me understand which pages and contact links visitors use? It stays off unless you accept. <a href="${siteRoot.pathname}privacy/">Privacy details</a></p></div><div class="analytics-actions"><button type="button" class="button" data-choice="declined">Decline analytics</button><button type="button" class="button" data-choice="accepted">Accept analytics</button></div>`;
  panel.hidden = choice !== null;
  document.body.append(panel);
  function start() {
    if (loaded || choice !== 'accepted') return;
    loaded = true;
    window['ga-disable-' + measurementId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: location.origin + location.pathname,
      page_referrer: document.referrer ? new URL(document.referrer).origin : ''
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(tag);
  }
  function clearAnalyticsCookies() {
    const domains = ['', location.hostname, '.' + location.hostname];
    const parts = location.hostname.split('.');
    if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.'));
    for (const item of document.cookie.split(';')) {
      const name = item.trim().split('=')[0];
      if (!/^_ga(?:_|$)/.test(name)) continue;
      for (const domain of domains) for (const cookiePath of ['/', siteRoot.pathname]) {
        document.cookie = `${name}=; Max-Age=0; path=${cookiePath}${domain ? '; domain=' + domain : ''}; SameSite=Lax`;
      }
    }
  }
  let opener;
  panel.addEventListener('click', event => {
    const button = event.target.closest('[data-choice]');
    if (!button) return;
    choice = button.dataset.choice;
    try { localStorage.setItem(storageKey, JSON.stringify({ value: choice, time: Date.now() })); } catch (_) {}
    panel.hidden = true;
    if (choice === 'accepted') start();
    else {
      window['ga-disable-' + measurementId] = true;
      clearAnalyticsCookies();
      if (loaded) { location.reload(); return; }
    }
    const focusTarget = opener || document.querySelector('[data-analytics-settings]');
    focusTarget?.focus();
  });
  document.querySelectorAll('[data-analytics-settings]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      opener = button;
      panel.hidden = false;
      panel.querySelector('button').focus();
    });
  });
  document.addEventListener('click', event => {
    if (choice !== 'accepted' || !loaded) return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    const contactMethod = href.startsWith('mailto:') ? 'email' : /^https:\/\/(www\.)?linkedin\.com\/in\//.test(href) ? 'linkedin' : null;
    if (contactMethod) window.gtag('event', 'contact_click', { contact_method: contactMethod, page_path: location.pathname, transport_type: 'beacon' });
  });
  start();
})();
