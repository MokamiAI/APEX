// Shared illustrative sample data for demo/mockup panels across the site
// (hero frame, product tour, decision demo, outcome panels).
// One source of truth so the "same book" looks the same everywhere it appears.

export const SAMPLE_DEAL = {
  ref: "APP-1029",
  client: "Meadowline Suppliers (Pty) Ltd",
  amount: 150000,
  term: "45 days",
  riskScore: 82,
};

// A sample slice of the approvals queue — some auto-approved, some routed to committee.
export const SAMPLE_APPROVALS = [
  { id: "APP-1187", client: "Meadowline Suppliers", amount: 150000, riskScore: 82, band: "Low Risk", route: "Auto-approved", status: "Approved" },
  { id: "APP-1190", client: "Soweto Builders", amount: 2400000, riskScore: 61, band: "Medium Risk", route: "Committee Review", status: "Pending" },
  { id: "APP-1193", client: "Cape Logistics", amount: 220000, riskScore: 74, band: "Low Risk", route: "Auto-approved", status: "Approved" },
  { id: "APP-1196", client: "Randburg Steel", amount: 900000, riskScore: 58, band: "Medium Risk", route: "Committee Review", status: "Pending" },
];

export const SAMPLE_DASHBOARD_KPIS = [
  ["Total Loan Book", "R 12.4M", "text-white"],
  ["Active Leads", "47", "text-teal-400"],
  ["Overdue Portfolio", "R 386K", "text-gold-500"],
  ["Pending Approvals", "6", "text-teal-400"],
];

export const SAMPLE_PORTFOLIO_BARS = [
  ["Jan", 42], ["Feb", 55], ["Mar", 48], ["Apr", 72], ["May", 64], ["Jun", 88],
];

export const SAMPLE_PAR_BUCKETS = [
  ["PAR 1-30", 14, "teal"],
  ["PAR 31-60", 5, "amber"],
  ["PAR 61-90", 2, "amber"],
  ["Legal/NPL", 1, "red"],
];

export const SAMPLE_COLLECTIONS_ROWS = [
  ["DL-2210", "Naledi Trading", 4, "High", "Promise: 12 Aug"],
  ["DL-2214", "Bronkhorst & Co", 35, "High", "SMS sent"],
  ["DL-2217", "Karoo Fresh", 78, "Critical", "Legal / NPL"],
];
