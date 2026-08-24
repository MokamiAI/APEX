import Link from "next/link";

export const metadata = {
  title: "Privacy policy (POPIA)",
  description:
    "How Intermediate Data Systems (Pty) Ltd processes personal information in line with the Protection of Personal Information Act (POPIA), South Africa.",
};

const SECTIONS = [
  {
    h: "1. Who we are",
    body: "Intermediate Data Systems (Pty) Ltd is a South African company that builds and operates APEX Enterprise, the unified financial operating system for capital intermediaries. We act as a responsible party under the Protection of Personal Information Act 4 of 2013 (POPIA) when we process personal information about our own prospects, clients and website visitors.",
  },
  {
    h: "2. What we collect on this website",
    body: "When you use this website we may process: contact details you submit (name, company, email, WhatsApp number) through our booking form, calculator or readiness check; the deal inputs you enter in our tools (which stay in your browser unless you choose to submit them); and standard technical data (pages visited, device type) used to improve the site.",
  },
  {
    h: "3. Why we process it",
    body: "We process personal information to arrange and conduct product walkthroughs, respond to enquiries, qualify prospective clients, provide the tools you use, and — with consent — send relevant follow-up communications. We do not sell personal information.",
  },
  {
    h: "4. Consent and withdrawal",
    body: "Where we rely on consent, it is explicit, informed and recorded. You may withdraw consent at any time by emailing sales@intermediateds.co.za, and we will stop the relevant processing without penalty.",
  },
  {
    h: "5. Sharing and transfers",
    body: "We share personal information only with service providers who process it on our behalf under POPIA-compliant agreements (for example our CRM and messaging providers), and only to the extent needed to operate this website and our business. We do not transfer personal information outside South Africa except to providers offering adequate protection, and only where necessary.",
  },
  {
    h: "6. Security safeguards",
    body: "We apply appropriate technical and organisational measures: encryption in transit and at rest, role-based access control, field-level access logging on personal information, and monitoring for unusual access patterns.",
  },
  {
    h: "7. Retention",
    body: "Personal information is retained only as long as needed for the purposes it was collected, or as required by law (for example record-keeping obligations), after which it is securely deleted.",
  },
  {
    h: "8. Data subject rights",
    body: "Under POPIA you may request access to, correction of, or deletion of your personal information, and you may object to processing. We respond to such requests within 21 business days, tracked through our DSAR workflow.",
  },
  {
    h: "9. Cookies",
    body: "This site uses only what is needed to operate and measure its performance. Where analytics are enabled, they are configured to respect your choices where possible.",
  },
  {
    h: "10. Contact and complaints",
    body: "For any privacy matter, contact our team at sales@intermediateds.co.za. You also have the right to lodge a complaint with the Information Regulator (South Africa) at inforeg@justice.gov.za.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="section-dark">
        <div className="max-w-content mx-auto px-5 lg:px-8 pt-20 pb-14 lg:pt-24">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display font-semibold text-section text-white max-w-3xl">
            Privacy policy — POPIA
          </h1>
          <p className="text-slate-400 mt-4 text-[15px] max-w-2xl leading-relaxed">
            Effective date: {new Date().toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })} ·
            Applies to Intermediate Data Systems (Pty) Ltd and the APEX Enterprise website.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-content mx-auto px-5 lg:px-8 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-14">
          <div className="lg:sticky lg:top-24 self-start">
            <p className="eyebrow mb-4">On this page</p>
            <ul className="space-y-2.5">
              {SECTIONS.map((s) => (
                <li key={s.h}>
                  <a href={`#${s.h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="text-[13.5px] text-slate-500 hover:text-teal-700 transition-colors">
                    {s.h}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10 max-w-3xl">
            {SECTIONS.map((s) => (
              <div key={s.h} id={s.h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}>
                <h2 className="font-display font-semibold text-2xl text-ink mb-3">{s.h}</h2>
                <p className="text-[15.5px] leading-relaxed text-slate-600">{s.body}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Questions about your data? Email{" "}
                <a href="mailto:sales@intermediateds.co.za" className="text-teal-700 font-semibold">sales@intermediateds.co.za</a>{" "}
                — we respond within 21 business days, tracked through our DSAR workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
