const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const slug=process.argv[2] || 'case-study-wordpress-malware-removal';
const server=http.createServer((req,res)=>{
 let file=path.join(root,decodeURIComponent(req.url.split('?')[0]).replace(/^\/wordpress-portfolio\//,''));
 if(!file.startsWith(root)){res.writeHead(403).end();return;}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 if(!fs.existsSync(file)){res.writeHead(404).end();return;}
 res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png'})[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));
});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const b=await chromium.launch({channel:'msedge',headless:true});
 try{
 const p=await b.newPage();
 for(const width of [360,390,768,1024,1440]){
 await p.setViewportSize({width,height:960});
 await p.goto(`http://127.0.0.1:${server.address().port}/wordpress-portfolio/${slug}/`,{waitUntil:'networkidle'});
 assert.equal(await p.locator('h1').count(),1);
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'overflow at '+width);
 for(const img of await p.locator('img[src]').all()){
 await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());
 }
 await p.evaluate(()=>scrollTo(0,0));
 assert.ok(await p.locator('img[src]').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)),'images at '+width);
 await p.keyboard.press('Tab');assert.equal(await p.locator(':focus').innerText(),'Skip to content');
 await p.keyboard.press('Enter');assert.equal(await p.locator(':focus').getAttribute('id'),'main');
 if(width===390||width===1440)await p.screenshot({path:path.join(process.env.TEMP,`${slug}-${width}.png`),fullPage:true});
 console.log(`Layout, images and keyboard skip link passed at ${width}px`);
 }
 }finally{await b.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
