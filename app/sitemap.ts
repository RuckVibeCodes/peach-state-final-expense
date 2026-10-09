import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { citySlugs } from "@/lib/cities";
import { guideSlugs } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/quote", "/about"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const cityPages = citySlugs.map((slug) => ({
    url: `${SITE_URL}/cities/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  const guidePages = guideSlugs.map((slug) => ({
    url: `${SITE_URL}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...cityPages, ...guidePages];
}
