// Shared illustrative sample data for demo/mockup panels across the site
// (hero frame, product tour, payout demo, outcome panels, calculator seed state).
// One source of truth so the "same deal" looks the same everywhere it appears.

export const SAMPLE_DEAL = {
  ref: "PO-1029",
  client: "Meadowline Suppliers (Pty) Ltd",
  amount: 150000,
  term: "45 days",
  income: 24866,
  retained: 4144,
};

export const SAMPLE_INVESTORS = [
  { name: "Sizwe Capital", kind: "split", rate: null, contribution: 60000, payout: 79400, status: "Paid" },
  { name: "Marlin Fund", kind: "fixed", rate: 12, contribution: 50000, payout: 60200, status: "Paid" },
  { name: "Umoya Partners", kind: "split", rate: null, contribution: 40000, payout: 52933, status: "Scheduled" },
  { name: "Greenway Trust", kind: "fixed", rate: 10, contribution: 20000, payout: 22333, status: "Scheduled" },
];

// e.g. investorModelLabel(inv) => "50/50 profit split" · investorModelLabel(inv, { short: true }) => "50/50 split"
export function investorModelLabel(inv, { short = false } = {}) {
  if (inv.kind === "fixed") return short ? `Fixed ${inv.rate}%` : `Fixed return ${inv.rate}%`;
  return short ? "50/50 split" : "50/50 profit split";
}

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
