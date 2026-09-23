import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Wrench, FileText } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Keyway Machining & Broaching Applications | Varad Engineering",
  description:
    "Explore keyway broaching applications supported by Varad Engineering's precision key broaches and contract broaching capabilities in Chakan, Pune.",
  path: "/applications/keyway-machining",
  image: `https://${company.domain}/images/varad/broaches.jpg`,
});

const breadcrumbs = [
  { name: "Home", url: `https://${company.domain}` },
  { name: "Applications", url: `https://${company.domain}/products` },
  {
    name: "Keyway Machining",
    url: `https://${company.domain}/applications/keyway-machining`,
  },
];

export default function KeywayMachiningPage() {
  const jsonLd = breadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-shell section-shell">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-slate-900 transition-colors">
              Applications
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Keyway Machining</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Machining Application</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Keyway Machining
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Keyway machining is a core internal slotting operation in mechanical and automotive manufacturing. Varad Engineering supports keyway broaching requirements through dedicated tooling manufacture—including key broaches with and without chamfer up to 1500 mm in length—and comprehensive contract broaching services at its facility in Mhalunge, Chakan, Pune.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Key Broaches: With &amp; Without Chamfer
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Length: Up to 1500 mm
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Contract Broaching Available
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0b4267] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#083653] transition-colors"
              >
                Discuss Keyway Machining <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-2 border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-600" /> {company.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative h-72 sm:h-[400px] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/varad/broaches.jpg"
              alt="Precision keyway broaches for internal keyway machining manufactured by Varad Engineering"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Application Overview */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Application Overview</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Internal Keyway Broaching in Industrial Manufacturing
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              In mechanical power transmission, internal keyways are cut into the bores of rotating components such as gears, pulleys, sprockets, couplings, and hubs. A drive key is fitted into the mating shaft keyseat, enabling positive torque transmission without rotational slippage.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Broaching is the preferred method for cutting internal keyways because it provides tight dimensional tolerance, exact parallelism across the slot length, and rapid cycle times compared to single-point slotting or EDM wire-cutting.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Key Broaches with Chamfer
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Particularly effective for high-volume production where component deburring adds costly manual labor.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Simultaneously cuts slot depth and chamfers the top edges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Prevents burrs from interfering with shaft key assembly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Manufactured up to 1500 mm length</span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href="/products/keyway-broaches"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  View Keyway Broaches Product Page &rarr;
                </Link>
              </div>
            </article>

            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Key Broaches without Chamfer
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Standard rectangular and square internal slot profiles machined according to standard engineering specifications.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Standard parallel-wall keyseats and custom slot widths</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Can be guided through standard bushings with shims for step depth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Supported by ELB SCHLIFF surface grinding</span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href="/products/flat-broaches"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  View Flat Broaches Overview &rarr;
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Contract Broaching Relationship */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Production Support</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Contract Broaching for Keyway Machining
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Not all manufacturing units have in-house broaching machines or specialized broach tool maintenance facilities. For customers requiring batch keyway broaching, Varad Engineering provides complete contract broaching services at its Mhalunge, Chakan plant.
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Customers supply pre-bored components; our team performs internal keyway broaching using calibrated broach tooling and inspection equipment, delivering verified parts ready for downstream assembly.
              </p>
              <div className="mt-6">
                <Link
                  href="/products/contract-broaching"
                  className="inline-flex items-center gap-2 bg-[#0b4267] px-5 py-3 text-sm font-bold text-white hover:bg-[#083653] transition-colors"
                >
                  Explore Contract Broaching Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative h-64 sm:h-96 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/broach-detail.jpg"
                alt="Contract broaching setup and detail view at Varad Engineering"
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quality and Inspection */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Quality &amp; Tolerances</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Quality Inspection for Keyway Machining
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Keyway dimensions—including slot width, depth, corner radius, and chamfer angle—are verified with calibrated metrology tools at our plant:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Profile Projector
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Electronica PP 300 H (10×, 20×, 30×)</p>
              <p className="mt-2 text-sm text-slate-600">
                Visual measurement of keyway width, depth, and chamfer edge break geometry on sample parts and cutting tooling.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Slip Gauge Set
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">63 Slips · Grade A Accuracy</p>
              <p className="mt-2 text-sm text-slate-600">
                Precision go/no-go gauging of internal keyway slot widths to ensure proper key fit.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Hardness Testing
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">FIE Group Model RASN</p>
              <p className="mt-2 text-sm text-slate-600">
                Checking hardness values of tooling to ensure cutting edge stability during production strokes.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/quality"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0b4267] hover:underline"
            >
              View Full Quality &amp; Inspection Facilities &rarr;
            </Link>
          </div>
        </section>

        {/* Supporting Navigation Links */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
          <Link
            href="/products/keyway-broaches"
            className="text-sm font-semibold text-[#0b4267] hover:underline"
          >
            &larr; View Keyway Broaches Product
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/applications/spline-machining"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              Spline Machining Applications &rarr;
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
