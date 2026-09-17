import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy information for the Varad Engineering website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-shell section-shell">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900">Privacy Policy</span>
        </div>
      </nav>

      <div className="mt-8 max-w-3xl">
        <span className="eyebrow">Privacy</span>
        <h1 className="mt-4 text-4xl md:text-5xl">Privacy policy</h1>
        <p className="mt-6 text-lg text-slate-600">
          This website provides information about Varad Engineering, its broach manufacturing unit, products, tooling capabilities and contact details. Any information shared through the enquiry channel is intended to be used for responding to the enquiry and related business communication.
        </p>
        <p className="mt-4 text-slate-600">
          For any privacy-related questions, please contact Varad Engineering using the contact details provided on this website.
        </p>
      </div>
    </div>
  );
}
