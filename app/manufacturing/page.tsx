import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Cog, Layers, RefreshCw } from "lucide-react";
import { company, machinesList } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Manufacturing Capabilities | Varad Engineering Chakan",
  description:
    "Explore Varad Engineering's broach manufacturing, resharpening, regrinding and grinding capabilities in Mhalunge, Chakan, Pune, including flat and round broach production.",
  alternates: { canonical: "/manufacturing" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  {
    name: "Manufacturing",
    url: "https://" + company.domain + "/manufacturing",
  },
]);

const capabilities = [
  {
    title: "Flat Broaches",
    text: "Key broaches with and without chamfer, and surface broaches up to 1500 mm length.",
    image: "/images/varad/broaches.jpg",
    link: "/products/flat-broaches",
    linkText: "View Flat Broaches",
  },
  {
    title: "Round Broaches",
    text: "Spline, across-flat, double-D, hexagonal and special profile broaches up to 200 mm diameter and 2000 mm length.",
    image: "/images/varad/round-broach.jpg",
    link: "/products/round-broaches",
    linkText: "View Round Broaches",
  },
  {
    title: "Contract Broaching",
    text: "Contract broaching services for precision automotive and mechanical manufacturing requirements.",
    image: "/images/varad/broach-detail.jpg",
    link: "/products/contract-broaching",
    linkText: "View Contract Broaching",
  },
  {
    title: "Broach Resharpening & Regrinding",
    text: "Dedicated re-sharpening and regrinding machines, including dedicated flat and round broach equipment.",
    image: "/images/varad/arthur-klink.jpg",
    link: "/services/broach-regrinding-resharpening",
    linkText: "View Regrinding Services",
  },
  {
    title: "Grinding Capabilities",
    text: "Cylindrical grinding up to 125 mm diameter and 1800 mm length; surface grinding up to 1500 mm flat broach length; spline grinding up to 125 mm diameter and 2000 mm length.",
    image: "/images/varad/surface-grinding.jpg",
    link: "/products/spline-broaches",
    linkText: "Explore Spline Grinding",
  },
  {
    title: "Tooling Support",
    text: "Precision lathe turning, universal milling, and tooling accessories complement the broach manufacturing capabilities.",
    image: "/images/varad/lathe.jpg",
    link: "/products/tooling-accessories-sharpening",
    linkText: "View Tooling Accessories",
  },
];

export default function ManufacturingPage() {
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
            <span className="text-slate-900 font-medium">Manufacturing</span>
          </div>
        </nav>

        <div className="mt-5 max-w-3xl sm:mt-8">
          <span className="eyebrow">Manufacturing Setup</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Manufacturing Capabilities
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Varad Engineering provides specialized manufacturing capabilities across flat broach manufacturing, round broach manufacturing, contract broaching, broach resharpening and regrinding, cylindrical grinding, surface grinding, spline grinding, and precision quality inspection at its dedicated unit in Mhalunge, Chakan, Pune.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 sm:h-48 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={80}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="p-4 sm:p-6 pt-0">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  {item.linkText} &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Dedicated Broach Products Manufactured Here */}
        <section className="mt-12 sm:mt-16 border-t border-slate-200 pt-10">
          <div className="border-b border-slate-200 pb-3">
            <span className="eyebrow">Broach Solutions</span>
            <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Specialized Tooling Manufactured in Chakan
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/products/keyway-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Wrench className="h-4 w-4 text-amber-600" /> Keyway Broaches
              </div>
              <p className="mt-2 text-xs text-slate-600">
                With &amp; without chamfer up to 1500 mm length.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Keyway Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/spline-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Cog className="h-4 w-4 text-amber-600" /> Spline Broaches
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Combination &amp; interspaced up to 200 mm dia.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Spline Broaches &rarr;
              </span>
            </Link>

            <Link
              href="/products/surface-broaches"
              className="border border-slate-200 bg-white p-5 shadow-sm hover:border-[#0a3858] transition-colors"
            >
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Layers className="h-4 w-4 text-amber-600" /> Surface Broaches
              </div>
              <p className="mt-2 text-xs text-slate-600">
                External flat face broaching up to 1500 mm.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Surface Broaches &rarr;
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
                Resharpening on imported machinery.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0b4267]">
                View Regrinding &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* Machine List */}
        <div className="mt-12 sm:mt-16">
          <div className="border-b border-slate-200 pb-3 sm:pb-5">
            <span className="eyebrow">Equipment</span>
            <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl md:text-4xl">
              Manufacturing Equipment
            </h2>
          </div>

          <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {machinesList.map((machine) => (
              <article key={machine.name} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative h-40 sm:h-52 bg-slate-100">
                  <Image
                    src={machine.image}
                    alt={`${machine.name} at Varad Engineering`}
                    fill
                    quality={80}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs font-bold text-amber-700 sm:text-sm">{machine.makes}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 sm:mt-2 sm:text-xl">{machine.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">{machine.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA & Internal Linking */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:mt-16 sm:pt-8">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-2 bg-[#0b4267] px-6 text-base font-bold text-white hover:bg-[#083653] transition-colors"
          >
            Discuss a Requirement <ArrowRight className="h-5 w-5" />
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              View Products &rarr;
            </Link>
            <Link
              href="/quality"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              Quality &amp; Inspection &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
