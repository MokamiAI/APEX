// Programmatic long-tail SEO engine — seed pages.
// Each page targets a real question these MDs, risk officers and accountants Google.
// Copy is specific, honest, and always funnels to a tool or proof page.

export const LEARN = [
  {
    slug: "capital-intermediary-platform",
    category: "The category",
    title: "What is a capital intermediary platform?",
    meta: "A capital intermediary sources deals and funds them with investor capital. A capital intermediary platform is the software built for that specific business model — here's what it must do.",
    intro: "The lender industry built software for the lender that funds its own book. It never built software for the company that sources the deal and funds it with someone else's capital. That company is a capital intermediary — and the gap in software is exactly what Apex was built to fill.",
    sections: [
      { h: "Why the spreadsheet is the real competitor", p: "Most capital intermediaries run their entire operation on a workbook: the deal book, the investor ledger, the payout formula, the KYC checklist, the penalty schedule. It works until the person who built it goes on leave — and every settlement becomes a hand-recalculated gamble." },
      { h: "The five capabilities a capital intermediary platform must have", p: "1) Deal lifecycle management from application to settlement. 2) Automatic payout calculation that splits interest income across multiple investors by each investor's model. 3) An investor ledger every fund partner can see. 4) Collections with PAR-bucketed queues. 5) Compliance controls — NCA pre-screening, POPIA field-level logging, an immutable audit trail — enforced by the system, not by memory." },
      { h: "Why the category matters", p: "If you search for 'loan management software', you get products built for balance-sheet lenders. If you're syndicating investor capital, you're in a different business with different math. A capital intermediary platform is the category that names your actual business model — and Apex is its reference implementation." },
    ],
    faq: [
      { q: "Is a capital intermediary platform the same as loan management software?", a: "No. Loan management software assumes one lender holds the whole book. A capital intermediary platform assumes the operator sources the deal and multiple investors fund it — with each investor's profit model applied automatically at settlement." },
      { q: "Who needs a capital intermediary platform?", a: "PO financiers, invoice financiers and bridging lenders who syndicate investor capital across multiple fund partners — typically 3–25 staff and 20–200 deals a month." },
    ],
    cta: { type: "calculator", title: "See the math your platform must handle", body: "Enter a deal with multiple investors and watch the split calculate itself — the way a capital intermediary platform should." },
    related: ["how-to-split-investor-payouts", "investor-ledger-requirements", "po-finance-software-south-africa"],
  },
  {
    slug: "how-to-split-investor-payouts",
    category: "Investor payouts",
    title: "How to split investor payouts: profit-split and fixed-return models explained",
    meta: "How originators split interest income across investor fund partners — 50/50 profit splits, fixed returns, penalty and reward rates — and why doing it by hand is a risk.",
    intro: "When a deal settles, the interest income has to be divided across every fund partner who contributed capital. Each investor may have a different arrangement: a 50/50 profit split, or a fixed return on their contribution. Doing this by hand, deal after deal, is where syndication businesses get exposed.",
    sections: [
      { h: "The 50/50 profit split", p: "The investor contributes capital, the operator sources and runs the deal, and the interest income is split 50/50. The investor's payout is their contribution plus half the income; the operator keeps the other half as margin." },
      { h: "The fixed return model", p: "The investor gets a fixed percentage of their contribution — say 12% — regardless of how the deal performs. The operator keeps everything above that. This is common with institutional fund partners who want certainty." },
      { h: "Penalty and reward rates", p: "Settlements rarely land perfectly on time. Early settlement can trigger a reward rate for the investor; late settlement a penalty. Applied per investor, per deal, per model — this is exactly the kind of calculation that must be automated." },
    ],
    faq: [
      { q: "Can one deal have investors on different models?", a: "Yes — and that's the norm. A deal can have two funds on 50/50 splits and one on a fixed return. Each investor's model is applied separately at settlement." },
      { q: "What happens if a deal settles late?", a: "The penalty rate applies to the investor return for that deal — automatically, if your platform is doing the calculation." },
    ],
    cta: { type: "calculator", title: "Split a deal yourself, live", body: "Enter the deal amount, income and each investor's model. Watch the payout schedule generate — with your retained margin." },
    related: ["investor-payout-calculation-south-africa", "co-funder-profit-share-agreement", "capital-intermediary-platform"],
  },
  {
    slug: "investor-payout-calculation-south-africa",
    category: "Investor payouts",
    title: "Investor payout calculation in South Africa: the settlement problem",
    meta: "Why calculating investor payouts by hand is a real risk for South African capital intermediaries — and how automatic settlement calculation removes it.",
    intro: "Every capital intermediary in South Africa knows the moment: a deal settles, and someone has to recalculate what each investor is owed — by hand, from a formula only one person fully understands.",
    sections: [
      { h: "The cost of a wrong payout", p: "An investor dispute over a calculated amount isn't a spreadsheet fix — it's a relationship event. Investors who lose trust take their capital elsewhere, and capital is the fuel of a syndication business." },
      { h: "The single-person dependency", p: "When the payout formula lives in one person's head, the business is exposed to leave, resignation and error. The formula belongs in the system, not the person." },
      { h: "The automatic alternative", p: "A platform that applies every investor's model at settlement — 50/50 splits, fixed returns, penalty and reward rates — and publishes the schedule to the investor ledger. No recalculating, no hoping." },
    ],
    faq: [
      { q: "How fast can a payout schedule be calculated automatically?", a: "The moment the deal settles — the schedule generates in seconds and fund partners are notified automatically." },
      { q: "Does automatic calculation handle penalty and reward rates?", a: "Yes. Each investor's penalty or reward rate is configured once and applied at every settlement." },
    ],
    cta: { type: "calculator", title: "Calculate a payout in 20 seconds", body: "Your numbers, your investors, your models — the schedule generates instantly." },
    related: ["how-to-split-investor-payouts", "investor-ledger-requirements", "wf-107-investor-notification"],
  },
  {
    slug: "co-funder-profit-share-agreement",
    category: "Investor payouts",
    title: "Co-funder profit share agreements: what every originator should document",
    meta: "When multiple fund partners back one deal, the profit share agreement decides who gets what. Here's what to document — and how to enforce it automatically.",
    intro: "Co-funding is how syndication works: several fund partners back one transaction to spread risk. But a co-funded deal only works if everyone's profit share is documented — and calculated correctly at settlement.",
    sections: [
      { h: "Document the model, not the friendship", p: "Each co-funder's arrangement — 50/50 split or fixed return, penalty and reward rates, contribution amount — should be written down and configured in the system once. Not remembered at each settlement." },
      { h: "The operator's margin is part of the agreement", p: "The retained margin is what the operator earns for sourcing and running the deal. It should be visible in every payout schedule — for the operator and for every fund partner." },
      { h: "Automate the enforcement", p: "When a deal settles, the system applies each co-funder's model automatically and publishes the schedule. No one negotiates the split after the money has moved." },
    ],
    faq: [
      { q: "What if a fund partner wants a different arrangement on each deal?", a: "Models are configured per investor and can be varied per deal — but always applied by the system, never by memory." },
      { q: "Who sees the operator's margin?", a: "The payout schedule shows every investor's contribution and return, and the operator's retained margin — transparent to all parties." },
    ],
    cta: { type: "fund", title: "Give your fund partners the visibility they expect", body: "A live ledger, automatic payout schedules and WF-107 notifications for every co-funded deal." },
    related: ["how-to-split-investor-payouts", "investor-ledger-requirements", "capital-intermediary-platform"],
  },
  {
    slug: "investor-ledger-requirements",
    category: "Investor payouts",
    title: "Investor ledger: what fund partners expect to see",
    meta: "Fund partners fund your deals — they expect a live ledger. What an investor ledger must show: contributions, models, payouts, statements, and automatic notifications.",
    intro: "Your fund partners deploy capital across your deals. The single biggest trust question they ask is simple: where is my money, and what is it earning? The answer should be a live ledger — not a month-end spreadsheet.",
    sections: [
      { h: "What a professional investor ledger shows", p: "Every co-funded deal, each investor's contribution, their model, the current balance, the next settlement date and the calculated payout. Filterable by originator, deal or fund." },
      { h: "Payouts that appear, not get forwarded", p: "When a deal settles, the payout schedule appears in the ledger automatically — and the fund partner is notified via WhatsApp. They stop calling to ask." },
      { h: "Statements on demand", p: "Investor statements generated from live data, downloadable in a click. No reconstructing from exports." },
    ],
    faq: [
      { q: "Can each fund partner only see their own deals?", a: "Yes — role-based visibility means each fund partner sees their own ledger, not the whole book." },
      { q: "Do fund partners get notified of payouts?", a: "Yes, automatically — the WF-107 workflow sends a WhatsApp notification the moment a payout is calculated." },
    ],
    cta: { type: "fund", title: "See the fund partner view", body: "Live per-deal visibility across every originator you fund." },
    related: ["co-funder-profit-share-agreement", "investor-payout-calculation-south-africa", "wf-107-investor-notification"],
  },
  {
    slug: "wf-107-investor-notification",
    category: "Investor payouts",
    title: "WF-107: automatic investor payout notifications",
    meta: "WF-107 is the workflow that notifies fund partners the moment a settlement payout is calculated. How automatic investor notifications work in APEX.",
    intro: "One of the quietest, most valuable moments in a lending operation is the notification. The moment a deal settles and payouts are calculated, every fund partner should know — automatically.",
    sections: [
      { h: "What WF-107 does", p: "Triggered by a deal settling, WF-107 sends a payout notification to each fund partner via WhatsApp — with their calculated return, contribution and the schedule link. No chasing, no phone tag." },
      { h: "Why it matters", p: "Every call a fund partner makes to ask 'where is my money?' is a trust tax. Automatic notification turns the answer into a message they receive before they think to ask." },
      { h: "Part of a wider automation engine", p: "WF-107 sits alongside WF-101 (new lead welcome), WF-103 (payment reminders) and WF-104 (approval escalation) in an event-driven workflow engine." },
    ],
    faq: [
      { q: "Is the WhatsApp notification real?", a: "Yes — APEX integrates with the real Meta WhatsApp Business API, not a simulation." },
      { q: "Can fund partners opt out of notifications?", a: "Yes, notification preferences are configurable per fund partner." },
    ],
    cta: { type: "calculator", title: "See the moment WF-107 fires", body: "Enter a deal, settle it in the calculator, and see the payout schedule your fund partners would be notified about." },
    related: ["investor-ledger-requirements", "investor-payout-calculation-south-africa", "capital-intermediary-platform"],
  },
  {
    slug: "po-finance-software-south-africa",
    category: "The product",
    title: "PO finance software: running a purchase-order book without spreadsheets",
    meta: "Purchase order financing companies in South Africa need software for a specific model: syndicated investor capital, PO-backed deals, automatic payouts. Here's what to look for.",
    intro: "PO financiers fund supplier purchase orders against confirmed customer orders — and in South Africa, the best of them syndicate the capital across multiple investors. Their operations need software built for that specific model.",
    sections: [
      { h: "What PO finance operations actually run on", p: "A CRM, a loan tracker, Excel workbooks and email. The core calculation — splitting each settled deal's interest income across investors — is done manually, every time." },
      { h: "What to look for in PO finance software", p: "Application-to-disbursement workflow, internal risk assessment, automatic payout calculation at settlement, an investor ledger, PAR-bucketed collections and NCA/POPIA controls that cannot be switched off." },
      { h: "Why category software beats generic CRMs", p: "A generic CRM doesn't understand co-funder splits. A capital intermediary platform does — because it was built for the company that sources the deal and the investors who fund it." },
    ],
    faq: [
      { q: "Can it handle day-based flat-rate products?", a: "Yes — day-based flat-rate and monthly products are first-class in the lending engine, with penalty and reward rates applied at settlement." },
      { q: "Does it integrate with South African banks?", a: "Disbursements can be wired via FNB, SBSA and Nedbank bank mandate integrations." },
    ],
    cta: { type: "platform", title: "See the platform for PO finance", body: "Twenty-three modules across nine pillars — from lead to investor paid out." },
    related: ["capital-intermediary-platform", "invoice-financing-software", "how-to-split-investor-payouts"],
  },
  {
    slug: "invoice-financing-software",
    category: "The product",
    title: "Invoice financing software for intermediaries with multiple fund partners",
    meta: "Invoice financing intermediaries fund invoices with investor capital. The software they need must handle multi-funder splits, collections and compliance. Here's the checklist.",
    intro: "Invoice financiers advance against unpaid invoices — and intermediaries do it with capital from multiple fund partners. Each invoice, each fund partner's exposure, each settlement: the math compounds fast.",
    sections: [
      { h: "The invoice intermediary's stack problem", p: "Advance against the invoice, track the debtor, chase collection, split the interest across fund partners. On spreadsheets, each of those is a manual, error-prone step." },
      { h: "The checklist", p: "Origination from web and email, risk assessment, automatic payout splits at settlement, a live investor ledger, PAR-bucketed collections with dialing queues and SMS campaigns, and a compliance trail that exists before anyone asks." },
      { h: "Multi-funder by design", p: "The platform must treat co-funding as the default — not an add-on. Each fund partner's model applied automatically, each payout notified, each statement generated from live data." },
    ],
    faq: [
      { q: "Can collections run from PAR buckets?", a: "Yes — recoveries run from PAR 1-30, 31-60, 61-90 and Legal/NPL buckets with call logging, promise tracking and automated SMS campaigns." },
      { q: "Do fund partners see their own book?", a: "Each fund partner sees their own ledger — contributions, models, payouts and statements." },
    ],
    cta: { type: "platform", title: "The platform built for multi-funder invoice finance", body: "Explore the 23 modules — or calculate a payout on your own numbers." },
    related: ["capital-intermediary-platform", "po-finance-software-south-africa", "investor-ledger-requirements"],
  },
  {
    slug: "bridging-finance-operations",
    category: "The product",
    title: "Bridging finance operations: managing complex co-funder arrangements",
    meta: "Bridging financiers with complex co-funder arrangements need software that applies each investor's model automatically. How APEX handles bridging operations.",
    intro: "Bridging finance is short-term, urgent and often co-funded. When a bridge settles, the interest split across fund partners — each with different terms — has to be right, fast.",
    sections: [
      { h: "The urgency problem", p: "Bridge deals settle on short timelines. A payout calculation that takes half a day by hand is a bottleneck at exactly the moment speed matters." },
      { h: "Complex arrangements, automatic application", p: "Each co-funder's model — split or fixed, with penalty and reward rates — is configured once and applied automatically at settlement. The operator's retained margin is visible in the same schedule." },
      { h: "Compliance on a short fuse", p: "Bridge operations can't assemble audit trails on demand. The platform keeps the trail continuously — NCA pre-screening, maker-checker approvals, immutable history." },
    ],
    faq: [
      { q: "Does it handle urgent disbursements?", a: "Approved funds appear in the disbursement queue and can be paid by EFT via bank mandate integrations." },
      { q: "What if an arrangement is unusual?", a: "Unusual arrangements are configured before you sign — the platform supports custom investor arrangements on the enterprise tier." },
    ],
    cta: { type: "platform", title: "Built for bridging operations", body: "See the deal workflow — from application to investor paid out." },
    related: ["capital-intermediary-platform", "how-to-split-investor-payouts", "credit-committee-approval-threshold"],
  },
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
    related: ["how-to-split-investor-payouts", "invoice-financing-software", "po-finance-software-south-africa"],
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
    related: ["dsar-workflow-21-business-days", "nca-affordability-assessment-lenders", "capital-intermediary-platform"],
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
    related: ["popia-compliance-checklist-lenders", "credit-committee-approval-threshold", "capital-intermediary-platform"],
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
    related: ["popia-compliance-checklist-lenders", "nca-affordability-assessment-lenders", "capital-intermediary-platform"],
  },
  {
    slug: "credit-committee-approval-threshold",
    category: "Compliance",
    title: "Credit committee approval: setting your deal threshold",
    meta: "Large deals should require committee sign-off. How a credit committee threshold — like R1,000,000 — is enforced automatically, with maker-checker on sensitive actions.",
    intro: "The bigger the deal, the more people should sign it. A credit committee threshold — loans above R1,000,000, say — is how syndication businesses prevent single-person control over large exposure.",
    sections: [
      { h: "Why segregation of duties matters", p: "When one person can originate, approve and disburse a deal, the business carries a control risk it may not see. Committee approval is the counterweight." },
      { h: "Automatic escalation", p: "The platform auto-forwards any application above your threshold to the Credit Committee for mandatory sign-off. No one remembers to escalate; the system does it." },
      { h: "Maker-checker on sensitive actions", p: "Approvals, variations and payouts require a second authorised user. Single-person control is a design flaw the platform engineers out." },
    ],
    faq: [
      { q: "Can the threshold be different per product?", a: "Yes — lending rules are configurable, including the committee threshold, maximum principal, minimum rate and grace periods." },
      { q: "Who sits on the Credit Committee?", a: "You define it — the platform has a named 'credit committee' role with its own permissions." },
    ],
    cta: { type: "audit", title: "Check your segregation of duties", body: "Question 3 of the readiness check covers committee approval and maker-checker." },
    related: ["nca-affordability-assessment-lenders", "capital-intermediary-platform", "popia-compliance-checklist-lenders"],
  },
  {
    slug: "excel-to-crm-migration-lenders",
    category: "Implementation",
    title: "Migrating your lending book from Excel: a practical guide",
    meta: "Moving a lending book from Excel workbooks to a platform: what to migrate, in what order, and how to do it without losing a day of operations. APEX imports .xlsx and .csv directly.",
    intro: "The scariest part of leaving spreadsheets isn't the software — it's the data. Where does the book live? What's in the workbook that no one documented? How do you move it without breaking the operation?",
    sections: [
      { h: "Map the book first", p: "Before configuration, map your products, investor models and current workflow. Your business runs exactly how it runs today — just better." },
      { h: "Import, don't retype", p: "APEX imports .xlsx and .csv customer data directly — deals, investor ledgers, client records. You don't start from zero, and you don't retype a thing." },
      { h: "Run in parallel, then cut over", p: "Run APEX alongside your current process until you're comfortable. Your own Risk and Compliance officer signs off the close — like our first client did, with zero critical issues found in UAT." },
    ],
    faq: [
      { q: "How long does migration take?", a: "The platform is already built, so there's no development phase — migration is onboarding: data import, training and sign-off happen on your timeline, not a project schedule." },
      { q: "What if the workbook is messy?", a: "The importer maps columns to fields; edge cases are handled during the mapping phase before anything goes live." },
    ],
    cta: { type: "import", title: "See your data map itself", body: "Upload a sample workbook and watch the columns map to APEX fields — in your browser." },
    related: ["capital-intermediary-platform", "po-finance-software-south-africa", "invoice-financing-software"],
  },

  {
    slug: "apex-vs-spreadsheets",
    category: "The product",
    title: "APEX vs. spreadsheets: what a workbook really costs a syndication book",
    meta: "The honest comparison between running a syndicated lending book on Excel workbooks and on a capital intermediary platform — time, error risk, compliance and single-person dependency.",
    intro: "The spreadsheet is not a legacy system — it's the incumbent. Most capital intermediaries run their entire operation on workbooks. The question is what that actually costs, and when it stops being cheap.",
    sections: [
      { h: "Where spreadsheets genuinely win", p: "They're free, everyone knows them, and you can build anything in them. For a single operator with a handful of deals and one investor, a workbook is fine. This comparison is for the business that has outgrown that point: multiple fund partners, 20+ deals a month, compliance obligations." },
      { h: "The real costs that show up late", p: "The payout formula lives in one person's head — leave, resignation or a busy week turns every settlement into a hand-recalculated gamble. The audit trail is assembled on demand from inboxes. The Monday report takes three hours. Every one of these is a cost you can't see in a P&L until it bites." },
      { h: "What a platform removes", p: "APEX keeps the deal book, investor ledger and payout formula in one system: the split calculates itself at settlement, the trail exists before anyone asks, and the Monday digest arrives before you reach the office. The workbook becomes a historical record instead of a critical system." },
    ],
    faq: [
      { q: "Can I keep using Excel alongside APEX?", a: "Yes — you run both in parallel until you're comfortable. APEX imports your .xlsx or .csv book directly, so nothing is retyped." },
      { q: "When should I stop using spreadsheets?", a: "When more than one person depends on the payout formula, when fund partners need visibility, or when a regulator or investor could ask for a trail. That's the point where the workbook stops being cheap." },
    ],
    cta: { type: "import", title: "See your workbook map itself", body: "Upload a sample file and watch the columns map to APEX fields — in your browser, nothing uploaded." },
    related: ["excel-to-crm-migration-lenders", "capital-intermediary-platform", "how-to-choose-lending-software"],
  },
  {
    slug: "apex-vs-generic-crm",
    category: "The product",
    title: "APEX vs. generic CRM and loan software: the model difference",
    meta: "A generic CRM or loan management system doesn't understand co-funder splits. Why capital intermediaries need category software — and where generic tools are still the right answer.",
    intro: "HubSpot, Zoho and the loan management suites are excellent at what they were built for. The question is whether that includes your business model — a company that sources deals and funds them with multiple investors' capital.",
    sections: [
      { h: "What generic tools do well", p: "Pipeline management, contact storage, basic automation, reporting. If you hold 100% of every deal on your own balance sheet, a generic CRM plus a loan tracker may be all you need. This comparison is for the syndication model." },
      { h: "Where they break", p: "The core calculation — splitting each settled deal's interest income across investors with different models — is done outside the system, in a workbook. The investor ledger doesn't exist. The co-funder visibility your fund partners expect is a series of exported spreadsheets. Compliance controls are policies, not enforced behaviours." },
      { h: "The model test", p: "Ask any system one question: when a co-funded deal settles, does it calculate what each investor is owed automatically and publish the schedule? If the answer is a manual process, the system doesn't understand your business model. That's the difference APEX was built on." },
    ],
    faq: [
      { q: "Do I need to replace my CRM entirely?", a: "APEX is a full platform — CRM, lending, investor management, collections, compliance. Most syndication operators consolidate rather than keep two systems and a workbook." },
      { q: "Is APEX right for a balance-sheet lender?", a: "Probably not — if you fund 100% of every deal yourself, a simpler tool may be the better answer. APEX is built for the intermediary model." },
    ],
    cta: { type: "platform", title: "See the modules a generic CRM can't offer", body: "Investor & fund management, WF-107 notifications, PAR-bucketed collections, the audit trail — 23 modules in one system." },
    related: ["capital-intermediary-platform", "how-to-choose-lending-software", "invoice-financing-software"],
  },
  {
    slug: "how-to-choose-lending-software",
    category: "The product",
    title: "How to choose lending software for a syndication business: the buyer's checklist",
    meta: "A practical checklist for choosing software for a capital intermediary: co-funder splits, investor ledger, PAR collections, NCA/POPIA controls, migration, WhatsApp and pricing.",
    intro: "Choosing software for a syndication book isn't a feature-list exercise — it's a model-fit exercise. Here's the checklist we'd give a managing director before they sign anything.",
    sections: [
      { h: "1. Test the settlement math", p: "Ask for a live demo where a co-funded deal settles and each investor's payout is calculated automatically, with penalty and reward rates applied. If the vendor can't show it on your numbers, the system doesn't fit the model." },
      { h: "2. Check the investor ledger", p: "Can each fund partner see their own deals, contributions, models and payouts — without seeing the whole book? Is there automatic payout notification? That's table stakes for a syndication business." },
      { h: "3. Ask how compliance is enforced", p: "Is NCA pre-screening a rule that can be bypassed, or a control that can't? Is POPIA access logged at field level? Is there a DSAR workflow with an SLA? Policies are promises; enforced controls are compliance." },
      { h: "4. Demand the migration path", p: "Can it import your workbook? Can you run in parallel? Who signs off the cutover? A platform that's already built and offers guided onboarding with a 90-day warranty is a strong signal; open-ended implementations are a warning." },
      { h: "5. Match the channel", p: "Your clients and investors live on WhatsApp. Does the platform use the real Meta API, with an omnichannel inbox, bulk campaigns and automated reminders? Email-only tools are a step backward for this market." },
    ],
    faq: [
      { q: "What's the most important test?", a: "The settlement math. If the platform can't split a co-funded deal's income correctly, in front of you, nothing else matters." },
      { q: "How long should implementation take?", a: "For a platform that's already built and fits the model, implementation is onboarding — migration, training and sign-off — not a development project. Longer usually means configuration bloat or poor fit." },
    ],
    cta: { type: "tour", title: "Apply the checklist to APEX", body: "Walk the modules yourself — the settlement engine, investor ledger, PAR buckets and audit trail are all here." },
    related: ["apex-vs-generic-crm", "apex-vs-spreadsheets", "capital-intermediary-platform"],
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
      { h: "Why this matters before an inquiry", p: "When the Regulator or an investor asks, the Information Officer has to show the evidence: who accessed what, when, why; how DSARs are answered; how retention is enforced. The platform produces that evidence on demand — which is exactly what the audit trail, field-level logging and DSAR workflow exist to do." },
    ],
    faq: [
      { q: "Who can be the Information Officer?", a: "A senior person in the organisation — often the CEO or a manager. POPIA sets out the role; the Regulator registers them." },
      { q: "Does software replace the Information Officer?", a: "No — the role is a person's responsibility. Software makes it possible to actually discharge it: enforced controls, provable logging, tracked workflows." },
    ],
    cta: { type: "audit", title: "Is your Information Officer set up to answer?", body: "The 12-point readiness check covers the Information Officer question and 11 more controls — get your scored report." },
    related: ["popia-compliance-checklist-lenders", "dsar-workflow-21-business-days", "nca-affordability-assessment-lenders"],
  },
];

export const LEARN_CATEGORIES = ["The category", "Investor payouts", "The product", "Collections", "Compliance", "Implementation"];

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
