import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Cog, Wrench, Layers } from "lucide-react";
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
      "Flat broach manufacturing handles tools up to 1500 mm length, supported by dedicated ELB SCHLIFF surface grinding equipment and imported broach resharpening machinery (Arthur Klink, Pentagon, Lapointe).",
    applications: [
      "Key Broaches with Chamfer",
      "Key Broaches without Chamfer",
      "Surface Broaches up to 1500 mm length",
      "External flat profile and face broaching",
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
      "Round broach manufacturing handles components up to 200 mm diameter and 2000 mm length, supported by dedicated machinery, TOS cylindrical grinding (up to 125 mm dia × 1800 mm length), and MC3 Russian spline grinding (up to 125 mm dia × 2000 mm length).",
    applications: [
      "Spline Broaches (Involute & Straight Sided)",
      "Combination Spline Broaches",
      "Interspaced Spline Broaches",
      "Across Flat Broaches",
      "Double (D) Broaches",
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
      "Comprehensive contract broaching services for automotive and mechanical manufacturing requirements, supported by in-house broach tooling, CNC gear testing, profile projection, and precision metrology.",
    manufacturing:
      "Contract broaching is performed at our Mhalunge, Chakan facility with capacity for flat broaching up to 1500 mm and round broaching up to 200 mm diameter and 2000 mm length, backed by dedicated grinding machinery and calibrated inspection setups.",
    applications: [
      "Internal keyway broaching (with and without chamfer)",
      "Internal spline broaching (combination and interspaced)",
      "Across flat, double-D, and hexagonal broaching",
      "Customer-specific tooling and aggregate broaching",
      "High-precision batch machining for automotive & mechanical OEMs",
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
      "Broach resharpening and regrinding supported by dedicated imported machines (Arthur Klink, Pentagon, Lapointe), alongside sharpening of gear shaving cutters, shaping cutters, hobs, and CNC carbide tooling solutions.",
    manufacturing:
      "Our setup includes dedicated imported broach resharpening machines for flat broaches (up to 1500 mm), round broaches (up to 200 mm dia & 2000 mm length), and new broach manufacturing.",
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

const productMeta: Record<string, { title: string; description: string }> = {
  "flat-broaches": {
    title: "Flat Broaches | Key & Surface Broach Manufacturer | Varad Engineering",
    description:
      "High-precision flat broaches up to 1500 mm length manufactured by Varad Engineering in Mhalunge, Chakan, Pune, including key broaches with and without chamfer and surface broaches.",
  },
  "round-broaches": {
    title: "Round Broaches | Spline & Profile Broach Manufacturer | Varad Engineering",
    description:
      "Internal round broaches and spline broaches up to 200 mm diameter and 2000 mm length manufactured by Varad Engineering in Mhalunge, Chakan, Pune.",
  },
  "contract-broaching": {
    title: "Contract Broaching Services | Varad Engineering Chakan",
    description:
      "Contract broaching services by Varad Engineering in Mhalunge, Chakan, Pune, supported by precision inspection and batch machining capabilities.",
  },
  "tooling-accessories-sharpening": {
    title: "Broach Regrinding & Cutter Sharpening | Varad Engineering",
    description:
      "Broach resharpening, regrinding and cutter sharpening by Varad Engineering in Mhalunge, Chakan, Pune using imported machinery.",
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
  const meta = productMeta[slug];
  const detail = productDetails[slug];

  return {
    title: {
      absolute: meta?.title || `${detail?.title} | Varad Engineering Chakan`,
    },
    description:
      meta?.description ||
      detail?.description ||
      "High-precision broach and tooling solutions from Varad Engineering.",
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
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-slate-900 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{detail.title}</span>
          </div>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Product category</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {detail.title}
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              {detail.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0b4267] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#083653] transition-colors"
              >
                Request an Enquiry <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-2 border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-600" /> {company.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative h-64 sm:h-[400px] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src={
                productCategories.find((item) => item.slug === slug)?.image ||
                "/images/varad/broaches.jpg"
              }
              alt={detail.title}
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Dedicated Spotlight for Round Broaches */}
        {slug === "round-broaches" && (
          <>
            {/* Dedicated Link Box to Spline Broaches */}
            <div className="mt-10 border-2 border-[#0b4267] bg-[#eef4f8] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Specialized Product Page Available
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-[#092d49] sm:text-2xl">
                    Looking for Dedicated Spline Broaches?
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                    Varad Engineering manufactures precision combination spline broaches and interspaced spline broaches with round broach capability up to 200 mm diameter and 2000 mm length.
                  </p>
                </div>
                <Link
                  href="/products/spline-broaches"
                  className="inline-flex items-center gap-2 bg-[#0b4267] px-6 py-3 text-sm font-bold text-white hover:bg-[#083653] transition-colors shrink-0"
                >
                  View Spline Broaches <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Round Broach Manufacturing Profiles */}
            <section className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
              <div className="max-w-3xl">
                <span className="eyebrow">Manufacturing Scope</span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Comprehensive Round Broach Profiles
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Varad Engineering manufactures internal round broaches across standard and special internal geometry configurations:
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Spline Broaches
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Precision internal spline cutting tools for automotive transmissions, drive hubs, and driveline sleeves.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Combination Spline Broaches
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Single-pass tools that simultaneously machine the component minor bore and spline tooth forms for concentricity.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Interspaced Spline Broaches
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Broaches with alternating tooth sequences to manage cutting forces and deliver fine surface finishes.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Across Flat Broaches
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Internal broaches for single, double, or multi-flat bore geometry in mechanical locking parts.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Double D Broaches
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Internal profile broaches cutting opposed flat faces for anti-rotation shafts and control linkages.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Hexagonal Broaches
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Internal hexagon profiling broaches for industrial couplings, sockets, and specialty fasteners.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Special Profile Broaches
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Custom internal profiles engineered to component drawings with round broach capability up to 200 mm diameter and 2000 mm length.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Dedicated Sections for Contract Broaching */}
        {slug === "contract-broaching" && (
          <>
            {/* Scope of Work */}
            <section className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
              <div className="max-w-3xl">
                <span className="eyebrow">Service Scope</span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Contract Broaching Services &amp; Scope of Work
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Varad Engineering provides contract broaching services for manufacturing clients who require precision internal broaching without investing in dedicated broaching machinery or maintenance tooling:
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Wrench className="h-4 w-4 text-amber-600" /> Keyway Broaching
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Internal keyway broaching with and without chamfer for gears, pulleys, sprockets, and hubs.
                  </p>
                  <Link href="/applications/keyway-machining" className="mt-3 block text-xs font-bold text-[#0b4267]">
                    Keyway Machining &rarr;
                  </Link>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Cog className="h-4 w-4 text-amber-600" /> Spline Broaching
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Internal spline broaching including combination and interspaced spline profiles.
                  </p>
                  <Link href="/applications/spline-machining" className="mt-3 block text-xs font-bold text-[#0b4267]">
                    Spline Machining &rarr;
                  </Link>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Layers className="h-4 w-4 text-amber-600" /> Profile Broaching
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Across flat, double-D, hexagonal, and custom profile broaching on pre-bored parts.
                  </p>
                  <Link href="/products/round-broaches" className="mt-3 block text-xs font-bold text-[#0b4267]">
                    Round Broaches &rarr;
                  </Link>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheck className="h-4 w-4 text-amber-600" /> Batch Machining
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Repeatable batch component broaching backed by gear testing and optical profile inspection.
                  </p>
                  <Link href="/quality" className="mt-3 block text-xs font-bold text-[#0b4267]">
                    Quality Inspection &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Enquiry Process */}
            <section className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
              <div className="max-w-3xl">
                <span className="eyebrow">Work Process</span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Contract Broaching Enquiry &amp; Execution Process
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  How manufacturing clients initiate and complete contract broaching work with Varad Engineering:
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-xl font-black text-[#0b4267]">01</span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">Component Drawings</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Share component drawings, bore diameters, keyway/spline specifications, and tolerances.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-xl font-black text-[#0b4267]">02</span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">Tooling Assessment</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Our engineering team reviews tooling match, pulling tonnages, and guide bushing requirements.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-xl font-black text-[#0b4267]">03</span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">Batch Broaching</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Components are broached at our Mhalunge, Chakan facility under controlled manufacturing setups.
                  </p>
                </div>

                <div className="border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-xl font-black text-[#0b4267]">04</span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">Quality Inspection</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Profiles, dimensions, and pin measurements are verified prior to final dispatch.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Manufacturing Considerations & Applications (Standard Layout Grid) */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Manufacturing &amp; Processing Capability
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {detail.manufacturing}
            </p>
          </article>
          <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Types &amp; Scope
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
              {detail.applications.map((application) => (
                <li key={application} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Quality and Inspection Facilities Highlight */}
        <section className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Metrology &amp; Quality</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Inspection Facilities Supporting {detail.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Quality verification at Varad Engineering is supported by dedicated precision measuring instruments:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Hoffler CNC Gear Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Hoffler ZP 260</p>
              <p className="mt-2 text-xs text-slate-600">
                Gear tooth profile, pitch verification, and spline lead measurement.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> KAPP NILES CNC Gear Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">KNM 2X (Internal Gear Testing)</p>
              <p className="mt-2 text-xs text-slate-600">
                High-precision internal gear and spline measurement capabilities.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Profile Projector &amp; Gauges
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Electronica PP 300 H &amp; Grade A Slips</p>
              <p className="mt-2 text-xs text-slate-600">
                Optical magnification (10x, 20x, 30x) and 63-piece Grade A slip gauge set.
              </p>
            </div>
          </div>
        </section>

        {/* Related Capabilities */}
        <div className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-bold text-slate-900 sm:text-3xl">Related Capabilities</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {detail.related.map((relatedSlug) => {
              const item = productCategories.find(
                (item) => item.slug === relatedSlug,
              );
              if (!item) return null;
              return (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="relative border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 sm:p-5 transition-colors"
                >
                  <div className="relative h-36 overflow-hidden sm:h-44 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-bold text-slate-900 sm:text-3xl">Image Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {detail.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-48 overflow-hidden border border-slate-200 shadow-sm sm:h-64 bg-slate-100"
              >
                <Image
                  src={image}
                  alt={`${detail.title} tooling view ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
          <Link
            href="/products"
            className="text-sm font-semibold text-[#0b4267] hover:underline"
          >
            &larr; All Products &amp; Services
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/manufacturing"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              Manufacturing Capabilities &rarr;
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold text-amber-700 hover:underline"
            >
              Contact Varad Engineering &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
