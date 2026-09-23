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
  "/products/keyway-broaches",
  "/products/spline-broaches",
  "/products/surface-broaches",
  "/services/broach-regrinding-resharpening",
  "/applications/keyway-machining",
  "/applications/spline-machining",
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
  }));
}
