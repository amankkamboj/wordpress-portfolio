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

