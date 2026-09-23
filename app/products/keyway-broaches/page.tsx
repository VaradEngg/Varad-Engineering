import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Wrench, Layers } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Keyway Broaches | Key Broach Manufacturer | Varad Engineering",
  description:
    "Varad Engineering manufactures precision key broaches with and without chamfer for industrial broaching applications from its facility in Mhalunge, Chakan, Pune.",
  path: "/products/keyway-broaches",
  image: `https://${company.domain}/images/varad/broaches.jpg`,
});

const breadcrumbs = [
  { name: "Home", url: `https://${company.domain}` },
  { name: "Products", url: `https://${company.domain}/products` },
  { name: "Keyway Broaches", url: `https://${company.domain}/products/keyway-broaches` },
];

export default function KeywayBroachesPage() {
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
            <span className="text-slate-900 font-medium">Keyway Broaches</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Flat Broach Category</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Keyway Broaches
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Varad Engineering manufactures precision key broaches with and without chamfer from its dedicated Broach Manufacturing Unit located in Mhalunge, Chakan, Pune. Our flat broach manufacturing handles tools up to 1500 mm in length, supported by specialized surface grinding and profile inspection equipment.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Length: Up to 1500 mm
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                With &amp; Without Chamfer
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                ELB SCHLIFF Grinding
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
              alt="Precision keyway broaches manufactured by Varad Engineering"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* What are Keyway Broaches */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Technical Overview</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What are Keyway Broaches?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Keyway broaches are precision cutting tools designed to machine internal slots, keyseats, and keyways in cylindrical bores. Used widely across mechanical engineering, they cut internal keyways into gears, pulleys, sprockets, couplings, and hubs so keys can transmit torque reliably from shafts to rotating assemblies.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              During operation, the broach is guided through a slotted bushing inside the component bore. Each cutting tooth is progressively taller than the preceding one, removing a precise chip thickness until the full keyway depth, width, and tooth form are produced with high repeatability.
            </p>
          </div>

          {/* Chamfer vs Without Chamfer */}
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
                Key broaches with chamfer incorporate specialized cutting teeth that cut the primary keyway slot while simultaneously breaking and chamfering the top slot edges in the same stroke.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Eliminates secondary manual deburring operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Ensures consistent edge relief for trouble-free key assembly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Manufactured for standard and custom keyway dimensions</span>
                </li>
              </ul>
            </article>

            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Key Broaches without Chamfer
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Standard precision key broaches without chamfer are engineered to cut clean, parallel keyway walls and sharp or radius-bottom slots according to standard technical specifications.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Standard rectangular and square internal keyseat profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Rigid tool body with precision ground gullet and rake angles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Used with shims for progressive multi-pass depth cuts when required</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Manufacturing & Grinding Capability */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Manufacturing Setup</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Manufacturing &amp; Grinding Capability
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                At our Mhalunge, Chakan workshop, flat broach manufacturing is supported by dedicated machinery with a manufacturing capability of up to 1500 mm in tool length.
              </p>
              <div className="mt-6 space-y-4">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">ELB SCHLIFF Surface Grinder</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    High-precision surface grinding equipment capable of handling flat broaches up to 1500 mm length to achieve exact tool height, width, and side taper.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">Imported Resharpening &amp; Regrinding Machines</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Equipped with specialized Arthur Klink, Pentagon, and Lapointe machinery dedicated to flat broach manufacturing and tooth sharpening.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-base font-bold text-slate-900">Pre-Machining Support</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Precision heavy-duty lathe and universal milling machine setups for blank turning, shank preparation, and profile pre-machining.
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

        {/* Quality and Inspection */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Quality Assurance</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Inspection &amp; Quality Verification
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every keyway broach manufactured at Varad Engineering is verified through our dedicated inspection setup to ensure tooth-to-tooth accuracy, correct rake and relief angles, and slot width conformity:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Profile Projector
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Electronica PP 300 H (10×, 20×, 30×)</p>
              <p className="mt-2 text-sm text-slate-600">
                Magnified profile verification of cutting tooth form, gullet radii, chamfer geometry, and tooth pitch.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Slip Gauge Set
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">63 Slips · Grade A Accuracy</p>
              <p className="mt-2 text-sm text-slate-600">
                Precision reference standards for checking broach thickness, width steps, and guide horn alignment.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Hardness Tester
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">FIE Group Model RASN (10–150 Kgf)</p>
              <p className="mt-2 text-sm text-slate-600">
                Rockwell hardness testing across cutting teeth, shanks, and bodies to verify metallurgical consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery / Detail Images */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="border-b border-slate-200 pb-4">
            <span className="eyebrow">Tooling Imagery</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Key Broach Tooling Detail
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="relative h-64 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/broaches.jpg"
                alt="Precision flat key broaches manufactured at Varad Engineering"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <Image
                src="/images/varad/broach-detail.jpg"
                alt="Detail view of broach teeth and cutting edges at Varad Engineering"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Related Products & Internal Links */}
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
                Overview of flat broach capabilities up to 1500 mm length.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Flat Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/surface-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Surface Broaches</h3>
              <p className="mt-2 text-xs text-slate-600">
                External surface broaching tooling up to 1500 mm.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Surface Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/contract-broaching"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Contract Broaching</h3>
              <p className="mt-2 text-xs text-slate-600">
                In-house batch broaching services for component production.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Contract Broaching &rarr;
              </span>
            </Link>

            <Link
              href="/applications/keyway-machining"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Keyway Machining</h3>
              <p className="mt-2 text-xs text-slate-600">
                Application details for keyway broaching operations.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Application &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* Enquiry Banner */}
        <div className="mt-12 sm:mt-16 bg-[#eef4f8] border border-slate-200 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#092d49] sm:text-2xl">
              Need precision keyway broaches for your production?
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Manufactured at our facility in Mhalunge, Chakan, Pune and supplied to manufacturing customers based on their technical drawings and component requirements.
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
