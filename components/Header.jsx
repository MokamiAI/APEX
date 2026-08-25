"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/data";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const path = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
    <header className="sticky top-0 z-50 bg-navy-950/90 backdrop-blur border-b border-white/5">
      <div className="max-w-wide mx-auto px-5 lg:px-8 xl:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ApexLogo.png" alt="APEX" className="h-6 w-auto brightness-0 invert shrink-0" />
          <span className="hidden sm:block text-[11px] uppercase tracking-[0.14em] text-slate-400 border-l border-white/15 pl-3">
            Unified Financial Operating System
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] font-medium transition-colors ${
                path === item.href ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="btn btn-primary !px-4 !py-2.5 !text-[14px]"
          >
            Book a walkthrough
          </Link>
          <button
            type="button"
            onClick={() => setNavOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            aria-label="Open menu"
            aria-expanded={navOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
