const sharp=require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{
 const dir='assets/images/case-studies/';
 await sharp(dir+'sav-associates-wordpress-malware-recovery.png').webp({quality:85}).toFile(dir+'sav-associates-wordpress-malware-recovery.webp');
 const svg=`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#00131f"/><g font-family="Segoe UI,Arial"><text x="60" y="90" fill="#00d9eb" font-size="21">SAV ASSOCIATES · REAL CLIENT CASE STUDY</text><text x="60" y="180" fill="white" font-size="48">WordPress Malware</text><text x="60" y="250" fill="#00d9eb" font-size="52">Recovery</text><text x="60" y="330" fill="#bdcbdc" font-size="24">Cron persistence · PHP backdoors</text><text x="60" y="374" fill="#bdcbdc" font-size="24">Integrity checks · Security hardening</text><text x="60" y="545" fill="white" font-size="27">Aman Kumar</text><text x="60" y="582" fill="#bdcbdc" font-size="20">WordPress / PHP Developer</text></g></svg>`;
 const screenshot=await sharp(dir+'sav-associates-wordpress-malware-recovery.webp').resize(460,307).png().toBuffer();
 await sharp(Buffer.from(svg)).composite([{input:screenshot,left:700,top:168}]).png().toFile(dir+'wordpress-malware-recovery-social.png');
})();
