import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Cog, Gauge } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Spline Broaches | Combination & Interspaced | Varad Engineering",
  description:
    "Varad Engineering manufactures spline broaches including combination and interspaced types, with round broach capability up to 200 mm diameter and 2000 mm length.",
  path: "/products/spline-broaches",
  image: `https://${company.domain}/images/varad/round-broach.jpg`,
});

const breadcrumbs = [
  { name: "Home", url: `https://${company.domain}` },
  { name: "Products", url: `https://${company.domain}/products` },
  { name: "Spline Broaches", url: `https://${company.domain}/products/spline-broaches` },
];

export default function SplineBroachesPage() {
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
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Spline Broaches</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Round Broach Category</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Spline Broaches
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Varad Engineering manufactures precision internal spline broaches, including combination spline broaches and interspaced spline broaches. Operating from our dedicated Broach Manufacturing Unit in Mhalunge, Chakan, Pune, our round broach capability handles diameters up to 200 mm and lengths up to 2000 mm.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Capacity: Up to 200 mm dia × 2000 mm length
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Combination &amp; Interspaced
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                MC3 Spline Grinding
              </span>
            </div>

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

          <div className="relative h-72 sm:h-[400px] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/varad/round-broach.jpg"
              alt="Precision internal spline broach manufactured by Varad Engineering"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Technical Capabilities: Combination vs Interspaced */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Types &amp; Engineering</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Specialized Spline Broach Configurations
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Spline broaches cut internal splines inside hollow gears, shafts, sleeves, and transmission housings in a single pull or push stroke. Varad Engineering manufactures specialized spline broaches configured for demanding mechanical tolerances:
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
                Combination spline broaches integrate round sizing teeth and spline tooth sections on the same tool body. This setup allows simultaneous finishing of the component bore (minor diameter) and the spline teeth profile.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Guarantees true concentricity between the bore diameter and spline pitch circle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Combines roughing, semi-finishing, and sizing teeth into one operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Reduces part handling and eliminates cumulative alignment errors</span>
                </li>
              </ul>
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
                Interspaced spline broaches feature staggered or alternating tooth rows where successive teeth cut alternating flanks or interspaced segments.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Distributes chip load evenly to prevent tool chatter and galling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Reduces peak pulling force required for deep or multi-tooth splines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Delivers superior surface finish on high-tensile alloy steel components</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Manufacturing & Grinding Setup */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Manufacturing Setup</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Round Broach Manufacturing &amp; Grinding Capability
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Varad Engineering provides round broach manufacturing capability up to 200 mm diameter and 2000 mm length, supported by dedicated cylindrical and spline grinding machines:
              </p>

              <div className="mt-6 space-y-4">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">MC3 Russian Spline Grinding Machine</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Dedicated spline profile grinding machine capable of grinding jobs up to 125 mm diameter and 2000 mm length with precision tooth spacing.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">TOS Cylindrical Grinding Machine</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    High-accuracy cylindrical grinding capable of handling round broaches up to 125 mm diameter and 1800 mm length for concentric pilots, shanks, and lands.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">Dedicated Broach Resharpening Machinery</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Arthur Klink, Pentagon, and Lapointe machinery dedicated to round broach manufacturing and tooth face regrinding.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 sm:h-96 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/spline-grinding.jpg"
                alt="MC3 Spline Grinding Machine in operation at Varad Engineering"
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quality and Inspection Facilities */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Testing Setup</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              CNC Gear Testing &amp; Inspection Facilities
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Spline broaches require rigorous verification of tooth profile, lead, pitch variation, and runout. Our Chakan facility is equipped with dedicated CNC gear testing and precision metrology:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Hoffler CNC Gear Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Model: Hoffler ZP 260</p>
              <p className="mt-2 text-sm text-slate-600">
                CNC-controlled measurement of gear tooth profiles, pitch errors, and involute geometry.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> KAPP NILES CNC Gear Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Model: KAPP NILES KNM 2X</p>
              <p className="mt-2 text-sm text-slate-600">
                High-precision tester featuring an internal gear testing facility for internal spline verification.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Inspection Pin Rollers
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">0.75 mm – 10 mm (Least Count 0.1 mm)</p>
              <p className="mt-2 text-sm text-slate-600">
                Roller pin sets used for accurate measurement over pins (MOP) across internal spline tooth spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery / Detail Images */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="border-b border-slate-200 pb-4">
            <span className="eyebrow">Tooling Imagery</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Spline Broach Tooling &amp; Grinding Detail
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="relative h-64 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/round-broach.jpg"
                alt="Precision round spline broach manufactured by Varad Engineering"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/spline-grinding.jpg"
                alt="MC3 Spline Grinding Machine processing broaches at Varad Engineering"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/broach-detail.jpg"
                alt="Close-up of broach cutting teeth and relief geometry"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="border-b border-slate-200 pb-4">
            <span className="eyebrow">Related Tooling &amp; Services</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Explore Related Capabilities
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/products/round-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Round Broaches</h3>
              <p className="mt-2 text-xs text-slate-600">
                Full overview of round broach capabilities up to 200 mm dia.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Round Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/applications/spline-machining"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Spline Machining</h3>
              <p className="mt-2 text-xs text-slate-600">
                Application overview for spline broaching operations.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Application &rarr;
              </span>
            </Link>

            <Link
              href="/products/contract-broaching"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Contract Broaching</h3>
              <p className="mt-2 text-xs text-slate-600">
                Batch broaching services for component manufacturing.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Contract Broaching &rarr;
              </span>
            </Link>

            <Link
              href="/services/broach-regrinding-resharpening"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Broach Regrinding</h3>
              <p className="mt-2 text-xs text-slate-600">
                Resharpening and regrinding on imported machinery.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Regrinding &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* Enquiry Banner */}
        <div className="mt-12 sm:mt-16 bg-[#eef4f8] border border-slate-200 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#092d49] sm:text-2xl">
              Have an internal spline broach requirement?
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Manufactured at our Broach Manufacturing Unit in Mhalunge, Chakan, Pune and supplied to manufacturing customers based on their component specifications.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0b4267] px-6 py-3 text-sm font-bold text-white hover:bg-[#083653] transition-colors"
            >
              Send Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-2 border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <Phone className="h-4 w-4 text-amber-600" /> {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
