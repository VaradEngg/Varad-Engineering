import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { company, clientList, inspectionFacilities, machinesList, productCategories } from "@/lib/company";
import { Hero } from "@/components/sections/Hero";
import { faqSchema } from "@/lib/schema";

export const metadata = {
  title: `${company.name} | Precision Broach Manufacturing & Tooling Solutions Chakan Pune`,
  description:
    "Varad Engineering is a Broach Manufacturing Unit in Mhalunge, Chakan, Pune, manufacturing flat broaches, round broaches and providing contract broaching and tooling solutions.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero />

      {/* What We Make */}
      <section className="border-y border-slate-200 bg-[#eef4f8] py-8 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">What We Make</p>
              <h2 className="section-title mt-2 sm:mt-4">Broaches &amp; tooling for manufacturing requirements</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold text-[#0b4267] hover:text-amber-700 sm:text-sm">View All Products <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((product) => (
              <article key={product.slug} className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100">
                  <Image src={product.image} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-[#092d49] sm:text-2xl">{product.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:min-h-[72px] sm:text-sm sm:leading-6">{product.description}</p>
                  <div className="mt-3 border-t border-slate-100 pt-3 sm:mt-4 sm:pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700 sm:text-xs">Capacity / Support</p>
                    <p className="mt-0.5 text-xs font-semibold text-slate-800 sm:mt-1 sm:text-sm">{product.capacity}</p>
                  </div>
                  <Link href={`/products/${product.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0b4267] sm:mt-5 sm:text-sm">View Details <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-8 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-6 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">About Varad Engineering</p>
            <h2 className="section-title mt-2 sm:mt-4">Broach Manufacturing Unit</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Varad Engineering was incorporated in 2018–2019 and focuses on high-precision tooling solutions for the mechanical industry.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
              The company provides complete tooling solutions with competitive pricing and minimal delivery lead time, supported by broach manufacturing, contract broaching, resharpening and grinding capabilities.
            </p>
            <Link href="/about" className="mt-5 inline-flex min-h-10 items-center gap-2 bg-[#0b4267] px-5 text-sm font-bold text-white hover:bg-[#083653] sm:mt-8 sm:min-h-12 sm:px-6 sm:text-base">
              Know More About Us <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
          <div className="relative min-h-[240px] overflow-hidden border border-slate-200 bg-slate-100 sm:min-h-[420px]">
            <Image src="/images/varad/cylindrical-grinding.jpg" alt="Grinding facility at Varad Engineering" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
        </div>
      </section>

      {/* Manufacturing capabilities */}
      <section className="bg-[#092d49] py-8 text-white sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker text-amber-300">Manufacturing Capabilities</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:mt-4 sm:text-4xl lg:text-5xl">Machines that support broach manufacturing and regrinding</h2>
            </div>
            <Link href="/manufacturing" className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 sm:text-sm">View All <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {machinesList.slice(0, 5).map((machine) => (
              <article key={machine.name} className="overflow-hidden border border-white/10 bg-[#0d3856]">
                <div className="relative h-40 sm:h-48 bg-slate-800"><Image src={machine.image} alt={`${machine.name} at Varad Engineering`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs font-bold text-amber-300 sm:text-sm">{machine.makes}</div>
                  <h3 className="mt-1.5 text-lg font-bold text-white sm:mt-3 sm:text-xl">{machine.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-200 sm:mt-3 sm:text-sm sm:leading-6">{machine.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-white py-8 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-6 sm:gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker">Quality &amp; Inspection</p>
            <h2 className="section-title mt-2 sm:mt-4">Inspection facilities for precision work</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">The listed inspection setup includes profile projection, CNC gear testing, slip gauges, inspection pin rollers and hardness testing.</p>
            <Link href="/quality" className="mt-5 inline-flex min-h-10 items-center gap-2 border border-[#0b4267] px-5 text-sm font-bold text-[#0b4267] hover:bg-[#0b4267] hover:text-white sm:mt-8 sm:min-h-12 sm:px-6 sm:text-base"><ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" /> View Quality Facilities</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {inspectionFacilities.slice(0, 4).map((facility) => (
              <article key={`${facility.name}-${facility.spec}`} className="overflow-hidden border border-slate-200 bg-[#f5f8fa]">
                <div className="relative h-28 sm:h-36 bg-slate-100"><Image src={facility.image} alt={facility.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" /></div>
                <div className="p-3 sm:p-4"><h3 className="text-sm font-bold text-[#092d49] sm:text-base">{facility.name}</h3><p className="mt-0.5 text-[11px] font-bold text-amber-700 sm:mt-1 sm:text-xs">{facility.spec}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="border-y border-slate-200 bg-[#f4f7f9] py-8 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Gallery</p>
              <h2 className="section-title mt-2 sm:mt-4">Our facility &amp; equipment</h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 text-xs font-bold text-[#0b4267] hover:text-amber-700 sm:text-sm">View Full Gallery <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative h-40 sm:h-56 overflow-hidden border border-slate-200 bg-slate-100">
              <Image src="/images/varad/cnc.jpg" alt="Workshop at Varad Engineering" fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white sm:px-4 sm:py-2.5 sm:text-sm">Workshop</div>
            </div>
            <div className="relative h-40 sm:h-56 overflow-hidden border border-slate-200 bg-slate-100">
              <Image src="/images/varad/arthur-klink.jpg" alt="Broach resharpening machine at Varad Engineering" fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white sm:px-4 sm:py-2.5 sm:text-sm">Machines</div>
            </div>
            <div className="relative h-40 sm:h-56 overflow-hidden border border-slate-200 bg-slate-100">
              <Image src="/images/varad/broaches.jpg" alt="Precision broaches" fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white sm:px-4 sm:py-2.5 sm:text-sm">Broaches</div>
            </div>
            <div className="relative h-40 sm:h-56 overflow-hidden border border-slate-200 bg-slate-100">
              <Image src="/images/varad/profile-projector.jpg" alt="Profile projector inspection equipment" fill className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white sm:px-4 sm:py-2.5 sm:text-sm">Inspection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="bg-white py-8 sm:py-16">
        <div className="container-shell text-center">
          <p className="section-kicker justify-center">Our Customers</p>
          <h2 className="mt-2 text-2xl font-bold text-[#092d49] sm:mt-4 sm:text-4xl">Manufacturing customers</h2>
          <div className="mt-6 grid grid-cols-2 items-center gap-3 sm:mt-10 sm:grid-cols-4 lg:grid-cols-7 sm:gap-5">
            {clientList.slice(0, 14).map((client) => (
              <div key={client.name} className="flex h-20 sm:h-24 items-center justify-center border border-slate-200 bg-white p-3 sm:p-4 grayscale transition hover:grayscale-0">
                <Image src={client.logo} alt={client.name} width={130} height={80} className="max-h-12 sm:max-h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-400 py-8 sm:py-16">
        <div className="container-shell flex flex-col gap-5 sm:gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-800 sm:text-sm sm:tracking-[0.2em]">Have a broach requirement?</p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 sm:mt-2 sm:text-4xl">Talk directly with Varad Engineering</h2>
            <p className="mt-1.5 text-sm text-slate-800 sm:mt-2 sm:text-base">Share your requirement with our team or call us directly.</p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <a href={`tel:${company.phone}`} className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#092d49] px-5 text-sm font-bold text-white hover:bg-[#061f32] sm:min-h-14 sm:px-7 sm:text-base"><Phone className="h-4 w-4 sm:h-5 sm:w-5" /> Call {company.phoneDisplay}</a>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-[#092d49] px-5 text-sm font-bold text-[#092d49] hover:bg-white/40 sm:min-h-14 sm:px-7 sm:text-base">Request an Enquiry <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" /></Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
