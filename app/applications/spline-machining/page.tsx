import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Cog, Gauge } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Spline Machining & Broaching Applications | Varad Engineering",
  description:
    "Explore spline broaching applications supported by Varad Engineering's combination and interspaced spline broaches from its Chakan, Pune manufacturing unit.",
  path: "/applications/spline-machining",
  image: `https://${company.domain}/images/varad/round-broach.jpg`,
});

const breadcrumbs = [
  { name: "Home", url: `https://${company.domain}` },
  { name: "Applications", url: `https://${company.domain}/products` },
  {
    name: "Spline Machining",
    url: `https://${company.domain}/applications/spline-machining`,
  },
];

export default function SplineMachiningPage() {
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
            <span className="text-slate-900 font-medium">Spline Machining</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Machining Application</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Spline Machining
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Spline machining is an essential process in manufacturing torque-transmitting internal profiles for transmission gears, drive hubs, prop shafts, and gearboxes. Varad Engineering manufactures specialized combination and interspaced spline broaches with capacity up to 200 mm diameter and 2000 mm length from its unit in Mhalunge, Chakan, Pune.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Capacity: Up to 200 mm dia × 2000 mm length
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Combination &amp; Interspaced Tooling
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                CNC Gear Testing Verification
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0b4267] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#083653] transition-colors"
              >
                Discuss Spline Machining <ArrowRight className="h-4 w-4" />
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
              src="/images/varad/round-broach.jpg"
              alt="Precision internal round spline broach manufactured by Varad Engineering"
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
              Internal Spline Broaching in Automotive &amp; Mechanical Assemblies
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Spline broaching is the primary method for cutting internal involute and straight-sided splines inside gears, companion flanges, drive sleeves, and transmission housings. Unlike milling, shaping, or wire EDM, internal broaching generates multiple spline teeth simultaneously along the full bore circumference in a single machine pass.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              This high-efficiency cutting operation ensures consistent pitch spacing, tooth form accuracy, and concentricity with the component bore, meeting the tight tolerance requirements of Tier-1 automotive and mechanical assemblies.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <Cog className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Combination Spline Broaches
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Combination spline broaches integrate round sizing teeth and spline profile teeth on a single broach bar.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Machines minor round bore and spline teeth in one continuous stroke</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Ensures zero runout between bore diameter and spline pitch circle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Eliminates the need for separate pre-boring finishing passes</span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href="/products/spline-broaches"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  View Spline Broaches Product Page &rarr;
                </Link>
              </div>
            </article>

            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <Gauge className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Interspaced Spline Broaches
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Interspaced spline broaches utilize alternating tooth sequences to distribute cutting load across deep tooth heights.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Prevents excessive pulling tonnage on long components and tough materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Reduces risk of tooth chipping and improves chip curling in gullets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Delivers clean, chatter-free tooth surface finish</span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href="/products/round-broaches"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  View Round Broaches Overview &rarr;
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Manufacturing & Grinding Setup */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Manufacturing Setup</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Round Broach Manufacturing &amp; Grinding
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Our plant in Mhalunge, Chakan supports round broach manufacturing up to 200 mm diameter and 2000 mm length with dedicated grinding machinery:
              </p>

              <div className="mt-6 space-y-4">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">MC3 Russian Spline Grinding Machine</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    High-precision spline grinding machine handling jobs up to 125 mm diameter and 2000 mm length.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">TOS Cylindrical Grinding Machine</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Precision cylindrical grinding for round broach bodies and shanks up to 125 mm diameter and 1800 mm length.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">Contract Broaching Support</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    In-house broaching setups allow contract broaching of client parts for batch production.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 sm:h-96 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/spline-grinding.jpg"
                alt="MC3 Spline Grinding machine processing broaches at Varad Engineering"
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quality and Metrology Setup */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Testing Setup</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              CNC Gear Testing &amp; Spline Metrology
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Spline broaches and broached components are verified on dedicated inspection equipment:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Hoffler CNC Gear Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Model: Hoffler ZP 260</p>
              <p className="mt-2 text-sm text-slate-600">
                Measurement of gear tooth profiles, pitch errors, and involute geometry.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> KAPP NILES CNC Gear Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Model: KAPP NILES KNM 2X</p>
              <p className="mt-2 text-sm text-slate-600">
                Equipped with internal gear testing facility for checking internal spline forms.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Inspection Pin Rollers
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">0.75 mm – 10 mm (Least Count 0.1 mm)</p>
              <p className="mt-2 text-sm text-slate-600">
                Roller pin sets used for accurate measurement over pins (MOP) across internal spline spaces.
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
            href="/products/spline-broaches"
            className="text-sm font-semibold text-[#0b4267] hover:underline"
          >
            &larr; View Spline Broaches Product
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products/contract-broaching"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              Contract Broaching Services &rarr;
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
