import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

// Lead capture endpoint (POPIA-aware):
// - Validates + appends to a server-side leads file (leads.json in the repo root)
// - Forwards to a CRM webhook if LEAD_WEBHOOK_URL is set (HubSpot / Pipedrive / your backend)
// - Logs a notification line so ops can wire WhatsApp/email alerts to Marcus
// - Returns a calendar link (NEXT_PUBLIC_CALENDAR_URL) so the client can self-book

const NURTURE_BY_TYPE = {
  walkthrough: "walkthrough-request",
  "fund-onboarding": "fund-partner",
  calculator: "calculator-user",
  audit: "audit-report",
  newsletter: "newsletter",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const { type, payload = {}, source = {} } = body;
  if (!type || !payload) {
    return Response.json({ ok: false, error: "type and payload required" }, { status: 400 });
  }

  for (const key of ["name", "company", "email", "whatsapp", "notes"]) {
    if (payload[key] !== undefined && (typeof payload[key] !== "string" || payload[key].length > 500)) {
      return Response.json({ ok: false, error: `invalid ${key}` }, { status: 400 });
    }
  }

  const record = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type, // 'walkthrough' | 'fund-onboarding' | 'calculator' | 'audit' | 'newsletter'
    nurture: NURTURE_BY_TYPE[type] || "general",
    payload,
    source,
    receivedAt: new Date().toISOString(),
  };

  // 1) Persist locally
  try {
    const file = path.join(process.cwd(), "leads.json");
    let leads = [];
    try {
      const existing = await fs.readFile(file, "utf8");
      leads = JSON.parse(existing);
    } catch {
      // first write
    }
    leads.push(record);
    await fs.writeFile(file, JSON.stringify(leads, null, 2), "utf8");
  } catch (err) {
    console.error("lead write failed", err);
    return Response.json({ ok: false, error: "storage error" }, { status: 500 });
  }

  // 2) Forward to CRM webhook (best-effort; never fails the request)
  const webhook = process.env.LEAD_WEBHOOK_URL || "";
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
        signal: AbortSignal.timeout(5000),
      });
    } catch (err) {
      console.error("webhook forward failed", err);
    }
  }

  // 3) Ops notification line — wire this to WhatsApp/email in production
  const contact = payload.whatsapp || payload.email || "(no contact)";
  console.log(
    `[LEAD] ${record.type} | ${contact} | ${payload.company || "—"} | ${payload.deployment || "—"} | ${payload.fundTypes?.join(",") || ""} | ${JSON.stringify(source).slice(0, 120)}`
  );

  return Response.json({
    ok: true,
    id: record.id,
    nurture: record.nurture,
    calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
    message: "Received. Response SLA: within one business day.",
  });
}
