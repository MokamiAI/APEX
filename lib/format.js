// Shared Rand currency formatter — the one place every demo panel formats money.
export function fmtR(n) {
  return "R " + (isFinite(n) ? Math.round(n).toLocaleString("en-ZA") : "—");
}
