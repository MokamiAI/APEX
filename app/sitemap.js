import { LEARN } from "@/lib/learn";
import { SITE_URL } from "@/lib/data";

const BASE = SITE_URL;

const STATIC_PAGES = [
  "", "/platform", "/tour", "/how-it-works", "/compliance", "/compliance-audit",
  "/for-fund-partners", "/for-accountants", "/pricing", "/calculator", "/import",
  "/book", "/resources", "/privacy", "/terms", "/roi", "/why-apex",
];

export default function sitemap() {
  const now = new Date();
  const staticRoutes = STATIC_PAGES.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
  const learnRoutes = LEARN.map((l) => ({
    url: `${BASE}/learn/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticRoutes, ...learnRoutes];
}
