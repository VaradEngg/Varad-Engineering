import Image from "next/image";
import Link from "next/link";
import { company, qualityPolicy, inspectionFacilities } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { ShieldCheck, ArrowRight, Cog, Wrench, RefreshCw, Layers } from "lucide-react";

export const metadata = {
  title: "Quality & Inspection | Varad Engineering Chakan",
  description:
    "Explore Varad Engineering's quality policy and inspection facilities in Mhalunge, Chakan, Pune, including profile projection, CNC gear testing, slip gauges and hardness testing.",
  alternates: { canonical: "/quality" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Quality", url: "https://" + company.domain + "/quality" },
]);

export default function QualityPage() {
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
            <span className="text-slate-900 font-medium">Quality</span>
          </div>
        </nav>

        <div className="mt-5 max-w-4xl sm:mt-8">
          <span className="eyebrow">Quality Policy &amp; Standards</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Quality &amp; Inspection
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Varad Engineering&apos;s quality policy covers materials, workmanship, accuracies, timeline and service, ensuring continual improvement through structured quality systems and precision testing at its unit in Mhalunge, Chakan, Pune.
          </p>
        </div>

        {/* Quality Policy Statement */}
        <div className="mt-6 border border-slate-900 bg-slate-950 p-5 text-white sm:mt-10 sm:p-7 md:p-9">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300 sm:text-sm sm:tracking-[0.18em]">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" /> Official Quality Policy
          </div>
          <blockquote className="mt-3 max-w-4xl text-base leading-7 text-slate-100 sm:mt-5 sm:text-xl sm:leading-8 md:text-2xl">
            “{qualityPolicy.statement}”
          </blockquote>
          <p className="mt-3 max-w-3xl text-xs leading-5 text-slate-300 sm:mt-5 sm:text-sm sm:leading-6">
            {qualityPolicy.commitment}
          </p>
        </div>

        {/* Measuring & Testing Facilities */}
        <div className="mt-8 sm:mt-16">
          <div className="border-b border-slate-200 pb-3 sm:pb-5">
            <span className="eyebrow">Inspection Facilities</span>
            <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl md:text-4xl">
              Measuring and testing equipment
            </h2>
          </div>

          <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inspectionFacilities.map((facility) => (
              <article
                key={`${facility.name}-${facility.spec}`}
                className="overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-40 sm:h-48 bg-slate-200">
                  <Image
                    src={facility.image}
                    alt={`${facility.name} inspection equipment`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 sm:text-xs">
                    {facility.spec}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 sm:mt-2 sm:text-xl">
                    {facility.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-relaxed">
                    {facility.details}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Quality Applied Across Manufacturing & Tooling */}
        <section className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
          <div className="border-b border-slate-200 pb-3">
            <span className="eyebrow">Applied Metrology</span>
            <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Quality Assurance in Production &amp; Tooling Services
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/products/spline-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Cog className="h-4 w-4 text-amber-600" /> Spline Broaches
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Verified on Hoffler ZP 260 &amp; KAPP NILES KNM 2X testers.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Spline Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/keyway-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Wrench className="h-4 w-4 text-amber-600" /> Keyway Broaches
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Tooth form &amp; chamfer inspected on Profile Projector.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Keyway Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/contract-broaching"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Layers className="h-4 w-4 text-amber-600" /> Contract Broaching
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Pre- and post-broaching dimensional verification on batch parts.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Contract Broaching &rarr;
              </span>
            </Link>

            <Link
              href="/services/broach-regrinding-resharpening"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <RefreshCw className="h-4 w-4 text-amber-600" /> Broach Regrinding
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Face geometry and relief angles checked after resharpening.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Regrinding &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* CTA & Internal Linking */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:mt-16 sm:pt-8">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-2 bg-[#0b4267] px-6 text-base font-bold text-white hover:bg-[#083653] transition-colors"
          >
            Discuss Inspection &amp; Tooling <ArrowRight className="h-5 w-5" />
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/manufacturing"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              Manufacturing Capabilities &rarr;
            </Link>
            <Link
              href="/products"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              View Products &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
