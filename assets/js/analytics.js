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
  // Retain campaign identifiers without sending arbitrary query strings or fragments.
  const analyticsUrl = new URL(location.origin + location.pathname);
  const incomingParams = new URLSearchParams(location.search);
  for (const name of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id']) {
    const value = incomingParams.get(name);
    if (value && /^[a-zA-Z0-9_-]{1,100}$/.test(value)) analyticsUrl.searchParams.set(name, value);
  }
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
      page_location: analyticsUrl.href,
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
  // One consent-aware entry point: never pass form values or arbitrary URLs.
  window.portfolioTrack = function (name, parameters = {}) {
    if (choice !== 'accepted' || !loaded) return;
    try {
      window.gtag('event', name, { ...parameters, page_path: location.pathname,
        page_location: analyticsUrl.href, transport_type: 'beacon' });
    } catch (_) { /* Measurement must not interrupt navigation or enquiries. */ }
  };
  function placement(link) {
    const section = link.closest('section[id]');
    return link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : section?.id || 'content';
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
    const details = { link_location: placement(link) };
    // Labels are restricted to static button text, never email addresses or form fields.
    if (link.matches('.button')) window.portfolioTrack('cta_click', {
      ...details, cta_label: link.textContent.trim().replace(/\s+/g, ' ').slice(0, 100)
    });
    const contactMethod = href.startsWith('mailto:') ? 'email' : href.startsWith('tel:') ? 'phone' : /^https:\/\/(www\.)?linkedin\.com\/in\//.test(href) ? 'linkedin' : /^https:\/\/(www\.)?upwork\.com\/freelancers\//.test(href) ? 'upwork' : null;
    if (contactMethod) window.portfolioTrack('contact_click', { ...details, contact_method: contactMethod });
    if (contactMethod) return;
    let destination;
    try { destination = new URL(href, location.href); } catch (_) { return; }
    if (destination.origin !== location.origin) return;
    if (destination.hash === '#contact') {
      window.portfolioTrack('project_cta_click', details);
    } else if (destination.pathname.startsWith(siteRoot.pathname + 'case-study-')) {
      window.portfolioTrack('case_study_click', { ...details, destination_path: destination.pathname });
    } else if (destination.pathname === siteRoot.pathname + 'client-feedback/') {
      window.portfolioTrack('feedback_click', details);
    } else if (/^(wordpress|woocommerce)-/.test(destination.pathname.slice(siteRoot.pathname.length))) {
      window.portfolioTrack('service_click', { ...details, destination_path: destination.pathname });
    }
  });
  start();
})();
