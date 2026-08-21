// Maps the pricing page's 3-click guide to a recommended tier, using the same
// boundaries TIERS already implies in lib/data.js (Essential: small books up to
// 5 fund partners; Enterprise: multi-entity/complex funds; Growth: everything between).

export const DEAL_BANDS = ["10–50", "50–150", "150+"];
export const SEAT_BANDS = ["3–10", "10–25", "25+"];
export const FUND_BANDS = ["1–5", "5–12", "12+"];

export function recommendTier({ deals, seats, funds }) {
  const dealIdx = DEAL_BANDS.indexOf(deals);
  const seatIdx = SEAT_BANDS.indexOf(seats);
  const fundIdx = FUND_BANDS.indexOf(funds);
  if ([dealIdx, seatIdx, fundIdx].some((i) => i < 0)) return null;

  if (seatIdx === 2 || fundIdx === 2) return "Enterprise";
  if (dealIdx === 0 && seatIdx === 0 && fundIdx === 0) return "Essential";
  return "Growth";
}
