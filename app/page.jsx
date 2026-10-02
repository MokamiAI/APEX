import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroAppFrame from "@/components/HeroAppFrame";
import ProductEmbed from "@/components/ProductEmbed";
import PayoutDemo from "@/components/PayoutDemo";
import FaqList from "@/components/FaqList";
import {
  HERO, TRUST_SIGNALS, ICP_COPY, TESTIMONIAL, FAQ,
  PLATFORM_HIGHLIGHTS, GO_LIVE_STEPS, INTEGRATIONS,
} from "@/lib/data";

export const metadata = {
  title: "APEX Enterprise — The Unified Financial Operating System for Capital Intermediaries",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const ICONS = {
  users: "M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13 9v-1a4 4 0 0 0-3-3.9M16 4.1a3 3 0 0 1 0 5.8",
  check: "M9 13l2 2 4-4M8 3h8l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3Z",
  coins: "M12 3v18M17 7H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Zm-2.5 9.5 2 2 4-4",
};

function Icon({ name }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={ICONS[name]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-mint-50">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(900px 520px at 80% -10%, rgba(183,228,194,0.7), transparent 62%), radial-gradient(600px 400px at -10% 110%, rgba(216,243,220,0.8), transparent 60%)" }} />
        <div className="relative max-w-content mx-auto px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-14 items-center">
          <div className="min-w-0">
            <p className="eyebrow mb-5">{HERO.eyebrow}</p>
            <h1 className="font-display font-semibold text-hero text-ink">
              {HERO.headlineA}{" "}
              <span className="text-teal-500">{HERO.headlineAccent}</span>
            </h1>
            <p className="text-lead text-slate-600 mt-6 max-w-xl">{HERO.subheadline}</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/book" className="btn btn-primary">
                Book a 20-minute walkthrough
                <Arrow />
              </Link>
              <Link href="/calculator" className="btn btn-outline">Calculate your own splits</Link>
            </div>

            <div className="mt-8 inline-flex items-start gap-2.5 rounded-xl bg-white/80 border border-mint-300 px-4 py-3 max-w-xl shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-teal-500" aria-hidden="true">
                <path d={ICONS.shield} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[13.5px] text-slate-600 leading-relaxed">
                <span className="font-semibold text-ink">Live in production.</span>{" "}
                UAT passed by the client&apos;s own Risk, Compliance &amp; Legal Officer — zero critical issues at go-live.
              </p>
            </div>
          </div>

          <Reveal delay={120} className="min-w-0">
            <div className="hero-panel-wrap">
              {/* Sandbox embed point: set NEXT_PUBLIC_APEX_SANDBOX_URL to embed the live platform */}
              <ProductEmbed />
              {!process.env.NEXT_PUBLIC_APEX_SANDBOX_URL && <HeroAppFrame />}
            </div>
          </Reveal>
        </div>

        {/* Trust signals */}
        <div className="relative border-t border-mint-200 bg-white/60">
          <dl className="max-w-content mx-auto px-5 lg:px-8 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_SIGNALS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="num text-[28px] font-semibold text-teal-700 leading-none">{s.value}</dd>
                <dd className="text-[13px] text-slate-500 mt-1.5 leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- THE PLATFORM ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow mb-4">One platform · 23 modules</p>
                <h2 className="font-display font-semibold text-[clamp(1.9rem,3.2vw,2.75rem)] leading-tight text-ink">
                  Everything between the lead and the payout.
                </h2>
                <p className="text-[17px] leading-relaxed text-slate-600 mt-5">
                  Replace the CRM, the loan tracker, the payout workbook and the audit folder with
                  one system built for companies that source deals and fund them with investor capital.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link href="/platform" className="btn btn-teal">See all 23 modules</Link>
                <Link href="/tour" className="btn btn-outline">Take the tour</Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATFORM_HIGHLIGHTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 60}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-mint-300 hover:bg-mint-50">
                  <div className="w-10 h-10 rounded-xl bg-mint-100 text-teal-600 flex items-center justify-center mb-4">
                    <Icon name={p.icon} />
                  </div>
                  <h3 className="text-[16.5px] font-semibold text-ink">{p.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-slate-600 mt-2">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-[13.5px] text-slate-500 text-center">
              <span className="font-semibold text-slate-700">Connects to</span>{" "}
              {INTEGRATIONS.map((x) => x.name).join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- THE DIFFERENTIATOR — settlement moment ---------- */}
      <section className="bg-mint-50 border-y border-mint-200 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">The differentiator</p>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.2vw,2.75rem)] text-ink leading-tight">
              The moment a deal settles, every investor&apos;s return calculates itself.
            </h2>
            <p className="text-[17px] leading-relaxed text-slate-600 mt-5">
              50/50 profit split or fixed return, penalty and reward rates included — applied per
              investor, per deal, automatically. No formula in someone&apos;s head. No recalculating
              fourteen splits by hand.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Payout schedule published straight to the investor ledger",
                "Every fund partner notified on WhatsApp (WF-107)",
                "Your retained margin visible in the same schedule",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-slate-700">
                  <span className="text-teal-500 font-bold">✓</span>{b}
                </li>
              ))}
            </ul>
            <Link href="/calculator" className="btn btn-teal mt-8">
              Try it on your own numbers
              <Arrow />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <PayoutDemo />
          </Reveal>
        </div>
      </section>

      {/* ---------- WHO IT'S FOR + PROOF ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <Reveal>
            <p className="eyebrow mb-4">Built for you if…</p>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.5rem)] text-ink leading-tight">
              You source the deal. Your investors fund it. You run everything in between.
            </h2>
            <ul className="mt-7 space-y-3">
              {ICP_COPY.who.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] text-slate-700">
                  <span className="text-teal-500 font-bold">✓</span>{w}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13.5px] text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-600">Not a fit</span> if you fund 100% of every
              deal yourself, lend as a retail bank, or run microfinance.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="h-full rounded-3xl bg-mint-100 border border-mint-200 p-7 sm:p-9 flex flex-col">
              <p className="eyebrow mb-5">In production</p>
              <blockquote className="font-display text-[clamp(1.25rem,2vw,1.6rem)] font-medium text-ink leading-snug">
                &ldquo;{TESTIMONIAL.quote}&rdquo;
              </blockquote>
              <figcaption className="text-[14px] text-slate-600 mt-5 font-medium">
                — {TESTIMONIAL.attribution}
              </figcaption>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 mt-8 pt-7 border-t border-mint-300/70">
                {TESTIMONIAL.stats.map((s) => (
                  <div key={s.label}>
                    <dd className="num text-[26px] font-semibold text-teal-700 leading-none">{s.value}</dd>
                    <dd className="text-[13px] text-slate-600 mt-1.5 leading-snug">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-[12.5px] text-slate-500 mt-6">
                Full case study and reference calls available to qualified prospects.
              </p>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- GO LIVE ---------- */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div className="max-w-2xl">
                <p className="eyebrow mb-4">Already built · live in 60 days</p>
                <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.5rem)] text-ink leading-tight">
                  No development project. Just your book, onboarded.
                </h2>
              </div>
              <Link href="/why-apex" className="text-[14.5px] font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1.5 shrink-0">
                The full case for APEX <Arrow />
              </Link>
            </div>
          </Reveal>
          <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GO_LIVE_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="h-full rounded-2xl bg-white border border-slate-200 p-6">
                  <p className="num text-[13px] font-semibold text-teal-500">0{i + 1}</p>
                  <h3 className="text-[16px] font-semibold text-ink mt-2">{s.title}</h3>
                  <p className="text-[14px] leading-relaxed text-slate-600 mt-1.5">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-14">
          <div className="lg:sticky lg:top-24 self-start">
            <Reveal>
              <p className="eyebrow mb-4">Questions</p>
              <h2 className="font-display font-semibold text-[clamp(1.7rem,3vw,2.5rem)] text-ink leading-tight">
                Asked the way you&apos;d ask them.
              </h2>
              <p className="text-slate-500 mt-4 text-[15px] leading-relaxed">
                Anything not answered here, the walkthrough answers in 20 minutes.
              </p>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <FaqList items={FAQ} />
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-mint-300 px-6 py-14 sm:px-12 lg:py-16 text-center"
              style={{ background: "radial-gradient(700px 300px at 50% -20%, rgba(183,228,194,0.9), transparent 70%), #eef7f1" }}>
              <h2 className="font-display font-semibold text-[clamp(1.8rem,3.6vw,3rem)] text-ink leading-tight max-w-3xl mx-auto">
                Your next settlement shouldn&apos;t depend on one person&apos;s spreadsheet.
              </h2>
              <p className="text-slate-600 mt-5 max-w-xl mx-auto text-[16px] leading-relaxed">
                Book 20 minutes and we&apos;ll run your own deals through APEX, live — investor payouts
                calculated in front of you. Or import your book and see it yourself now.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3" data-suppress-sticky>
                <Link href="/book" className="btn btn-primary !px-8 !py-4 !text-[16px]">
                  Book my walkthrough
                </Link>
                <Link href="/import" className="btn btn-outline !px-8 !py-4 !text-[16px]">
                  Import your book now
                </Link>
              </div>
              <p className="text-[13px] text-slate-500 mt-6">
                Platform already built · 90-day warranty after every deployment · POPIA &amp; NCA ready
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
