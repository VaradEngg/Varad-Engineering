import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { productCategories, company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Broaches & Tooling Solutions | Varad Engineering Chakan",
  description:
    "Explore precision flat broaches, round broaches, contract broaching, broach regrinding and tooling solutions from Varad Engineering in Chakan, Pune.",
  alternates: { canonical: "/products" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Products", url: "https://" + company.domain + "/products" },
]);

export default function ProductsPage() {
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
            <span className="text-slate-900">Products &amp; Services</span>
          </div>
        </nav>

        <div className="mt-5 max-w-4xl sm:mt-8">
          <span className="eyebrow">Products &amp; Services</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            High Precision Broaching &amp; Tooling Solutions
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Varad Engineering manufactures precision flat and round broaches and provides contract broaching, broach regrinding and related tooling solutions for the mechanical manufacturing industry.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {productCategories.map((product) => (
            <article
              key={product.slug}
              className="relative flex flex-col justify-between overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-amber-400 transition-all"
            >
              <div className="relative h-52 bg-slate-100">
                <Image src={product.image} alt={product.title} fill quality={80} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-5 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="bg-slate-900 px-3 py-1 text-xs font-bold text-amber-400">
                    {product.capacity}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">{product.title}</h2>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{product.description}</p>

                <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Types &amp; Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-700"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 border border-amber-200 hover:bg-amber-100"
                  >
                    Request an Enquiry
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Supporting Navigation Links */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            Need custom broach tooling backed by dedicated equipment and quality inspection?
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/manufacturing"
              className="text-sm font-semibold text-[#0b4267] hover:underline"
            >
              Manufacturing Capabilities &rarr;
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
