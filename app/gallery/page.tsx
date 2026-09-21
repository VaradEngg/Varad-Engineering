import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company, machinesList, inspectionFacilities } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Gallery | Varad Engineering Chakan",
  description:
    "View Varad Engineering's broaches, manufacturing equipment, workshop and inspection facilities in Mhalunge, Chakan, Pune.",
  alternates: { canonical: "/gallery" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Gallery", url: "https://" + company.domain + "/gallery" },
]);

const productImages = [
  { src: "/images/varad/broach-hero.jpg", title: "Broach Manufacturing", alt: "Precision broaches manufactured by Varad Engineering" },
  { src: "/images/varad/broaches.jpg", title: "Broaches", alt: "Precision flat and keyway broaches manufactured by Varad Engineering" },
  { src: "/images/varad/round-broach.jpg", title: "Round Broach", alt: "Round broach manufactured by Varad Engineering" },
  { src: "/images/varad/broach-detail.jpg", title: "Broach Detail", alt: "Detail view of precision broach tooling at Varad Engineering" },
];

const workshopImages = [
  { src: "/images/varad/cnc.jpg", title: "CNC Machining Setup", alt: "Varad Engineering manufacturing workshop in Chakan, Pune" },
  { src: "/images/varad/cylindrical-grinding.jpg", title: "Grinding Facility", alt: "Grinding facility at Varad Engineering workshop in Chakan, Pune" },
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

          <div className="mt-5 max-w-3xl sm:mt-8">
            <span className="eyebrow">Gallery</span>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
              Varad Engineering Gallery
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              A visual look at the precision broaches, manufacturing workshop, machinery and quality inspection facilities at Varad Engineering in Mhalunge, Chakan, Pune.
            </p>
          </div>

          <section className="mt-8 sm:mt-14">
            <div className="flex items-end justify-between border-b border-slate-200 pb-3 sm:pb-4">
              <div>
                <p className="section-kicker">Products</p>
                <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl">Broaches &amp; tooling</h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {productImages.map((image) => (
                <figure key={image.src} className="group overflow-hidden border border-slate-200 bg-white">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image src={image.src} alt={image.alt} fill quality={80} className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" />
                  </div>
                  <figcaption className="p-3 text-sm font-bold text-slate-900 sm:p-4 sm:text-base">{image.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-8 sm:mt-16">
            <div className="border-b border-slate-200 pb-3 sm:pb-4">
              <p className="section-kicker">Workshop</p>
              <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl">Manufacturing environment</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-5 md:grid-cols-2">
              {workshopImages.map((image) => (
                <figure key={image.src} className="group overflow-hidden border border-slate-200 bg-white">
                  <div className="relative aspect-[16/9] bg-slate-100">
                    <Image src={image.src} alt={image.alt} fill quality={80} className="object-cover transition duration-500 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <figcaption className="p-3 text-sm font-bold text-slate-900 sm:p-4 sm:text-base">{image.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-8 sm:mt-16">
            <div className="border-b border-slate-200 pb-3 sm:pb-4">
              <p className="section-kicker">Machines</p>
              <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl">Manufacturing equipment</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {machinesList.map((machine) => (
                <figure key={machine.name} className="overflow-hidden border border-slate-200 bg-white">
                  <div className="relative h-40 sm:h-52 bg-slate-100">
                    <Image src={machine.image} alt={`${machine.name} at Varad Engineering`} fill quality={80} className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <figcaption className="p-4 sm:p-5">
                    <p className="text-xs font-bold text-amber-700 sm:text-sm">{machine.makes}</p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900 sm:mt-2 sm:text-xl">{machine.name}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-8 sm:mt-16">
            <div className="border-b border-slate-200 pb-3 sm:pb-4">
              <p className="section-kicker">Quality &amp; Inspection</p>
              <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl">Inspection equipment</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {inspectionFacilities.map((item) => (
                <figure key={`${item.name}-${item.spec}`} className="overflow-hidden border border-slate-200 bg-white">
                  <div className="relative h-40 sm:h-52 bg-slate-100">
                    <Image src={item.image} alt={`${item.name} quality inspection equipment at Varad Engineering`} fill quality={80} className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <figcaption className="p-4 sm:p-5">
                    <p className="text-xs font-bold text-amber-700 sm:text-sm">{item.spec}</p>
                    <h3 className="mt-1 text-lg font-bold text-slate-900 sm:mt-2 sm:text-xl">{item.name}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:mt-16 sm:pt-8">
            <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 bg-[#0b4267] px-5 text-sm font-bold text-white hover:bg-[#083653] sm:min-h-12 sm:px-6 sm:text-base">
              Discuss a Requirement <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="text-sm font-semibold text-[#0b4267] hover:underline"
              >
                Products &amp; Tooling &rarr;
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
      </main>
    </>
  );
}
