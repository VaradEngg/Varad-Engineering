import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

const routes = [
  "/",
  "/about",
  "/products",
  "/products/flat-broaches",
  "/products/round-broaches",
  "/products/contract-broaching",
  "/products/tooling-accessories-sharpening",
  "/manufacturing",
  "/quality",
  "/industries",
  "/gallery",
  "/contact",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://${company.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
