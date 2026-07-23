import type { MetadataRoute } from "next";

// TODO: replace with your real production domain once purchased
const BASE_URL = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/academics",
    "/facilities",
    "/gallery",
    "/events",
    "/careers",
    "/contact",
    "/admissions"
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));
}
