import Link from "next/link";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, FileText } from "lucide-react";

export const metadata = {
  title: "Contact Us | Varad Engineering Broach Unit Chakan",
  description:
    "Contact Varad Engineering, Mhalunge, Chakan, Pune for broach manufacturing, contract broaching and tooling requirements.",
  alternates: { canonical: "/contact" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Contact", url: "https://" + company.domain + "/contact" },
]);

export default function ContactPage() {
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
            <span className="text-slate-900">Contact Us</span>
          </div>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Have a Broach Requirement?</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Discuss Your Broach &amp; Tooling Requirement
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Contact Varad Engineering at its Broach Manufacturing Unit in Mhalunge, Chakan, Pune for broach manufacturing, contract broaching and tooling requirements.
            </p>
            {/* Official Contact Details Card */}
            <div className="mt-8 border border-slate-200 bg-white p-6 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Mobile / Contact No.</div>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-lg font-bold text-amber-700 hover:text-amber-800"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <MapPin className="h-5 w-5 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Works Address</div>
                  <div className="text-sm font-medium text-slate-800 leading-relaxed">
                    Mhalunge, Chakan, Tal. Khed, Dist. Pune – 410501, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <FileText className="h-5 w-5 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">GST Registration</div>
                  <div className="text-sm font-mono font-bold text-slate-900">{company.gstin}</div>
                </div>
              </div>

              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <a href={`tel:${company.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#0b4267] px-5 text-sm font-bold text-white hover:bg-[#083653]">
                  <Phone className="h-4 w-4" /> Call Us
                </a>
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-amber-400 px-5 text-sm font-bold text-slate-950 hover:bg-amber-300">
                  Request an Enquiry
                </Link>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
