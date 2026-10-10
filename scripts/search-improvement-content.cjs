// Search Console-informed service content. Only supported project evidence is linked.
module.exports = [
  {
    slug: 'woocommerce-development',
    title: 'WooCommerce Developer | Plugins & Checkout | Aman Kumar',
    description: 'Work with Aman Kumar on custom WooCommerce plugins, product filters, checkout fixes and integrations. Explore project evidence and discuss your store.',
    heading: 'WooCommerce development for an existing store',
    intro: 'I help businesses and agencies extend WooCommerce stores with custom PHP plugins, product discovery, checkout changes and connected workflows. Start with the shopping or management task you need to improve; the implementation depends on your current theme, extensions and checkout.',
    evidence: [
      ['Product filters and search', 'Manufacturer, model and category controls built as a shortcode plugin, with original desktop and mobile screenshots.', 'case-study-woocommerce-product-filters/', 'See the product-filter implementation'],
      ['Cart and order journeys', 'A storefront project documenting mobile order controls and a client-confirmed add-to-cart repair.', 'case-study-woocommerce-cart-whatsapp/', 'Read the cart and WhatsApp case study'],
      ['Custom checkout integrations', 'Stripe Tax integration work with historical checkout evidence and a clear account of what was reviewed.', 'case-study-woocommerce-stripe-tax/', 'Explore the Stripe Tax integration']
    ],
    faqs: [
      ['Can you build a custom WooCommerce plugin for my existing store?', 'Yes. I review your installed extensions first, then define the missing behaviour and whether it belongs in a focused plugin or a supported customization. Useful briefs include your store URL, product types, expected behaviour and an example of what currently fails.'],
      ['Will custom checkout work with Checkout Blocks and HPOS?', 'Compatibility needs to be checked against your actual setup. Classic checkout hooks and templates do not automatically cover Checkout Blocks. Order-related code also needs to use supported WooCommerce order APIs and be checked with your High-Performance Order Storage (HPOS) configuration. This assessment is part of agreeing the scope, rather than a blanket compatibility promise.'],
      ['Can you improve product filtering and search?', 'I can investigate manufacturer/model filters, product attributes, SKU search and the way results connect to category pages. The linked filter and SKU-search case studies show separate examples of this work. The first step is to agree which products should appear for representative searches.'],
      ['What will I receive after the work?', 'We agree on the deliverables before implementation: the requested code or configuration changes, representative test cases, handover notes and any remaining dependencies. Send your store URL, requirement and preferred timeline through the project enquiry form to discuss scope.']
    ]
  },
  {
    slug: 'wordpress-performance-optimization',
    title: 'WordPress Speed Optimization & Core Web Vitals | Aman Kumar',
    description: 'Find what slows your WordPress site down. Aman Kumar reviews loading, Core Web Vitals, caching, images and plugin overhead while preserving key workflows.',
    heading: 'A practical WordPress performance review',
    intro: 'I investigate slow WordPress pages before choosing an optimization. The review separates server response, the main visible content, JavaScript responsiveness and layout movement, then prioritizes changes around the pages your visitors use.',
    evidence: [
      ['Find the bottleneck', 'Review representative pages, mobile loading and available real-user data before changing hosting, caching or plugins.', null, null],
      ['Protect the workflow', 'Check menus, forms and, for stores, cart and checkout behaviour alongside asset and cache changes.', 'woocommerce-development/', 'See WooCommerce development scope'],
      ['Review the evidence', 'Read a documented performance investigation, including the limits of the available before-and-after measurements.', 'case-study-wordpress-speed-optimization/', 'Read the performance case study']
    ],
    faqs: [
      ['What is included in WordPress speed optimization?', 'The scope depends on the bottleneck. It may cover server response, caching configuration, responsive images, frontend assets, plugin overhead or expensive database work. I start with representative URLs and a baseline, agree on the changes, then compare results under similar conditions and test important features.'],
      ['Which Core Web Vitals matter?', 'Largest Contentful Paint (LCP) measures loading, Interaction to Next Paint (INP) measures responsiveness and Cumulative Layout Shift (CLS) measures visual stability. Google’s good-experience thresholds are LCP at or below 2.5 seconds, INP at or below 200 milliseconds and CLS at or below 0.1, assessed at the 75th percentile of real visits. These are reference targets, not promised results for your website.'],
      ['Why do PageSpeed Insights and Search Console show different results?', 'A Lighthouse test is a controlled lab run; field data reflects actual visitors and devices over a rolling period. Search Console groups similar URLs, while PageSpeed Insights may show page-level or origin-level field data when available. A low-traffic page may have no field data. Compare the same URL, device category and data source before drawing conclusions.'],
      ['Can you optimize a WooCommerce or Divi website?', 'Yes, the investigation can include WooCommerce or Divi where they are part of the site. A store needs cache exclusions for transactional and personal pages, and a page-builder site needs checks around modules and frontend dependencies. The change must preserve the features your visitors need.'],
      ['Do you guarantee a 100 PageSpeed score or higher rankings?', 'No. Hosting, third-party scripts and required functionality constrain performance, and search rankings depend on more than speed. The useful deliverable is a documented investigation, agreed improvements and verification of the workflows affected.']
    ]
  }
];
