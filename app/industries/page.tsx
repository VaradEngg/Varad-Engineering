import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Industries & Applications | Varad Engineering Chakan",
  description:
    "Explore the mechanical manufacturing applications supported by Varad Engineering's precision broaches, contract broaching and tooling solutions in Chakan, Pune.",
  alternates: { canonical: "/industries" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Industries & Applications", url: "https://" + company.domain + "/industries" },
]);

const applications = [
  {
    title: "Keyway Machining",
    text: "Precision keyway broaching with and without chamfer for mechanical drives, pulleys, gears, and shafts.",
    link: "/products/flat-broaches",
  },
  {
    title: "Spline Machining",
    text: "Combination and interspaced spline broaching for automotive drivetrain, transmission gears, and industrial axles.",
    link: "/products/round-broaches",
  },
  {
    title: "Special Profiles",
    text: "Double-D, hexagonal, across-flat, and custom internal geometric profiles broached to tight engineering tolerances.",
    link: "/products/round-broaches",
  },
  {
    title: "Surface Broaching",
    text: "Flat and surface broaching up to 1500 mm length for high-precision flat surfaces and guided contours.",
    link: "/products/flat-broaches",
  },
  {
    title: "Contract Broaching",
    text: "Batch production contract broaching backed by CNC gear inspection, slip gauge calibration, and optical profile verification.",
    link: "/products/contract-broaching",
  },
  {
    title: "Tool Reconditioning & Sharpening",
    text: "Complete broach regrinding, gear shaving cutter sharpening, shaping cutter and hob sharpening using imported equipment.",
    link: "/products/tooling-accessories-sharpening",
  },
];

export default function IndustriesPage() {
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
            <span className="text-slate-900">Industries &amp; Applications</span>
          </div>
        </nav>

        <div className="mt-5 max-w-3xl sm:mt-8">
          <span className="eyebrow">Capabilities &amp; Uses</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Industries &amp; Applications
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg">
            Varad Engineering provides precision tooling solutions for sectors of the mechanical industry, with a focus on broach manufacturing, regrinding and contract broaching in Mhalunge, Chakan, Pune.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-amber-400 transition-colors"
            >
              <div>
                <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {item.title}
                </h2>
                <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
                  {item.text}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:text-amber-700"
                >
                  View Related Tooling <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:mt-14 sm:pt-8">
          <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 bg-[#0b4267] px-5 text-sm font-bold text-white hover:bg-[#083653] sm:min-h-12 sm:px-6 sm:text-base">
            Discuss a Requirement <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              All Products &rarr;
            </Link>
            <Link
              href="/manufacturing"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              Manufacturing Capabilities &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
