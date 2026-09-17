import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Industries | Varad Engineering",
  description:
    "Varad Engineering serves various sectors of the mechanical industry with high-precision broach and tooling solutions.",
  alternates: { canonical: "/industries" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Industries", url: "https://" + company.domain + "/industries" },
]);

const industries = [
  { title: "Mechanical Industry", text: "High-precision tooling solutions developed to fulfill mechanical industry requirements." },
  { title: "Automotive & Drivetrain", text: "Broach and tooling requirements represented across the company's customer base and product applications." },
  { title: "Gear & Transmission", text: "Broach and inspection capabilities relevant to spline, keyway and gear-related manufacturing requirements." },
  { title: "Domestic & Export Market", text: "The company's mission includes meeting customer aspirations in both domestic and export markets." },
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
            <span className="text-slate-900">Industries</span>
          </div>
        </nav>

        <div className="mt-5 max-w-3xl sm:mt-8">
          <span className="eyebrow">Industries</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Precision tooling for sectors of the mechanical industry
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg">
            Varad Engineering provides precision tooling solutions for sectors of the mechanical industry, with a focus on broach manufacturing, regrinding and contract broaching.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {industries.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200 bg-white p-4 sm:p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900 sm:text-2xl">
                {item.title}
              </h2>
              <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-base">{item.text}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 border-t border-slate-200 pt-6 sm:mt-14 sm:pt-8">
          <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 bg-[#0b4267] px-5 text-sm font-bold text-white hover:bg-[#083653] sm:min-h-12 sm:px-6 sm:text-base">
            Discuss a Requirement <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
