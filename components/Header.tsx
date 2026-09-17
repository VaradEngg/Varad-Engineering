"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navItems } from "@/lib/company";

const productLinks = [
  { href: "/products/flat-broaches", label: "Flat Broaches" },
  { href: "/products/round-broaches", label: "Round Broaches" },
  { href: "/products/contract-broaching", label: "Contract Broaching" },
  { href: "/products/tooling-accessories-sharpening", label: "Tooling & Resharpening" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[#0a3858] text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 text-xs font-semibold">
          <span className="hidden sm:block">Precision tooling for the mechanical industry</span>
          <div className="ml-auto flex items-center gap-5">
            <span className="hidden md:inline">Mhalunge, Chakan, Pune – 410501</span>
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-1.5 hover:text-amber-300"><Phone className="h-3.5 w-3.5" /> {company.phoneDisplay}</a>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200">
        <div className="container-shell flex min-h-[76px] items-center justify-between gap-5">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Varad Engineering home">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-[#0a3858] text-[#0a3858]">
              <span className="text-lg font-black tracking-[-0.12em]">VE</span>
            </div>
            <div>
              <div className="text-xl font-black tracking-[0.12em] text-[#0a3858]">VARAD</div>
              <div className="text-[10px] font-bold tracking-[0.28em] text-slate-500">ENGINEERING</div>
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-5 xl:flex xl:flex-1 xl:gap-6" aria-label="Main navigation">
            {navItems.map((item) => item.label === "Products" ? (
              <div key={item.href} className="relative">
                <button type="button" onClick={() => setProductsOpen((v) => !v)} className={`inline-flex items-center gap-1 py-7 text-sm font-bold ${pathname.startsWith("/products") ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"}`} aria-expanded={productsOpen}>
                  Products <ChevronDown className="h-4 w-4" />
                </button>
                {productsOpen && <div className="absolute left-0 top-full w-72 border border-slate-200 bg-white p-2 shadow-xl">
                  {productLinks.map((link) => <Link key={link.href} href={link.href} className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#eef4f8] hover:text-[#0a3858]">{link.label}</Link>)}
                </div>}
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={`relative py-7 text-sm font-bold ${pathname === item.href ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"}`}>
                {item.label}
                {pathname === item.href && <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a href={`tel:${company.phone}`} className="inline-flex min-h-11 items-center gap-2 border border-[#0a3858] px-4 text-sm font-bold text-[#0a3858] hover:bg-[#eef4f8]"><Phone className="h-4 w-4" /> Call Us</a>
            <Link href="/contact" className="inline-flex min-h-11 items-center bg-[#0a3858] px-5 text-sm font-bold text-white hover:bg-[#082e49]">Request an Enquiry</Link>
          </div>

          <button type="button" className="inline-flex h-11 w-11 items-center justify-center border border-slate-300 text-[#0a3858] xl:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && <div className="border-b border-slate-200 bg-white xl:hidden">
        <div className="container-shell py-4">
          <nav className="divide-y divide-slate-200" aria-label="Mobile navigation">
            {navItems.map((item) => item.label === "Products" ? (
              <div key={item.href} className="py-2">
                <button type="button" className="flex w-full items-center justify-between py-3 text-left text-base font-bold text-[#0a3858]" onClick={() => setProductsOpen((v) => !v)}>
                  Products <ChevronDown className={`h-5 w-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
                {productsOpen && <div className="border-l-2 border-amber-400 pl-4 pb-2">
                  {productLinks.map((link) => <Link key={link.href} href={link.href} className="block py-2.5 text-sm font-semibold text-slate-600">{link.label}</Link>)}
                </div>}
              </div>
            ) : <Link key={item.href} href={item.href} className={`block py-4 text-base font-bold ${pathname === item.href ? "border-l-4 border-amber-400 pl-4 text-[#0a3858]" : "text-slate-700"}`}>{item.label}</Link>)}
          </nav>
          <div className="grid gap-3 pt-5 sm:grid-cols-2">
            <a href={`tel:${company.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#0a3858] px-5 text-base font-bold text-[#0a3858]"><Phone className="h-5 w-5" /> Call Us</a>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-[#0a3858] px-5 text-base font-bold text-white">Request an Enquiry</Link>
          </div>
        </div>
      </div>}
    </header>
  );
}
