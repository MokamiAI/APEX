"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Slim sticky conversion bar: appears after the visitor scrolls past the hero
// on most pages. Hidden on /book and /calculator (where conversion is the page).
export default function StickyBook() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [suppressed, setSuppressed] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path === "/book" || path === "/calculator") return;
    const onScroll = () => setScrolledPast(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  // Hide the bar whenever an in-page CTA (e.g. the homepage urgency lane and
  // final CTA) is on screen — otherwise the two float on top of each other.
  useEffect(() => {
    if (path === "/book" || path === "/calculator") return;
    const targets = Array.from(document.querySelectorAll("[data-suppress-sticky]"));
    if (targets.length === 0) {
      setSuppressed(false);
      return;
    }
    const intersecting = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) intersecting.add(e.target);
          else intersecting.delete(e.target);
        });
        setSuppressed(intersecting.size > 0);
      },
      { threshold: 0.2 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [path]);

  if (!scrolledPast || suppressed) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <div className="flex items-center gap-3 rounded-full bg-white/95 backdrop-blur border border-slate-200 shadow-xl shadow-black/10 pl-5 pr-2 py-2">
        <p className="text-[13.5px] font-semibold text-ink">
          See APEX on your own book — 20 minutes, live.
        </p>
        <Link href="/book" className="btn btn-primary !py-2 !px-4 !text-[13px]">
          Book a walkthrough
        </Link>
      </div>
    </div>
  );
}
