'use strict';
(() => {
  const trigger=document.querySelector('[data-feedback-open]');
  if(!trigger || !window.HTMLDialogElement || !HTMLDialogElement.prototype.showModal) return;
  const dialog=document.createElement('dialog');
  dialog.className='feedback-modal';
  dialog.id='client-feedback-modal';
  trigger.setAttribute('aria-haspopup','dialog');
  trigger.setAttribute('aria-controls',dialog.id);
  dialog.setAttribute('aria-labelledby','feedback-modal-title');
  dialog.innerHTML='<div class="feedback-modal-head"><div><h2 id="feedback-modal-title">Upwork Client Feedback</h2><p>Feedback from completed Upwork contracts</p></div><button type="button" class="button" autofocus aria-label="Close client feedback">Close ×</button></div><div class="feedback-modal-cards"></div><a class="button primary" href="/wordpress-portfolio/client-feedback/">View All Client Feedback →</a>';
  document.body.append(dialog);
  const close=dialog.querySelector('button'),cards=dialog.querySelector('.feedback-modal-cards');
  let loaded=false;
  trigger.addEventListener('click',async event=>{
    if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    dialog.showModal();document.body.classList.add('feedback-open');close.focus();
    if(loaded)return;
    cards.textContent='Loading feedback…';
    try{
      const response=await fetch('/wordpress-portfolio/assets/js/client-feedback-data.json');
      if(!response.ok)throw new Error('Unavailable');
      const reviews=await response.json();cards.textContent='';
      reviews.forEach(r=>{const article=document.createElement('article');article.className='feedback-card';
        const title=document.createElement('h3');title.textContent=r.title;
        const meta=document.createElement('p');meta.textContent=r.rating+'/5 · '+r.date;
        const quote=document.createElement('blockquote');quote.textContent='“'+r.quote+'”';
        const link=document.createElement('a');link.href=r.image;link.setAttribute('aria-label','Open feedback screenshot for '+r.title);
        const img=document.createElement('img');img.src=r.image;img.alt='Original Upwork feedback: '+r.title+', '+r.rating+' out of 5';link.append(img);article.append(title,meta,quote,link);cards.append(article);
      });loaded=true;
    }catch{cards.textContent='The preview could not load. View all client feedback using the link below.';}
  });
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('feedback-open');trigger.focus();});
})();
