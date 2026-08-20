// Maps the pricing page's 3-click guide to a recommended tier, using the same
// boundaries TIERS already implies in lib/data.js (Essential: small lending teams,
// up to 5 seats; Enterprise: multi-branch and complex lenders; Growth: everything
// between).

export const DEAL_BANDS = ["10–50", "50–150", "150+"];
export const SEAT_BANDS = ["3–10", "10–25", "25+"];
export const BRANCH_BANDS = ["1", "2–4", "5+"];

export function recommendTier({ deals, seats, branches }) {
  const dealIdx = DEAL_BANDS.indexOf(deals);
  const seatIdx = SEAT_BANDS.indexOf(seats);
  const branchIdx = BRANCH_BANDS.indexOf(branches);
  if ([dealIdx, seatIdx, branchIdx].some((i) => i < 0)) return null;

  if (seatIdx === 2 || branchIdx === 2) return "Enterprise";
  if (dealIdx === 0 && seatIdx === 0 && branchIdx === 0) return "Essential";
  return "Growth";
}
