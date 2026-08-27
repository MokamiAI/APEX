import Link from "next/link";
import Reveal from "@/components/Reveal";
import FaqList from "@/components/FaqList";
import PricingConfigurator from "@/components/PricingConfigurator";
import { TIERS, FIRST_WEEK } from "@/lib/data";

export const metadata = { title: "Pricing" };

const PRICING_FAQ = [
  {
    q: "Is pricing per seat?",
    a: "Your quote is based on your book — deal volume, seats and investor funds — not a flat per-seat menu. Use the guide below to see your range in three clicks; we confirm a fixed quote before you commit.",
  },
  {
    q: "How long is the contract?",
    a: "Standard agreements are annual, with guided onboarding included in your first year — the platform is already built, so there's no development timeline to wait on. Enterprise agreements can be tailored to your entity structure and compliance calendar.",
  },
  {
    q: "Are there setup fees?",
    a: "Data migration, configuration and team training are scoped into your quote — you see the full picture before you sign. No surprise invoices at go-live.",
  },
  {
    q: "What does Enterprise include that Growth doesn't?",
    a: "Custom investor arrangements and fund structures, a dedicated onboarding team, custom reports and integrations, SLA-backed support with a named engineer, and white-glove deployment.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-4">Pricing</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              Your quote is based on your book. Not ours.
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">
              Deal volume, seats, investor funds. Three inputs, an honest range, and a conversation only
              when you&apos;re ready. No published price list — every book is different.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Configurator */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <PricingConfigurator />
          </Reveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className={`h-full rounded-2xl p-8 flex flex-col ${
                  t.highlight
                    ? "bg-navy-950 border border-teal-500/40 shadow-2xl shadow-teal-900/20"
                    : "bg-white border border-slate-200"
                }`}>
                  <div className="flex items-center justify-between">
                    <h2 className={`font-display font-semibold text-2xl ${t.highlight ? "text-white" : "text-ink"}`}>{t.name}</h2>
                    {t.highlight && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-navy-950 bg-gold-500 rounded-full px-3 py-1">
                        Most common
                      </span>
                    )}
                  </div>
                  <p className={`text-[13.5px] mt-1.5 mb-6 ${t.highlight ? "text-teal-400" : "text-slate-500"}`}>{t.tag}</p>
                  <ul className={`space-y-3 flex-1 ${t.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[14.5px] leading-snug">
                        <span className={t.highlight ? "text-teal-400" : "text-teal-600"}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/calculator" className={`btn w-full ${t.highlight ? "btn-primary" : "btn-teal"}`}>
                      {t.highlight ? "Start with a live split" : "Check your range"}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* First week */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Your first week</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-2xl">
              What you get from the first week — before you&apos;ve finished your coffee.
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FIRST_WEEK.map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 60}>
                <li className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 h-full">
                  <span className="num text-teal-600 text-lg shrink-0">0{i + 1}</span>
                  <span className="text-[15px] font-medium text-slate-700 leading-snug">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-14">
          <Reveal>
            <p className="eyebrow mb-4">Pricing questions</p>
            <h2 className="font-display font-semibold text-section text-ink">Asked straight.</h2>
          </Reveal>
          <Reveal delay={80}>
            <FaqList items={PRICING_FAQ} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
