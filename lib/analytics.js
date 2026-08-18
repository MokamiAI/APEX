"use client";

// Central analytics helper — pushes to dataLayer (GTM/GA4 compatible) and gtag if present.
// Every conversion-relevant action on the site fires one of these events.

export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params, ts: new Date().toISOString() });
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
  } catch (e) {
    // analytics must never break the page
  }
}

export const EVENTS = {
  viewTool: "view_tool",
  calculatorCapture: "calculator_capture",
  auditReportRequest: "audit_report_request",
  walkthroughRequest: "walkthrough_request",
  fundOnboardingRequest: "fund_onboarding_request",
  whatsappClick: "whatsapp_click",
  ctaClick: "cta_click",
  leadSent: "lead_sent",
};
