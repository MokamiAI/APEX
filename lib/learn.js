// Long-tail SEO guide library.
// Each page targets a real question MDs, risk officers and accountants Google.
// Copy is specific, honest, and always funnels to a tool or proof page.

export const LEARN = [
  {
    slug: "what-is-a-par-bucket",
    category: "Collections",
    title: "What is PAR in collections? The 1-30, 31-60, 61-90 and NPL buckets explained",
    meta: "PAR (portfolio at risk) buckets group overdue accounts by days past due — 1-30, 31-60, 61-90 and legal/NPL. How collections teams use PAR buckets to prioritize recovery.",
    intro: "PAR stands for portfolio at risk — the standard way lenders bucket overdue accounts by how many days past due they are. PAR buckets turn a vague 'we have arrears' problem into a prioritised recovery queue.",
    sections: [
      { h: "The buckets", p: "PAR 1-30: newly overdue, first contacts and promise capture. PAR 31-60: escalating, automated SMS campaigns. PAR 61-90: senior attention. Legal/NPL: handover or write-off. Every account moves through the buckets automatically as days pass." },
      { h: "Why PAR beats the printed list", p: "A printed list is a snapshot; PAR is a living queue. Calls logged, promises tracked, reminders sent automatically — nothing waits for someone to remember it." },
      { h: "PAR in APEX", p: "Recoveries & Collections runs from PAR buckets with a dialing queue, promise tracking, automated SMS campaigns and escalation rules that route accounts to the right person at the right time." },
    ],
    faq: [
      { q: "What does NPL mean?", a: "Non-performing loan — the account is in the most severe bucket, typically heading to legal action or write-off." },
      { q: "Can I set my own escalation rules?", a: "Yes — escalation is configured to your policy and enforced automatically as accounts move through buckets." },
    ],
    cta: { type: "how", title: "See the collections workflow", body: "Eight steps from first missed payment to recovered or restructured — with the system doing the remembering." },
    related: ["excel-to-crm-migration-lenders", "credit-committee-approval-threshold", "apex-vs-generic-crm"],
  },
  {
    slug: "popia-compliance-checklist-lenders",
    category: "Compliance",
    title: "POPIA compliance checklist for South African lenders",
    meta: "A practical POPIA checklist for credit providers and lenders: Information Officer, consent, access logging, DSAR, retention, breach response. POPIA penalties run to R10 million per infringement.",
    intro: "POPIA applies to every business that processes personal information in South Africa — and for lenders, the exposure is concentrated: client financial data, credit records, KYC documents. Penalties run to R10 million per infringement, with criminal prosecution possible in severe cases.",
    sections: [
      { h: "The checklist", p: "1) An Information Officer appointed and registered. 2) Verifiable consent records. 3) Field-level access logging on personal information. 4) A DSAR workflow meeting the 21-business-day deadline. 5) Retention schedules and deletion enforced. 6) Anomaly detection on access patterns. 7) A documented breach response. 8) Tracked staff training." },
      { h: "The reality for spreadsheet lenders", p: "Most of these controls can't be enforced on a workbook. The audit trail is assembled retroactively from inboxes; consent is a folder of forms; access logging doesn't exist." },
      { h: "System-enforced compliance", p: "A platform enforces the controls continuously: field-level logging on every PII access, DSAR workflows with SLA tracking, anomaly detection, immutable audit history. Compliance stops being a project and becomes a property of the system." },
    ],
    faq: [
      { q: "Is an Information Officer required under POPIA?", a: "Yes — every responsible party must appoint an Information Officer and register them with the Information Regulator." },
      { q: "How long do we have to answer a DSAR?", a: "21 business days — a tracked workflow with SLA tracking keeps you on time." },
    ],
    cta: { type: "audit", title: "Run the 12-point readiness check", body: "Answer 12 questions, get a scored report naming your specific gaps — and the control that closes each." },
    related: ["dsar-workflow-21-business-days", "nca-affordability-assessment-lenders", "popia-information-officer"],
  },
  {
    slug: "nca-affordability-assessment-lenders",
    category: "Compliance",
    title: "NCA affordability assessment: what South African credit providers must document",
    meta: "The NCA's affordability assessment is a substantive legal obligation, not a formality. What credit providers must document — and how a weighted risk engine keeps it auditable.",
    intro: "Under the National Credit Act, a credit provider must genuinely assess whether a consumer can afford the credit before granting it. Courts have been clear: the affordability assessment is a substantive obligation, not paperwork.",
    sections: [
      { h: "What the obligation actually requires", p: "Verified income, documented obligations, and a forward-looking discretionary income calculation. A credit provider that processes an assessment without genuinely assessing affordability has satisfied nothing at all." },
      { h: "Pre-screening as the first gate", p: "NCA pre-screening enforces your minimum criteria — for example R1m minimum turnover and 3+ active supply clients — at application stage. The rule cannot be bypassed." },
      { h: "An auditable risk score", p: "A weighted risk engine — credit score 40%, financials 30%, industry risk 20%, collateral 10% — produces a reproducible score and credit risk profile you can see, defend and adjust." },
    ],
    faq: [
      { q: "What is reckless lending?", a: "Granting credit without a proper affordability assessment is reckless lending — an offence under the NCA with serious consequences." },
      { q: "Does APEX produce an NCA compliance report?", a: "Yes — a structured report covering your credit provider obligations, generated for annual submission or your legal team." },
    ],
    cta: { type: "audit", title: "Check your credit assessment controls", body: "The 12-point readiness check covers pre-screening, affordability documentation and segregation of duties." },
    related: ["popia-compliance-checklist-lenders", "credit-committee-approval-threshold", "how-to-choose-lending-software"],
  },
  {
    slug: "dsar-workflow-21-business-days",
    category: "Compliance",
    title: "DSAR workflow: meeting the 21-business-day deadline",
    meta: "Data subject access requests must be answered within 21 business days under POPIA. How a tracked DSAR workflow with SLA tracking keeps lenders compliant.",
    intro: "When a data subject asks what personal information you hold on them, POPIA gives you 21 business days to respond. For a lender running on spreadsheets, assembling that answer is a scramble — if it's even possible.",
    sections: [
      { h: "The deadline is the test", p: "The DSAR deadline is where compliance becomes operational. Miss it, and you've both failed the data subject and exposed the gaps in your data map." },
      { h: "What a tracked workflow does", p: "A DSAR arrives, gets logged, assigned and tracked against the 21-business-day SLA. Reminders fire as the deadline approaches. Nothing is assembled on demand from inboxes." },
      { h: "The trail that comes with it", p: "Field-level access logging means you can show exactly what you hold, who accessed it, when and why — the evidence a DSAR response needs, ready before the request." },
    ],
    faq: [
      { q: "Does APEX track DSAR deadlines automatically?", a: "Yes — the DSAR workflow runs with a 21-business-day SLA and SLA tracking." },
      { q: "What if a DSAR can't be fully answered in time?", a: "The workflow flags approaching deadlines so you can manage extensions or partial responses — on record, not in memory." },
    ],
    cta: { type: "audit", title: "See if your DSAR process would pass", body: "The readiness check includes a DSAR question — get your scored report in minutes." },
    related: ["popia-compliance-checklist-lenders", "nca-affordability-assessment-lenders", "popia-information-officer"],
  },
  {
    slug: "credit-committee-approval-threshold",
    category: "Compliance",
    title: "Credit committee approval: setting your deal threshold",
    meta: "Large deals should require committee sign-off. How a credit committee threshold — like R1,000,000 — is enforced automatically, with maker-checker on sensitive actions.",
    intro: "The bigger the deal, the more people should sign it. A credit committee threshold — loans above R1,000,000, say — is how growing lenders prevent single-person control over large exposure.",
    sections: [
      { h: "Why segregation of duties matters", p: "When one person can originate, approve and disburse a deal, the business carries a control risk it may not see. Committee approval is the counterweight." },
      { h: "Automatic escalation", p: "The platform auto-forwards any application above your threshold to the Credit Committee for mandatory sign-off. No one remembers to escalate; the system does it." },
      { h: "Maker-checker on sensitive actions", p: "Approvals, variations and disbursements require a second authorised user. Single-person control is a design flaw the platform engineers out." },
    ],
    faq: [
      { q: "Can the threshold be different per product?", a: "Yes — lending rules are configurable, including the committee threshold, maximum principal, minimum rate and grace periods." },
      { q: "Who sits on the Credit Committee?", a: "You define it — the platform has a named 'credit committee' role with its own permissions." },
    ],
    cta: { type: "audit", title: "Check your segregation of duties", body: "Question 3 of the readiness check covers committee approval and maker-checker." },
    related: ["nca-affordability-assessment-lenders", "popia-compliance-checklist-lenders", "how-to-choose-lending-software"],
  },
  {
    slug: "excel-to-crm-migration-lenders",
    category: "Implementation",
    title: "Migrating your lending book from Excel: a practical guide",
    meta: "Moving a lending book from Excel workbooks to a platform: what to migrate, in what order, and how to do it without losing a day of operations. APEX imports .xlsx and .csv directly.",
    intro: "The scariest part of leaving spreadsheets isn't the software — it's the data. Where does the book live? What's in the workbook that no one documented? How do you move it without breaking the operation?",
    sections: [
      { h: "Map the book first", p: "Before configuration, map your products, your approval policy and current workflow. Your business runs exactly how it runs today — just better." },
      { h: "Import, don't retype", p: "APEX imports .xlsx and .csv customer data directly — applications, loan records, client records. You don't start from zero, and you don't retype a thing." },
      { h: "Run in parallel, then cut over", p: "Run APEX alongside your current process until you're comfortable. Your own Risk and Compliance officer signs off the close — like our first client did, with zero critical issues found in UAT." },
    ],
    faq: [
      { q: "How long does migration take?", a: "A full deployment — data migration, configuration, training and sign-off — happens in 60 days from agreement." },
      { q: "What if the workbook is messy?", a: "The importer maps columns to fields; edge cases are handled during the mapping phase before anything goes live." },
    ],
    cta: { type: "import", title: "See your data map itself", body: "Upload a sample workbook and watch the columns map to APEX fields — in your browser." },
    related: ["apex-vs-spreadsheets", "how-to-choose-lending-software", "credit-committee-approval-threshold"],
  },
  {
    slug: "apex-vs-spreadsheets",
    category: "The product",
    title: "APEX vs. spreadsheets: what a workbook really costs a lending book",
    meta: "The honest comparison between running a lending book on Excel workbooks and on a cloud-hosted CRM & Loan Management System — time, error risk, compliance and single-person dependency.",
    intro: "The spreadsheet is not a legacy system — it's the incumbent. Most growing lenders run their entire operation on workbooks. The question is what that actually costs, and when it stops being cheap.",
    sections: [
      { h: "Where spreadsheets genuinely win", p: "They're free, everyone knows them, and you can build anything in them. For a single operator with a handful of applications a month, a workbook is fine. This comparison is for the business that has outgrown that point: multiple staff, 20+ applications a month, compliance obligations." },
      { h: "The real costs that show up late", p: "The approval process lives in whoever's available that week — leave, resignation or a busy week turns every decision into a bottleneck. The audit trail is assembled on demand from inboxes. The Monday report takes three hours. Every one of these is a cost you can't see in a P&L until it bites." },
      { h: "What a platform removes", p: "APEX keeps the application, the approval routing and the audit trail in one system: the decision routes itself the moment it's submitted, the trail exists before anyone asks, and the Monday digest arrives before you reach the office. The workbook becomes a historical record instead of a critical system." },
    ],
    faq: [
      { q: "Can I keep using Excel alongside APEX?", a: "Yes — you run both in parallel until you're comfortable. APEX imports your .xlsx or .csv book directly, so nothing is retyped." },
      { q: "When should I stop using spreadsheets?", a: "When more than one person is involved in approvals, when you need visibility across branches, or when a regulator could ask for a trail. That's the point where the workbook stops being cheap." },
    ],
    cta: { type: "import", title: "See your workbook map itself", body: "Upload a sample file and watch the columns map to APEX fields — in your browser, nothing uploaded." },
    related: ["excel-to-crm-migration-lenders", "how-to-choose-lending-software", "apex-vs-generic-crm"],
  },
  {
    slug: "apex-vs-generic-crm",
    category: "The product",
    title: "APEX vs. generic CRM and loan software: the model difference",
    meta: "A generic CRM or loan management system doesn't enforce your approval policy automatically. Why lenders need category software — and where generic tools are still the right answer.",
    intro: "HubSpot, Zoho and the loan management suites are excellent at what they were built for. The question is whether that includes the full lending lifecycle — origination through collections — in one system.",
    sections: [
      { h: "What generic tools do well", p: "Pipeline management, contact storage, basic automation, reporting. If your approval process is simple and your book is small, a generic CRM plus a loan tracker may be all you need. This comparison is for lenders who've outgrown that." },
      { h: "Where they break", p: "The core workflow — scoring an application, routing it to the right approver, tracking it to disbursement and into collections — is done outside the system, in a workbook and email. Compliance controls are policies, not enforced behaviours." },
      { h: "The model test", p: "Ask any system one question: when an application is submitted, does it score it automatically and route the decision? If the answer is a manual process, the system doesn't cover your business model. That's the difference APEX was built on." },
    ],
    faq: [
      { q: "Do I need to replace my CRM entirely?", a: "APEX is a full platform — CRM, lending, collections, compliance. Most lenders consolidate rather than keep two systems and a workbook." },
      { q: "Is APEX right for a very small operation?", a: "If you process a handful of applications a month and don't need committee routing, a simpler tool may be the better answer. APEX is built for growing lending teams." },
    ],
    cta: { type: "platform", title: "See the modules a generic CRM can't offer", body: "Automated approval routing, PAR-bucketed collections, the audit trail — 24 modules in one system." },
    related: ["how-to-choose-lending-software", "apex-vs-spreadsheets", "credit-committee-approval-threshold"],
  },
  {
    slug: "how-to-choose-lending-software",
    category: "The product",
    title: "How to choose lending software: the buyer's checklist",
    meta: "A practical checklist for choosing lending software: automated approval routing, collections, NCA/POPIA controls, migration, WhatsApp and pricing.",
    intro: "Choosing software for a lending book isn't a feature-list exercise — it's a workflow-fit exercise. Here's the checklist we'd give a managing director before they sign anything.",
    sections: [
      { h: "1. Test the decision routing", p: "Ask for a live demo where an application is scored and routed automatically — approved directly, or forwarded to committee. If the vendor can't show it on your numbers, the system doesn't fit your process." },
      { h: "2. Check the audit trail", p: "Is every action — application, approval, disbursement — logged immutably? Can you export it in one click? That's table stakes for a regulated lender." },
      { h: "3. Ask how compliance is enforced", p: "Is NCA pre-screening a rule that can be bypassed, or a control that can't? Is POPIA access logged at field level? Is there a DSAR workflow with an SLA? Policies are promises; enforced controls are compliance." },
      { h: "4. Demand the migration path", p: "Can it import your workbook? Can you run in parallel? Who signs off the cutover? A 60-day deployment with a 90-day warranty is a strong signal; open-ended implementations are a warning." },
      { h: "5. Match the channel", p: "Your clients live on WhatsApp. Does the platform use the real Meta API, with an omnichannel inbox, bulk campaigns and automated reminders? Email-only tools are a step backward for this market." },
    ],
    faq: [
      { q: "What's the most important test?", a: "The decision routing. If the platform can't score and route an application correctly, in front of you, nothing else matters." },
      { q: "How long should implementation take?", a: "For a platform that fits your workflow, 60 days including migration, training and sign-off is realistic. Longer usually means configuration bloat or poor fit." },
    ],
    cta: { type: "tour", title: "Apply the checklist to APEX", body: "Walk the modules yourself — the decision engine, PAR buckets and audit trail are all here." },
    related: ["apex-vs-generic-crm", "apex-vs-spreadsheets", "credit-committee-approval-threshold"],
  },
  {
    slug: "popia-information-officer",
    category: "Compliance",
    title: "POPIA Information Officer: the appointment most lenders are missing",
    meta: "POPIA requires every responsible party to appoint and register an Information Officer. What the role involves, what it costs to skip, and how the platform supports it.",
    intro: "Under POPIA, every organisation that processes personal information must appoint an Information Officer and register them with the Information Regulator. For lenders, the role is not optional paperwork — it's the accountability anchor for everything the platform does.",
    sections: [
      { h: "Who has to appoint one", p: "Every responsible party — including lending companies, no matter their size. There are no size-based exemptions. The Information Officer is usually a senior person (often the CEO or a manager) registered with the Regulator." },
      { h: "What the role actually involves", p: "Overseeing compliance: consent records, retention schedules, DSAR responses, breach notifications, staff training, access control. On a spreadsheet operation, most of this is a folder of forms and hope. In a platform, the controls run continuously and the Information Officer's job becomes oversight rather than archaeology." },
      { h: "Why this matters before an inquiry", p: "When the Regulator or an auditor asks, the Information Officer has to show the evidence: who accessed what, when, why; how DSARs are answered; how retention is enforced. The platform produces that evidence on demand — which is exactly what the audit trail, field-level logging and DSAR workflow exist to do." },
    ],
    faq: [
      { q: "Who can be the Information Officer?", a: "A senior person in the organisation — often the CEO or a manager. POPIA sets out the role; the Regulator registers them." },
      { q: "Does software replace the Information Officer?", a: "No — the role is a person's responsibility. Software makes it possible to actually discharge it: enforced controls, provable logging, tracked workflows." },
    ],
    cta: { type: "audit", title: "Is your Information Officer set up to answer?", body: "The 12-point readiness check covers the Information Officer question and 11 more controls — get your scored report." },
    related: ["popia-compliance-checklist-lenders", "dsar-workflow-21-business-days", "nca-affordability-assessment-lenders"],
  },
];

export const LEARN_CATEGORIES = ["The product", "Collections", "Compliance", "Implementation"];

export function getLearnBySlug(slug) {
  return LEARN.find((l) => l.slug === slug);
}

export function getRelated(items, currentSlug, limit = 3) {
  const current = items.find((l) => l.slug === currentSlug);
  const rest = items.filter((l) => l.slug !== currentSlug);
  if (!current) return rest.slice(0, limit);

  // Every article already carries a hand-curated `related` list of slugs —
  // use those first (they're genuinely on-topic), then fall back to same-category,
  // then anything else, so "related" never falls back to pure array order.
  const bySlug = new Map(items.map((l) => [l.slug, l]));
  const curated = (current.related || [])
    .map((slug) => bySlug.get(slug))
    .filter((l) => l && l.slug !== currentSlug);

  if (curated.length >= limit) return curated.slice(0, limit);

  const usedSlugs = new Set(curated.map((l) => l.slug));
  const sameCategory = rest.filter((l) => l.category === current.category && !usedSlugs.has(l.slug));
  const others = rest.filter((l) => l.category !== current.category && !usedSlugs.has(l.slug));

  return [...curated, ...sameCategory, ...others].slice(0, limit);
}

// Single, honest "current as of" date for the guide library — these are all
// part of the same authoring/review pass, so one shared date is accurate
// (unlike inventing a distinct fake publish date per article).
export const CONTENT_REVIEWED_AT = "18 August 2026";
