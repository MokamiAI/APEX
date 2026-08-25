// Manual thousands-grouping — deterministic on server and client. `toLocaleString`
// depends on the runtime's ICU data, which can differ between Node's SSR pass and
// the browser and produce a hydration mismatch on every load.
function groupThousands(n) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Shared Rand currency formatter — the one place every demo panel formats money.
export function fmtR(n) {
  return "R " + (isFinite(n) ? groupThousands(n) : "—");
}

export function fmtNum(n) {
  return isFinite(n) ? groupThousands(n) : "—";
}
