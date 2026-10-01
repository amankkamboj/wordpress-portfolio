# Portfolio analytics

The shared consent-gated tag is `assets/js/analytics.js`. Run `node scripts/check-analytics.cjs` to verify the collection logic without sending live Google Analytics traffic.

## Sharing links

Use UTMs on external links you share, never on internal navigation. Use campaign names without personal information, using only letters, numbers, underscores and hyphens (maximum 100 characters per value).

LinkedIn WooCommerce service link:

https://amankkamboj.github.io/wordpress-portfolio/woocommerce-development/?utm_source=linkedin&utm_medium=social&utm_campaign=woocommerce_services

LinkedIn marketplace case-study link:

https://amankkamboj.github.io/wordpress-portfolio/case-study-woocommerce-vendor-workflows/?utm_source=linkedin&utm_medium=social&utm_campaign=woocommerce_services&utm_content=vendor_case_study

GitHub profile portfolio link:

https://amankkamboj.github.io/wordpress-portfolio/?utm_source=github&utm_medium=referral&utm_campaign=portfolio

## GA4 configuration after deployment

1. Accept analytics in a test browser and validate `contact_click`, `project_cta_click` and `case_study_click` in Realtime or Tag Assistant/DebugView. This local automated check verifies emitted commands, not ingestion by Google.
2. In GA4 Admin > Data display > Events, mark `contact_click` as a key event. This requires the appropriate property permissions and has not been configured by this repository change. Keep navigation events as supporting engagement signals. An email or LinkedIn click records contact intent, not a completed enquiry.
3. Use Traffic acquisition with **Session source / medium** and **Session default channel group** for the overall traffic picture. The Manual report describes campaign-tagged traffic; `(not set)` there alone does not prove lost source attribution.
4. Review landing pages and contact clicks over time. The supplied 28-day snapshot is too small to establish customer demand or returning prospects; owner/testing traffic may also contribute. Exclude identified internal traffic only after testing the filter.
5. In the web stream, check enhanced measurement settings: automatic outbound link tracking may collect external URLs separately. Review query-parameter redaction there, too. This site's custom events omit link query strings, email addresses, message content and fragments, but cannot guarantee what other tags or property settings collect.

Only consented visits are measured. Existing historical reports will not be repaired by these changes. New key-event reporting begins after marking the event; allow processing time before assessing results.

Official references: [Manual report](https://support.google.com/analytics/answer/14264492?hl=en), [mark key events](https://support.google.com/analytics/answer/13128484?hl=en), [enhanced measurement](https://support.google.com/analytics/answer/9234069?hl=en).
