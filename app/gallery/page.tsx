import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company, machinesList, inspectionFacilities } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Gallery | Varad Engineering",
  description:
    "View Varad Engineering broaches, workshop, manufacturing machines and quality inspection facilities in Mhalunge, Chakan, Pune.",
  alternates: { canonical: "/gallery" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Gallery", url: "https://" + company.domain + "/gallery" },
]);

const productImages = [
  { src: "/images/varad/broach-hero.jpg", title: "Broach Manufacturing", alt: "Broaches manufactured by Varad Engineering" },
  { src: "/images/varad/broaches.jpg", title: "Broaches", alt: "Precision broaches" },
  { src: "/images/varad/round-broach.jpg", title: "Round Broach", alt: "Round broach" },
  { src: "/images/varad/broach-detail.jpg", title: "Broach Detail", alt: "Close view of a precision broach" },
];

const workshopImages = [
  { src: "/images/varad/cnc.jpg", title: "CNC Machining Setup", alt: "CNC machining facility at Varad Engineering" },
  { src: "/images/varad/cylindrical-grinding.jpg", title: "Grinding Facility", alt: "Grinding setup at Varad Engineering" },
];

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="bg-white">
        <div className="container-shell section-shell">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <span className="text-slate-900">Gallery</span>
            </div>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="eyebrow">Gallery</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Our products, workshop, machines and inspection facilities
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A visual look at the broaches, manufacturing setup and inspection facilities at Varad Engineering.
            </p>
          </div>

          <section className="mt-14">
            <div className="flex items-end justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="section-kicker">Products</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Broaches & tooling</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {productImages.map((image) => (
                <figure key={image.src} className="group overflow-hidden border border-slate-200 bg-white">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" />
                  </div>
                  <figcaption className="p-4 text-base font-bold text-slate-900">{image.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="border-b border-slate-200 pb-4">
              <p className="section-kicker">Workshop</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Manufacturing environment</h2>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {workshopImages.map((image) => (
                <figure key={image.src} className="group overflow-hidden border border-slate-200 bg-white">
                  <div className="relative aspect-[16/9] bg-slate-100">
                    <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <figcaption className="p-4 text-base font-bold text-slate-900">{image.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="border-b border-slate-200 pb-4">
              <p className="section-kicker">Machines</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Manufacturing equipment</h2>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {machinesList.map((machine) => (
                <figure key={machine.name} className="overflow-hidden border border-slate-200 bg-white">
                  <div className="relative h-52 bg-slate-100">
                    <Image src={machine.image} alt={`${machine.name} at Varad Engineering`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <figcaption className="p-5">
                    <p className="text-sm font-bold text-amber-700">{machine.makes}</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">{machine.name}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="border-b border-slate-200 pb-4">
              <p className="section-kicker">Quality & Inspection</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Inspection equipment</h2>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {inspectionFacilities.map((item) => (
                <figure key={`${item.name}-${item.spec}`} className="overflow-hidden border border-slate-200 bg-white">
                  <div className="relative h-52 bg-slate-100">
                    <Image src={item.image} alt={`${item.name} at Varad Engineering`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <figcaption className="p-5">
                    <p className="text-sm font-bold text-amber-700">{item.spec}</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">{item.name}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="mt-16 border-t border-slate-200 pt-8">
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 bg-[#0b4267] px-6 text-base font-bold text-white hover:bg-[#083653]">
              Discuss a Requirement <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
