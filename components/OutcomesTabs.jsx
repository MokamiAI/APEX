"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OutcomePanel from "@/components/OutcomePanels";

const AUTO_ADVANCE_MS = 6000;

export default function OutcomesTabs({ outcomes }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % outcomes.length), AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [active, paused, reducedMotion, outcomes.length]);

  const select = (i) => {
    setActive(i);
    setPaused(true);
  };

  const current = outcomes[active];

  return (
    <div
      className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab list */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-5 px-5 lg:mx-0 lg:px-0 pb-1 lg:pb-0">
        {outcomes.map((o, i) => (
          <button
            key={o.n}
            type="button"
            onClick={() => select(i)}
            aria-pressed={active === i}
            className={`relative shrink-0 lg:shrink w-[240px] lg:w-full text-left rounded-xl border px-4 py-3.5 transition-colors overflow-hidden ${
              active === i
                ? "border-teal-500/50 bg-teal-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className={`num text-[13px] ${active === i ? "text-teal-700" : "text-slate-400"}`}>{o.n}</span>
              <span className={`text-[13.5px] font-semibold leading-snug ${active === i ? "text-teal-900" : "text-slate-600"}`}>
                {o.tabLabel}
              </span>
            </div>
            {active === i && !paused && !reducedMotion && (
              <motion.div
                key={active}
                className="absolute left-0 bottom-0 h-[2px] bg-teal-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.n}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="num text-teal-600 text-[15px] mb-3">{current.n}</p>
            <h3 className="font-display font-semibold text-[clamp(1.5rem,2.4vw,2.1rem)] text-ink leading-tight mb-4">
              {current.headline}
            </h3>
            <p className="text-[16.5px] leading-relaxed text-slate-600">{current.body}</p>
          </div>
          <div>
            <OutcomePanel type={current.panel} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
