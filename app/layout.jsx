import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyBook from "@/components/StickyBook";
import { SITE_URL } from "@/lib/data";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "APEX Enterprise — Cloud-Hosted CRM & Loan Management System",
    template: "%s — APEX Enterprise",
  },
  description:
    "APEX Enterprise is a cloud-hosted CRM and Loan Management System that replaces fragmented, manual lending — spreadsheets, email, informal approvals, reactive collections — with one integrated platform across the full lending lifecycle. Credit decisions route themselves the moment an application is ready.",
  keywords: [
    "loan management software South Africa",
    "lending CRM software",
    "automated credit approval routing",
    "POPIA compliant lending software",
    "collections and arrears software",
    "NCA compliant loan management",
  ],
  openGraph: {
    title: "APEX Enterprise — Cloud-Hosted CRM & Loan Management System",
    description:
      "One platform for the entire lending lifecycle. Credit decisions route themselves the moment an application is ready.",
    type: "website",
    locale: "en_ZA",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "APEX Enterprise — Cloud-Hosted CRM & Loan Management System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Enterprise — Cloud-Hosted CRM & Loan Management System",
    description: "One platform for the entire lending lifecycle.",
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
    "A cloud-hosted CRM and Loan Management System covering the full lending lifecycle — lead qualification, origination, approvals, loan administration, collections and reporting — for lenders replacing spreadsheets and email with one platform.",
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
