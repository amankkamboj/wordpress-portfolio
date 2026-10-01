'use strict';
const galleryLinks = document.querySelectorAll('[data-case-image]');
if (galleryLinks.length && typeof HTMLDialogElement !== 'undefined' && 'showModal' in HTMLDialogElement.prototype) {
  const dialog = document.createElement('dialog');
  dialog.className = 'case-lightbox';
  dialog.setAttribute('aria-label', 'Project screenshot');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'case-lightbox-close';
  close.textContent = 'Close screenshot ×';
  const image = document.createElement('img');
  const caption = document.createElement('p');
  caption.id = 'case-lightbox-caption';
  dialog.setAttribute('aria-describedby', caption.id);
  dialog.append(close, image, caption);
  document.body.append(dialog);
  let opener;
  galleryLinks.forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
    dialog.showModal();
    document.body.classList.add('case-image-open');
    close.focus();
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('case-image-open');
    opener?.focus();
  });
}
