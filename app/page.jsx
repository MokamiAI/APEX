import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroAppFrame from "@/components/HeroAppFrame";
import ProductEmbed from "@/components/ProductEmbed";
import PayoutDemo from "@/components/PayoutDemo";
import BeforeAfter from "@/components/BeforeAfter";
import OutcomesTabs from "@/components/OutcomesTabs";
import FaqList from "@/components/FaqList";
import {
  HERO, HONEST_STATEMENT, TRUST_SIGNALS, OUTCOMES, ICP_COPY,
  TESTIMONIAL, IMPLEMENTATION, FAQ, PILLARS,
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ---------- HERO — platform-first ---------- */}
      <section className="section-dark relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(900px 500px at 78% -10%, rgba(216,243,220,0.14), transparent 60%)" }} />
        {/* Decorative circles — the same motif as the real APEX product's own auth screens */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-teal-400/10" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[360px] h-[360px] rounded-full bg-teal-400/10" />
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-5">{HERO.eyebrow}</p>
            <h1 className="font-display font-semibold text-hero text-white">
              {HERO.headlineA}
            </h1>
            <p className="text-lead text-slate-300 mt-7 max-w-xl">{HERO.subheadline}</p>

            <div className="flex flex-col sm:flex-row gap-3.5 mt-9">
              <Link href="/calculator" className="btn btn-primary">
                Calculate your own splits
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/book" className="btn btn-ghost">Book a 20-minute walkthrough</Link>
            </div>
            <p className="text-[13px] text-slate-400 mt-4">
              Or explore first:{" "}
              <Link href="/platform" className="text-slate-400 underline underline-offset-4 hover:text-teal-300">the platform</Link>
              {" "}·{" "}
              <Link href="/how-it-works" className="text-slate-400 underline underline-offset-4 hover:text-teal-300">how a deal flows</Link>
              {" "}·{" "}
              <Link href="/roi" className="text-slate-400 underline underline-offset-4 hover:text-teal-300">what it&apos;s costing you</Link>
            </p>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 border-t border-white/10 pt-7">
              {TRUST_SIGNALS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="num text-2xl text-white">{s.value}</dd>
                  <dd className="text-[12.5px] text-slate-400 mt-1 leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-teal-500/10 border border-teal-500/30 px-4 py-3 max-w-xl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" stroke="#6bc490" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[13.5px] text-slate-200 leading-relaxed">
                <span className="font-semibold text-white">UAT passed by the client&apos;s own Risk, Compliance &amp; Legal Officer</span>{" "}
                — zero critical or high-severity issues before go-live. One enterprise tenant live in production.
              </p>
            </div>
          </div>

          <Reveal delay={120}>
            {/* Sandbox embed point: set NEXT_PUBLIC_APEX_SANDBOX_URL to embed the live platform */}
            <ProductEmbed />
            {!process.env.NEXT_PUBLIC_APEX_SANDBOX_URL && (
              <>
                <HeroAppFrame />
                <p className="num text-[11px] text-slate-500 mt-3 text-center">
                  The real APEX Enterprise interface — 23 modules, one system. Replaced by the live sandbox at launch.
                </p>
              </>
            )}
          </Reveal>
        </div>
      </section>

      {/* ---------- PLATFORM AT A GLANCE — 9 pillars ---------- */}
      <section className="bg-navy-900 border-y border-white/5 py-14 lg:py-16">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
              <p className="eyebrow">The platform</p>
              <Link href="/platform" className="text-[13px] font-medium text-teal-400 hover:text-teal-300">
                See all 23 modules →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
              {PILLARS.map((p, i) => (
                <Link
                  key={p.id}
                  href="/platform"
                  className="group rounded-xl bg-navy-800/60 border border-navy-600/40 px-3 py-4 text-center hover:border-teal-500/50 transition-colors"
                >
                  <p className="num text-[10px] text-teal-500 mb-1.5">{(i + 1).toString().padStart(2, "0")}</p>
                  <p className="text-[11px] font-semibold text-slate-300 leading-tight group-hover:text-white transition-colors">
                    {p.name}
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- THE DIFFERENTIATOR — settlement moment ---------- */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">The differentiator</p>
            <h2 className="font-display font-semibold text-section text-ink leading-tight">
              The moment a deal settles, every investor&apos;s return calculates itself.
            </h2>
            <p className="text-[17px] leading-relaxed text-slate-600 mt-6">
              Inside the platform is a settlement engine that understands the difference between the
              company that sources the deal and the investors who fund it. When a deal settles, it
              applies each investor&apos;s model automatically — 50/50 profit split or fixed return,
              penalty and reward rates included — and shows your retained margin. No formula in a head.
              No hoping.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Automatic payout schedule published to the investor ledger",
                "WF-107 notifies every fund partner via WhatsApp",
                "Your retained margin visible in the same schedule",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-[15px] text-slate-700">
                  <span className="text-teal-600 font-bold">✓</span>{b}
                </li>
              ))}
            </ul>
            <Link href="/calculator" className="btn btn-teal mt-8">Try it on your own numbers</Link>
          </Reveal>
          <Reveal delay={120}>
            <PayoutDemo />
          </Reveal>
        </div>
      </section>

      {/* ---------- HONEST STATEMENT (compact — was its own full section) ---------- */}
      <section className="bg-navy-950 pt-20 pb-14 lg:pt-24 lg:pb-16">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-6">The honest statement</p>
            <blockquote className="font-display text-[clamp(1.4rem,2.6vw,2.25rem)] font-medium text-white leading-[1.2] max-w-3xl">
              &ldquo;{HONEST_STATEMENT}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------- BEFORE / AFTER ---------- */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">The shift</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-3xl">
              How your business runs today vs how it runs on APEX.
            </h2>
          </Reveal>
          <div className="mt-12">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* ---------- WHAT CHANGES FOR YOU ---------- */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">What changes</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-3xl">
              Four things that change the week you go live.
            </h2>
          </Reveal>
          <div className="mt-14">
            <Reveal delay={80}>
              <OutcomesTabs outcomes={OUTCOMES} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- IS THIS YOU? ---------- */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <p className="eyebrow mb-4">Is this you?</p>
            <h2 className="font-display font-semibold text-section text-ink leading-tight">
              {ICP_COPY.headline}
            </h2>
            <p className="text-[17px] leading-relaxed text-slate-600 mt-6">{ICP_COPY.body}</p>
            <Link href="/platform" className="btn btn-teal mt-8">Explore the platform</Link>
          </Reveal>
          <div className="space-y-3">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-teal-600/40 bg-teal-50 p-6">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-teal-800 mb-4">Built for you if…</p>
                <ul className="space-y-3">
                  {ICP_COPY.who.map((w) => (
                    <li key={w} className="flex gap-3 text-[15px] text-teal-900">
                      <span className="text-teal-600 font-bold">✓</span>{w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-slate-500 mb-4">Not the platform for you if…</p>
                <ul className="space-y-3">
                  {ICP_COPY.whoNot.map((w) => (
                    <li key={w} className="flex gap-3 text-[15px] text-slate-500">
                      <span className="text-slate-300 font-bold">✕</span>{w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CHANNELS (fund partners + accountants) ---------- */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Built for the whole syndication</p>
            <h2 className="font-display font-semibold text-section text-ink max-w-3xl">
              One platform. Three sides of the deal.
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl text-[15.5px] leading-relaxed">
              The operator runs the book. The fund partners fund it. The accountants audit it.
              APEX serves all three — because the same live data powers all three views.
            </p>
          </Reveal>
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="card h-full flex flex-col">
                <p className="eyebrow mb-3">For fund partners</p>
                <h3 className="font-display font-semibold text-2xl text-ink mb-3">
                  See every deal you fund, live.
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed flex-1">
                  Live per-deal visibility across every originator. Automatic payout calculations
                  at settlement. WF-107 WhatsApp notifications. Your capital, transparent.
                </p>
                <Link href="/for-fund-partners" className="btn btn-teal mt-6 self-start">See the fund partner view</Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full flex flex-col">
                <p className="eyebrow mb-3">For accountants & auditors</p>
                <h3 className="font-display font-semibold text-2xl text-ink mb-3">
                  A client book you can actually audit.
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed flex-1">
                  Audit-ready by default: 7-year trail, field-level POPIA logging, NCA compliance
                  report, maker-checker approvals. No more reconstructing from inboxes.
                </p>
                <Link href="/for-accountants" className="btn btn-teal mt-6 self-start">See the auditor&apos;s view</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="border-t border-slate-200 pt-16">
              <p className="eyebrow mb-8">In production</p>
              <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-ink leading-[1.2] max-w-4xl">
                &ldquo;{TESTIMONIAL.quote}&rdquo;
              </blockquote>
            <p className="text-[15px] text-slate-500 mt-6 font-medium">
              — {TESTIMONIAL.attribution}
            </p>
            <p className="text-[13.5px] text-slate-500 mt-3 max-w-2xl leading-relaxed">
              Full case study — with the client&apos;s name and numbers — available on request, and
              our first enterprise client takes reference calls with qualified prospects.
            </p>
            </div>
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-14 border-t border-slate-200 pt-10">
              {TESTIMONIAL.stats.map((s) => (
                <div key={s.label}>
                  <dd className="num text-3xl text-teal-700">{s.value}</dd>
                  <dd className="text-[13.5px] text-slate-500 mt-2 leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- IMPLEMENTATION ---------- */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Implementation</p>
            <h2 className="font-display font-semibold text-section text-white max-w-3xl">
              You go live in 60 days. Your data comes with you.
            </h2>
            <p className="text-slate-400 mt-5 max-w-xl text-[15px] leading-relaxed">
              The fear enterprise buyers have isn&apos;t the software — it&apos;s the migration. Here&apos;s exactly how that risk is handled.
            </p>
          </Reveal>
          <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {IMPLEMENTATION.map((s, i) => (
              <Reveal key={s.step} delay={i * 70}>
                <li className="card-dark h-full">
                  <p className="num text-teal-400 text-lg mb-3">{s.step}</p>
                  <h3 className="text-white font-semibold text-[16px] mb-2.5">{s.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-slate-400">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-14">
          <div className="lg:sticky lg:top-24 self-start">
            <Reveal>
              <p className="eyebrow mb-4">Questions</p>
              <h2 className="font-display font-semibold text-section text-ink">Asked the way you&apos;d ask them.</h2>
              <p className="text-slate-500 mt-5 text-[15px] leading-relaxed">
                No fine print games. If it isn&apos;t answered here, the walkthrough will answer it in 20 minutes.
              </p>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <FaqList items={FAQ} />
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA (urgency lane folded in) ---------- */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-content mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <p className="eyebrow mb-4">When it&apos;s urgent</p>
            <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.4rem)] text-white leading-tight max-w-3xl mx-auto">
              Your payout formula went on leave. Your next settlement is in four days.
            </h2>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto text-[16px] leading-relaxed">
              Skip the tour — import your book and see your splits now. Or book 20 minutes and
              we&apos;ll walk your deals through APEX with you, live — origination, risk, committee,
              disbursement, collections, and your investor payouts calculated in front of you.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3.5" data-suppress-sticky>
              <Link href="/import" className="btn btn-teal !px-8 !py-4 !text-[16px]">
                Import your book now
              </Link>
              <Link href="/book" className="btn btn-primary !px-8 !py-4 !text-[16px]">
                Book my walkthrough
              </Link>
            </div>
            <p className="text-[13.5px] text-slate-400 mt-6 max-w-lg mx-auto leading-relaxed">
              Go live in 60 days · 90-day warranty after every deployment · 1 enterprise tenant live in production
            </p>
            <p className="num text-[12px] text-slate-500 mt-4">
              Or go deeper now:{" "}
              <Link href="/tour" className="text-slate-400 underline underline-offset-4 hover:text-teal-400">
                take the product tour
              </Link>{" "}
              ·{" "}
              <Link href="/compliance-audit" className="text-slate-400 underline underline-offset-4 hover:text-teal-400">
                run the readiness check
              </Link>{" "}
              ·{" "}
              <Link href="/calculator" className="text-slate-400 underline underline-offset-4 hover:text-teal-400">
                try the payout calculator
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
