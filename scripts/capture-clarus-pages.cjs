const {chromium}=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const sharp=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{
 const b=await chromium.launch({channel:'msedge',headless:true});
 try{
 for(const [slug,name] of [['companionship','clarus-companionship-service'],['companionship-enquiry','clarus-companionship-enquiry-form'],['about-us','clarus-about-us']]){
 const p=await b.newPage({viewport:{width:1440,height:1000}});
 await p.goto('https://clarushealthcare.co.uk/'+slug+'/',{waitUntil:'domcontentloaded',timeout:30000});
 console.log(slug,await p.title(),(await p.locator('body').innerText()).slice(0,3500));
 const deny=p.getByRole('button',{name:'Deny',exact:true});
 if(await deny.count())await deny.first().click();
 await p.locator('img').evaluateAll(imgs=>Promise.all(imgs.filter(i=>{const r=i.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight}).map(i=>i.decode().catch(()=>{}))));
 const buffer=await p.screenshot({fullPage:true});
 await sharp(buffer).webp({quality:85}).toFile('assets/images/case-studies/'+name+'.webp');
 await p.close();
 }
 }finally{await b.close();}
})();
