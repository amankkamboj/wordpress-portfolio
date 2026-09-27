'use strict';
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const servicesMenu = document.querySelector('.services-menu');
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
