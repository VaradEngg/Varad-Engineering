import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cog, Wrench, RefreshCw, Layers } from "lucide-react";
import { productCategories, company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Broaches & Tooling Solutions | Varad Engineering Chakan",
  description:
    "Explore precision flat broaches, round broaches, contract broaching, broach regrinding and tooling solutions from Varad Engineering in Mhalunge, Chakan, Pune.",
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
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Products &amp; Services</span>
          </div>
        </nav>

        <div className="mt-5 max-w-4xl sm:mt-8">
          <span className="eyebrow">Broach Manufacturing Unit</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            High Precision Broaching &amp; Tooling Solutions
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Varad Engineering manufactures precision flat and round broaches and provides contract broaching, broach regrinding/resharpening, and related tooling solutions from its facility in Mhalunge, Chakan, Pune for the mechanical manufacturing industry.
          </p>
        </div>

        {/* Specialized Dedicated Products Spotlight */}
        <section className="mt-10 sm:mt-14 border-t border-slate-200 pt-8 sm:pt-10">
          <div className="border-b border-slate-200 pb-3">
            <span className="eyebrow">Dedicated Product Pages</span>
            <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Specialized Broach Categories
            </h2>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-[#0a3858] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0a3858] font-bold">
                  <Wrench className="h-5 w-5 text-amber-600" /> Keyway Broaches
                </div>
                <p className="mt-1 text-xs font-semibold text-amber-700">Length: Up to 1500 mm</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Precision key broaches with and without chamfer for single and progressive pass internal keyway machining in gears, pulleys, and sprockets.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/products/keyway-broaches"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  Explore Keyway Broaches <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            <article className="border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-[#0a3858] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0a3858] font-bold">
                  <Cog className="h-5 w-5 text-amber-600" /> Spline Broaches
                </div>
                <p className="mt-1 text-xs font-semibold text-amber-700">Up to 200 mm dia × 2000 mm</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Internal combination spline broaches and interspaced spline broaches for automotive transmissions, prop shafts, and driveline sleeves.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/products/spline-broaches"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  Explore Spline Broaches <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            <article className="border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-[#0a3858] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0a3858] font-bold">
                  <Layers className="h-5 w-5 text-amber-600" /> Surface Broaches
                </div>
                <p className="mt-1 text-xs font-semibold text-amber-700">Length: Up to 1500 mm</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Linear surface broaches for external flat face and profile machining backed by ELB SCHLIFF surface grinding and imported sharpening machinery.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/products/surface-broaches"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  Explore Surface Broaches <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Primary Product Categories Grid */}
        <section className="mt-12 sm:mt-16">
          <div className="border-b border-slate-200 pb-3">
            <span className="eyebrow">Manufacturing &amp; Service Portfolio</span>
            <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Core Broaching Capabilities
            </h2>
          </div>

          <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-8 lg:grid-cols-2">
            {productCategories.map((product) => (
              <article
                key={product.slug}
                className="relative flex flex-col justify-between overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-amber-400 transition-all"
              >
                <div className="relative h-52 bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    quality={80}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="bg-slate-900 px-3 py-1 text-xs font-bold text-amber-400">
                      {product.capacity}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{product.title}</h3>
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
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 border border-amber-200 hover:bg-amber-100 transition-colors"
                    >
                      Request an Enquiry
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Services & Machining Applications Section */}
        <section className="mt-12 sm:mt-16 border-t border-slate-200 pt-8 sm:pt-10">
          <div className="border-b border-slate-200 pb-3">
            <span className="eyebrow">Services &amp; Applications</span>
            <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Specialized Services &amp; Machining Applications
            </h2>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-[#0a3858] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0a3858] font-bold">
                  <RefreshCw className="h-5 w-5 text-amber-600" /> Broach Regrinding &amp; Resharpening
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Dedicated imported machines (Arthur Klink, Pentagon, Lapointe) alongside cylindrical, surface, and spline grinding for flat and round broaches.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/services/broach-regrinding-resharpening"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  View Regrinding Services &rarr;
                </Link>
              </div>
            </article>

            <article className="border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-[#0a3858] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0a3858] font-bold">
                  <Wrench className="h-5 w-5 text-amber-600" /> Keyway Machining
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Application overview for internal keyway cutting supported by chamfered and non-chamfered key broaches and contract broaching.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/applications/keyway-machining"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  View Keyway Machining &rarr;
                </Link>
              </div>
            </article>

            <article className="border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-[#0a3858] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0a3858] font-bold">
                  <Cog className="h-5 w-5 text-amber-600" /> Spline Machining
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Application overview for internal spline production using combination and interspaced spline broaches for automotive &amp; mechanical parts.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href="/applications/spline-machining"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] hover:underline"
                >
                  View Spline Machining &rarr;
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Supporting Navigation Links */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            Need custom broach tooling backed by dedicated equipment and quality inspection?
          </p>
          <div className="flex flex-wrap items-center gap-4">
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
