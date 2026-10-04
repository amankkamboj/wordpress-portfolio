const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const routes=['',...fs.readdirSync(root,{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(path.join(root,d.name,'index.html'))).map(d=>d.name+'/')];
const server=http.createServer((req,res)=>{
 let file=path.join(root,decodeURIComponent(req.url.split('?')[0]).replace(/^\/wordpress-portfolio\//,''));
 if(!file.startsWith(root)){res.writeHead(403).end();return;}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 if(!fs.existsSync(file)){res.writeHead(404).end();return;}
 res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png'})[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try {
  const page=await browser.newPage();let errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  for(const route of routes){
   for(const width of [390,1440]){
    await page.setViewportSize({width,height:960});
    await page.goto(`http://127.0.0.1:${server.address().port}/wordpress-portfolio/${route}`,{waitUntil:'networkidle'});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${route}: overflow at ${width}`);
    for(const img of await page.locator('img[src]:not([src=""])').all())await img.evaluate(async i=>{i.loading='eager';await i.decode();});
    for(const card of await page.locator('.case-card').all())assert.equal(await card.locator('.case-card-media').count(),1);
    await page.evaluate(()=>scrollTo(0,0));await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').innerText(),'Skip to content');await page.keyboard.press('Enter');
    assert.equal(await page.locator(':focus').getAttribute('id'),'main');
    assert.deepEqual(errors,[],route+': JavaScript errors');errors=[];
   }
   console.log(`Passed mobile/desktop: ${route||'homepage'}`);
  }
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
