'use strict';
// Anonymized summaries of documented work. Do not include private messages or access details.
module.exports = [
  {
    slug: 'case-study-woocommerce-affiliate-tracking',
    title: 'WooCommerce Affiliate Tracking & SliceWP Case Study | Aman Kumar',
    heading: 'Configuring coupon-based affiliate tracking for a WooCommerce store',
    description: 'A WooCommerce affiliate case study covering SliceWP configuration, coupon-based commission tracking, dashboard navigation and payout workflow review.',
    category: 'WOOCOMMERCE AFFILIATE INTEGRATION', icon: 'cart',
    client: 'An existing WooCommerce store', period: 'December 2025–January 2026',
    role: 'SliceWP configuration, dashboard access and payout workflow support',
    tools: ['WordPress', 'WooCommerce', 'SliceWP', 'Coupon-based tracking'],
    summary: 'An existing affiliate program needed coupon-based commission tracking and clearer dashboard access, with store-credit payouts as a separate requirement.',
    outcome: 'Supplied screenshots show a recorded commission and created payout batches; final payout redemption and complete client acceptance remain unverified.',
    evidence: 'Configuration work with supporting screenshots',
    flow: ['Review coupon attribution', 'Configure affiliate access', 'Review payout handling'],
    sections: [
      ['The problem', 'The store owner had already installed SliceWP, but reported that affiliate coupon codes were being used without commissions appearing. Affiliates also needed a dashboard where they could review their activity.', 'The requested program used coupon codes for attribution and a 15% commission rule. Store-credit or gift-card payouts were another requirement, and needed to be assessed separately from recording commissions.'],
      ['My contribution', 'I reviewed the existing configuration and reported correcting the tracking issue. I shared a demonstration with test cases, and the client approved the initial milestone. The supplied dashboard screenshot shows one recorded commission.', 'I also reported adding account navigation and redirecting logged-in affiliates to their dashboard. This work focused on the existing affiliate setup rather than designing or building the whole storefront. The available evidence does not establish the precise code changes or verify the commission rate across every order scenario.'],
      ['Tracking and payouts are separate workflows', 'A recorded commission establishes an affiliate earning in the system. Creating a payout batch is a further step, and does not by itself establish that the affiliate received usable store credit.', 'The supplied SliceWP payout screenshot shows created batches with zero payments marked paid. It supports the existence of payout records, but cannot be used as evidence of completed payments. My later updates described coupon generation associated with payouts; the final redemption behaviour still needs verification.'],
      ['Testing, revisions and handover', 'The conversation records demonstrations, a walkthrough meeting and further payout investigation. The client later reported inconsistent coupon amounts and codes that did not work. The client also reported correcting one affiliate’s coupon herself.', 'I sent an additional dashboard video on January 6 after requests for clearer instructions. That establishes delivery of another walkthrough, but the supplied record does not contain subsequent confirmation that the full payout workflow was accepted or working end to end.'],
      ['What this project demonstrates', 'The supported experience is practical work with an existing WooCommerce affiliate program: configuration review, coupon-based attribution, affiliate access and payout troubleshooting.', 'For a similar project, I would agree on separate checks for commission attribution, the affiliate dashboard, payout amounts and credit redemption. A useful handover should let the store owner repeat the process without developer assistance.']
    ],
    evidenceNote: 'Based on the supplied December 2025–January 2026 conversation and two screenshots. Initial milestone approval is distinct from final acceptance. No sales increase, successful automated payout process or resolved login issue is claimed. Private account details and messages are excluded.',
    service: 'woocommerce-development', serviceLabel: 'WooCommerce development',
    cta: 'Need help with WooCommerce affiliate tracking?',
    contactHref: 'mailto:amankamboj2387@gmail.com?subject=WooCommerce%20affiliate%20tracking%20enquiry&body=Store%20URL%3A%20%0A%0AAffiliate%20plugin%3A%20%0A%0AWhat%20is%20not%20working%3A%20%0A%0APreferred%20timeline%3A%20',
    ctaText: 'Share your affiliate plugin, how referrals are attributed and where the workflow fails. We can discuss configuration, testing and the handover your team needs.'
  },
  {
    slug: 'case-study-woocommerce-product-filters',
    title: 'WooCommerce Product Filter Case Study | Aman Kumar',
    heading: 'Helping shoppers find products by manufacturer and model',
    description: 'A custom WooCommerce product-filter case study covering a shortcode plugin, manufacturer and model selection, mobile review and client approval.',
    category: 'ECOMMERCE PRODUCT DISCOVERY', icon: 'cart',
    client: 'An online device-parts retailer', period: 'October 2025',
    role: 'Custom filter plugin, client revisions and category-page rollout',
    tools: ['WordPress', 'WooCommerce', 'Custom plugin', 'Shortcodes'],
    summary: 'A device-parts store needed a clearer way to browse products by manufacturer, model and category, starting on its homepage.',
    outcome: 'Client-reviewed filters, homepage testing and category-page delivery followed by approval.',
    evidence: 'Client review and approval recorded',
    flow: ['Build on a test page', 'Refine product selection', 'Roll out to store pages'],
    sections: [
      ['The problem', 'The store wanted shoppers to find relevant products through attribute-based filtering on its WooCommerce homepage. For device parts, selecting a manufacturer alone was not enough: the customer also needed a model selection and a useful category choice.', 'The project focused on the product-discovery interface within an existing store, rather than rebuilding its catalogue or checkout.'],
      ['My implementation', 'I developed a custom plugin that exposed the filter through a shortcode and placed it on a test page for review. This let the client check the selection behaviour before the feature was moved to the homepage.', 'The review clarified the manufacturer, model and category controls. I worked through the requested changes and adjusted the customer-facing labels to the Lithuanian wording supplied by the client.'],
      ['Review and rollout', 'The client reviewed the test-page implementation, requested label changes and gave positive feedback on the revised filter. I shared a mobile preview and reported testing the homepage filters.', 'The client then requested the same filtering interface on product-category archives. I confirmed that scope and shared the category-page implementation for review. A reset button was also requested; the evidence used here does not separately establish its final behaviour.'],
      ['The outcome', 'The conversation records positive client feedback on the reviewed feature, followed by an approval event after the category-page delivery. The supported result is a reviewed product-filter implementation across the homepage and category pages.', 'The project was intended to make product discovery easier. There is no measured conversion-rate or sales increase in the evidence used for this case study.'],
      ['What this project demonstrates', 'Product filtering needs to match how people select compatible items. Working through the manufacturer and model distinction with the client was as important as placing the controls on the page.', 'A shortcode-based implementation also allowed the same interface to be placed in more than one part of the existing store.']
    ],
    evidenceNote: 'Based on October 4–6, 2025 development updates, client review and the approval event after category-page delivery. Later XML-feed proposals and unrelated support work are outside this case study. No customer behaviour metrics were independently measured.',
    service: 'woocommerce-development', serviceLabel: 'WooCommerce development',
    cta: 'Could your customers find the right product more easily?',
    ctaText: 'Share your store URL, the attributes customers use to choose products and where the current browsing experience falls short.'
  },
  {
    slug: 'case-study-wordpress-malware-cleanup',
    title: 'WordPress Malware Cleanup & Investigation Case Study | Aman Kumar',
    heading: 'Investigating recurring malicious content on a WordPress website',
    description: 'A WordPress malware incident case study covering suspicious plugins, unwanted posts, repeated checks and the limits of point-in-time scan results.',
    category: 'WORDPRESS MALWARE INVESTIGATION', icon: 'shield',
    client: 'A WordPress business website', period: 'May 2025',
    role: 'Malware investigation, content cleanup and follow-up checks',
    tools: ['WordPress', 'MalCare', 'Elementor', 'WP Engine'],
    summary: 'Unwanted posts and categories kept appearing on an existing website. The work involved cleanup, repeated scans and investigating symptoms that returned.',
    outcome: 'Later updates reported removed content and a resolved critical error; long-term eradication was not independently verified.',
    evidence: 'Incident work with reported findings',
    flow: ['Inspect suspicious content', 'Remove and recheck', 'Investigate recurring symptoms'],
    sections: [
      ['The incident', 'The engagement began as WordPress and Elementor troubleshooting and included malicious content appearing on the website. The client confirmed that unexpected content was not legitimate site material.', 'As the work progressed, the client reported that unwanted posts or categories returned after removal. That recurrence meant an initial cleanup could not be treated as proof that the incident had ended.'],
      ['My investigation and cleanup', 'My updates document identifying suspicious hidden plugins, reporting their removal and installing MalCare to support scanning. I also reported removing unwanted posts and requested hosting-level access for further investigation and follow-up.', 'The client identified functionality and custom snippets that needed to be preserved. Cleanup had to account for those legitimate parts of the website rather than indiscriminately removing plugins or content.'],
      ['Why repeat checks mattered', 'Early messages included clean-scan reports, but the client subsequently reported recurring symptoms. On May 13, the client again identified unwanted categories that had reappeared.', 'The following day, my updates reported removing those categories, observing that they had not reappeared during the subsequent checks and resolving a critical error. The record therefore describes iterative incident work rather than a single definitive repair.'],
      ['The reported outcome', 'The later delivery updates report removed content and a resolved critical error. An independently reviewed final scan, confirmed entry point and documented long-term monitoring result are not available in the evidence used here.', 'This case study does not claim permanent malware eradication, a proven root cause or protection against future attacks. It describes the investigation and cleanup work that the conversation supports.'],
      ['What this project demonstrates', 'Recurring content changes deserve more investigation even when a scan reports no current findings. The useful distinction is between removing visible symptoms and establishing that their underlying cause has been addressed.', 'The project also shows why cleanup reports should identify what was checked, what was changed and what still requires verification.']
    ],
    evidenceNote: 'Based on May 7–14, 2025 messages documenting cleanup actions, client reports of recurrence and later developer-reported checks. Historical scan screenshots were not independently inspected. The site is anonymized and no current security condition is asserted.',
    service: 'wordpress-security', serviceLabel: 'WordPress security support',
    cta: 'Seeing unexpected content or suspicious WordPress behaviour?',
    ctaText: 'Describe the symptoms, when they started and any previous cleanup attempts. Avoid sending passwords or sensitive information in your initial enquiry.'
  },
  {
    slug: 'case-study-wordpress-speed-optimization',
    title: 'WordPress Speed Optimization Project | Aman Kumar',
    heading: 'Tuning WordPress performance while checking frontend behaviour',
    description: 'A WordPress performance project covering WP Rocket, asset optimization and a frontend regression, with a clearly scoped desktop improvement report.',
    category: 'WORDPRESS SPEED OPTIMIZATION', icon: 'bolt',
    client: 'An agency-managed business website', period: 'October 2025',
    role: 'Performance tuning and frontend troubleshooting',
    tools: ['WordPress', 'WP Rocket', 'CSS', 'JavaScript'],
    summary: 'Performance tuning needed to account for the existing frontend. During optimization, a testimonial section needed attention alongside the speed work.',
    outcome: 'A desktop speed improvement and a testimonial-section fix were reported; mobile completion and score changes are unverified.',
    evidence: 'Developer-reported desktop improvement',
    flow: ['Review the environment', 'Tune and inspect the frontend', 'Separate desktop and mobile results'],
    sections: [
      ['The brief', 'An agency needed help with website performance and Core Web Vitals. The existing business website had WP Rocket available, and the work required coordination around backups and the hosting environment.', 'This story focuses on the desktop performance work reported for one website. The wider conversation also included a second website and additional mobile work; those are not presented as completed outcomes here.'],
      ['The work documented', 'I discussed hosting requirements and WP Rocket configuration with the agency. My progress messages describe work on images, CSS and JavaScript as part of the optimization effort.', 'The evidence does not identify every final setting or a fully documented set of before-and-after measurements, so this case study does not attribute the result to a specific cache option or asset change.'],
      ['Checking the visible website', 'During the work, the client reported that WP Rocket settings were affecting the testimonial section and had disabled settings while asking me to investigate. I subsequently reported fixing that section.', 'That review was part of the performance work: improving loading behaviour also required attention to whether existing sections continued displaying correctly.'],
      ['The reported outcome', 'On October 27, I reported improved desktop speed and shared an image attachment. In the next update, I explicitly said mobile work was still in progress.', 'The attachment has not been independently verified for this case study. No numeric score increase, loading-time reduction, Core Web Vitals pass or completed mobile improvement is claimed. A final client acceptance of the performance work is not established by the messages reviewed.'],
      ['What this project demonstrates', 'Performance changes should be reviewed alongside the actual page experience. A visible regression needs attention even if a speed test improves.', 'Desktop and mobile results also need separate evidence. Reporting one as improved should not imply that the other is finished.']
    ],
    evidenceNote: 'Based on October 27, 2025 configuration discussion, the client-reported testimonial issue and developer updates reporting its fix and a desktop speed improvement. This is a scoped account of the work, not a verified performance benchmark or a claim that the broader engagement was complete.',
    service: 'wordpress-performance-optimization', serviceLabel: 'WordPress performance optimization',
    cta: 'Want to improve speed without overlooking the user experience?',
    ctaText: 'Send the affected page URLs, any recent performance reports and the key interactions your visitors need to complete.'
  }
];
