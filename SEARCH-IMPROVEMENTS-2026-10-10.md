# Search review — 10 October 2026

## What the supplied screenshot establishes

The selected three-month Web report shows 4 clicks, 292 impressions, 1.4% CTR and average position 64.8. The visible chart runs approximately July 7–October 5, 2026, with most activity appearing late in September. This is a historical screenshot, not a live account read or a full three months of established visibility.

An impression means a search result was shown under Google's counting rules; it is not a website visit or a distinct person. CTR is clicks divided by impressions (4 / 292 = 1.37%, rounded to 1.4%). Average position aggregates different queries, locations and devices; it does not establish the position of a specific service page or a precise search results page number. Search clicks are not CTA clicks or enquiries.

The query rows are repeated in the supplied image. Do not add repeated rows together. Visible priorities include:

| Query | Impressions | Clicks | Working hypothesis |
| --- | ---: | ---: | --- |
| woocommerce developer | 118 | 0 | Strengthen the existing WooCommerce service and direct evidence links |
| wordpress performance | 51 | 0 | Clarify diagnostic scope, deliverables and Core Web Vitals questions |
| woocommerce development | 13 | 0 | Support the same service page instead of creating a near-duplicate |
| divi maintenance | 8 | 0 | Monitor the existing Divi maintenance case before expanding content |
| woocommerce plugin development | 4 | 0 | Explain plugin scope and current compatibility considerations |
| wpml yoast sitemap | 3 | 0 | Keep the specific existing troubleshooting case linked and accessible |

Four clicks and this impression volume are too little to isolate a snippet problem, an indexing failure or a ranking trend. The screenshot lacks page/query mapping, query-specific position, countries, devices, indexing coverage and Core Web Vitals. Priority mapping above is an editorial decision, not a claim about which URLs Google currently ranks.

## Implemented locally

- Refined unique titles and descriptions for the WooCommerce and performance service pages; aligned social metadata and WebPage/Service schema descriptions.
- Added visible service scope and linked project evidence near the beginning of both pages. WooCommerce links point to original filtering screenshots, a client-confirmed cart repair and the documented Stripe Tax work.
- Added accessible native-disclosure hiring questions. WooCommerce covers plugin scope, Checkout Blocks and HPOS considerations without claiming unverified compatibility. Performance covers LCP, INP, CLS, field versus lab data and workflow protection.
- Reused existing layouts and native HTML without additional client JavaScript. No review ratings, fabricated results or unsupported guarantees were introduced.
- Kept URLs and canonical targets stable. No duplicate keyword landing pages or speculative AI-specific files were added.

Authoring: scripts/search-improvement-content.cjs. Apply with scripts/build-search-improvements.cjs after other builders. These changes have not been deployed by this task.

## Verification and next decisions

All 24 live pages passed HTTP 200, canonical, analytics inclusion and noindex checks on October 10. Live sitemap/robots and analytics JavaScript matched the repository before the new page changes. This does not prove every URL is indexed, confirm live GA4 collection, or establish Core Web Vitals performance. This project's robots.txt is under a subdirectory; crawler policy is governed by the origin-root robots.txt.

After deployment:

1. Inspect the WooCommerce and performance URLs in Search Console, check Google-selected canonical and live HTML, then request recrawling. Keep the existing sitemap submitted.
2. Export Queries and Pages for the most recent complete 28 days, compared with the prior 28 days. For each priority query, open the Pages tab to confirm its landing page. Also inspect device/country differences and indexing coverage. Record the actual deployment date as the comparison boundary.
3. Review weekly; make the first directional comparison after 28 complete days. With low traffic, accumulate more data rather than interpreting one or two clicks as a proven improvement. Monitor query-level impressions, position and clicks together. Evaluate CTR against comparable positions, devices and countries.
4. In GA4, follow organic-search sessions through cta_click, enquiry_start, enquiry_submit_attempt and generate_lead. A service page attracting enquiries matters more than raw impression growth. Consent and blocking mean GA4 and Search Console totals will differ.
5. Inspect Search Console Core Web Vitals and PageSpeed Insights on representative pages. Separate lab results from real-user field data. The screenshot alone provides no basis for claiming a performance failure or a speed improvement.
6. Next content opportunity: expand the existing Divi case with additional verified maintenance detail if query/page data supports it. Keep long-tail work tied to genuine projects, rather than publishing broad generic articles for every query.

## Current primary guidance used

- Google, Search Console metrics: https://support.google.com/webmasters/answer/7042828
- Google, descriptive title links: https://developers.google.com/search/docs/appearance/title-link
- Google, helpful people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, AI features: https://developers.google.com/search/docs/appearance/ai-features (foundational SEO applies; no special AI schema or text file is required)
- Google, Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Web.dev, field metrics and thresholds: https://web.dev/articles/vitals
- WooCommerce, Checkout Blocks hook alternatives: https://developer.woocommerce.com/docs/block-development/reference/hooks/hook-alternatives/
- WooCommerce, HPOS extension guidance: https://developer.woocommerce.com/docs/features/orders/high-performance-order-storage/recipe-book/

Rankings, indexing and inclusion in AI search features are determined by Google. Implementation and local checks do not establish future ranking gains.
