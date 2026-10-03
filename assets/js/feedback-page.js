'use strict';
(() => {
  const filters=document.querySelector('.feedback-filters');
  if(filters){
    filters.hidden=false;
    const cards=[...document.querySelectorAll('[data-feedback-topics]')];
    filters.addEventListener('click',event=>{
      const button=event.target.closest('[data-feedback-filter]');if(!button)return;
      filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      const topic=button.dataset.feedbackFilter;
      cards.forEach(card=>{card.hidden=topic!=='All'&&!card.dataset.feedbackTopics.split(' ').includes(topic);});
      const count=cards.filter(c=>!c.hidden).length;
      document.querySelector('.feedback-results').textContent=`Showing ${count} contract ${count===1?'review':'reviews'}${topic==='All'?'':' for '+topic}`;
    });
  }
  if(!window.HTMLDialogElement || !HTMLDialogElement.prototype.showModal)return;
  const dialog=document.createElement('dialog');dialog.className='feedback-image-modal';dialog.setAttribute('aria-label','Original Upwork feedback screenshot');
  const close=document.createElement('button');close.type='button';close.className='button';close.textContent='Close screenshot ×';
  const image=document.createElement('img');dialog.append(close,image);document.body.append(dialog);
  let opener;
  document.querySelectorAll('[data-feedback-image]').forEach(link=>link.addEventListener('click',event=>{
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    event.preventDefault();opener=link;image.src=link.href;image.alt=link.querySelector('img').alt;dialog.showModal();document.body.classList.add('feedback-open');close.focus();
  }));
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{document.body.classList.remove('feedback-open');opener?.focus();});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
})();
