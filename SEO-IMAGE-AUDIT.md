# Portfolio image and SEO audit

Verified locally on October 4, 2026.

## Improvements

- Generated responsive WebP versions of 47 display images, used in 108 placements. Full-size display assets decreased from 3,178,681 to 2,167,188 bytes (32%). Smaller variants support mobile displays. This measures image files, not total page transfer or real-user load time.
- Added intrinsic image dimensions and asynchronous decoding. Existing high-priority portrait loading and below-the-fold lazy loading are retained.
- Retained original evidence files and full-size gallery links.
- Reduced the ICO favicon from 129,482 to 9,845 bytes (92%) and removed duplicate favicon declarations.
- Added repeatable optimization and responsive-layout checks. Repeated card builds preserve one preview per card and optimized image markup.

## Checks passed

All 24 pages have unique titles/descriptions, one H1, English language declarations, mobile viewport settings, matching canonical and social URLs, parseable structured data and sitemap coverage. Local links, assets, anchors, responsive image variants, image dimensions and alt attributes pass validation.

All 24 pages render without horizontal overflow or uncaught JavaScript errors at 390px and 1440px. Images decode successfully; project cards have one preview; keyboard skip links move focus into main content. Analytics consent and enquiry validation/success/error tests pass. Enquiry tests use mocked requests and do not send a real enquiry.

## Scope

These are local technical checks. They do not establish Google indexing, rankings, rich-result eligibility, production Core Web Vitals or delivery by the live enquiry endpoint. Changes require publishing before production benefits can be measured. The GitHub Pages project sitemap can be submitted directly in Search Console; a robots.txt under the project subdirectory is not the origin-level robots file.

Image handling was reviewed against [Google's image SEO guidance](https://developers.google.com/search/docs/appearance/google-images) and [lazy-loading guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading).

## Rebuild order

After content/evidence builders, run the project-card normalizer, then `node scripts/optimize-site-images.cjs`. Run the checks listed in README before publishing.
