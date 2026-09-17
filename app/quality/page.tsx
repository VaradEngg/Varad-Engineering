import Image from "next/image";
import Link from "next/link";
import { company, qualityPolicy, inspectionFacilities } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Quality Policy & Inspection | Varad Engineering",
  description:
    "Varad Engineering quality policy and listed inspection facilities, including profile projection, CNC gear testing, slip gauges, inspection pin rollers and hardness testing.",
  alternates: { canonical: "/quality" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Quality", url: "https://" + company.domain + "/quality" },
]);

export default function QualityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container-shell section-shell">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <span className="text-slate-900">Quality</span>
          </div>
        </nav>

        <div className="mt-5 max-w-4xl sm:mt-8">
          <span className="eyebrow">Quality Policy</span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Quality, accuracy and inspection
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Varad Engineering&apos;s quality policy covers materials, workmanship, accuracies, timeline and service, with continual improvement through a quality system directed by a strong management team.
          </p>
        </div>

        <div className="mt-6 border border-slate-900 bg-slate-950 p-5 text-white sm:mt-10 sm:p-7 md:p-9">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300 sm:text-sm sm:tracking-[0.18em]">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" /> Official Quality Policy
          </div>
          <blockquote className="mt-3 max-w-4xl text-base leading-7 text-slate-100 sm:mt-5 sm:text-xl sm:leading-8 md:text-2xl">
            “{qualityPolicy.statement}”
          </blockquote>
          <p className="mt-3 max-w-3xl text-xs leading-5 text-slate-300 sm:mt-5 sm:text-sm sm:leading-6">{qualityPolicy.commitment}</p>
        </div>

        <div className="mt-8 sm:mt-16">
          <div className="border-b border-slate-200 pb-3 sm:pb-5">
            <span className="eyebrow">Inspection Facilities</span>
            <h2 className="mt-1.5 text-xl font-bold text-slate-900 sm:mt-2 sm:text-3xl md:text-4xl">Measuring and testing equipment</h2>
          </div>

          <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inspectionFacilities.map((facility) => (
              <article key={`${facility.name}-${facility.spec}`} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative h-40 sm:h-48 bg-slate-200">
                  <Image src={facility.image} alt={`${facility.name} inspection equipment`} fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 sm:text-xs">{facility.spec}</span>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 sm:mt-2 sm:text-xl">{facility.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-relaxed">{facility.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
