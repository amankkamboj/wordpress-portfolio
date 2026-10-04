const sharp=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const path=require('node:path');
(async()=>{
 const dir='assets/images/case-studies/';
 // Original project images, with browser/account information excluded.
 await sharp(path.join(process.env.TEMP,'allie-editor.png')).extract({left:600,top:200,width:1250,height:400}).webp({quality:88}).toFile(dir+'agency-aeration-editor-reference.webp');
 await sharp(path.join(process.env.TEMP,'allie-production.png')).extract({left:740,top:180,width:1300,height:180}).webp({quality:88}).toFile(dir+'agency-aeration-production-css-issue.webp');
 await sharp(path.join(process.env.TEMP,'allie-compatibility.png')).extract({left:801,top:85,width:641,height:360}).webp({lossless:true}).toFile(dir+'agency-divi-legacy-module-warning.webp');
})();
