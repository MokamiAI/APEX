import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyBook from "@/components/StickyBook";
import { SITE_URL } from "@/lib/data";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "APEX Enterprise — The Unified Financial Operating System for Capital Intermediaries",
    template: "%s — APEX Enterprise",
  },
  description:
    "APEX Enterprise is the unified financial operating system for capital intermediaries — companies that source deals and fund them with investor capital. 23 modules across CRM, lending, investor & fund management, collections, reporting, automation and compliance. Investor payouts calculate themselves the moment a deal settles.",
  keywords: [
    "capital intermediary platform",
    "loan management software South Africa",
    "PO financing platform",
    "investor payout calculation",
    "POPIA compliant lending software",
    "fund partner software",
    "investor payout platform South Africa",
  ],
  openGraph: {
    title: "APEX Enterprise — Unified Financial Operating System",
    description:
      "The unified financial operating system for capital intermediaries. 23 modules, one platform — and the moment a deal settles, every investor's return calculates itself.",
    type: "website",
    locale: "en_ZA",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "APEX Enterprise — Unified Financial Operating System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Enterprise — Unified Financial Operating System",
    description: "The unified financial operating system for capital intermediaries.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Intermediate Data Systems (Pty) Ltd",
  email: "marcus@intermediateds.co.za",
  address: { "@type": "PostalAddress", addressCountry: "ZA" },
  brand: { "@type": "Brand", name: "APEX Enterprise" },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "APEX Enterprise",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "The unified financial operating system for capital intermediaries — PO financiers, invoice financiers and bridging lenders who syndicate investor capital.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyBook />
      </body>
    </html>
  );
}
