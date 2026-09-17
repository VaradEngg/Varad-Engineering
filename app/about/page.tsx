import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Eye } from "lucide-react";
import { company, vision, mission, coreValues, qualityPolicy } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "About Us | Varad Engineering Broach Manufacturing Unit",
  description:
    "Learn about Varad Engineering, a specialized Broach Manufacturing Unit in Chakan, Pune, incorporated in 2018–2019.",
  alternates: { canonical: "/about" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "About", url: "https://" + company.domain + "/about" },
]);

export default function AboutPage() {
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
            <span className="text-slate-900">About Us</span>
          </div>
        </nav>

        <div className="mt-5 grid gap-6 sm:mt-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="eyebrow">About Varad Engineering</span>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl md:text-5xl">
              Broach Manufacturing Unit
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-relaxed">
              Varad Engineering was incorporated in the year <strong>2018 – 2019</strong> as a sole proprietorship company owned by <strong>Mr. Abhishek Tayade</strong> with a vision to serve various sectors of the mechanical industry by supplying high-precision broaches and tooling solutions with competitive pricing and minimal delivery lead time.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-relaxed">
              In continuation to this, <strong>M/s Sayali Engineering</strong> is a sister concern incorporated in the year <strong>2008 – 2009</strong>, engaged in manufacturing precision gear components, CNC carbide tooling solutions, and specialized resharpening of gear shaving cutters, shaping cutters, and hobs.
            </p>
          </div>
          <div className="relative min-h-[240px] overflow-hidden border border-slate-200 bg-slate-100 sm:min-h-[380px]">
            <Image src="/images/varad/cnc.jpg" alt="Varad Engineering workshop and manufacturing facility" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="mt-8 grid gap-5 sm:mt-14 sm:gap-8 lg:grid-cols-2">
          <article className="border border-slate-200 bg-white p-5 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center bg-slate-900 text-amber-400 mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{vision.title}</h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                {vision.description}
              </p>
            </div>
            <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
              {vision.bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center bg-slate-900 text-amber-400 mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{mission.title}</h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                {mission.description}
              </p>
            </div>
            <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
              {mission.bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Quality Policy */}
        <div className="mt-14 border border-slate-200 bg-slate-950 p-7 text-white md:p-9">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Quality Policy</div>
          <blockquote className="mt-4 max-w-4xl text-lg leading-8 text-slate-100 md:text-xl">
            &ldquo;{qualityPolicy.statement}&rdquo;
          </blockquote>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">{qualityPolicy.commitment}</p>
        </div>

        {/* Our Values Grid */}
        <div className="mt-14">
          <div className="mb-8">
            <span className="eyebrow">Our Foundation</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, idx) => (
              <div
                key={value}
                className="flex items-center gap-3 border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-amber-100 text-amber-800 font-bold text-xs">
                  {idx + 1}
                </div>
                <span className="text-sm font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team & Infrastructure */}
        <div className="mt-8 border border-slate-200 bg-slate-50 p-5 sm:mt-14 sm:p-8">
          <span className="eyebrow">Workforce &amp; Sister Concern</span>
          <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-3xl">Expert Team &amp; Manufacturing Synergy</h2>
          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-6">
            We have a dedicated team of <strong>{company.team.total} skilled professionals</strong> geared up for precision manufacturing of broaches. Each team member is expertized in their respective fields:
          </p>
          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-3">
            <div className="border border-slate-200 bg-white p-4 text-center">
              <div className="text-2xl font-black text-[#0b4267] sm:text-3xl">{company.team.shopFloor}</div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 sm:text-xs">Shop Floor Technicians</div>
            </div>
            <div className="border border-slate-200 bg-white p-4 text-center">
              <div className="text-2xl font-black text-[#0b4267] sm:text-3xl">{company.team.salesMarketing}</div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 sm:text-xs">Marketing &amp; Sales</div>
            </div>
            <div className="border border-slate-200 bg-white p-4 text-center">
              <div className="text-2xl font-black text-[#0b4267] sm:text-3xl">{company.team.backOffice}</div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 sm:text-xs">Back Office Support</div>
            </div>
          </div>
          <div className="mt-5 border-t border-slate-200 pt-4 sm:mt-6 sm:pt-5">
            <h3 className="text-sm font-bold text-slate-900 sm:text-base">Sister Concern: M/s Sayali Engineering (Est. 2008 – 2009)</h3>
            <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
              Owned by the same family, Sayali Engineering manufactures precision gear components, CNC carbide tooling solutions, and handles resharpening of gear shaving cutters, shaping cutters, and hobs.
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-14 border border-slate-200 bg-slate-900 p-8 text-white md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Partner with Varad Engineering Today
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 text-base leading-relaxed">
            Located at Mhalunge, Chakan, Varad Engineering combines its broach manufacturing setup with dedicated personnel and precision grinding and inspection equipment to serve tooling requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition-colors"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
