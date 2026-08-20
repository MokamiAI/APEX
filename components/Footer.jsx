import Link from "next/link";
import { NAV, COMPANY, SITE_VERSION } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section-dark border-t border-white/5">
      <div className="max-w-content mx-auto px-5 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ApexLogo.png" alt={COMPANY.name} className="h-6 w-auto brightness-0 invert" />
            </div>
            <p className="text-[14px] leading-relaxed text-slate-400 max-w-sm">
              The {COMPANY.category.toLowerCase()} — a cloud-hosted CRM and Loan Management System
              covering the full lending lifecycle. 24 modules across 8 stages.
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
                  Arrears &amp; approval impact calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-slate-500 mb-4">Contact</p>
            <ul className="space-y-2.5 text-[14px] text-slate-400">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-teal-400 transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.support}`} className="hover:text-teal-400 transition-colors">
                  {COMPANY.support}
                </a>
              </li>
              <li className="text-slate-500">Lending operations software, South Africa</li>
            </ul>
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
