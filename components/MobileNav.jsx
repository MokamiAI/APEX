"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/data";

export default function MobileNav({ open, onClose }) {
  const path = usePathname();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-950/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-[70] w-[86%] max-w-sm bg-navy-950 border-l border-white/10 lg:hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-white/10 shrink-0">
              <span className="font-display text-lg font-semibold text-white">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-3.5 rounded-lg text-[16px] font-medium ${
                    path === item.href ? "text-white bg-white/5" : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-white/10 shrink-0">
              <Link href="/book" className="btn btn-primary w-full">
                Book a walkthrough
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
