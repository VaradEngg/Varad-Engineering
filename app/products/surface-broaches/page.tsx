import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Surface Broaches | Flat Broach Manufacturer | Varad Engineering",
  description:
    "Varad Engineering manufactures surface broaches and flat broaches up to 1500 mm length from its broach manufacturing unit in Mhalunge, Chakan, Pune.",
  path: "/products/surface-broaches",
  image: `https://${company.domain}/images/varad/broaches.jpg`,
});

const breadcrumbs = [
  { name: "Home", url: `https://${company.domain}` },
  { name: "Products", url: `https://${company.domain}/products` },
  { name: "Surface Broaches", url: `https://${company.domain}/products/surface-broaches` },
];

export default function SurfaceBroachesPage() {
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
            <span className="text-slate-900 font-medium">Surface Broaches</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Flat Broach Category</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Surface Broaches
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Varad Engineering manufactures precision surface broaches and flat broaches up to 1500 mm in length from its specialized Broach Manufacturing Unit in Mhalunge, Chakan, Pune. Engineered for external flat profile and contour machining, our surface broaches are backed by dedicated ELB SCHLIFF surface grinding and imported resharpening machinery.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Length: Up to 1500 mm
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                ELB SCHLIFF Surface Grinding
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Imported Resharpening Setup
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
              src="/images/varad/broaches.jpg"
              alt="Precision surface and flat broaches manufactured by Varad Engineering"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Technical Overview: Surface Broach Capabilities */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Technical Capabilities</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Surface Broaching Capabilities
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Surface broaches are linear cutting tools mounted on broaching machine rams or tool holders to machine external flat faces, steps, slots, and contoured surfaces in high-volume production. Unlike internal broaches that require a pre-drilled starting hole, surface broaches operate across outer component surfaces to achieve high flatness and dimensional consistency.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Flat Broach Length Up to 1500 mm
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Our workshop setup supports single-piece and segmented flat broaches up to 1500 mm in total tool length, accommodating long-stroke broaching requirements.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Engineered tooth rise per tooth to control cut thickness and chip curling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Precision ground mounting seating surfaces, keys, and clamping steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Suitable for cast iron, forged steel, and alloy component machining</span>
                </li>
              </ul>
            </article>

            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  External Profile &amp; Face Machining
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Designed to replace multiple milling passes with a single high-speed broaching stroke for external faces, connecting rod joint faces, bearing caps, and steering linkages.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Continuous cutting action ensures superior surface finish and flatness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Optimized chip gullets to prevent chip packing during heavy stock removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Supports high-volume mechanical and automotive component lines</span>
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
                Dedicated Surface Grinding Equipment
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Precision in surface broaches depends directly on the accuracy of the grinding machinery used to manufacture the body and teeth. Our facility includes:
              </p>

              <div className="mt-6 space-y-4">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">ELB SCHLIFF Surface Grinder</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    High-precision German surface grinding machine capable of handling flat broaches up to 1500 mm length with rigid bed support.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">Imported Broach Resharpening Machinery</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Equipped with Arthur Klink, Pentagon, and Lapointe machinery dedicated to flat broach manufacturing and accurate tooth rake sharpening.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">In-House Milling &amp; Machining</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Universal milling machines and heavy-duty lathes support tool body profiling, slot milling, and mounting fixture machining.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 sm:h-96 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/surface-grinding.jpg"
                alt="ELB SCHLIFF surface grinding machine handling flat broaches at Varad Engineering"
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
            <span className="eyebrow">Inspection &amp; Metrology</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Quality Inspection &amp; Testing Facilities
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each surface broach is thoroughly inspected across step heights, tooth pitch, tooth face angles, and overall parallelism using calibrated equipment:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Profile Projector
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Electronica PP 300 H (10×, 20×, 30×)</p>
              <p className="mt-2 text-sm text-slate-600">
                Magnified visual verification of tooth rake, clearance angles, and gullet root radii.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Slip Gauge Set
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">63 Slips · Grade A Accuracy</p>
              <p className="mt-2 text-sm text-slate-600">
                Precision slip gauges for checking progressive step height increments along the broach length.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Hardness Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">FIE Group Model RASN (10–150 Kgf)</p>
              <p className="mt-2 text-sm text-slate-600">
                Verification of core and tooth hardness to ensure wear resistance and tool life under load.
              </p>
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
              href="/products/flat-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Flat Broaches</h3>
              <p className="mt-2 text-xs text-slate-600">
                Comprehensive flat broach manufacturing overview.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Flat Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/keyway-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Keyway Broaches</h3>
              <p className="mt-2 text-xs text-slate-600">
                Internal key broaches with and without chamfer.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Keyway Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/contract-broaching"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Contract Broaching</h3>
              <p className="mt-2 text-xs text-slate-600">
                Contract broaching for customer-specific batches.
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
              Discuss your surface broach tooling requirements
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Manufactured at our Broach Manufacturing Unit in Mhalunge, Chakan, Pune and supplied to manufacturing customers based on their technical drawings.
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
