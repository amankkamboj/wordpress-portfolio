module.exports = [
 {
  slug:'case-study-woocommerce-cart-whatsapp',
  title:'WooCommerce Cart & WhatsApp Workflow Case Study | Aman Kumar',
  heading:'Improving a store’s cart and WhatsApp order journey',
  description:'An anonymous WooCommerce case study covering storefront layouts, mini-cart behaviour, mobile navigation, WhatsApp ordering and a client-confirmed add-to-cart repair.',
  category:'WOOCOMMERCE STOREFRONT & CART',icon:'cart',
  client:'A natural-products store supported through a web agency',period:'May 2025',
  role:'WooCommerce implementation, interface refinements and troubleshooting',
  tools:['WordPress','WooCommerce','PHP','CSS','WhatsApp'],
  summary:'A natural-products store needed a consistent shopping interface and a working route from product selection to its cart and WhatsApp ordering option.',
  evidence:'Client-confirmed add-to-cart repair',
  outcome:'The client confirmed that the product-page add-to-cart action worked after reporting a failure and reviewing the repair.',
  flow:['Refine the storefront','Repair cart interactions','Review on mobile'],
  sections:[
   ['The shopping journey','The agency wanted product and category layouts to match its reference design, with a mini-cart and a WhatsApp ordering option. Typography, colours, cart icons and related-product layouts needed to work together across the storefront.','My contribution was implementation and troubleshooting within the agency’s brief. The original branding, product photography and design direction were supplied.'],
   ['What I implemented','I refined featured-product and category layouts, adjusted cart-table styling and connected add-to-cart actions to the mini-cart. I also worked through mobile navigation and cart access, product-page typography and related-product styling.','The WhatsApp ordering button formed an additional route from a product page. I adjusted its presentation as part of the storefront work; this case study does not claim that a WhatsApp conversation or customer order was independently verified.'],
   ['Testing and the reported failure','During review, the client reported that the cart was inaccessible through the mobile menu. I investigated that interaction and shared an update after the mobile-menu repair.','A later review found that the add-to-cart icon on an individual product page did not work. I checked the affected product flow, made a repair and asked the client to test it again.'],
   ['The confirmed result','On May 26, the client said “everything looks good” during storefront review. On May 27, after the product-page failure report and repair, the client confirmed “yes its working now.”','That second message supports the add-to-cart repair specifically. Further font, colour and related-product refinements followed, so it is not presented as proof that every later revision was complete at that moment.'],
   ['What this project demonstrates','A store can look complete while individual shopping interactions still fail. Reviewing category pages, a product page, the mini-cart and mobile navigation helped separate visual refinements from functional repairs.']
  ],
  images:[
   {file:'storefront-cart-review.webp',width:570,height:325,alt:'Cropped product-card cart link during client review',caption:'Original May 26 review screenshot: the client requested a smaller View cart link and revised styling. This shows the review-stage interface, not a final after image.'},
   {file:'storefront-mobile-order-controls.webp',width:1200,height:940,alt:'Mobile product quantity, add-to-cart and WhatsApp ordering controls',caption:'Original May 27 mobile screenshot supplied when the client reported an add-to-cart failure. The subsequent client message confirms the repair. Branding and browser details are cropped out.'}
  ],
  evidenceNote:'This case study is based on the May 2025 implementation and review conversation, with selected original screenshot crops and the client’s specific testing feedback. Client and agency identities, branded imagery, private access details and contact information are withheld. No sales increase, conversion uplift or independently completed customer order is claimed.',
  cta:'Need help with your store’s shopping journey?',ctaText:'Share the product, cart or mobile interaction that needs attention.'
 },
 {
  slug:'case-study-woocommerce-sku-search',
  title:'WooCommerce Product & SKU Search Case Study | Aman Kumar',
  heading:'Making WooCommerce products searchable by name and SKU',
  description:'An anonymous WooCommerce product-search case study covering SKU indexing, search submission behaviour, missing product data and client-confirmed search results.',
  category:'WOOCOMMERCE PRODUCT SEARCH',icon:'cart',
  client:'An established hardware supplier with a WooCommerce catalogue',period:'April–June 2023',
  role:'Search configuration, debugging and product-data review',
  tools:['WordPress','WooCommerce','Algolia','PHP','JavaScript'],
  summary:'Customers needed to find catalogue products using names and stock codes, while search suggestions and submitted results behaved inconsistently.',
  evidence:'Client-confirmed name and SKU searches',
  outcome:'The client confirmed that four reviewed product links worked in search by both name and SKU.',
  flow:['Trace search behaviour','Review indexed product data','Verify representative products'],
  sections:[
   ['The product-discovery problem','The client reported that specific stock codes did not return the expected products. Some products appeared only after submitting the search, while others were absent from the suggestion list.','The catalogue included variable products, making the relationship between a parent product and its variation stock codes part of the investigation.'],
   ['My investigation and implementation','I worked through the search templates and Algolia configuration, including SKU searchability and differences between instant results and submitted searches. I also identified catalogue records without a SKU and asked for the missing product data to be supplied.','When submitted search results remained inconsistent, I requested support and continued testing the affected products. The work involved the search integration and underlying product records.'],
   ['Testing with the client','The client supplied product links and examples of stock codes that failed. These gave us concrete cases to review after changes.','An April 14 implementation update records working SKU search, but later feedback still identified variation-related issues. I treated those messages as further test cases rather than assuming the earlier update closed the entire task.'],
   ['The confirmed result','On June 7, the client confirmed that the four referenced product links were working in search, including name and SKU. A paid Website Search Improvement milestone also records a delivered phase of this engagement.','This supports the reviewed products and search paths. It does not establish exhaustive testing of every catalogue item or a measured improvement in search speed or sales.'],
   ['A focused contribution','The wider engagement included shipping, invoices and other store repairs. This case study concentrates on the confirmed search work, whose outcome can be described more precisely.']
  ],
  images:[{file:'sku-product-search-result.webp',width:1040,height:360,alt:'Highlighted product-name result in the original WooCommerce search interface',caption:'Cropped April 14 implementation screenshot showing a highlighted product-name match. SKU functionality is supported separately by the client’s June 7 confirmation; this image alone does not prove a SKU query.'}],
  evidenceNote:'This case study documents the search portion of an April–June 2023 WooCommerce engagement, using implementation updates, a paid search milestone and client testing feedback. The screenshot is an original crop with branding, contact details and unrelated results removed. Client identity is withheld. Outcomes from unrelated shipping or invoice work are not included.',
  cta:'Are customers struggling to find your products?',ctaText:'Share examples of product names or stock codes that return missing or inconsistent search results.'
 },
 {
  slug:'case-study-woocommerce-delivery-checkout',
  title:'WooCommerce Mobile Delivery Checkout Case Study | Aman Kumar',
  heading:'Simplifying checkout and delivery for a single-product store',
  description:'An anonymous WooCommerce delivery-store case study covering mobile shop, cart and checkout work, delivery options, discount codes and operational integrations.',
  category:'WOOCOMMERCE CHECKOUT & DELIVERY',icon:'cart',
  client:'A landscape-material delivery business selling a primary product online',period:'August–November 2024',
  role:'Checkout refinements, responsive layouts and workflow integrations',
  tools:['WordPress','WooCommerce','WPForms','Zapier','Jobber'],
  summary:'A delivery business selling one primary product needed a simpler mobile checkout and a clearer connection between online orders, forms and its operating workflow.',
  evidence:'Paid delivery phases and client checklist',
  outcome:'The client marked same-day and next-day delivery functionality complete; paid milestones record checkout, integration, discount-code and wrap-up phases.',
  flow:['Simplify the purchase route','Refine delivery and mobile layouts','Connect operational workflows'],
  sections:[
   ['The checkout challenge','The client wanted a less complicated purchase journey for a store with one primary product. The brief included responsive checkout, fewer unnecessary clicks, consistent branding and less intrusive mobile interface elements.','The product, cart and checkout pages needed to form a clear route while retaining the store’s delivery requirements.'],
   ['My contribution','I worked on the mobile shopping and checkout interface, product-page changes and the delivery workflow. The engagement expanded into shop/cart/checkout refinements, discount codes and changes to the surrounding forms.','The client also requested that WooCommerce and WPForms data pass through Zapier to Jobber. A dedicated integration milestone was paid during the engagement.'],
   ['Review in stages','I reported completion of an initial set of tasks in August. The September review then listed remaining responsive-page and form changes, showing that the engagement continued through separate phases.','The client’s September 1 checklist marked the same-day and next-day delivery function DONE. Other checklist items remained requests for follow-up work, so that message is used only for the delivery-function outcome.'],
   ['The documented outcome','Seven paid milestones record work across the initial improvements, checkout, additional commerce/forms work, Zapier and Jobber integration, discount codes, URL/SEO fixes and wrap-up.','These records support delivery of the agreed phases. They do not independently demonstrate a successful live customer purchase, an end-to-end Jobber test, a particular performance score or increased conversion.'],
   ['What this project demonstrates','For a delivery business, checkout needs to fit how orders are fulfilled. The work connected mobile purchasing, delivery choices and operational tools, with phased review as the scope developed.']
  ],
  images:[{file:'delivery-product-review.webp',width:1300,height:520,alt:'Original landscape-product purchase interface with quantity and add-to-cart controls',caption:'Cropped August 14 product-page review screenshot supplied with a request to change a product image. This provides original storefront context; it is not a final checkout or integration-test screenshot.'}],
  evidenceNote:'This case study uses the August–November 2024 engagement, its paid milestone records and the client’s delivery-function checklist. The original screenshot is cropped to omit business branding and contact details. Client identity is withheld. No unsupported speed, SEO ranking or sales gains are claimed.',
  cta:'Need a checkout that fits your delivery workflow?',ctaText:'Share how customers place orders, choose delivery and pass information to your team.'
 }
].map(c=>({...c,service:'woocommerce-development',serviceLabel:'WooCommerce development'}));
