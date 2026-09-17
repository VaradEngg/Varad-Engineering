import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { company, productCategories } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

const productDetails: Record<
  string,
  {
    title: string;
    description: string;
    manufacturing: string;
    applications: string[];
    gallery: string[];
    related: string[];
  }
> = {
  "flat-broaches": {
    title: "Flat Broaches",
    description:
      "Varad Engineering manufactures high precision Key Broaches (with & without chamfer) and Surface Broaches for flat profile machining up to 1500 mm length.",
    manufacturing:
      "The company profile lists a dedicated flat-broach machine with capacity up to 1500 mm, supported by ELB SCHLIFF surface grinding equipment capable of handling flat broaches up to 1500 mm length.",
    applications: [
      "Key Broaches",
      "Key Broaches with Chamfer",
      "Surface Broaches",
    ],
    gallery: [
      "/images/varad/broaches.jpg",
      "/images/varad/broach-detail.jpg",
      "/images/varad/surface-grinding.jpg",
    ],
    related: [
      "round-broaches",
      "contract-broaching",
      "tooling-accessories-sharpening",
    ],
  },
  "round-broaches": {
    title: "Round Broaches",
    description:
      "Precision internal round broaches, combination & interspaced spline broaches, across flat, double-D, hexagonal, and special profile broaches up to 200 mm diameter and 2000 mm length.",
    manufacturing:
      "Round broach sharpening is supported by the listed dedicated machine capacity of up to 200 mm diameter and 2000 mm length, with TOS cylindrical grinding and MC3 spline grinding capabilities also listed in the company profile.",
    applications: [
      "Spline Broaches",
      "Across Flat Broaches",
      "Double D Broaches",
      "Hexagonal Broaches",
      "Special Profile Broaches",
    ],
    gallery: [
      "/images/varad/round-broach.jpg",
      "/images/varad/spline-grinding.jpg",
      "/images/varad/cylindrical-grinding.jpg",
    ],
    related: [
      "flat-broaches",
      "contract-broaching",
      "tooling-accessories-sharpening",
    ],
  },
  "contract-broaching": {
    title: "Contract Broaching",
    description:
      "Contract broaching services for precision manufacturing requirements.",
    manufacturing:
      "Contract broaching is part of the company's product and service portfolio, with inspection facilities including profile projection, CNC gear testing and Grade A slip gauges listed in the company profile.",
    applications: [
      "Contract broaching work",
      "Customer-specific broaching requirements",
      "Broach manufacturing support",
      "Mechanical industry tooling requirements",
    ],
    gallery: [
      "/images/varad/broaches.jpg",
      "/images/varad/arthur-klink.jpg",
      "/images/varad/profile-projector.jpg",
    ],
    related: [
      "flat-broaches",
      "round-broaches",
      "tooling-accessories-sharpening",
    ],
  },
  "tooling-accessories-sharpening": {
    title: "Tooling Accessories & Cutter Sharpening",
    description:
      "Broach resharpening and regrinding supported by 4 imported machines (Arthur Klink, Pentagon Grd-4, Lapointe Grd-5), along with sharpening of gear shaving cutters, shaping cutters, hobs, and CNC carbide tooling solutions.",
    manufacturing:
      "Our setup includes 4 imported broach resharpening machines: 1 dedicated for flat broaches (up to 1500 mm), 1 dedicated for round broaches (up to 200 mm dia & 2000 mm length), and 2 dedicated for new broach manufacturing.",
    applications: [
      "Broach Resharpening & Regrinding (Arthur Klink, Pentagon, Lapointe)",
      "Gear Shaving Cutter Sharpening",
      "Shaping Cutter Sharpening",
      "Hob Sharpening",
      "Carbide Tooling Solutions for CNCs",
      "Tooling Accessories & Custom Fixtures",
    ],
    gallery: [
      "/images/varad/arthur-klink.jpg",
      "/images/varad/pentagon.jpg",
      "/images/varad/lapointe.jpg",
    ],
    related: [
      "flat-broaches",
      "round-broaches",
      "contract-broaching",
    ],
  },
};

export function generateStaticParams() {
  return productCategories.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = productDetails[slug];

  return {
    title: detail?.title || "Product",
    description: detail?.description || "High-precision broach and tooling solutions from Varad Engineering.",
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const detail = productDetails[slug];

  if (!detail) {
    notFound();
  }

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://" + company.domain },
    { name: "Products", url: "https://" + company.domain + "/products" },
    {
      name: detail.title,
      url: "https://" + company.domain + "/products/" + slug,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="container-shell section-shell">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-slate-900">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-900">{detail.title}</span>
          </div>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Product category</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">{detail.title}</h1>
            <p className="mt-6 text-lg text-slate-600">{detail.description}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#0b4267] px-5 py-3 text-sm font-bold text-white hover:bg-[#083653]"
            >
              Request an Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative h-64 sm:h-[420px] overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src={productCategories.find((item) => item.slug === slug)?.image || "/images/varad/broaches.jpg"}
              alt={detail.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-16 sm:gap-8 lg:grid-cols-2">
          <article className="border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold sm:text-2xl">
              Manufacturing considerations
            </h2>
            <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-4 sm:text-base">{detail.manufacturing}</p>
          </article>
          <article className="border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold sm:text-2xl">Types &amp; applications</h2>
            <ul className="mt-2 space-y-2 text-xs leading-5 text-slate-600 sm:mt-4 sm:space-y-3 sm:text-base">
              {detail.applications.map((application) => (
                <li key={application} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-amber-600 shrink-0" />{" "}
                  {application}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 sm:mt-16">
          <h2 className="text-xl font-bold text-slate-900 sm:text-3xl md:text-4xl">Related capabilities</h2>
          <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3">
            {detail.related.map((relatedSlug) => {
              const item = productCategories.find(
                (item) => item.slug === relatedSlug,
              );
              if (!item) return null;
              return (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="relative border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 sm:p-5"
                >
                  <div className="relative h-36 overflow-hidden sm:h-44">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 sm:mt-4 sm:text-xl">
                    {item.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 sm:mt-16">
          <h2 className="text-xl font-bold text-slate-900 sm:text-3xl md:text-4xl">Image gallery</h2>
          <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3">
            {detail.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-48 overflow-hidden border border-slate-200 shadow-sm sm:h-72"
              >
                <Image
                  src={image}
                  alt={`${detail.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
