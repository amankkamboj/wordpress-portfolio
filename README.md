# Aman Kumar portfolio

Static HTML, CSS and vanilla JavaScript. No production build or dependencies required. Preview through HTTP mounted at /wordpress-portfolio/ so nested pages and asset paths work correctly.

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
Seven portfolio cards now use real homepage screenshots and live website links supplied by Aman. Category descriptions identify each site without claiming specific development scope or measured outcomes. Six anonymized case studies now describe supported project work and its evidence limits; original screenshots and measured results can strengthen them when supplied. The invented eighth project, demo testimonial names, rating, site count and response-time claim have been removed. The unconfirmed years-of-experience claim was also removed; add it back once confirmed. Four supplied credentials now appear with their actual credential types and verification links.

## Set the production URL
Once the real HTTPS homepage address is known, run:

    node scripts/configure-seo.js YOUR_REAL_HTTPS_HOMEPAGE_URL

The script updates canonical and Open Graph URLs, absolute social image, Person URL/image, sitemap.xml and robots.txt. It handles a GitHub Pages repository subpath and can be rerun. No fabricated domain is included in the current page. Production URLs are now configured for https://amankkamboj.github.io/wordpress-portfolio/ and sitemap.xml is included.

For a GitHub Pages project subpath, robots.txt is only honored at the origin root. Submit the project sitemap directly through Search Console; ensure the root domain does not block the project.

## Publish and index
Publish the static files on GitHub Pages after reviewing project content. Verify HTTPS and HTTP 200 on the homepage. Verify site ownership in Google Search Console, inspect the homepage, run the live test, request indexing and submit the sitemap. Google determines crawling, indexing and rankings; none are guaranteed by these files.

## Maintenance
Edit text, recommendation excerpts, image paths and links directly in index.html. CSS theme variables live at the start of style.css; responsive and review refinements appear later. Keep recommendations as exact excerpts and update the date/source with any new additions. Replace imagery without renaming paths where possible. No external fonts or UI libraries are loaded. All fifteen pages use the shared consent-gated analytics loader.


## SEO & Indexing

- Production URL: https://amankkamboj.github.io/wordpress-portfolio/
- robots.txt: https://amankkamboj.github.io/wordpress-portfolio/robots.txt
- Sitemap: https://amankkamboj.github.io/wordpress-portfolio/sitemap.xml
- Verify this exact URL-prefix property in Google Search Console. Copy Google’s real HTML verification tag into the marked location in the head, deploy, then click Verify. The existing verification tag is now present on the homepage and is preserved. Ownership verification must still be confirmed in Search Console.
- Submit sitemap.xml after deployment. Use URL Inspection and request indexing for https://amankkamboj.github.io/wordpress-portfolio/.
- Because this is a project subdirectory, its robots.txt is not the origin-level crawler policy. Only https://amankkamboj.github.io/robots.txt controls crawling for this host. Submit the project sitemap directly in Search Console.
- Add future case-study URLs to sitemap.xml only once those pages actually exist. Six case-study pages and a case-study hub now exist.
- The supplied professional portrait is used in a 1200 × 1200 social JPEG and a square Twitter summary card. PNG/ICO favicons and an Apple touch icon use the same portrait.
- Keep lastmod aligned with significant page changes; do not refresh it simply to appear current. Google ignores priority and changefreq, so these are omitted.
- scripts/configure-seo.js remains a documented maintenance utility. It updates URLs when moving the site; it is not loaded by visitors.

Local validation checks metadata uniqueness, schema JSON, sitemap XML, asset paths and accessibility attributes. Search Console ownership, live deployment and Google indexing are separate steps and are not established by local validation.

## Dedicated service pages
Six directory-based service pages are included: wordpress-migration-maintenance, wordpress-development, woocommerce-development, wordpress-troubleshooting, wordpress-performance-optimization, and wordpress-security. Each folder contains an index.html and shares the existing CSS and JavaScript. Homepage cards, a native Services dropdown, footer links and related-service cards connect the pages.

See SERVICE-PAGES.md for the exact URLs, titles, descriptions and publishing checklist. Authoring sources are scripts/service-content.js and scripts/build-services.js. Do not run scripts/build-services.js until it supports the current migration page, navigation and consent-gated analytics; edit service HTML directly. No build is required by the deployed website.

Service-page assets use /wordpress-portfolio/assets/ paths. Preview them through a local HTTP server mounted at /wordpress-portfolio/, not by double-clicking a nested index.html. All fifteen URLs, including migration/maintenance, are included in sitemap.xml. No lastmod is supplied until an actual deployment date is known. The URL configuration script now discovers directory index pages and retains their sitemap entries.

The homepage's real Search Console verification tag is preserved. Security copy describes WordPress/PHP experience and ongoing learning, not a completed cybersecurity certification. A code comment marks where a future verified credential can be added.

## Homepage certificates
The Certifications & Continuous Learning section follows About. Four cards use supplied certificate documents and verification links; originals are in assets/certificates and lazy-loaded WebP previews in assets/images/certificates. Titles, exact issue dates and credential types come from the documents. IIRS is labeled as participation, and its verification code is displayed for the issuer form. These are not cybersecurity credentials. Edit this section directly in index.html; the service-page builder preserves it.

## Current generator limitation
The migration/maintenance page and GA4 integration were added after the original generator. Edit the existing HTML directly until the generator supports these additions; running it currently would overwrite those shared navigation and analytics changes. See the September 27 audit in SEO-REVIEW.md.

## Case studies
Six anonymized project stories are authored in scripts/case-study-content.js and scripts/additional-case-study-content.js. Run node scripts/build-case-studies.js, then node scripts/build-site-polish.js. The first rebuilds story pages, homepage previews and service links. The second maintains the hub, privacy page, hiring FAQ, shared navigation, analytics controls and sitemap. Edit generated content in its authoring script to preserve it on later runs. This generator uses the existing troubleshooting page as the shared header/footer/metadata template; it does not regenerate the service-page content.

The case-study URLs are top-level directories so scripts/configure-seo.js discovers them when updating production URLs. Each has a unique title, description, canonical, social metadata and WebPage/BreadcrumbList structured data. All fifteen pages are listed in the sitemap, including the case-study hub and privacy page.

Keep private source conversations, credentials, client records and draft evidence outside this public repository. Public narratives distinguish client-confirmed acceptance from developer-reported resolution. Do not add numerical results or identify clients without supporting evidence and appropriate permission. Original screenshots can be added later; the current cards use the existing icon system.

## Analytics and release verification
Google Analytics (G-5N5BEMMRD2) loads only after acceptance. The browser preference expires after 180 days and can be changed using the footer analytics settings. Declining leaves analytics disabled. The contact_click event records email or LinkedIn clicks; it does not prove an enquiry was sent or a lead was received. No GA4 key-event setting is configured by this code.

The homepage features three client-reviewed projects; the six-story hub separates these from technical investigations and reported results. Private evidence stays outside the public repository.

After publishing, verify the live sitemap and page responses, then confirm a consented visit and contact_click in GA4. Local checks mock analytics requests and do not establish real collection, Search Console verification, indexing or rankings.
