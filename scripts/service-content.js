'use strict';
// Editorial source for service pages. No browser/runtime dependency.
module.exports = [
{
slug:'wordpress-development', label:'WordPress Development', icon:'code',
title:'WordPress Developer | Custom WordPress Development | Aman Kumar',
description:'Custom WordPress development by Aman Kumar, including themes, plugins, PHP development, API integrations, WooCommerce and complex website solutions.',
h1:'Custom WordPress Development',
intro:['I build and improve WordPress websites with practical, maintainable solutions tailored to real business requirements.','From custom PHP functionality and theme development to plugin customization and API integrations, I help businesses solve problems without unnecessary complexity.'],
cta:'Discuss Your WordPress Project', ctaHeading:'Need help with a WordPress project?', ctaText:"Tell me what you’re building or what isn’t working. Include your website URL, the intended workflow and any constraints I should know about.", related:[1,2,3],
sections:[
['Custom WordPress solutions',[
'An existing website often needs one specific capability rather than a complete rebuild. You might need a different content structure, an editing screen that matches your team’s workflow, or a frontend feature that standard settings cannot produce. I start by understanding who uses the feature, what information it needs and how you will maintain it.',
'I work with theme customization, child themes, custom templates, PHP and JavaScript. WordPress hooks and filters provide extension points without editing core files. Custom post types and custom fields can make structured content easier to manage, while database-driven functionality can support requirements that do not fit a standard page.',
'The implementation should belong in the right place. Presentation changes may suit a child theme; business functionality may be better kept in a plugin so it survives a future design change. I explain these choices and keep the solution proportionate to the problem.'
]],
['Plugin development and customization',[
'Installing another plugin is not always the best answer, but writing custom code is not automatically better either. I review what your existing plugins already support, how they are maintained and where their extension points are. That helps avoid duplicating functionality or creating a dependency you do not need.',
'When custom development is appropriate, I can build a focused plugin or extend an existing one through its supported hooks and filters. This can include custom admin functionality, frontend interactions and changes to how information is saved or displayed. Plugin conflicts are investigated before deciding whether to adapt, replace or remove a component.',
'I consider permissions, validation, error handling and compatibility alongside the visible feature. A change should be understandable to the next developer, and routine updates should not silently overwrite it. Where a third-party limitation affects the approach, I explain it before expanding the scope.'
]],
['API integrations and connected workflows',[
'A website may need to exchange data with an external service, send an enquiry to a CRM or respond to events from a payment or service platform. I work through the required fields, authentication method, data ownership and expected response before connecting the systems.',
'Integration work can involve outbound API requests, incoming webhooks or custom endpoints. I account for failed requests, duplicate events and the difference between a test environment and production. Authentication credentials should stay out of publicly accessible frontend code and shared screenshots.',
'Before handover, the useful question is not simply whether a request succeeds once. It is whether the right records reach the right system, whether failures can be investigated, and whether the business has a practical way to recover when an external service is unavailable.'
]],
['Improve the website you already have',[
'A redesign can preserve working parts of a site. I assess the current theme, plugins, content and custom functionality before suggesting changes. That makes it easier to distinguish a layout issue from a structural problem and to avoid rebuilding features that already do their job.',
'Enhancements might involve a cleaner content template, a more useful admin screen or a better mobile interaction. I use a staging copy where available and agree on the pages and workflows that need checking. Existing URLs and important user journeys should be considered before a replacement goes live.'
]],
['Working directly with your developer',[
'I am a WordPress and PHP developer based in Chandigarh, India, working remotely with clients worldwide. My focus is on investigating the requirement, explaining the practical options and implementing a solution that remains manageable after the initial work is complete.',
'At the start, we define what success looks like: which user actions must work, what information should be stored and which existing features must remain intact. I can then explain the scope, dependencies and any questions that require further investigation before an estimate is useful.',
'For an existing codebase, I first read the relevant implementation rather than assuming it follows a standard setup. At handover, I explain the changes, where they live and what needs attention during future updates. You can also review the live websites and client recommendations on my portfolio.'
]]
]},
{
slug:'woocommerce-development',label:'WooCommerce Development',icon:'cart',
title:'WooCommerce Developer | Custom WooCommerce Development | Aman Kumar',description:'WooCommerce development for custom stores, checkout improvements, integrations, product functionality, bug fixes and performance optimization.',h1:'WooCommerce Development',
intro:['I work directly with existing WooCommerce stores as well as new builds, from product functionality to checkout issues and integrations.','Many store requirements go beyond standard plugin settings. I use PHP, WordPress hooks, APIs and custom code where appropriate, with attention to the complete order journey.'],
cta:'Discuss Your WooCommerce Store',ctaHeading:'What does your store need to do better?',ctaText:'Share your store URL, the product or checkout workflow involved, and the result you want customers or your team to achieve.',related:[0,2,3],
sections:[
['Store development around your products',[
'A store should reflect how your products are sold and managed. I start with the catalogue, product types, customer journey and operational requirements. Building a new shop and improving an established one require different decisions, particularly when existing orders, customer records or integrations must remain intact.',
'Product page customization can make important information easier to understand and the purchase options easier to use. Variable products need consistent selection behaviour, clear availability and accurate pricing. I look at these details together rather than treating the product page as an isolated design task.',
'Where a requirement is already supported by WooCommerce, I prefer using that capability. Custom development becomes useful when your actual workflow needs something more specific. The aim is a store your team can operate without relying on unnecessary manual work or a stack of overlapping extensions.'
]],
['Checkout, cart and business logic',[
'Checkout changes need to work for different customer states, product combinations and payment methods. A field that looks correct on one screen may still fail validation or produce incomplete order information. I review the whole path from adding an item to confirming the order.',
'I can adapt cart functionality, checkout fields and product behaviour using suitable WooCommerce extension points. Custom pricing or business rules need an agreed definition: who qualifies, which items are affected and how the rules interact with discounts, tax settings and shipping.',
'Before choosing an implementation, I check whether the store uses block-based or classic checkout and which extensions support it. Validation belongs on the server as well as in the interface. I also consider how custom information will appear in the admin area and relevant order communications.'
]],
['Payments, shipping and third-party connections',[
'Payment and shipping functionality depends on both the store and the external provider. I review available integration methods and test environments before changing a live transaction flow. Where a maintained gateway extension already fits the requirement, extending its supported behaviour may be more practical than replacing it.',
'An integration may need to exchange product information, update order status or send data to an external service. Authentication, failed requests and repeated notifications all need consideration. A successful redirect back to the shop is not enough to confirm that payment and order state are correctly synchronized.',
'Testing should cover cancelled or unsuccessful payments as well as successful ones. Shipping logic needs checks against the destinations and cart combinations your business actually supports. I agree on representative cases with you so that the test effort matches the operational risk.'
]],
['Troubleshooting an existing store',[
'WooCommerce problems can come from a theme override, an extension conflict, custom PHP or an external API. I investigate the underlying cause rather than applying unrelated configuration changes. Useful starting information includes the affected product, the steps that trigger the problem and when it first appeared.',
'A staging copy helps reproduce checkout or order issues without disturbing customers. Where that is not available, the diagnostic approach needs to be planned around the live store. I discuss access and backups before changes, and distinguish a confirmed cause from something that still needs testing.',
'After a fix, I check related workflows rather than stopping at the original symptom. For example, a cart change may affect totals, shipping selection and order emails. The objective is to restore the intended behaviour while keeping unrelated store functions stable.'
]],
['Performance that respects a dynamic store',[
'A WooCommerce shop cannot be cached in exactly the same way as a static information page. Carts, checkout, accounts and customer sessions contain dynamic or personal information. Optimizations must preserve those boundaries and respect the behaviour of the active plugins and hosting setup.',
'I investigate product images, frontend assets, expensive database work and plugin overhead. Reducing unnecessary work can help, but changes need to be measured on the actual store. Third-party payment, chat or marketing scripts may limit what can be improved without changing functionality.',
'Before delivery, I review the agreed customer journeys on mobile and desktop. I explain what changed and any remaining dependencies so you can maintain the store sensibly. If your main concern is load time rather than new functionality, the dedicated performance service is a useful starting point.'
]]
]},
{
slug:'wordpress-troubleshooting',label:'WordPress Troubleshooting',icon:'tools',title:'WordPress Troubleshooting & Bug Fixes | Aman Kumar',description:'WordPress troubleshooting for plugin conflicts, PHP errors, broken layouts, database issues, migrations, integrations and difficult website problems.',h1:'WordPress Troubleshooting & Bug Fixes',
intro:["Some WordPress problems aren’t solved by installing another plugin.",'I investigate the underlying cause, isolate the issue and implement a practical fix without unnecessarily rebuilding the website.'],
cta:"Tell Me What’s Broken",ctaHeading:'Let’s start with the problem you can see.',ctaText:'Send the affected URL, the steps that trigger the issue and any recent changes. A screenshot or the exact error message can help; please do not email passwords.',related:[0,3,4],
sections:[
['Problems I can investigate',[
'A broken site does not always produce a useful error message. You may see an empty page, a failed form submission, an unexpected redirect or a layout that only breaks on a phone. I use the symptom as a starting point and work back toward the code, configuration or external dependency responsible.',
'I investigate PHP errors, plugin and theme conflicts, JavaScript issues, failed updates and WordPress login problems. Database issues, API failures and WooCommerce behaviour can also require a closer look. For page-builder layouts, including Elementor or Divi where they are part of the site, the builder settings and surrounding theme both matter.',
'Migration problems need their own context: a change of domain, file path, PHP version or hosting environment can reveal assumptions in existing code. I also review hosting-related WordPress issues where logs and configuration are available. If a problem requires action from the host or another provider, I explain what evidence to pass on.'
]],
['A repeatable troubleshooting approach',[
'Reproduce: I establish the exact conditions that trigger the issue. That includes the affected URL, user role, device, input and recent changes. If it happens intermittently, I look for patterns instead of treating one successful attempt as proof that the problem has disappeared.',
'Diagnose: I review relevant logs, browser errors, configuration and custom code. On a suitable staging copy, components can be isolated more safely. The goal is to separate the underlying cause from secondary errors, and to make one controlled change at a time.',
'Fix: Once the cause is understood, I choose a focused correction. That might mean adjusting custom code, resolving an extension conflict, restoring a missing configuration or asking an external provider to correct its side of an integration. I explain material tradeoffs before making broader changes.',
'Verify: I repeat the original steps and test connected workflows. A fix should work under the conditions that failed, not just on a fresh administrator session. I record what changed and identify anything that still depends on monitoring or an upstream update.'
]],
['Care for the website you already rely on',[
'Troubleshooting should minimize unnecessary change. I do not treat an unfamiliar theme or plugin as an automatic reason to replace it. First I check why it is there, what depends on it and whether the issue can be corrected without disrupting the rest of the site.',
'Before risky changes, I discuss a usable backup and a recovery path. Database changes deserve particular care because content, orders and user activity may continue while work is happening. A staging copy is useful, but it also needs to represent the relevant production settings to produce meaningful results.',
'I keep the scope tied to the reported problem. If investigation reveals unrelated technical debt, I explain it separately so you can decide what to address now and what can wait. This keeps a focused repair from turning into an unexpected rebuild.'
]],
['Complex code and connected systems',[
'Custom functionality often spans several layers: a form, JavaScript, a PHP handler, the database and an external API. The visible failure may be at the end of that chain. I trace the relevant path and check what each part actually receives and returns.',
'Existing codebases can also contain changes made by several developers over time. I look for the intended behaviour before changing it, particularly around hooks, templates and scheduled tasks. Understanding those dependencies makes it easier to correct the issue without removing a feature somebody still uses.',
'Not every problem has a quick or local fix. An unsupported extension or a provider limitation may require a different approach. I investigate systematically and recommend the most practical solution, including the limits of what can be established with the available access.'
]],
['What to send before investigation',[
'The most useful report describes what you expected and what happened instead. Include when the issue started, whether it affects every visitor and any recent plugin, theme, hosting or content changes. Exact error messages are more useful than a description such as “the site is not working.”',
'Access can be arranged securely once the scope is clear; please avoid including passwords or sensitive customer data in an initial email. If you have already tried fixes, describe them so I can account for the current state. Together we can agree on the immediate priority and the workflows that must be verified.'
]]
]},
{
slug:'wordpress-performance-optimization',label:'Performance Optimization',icon:'bolt',title:'WordPress Speed & Performance Optimization | Aman Kumar',description:'Improve WordPress speed, Core Web Vitals and website performance through code, asset, database, caching and frontend optimization.',h1:'WordPress Performance Optimization',
intro:['A faster website starts with understanding what is slowing it down. I investigate WordPress performance and prioritize changes that matter to the people using the site.','Results depend on hosting, themes, plugins, third-party scripts, images and required functionality. I focus on measurable improvements without promising a particular PageSpeed score.'],
cta:'Improve My WordPress Performance',ctaHeading:'Where does your website feel slow?',ctaText:'Share the site URL, the pages that matter most and any PageSpeed report you already have. Tell me which features must keep working.',related:[1,2,0],
sections:[
['Investigate before optimizing',[
'A slow first response and a slow visual render are different problems. I look at the request sequence, server response, page assets and visible behaviour before deciding where to spend effort. This helps distinguish hosting or backend delays from work happening in the visitor’s browser.',
'PageSpeed Insights is useful for identifying opportunities, but a single lab run does not describe every visitor’s experience. Where real-user data is available, I use it alongside repeatable tests. Mobile devices, network conditions and pages with different content can expose different bottlenecks.',
'I review JavaScript, CSS, image sizes, font loading and plugin overhead. An external widget may delay a page even when WordPress is responding quickly. Each finding should lead to a practical decision: reduce the work, load it at a better time, change the implementation or accept a necessary dependency.'
]],
['WordPress, caching and database work',[
'Caching can reduce repeated processing, but the strategy must fit the site. I check the existing hosting cache and plugin configuration before adding another layer. Overlapping settings can make results harder to explain and may lead to stale content or inconsistent behaviour.',
'Database investigation focuses on unnecessary work and the queries involved in important pages. Cleanup should not mean deleting unfamiliar records indiscriminately. Backups, ownership of plugin data and the needs of custom functionality must be understood before removing or changing stored information.',
'Plugin evaluation is also about what a plugin does, not just how many are installed. One expensive feature may matter more than several small utilities. I review the actual workload and explain whether a configuration change, code adjustment or replacement is worth considering.'
]],
['Images, assets and frontend behaviour',[
'Large images are a common opportunity because the file delivered may be much bigger than the displayed result needs. Responsive image sizes and appropriate compression can reduce transfer without making the site look noticeably worse. Important imagery should remain sharp at the sizes visitors actually see.',
'Below-the-fold images can load lazily, while the main image visible on arrival should not be unnecessarily delayed. Explicit dimensions help the browser reserve space. Fonts and embedded content also need attention because their arrival can change the layout after a visitor starts reading.',
'CSS and JavaScript optimization needs testing. Delaying a script may help an audit while breaking a menu, form or purchase flow. I review dependencies and use selective loading where suitable, rather than applying aggressive settings globally and hoping every page still works.'
]],
['Core Web Vitals in practical terms',[
'Largest Contentful Paint, or LCP, concerns when the largest visible content element is rendered. Improvements may involve a faster server response, better delivery of the main image or removing a dependency that delays rendering. The relevant element can differ between mobile and desktop layouts.',
'Interaction to Next Paint, or INP, describes responsiveness to user interactions. Long JavaScript tasks and expensive interface updates can make clicks or typing feel delayed. Cumulative Layout Shift, or CLS, concerns unexpected movement of visible content, such as a button shifting when an image arrives.',
'These metrics help identify real usability problems, but they are not a promise of a particular business outcome. I explain what the tests show, what is still uncertain and which constraints come from the design, functionality or external services the site needs.'
]],
['WooCommerce performance without broken orders',[
'A shop needs more careful handling than an information page. Cart contents, checkout state, logged-in accounts and customer sessions must stay correct. Pages containing personal or transactional information should not be served from an inappropriate shared cache.',
'I review the store’s caching exclusions, product imagery and frontend overhead alongside representative shopping journeys. Testing includes adding products, updating quantities, selecting shipping and progressing through the available checkout flow. A faster score is not useful if customers can no longer place an order.'
]],
['Measure the change and keep it maintainable',[
'Before work begins, we agree on representative pages and a baseline. After changes, I compare under similar conditions and check the functions those pages support. I describe the changes clearly enough that future plugin or content updates can be assessed against them.',
'Performance is ongoing: a new banner, analytics tool or product extension can change the workload. I can identify the remaining tradeoffs and suggest what to monitor next. The aim is a site that feels better to use while preserving the features your business actually relies on.'
]]
]},
{
slug:'wordpress-security',label:'WordPress Security',icon:'shield',title:'WordPress Security & Malware Cleanup | Aman Kumar',description:'WordPress security support including malware cleanup, compromised-site investigation, hardening, update review and practical security improvements.',h1:'WordPress Security & Malware Cleanup',
intro:['WordPress security problems often require more than installing a security plugin.','I help investigate compromised WordPress websites, remove malicious code, identify likely entry points and strengthen the site against repeat problems. My focus is WordPress security work backed by WordPress/PHP experience and continued cybersecurity learning.'],
cta:'Get Help With a WordPress Security Issue',ctaHeading:'Concerned that your WordPress site is compromised?',ctaText:'Describe the symptoms and when you first noticed them. Include the site URL, but keep passwords, customer information and other sensitive details out of your initial message.',related:[2,0,3],
sections:[
['Investigating a compromised WordPress website',[
'Suspicious redirects, unexpected administrator accounts or unfamiliar code can indicate a compromise, but the visible symptom rarely explains the whole incident. I review the affected installation and available evidence to understand what changed and which parts of the site may be involved.',
'The investigation can include suspicious files, malicious PHP, injected scripts, modified WordPress core files and unexpected database entries. Plugins and themes also need examination, including components that are installed but no longer used. Legitimate customizations must be distinguished from malicious changes before files are replaced.',
'I discuss the available access, backups and immediate business impact first. Depending on the situation, the host may need to help contain the problem or provide logs. Work is limited to websites and systems you are authorized to have investigated; it is not a separate penetration-testing service.'
]],
['A careful malware cleanup process',[
'Investigate and identify: I examine the symptoms, relevant files and available logs, then identify changes that require removal or further analysis. Preserving a copy of the current state can be useful for comparison. A scanner can assist, but its output should not replace a review of the affected application.',
'Remove and restore: I remove identified malicious code and restore legitimate files from appropriate trusted sources where possible. Existing custom functionality needs special care so cleanup does not destroy business features. If a backup is used, it must be assessed rather than assumed to be clean simply because it is older.',
'Update and harden: I review vulnerable or unsupported components, relevant accounts and configuration. Changes to passwords or keys may be necessary and should be coordinated with the people and systems that use them. Restoring visible functionality without addressing likely access routes can leave the original problem unresolved.',
'Recheck and monitor: I check the affected pages and workflows again and look for signs of recurring changes. Some findings remain uncertain when logs or historical backups are unavailable. I explain those limits and the follow-up needed. Malware removal alone cannot guarantee that a website will never be compromised again.'
]],
['Practical WordPress hardening',[
'Hardening starts with the installation you actually have. I review WordPress, plugin and theme updates, unused components and administrator accounts. Each account should have a clear purpose, and access should be limited to what the person needs. Strong authentication and suitable login protection can reduce avoidable exposure.',
'File permissions, configuration access and hosting controls also matter. I review appropriate protection for wp-config, restrictions on dashboard file editing and database access in the context of the host’s setup. Blanket changes can break a site, so configuration should be checked against its real requirements.',
'Backups are part of recovery rather than a substitute for prevention. Their location, access controls and ability to restore the site deserve attention. I also look at how updates will be handled after cleanup, because a site that returns to the same unsupported components may remain difficult to maintain safely.'
]],
['Security work needs development context',[
'WordPress security issues often involve PHP, hooks, themes, plugins and server behaviour together. A suspicious fragment may be mixed into a file that also contains legitimate custom code. Understanding that code helps determine what can be removed, what needs restoring and what should be tested afterwards.',
'I approach the work as a WordPress and PHP developer. That includes checking whether forms, logins, custom integrations and store functions still behave correctly after repairs. Where the incident also reveals a separate bug or failed integration, it can be scoped as troubleshooting instead of silently expanding the cleanup.',
'When a problem extends beyond the WordPress installation, I explain when hosting support or a specialist investigation is needed. Any reporting obligations or wider organizational response are decisions for the business and its advisers. My service focuses on the site, its code and practical technical recovery.'
]],
['Continuous Cybersecurity Learning',[
'Alongside my WordPress and PHP work, I continue to develop my cybersecurity knowledge through structured training and practical learning. This supports how I review application behaviour, investigate suspicious changes and understand the limits of a particular finding.',
'I am continuing structured cybersecurity training; I am not presenting a completed cybersecurity certification here. A verified credential can be added once completed, with its name, issuing organization, completion date and credential link. Until then, the service remains grounded in my WordPress development work.',
'If you need help, start with what you have observed: the unexpected behaviour, the first known date and any messages from your host. That gives us a basis for discussing immediate priorities, access and a recovery approach before making changes to the website.'
]]
]
}
];
