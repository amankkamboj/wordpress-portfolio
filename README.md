# Aman Kumar portfolio

Static HTML, CSS and vanilla JavaScript. Open index.html directly; no build or dependencies required. Relative asset paths support GitHub Pages project URLs.

## Files
- index.html: content, inline SVG icons and Person JSON-LD.
- assets/css/style.css: responsive styles and theme variables.
- assets/js/main.js: mobile navigation and current year.
- assets/images/profile.jpg: professional AI-assisted edit of the supplied actual portrait; the original remains unchanged.
- assets/images/projects/: seven real homepage screenshots from the websites supplied by Aman. SOURCES.md records URLs and capture details.
- assets/images/favicon.svg: local favicon.
- robots.txt: allows crawling; add the sitemap after the real URL is set.
- scripts/configure-seo.js: optional development-time URL configuration; never required by the browser.
- .nojekyll: GitHub Pages static serving.
- SEO-REVIEW.md: findings, verification and launch requirements.

## Contact and recommendations
The email is amankamboj2387@gmail.com. The primary contact action opens an email composer; LinkedIn is an alternative. There is no backend form or automated booking system.

Eight recommendation excerpts come from the LinkedIn text supplied by Aman. Three are featured; five appear in a native details disclosure. Initials avatars replace all testimonial photos. Names, dates and relationship labels are visible. Role labels are shortened for readability. Original recommendation links may require LinkedIn sign-in. We did not independently retrieve the recommendations from LinkedIn. No star ratings or review schema are used.

Old testimonial avatar files are unused. There are no face images in the testimonial section.

## Remaining content work
Seven portfolio cards now use real homepage screenshots and live website links supplied by Aman. Category descriptions identify each site without claiming specific development scope or measured outcomes. Detailed case studies can be added once roles and results are supplied. The invented eighth project, demo testimonial names, rating, site count and response-time claim have been removed. The unconfirmed years-of-experience claim was also removed; add it back once confirmed. Learning categories are not presented as awarded certificates.

## Set the production URL
Once the real HTTPS homepage address is known, run:

    node scripts/configure-seo.js YOUR_REAL_HTTPS_HOMEPAGE_URL

The script updates canonical and Open Graph URLs, absolute social image, Person URL/image, sitemap.xml and robots.txt. It handles a GitHub Pages repository subpath and can be rerun. No fabricated domain is included in the current page. Production URLs are now configured for https://amankkamboj.github.io/wordpress-portfolio/ and sitemap.xml is included.

For a GitHub Pages project subpath, robots.txt is only honored at the origin root. Submit the project sitemap directly through Search Console; ensure the root domain does not block the project.

## Publish and index
Publish the static files on GitHub Pages after reviewing project content. Verify HTTPS and HTTP 200 on the homepage. Verify site ownership in Google Search Console, inspect the homepage, run the live test, request indexing and submit the sitemap. Google determines crawling, indexing and rankings; none are guaranteed by these files.

## Maintenance
Edit text, recommendation excerpts, image paths and links directly in index.html. CSS theme variables live at the start of style.css; responsive and review refinements appear later. Keep recommendations as exact excerpts and update the date/source with any new additions. Replace imagery without renaming paths where possible. No external fonts, UI libraries, trackers or third-party scripts are loaded.


## SEO & Indexing

- Production URL: https://amankkamboj.github.io/wordpress-portfolio/
- robots.txt: https://amankkamboj.github.io/wordpress-portfolio/robots.txt
- Sitemap: https://amankkamboj.github.io/wordpress-portfolio/sitemap.xml
- Verify this exact URL-prefix property in Google Search Console. Copy Google’s real HTML verification tag into the marked location in the head, deploy, then click Verify. The existing verification tag is now present on the homepage and is preserved. Ownership verification must still be confirmed in Search Console.
- Submit sitemap.xml after deployment. Use URL Inspection and request indexing for https://amankkamboj.github.io/wordpress-portfolio/.
- Because this is a project subdirectory, its robots.txt is not the origin-level crawler policy. Only https://amankkamboj.github.io/robots.txt controls crawling for this host. Submit the project sitemap directly in Search Console.
- Add future case-study URLs to sitemap.xml only once those pages actually exist. No case-study pages were created in this update.
- The current social photo is 1106 × 1422 pixels. A dedicated 1200 × 630 share image is a future improvement; portrait cropping depends on the sharing platform.
- Keep lastmod aligned with significant page changes; do not refresh it simply to appear current. Google ignores priority and changefreq, so these are omitted.
- scripts/configure-seo.js remains a documented maintenance utility. It updates URLs when moving the site; it is not loaded by visitors.

Local validation checks metadata uniqueness, schema JSON, sitemap XML, asset paths and accessibility attributes. Search Console ownership, live deployment and Google indexing are separate steps and are not established by local validation.

## Dedicated service pages
Five directory-based service pages are included: wordpress-development, woocommerce-development, wordpress-troubleshooting, wordpress-performance-optimization, and wordpress-security. Each folder contains an index.html and shares the existing CSS and JavaScript. Homepage cards, a native Services dropdown, footer links and related-service cards connect the pages.

See SERVICE-PAGES.md for the exact URLs, titles, descriptions and publishing checklist. Authoring sources are scripts/service-content.js and scripts/build-services.js. Run `node scripts/build-services.js` to regenerate the five pages and shared homepage navigation/service cards/footer after editing these sources. No build is required by the deployed website.

Service-page assets use /wordpress-portfolio/assets/ paths. Preview them through a local HTTP server mounted at /wordpress-portfolio/, not by double-clicking a nested index.html. All six URLs are included in sitemap.xml. No lastmod is supplied until an actual deployment date is known. The URL configuration script now discovers directory index pages and retains their sitemap entries.

The homepage's real Search Console verification tag is preserved. Security copy describes WordPress/PHP experience and ongoing learning, not a completed cybersecurity certification. A code comment marks where a future verified credential can be added.
