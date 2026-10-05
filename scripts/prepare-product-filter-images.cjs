// Usage: node scripts/prepare-product-filter-images.cjs <homepage.png> <category.png> <mobile.png>
const path = require('node:path');
const sharp = require('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const [homepage, category, mobile] = process.argv.slice(2);
if (!homepage || !category || !mobile) throw new Error('Provide the three original screenshot paths.');
const output = path.resolve(__dirname, '../assets/images/case-studies');
(async () => {
  await sharp(homepage).extract({ left: 70, top: 400, width: 1804, height: 536 }).webp({ quality: 88 }).toFile(path.join(output, 'smartparts-homepage-filters.webp'));
  await sharp(category).extract({ left: 50, top: 260, width: 1780, height: 650 }).webp({ quality: 88 }).toFile(path.join(output, 'smartparts-category-filters.webp'));
  await sharp(mobile).webp({ quality: 88 }).toFile(path.join(output, 'smartparts-mobile-filters.webp'));
  console.log('Prepared three historical interface images without desktop/browser/admin chrome.');
})().catch(error => { console.error(error.message); process.exitCode = 1; });
