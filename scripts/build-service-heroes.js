// Rebuild only the six service heroes; leave metadata and all following content intact.
// Run after other content generators when regenerating the site.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const services = [
  {
    "slug": "wordpress-development",
    "breadcrumb": "WordPress Development",
    "title": "Custom WordPress",
    "accent": "Development",
    "lead": "Build a WordPress website around the way your business works. I develop custom functionality, improve existing sites and connect the tools you rely on, with practical code you can maintain.",
    "badges": [
      [
        "code",
        "Custom functionality"
      ],
      [
        "gear",
        "Themes & plugins"
      ],
      [
        "globe",
        "API integrations"
      ]
    ],
    "cta": "Discuss Your Project",
    "subject": "WordPress development enquiry",
    "brief": "Website URL (if available): \n\nWhat you want to build or improve: \n\nRequired integrations: \n\nTimeline: ",
    "hint": "Share your website, what you want to build and your timeline.",
    "work": "case-study-wordpress-enquiry-workflow/",
    "values": [
      [
        "code",
        "Maintainable code"
      ],
      [
        "tools",
        "Practical solutions"
      ],
      [
        "mail",
        "Clear communication"
      ]
    ]
  },
  {
    "slug": "woocommerce-development",
    "breadcrumb": "WooCommerce Development",
    "title": "WooCommerce",
    "accent": "Development",
    "lead": "Make your store work for your products and customers. I build and improve WooCommerce functionality, from product discovery and checkout to the integrations behind each order.",
    "badges": [
      [
        "cart",
        "Product discovery"
      ],
      [
        "gear",
        "Checkout changes"
      ],
      [
        "globe",
        "Store integrations"
      ]
    ],
    "cta": "Discuss Your Store",
    "subject": "WooCommerce development enquiry",
    "brief": "Store URL: \n\nWhat you want to improve: \n\nPayment or other integrations: \n\nTimeline: ",
    "hint": "Share your store URL and the shopping journey you want to improve.",
    "work": "case-study-woocommerce-stripe-tax/",
    "values": [
      [
        "cart",
        "Order-journey testing"
      ],
      [
        "tools",
        "Practical solutions"
      ],
      [
        "mail",
        "Clear communication"
      ]
    ]
  },
  {
    "slug": "wordpress-performance-optimization",
    "breadcrumb": "WordPress Performance Optimization",
    "title": "WordPress",
    "accent": "Performance Optimization",
    "lead": "Find out what is slowing your WordPress website down. I investigate loading bottlenecks and tune assets, caching and code, while checking that important features still work.",
    "badges": [
      [
        "bolt",
        "Loading speed"
      ],
      [
        "monitor",
        "Core Web Vitals"
      ],
      [
        "gear",
        "Caching & assets"
      ]
    ],
    "cta": "Discuss Your Site Speed",
    "subject": "WordPress performance enquiry",
    "brief": "Website URL: \n\nPages that feel slow: \n\nPageSpeed report (if available): \n\nHosting provider: ",
    "hint": "Share your URL and a speed report, if available. No fixed score is promised.",
    "work": "case-study-wordpress-speed-optimization/",
    "values": [
      [
        "gear",
        "Bottleneck investigation"
      ],
      [
        "monitor",
        "Frontend checks"
      ],
      [
        "mail",
        "Clear communication"
      ]
    ]
  },
  {
    "slug": "wordpress-security",
    "breadcrumb": "WordPress Security",
    "title": "WordPress Security &",
    "accent": "Malware Cleanup",
    "lead": "Get help investigating a compromised WordPress website. I remove malicious code, look for likely entry points and strengthen the site, with attention to symptoms that may return.",
    "badges": [
      [
        "shield",
        "Malware cleanup"
      ],
      [
        "gear",
        "Incident investigation"
      ],
      [
        "tools",
        "Site hardening"
      ]
    ],
    "cta": "Discuss Your Security Issue",
    "subject": "WordPress security enquiry",
    "brief": "Website URL: \n\nSymptoms or security warnings: \n\nWhen the issue started: \n\nRecent changes: ",
    "hint": "Share the symptoms and when they started. Please do not email passwords.",
    "work": "case-study-wordpress-malware-cleanup/",
    "values": [
      [
        "shield",
        "Careful investigation"
      ],
      [
        "tools",
        "Recovery planning"
      ],
      [
        "mail",
        "Clear communication"
      ]
    ]
  },
  {
    "slug": "wordpress-migration-maintenance",
    "breadcrumb": "WordPress Migration & Maintenance",
    "title": "WordPress Migration &",
    "accent": "Maintenance",
    "lead": "Move your WordPress website with a clear plan, then keep it maintained. I help with hosting and domain changes, backups and updates, checking key pages and workflows along the way.",
    "badges": [
      [
        "cloud",
        "Hosting migrations"
      ],
      [
        "globe",
        "Domain changes"
      ],
      [
        "gear",
        "Updates & backups"
      ]
    ],
    "cta": "Plan Your Website Care",
    "subject": "WordPress migration and maintenance enquiry",
    "brief": "Website URL: \n\nMigration or maintenance needs: \n\nCurrent and new host (if moving): \n\nPreferred timeline: ",
    "hint": "Share your website, hosting details and the support you need.",
    "work": "case-studies/",
    "workLabel": "Explore project work",
    "values": [
      [
        "document",
        "Planned changes"
      ],
      [
        "tools",
        "Workflow checks"
      ],
      [
        "mail",
        "Clear communication"
      ]
    ]
  },
  {
    "slug": "wordpress-troubleshooting",
    "breadcrumb": "WordPress Troubleshooting",
    "title": "WordPress Troubleshooting &",
    "accent": "Bug Fixes",
    "lead": "Some WordPress problems aren’t solved by installing another plugin. I investigate the underlying cause and implement a practical fix without unnecessarily rebuilding your website.",
    "badges": [
      [
        "gear",
        "Plugin conflicts"
      ],
      [
        "warning",
        "Critical errors"
      ],
      [
        "document",
        "Broken forms"
      ]
    ],
    "cta": "Tell Me What’s Broken",
    "subject": "WordPress troubleshooting enquiry",
    "brief": "Website URL: \n\nThe issue or error: \n\nRecent changes: ",
    "hint": "Share your website URL, the error and what changed recently.",
    "work": "case-study-wpml-yoast-sitemap/",
    "values": [
      [
        "gear",
        "Root-cause investigation"
      ],
      [
        "tools",
        "Practical fixes"
      ],
      [
        "mail",
        "Clear communication"
      ]
    ]
  }
];
const authorTemplate = "<aside class=\"service-author showcase-author\" aria-label=\"Your developer\">\n<img class=\"portrait\" src=\"/wordpress-portfolio/assets/images/profile.jpg\" width=\"1106\" height=\"1422\" alt=\"Aman Kumar, WordPress and PHP developer\" decoding=\"async\">\n<div class=\"showcase-author-details\"><p class=\"service-author-name\">Aman Kumar</p><p class=\"showcase-role\">WordPress &amp; PHP Developer</p>\n<p class=\"showcase-location\"><svg aria-hidden=\"true\"><use href=\"#pin\"/></svg>Chandigarh, India</p><p class=\"showcase-location\"><svg aria-hidden=\"true\"><use href=\"#globe\"/></svg>Working with clients worldwide</p>\n<ul class=\"showcase-values\"><li><svg aria-hidden=\"true\"><use href=\"#gear\"/></svg>Root-cause investigation</li><li><svg aria-hidden=\"true\"><use href=\"#tools\"/></svg>Practical fixes</li><li><svg aria-hidden=\"true\"><use href=\"#mail\"/></svg>Clear communication</li></ul>\n<a class=\"showcase-recommendations\" href=\"/wordpress-portfolio/#testimonials\">Read client recommendations <svg aria-hidden=\"true\"><use href=\"#arrow\"/></svg></a></div>\n</aside>";
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const icon = name => name === 'warning'
  ? '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3v.1"/></svg>'
  : `<svg aria-hidden="true"><use href="#${name}"/></svg>`;
for (const service of services) {
  const file = path.join(root, service.slug, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  const start = html.indexOf('<section class="service-hero section');
  const end = html.indexOf('<div class="container service-reading-layout">', start);
  if (start < 0 || end < 0) throw new Error(`Hero boundaries missing: ${service.slug}`);
  const items = entries => entries.map(([name, label]) => `<li>${icon(name)}${escape(label)}</li>`).join('');
  const author = authorTemplate.replace(/<ul class="showcase-values">[\s\S]*?<\/ul>/, `<ul class="showcase-values">${items(service.values)}</ul>`);
  const contact = `mailto:amankamboj2387@gmail.com?subject=${encodeURIComponent(service.subject)}&amp;body=${encodeURIComponent(service.brief)}`;
  const hero = `<section class="service-hero section service-showcase"><div class="container">
<nav class="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/wordpress-portfolio/">Home</a></li><li><a href="/wordpress-portfolio/#services">Services</a></li><li aria-current="page">${escape(service.breadcrumb)}</li></ol></nav>
<div class="service-hero-grid"><div class="showcase-intro">
<p class="eyebrow">WORDPRESS &amp; PHP SERVICES</p>
<h1>${escape(service.title)} <span>${escape(service.accent)}</span></h1>
<p class="service-lead">${escape(service.lead)}</p>
<ul class="showcase-issues" aria-label="Service focus">${items(service.badges)}</ul>
<div class="showcase-actions"><a class="button primary" href="${contact}">${escape(service.cta)} ${icon('arrow')}</a><a class="showcase-work" href="/wordpress-portfolio/${service.work}">${escape(service.workLabel || 'View related work')} ${icon('arrow')}</a></div>
<p class="showcase-hint">${escape(service.hint)}</p>
</div>${author}</div>
</div></section>
`;
  fs.writeFileSync(file, html.slice(0, start) + hero + html.slice(end));
}
console.log('Updated six service heroes.');
