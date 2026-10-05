# Analytics audit — 5 October 2026

All 24 live sitemap pages returned HTTP 200, included analytics once, used correct canonical URLs and had no noindex directive. Live robots.txt and sitemap match the repository. Search Console verification is present on the homepage. This confirms crawl eligibility, not Google's actual indexing or GA4 receipt.

GA4 measurement ID: G-5N5BEMMRD2. New changes are local and require deployment. No form details are sent to analytics; consent remains required.

| Event | Counts |
| --- | --- |
| cta_click | Button-styled link clicks, with cta_label and link_location |
| project_cta_click | Contact-section links, including navigation |
| contact_click | Email, phone, LinkedIn and Upwork clicks, with contact_method |
| enquiry_start | First form input per page load |
| enquiry_validation_error | Invalid form submission attempts |
| enquiry_submit_attempt | Valid form submission requests |
| generate_lead | Confirmed endpoint acceptance: HTTP success and JSON ok:true |
| enquiry_submit_error | Rejected, timed-out or failed requests |
| case_study_click | Case-study links, with destination_path |
| service_click | Service-page links, with destination_path |
| feedback_click | Client-feedback links, including modal preview |

All custom events include page_path and sanitized page_location. A CTA may also produce a contact/project event; do not sum those event types as independent clicks. Endpoint acceptance does not confirm inbox delivery.

## Reporting in GA4

Register event-scoped custom dimensions: cta_label, link_location, page_path, destination_path, contact_method and form_id. Mark generate_lead as a key event. Check Enhanced Measurement and UI-created events for duplicate tracking. Use the custom enquiry events for the funnel; automatic form_submit does not prove endpoint acceptance.

Create an Exploration with Event name, CTA label, Link location and Page path, using Event count and Total users. Filter to cta_click for button totals and generate_lead for accepted enquiries. Event count includes repeat actions; Total users measures distinct recorded users. Use enquiry_start → enquiry_submit_attempt → generate_lead for the enquiry funnel, with project_cta_click as an optional earlier step.

After deployment, accept analytics and check GA4 Realtime; use a debug-enabled session for DebugView. Successful-form tests here mock the endpoint and send no email. Verify collection with an intentional enquiry, then check endpoint logs/mailbox separately. GA4 and Search Console account access is required to inspect actual totals, configure reports and verify Page indexing/URL Inspection status.

Consent refusal, blockers and network loss mean GA4 cannot provide an exact census of every visitor. Authoritative accepted-enquiry totals require Hostinger server logs, which are outside this repository. Historical data cannot be retroactively enriched.

Checks: scripts/check-analytics.cjs, scripts/check-enquiry.cjs, scripts/check-site.cjs. Live audit: scripts/audit-live-indexing.cjs and live-indexing-audit.json.
