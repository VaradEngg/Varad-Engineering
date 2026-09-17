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

        <div className="mt-8 max-w-4xl">
          <span className="eyebrow">Quality Policy</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Quality, accuracy and inspection
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Varad Engineering&apos;s quality policy covers materials, workmanship, accuracies, timeline and service, with continual improvement through a quality system directed by a strong management team.
          </p>
        </div>

        <div className="mt-10 border border-slate-900 bg-slate-950 p-7 text-white md:p-9">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            <ShieldCheck className="h-5 w-5" /> Official Quality Policy
          </div>
          <blockquote className="mt-5 max-w-4xl text-xl leading-8 text-slate-100 md:text-2xl">
            “{qualityPolicy.statement}”
          </blockquote>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300">{qualityPolicy.commitment}</p>
        </div>

        <div className="mt-16">
          <div className="border-b border-slate-200 pb-5">
            <span className="eyebrow">Inspection Facilities</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Measuring and testing equipment</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inspectionFacilities.map((facility) => (
              <article key={`${facility.name}-${facility.spec}`} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48 bg-slate-200">
                  <Image src={facility.image} alt={`${facility.name} inspection equipment`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">{facility.spec}</span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{facility.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{facility.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
