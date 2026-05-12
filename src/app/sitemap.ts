import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/about", "/services", "/work", "/process", "/contact", "/insights"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...baseRoutes, ...serviceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.85 : 0.7,
  }));
}
