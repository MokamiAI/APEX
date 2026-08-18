import Link from "next/link";
import Reveal from "@/components/Reveal";
import { DEAL_FLOW, COLLECTIONS_FLOW } from "@/lib/data";

const ACTOR_STYLE = {
  System: "bg-teal-500/10 text-teal-400 border-teal-500/30",
  "Your team": "bg-white/5 text-slate-300 border-white/15",
  "Your MD": "bg-gold-500/10 text-gold-500 border-gold-500/30",
};

function FlowList({ items, title, autoCount }) {
  return (
    <div>
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
        <h2 className="font-display font-semibold text-section text-ink">{title}</h2>
        <p className="num text-[13px] text-teal-700">
          {autoCount} steps automated
        </p>
      </div>
      <ol className="relative border-l border-slate-200 ml-3 space-y-8">
        {items.map((step, i) => (
          <li key={i} className="pl-8 relative">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-teal-600 shadow" />
            <div className="flex items-center gap-3 flex-wrap mb-1.5">
              <span className={`text-[11px] font-semibold uppercase tracking-wide border rounded-full px-2.5 py-0.5 ${ACTOR_STYLE[step.actor]}`}>
                {step.actor}
              </span>
              <span className="num text-[12px] text-slate-400">Step {(i + 1).toString().padStart(2, "0")}</span>
            </div>
            <h3 className="text-[17px] font-semibold text-ink">{step.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-slate-600 mt-1.5 max-w-2xl">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const metadata = { title: "How it works" };

export default function HowItWorksPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">How it works</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              Every step a deal takes — without you doing it manually.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              Who does what, at every step. Eleven steps from application received to investor paid out,
              and eight from first missed payment to recovered or restructured.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <FlowList title="The deal workflow" items={DEAL_FLOW} autoCount={4} />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <FlowList title="The collections workflow" items={COLLECTIONS_FLOW} autoCount={3} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.6rem)] text-ink leading-tight">
              The settlement moment is where APEX earns its keep.
            </h2>
            <p className="text-[16px] leading-relaxed text-slate-600 mt-5">
              When a deal settles, every investor&apos;s return is calculated automatically — 50/50 split or fixed
              return, penalty and reward rates applied, your retained margin shown. No formula in a head.
              No hope. Just the schedule, published and notified.
            </p>
            <Link href="/calculator" className="btn btn-teal mt-7">Try it on your numbers</Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-navy-950 rounded-2xl border border-navy-700 p-7">
              <p className="ui-kicker !text-slate-500 mb-4">The 20-minute walkthrough, compressed</p>
              <ol className="space-y-4">
                {[
                  ["1", "You enter a deal from your own book", "amount, term, investors"],
                  ["2", "APEX applies every model", "50/50 splits, fixed returns, penalties, rewards"],
                  ["3", "The payout schedule appears", "every investor's return, your retained margin"],
                  ["4", "You decide", "this is what every settlement looks like after go-live"],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-4">
                    <span className="num text-teal-400 w-5 shrink-0">{n}</span>
                    <div>
                      <p className="text-[15px] font-semibold text-white">{t}</p>
                      <p className="text-[13px] text-slate-400 mt-0.5">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
