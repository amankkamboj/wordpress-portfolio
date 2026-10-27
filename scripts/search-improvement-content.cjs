// Search Console-informed service content. Only supported project evidence is linked.
module.exports = [
  {
    slug: 'woocommerce-development',
    title: 'WooCommerce Developer | Plugins & Checkout | Aman Kumar',
    description: 'Work with Aman Kumar on custom WooCommerce plugins, product filters, checkout fixes and integrations. Explore project evidence and discuss your store.',
    heading: 'WooCommerce development for an existing store',
    faqHeading: 'Questions about WooCommerce development',
    ctaLabel: 'Discuss your store →',
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
    faqHeading: 'Questions about WordPress performance',
    ctaLabel: 'Discuss your website performance →',
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
  },
  {
    slug: 'wordpress-development',
    title: 'WordPress Developer | Custom Plugins & Workflows | Aman Kumar',
    description: 'Custom WordPress development by Aman Kumar: PHP plugins, Gravity Forms workflows, searchable directories and API integrations. Explore project evidence.',
    heading: 'Custom WordPress development around your workflow',
    faqHeading: 'Questions about custom WordPress development',
    ctaLabel: 'Discuss your WordPress project →',
    intro: 'I build focused WordPress plugins, custom interactive workflows and third-party API integrations when standard settings do not fit how your business operates.',
    evidence: [
      ['Custom assessment & scoring plugins', 'A shortcode-based assessment tool with domain scoring, saved submissions and Zoho CRM synchronization status.', 'case-study-wordpress-assessment-tool/', 'See the assessment plugin case study'],
      ['Searchable Gravity Forms directories', 'Registration-field mapping, category dropdowns and compact listing cards built with Gravity Forms and GravityView.', 'case-study-gravity-forms-directory/', 'Explore the directory implementation'],
      ['Campaign questionnaires & reporting', 'Reusable candidate screening forms with role-controlled administration and consolidated CSV response exports.', 'case-study-recruitment-questionnaire/', 'Read the recruitment workflow story']
    ],
    faqs: [
      ['Should my requirement live in a custom plugin or the theme?', 'Presentation and template layouts belong in a child theme or theme templates; business logic, custom post types, shortcodes and API connections usually belong in a focused plugin so they survive a future design change.'],
      ['Can you customize Gravity Forms, GravityView or existing plugins?', 'Yes. I review what your installed plugins already support and extend them through documented hooks, filters and custom add-on code before writing a replacement from scratch.'],
      ['How do you handle external API and CRM integrations?', 'We define the required fields, authentication method, trigger events and error handling first. I keep API keys out of public frontend code and verify how failed requests or duplicate submissions are handled.'],
      ['What do I receive at handover?', 'You receive the custom plugin or theme source files, agreed test verification on representative workflows, and concise handover notes explaining where the code lives and how to maintain it.']
    ]
  },
  {
    slug: 'wordpress-troubleshooting',
    title: 'WordPress Troubleshooting & Bug Fixes | Aman Kumar',
    description: 'Fix WordPress issues with Aman Kumar: plugin conflicts, critical PHP errors, WPML/Yoast bugs and Divi layout repairs. See documented troubleshooting work.',
    heading: 'Root-cause investigation for broken WordPress features',
    faqHeading: 'Questions about WordPress troubleshooting',
    ctaLabel: 'Tell me what’s broken →',
    intro: 'I trace PHP errors, plugin conflicts, multilingual publishing mismatches and page-builder issues to their underlying cause so your website can be repaired without an unnecessary rebuild.',
    evidence: [
      ['Critical error recovery', 'Isolating a conflicting plugin to restore normal website and administrator access after a fatal error.', 'case-study-wordpress-critical-error/', 'Read the critical-error recovery case'],
      ['Divi & agency maintenance fixes', 'Resolving legacy-module warnings, production CSS mismatches and shortcode widget issues across client sites.', 'case-study-divi-wordpress-maintenance/', 'See the Divi maintenance case study'],
      ['WPML & Yoast sitemap diagnosis', 'Tracing unexpected sitemap URLs to published Spanish translations after English pages were moved to draft.', 'case-study-wpml-yoast-sitemap/', 'Explore the sitemap investigation']
    ],
    faqs: [
      ['What should I send when reporting a WordPress bug?', 'Share the affected URL, the exact error message or symptom, the steps to reproduce it, and any recent plugin, theme or hosting changes. Please do not include passwords in your first message.'],
      ['Can you fix a site that is showing a critical error right now?', 'Yes. When hosting or file-manager access is available, the immediate priority is to inspect the error log, isolate the conflicting component and restore access before investigating a longer-term compatibility fix.'],
      ['Do you work on Divi, Elementor or multilingual WPML sites?', 'Yes. Page-builder templates and multilingual plugins store state across post metadata and translation tables, so I check both the builder/translation configuration and the surrounding theme or plugin code.'],
      ['Will troubleshooting break other parts of my website?', 'I aim for minimal, targeted changes—using a staging environment where available or agreeing on a backup and rollback path before touching live functionality.']
    ]
  },
  {
    slug: 'wordpress-migration-maintenance',
    title: 'WordPress Migration & Maintenance Services | Aman Kumar',
    description: 'Move your website to WordPress or between hosts, and keep updates and compatibility managed. Explore Drupal and .NET migration case studies with Aman Kumar.',
    heading: 'Planned WordPress migrations, rebuilds and ongoing care',
    faqHeading: 'Questions about migration and maintenance',
    ctaLabel: 'Plan your migration or maintenance →',
    intro: 'Whether you are moving an existing WordPress installation to a new host, reconstructing a legacy Drupal or .NET site in WordPress, or managing ongoing updates, I focus on preserving content structure and testing key workflows.',
    evidence: [
      ['Drupal to WordPress migration', 'Reconstructing a Drupal content hierarchy and linked files in WordPress with only administrator source access.', 'case-study-drupal-wordpress-migration/', 'Read the Drupal migration case study'],
      ['.NET to WordPress website rebuild', 'Moving a consulting business to WordPress on a new domain while retaining its structure and repairing navigation.', 'case-study-consulting-wordpress-rebuild/', 'See the consulting rebuild case study'],
      ['Ongoing Divi & plugin maintenance', 'Supporting an agency across client sites with Divi upgrades, legacy-module cleanup and compatibility checks.', 'case-study-divi-wordpress-maintenance/', 'Explore the agency maintenance work']
    ],
    faqs: [
      ['Can you migrate a website from Drupal, .NET or another platform to WordPress?', 'Yes. Depending on the source platform and available access, I can migrate content and files, reconstruct page hierarchies and navigation in WordPress, and review URLs and breadcrumbs before launch.'],
      ['What happens during a WordPress hosting or domain move?', 'I coordinate copying the files and database, updating configuration and serialized domain references, checking SSL and permissions, and testing representative pages and forms in the destination environment.'],
      ['How do you handle ongoing WordPress and plugin updates safely?', 'I follow a structured sequence: review active dependencies, confirm a usable backup, apply updates (on staging first where available), test key user journeys and resolve any compatibility issues that appear.'],
      ['Do you lock clients into long-term maintenance retainers?', 'No. We can agree on a one-off migration, a defined maintenance review, or recurring support around the specific websites and workflows you need covered.']
    ]
  },
  {
    slug: 'wordpress-security',
    title: 'WordPress Security & Malware Cleanup | Aman Kumar',
    description: 'WordPress malware removal, reinfection investigation and practical site hardening by Aman Kumar. Explore the SAV Associates recovery case study.',
    heading: 'Investigating compromised WordPress sites and stopping reinfection',
    faqHeading: 'Questions about WordPress security & cleanup',
    ctaLabel: 'Discuss your security issue →',
    intro: 'Deleting a flagged file rarely solves a compromise if a scheduled task or injected configuration loader immediately recreates it. I trace the persistence mechanism first, clean malicious payloads, verify core checksums and apply practical hardening.',
    evidence: [
      ['Stopping cron & wp-config persistence', 'Tracing scheduled reinfection, fake plugin directories and PHP file-manager backdoors on the SAV Associates website.', 'case-study-wordpress-malware-removal/', 'Read the SAV Associates recovery case'],
      ['Recurring malicious-content investigation', 'Investigating unwanted posts and categories that reappeared on an existing WordPress installation.', 'case-study-wordpress-malware-cleanup/', 'See the malware investigation notes'],
      ['Post-cleanup integrity checks', 'Comparing WordPress core and plugin files against official checksums with WP-CLI and restricting PHP execution in uploads.', 'case-study-wordpress-malware-removal/#verification', 'View the verification process']
    ],
    faqs: [
      ['Why does malware keep coming back after I delete suspicious files?', 'Attackers often add a persistence layer—such as injected code inside wp-config.php, a rogue cron job, or a disguised must-use (MU) plugin—that automatically restores deleted backdoors. Containment must stop that mechanism first.'],
      ['How do you verify a WordPress site after malware cleanup?', 'I use WP-CLI to verify WordPress core and repository plugin checksums, inspect custom themes/plugins and database users manually, and test that legitimate site features and admin access work properly.'],
      ['What hardening steps are included after recovery?', 'Depending on your hosting setup, hardening covers removing unused components and unauthorized admin accounts, disabling dashboard file editing, restricting PHP execution in the uploads directory, tightening wp-config permissions and coordinating credential rotation.'],
      ['Can any developer guarantee a site will never be hacked again?', 'No honest service can guarantee permanent immunity, especially on shared hosting or when third-party plugins and user credentials remain in use. My goal is a thorough technical cleanup, clear documentation of what was found, and practical steps to reduce future exposure.']
    ]
  }
];
