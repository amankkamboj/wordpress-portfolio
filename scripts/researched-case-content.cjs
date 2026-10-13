'use strict';
const cases = [
 {
 slug:'case-study-wordpress-assessment-tool', heading:'Building a scored assessment tool in WordPress',
 category:'CUSTOM WORDPRESS DEVELOPMENT', client:'A cybersecurity advisory business', period:'May–July 2026',
 role:'Custom plugin development, assessment logic and handover', tools:['WordPress','PHP','Shortcodes','Zoho'],
 summary:'A client-defined assessment needed an interactive questionnaire, consistent scoring and a useful way to review completed submissions.',
 evidence:'Client-confirmed logic and scoring',
 outcome:'The client reviewed the tool, logic and scoring and confirmed that they worked as expected. Tool delivery and handoff milestones were paid.',
 flow:['Translate the scoring rules','Build the assessment flow','Review results and hand over'],
 sections:[
 ['The assessment challenge','The client supplied the assessment methodology and scoring rules. The task was to turn those requirements into a lightweight WordPress application that could collect answers and present meaningful results.'],
 ['My contribution','I developed a custom plugin with a shortcode-based questionnaire, overall and domain scores, saved submissions and basic recommendations. CRM handoff work included Zoho connectivity and an administrative view of synchronization status.'],
 ['Review and handover','On 9 July 2026, the client confirmed reviewing the tool, logic and scoring. Paid milestones also document complete-tool delivery and final handoff. Later interface and content revisions formed additional review work.'],
 ['The result and scope','The confirmed result is a functioning assessment and scoring workflow reviewed by the client. The scoring model belongs to the client; this project does not constitute a security audit or certification. End-to-end CRM receipt and email cadence execution were not independently verified.']
 ],
 service:'wordpress-development', serviceLabel:'WordPress development',
 cta:'Need a custom assessment or calculator?', ctaText:'Share your questions, scoring rules and the results your team needs to review.'
 },
 {
 slug:'case-study-drupal-wordpress-migration', heading:'Moving a Drupal content hierarchy into WordPress',
 category:'DRUPAL TO WORDPRESS MIGRATION', client:'An established content website', period:'June–November 2024',
 role:'WordPress reconstruction and content migration', tools:['Drupal','WordPress','Content migration','Navigation'],
 summary:'With only Drupal administrator access available, the website needed to be reconstructed in WordPress while retaining its design, content and navigation hierarchy.',
 evidence:'Client-approved WordPress rebuild',
 outcome:'The client explicitly approved the rebuilt website. Production launch was deferred by the client, with another content synchronization anticipated.',
 flow:['Review the source structure','Rebuild pages and linked content','Review the migration'],
 sections:[
 ['Working with restricted access','The source website was accessible through Drupal administration, without database or filesystem access. That constraint shaped the migration: the content and structure needed careful review rather than a direct database transfer.'],
 ['What I rebuilt','I reconstructed the website in WordPress, migrating page content and linked files while retaining the source design and content relationships. The work included page hierarchy and intermediate navigation pages that connected sections.'],
 ['Client review','The delivery conversation records content and file migration work in July 2024 and an approved paid milestone. On 18 November, the client explicitly confirmed that the website was approved.'],
 ['An approved rebuild with a later launch','The client planned to go live in a later quarter and expected another synchronization before launch. This case therefore documents the approved reconstruction, without claiming a verified production launch, exact page count or preserved search rankings.']
 ],
 service:'wordpress-migration-maintenance', serviceLabel:'WordPress migration and maintenance',
 cta:'Planning a move to WordPress?', ctaText:'Share your current platform, available access and the content structure you need to preserve.'
 },
 {
 slug:'case-study-gravity-forms-directory', heading:'Turning business registrations into searchable listings',
 category:'GRAVITY FORMS BUSINESS DIRECTORY', client:'A business-directory website', period:'May 2025',
 role:'Directory field mapping, category search and listing refinements', tools:['WordPress','Gravity Forms','GravityKit','GravityView'],
 summary:'An existing registration form needed clearer public listings and category-based discovery so visitors could find relevant organizations.',
 evidence:'Client-accepted directory refinements',
 outcome:'After reviewing the listing and search changes, the client confirmed the result looked good and ended the contract.',
 flow:['Map registration fields','Organize category discovery','Refine listing presentation'],
 sections:[
 ['From registrations to useful listings','The client already had a Gravity Forms registration form and the beginnings of a listing page. The missing step was making the submitted information useful and readable for visitors.'],
 ['My contribution','I worked on registration-field mapping, category search and category lists, including counts and compact cards. Review focused on displaying organization details in the correct categories and adjusting the fields and layout shown in each listing.'],
 ['Reviewing the visitor experience','The client reviewed card dimensions, visible fields and category behavior during implementation. On 23 May 2025, they confirmed the result looked good and said they were ending the contract.'],
 ['The delivered scope','This engagement improved the existing directory foundation; it was not a complete platform build from scratch. Later minor support discussions are separate from the accepted listing work. No visitor-growth or lead-generation increase is claimed.']
 ],
 service:'wordpress-development', serviceLabel:'WordPress development',
 cta:'Need a searchable directory?', ctaText:'Share how people register and how visitors should search and browse their information.'
 },
 {
 slug:'case-study-consulting-wordpress-rebuild', heading:'Rebuilding a consulting website in WordPress',
 category:'WEBSITE MIGRATION AND REBUILD', client:'A consulting business', period:'May–June 2025',
 role:'WordPress setup, page reconstruction, navigation repairs and handover', tools:['WordPress','Content migration','Staging','Responsive layouts'],
 summary:'A consulting business wanted to move its existing .NET website experience to a new domain and hosting setup while retaining its content and familiar structure.',
 evidence:'Three paid delivery milestones',
 outcome:'The client confirmed seeing the requested changes completed and arranged a final knowledge-transfer session.',
 flow:['Set up WordPress','Rebuild content and navigation','Review and hand over'],
 sections:[
 ['Choosing a practical migration route','The starting point was an existing .NET website. The agreed route was a WordPress rebuild that retained the content and design direction while updating the business details and domain.'],
 ['My contribution','I handled WordPress installation, theme and staging work, content and page reconstruction, and domain/contact updates. The review also covered logos, menu structure and breadcrumb navigation.'],
 ['Fixing issues during review','The client identified a broken Home breadcrumb link during the review. I reported the repair, and the subsequent client review confirmed that the requested changes were completed. On 11 June 2025, the client arranged a final knowledge-transfer session so they could make future changes themselves.'],
 ['Delivery and handover','Three paid milestones cover initial setup, content and page building, and final testing/go-live work. This supports the delivered rebuild and handover, without establishing zero downtime, ranking preservation or measured speed gains.']
 ],
 service:'wordpress-migration-maintenance', serviceLabel:'WordPress migration and maintenance',
 cta:'Need to rebuild an existing business website?', ctaText:'Share what should stay familiar and what needs to change in your move to WordPress.'
 },
 {
 slug:'case-study-recruitment-questionnaire', heading:'Building reusable recruitment questionnaires and reporting',
 category:'GRAVITY FORMS RECRUITMENT WORKFLOW', client:'A healthcare recruitment team', period:'July–September 2026',
 role:'Questionnaire implementation, reporting plugin and documentation', tools:['WordPress','Gravity Forms','PHP','CSV','SMTP'],
 summary:'A recruitment team needed reusable campaign questionnaires, dependable submission notifications and a manageable way to consolidate responses.',
 evidence:'Successful client submission tests and accepted handover',
 outcome:'The client reported four successful submission tests, later exported consolidated live responses, and accepted the delivered work and source files.',
 flow:['Create reusable questionnaires','Consolidate responses','Document team workflows'],
 sections:[
 ['A campaign-based workflow','The team needed to duplicate a master questionnaire for different recruitment campaigns, collect responses and manage the resulting information without editing code. This work was separate from the business’s companionship enquiry workflow.'],
 ['My contribution','I implemented master and campaign questionnaires, submission notifications, role-controlled administration and response consolidation/export plugin work. The handover included documentation and source files. External technical advice contributed to the consolidation design.'],
 ['Testing with the team','On 14 July 2026, the client reported that four submission tests worked as expected and confirmed receiving a test notification. On 21 July, they reported extracting a consolidated CSV of live responses. On 24 July, they accepted the work and confirmed reviewing the supplied files.'],
 ['Follow-up and delivery boundaries','A later duplicated-form acknowledgement issue received a specific successful client retest in September. Bulk invitations, reminders, invitation tracking, unique candidate links, ATS integration and PDF reporting were excluded. Scheduled reporting work depended on WordPress scheduling; the records do not establish a hosting-level cron for consistent timing.']
 ],
 service:'wordpress-development', serviceLabel:'WordPress development',
 cta:'Need forms that fit your team’s workflow?', ctaText:'Share how you collect responses, review submissions and prepare reports.'
 },
 {
 slug:'case-study-wordpress-critical-error', heading:'Restoring WordPress access after a plugin conflict',
 category:'WORDPRESS CRITICAL-ERROR RECOVERY', client:'An existing WordPress website', period:'September 2023',
 role:'Fault isolation and immediate site recovery', tools:['WordPress','Plugin troubleshooting','Error diagnosis'],
 summary:'A critical error disrupted an existing WordPress website. The immediate priority was to isolate the cause and restore normal access.',
 evidence:'Client-confirmed immediate recovery',
 outcome:'After the conflicting plugin was disabled, the client confirmed that the website was working.',
 flow:['Investigate the failure','Isolate the conflicting plugin','Confirm restored access'],
 sections:[
 ['The immediate problem','The website was reporting a critical error. Restoring access was the first step before further compatibility investigation could continue.'],
 ['My contribution','I investigated the failure, identified a conflicting plugin and disabled it to recover the website. This isolated the immediate trigger and allowed the client to use the site again.'],
 ['Client confirmation','On 9 September 2023, the client confirmed that the site was working and accepted the immediate recovery. Follow-up discussion also records restored administrator access.'],
 ['Recovery and further repair','The evidence supports immediate restoration through plugin isolation. It does not establish that the plugin itself was permanently repaired or that all future compatibility issues were eliminated.']
 ],
 service:'wordpress-troubleshooting', serviceLabel:'WordPress troubleshooting',
 cta:'Is a WordPress error blocking your website?', ctaText:'Share the error message and what changed before the problem appeared.'
 }
];
module.exports = cases.map(c=>({...c,
 title:c.heading+' | Aman Kumar',
 description:c.summary,
 evidenceNote:'Based on the project delivery conversation and client review records. Client identity and private access information are withheld. Outcomes are limited to the specific confirmations described above.',
 images:require('./researched-case-images.cjs')[c.slug] || []
}));
