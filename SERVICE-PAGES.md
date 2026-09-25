# Service pages — implementation report

Five static directory index pages use the existing stylesheet and JavaScript. There is no client-side router or required build on GitHub Pages.

## WordPress Development
- URL: https://amankkamboj.github.io/wordpress-portfolio/wordpress-development/
- File: wordpress-development/index.html
- SEO title: WordPress Developer | Custom WordPress Development | Aman Kumar
- Meta description: Custom WordPress development by Aman Kumar, including themes, plugins, PHP development, API integrations, WooCommerce and complex website solutions.

## WooCommerce Development
- URL: https://amankkamboj.github.io/wordpress-portfolio/woocommerce-development/
- File: woocommerce-development/index.html
- SEO title: WooCommerce Developer | Custom WooCommerce Development | Aman Kumar
- Meta description: WooCommerce development for custom stores, checkout improvements, integrations, product functionality, bug fixes and performance optimization.

## WordPress Troubleshooting
- URL: https://amankkamboj.github.io/wordpress-portfolio/wordpress-troubleshooting/
- File: wordpress-troubleshooting/index.html
- SEO title: WordPress Troubleshooting & Bug Fixes | Aman Kumar
- Meta description: WordPress troubleshooting for plugin conflicts, PHP errors, broken layouts, database issues, migrations, integrations and difficult website problems.

## Performance Optimization
- URL: https://amankkamboj.github.io/wordpress-portfolio/wordpress-performance-optimization/
- File: wordpress-performance-optimization/index.html
- SEO title: WordPress Speed & Performance Optimization | Aman Kumar
- Meta description: Improve WordPress speed, Core Web Vitals and website performance through code, asset, database, caching and frontend optimization.

## WordPress Security
- URL: https://amankkamboj.github.io/wordpress-portfolio/wordpress-security/
- File: wordpress-security/index.html
- SEO title: WordPress Security & Malware Cleanup | Aman Kumar
- Meta description: WordPress security support including malware cleanup, compromised-site investigation, hardening, update review and practical security improvements.

## Shared implementation
Each page has one H1, a self-referencing canonical, unique social metadata, visible breadcrumbs and Person, WebPage, Service and BreadcrumbList JSON-LD. All providers refer to the homepage Person ID. No review, pricing or certification claims were added.

The homepage retains six service cards: development, WooCommerce, troubleshooting, performance, security, and combined migration/maintenance. The first five link to dedicated pages; the sixth links to Contact. Header Services disclosure and footer service links make all pages reachable. Each service page has three related links before its contact CTA.

The sitemap includes the homepage and all five services. No deployment date is asserted. robots.txt remains permissive and unchanged. The existing Search Console tag remains on the homepage.

## Editing
Content source: scripts/service-content.js. Shared generation: scripts/build-services.js. Run node scripts/build-services.js after editing the source. This regenerates service pages, homepage navigation/service cards/footer, and sitemap; do not edit generated service HTML and expect those edits to survive regeneration. The rest of the homepage is retained. The generated HTML can be deployed directly without Node.

## Deployment
Upload all five directories together with index.html, assets/css/style.css, assets/js/main.js and sitemap.xml. Live service availability cannot be established until these files are published. No commits or pushes are part of this change.

## Files changed
Created: the five service directories and index.html files listed above; scripts/service-content.js; scripts/build-services.js; SERVICE-PAGES.md.
Modified: index.html, assets/css/style.css, assets/js/main.js, sitemap.xml, scripts/configure-seo.js and README.md. robots.txt is unchanged.

## QA results
- All six pages returned HTTP 200 on a local server mounted at /wordpress-portfolio/.
- Tested at 1440, 820, 390 and 320px: no horizontal overflow, missing images or JavaScript errors.
- Header/footer/related links, same-page anchors and CSS/JS/image URLs resolved locally.
- Mobile menu and Services disclosure passed opening and Escape dismissal checks. The native desktop disclosure also works without JavaScript.
- Each service has one H1, a unique title and description, a self-canonical and matching og:url. JSON-LD parses with the same Person provider across all pages.
- No repeated editorial paragraphs between the five pages; page main-content totals are approximately 850–970 words including navigation within the content and related-service copy.
- Sitemap XML parsed with six entries. The SEO URL utility retained all six entries in a temporary-copy migration test.
- Public checks on September 25, 2026 returned HTTP 404 for all five new service URLs, as expected before deployment. The homepage was not pushed or redeployed.

## Review needed
Publish the new directories and changed shared files together, then submit the updated sitemap and inspect each URL in Search Console. Review the service scope as your own professional offering before publication. No cybersecurity certification, performance guarantee, new client result or unsupported review rating was added.
