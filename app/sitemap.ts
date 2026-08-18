import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/fleet",
  "/coverage",
  "/safety",
  "/quote",
  "/contact",
  "/thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lasoadoandjasmine.com";
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
