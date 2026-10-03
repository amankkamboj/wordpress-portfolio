// Pixel-preserving crops of the supplied conversation; no message recreation.
const sharp = require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const source = process.argv[2];
if (!source) throw new Error('Pass the original client screenshot path.');
(async () => {
  const regions = [
    {left:845,top:390,width:316,height:45},
    {left:458,top:481,width:704,height:69},
    {left:82,top:654,width:676,height:115},
    {left:82,top:841,width:504,height:45}
  ];
  let top = 16;
  const pieces = [];
  for (const region of regions) {
    pieces.push({input:await sharp(source).extract(region).png().toBuffer(),left:16,top});
    top += region.height + 16;
  }
  await sharp({create:{width:736,height:top,channels:3,background:'#f6f3ee'}})
    .composite(pieces).webp({lossless:true})
    .toFile('assets/images/case-studies/sav-associates-client-recovery-confirmation.webp');
})();
