const sharp=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{
 const dir='assets/images/case-studies/';
 const source=process.argv[2];
 if(!source)throw Error('Provide original cart screenshot path');
 const mask=Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="840" height="98"><rect width="840" height="98" fill="#e9eef3"/><text x="420" y="58" text-anchor="middle" font-family="Arial" font-size="23" fill="#405368">Shipping address removed for privacy</text></svg>');
 await sharp(source).composite([{input:mask,left:1390,top:490}]).webp({quality:92}).toFile(dir+'irreconcilable-differences-cart-tax-redacted.webp');
 await sharp(dir+'irreconcilable-differences-store.png').webp({quality:85}).toFile(dir+'irreconcilable-differences-store.webp');
})();
