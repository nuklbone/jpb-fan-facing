import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://jamespittsband.com";

  const routes = [
    "",
    "/music",
    "/shows",
    "/videos",
    "/news",
    "/store",
    "/tickets",
    "/photos",
    "/join",
    "/about",
    "/contact",
    "/social-hub",
    // Dynamic show routes (you can generate these from Bandsintown or database)
    "/shows/calendar/concord-2025-03-14",
    "/shows/calendar/hutchinson-2025-03-29",
    "/shows/calendar/boston-2025-04-12",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : route.includes("shows") ? "daily" : "monthly",
    priority: route === "" ? 1 : route.includes("shows") ? 0.9 : 0.7,
  }));
}

