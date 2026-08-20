// Shared content for the APEX Enterprise site.
// APEX Enterprise is a cloud-hosted CRM and Loan Management System — a purpose-built
// platform replacing the fragmented, manual way lending runs (spreadsheets, email,
// informal approvals, reactive collections) with one integrated platform across the
// full lending lifecycle: lead acquisition & qualification, client management, loan
// origination, a multi-level approval workflow with a full audit trail, loan
// administration, collections & payments, analytics & executive reporting, and
// system administration.

export const COMPANY = {
  name: "APEX Enterprise",
  product: "Cloud-Hosted CRM & Loan Management System",
  category: "Lending Operations Platform",
  maker: "Intermediate Data Systems (Pty) Ltd",
  email: "marcus@intermediateds.co.za",
  support: "support@intermediateds.co.za",
  country: "South Africa",
};

// REPLACE with the real business WhatsApp number (E.164, no +) before launch.
export const WHATSAPP_NUMBER = "27730000000";

// REPLACE with the real production domain before launch.
export const SITE_URL = "https://apex.capital";

// Optional: set NEXT_PUBLIC_CALENDAR_URL to a live booking link (Calendly / Cal.com / HubSpot meetings).
// When set, the booking success state and lead capture show "Choose your slot" using it.
export const CALENDAR_URL = process.env.NEXT_PUBLIC_CALENDAR_URL || "";

// Optional: set LEAD_WEBHOOK_URL to a CRM endpoint (HubSpot / Pipedrive webhook) to forward every lead.
export const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL || "";

// Visible build stamp so you can instantly confirm which version is live.
export const SITE_VERSION = "v2.3";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/tour", label: "Product tour" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/compliance", label: "Compliance" },
  { href: "/pricing", label: "Pricing" },
];

export const TRUST_SIGNALS = [
  { value: "0", label: "manual credit decisions" },
  { value: "8", label: "lending stages in one platform" },
  { value: "60d", label: "from agreement to go-live" },
  { value: "0", label: "critical UAT issues at go-live" },
];

export const HERO = {
  eyebrow: "APEX Enterprise · Cloud-Hosted CRM & Loan Management System",
  headlineA: "The system of record for every loan you write — from first contact to final repayment.",
  headlineB: "One platform for the entire lending lifecycle. From lead to loan closed.",
  subheadline:
    "APEX Enterprise replaces the fragmented, manual way lending runs — spreadsheets, email, informal approvals, reactive collections — with one integrated platform across eight stages: lead qualification, client management, loan origination, approval workflow, loan administration, collections, reporting and system administration. And the moment an application is ready, it routes and decides itself.",
  ctaPrimary: "Explore the platform",
  ctaSecondary: "How a loan flows through APEX",
  note: "See the differentiator live:",
  noteLink: "/calculator",
  noteLinkLabel: "credit decisions that route themselves",
};

export const HONEST_STATEMENT =
  "The person who knows why last quarter's approvals went the way they did is on leave. Your credit committee meets in an hour. Someone on your team is going to reconstruct three weeks of decisions from email threads and hope nothing important got missed.";

export const BEFORE_AFTER = [
  {
    situation: "Your credit decisions live in someone's inbox.",
    before:
      "An application arrives, gets forwarded, sits in someone's queue, and waits for whoever remembers to chase it. Approval time depends on who's in office that week.",
    after:
      "The moment an application is submitted, APEX scores it against your risk matrix and routes it automatically — approved directly, or forwarded to committee the moment your threshold is hit. No forwarding, no waiting.",
  },
  {
    situation: "Your Monday report takes three hours to assemble.",
    before:
      "Someone exports from the CRM, pastes into Excel, reconciles against the bank feed, and rebuilds the deck by hand. Every Monday.",
    after:
      "The Reporting Studio assembles your portfolio health, aging schedule and collector performance automatically. Your digest is in your inbox before you get to the office.",
  },
  {
    situation: "Your audit trail is assembled on demand.",
    before:
      "When a regulator or auditor asks, someone reconstructs the trail from inboxes and spreadsheet exports. If you're lucky, it's complete.",
    after:
      "The System Audit Trail logs every action immutably — who, what, old value, new value, timestamp. Your audit trail exists before anyone asks for it.",
  },
];

export const OUTCOMES = [
  {
    n: "01",
    tabLabel: "Approvals",
    headline: "Your credit committee stops being a bottleneck.",
    body: "Every application is scored the moment it's submitted and routed automatically — approved directly, or forwarded to committee the instant your threshold is hit. Nobody forwards an email hoping someone picks it up.",
    panel: "approvals",
  },
  {
    n: "02",
    tabLabel: "Collections",
    headline: "Your team stops working from a printed list.",
    body: "Recoveries & Collections runs from PAR buckets — 1-30, 31-60, 61-90, Legal/NPL — with a dialing queue, call logging, promise tracking and a nightly sweep that flags every overdue account automatically. Every promise is followed up. Nothing falls off the list, because there is no list.",
    panel: "collections",
  },
  {
    n: "03",
    tabLabel: "Origination",
    headline: "Your leads move from first contact to disbursement without chasing anyone.",
    body: "Applications arrive from the web or Apply@ email and create themselves in the CRM. Internal risk assessment scores each one, approvals route automatically, and approved funds appear in the Disbursement Queue ready to pay.",
    panel: "origination",
  },
  {
    n: "04",
    tabLabel: "Reporting",
    headline: "Your Monday report is in your inbox before you get to the office.",
    body: "The Reporting Studio runs monthly portfolio health, compliance audit, sales conversion funnel, collector performance and revenue earned against the live book — assembled and sent automatically. Monday morning is for decisions, not data entry.",
    panel: "reporting",
  },
];

export const ICP_COPY = {
  headline: "If your lending book still runs on spreadsheets, email and whoever remembers to follow up, you know exactly what we mean.",
  body: "The application arrives, someone forwards it, someone else approves it when they get to it, and collections chases whoever's overdue when there's time. That's not a process — it's a series of people remembering things. APEX was built to replace it with a system.",
  who: [
    "You run lending operations across multiple staff and can't see the whole book in one place",
    "Credit decisions depend on who's available to review them, not a consistent process",
    "Collections is reactive — you find out an account is overdue when someone happens to check",
    "You've had a compliance or audit request you couldn't answer quickly",
    "You have 3–25 staff and 20–200 active applications a month",
  ],
  whoNot: [
    "You already run a single, integrated system across origination, approvals and collections",
    "You process a handful of loans a year and a shared spreadsheet genuinely still works",
    "You operate under a regulatory framework this platform wasn't configured for",
  ],
};

export const TESTIMONIAL = {
  quote:
    "For the first time, the approval isn't waiting on a person — it's the system. Decisions that used to take days now take minutes, and we can finally see the whole book in one place.",
  attribution: "Head of Operations, lending company — South Africa",
  stats: [
    { value: "R2.4m", label: "disbursed in the first quarter on APEX" },
    { value: "60%", label: "faster average approval time" },
    { value: "50%", label: "less time on Monday reporting" },
    { value: "0", label: "disputes since go-live" },
  ],
};

export const IMPLEMENTATION = [
  {
    step: "1",
    title: "Your book, mapped first",
    body: "Before any configuration, we map your products, your approval policy and your current workflow. Your business runs exactly how it runs today — just better.",
  },
  {
    step: "2",
    title: "Your data moves with you",
    body: "Import your .xlsx or .csv customer data directly — applications, client records and loan history migrate into APEX. You don't start from zero.",
  },
  {
    step: "3",
    title: "Your team learns on your real book",
    body: "Training happens on live data, in role-based sessions, during business hours. Sales, origination, finance and collections teams train on what they'll actually use.",
  },
  {
    step: "4",
    title: "You validate before you cut over",
    body: "You run APEX in parallel with your current process until you're comfortable. Your own Risk and Compliance officer signs off the close — like our first client did.",
  },
  {
    step: "5",
    title: "You go live in 60 days — with a 90-day warranty",
    body: "Full production go-live with a 90-day defects liability period after every deployment. We stay on-site until your team is running it without us.",
  },
];

export const FAQ = [
  {
    q: "What happens to the spreadsheet we run everything on?",
    a: "We migrate your active book — applications, client records and loan history — into APEX before you go live. The platform imports .xlsx and .csv customer data directly. You run both in parallel until you're comfortable, then the workbook becomes a historical record instead of a critical system.",
  },
  {
    q: "How long does implementation actually take?",
    a: "Sixty days from signed agreement to production go-live, including data migration, configuration, training and your sign-off. Your own Risk and Compliance officer validates the close — our first client did exactly this and found zero critical issues before go-live.",
  },
  {
    q: "We have an unusual approval hierarchy. Will APEX handle it?",
    a: "That's the question we're built to answer. Approval routing, committee thresholds and escalation rules are configured to your policy — not a fixed template. If you have an exception process we haven't seen, we configure it before you sign.",
  },
  {
    q: "Does the WhatsApp integration actually work, or is it a placeholder?",
    a: "It's the real Meta Business API — not a simulation. WhatsApp, email and SMS live in one Unified Inbox, with bulk campaigns, a template library and automated reminders. Your clients can reach you the way they already communicate.",
  },
  {
    q: "How do you handle POPIA and NCA compliance?",
    a: "NCA pre-screening enforces your minimum criteria at application stage and cannot be bypassed. The risk engine scores every application with an auditable weighting matrix, and the NCA Compliance Audit report is generated for your submissions. POPIA controls include field-level access logging on all personal information, a DSAR workflow with a 21-business-day SLA, anomaly detection on access patterns, and a 7-year audit trail with maker-checker approvals.",
  },
  {
    q: "How is pricing structured?",
    a: "Your quote is based on your book — your application volume and your seats — not on a generic per-seat menu. Use the pricing guide to see your range in three clicks, and we'll confirm a fixed quote before you commit.",
  },
  {
    q: "What happens after we go live?",
    a: "A dedicated support channel, a 90-day defects liability period on every deployment, and a product roadmap you have a voice in. The platform is SaaS-licensed, maintained and developed by Intermediate Data Systems — your team never touches infrastructure.",
  },
];

// The real platform: organized around the 8 stages of the lending lifecycle.
export const PILLARS = [
  {
    id: "leads",
    name: "Lead Acquisition & Qualification",
    desc: "Capture and qualify prospects before they become applicants. Leads from the web or Apply@ email create themselves in the CRM, scored and routed from the first touch.",
    modules: ["Leads Management", "Sales Pipeline", "Lead Qualification Scoring"],
  },
  {
    id: "clients",
    name: "Client Management",
    desc: "One repository for every client and their documents. KYC files, contracts and correspondence live in one place — not scattered across inboxes and shared drives.",
    modules: ["Client Repository", "People & Contacts", "Document Vault"],
  },
  {
    id: "origination",
    name: "Loan Application Origination",
    desc: "Applications arrive from the web or Apply@ email and create themselves in the CRM, with internal risk assessment and NCA pre-screening tracked from the first touch.",
    modules: ["Loan Applications", "Application Intake", "Risk Assessment"],
  },
  {
    id: "approvals",
    name: "Approval Workflow",
    desc: "A multi-level approval workflow with a full audit trail. Credit decisions queue for your team and route to committee automatically the moment your threshold is hit.",
    modules: ["Pending Approvals", "Committee Review", "System Audit Trail"],
  },
  {
    id: "administration",
    name: "Loan Administration",
    desc: "Booking, repayment and disbursement in one place. An active loan book monitored for health, and a disbursement queue for approved funds ready for EFT.",
    modules: ["Active Loan Book", "Disbursement Queue", "Fee & Interest Invoices"],
  },
  {
    id: "collections",
    name: "Collections & Payments",
    desc: "Delinquency management and payment promises. A dialing queue, automated SMS campaigns and PAR buckets — 1-30, 31-60, 61-90, Legal/NPL — with a nightly sweep that flags every overdue account before your team walks in.",
    modules: ["Recoveries & Collections", "Operations Board", "Payment Processing"],
  },
  {
    id: "reporting",
    name: "Analytics & Executive Reporting",
    desc: "Actionable business intelligence. An executive dashboard, a six-report studio and predictive analytics that flag portfolio risk before it bites.",
    modules: ["Dashboard", "Reporting Studio", "Predictive Analytics"],
  },
  {
    id: "admin",
    name: "System Administration",
    desc: "Enterprise-grade platform management. Role-based access, a connected integrations hub, and security controls including 2FA and session timeouts.",
    modules: ["User Directory", "System Configuration", "Integrations Hub"],
  },
];

// The six real roles in the platform
export const ROLES = [
  { name: "Admin", desc: "Full platform control — configuration, security and all modules." },
  { name: "Sales / Origination", desc: "Runs lead intake, applications and risk assessment." },
  { name: "Finance", desc: "Manages disbursements, fee & interest invoices, statements and reconciliations." },
  { name: "Collections", desc: "Owns recoveries — dialing queue, promises and PAR buckets." },
  { name: "Credit Committee", desc: "Mandatory sign-off on loans above your committee threshold." },
  { name: "IT / Admin", desc: "Owns system configuration, integrations, user access and security." },
];

// The real workflow automation rules
export const WORKFLOW_RULES = [
  { id: "WF-101", name: "New Lead Welcome", trigger: "Lead Created", action: "Send Email", runs: 42 },
  { id: "WF-102", name: "High Risk Alert", trigger: "Risk Score Exceeded", action: "Slack Notify", runs: 5 },
  { id: "WF-103", name: "Payment Reminder", trigger: "3 Days Before Due", action: "WhatsApp", runs: 118 },
  { id: "WF-104", name: "Approval Escalation", trigger: "Approval Stalled", action: "Notify Manager", runs: 9 },
  { id: "WF-105", name: "Client KYC Refresh", trigger: "Annual Recurrence", action: "Request Update", runs: 3 },
  { id: "WF-106", name: "Dormancy Recovery", trigger: "30 Days Inactive", action: "Sales Call", runs: 11 },
  { id: "WF-107", name: "Nightly Arrears Sweep", trigger: "Daily at 02:00", action: "Flag Overdue + Queue Reminders", runs: 365 },
];

// The real integrations hub
export const INTEGRATIONS = [
  { name: "WhatsApp Business", desc: "Automated client messaging and support" },
  { name: "Xero Cloud Accounting", desc: "Auto-sync invoices and bank reconciliations" },
  { name: "DocuSign e-Signature", desc: "Legally binding digital document signing" },
  { name: "Stripe Connect", desc: "Process card payments and autopayments" },
  { name: "Plaid Data Sync", desc: "Instant bank statement verification" },
  { name: "Slack Notifications", desc: "Sync system alerts to workspace channels" },
  { name: "FNB / SBSA / Nedbank", desc: "Bank mandates and disbursement wiring" },
];

// The real reporting studio
export const REPORTS = [
  { name: "Monthly Portfolio Health", desc: "Comprehensive loan book performance metrics" },
  { name: "NCA Compliance Audit", desc: "Regulatory data required for annual submission" },
  { name: "Sales Conversion Funnel", desc: "Analysis of lead to disbursement speed" },
  { name: "Collector Performance", desc: "Recovery rates and productivity per agent" },
  { name: "Revenue & Interest Earned", desc: "Projected vs actual P&L from interest" },
  { name: "Aging Schedule (Arrears)", desc: "Daily buckets of overdue accounts" },
];

// The real risk engine
export const RISK_MATRIX = [
  { factor: "Credit Score", weight: "40%" },
  { factor: "Financials", weight: "30%" },
  { factor: "Industry Risk", weight: "20%" },
  { factor: "Collateral", weight: "10%" },
];

export const RISK_STRATA = ["Credit", "Market", "Ops", "Compliance", "Fraud"];

export const DASHBOARD_KPIS = [
  { k: "Total Loan Book", v: "R 12.4M" },
  { k: "Active Leads", v: "47" },
  { k: "Overdue Portfolio", v: "R 386K" },
  { k: "Pending Approvals", v: "6" },
];

// Real loan lifecycle (8 steps) — matches the platform's processing originations flow
export const DEAL_FLOW = [
  { actor: "System", title: "Application received", desc: "Your application arrives from the web form or Apply@ email and creates itself in the CRM — with KYC documents attached and a client record opened." },
  { actor: "Your team", title: "KYC & NCA pre-screen", desc: "Documents verified, NCA pre-screening run. Pre-screening cannot be bypassed." },
  { actor: "System", title: "Internal risk assessment", desc: "The risk engine scores the application — credit score 40%, financials 30%, industry risk 20%, collateral 10% — and assigns a risk profile." },
  { actor: "System", title: "Approval workflow", desc: "The application routes through your approval policy automatically. Loans above your committee threshold — e.g. R1,000,000 — are auto-forwarded to the Credit Committee for mandatory sign-off." },
  { actor: "Your team", title: "Disbursement", desc: "Approved funds appear in the Disbursement Queue, authorized and paid by EFT — wired via FNB / SBSA / Nedbank mandates." },
  { actor: "System", title: "Loan enters active book", desc: "Principal, balance, repayment schedule and next due date tracked. Payment reminders scheduled (WF-103)." },
  { actor: "System", title: "Repayments reconciled", desc: "Payments recorded against the loan, status updated, aging schedule recalculated, fee & interest invoices generated." },
  { actor: "System", title: "Loan closes", desc: "Final repayment reconciled, the loan record closes, and the full audit trail exports in one click." },
];

// Real collections workflow (8 steps) — matches PAR-bucketed recoveries
export const COLLECTIONS_FLOW = [
  { actor: "System", title: "First missed payment", desc: "The account drops into the PAR 1-30 bucket automatically the day after the due date." },
  { actor: "Your team", title: "Dialing queue", desc: "Every call logged against the borrower — days overdue, priority, last contact, outcome. Nothing lives in someone's head." },
  { actor: "Your team", title: "Promise captured", desc: "A promise to pay is logged with a date. Auto-reminders take over from there." },
  { actor: "System", title: "Automated SMS campaign", desc: "Payment reminders go out by SMS and WhatsApp on the promise date (WF-103). No chasing." },
  { actor: "System", title: "Escalation triggered", desc: "Missed promises escalate through the PAR buckets — 31-60, 61-90, Legal/NPL — and to your manager (WF-104)." },
  { actor: "Your team", title: "Restructure or arrangement", desc: "A revised schedule is created and tracked with the same discipline." },
  { actor: "System", title: "Recovery reconciled", desc: "Payments match, buckets update, collector performance and aging schedule re-reported." },
  { actor: "System", title: "Outcome recorded", desc: "Recovered or written off — the trail is complete and audit-ready." },
];

export const COMPLIANCE_CONTROLS = [
  {
    name: "NCA pre-screening",
    detail: "Your minimum criteria — for example R1m minimum turnover and 3+ active supply clients — are enforced at application stage. The rule cannot be bypassed, deleted or overridden by accident.",
    tone: "law",
  },
  {
    name: "Weighted risk engine",
    detail: "Every application is scored on an auditable matrix — credit score 40%, financials 30%, industry risk 20%, collateral 10% — with a credit risk profile you can see and defend.",
    tone: "scale",
  },
  {
    name: "POPIA field-level logging",
    detail: "Every access to personal information is logged at field level — who, when, what, why. Your PII isn't just protected, its access history is provable.",
    tone: "shield",
  },
  {
    name: "DSAR workflow",
    detail: "Data subject access requests run a tracked workflow with a 21-business-day SLA. Nothing is assembled on demand from inboxes.",
    tone: "clock",
  },
  {
    name: "Committee approval",
    detail: "Loans above your committee threshold require mandatory Credit Committee sign-off. Single-person control is a design flaw we engineered out.",
    tone: "check",
  },
  {
    name: "Anomaly detection",
    detail: "Access patterns are monitored across the platform. Unusual behaviour is flagged before it becomes a breach notification.",
    tone: "radar",
  },
  {
    name: "7-year audit trail",
    detail: "The System Audit Trail logs every action immutably — user, entity, old value, new value, timestamp. Exportable on demand.",
    tone: "file",
  },
  {
    name: "NCA compliance report",
    detail: "A structured report covering your credit provider obligations, generated for your annual submission or legal team.",
    tone: "report",
  },
];

export const SECURITY_FACTS = [
  { k: "Data residency", v: "South African data residency" },
  { k: "Encryption", v: "Encryption at rest and in transit" },
  { k: "Access control", v: "6 role-based levels — admin, sales/origination, finance, collections, committee, IT/admin" },
  { k: "Authentication", v: "Two-factor authentication (MFA) + session timeouts" },
  { k: "Bank integrations", v: "FNB / SBSA / Nedbank mandates" },
  { k: "Messaging", v: "Real Meta WhatsApp Business API" },
  { k: "UAT", v: "Zero critical or high-severity issues before go-live" },
  { k: "Warranty", v: "90-day defects liability after every deployment" },
];

export const TIERS = [
  {
    name: "Essential",
    tag: "For small lending teams",
    features: [
      "Your CRM & origination running in week one",
      "Automated approval routing at your thresholds",
      "Your loan book, up to 5 seats",
      "Email & SMS messaging",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    tag: "Most common",
    features: [
      "Everything in Essential",
      "Full platform across all 8 lending stages",
      "WhatsApp Business API + Unified Inbox",
      "Collections & recovery with PAR buckets",
      "Workflow automation (WF-101 to WF-107)",
      "Priority support, 60-day deployment",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    tag: "For multi-branch and complex lenders",
    features: [
      "Everything in Growth",
      "Custom approval hierarchies & branch structures",
      "Dedicated onboarding team & data migration",
      "Custom reports and integrations",
      "SLA-backed support, named engineer",
      "White-glove 60-day deployment with warranty",
    ],
    highlight: false,
  },
];

export const FIRST_WEEK = [
  "Your active applications are in the CRM, not the workbook",
  "Your first approval routes itself against your threshold",
  "Your first disbursement clears through the Disbursement Queue",
  "Your team has run collections from the PAR queue, not a printout",
  "Your first Monday digest arrives in your inbox",
  "Your NCA pre-screening is enforcing your policy on every new application",
];

// ============ NEW PAGES (push-further build) ============

// The real modules, in the order the product sidebar shows them
export const TOUR_MODULES = [
  { id: "dashboard", label: "Dashboard" },
  { id: "leads", label: "Leads Management" },
  { id: "pipeline", label: "Sales Pipeline" },
  { id: "clients", label: "Client Repository" },
  { id: "contacts", label: "People & Contacts" },
  { id: "invoices", label: "Fee & Interest Invoices" },
  { id: "applications", label: "Loan Applications" },
  { id: "approvals", label: "Pending Approvals" },
  { id: "loanbook", label: "Active Loan Book" },
  { id: "disbursements", label: "Disbursement Queue" },
  { id: "collections", label: "Recoveries & Collections" },
  { id: "tasks", label: "Operations Board" },
  { id: "reports", label: "Reporting Studio" },
  { id: "analytics", label: "Predictive Analytics" },
  { id: "support", label: "Support & Tickets" },
  { id: "inbox", label: "Unified Inbox" },
  { id: "vault", label: "Document Vault" },
  { id: "automation", label: "Workflow Automation" },
  { id: "integrations", label: "Integrations Hub" },
  { id: "settings", label: "System Configuration" },
  { id: "users", label: "User Directory" },
  { id: "audit", label: "System Audit Trail" },
];

export const ACCOUNTANT = {
  hero: {
    kicker: "For accountants & auditors",
    headline: "You see the spreadsheet chaos at every year-end. Now you can fix it.",
    sub: "Every year, the same scene: client books assembled from inboxes, workbooks and exports; loan histories reconstructed; compliance evidence hunted down. APEX replaces the reconstruction with a live, auditable system — and gives you the report you need to sign off with confidence.",
  },
  why: [
    { title: "Audit-ready by default", body: "A 7-year immutable audit trail, maker-checker approvals and field-level POPIA logging mean your evidence exists before you ask for it." },
    { title: "NCA compliance report", body: "A structured report covering credit provider obligations — generated for annual submission, ready for the NCR or your file." },
    { title: "Statements in one click", body: "Client and loan statements generated from live data. No more reconstructing from exports." },
    { title: "Cleaner year-ends", body: "Fee & interest invoices, aging schedules and reconciliations run in the platform — your fieldwork starts ahead of schedule." },
  ],
  referral: {
    headline: "Refer your clients. We do the rest.",
    body: "If a client runs a lending book on spreadsheets, they have a compliance and control problem you can see. Refer them to APEX, and you get a co-branded readiness report, a named implementation contact and priority migration. Your clients get a system you can actually audit.",
    bullets: [
      "Co-branded POPIA/NCA readiness report for your client",
      "Priority data migration and implementation",
      "Named support contact for the audit season",
      "Referral tracking so you know what closed",
    ],
  },
};

export const AUDIT_QUESTIONS = [
  { id: "q1", area: "NCA pre-screening", q: "Are your minimum lending criteria enforced automatically at application stage — with no way to bypass them?", hint: "E.g. R1m minimum turnover and 3+ active supply clients at application." },
  { id: "q2", area: "Credit assessment", q: "Is every application credit-assessed with documented affordability and a reproducible risk score?", hint: "The NCA's affordability assessment is a substantive obligation, not a formality." },
  { id: "q3", area: "Segregation of duties", q: "Are large-deal approvals segregated from the person who originated the deal (maker-checker or committee)?", hint: "Loans above R1,000,000 should require committee sign-off." },
  { id: "q4", area: "Information Officer", q: "Is an Information Officer appointed and registered with the Information Regulator?", hint: "Required under POPIA for every responsible party." },
  { id: "q5", area: "Consent records", q: "Do you hold verifiable consent records for every data subject whose information you process?", hint: "Verifiable, not implied." },
  { id: "q6", area: "Access logging", q: "Can you prove who accessed each client's personal information, and when?", hint: "Field-level, not file-level." },
  { id: "q7", area: "DSAR process", q: "Do you have a tracked DSAR workflow with an SLA for the 21-business-day deadline?", hint: "Data subject access requests must be answered in 21 business days." },
  { id: "q8", area: "Retention & deletion", q: "Are retention schedules and data deletion enforced by the system — not by someone's memory?", hint: "Deletion is a POPIA condition." },
  { id: "q9", area: "Audit trail", q: "Does every action on a deal have an immutable, exportable trail?", hint: "Who changed what, from what to what, when." },
  { id: "q10", area: "Anomaly detection", q: "Are unusual access patterns flagged before they become a breach?", hint: "Proactive monitoring, not post-hoc discovery." },
  { id: "q11", area: "Breach response", q: "Do you have a documented breach response and notification process?", hint: "POPIA requires notification to the Regulator and data subjects." },
  { id: "q12", area: "Training & awareness", q: "Is POPIA/NCA training tracked for every staff member with access to client data?", hint: "Proof of training, not a workshop in the past." },
];

export const AUDIT_BANDS = [
  { min: 85, label: "Manageable", tone: "ok", note: "You're in good shape. The gaps below are exactly what APEX automates — close them and the trail maintains itself." },
  { min: 55, label: "At risk", tone: "amber", note: "You have material gaps. Every one of them is the kind of exposure a regulator or auditor inquiry would find — and each maps to a control APEX enforces by default." },
  { min: 0, label: "Critical", tone: "red", note: "Your exposure is high. POPIA penalties run to R10 million per infringement plus criminal exposure, and NCA affordability is a substantive obligation. This is a fix-the-system problem, not a fix-the-document problem." },
];

// Map each audit area to the APEX control that closes it
export const AUDIT_TO_CONTROL = {
  "NCA pre-screening": "NCA pre-screening — enforced at application stage, cannot be bypassed.",
  "Credit assessment": "Weighted risk engine — auditable scoring: credit 40% · financials 30% · industry 20% · collateral 10%.",
  "Segregation of duties": "Committee approval — mandatory sign-off above R1,000,000; maker-checker on sensitive actions.",
  "Information Officer": "System Configuration + User Directory — role-based access with named owners and 2FA.",
  "Consent records": "Document Vault + POPIA field-level logging — verifiable consent and access history.",
  "Access logging": "POPIA field-level logging — who, when, what, why on every PII access.",
  "DSAR process": "DSAR workflow — tracked with a 21-business-day SLA.",
  "Retention & deletion": "Data retention & deletion — enforced by the system, not memory.",
  "Audit trail": "System Audit Trail — immutable 7-year log, user · entity · old · new · timestamp.",
  "Anomaly detection": "Anomaly detection — access patterns flagged before they become a breach.",
  "Breach response": "Anomaly detection + audit trail — the evidence a breach response needs, ready on demand.",
  "Training & awareness": "Role-based training on your real book + named roles with tracked access.",
};
