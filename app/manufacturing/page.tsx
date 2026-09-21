import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company, machinesList } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Manufacturing Capabilities | Varad Engineering Broach Unit Chakan",
  description:
    "Explore Varad Engineering's broach manufacturing machinery, Arthur Klink resharpening, ELB SCHLIFF surface grinding, and TOS cylindrical grinding in Mhalunge, Chakan, Pune.",
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
  },
  {
    title: "Round Broaches",
    text: "Spline, across-flat, double-D, hexagonal and special profile broaches; round broach sharpening up to 200 mm diameter and 2000 mm length.",
    image: "/images/varad/round-broach.jpg",
  },
  {
    title: "Contract Broaching",
    text: "Contract broaching services for precision manufacturing requirements.",
    image: "/images/varad/broach-detail.jpg",
  },
  {
    title: "Broach Resharpening & Regrinding",
    text: "Dedicated re-sharpening and regrinding machines, including dedicated flat and round broach equipment.",
    image: "/images/varad/arthur-klink.jpg",
  },
  {
    title: "Grinding",
    text: "Cylindrical grinding up to 125 mm diameter and 1800 mm length; surface grinding up to 1500 mm flat broach length; spline grinding up to 125 mm diameter and 2000 mm length.",
    image: "/images/varad/surface-grinding.jpg",
  },
  {
    title: "Tooling Support",
    text: "Tooling accessories complement the broach manufacturing and regrinding capabilities.",
    image: "/images/varad/lathe.jpg",
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
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900">Manufacturing</span>
          </div>
        </nav>

        <div className="mt-5 max-w-3xl sm:mt-8">
          <span className="eyebrow">Manufacturing</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Manufacturing Capabilities
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            The manufacturing setup covers broaches, contract broaching, re-sharpening / regrinding and grinding capabilities, supported by inspection facilities.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-6 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-40 sm:h-48 bg-slate-100">
                <Image src={item.image} alt={item.title} fill quality={80} className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">{item.title}</h2>
                <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Machine List */}
        <div className="mt-8 sm:mt-16">
          <div className="border-b border-slate-200 pb-3 sm:pb-5">
            <span className="eyebrow">Equipment</span>
            <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl md:text-4xl">Manufacturing machines</h2>
          </div>

          <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {machinesList.map((machine) => (
              <article key={machine.name} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative h-40 sm:h-52 bg-slate-100">
                  <Image src={machine.image} alt={`${machine.name} at Varad Engineering`} fill quality={80} className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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

        {/* CTA */}
        <div className="mt-8 border-t border-slate-200 pt-6 sm:mt-16 sm:pt-8">
          <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-[#0b4267] px-6 text-base font-bold text-white hover:bg-[#083653]">
            Discuss a Requirement <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
