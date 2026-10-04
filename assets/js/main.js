'use strict';
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const servicesMenu = document.querySelector('.services-menu');
// Keep page groups and homepage sections visible in the shared navigation.
const navLinks = [...navigation.querySelectorAll('a')];
const navPath = value => value.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
const currentPath = navPath(location.pathname);
const homeLink = navLinks.find(link => new URL(link.href).hash === '#home');
const homePath = homeLink ? navPath(new URL(homeLink.href).pathname) : '/';
function markNavigation(link, type = 'page') {
  navLinks.forEach(item => {
    item.classList.toggle('is-active', item === link);
    if (item === link) item.setAttribute('aria-current', type);
    else item.removeAttribute('aria-current');
  });
  servicesMenu?.classList.toggle('is-active', !!link && servicesMenu.contains(link));
}
if (currentPath === homePath) {
  const sections = navLinks.map(link => ({link, url:new URL(link.href)}))
    .filter(item => navPath(item.url.pathname) === homePath && item.url.hash)
    .map(item => ({link:item.link, section:document.getElementById(item.url.hash.slice(1))}))
    .filter(item => item.section);
  function updateSectionNavigation() {
    const offset = (document.querySelector('.site-header')?.getBoundingClientRect().height || 80) + 32;
    const ordered = sections.slice().sort((a,b) => a.section.offsetTop - b.section.offsetTop);
    let selected = ordered[0];
    for (const item of ordered) if (item.section.getBoundingClientRect().top <= offset) selected = item;
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) selected = ordered.at(-1);
    markNavigation(selected?.link, 'location');
  }
  let navFramePending = false;
  window.addEventListener('scroll', () => {
    if (navFramePending) return;
    navFramePending = true;
    requestAnimationFrame(() => { navFramePending = false; updateSectionNavigation(); });
  }, {passive:true});
  window.addEventListener('resize', updateSectionNavigation);
  window.addEventListener('hashchange', updateSectionNavigation);
  window.addEventListener('load', updateSectionNavigation);
  updateSectionNavigation();
} else {
  let active = navLinks.find(link => {
    const url = new URL(link.href);
    return !url.hash && navPath(url.pathname) === currentPath;
  });
  if (!active && /\/case-study-[^/]+$/.test(currentPath)) active = navLinks.find(link => /\/case-studies\/$/.test(new URL(link.href).pathname));
  if (!active && /\/client-feedback$/.test(currentPath)) active = navLinks.find(link => new URL(link.href).hash === '#testimonials');
  markNavigation(active);
}
function closeMenu() {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  if (servicesMenu) servicesMenu.open = false;
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  if (!expanded) { closeMenu(); return; }
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close navigation');
  navigation.classList.add('is-open');
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (servicesMenu?.open) {
    servicesMenu.open = false;
    servicesMenu.querySelector('summary').focus();
  } else if (menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header-inner')) closeMenu();
  else if (servicesMenu && !servicesMenu.contains(event.target)) servicesMenu.open = false;
});
document.addEventListener('focusin', event => {
  if (servicesMenu?.open && !servicesMenu.contains(event.target)) servicesMenu.open = false;
});
window.matchMedia('(min-width: 769px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

// Animate a section once when it enters view. Content is never hidden while waiting
// for JavaScript or the observer, and motion preference changes take effect live.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
const seenSections = new WeakSet();
function configureReveals() {
  revealObserver?.disconnect();
  document.querySelectorAll('.reveal-once').forEach(element => element.classList.remove('reveal-once'));
  if (motionPreference.matches || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      seenSections.add(entry.target);
      entry.target.classList.add('reveal-once');
      revealObserver.unobserve(entry.target);
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .certifications-heading, .certificate-card, .service-copy-section, .related-grid').forEach(element => {
    if (!seenSections.has(element)) revealObserver.observe(element);
  });
}
configureReveals();
motionPreference.addEventListener('change', configureReveals);

// The enquiry endpoint validates submissions independently of these browser checks.
const enquiryForm = document.querySelector('#portfolio-enquiry-form');
if (enquiryForm) {
  const submitButton = enquiryForm.querySelector('[type="submit"]');
  const status = document.querySelector('#enquiry-status');
  const pageUrl = enquiryForm.elements.namedItem('page_url');
  pageUrl.value = window.location.href;
  let sending = false;
  enquiryForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending) return;
    status.textContent = '';
    for (const name of ['name', 'email', 'website', 'message']) {
      const field = enquiryForm.elements.namedItem(name);
      field.value = field.value.trim();
    }
    if (!enquiryForm.reportValidity()) return;
    pageUrl.value = window.location.href;
    const payload = Object.fromEntries(new FormData(enquiryForm));
    sending = true;
    submitButton.disabled = true;
    enquiryForm.setAttribute('aria-busy', 'true');
    status.textContent = 'Sending…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://royalblue-salmon-626763.hostingersite.com/portfolio-form/submit.php', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload), signal: controller.signal,
        credentials: 'omit', referrerPolicy: 'no-referrer'
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Submission rejected');
      enquiryForm.reset();
      pageUrl.value = window.location.href;
      status.textContent = 'Thanks — your enquiry has been sent successfully.';
      if (typeof window.gtag === 'function') {
        try { window.gtag('event', 'generate_lead', { lead_source: 'portfolio_enquiry_form' }); } catch (_) { /* Analytics must not interrupt a successful enquiry. */ }
      }
    } catch (_) {
      status.textContent = 'Your enquiry could not be sent right now. You can also email me directly at amankamboj2387@gmail.com.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      submitButton.disabled = false;
      enquiryForm.removeAttribute('aria-busy');
    }
  });
}
