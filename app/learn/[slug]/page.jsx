import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import FaqList from "@/components/FaqList";
import { LEARN, getLearnBySlug, getRelated, CONTENT_REVIEWED_AT } from "@/lib/learn";

const CTA_MAP = {
  calculator: { title: "Try the investor payout calculator", body: "Free, no signup. Your numbers stay in your browser.", link: "/calculator", label: "Calculate your splits live", icon: "calc" },
  audit: { title: "Run the 12-point readiness check", body: "A scored report naming your compliance gaps — and the control that closes each.", link: "/compliance-audit", label: "Start the readiness check", icon: "shield" },
  platform: { title: "Explore the platform", body: "Twenty-three modules across nine pillars — from lead to investor paid out.", link: "/platform", label: "See the 23 modules", icon: "grid" },
  tour: { title: "Tour the interface", body: "Click through the real modules — the settlement engine, PAR buckets, investor ledger.", link: "/tour", label: "Take the product tour", icon: "play" },
  fund: { title: "For fund partners", body: "Live per-deal visibility, automatic payouts, WF-107 WhatsApp notifications.", link: "/for-fund-partners", label: "See the fund partner view", icon: "fund" },
  how: { title: "See the workflows", body: "Eleven deal steps and eight collections steps — with the system doing the remembering.", link: "/how-it-works", label: "See how it works", icon: "flow" },
  import: { title: "See your data map itself", body: "Upload a sample workbook and watch the columns map to APEX fields.", link: "/import", label: "Try the import demo", icon: "import" },
};

const ICON_PATHS = {
  calc: "M9 3v18M4 8h10a3 3 0 0 1 0 6H6a3 3 0 0 0 0 6h10",
  shield: "M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z",
  grid: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z",
  play: "M8 5v14l11-7L8 5Z",
  fund: "M3 21V8m6 13V3m6 18v-9m6 9V5",
  flow: "M4 6h16M4 12h16M4 18h16",
  import: "M12 3v12m0 0 4-4m-4 4-4-4M4 21h16",
};

export function generateStaticParams() {
  return LEARN.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const item = getLearnBySlug(params.slug);
  if (!item) return { title: "Guide — APEX Enterprise" };
  return {
    title: `${item.title} | APEX Enterprise`,
    description: item.meta,
  };
}

export default function LearnPage({ params }) {
  const item = getLearnBySlug(params.slug);
  if (!item) return notFound();

  const cta = CTA_MAP[item.cta.type];
  const related = getRelated(LEARN, item.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-16 lg:pt-24">
          <Reveal>
            <Link href="/resources" className="num text-[12px] uppercase tracking-[0.16em] text-teal-500 hover:text-teal-400">
              ← Guides & resources
            </Link>
            <p className="eyebrow mt-6 mb-3">{item.category}</p>
            <h1 className="font-display font-semibold text-section text-white max-w-3xl">
              {item.title}
            </h1>
            <p className="text-lead text-slate-300 mt-6 max-w-2xl">{item.intro}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-[12px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                By the APEX Enterprise product &amp; compliance team
              </span>
              <span className="num">Guide last reviewed {CONTENT_REVIEWED_AT}</span>
              <span className="num">Reviewed by Intermediate Data Systems (Pty) Ltd</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <div className="space-y-12">
                {item.sections.map((s) => (
                  <div key={s.h}>
                    <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-4">{s.h}</h2>
                    <p className="text-[16.5px] leading-relaxed text-slate-600">{s.p}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="bg-navy-900 border border-navy-700 rounded-2xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={ICON_PATHS[cta.icon]} stroke="#6bc490" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-display font-semibold text-2xl text-white">{cta.title}</h2>
                  <p className="text-slate-400 mt-2 max-w-xl text-[14.5px] leading-relaxed">{cta.body}</p>
                </div>
              </div>
              <Link href={cta.link} className="btn btn-primary whitespace-nowrap">{cta.label}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-14">
          <Reveal>
            <p className="eyebrow mb-4">Common questions</p>
            <h2 className="font-display font-semibold text-section text-ink">Asked straight.</h2>
          </Reveal>
          <Reveal delay={80}>
            <FaqList items={item.faq} />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow mb-6">Keep reading</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.slug} href={`/learn/${r.slug}`} className="card group h-full block hover:border-teal-500/50 transition-colors">
                  <p className="num text-[11px] uppercase tracking-[0.14em] text-teal-700 mb-2">{r.category}</p>
                  <h3 className="text-[15.5px] font-semibold text-ink leading-snug group-hover:text-teal-700 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 mt-2 leading-relaxed line-clamp-3">{r.intro}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
