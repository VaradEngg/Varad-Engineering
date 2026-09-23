import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, RefreshCw, Scissors } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Broach Regrinding & Resharpening | Varad Engineering",
  description:
    "Varad Engineering provides broach regrinding and resharpening services from its manufacturing unit in Mhalunge, Chakan, Pune.",
  path: "/services/broach-regrinding-resharpening",
  image: `https://${company.domain}/images/varad/arthur-klink.jpg`,
});

const breadcrumbs = [
  { name: "Home", url: `https://${company.domain}` },
  { name: "Services", url: `https://${company.domain}/products` },
  {
    name: "Broach Regrinding & Resharpening",
    url: `https://${company.domain}/services/broach-regrinding-resharpening`,
  },
];

export default function BroachRegrindingResharpeningPage() {
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
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">
              Broach Regrinding &amp; Resharpening
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Tooling Services</span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Broach Regrinding &amp; Resharpening
            </h1>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Varad Engineering provides specialized broach regrinding and resharpening services from its manufacturing unit in Mhalunge, Chakan, Pune. Supported by dedicated imported machinery, our service restores cutting edges across flat broaches, round broaches, spline broaches, and gear cutters with precision dimensional control.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Flat Broaches: Up to 1500 mm
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Round Broaches: Up to 200 mm dia × 2000 mm
              </span>
              <span className="bg-[#eef4f8] px-3 py-1.5 border border-slate-200 text-[#0a3858]">
                Arthur Klink, Pentagon &amp; Lapointe Machinery
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
              src="/images/varad/arthur-klink.jpg"
              alt="Arthur Klink broach resharpening machine at Varad Engineering workshop"
              fill
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Understanding Broach Regrinding vs Resharpening */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Service Breakdown</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Broach Regrinding &amp; Resharpening Services
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Maintaining cutting geometry is critical for broach performance, hole sizing, and surface finish. Wear occurs on the tooth face, top land, and clearance angle over production cycles. Our workshop provides both routine resharpening and comprehensive regrinding:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <Scissors className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Broach Resharpening
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Broach resharpening involves grinding the cutting tooth face (hook/rake face) to restore sharp cutting edges without altering the original tooth step, taper, or tooth rise.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Face grinding to remove crater wear and micro-chipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Maintains designed tooth rake angle, gullet profile, and chip curl</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Preserves original broach pitch and tooth-to-tooth rise</span>
                </li>
              </ul>
            </article>

            <article className="border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#eef4f8] text-[#0a3858]">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Broach Regrinding
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Broach regrinding encompasses comprehensive profile correction, including gullet dressing, top relief grinding, and spline tooth flank regrinding when tools experience heavy flank wear.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Restoration of tooth clearance angles and relief geometry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Spline profile and tooth flank regrinding on MC3 spline grinder</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Cylindrical pilot, shank, and guide surface dressing</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Supported Tooling Categories */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Service Scope</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Supported Tooling Categories
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our resharpening setup accommodates standard and custom broaches alongside specialized gear-cutting tools:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">Flat Broaches</h3>
              <p className="mt-1 text-xs text-amber-700 font-semibold">Up to 1500 mm length</p>
              <p className="mt-3 text-sm text-slate-600">
                Keyway broaches (with and without chamfer) and external surface broaches.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">Round &amp; Spline Broaches</h3>
              <p className="mt-1 text-xs text-amber-700 font-semibold">Up to 200 mm dia × 2000 mm</p>
              <p className="mt-3 text-sm text-slate-600">
                Combination spline, interspaced spline, double-D, across-flat, and hexagonal broaches.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">Gear Cutters</h3>
              <p className="mt-1 text-xs text-amber-700 font-semibold">Precision Tool Sharpening</p>
              <p className="mt-3 text-sm text-slate-600">
                Sharpening of gear shaving cutters, shaping cutters, and hobs.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">CNC Carbide Tooling</h3>
              <p className="mt-1 text-xs text-amber-700 font-semibold">Tooling Solutions</p>
              <p className="mt-3 text-sm text-slate-600">
                Carbide tooling solutions and custom tooling accessories for CNC machines.
              </p>
            </div>
          </div>
        </section>

        {/* Grinding Facilities */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="border-b border-slate-200 pb-4">
            <span className="eyebrow">Equipment Setup</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Dedicated Grinding &amp; Resharpening Machinery
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-3xl">
              Our workshop at Mhalunge, Chakan is equipped with dedicated imported broach resharpening and precision grinding machines:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="relative h-44 bg-slate-100">
                <Image
                  src="/images/varad/arthur-klink.jpg"
                  alt="Arthur Klink broach resharpening machine at Varad Engineering"
                  fill
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-amber-700">Arthur Klink, Pentagon, Lapointe</p>
                <h3 className="mt-1 text-base font-bold text-slate-900">Broach Resharpening Machines</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Dedicated machines for flat broaches (up to 1500 mm) and round broaches (up to 200 mm dia &amp; 2000 mm length).
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="relative h-44 bg-slate-100">
                <Image
                  src="/images/varad/surface-grinding.jpg"
                  alt="ELB SCHLIFF surface grinder at Varad Engineering"
                  fill
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-amber-700">ELB SCHLIFF</p>
                <h3 className="mt-1 text-base font-bold text-slate-900">Surface Grinding Machine</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Handles flat broaches up to 1500 mm length for true height, width, and side profile regrinding.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="relative h-44 bg-slate-100">
                <Image
                  src="/images/varad/cylindrical-grinding.jpg"
                  alt="TOS cylindrical grinding machine at Varad Engineering"
                  fill
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-amber-700">TOS Make</p>
                <h3 className="mt-1 text-base font-bold text-slate-900">Cylindrical Grinding Machine</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Handles round broaches up to 125 mm diameter and 1800 mm length for shank and land finishing.
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="relative h-44 bg-slate-100">
                <Image
                  src="/images/varad/spline-grinding.jpg"
                  alt="MC3 Russian spline grinding machine at Varad Engineering"
                  fill
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-amber-700">MC3 Russian</p>
                <h3 className="mt-1 text-base font-bold text-slate-900">Spline Grinding Machine</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Precision spline grinding for tools up to 125 mm diameter and 2000 mm length.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Work Quality Inspection */}
        <section className="mt-12 sm:mt-20 border-t border-slate-200 pt-10 sm:pt-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Post-Work Verification</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Inspection Following Regrinding &amp; Resharpening
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              All tools reground or resharpened at our plant undergo inspection to verify tooth face angles, surface finish, and pitch consistency prior to return:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Optical Profile Inspection
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Electronica PP 300 H (10×, 20×, 30×)</p>
              <p className="mt-2 text-sm text-slate-600">
                Verification of tooth face angle, gullet radius, and removal of worn cutting edges without undercutting.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> CNC Gear Testing
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">Hoffler ZP 260 &amp; KAPP NILES KNM 2X</p>
              <p className="mt-2 text-sm text-slate-600">
                Tooth lead, pitch error, and involute profile verification on spline broaches and gear cutting tools.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#0a3858] font-bold text-sm">
                <ShieldCheck className="h-5 w-5 text-amber-600" /> Hardness &amp; Dimensions
              </div>
              <p className="mt-2 text-xs font-semibold text-amber-700">FIE Group Tester &amp; Slip Gauges</p>
              <p className="mt-2 text-sm text-slate-600">
                Checking hardness across cutting teeth alongside Grade A slip gauge step and width checks.
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
              href="/products/contract-broaching"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Contract Broaching</h3>
              <p className="mt-2 text-xs text-slate-600">
                In-house batch broaching services in Chakan, Pune.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Contract Broaching &rarr;
              </span>
            </Link>

            <Link
              href="/products/round-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Round Broaches</h3>
              <p className="mt-2 text-xs text-slate-600">
                Internal round and spline broaches up to 200 mm dia.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Round Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/flat-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Flat Broaches</h3>
              <p className="mt-2 text-xs text-slate-600">
                Key and surface broaches up to 1500 mm length.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Flat Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/manufacturing"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <h3 className="font-bold text-slate-900">Manufacturing Plant</h3>
              <p className="mt-2 text-xs text-slate-600">
                Full machinery and equipment details at Chakan.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Manufacturing &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* Enquiry Banner */}
        <div className="mt-12 sm:mt-16 bg-[#eef4f8] border border-slate-200 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#092d49] sm:text-2xl">
              Need broach regrinding or cutter resharpening?
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Performed at our manufacturing unit in Mhalunge, Chakan, Pune for manufacturing customers across industrial sectors.
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
