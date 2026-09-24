import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { company, navItems } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container-shell py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          {/* Brand Info */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block py-1" aria-label="Varad Engineering home">
              <Image
                src="/images/varad/logo-horizontal-white.png"
                alt="Varad Engineering - Broach Manufacturing Unit"
                width={220}
                height={68}
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
              Broach Manufacturing Unit
            </p>
            <p className="mt-3 max-w-sm text-sm text-slate-300 leading-relaxed">
              Precision flat and round broaches, contract broaching, broach regrinding/resharpening, and tooling solutions for the mechanical industry from Mhalunge, Chakan, Pune.
            </p>
          </div>

          {/* Products Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Products
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/products/flat-broaches" className="hover:text-white transition-colors">
                  Flat Broaches
                </Link>
              </li>
              <li>
                <Link href="/products/round-broaches" className="hover:text-white transition-colors">
                  Round Broaches
                </Link>
              </li>
              <li>
                <Link href="/products/keyway-broaches" className="hover:text-white transition-colors">
                  Keyway Broaches
                </Link>
              </li>
              <li>
                <Link href="/products/spline-broaches" className="hover:text-white transition-colors">
                  Spline Broaches
                </Link>
              </li>
              <li>
                <Link href="/products/surface-broaches" className="hover:text-white transition-colors">
                  Surface Broaches
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Applications Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Services &amp; Applications
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/products/contract-broaching" className="hover:text-white transition-colors">
                  Contract Broaching
                </Link>
              </li>
              <li>
                <Link href="/services/broach-regrinding-resharpening" className="hover:text-white transition-colors">
                  Broach Regrinding &amp; Resharpening
                </Link>
              </li>
              <li>
                <Link href="/applications/keyway-machining" className="hover:text-white transition-colors">
                  Keyway Machining
                </Link>
              </li>
              <li>
                <Link href="/applications/spline-machining" className="hover:text-white transition-colors">
                  Spline Machining
                </Link>
              </li>
              <li>
                <Link href="/products/tooling-accessories-sharpening" className="hover:text-white transition-colors">
                  Tooling &amp; Cutter Sharpening
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Contact &amp; Location
            </h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="text-xs font-semibold text-amber-400 font-mono">
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
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-amber-300 transition-colors"
                >
                  Enquire today <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                {navItems
                  .filter((item) => item.href !== "/" && item.href !== "/products")
                  .map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-center text-xs text-slate-400 sm:mt-12 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {company.name} ({company.unitName}). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="text-slate-500">
              Broach Manufacturing Unit · Mhalunge, Chakan, Pune
            </span>
            <span className="hidden text-slate-700 md:inline">|</span>
            <span className="text-slate-400">
              Designed & Developed by{" "}
              <span className="font-semibold text-slate-200">BeeCreativess</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
