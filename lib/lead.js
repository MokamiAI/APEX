"use client";

// Client-side helper: POST a lead to the server-side capture endpoint.
// Tracks UTM params + page for source attribution.
export async function captureLead({ type, payload }) {
  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  const source = {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    page: typeof window !== "undefined" ? window.location.pathname : undefined,
    referrer: typeof document !== "undefined" ? document.referrer : undefined,
    ts: new Date().toISOString(),
  };
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, payload, source }),
    });
    return await res.json();
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
