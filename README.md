# APEX Enterprise — Website (v1)

Next.js 14 (App Router) + Tailwind CSS. Built from the APEX Enterprise & GTM Brief, the 50x Master Plan, and the **real APEX Enterprise product** (Unified Financial Operating System).

## Pages (33 routes)
### Core (16)
| Route | What it is |
|---|---|
| `/` | Homepage — hero (animated settlement moment), honest statement, before/after, 4 outcomes, ICP, channel band (fund partners + accountants), testimonial, implementation, FAQ, final CTA (book + calculator + tools) |
| `/platform` | The real 23 modules across 9 pillars + workflow rules (WF-101–107), risk engine, integrations hub, reporting studio, 6 roles |
| `/tour` | **Interactive product tour** — clickable simulation of the real APEX interface, full 23-module sidebar |
| `/how-it-works` | 11-step deal workflow + 8-step collections workflow |
| `/compliance` | 8 controls, UAT validation, trust & security hub |
| `/compliance-audit` | **Interactive 12-point POPIA/NCA readiness check** — scored report naming gaps + the control that closes each |
| `/for-fund-partners` | The two-sided channel — live visibility, automatic payouts, WF-107, originator flywheel |
| `/for-accountants` | The referral channel — audit-ready by default, NCA report, referral programme |
| `/pricing` | 3 tiers + 3-click configurator |
| `/calculator` | Investor Payout Calculator (the wedge): 50/50 splits, fixed returns, penalty/reward, retained margin + Spreadsheet Risk Score |
| `/import` | **Excel import demo** — drag/drop a .csv (real in-browser parsing) or .xlsx (simulated), watch columns map to APEX fields |
| `/book` | **Booking/onboarding flow** — 3-step qualification form (fund type → book → contact) with POPIA consent, WhatsApp handoff, walkthrough and fund-onboarding variants |
| `/resources` | Index of all guides |
| `/learn/[slug]` | **15 programmatic long-tail SEO pages** (SSG, FAQPage schema, related links, tool CTAs) |
| `/sitemap.xml` | 28 URLs |
| `/robots.txt` | Allow all + sitemap |

### SEO guide pages (15)
capital-intermediary-platform · how-to-split-investor-payouts · investor-payout-calculation-south-africa · co-funder-profit-share-agreement · investor-ledger-requirements · wf-107-investor-notification · po-finance-software-south-africa · invoice-financing-software · bridging-finance-operations · what-is-a-par-bucket · popia-compliance-checklist-lenders · nca-affordability-assessment-lenders · dsar-workflow-21-business-days · credit-committee-approval-threshold · excel-to-crm-migration-lenders

## Product identity
- **APEX Enterprise** — **Unified Financial Operating System** · category: Capital Intermediary Platform
- 23 modules · 9 pillars · 6 roles (admin, manager, officer, collector, accountant, credit committee)
- Committee approval auto-triggered above R1,000,000 · Risk matrix: credit 40% / financials 30% / industry 20% / collateral 10%
- PAR buckets 1-30 / 31-60 / 61-90 / Legal-NPL · Workflow rules WF-101 → WF-107
- Integrations: WhatsApp Business (real Meta API), Xero, DocuSign, Stripe, Plaid, Slack, FNB/SBSA/Nedbank

## Run
```bash
npm install
npm run dev      # development
npm run build && npm run start   # production
```

## Sandbox embed point (hero)
Set an env var to embed the **real APEX platform** in the hero instead of the built-in interface panel:

```bash
NEXT_PUBLIC_APEX_SANDBOX_URL=https://sandbox.your-apex-instance.com npm run dev
```

When unset, `components/PayoutDemo.jsx` renders the high-fidelity interface panel (Active → Settling → payout schedule → reset). `components/ProductEmbed.jsx` is the switch; `components/ProductTour.jsx` renders the clickable 23-module tour; `components/ImportDemo.jsx` parses CSVs client-side.

## Design system
- Palette: deep navy `#04101E` / `#09111F`, white `#FFFFFF`, near-white `#F7F8FA`, teal accent `#0F766E–#0D9488`, amber CTA `#F59E0B`.
- Type: Fraunces (display serif), Inter (body), IBM Plex Mono (data only).
- Accessibility: WCAG-minded (focus states, semantic landmarks, aria labels, reduced-motion support, 4.5:1 contrast).
- The one deliberate animation is the settlement cycle; everything else responds only to direct interaction.

## Content
All copy lives in `lib/data.js` (site) and `lib/learn.js` (SEO engine) — single sources of truth.
