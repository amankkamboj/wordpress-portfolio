'use strict';
const path = require('node:path');
const sharp = require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const images = require('./researched-case-images.cjs');
(async()=>{
 for(const image of Object.values(images).flat()) {
  let pipeline=sharp(path.join(process.env.TEMP,'portfolio-upwork-images',image.source));
  if(image.crop) pipeline=pipeline.extract(image.crop);
  await pipeline.webp({lossless:true}).toFile(path.join(__dirname,'../assets/images/case-studies',image.file));
 }
 console.log('Prepared nine original attachment crops without source metadata.');
})().catch(error=>{console.error(error.message);process.exitCode=1;});
