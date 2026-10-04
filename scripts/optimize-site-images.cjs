// Run last after page/card builders. Originals remain available for full-size evidence.
const fs=require('node:fs'),path=require('node:path');
const sharp=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root=path.resolve(__dirname,'..'),prefix='/wordpress-portfolio/';
const pages=['index.html',...fs.readdirSync(root,{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(path.join(root,d.name,'index.html'))).map(d=>path.join(d.name,'index.html'))];
const output='assets/images/optimized';fs.mkdirSync(path.join(root,output),{recursive:true});
const processed=new Map();let originalBytes=0,optimizedBytes=0,count=0;
(async()=>{
 const icons=[];
 for(const width of [16,32,48])icons.push({width,data:await sharp(path.join(root,'assets/images/favicon-96.png')).resize(width,width).png({compressionLevel:9}).toBuffer()});
 const iconHeader=Buffer.alloc(6+16*icons.length);iconHeader.writeUInt16LE(1,2);iconHeader.writeUInt16LE(icons.length,4);
 let iconOffset=iconHeader.length;
 icons.forEach((icon,i)=>{const entry=6+i*16;iconHeader[entry]=icon.width;iconHeader[entry+1]=icon.width;iconHeader.writeUInt16LE(1,entry+4);iconHeader.writeUInt16LE(32,entry+6);iconHeader.writeUInt32LE(icon.data.length,entry+8);iconHeader.writeUInt32LE(iconOffset,entry+12);iconOffset+=icon.data.length;});
 fs.writeFileSync(path.join(root,'assets/images/favicon.ico'),Buffer.concat([iconHeader,...icons.map(icon=>icon.data)]));
 for(const file of pages){
  let html=fs.readFileSync(path.join(root,file),'utf8').replaceAll('sizes="16x16 32x32 48x48 64x64 128x128 256x256"','sizes="16x16 32x32 48x48"');
  const iconLinks=new Set();
  html=html.replace(/<link\b[^>]*>/g,tag=>{
   const rel=tag.match(/\brel="([^"]+)"/)?.[1],href=tag.match(/\bhref="([^"]+)"/)?.[1];
   if(!['icon','apple-touch-icon'].includes(rel))return tag;
   const key=rel+':'+href;if(iconLinks.has(key))return '';iconLinks.add(key);return tag;
  });
  const tags=[...html.matchAll(/<img\b[^>]*>/g)];
  for(const [tag] of tags){
   const source=tag.match(/(?:data-image-source|src)="([^"]+)"/)?.[1];
   if(!source||! /\.(?:png|jpe?g|webp)$/i.test(source)||/^https?:/.test(source))continue;
   const local=source.startsWith(prefix)?source.slice(prefix.length):path.posix.normalize(path.posix.join(path.dirname(file).replaceAll('\\','/'),source));
   if(local.includes('/optimized/'))continue;
   if(!processed.has(local)){
    const input=path.join(root,local),meta=await sharp(input).metadata();
    const max=Math.min(meta.width,1440),widths=[480,960,max].filter((w,i,a)=>w<=max&&a.indexOf(w)===i).sort((a,b)=>a-b);
    const stem=local.replace(/^assets\/images\//,'').replace(/\.[^.]+$/,'').replaceAll('/','-');
    const variants=[];
    for(const width of widths){const name=`${output}/${stem}-${width}.webp`;await sharp(input).rotate().resize({width,withoutEnlargement:true}).webp({quality:82,effort:6}).toFile(path.join(root,name));variants.push({url:prefix+name,width});}
    const largest=variants.at(-1),render=await sharp(path.join(root,largest.url.slice(prefix.length))).metadata();
    originalBytes+=fs.statSync(input).size;optimizedBytes+=fs.statSync(path.join(root,largest.url.slice(prefix.length))).size;
    processed.set(local,{variants,render});
   }
   const {variants,render}=processed.get(local);
   let next=tag.replace(/\s(?:src|srcset|sizes|width|height|decoding|data-image-source)="[^"]*"/g,'');
   const sizes=/class="portrait"/.test(tag)?'(max-width: 768px) 80vw, 420px':tag.includes('case-studies/')||tag.includes('/projects/')?'(max-width: 768px) 90vw, (max-width: 1000px) 80vw, 960px':'(max-width: 768px) 90vw, 800px';
   next=next.replace(/>$/,` data-image-source="${source}" src="${variants.at(-1).url}" srcset="${variants.map(v=>`${v.url} ${v.width}w`).join(', ')}" sizes="${sizes}" width="${render.width}" height="${render.height}" decoding="async">`);
   html=html.replace(tag,next);count++;
  }
  fs.writeFileSync(path.join(root,file),html);
 }
 console.log(`Optimized ${processed.size} images across ${count} placements. Full-size display assets: ${originalBytes} → ${optimizedBytes} bytes (${Math.round((1-optimizedBytes/originalBytes)*100)}% smaller); smaller responsive variants also supplied.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
