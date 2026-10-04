const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname,'..');
const files = ['index.html', ...fs.readdirSync(root,{withFileTypes:true}).filter(d=>d.isDirectory() && fs.existsSync(path.join(root,d.name,'index.html'))).map(d=>path.join(d.name,'index.html'))];
const before = files.map(file=>fs.readFileSync(path.join(root,file),'utf8'));
execFileSync(process.execPath,[path.join(__dirname,'normalize-project-cards.cjs')],{cwd:root});
if (before.some(html=>html.includes('data-image-source='))) execFileSync(process.execPath,[path.join(__dirname,'optimize-site-images.cjs')],{cwd:root});
let cards=0;
files.forEach((file,i)=>{
 const html=fs.readFileSync(path.join(root,file),'utf8');
 assert.equal(html,before[i],`Repeated build changed ${file}`);
 for(const card of html.match(/<article class="case-card">[\s\S]*?<\/article>/g)||[]){
  assert.equal((card.match(/class="case-card-media\b/g)||[]).length,1,`Duplicate or missing preview in ${file}`);
  cards++;
 }
});
console.log(`Verified ${cards} cards have one preview and rebuilding leaves all pages unchanged.`);
