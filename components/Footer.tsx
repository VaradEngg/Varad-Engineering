import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company, navItems } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container-shell py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-slate-700 bg-white text-sm font-bold text-slate-950">
                VE
              </div>
              <div className="sm:order-3">
                <div className="text-base font-semibold tracking-[0.22em] text-white">
                  VARAD
                </div>
                <div className="text-[10px] tracking-[0.24em] text-slate-400">
                  ENGINEERING
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-slate-300">
              High-precision broach manufacturing and tooling solutions for the mechanical industry.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navItems
                .filter((item) => item.href !== "/products")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Products & Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/products/flat-broaches"
                  className="hover:text-white"
                >
                  Flat Broaches
                </Link>
              </li>
              <li>
                <Link
                  href="/products/round-broaches"
                  className="hover:text-white"
                >
                  Round Broaches
                </Link>
              </li>
              <li>
                <Link
                  href="/products/contract-broaching"
                  className="hover:text-white"
                >
                  Contract Broaching
                </Link>
              </li>
              <li>
                <Link
                  href="/products/tooling-accessories-sharpening"
                  className="hover:text-white"
                >
                  Tooling & Resharpening
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Contact & Address
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="text-xs font-semibold text-amber-400">
                GSTIN: {company.gstin}
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>
                  {company.address}, {company.city}, {company.state} - {company.pincode}, {company.country}
                </span>
              </div>
              {company.phone ? (
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <a href={`tel:${company.phone}`} className="hover:text-white font-medium">
                    {company.phone}
                  </a>
                </div>
              ) : null}
              {company.email ? (
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-white"
                  >
                    {company.email}
                  </a>
                </div>
              ) : null}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-slate-300 pt-1"
              >
                Enquire today <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-slate-800 pt-6 text-center text-sm text-slate-400 sm:mt-12 md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.08em] text-slate-500">
              Designed &amp; developed by BeeCreativess.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
