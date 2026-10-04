'use strict';
// Public, anonymized editorial summaries. Private conversations and evidence stay outside this repository.
module.exports = [
  {
    slug: 'case-study-woocommerce-stripe-tax',
    title: 'WooCommerce & Stripe Tax Integration Case Study | Aman Kumar',
    heading: 'Connecting WooCommerce checkout to Stripe Tax',
    description: 'A WooCommerce case study covering Stripe Tax integration, checkout testing, client review and a practical video handover for an apparel business.',
    category: 'WOOCOMMERCE INTEGRATION', icon: 'cart',
    client: 'Irreconcilable Differences — online apparel store', period: 'April 2026',
    role: 'Integration, checkout testing and handover',
    tools: ['WordPress', 'WooCommerce', 'Stripe', 'Stripe Tax'],
    summary: 'An existing store needed its checkout connected to a new tax service, with a configuration the owner could understand and manage.',
    outcome: 'Client-reviewed configuration and an accepted video handover.',
    evidence: 'Client acceptance recorded',
    flow: ['Review the existing setup', 'Configure and test checkout', 'Review and hand over'],
    sections: [
      ['The problem', 'The owner of an apparel store was moving away from a previous tax service and wanted to connect an existing WooCommerce checkout to Stripe Tax. Stripe was already used for payments, but the tax integration and checkout configuration needed attention.', 'The task was to make the systems work together and explain how the owner could manage the setup after delivery. It was an integration project on an existing store, rather than a complete website rebuild.'],
      ['My role and approach', 'I reviewed the payment configuration, changed the Stripe integration and connected the tax component. My work also included checking the checkout behaviour and communicating the differences between test mode and live use.', 'I used the review process to clarify which payment methods the client wanted to offer and which settings needed to match the intended store configuration.'],
      ['Testing and revisions', 'My delivery updates record testing in Stripe test mode and checking that tax information reached Stripe. During review, the client identified payment-method preferences and a test configuration that needed adjustment.', 'I worked through those revisions before the client accepted the reviewed configuration. The feedback loop was part of the work: a technically connected integration still needs to behave as the store owner expects.'],
      ['The outcome', 'The client confirmed that the reviewed setup looked right, authorized the switch to live use and released payment. I then supplied a walkthrough video. In later feedback, the client confirmed that the video was helpful and expressed satisfaction with the work.', 'The supported outcome is a reviewed integration and an accepted handover. This case study does not claim increased sales, measured cost savings or independent verification of a successful live customer purchase.'],
      ['What this project demonstrates', 'Connecting a store to an external service involves more than installing a plugin. Configuration, representative testing, client review and a usable handover all contribute to an implementation the owner can operate.', 'The scope here was technical setup. Tax registration, filing and legal obligations remain separate from the website integration.']
    ],
    evidenceNote: 'This case study documents my April 2026 Stripe Tax integration for Irreconcilable Differences. It includes a supplied cart screenshot, selected client feedback and a current public-store screenshot. The cart shows one historical tax result, not proof of correct tax calculation for every address or a completed live purchase. Private account information and the shipping address are omitted.',
    service: 'woocommerce-development', serviceLabel: 'WooCommerce development',
    cta: 'Need help with your WooCommerce checkout?',
    ctaText: 'Share your store URL, the payment or integration problem, and the workflow you want to improve.'
  },
  {
    slug: 'case-study-wordpress-enquiry-workflow',
    title: 'WordPress Enquiry Workflow Case Study | Aman Kumar',
    heading: 'Delivering a clearer enquiry workflow for a care provider',
    description: 'A WordPress enquiry form case study: navigation fixes, notification review, service-page updates and successful client testing for a care provider.',
    category: 'WORDPRESS FORMS & WORKFLOWS', icon: 'document',
    client: 'Clarus Healthcare — care provider in Worcestershire', period: 'September 2026',
    role: 'Form configuration, review fixes and page updates',
    tools: ['WordPress', 'Gravity Forms', 'Rank Math'],
    summary: 'A care provider needed a public companionship enquiry journey while a separate internal assessment workflow was still being evaluated.',
    outcome: 'Successful client testing of the public form and sign-off of the agreed phase.',
    evidence: 'Client testing confirmed',
    flow: ['Define the public journey', 'Refine forms and notifications', 'Test and close the phase'],
    sections: [
      ['The problem', 'The provider needed a companionship service page and a public enquiry form. A separate internal assessment form was also under discussion, but the team had not yet settled on its longer-term workflow.', 'The immediate goal was a usable public journey with a clear boundary between what visitors could use and what remained for a later phase.'],
      ['My role and approach', 'I configured the public enquiry form and worked through feedback on navigation, notification routing and privacy-related settings. I also updated the service page’s search and social-sharing metadata to match its companionship content.', 'The work was delivered in stages so the team could test the forms and decide which parts were ready for use. The internal workflow was not treated as complete simply because a form had been built.'],
      ['Testing and revisions', 'Client testing identified an issue when opening the privacy notice during form completion: returning to the form could require text fields to be filled again. I adjusted the link behaviour and worked through the notification-routing feedback.', 'The client subsequently confirmed that the public enquiry form tested successfully. That confirmation is the strongest outcome evidence for this phase.'],
      ['The outcome', 'The client signed off the agreed phase with the companionship service page intended for indexing and the public enquiry form available but set to noindex. The internal assessment form remained unpublished, with further workflow decisions deferred.', 'This was a delivered and reviewed public enquiry journey. It was not a completed healthcare automation platform, and no increase in enquiry volume or reduction in staff time was measured in the evidence used here.'],
      ['What this project demonstrates', 'A useful delivery can be deliberately limited. Resolving the public form experience and agreeing where the phase ended gave the client a practical starting point without presenting unfinished internal workflows as complete.', 'Noindex controls search indexing; it is not an access restriction. Privacy-related configuration work described here is not a claim of legal or healthcare compliance.']
    ],
    evidenceNote: 'Based on September 2026 implementation updates, the client’s successful public-form test and phase sign-off. Internal workflow work was explicitly deferred. No personal form submissions or private correspondence are reproduced.',
    service: 'wordpress-development', serviceLabel: 'Custom WordPress development',
    cta: 'Does your website need a clearer workflow?',
    ctaText: 'Describe who uses your form, what should happen after submission and where the current process gets difficult.'
  },
  {
    slug: 'case-study-wpml-yoast-sitemap',
    title: 'WPML & Yoast Sitemap Troubleshooting Case Study | Aman Kumar',
    heading: 'Tracing a sitemap mismatch to multilingual publishing states',
    description: 'A WordPress troubleshooting case study investigating WPML translation states and unexpected Yoast sitemap URLs on a multilingual website.',
    category: 'MULTILINGUAL WORDPRESS TROUBLESHOOTING', icon: 'globe',
    client: 'An agency-managed multilingual website', period: 'July–August 2026',
    role: 'Diagnosis, translation-state corrections and sitemap checks',
    tools: ['WordPress', 'WPML', 'Yoast SEO', 'SiteGround'],
    summary: 'Drafting English pages did not remove the expected sitemap entries. The investigation followed the relationship between the original pages and their Spanish translations.',
    outcome: 'Delivery update reported the affected URLs removed from the page sitemap.',
    evidence: 'Developer-reported resolution',
    flow: ['Inspect unexpected URLs', 'Check translation states', 'Rebuild and check the sitemap'],
    sections: [
      ['The problem', 'An agency managing a multilingual WordPress website found that URLs continued to appear in its sitemap after English pages were moved to draft. The client suspected the SEO plugin or caching because the sitemap did not reflect the intended publishing state.', 'The investigation needed to account for both languages rather than treating the English page status as the complete picture.'],
      ['My diagnosis', 'My diagnostic update identified Spanish translations that remained published after their corresponding English pages had been drafted. Those translation states explained why the expected sitemap changes had not occurred.', 'I corrected one example and asked the client for the remaining affected-page list before expanding the changes. This kept the work focused on the intended pages instead of changing unrelated draft content.'],
      ['The changes', 'My final delivery update records corrections to WPML language mapping and the corresponding Spanish publishing states, followed by rebuilding the Yoast sitemap data and clearing the SiteGround cache.', 'I reported checking the affected URLs from the client’s audit list and confirming that they no longer appeared in the page sitemap.'],
      ['The reported outcome', 'The documented outcome is a developer-reported correction of the sitemap entries. A separate final client confirmation or independently reviewed before-and-after audit was not available for this case study.', 'Removing unwanted sitemap entries does not prove that URLs were removed from Google’s index, that rankings improved or that all site issues were resolved. Those are different outcomes requiring their own evidence.'],
      ['What this project demonstrates', 'When plugins depend on shared content state, the visible symptom may appear in a different system from the underlying cause. Looking at translation relationships helped explain an issue that initially looked like an SEO-plugin or cache problem.', 'A focused example, an agreed list of affected pages and a check of the resulting output provide a clearer repair process than making broad changes across the website.']
    ],
    evidenceNote: 'Based on the July–August 2026 issue report, diagnostic updates and final delivery message. Resolution is attributed to the developer’s report; no independent ranking, traffic or indexing improvement is claimed.',
    service: 'wordpress-troubleshooting', serviceLabel: 'WordPress troubleshooting',
    cta: 'Have a WordPress issue that is hard to trace?',
    ctaText: 'Send the affected URL, what you expected to happen and any recent changes. I can help investigate the underlying cause.'
  }
].concat(require('./additional-case-study-content'), require('./new-woocommerce-case-content'));
