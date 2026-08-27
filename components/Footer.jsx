import Link from "next/link";
import { NAV, COMPANY, SITE_VERSION } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section-dark border-t border-white/5">
      <div className="max-w-wide mx-auto px-5 lg:px-8 xl:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ApexLogo.png" alt={COMPANY.name} className="h-6 w-auto brightness-0 invert" />
            </div>
            <p className="text-[14px] leading-relaxed text-slate-400 max-w-sm">
              The {COMPANY.category.toLowerCase()} — a unified financial operating system
              built for PO financiers, invoice financiers and bridging lenders who syndicate
              investor capital. 23 modules across 9 functional pillars.
            </p>
            <p className="num text-[12px] text-slate-500 mt-4">
              Built & maintained by {COMPANY.maker} · {COMPANY.country}
            </p>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-slate-500 mb-4">Site</p>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tour" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  Product tour
                </Link>
              </li>
              <li>
                <Link href="/for-fund-partners" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  For fund partners
                </Link>
              </li>
              <li>
                <Link href="/for-accountants" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  For accountants &amp; auditors
                </Link>
              </li>
              <li>
                <Link href="/compliance-audit" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  Compliance readiness check
                </Link>
              </li>
              <li>
                <Link href="/import" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  Import demo (Excel → APEX)
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  Book a walkthrough
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  Guides & resources
                </Link>
              </li>
              <li>
                <Link href="/roi" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  ROI calculator
                </Link>
              </li>
              <li>
                <Link href="/why-apex" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  Why APEX
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-[14px] text-slate-400 hover:text-teal-400 transition-colors">
                  Investor payout calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-slate-500 mb-4">Contact</p>
            <div className="space-y-5 text-[14px]">
              <div>
                <p className="text-white font-semibold text-[13px] mb-1.5">Address</p>
                <p className="text-slate-400 leading-relaxed">
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.area}
                  <br />
                  {COMPANY.address.region}, {COMPANY.address.postalCode}
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-[13px] mb-1.5">Phone</p>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <p className="text-white font-semibold text-[13px] mb-1.5">Email</p>
                <a href={`mailto:${COMPANY.email}`} className="text-slate-400 hover:text-teal-400 transition-colors break-all">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-slate-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy policy (POPIA)</Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of service</Link>
            <Link href="/sitemap.xml" className="hover:text-teal-400 transition-colors">Sitemap</Link>
          </div>
          <p className="num flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" />
            APEX Enterprise {SITE_VERSION} · live build · POPIA-compliant · NCA-aware
          </p>
        </div>
        <p className="mt-3 text-[11px] text-slate-600">
          © {new Date().getFullYear()} {COMPANY.maker}. All rights reserved. · This site uses analytics
          cookies to measure performance — see our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-teal-400">privacy policy</Link>.
        </p>
      </div>
    </footer>
  );
}
