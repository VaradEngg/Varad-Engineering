import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { productCategories, company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Products & Services | Varad Engineering Broach Manufacturing",
  description:
    "Explore Varad Engineering's complete range of Flat Broaches, Round Broaches, Contract Broaching, and Tooling Accessories & Cutter Sharpening Services.",
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

        <div className="mt-8 max-w-4xl">
          <span className="eyebrow">Products &amp; Services</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            High Precision Broaching &amp; Tooling Solutions
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            From new flat and round broach fabrication to contract broaching and regrinding, Varad Engineering delivers complete tooling solutions backed by quality inspection.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {productCategories.map((product) => (
            <article
              key={product.slug}
              className="relative flex flex-col justify-between overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-amber-400 transition-all"
            >
              <div className="relative h-52 bg-slate-100">
                <Image src={product.image} alt={product.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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
                    Product Variants &amp; Operations:
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
      </div>
    </>
  );
}
