import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abhinaya.co.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/company-profile",
    "/our-team",
    "/gallery",
    "/services",
    "/portfolio",
    "/news",
    "/events",
    "/contact",
    "/careers",
    "/divisions",
    "/abhinaya-techno",
    "/abhinaya-creative",
    "/abhinaya-publisher",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));
}
