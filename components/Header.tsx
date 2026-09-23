"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company, productLinks, serviceLinks, applicationLinks } from "@/lib/company";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const isProductsActive =
    pathname.startsWith("/products/flat-broaches") ||
    pathname.startsWith("/products/round-broaches") ||
    pathname.startsWith("/products/keyway-broaches") ||
    pathname.startsWith("/products/spline-broaches") ||
    pathname.startsWith("/products/surface-broaches") ||
    pathname === "/products";

  const isServicesActive =
    pathname.startsWith("/products/contract-broaching") ||
    pathname.startsWith("/services/broach-regrinding-resharpening") ||
    pathname.startsWith("/products/tooling-accessories-sharpening");

  const isApplicationsActive = pathname.startsWith("/applications/");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" ref={navRef}>
      {/* Top Banner */}
      <div className="bg-[#0a3858] text-white">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4 text-xs font-semibold">
          <span className="hidden sm:block">
            Broach Manufacturing Unit · Precision tooling for the mechanical industry
          </span>
          <div className="ml-auto flex items-center gap-5">
            <span className="hidden md:inline">
              Mhalunge, Chakan, Pune – 410501
            </span>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="border-b border-slate-200">
        <div className="container-shell flex min-h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex shrink-0 items-center gap-3"
            aria-label="Varad Engineering home"
          >
            <div className="flex h-12 w-12 items-center justify-center border-2 border-[#0a3858] text-[#0a3858]">
              <span className="text-lg font-black tracking-[-0.12em]">VE</span>
            </div>
            <div>
              <div className="text-xl font-black tracking-[0.12em] text-[#0a3858]">
                VARAD
              </div>
              <div className="text-[10px] font-bold tracking-[0.28em] text-slate-500">
                ENGINEERING
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center justify-center gap-4 xl:flex xl:flex-1 xl:gap-5"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className={`relative py-7 text-sm font-bold transition-colors ${
                pathname === "/" ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
              )}
            </Link>

            <Link
              href="/about"
              className={`relative py-7 text-sm font-bold transition-colors ${
                pathname === "/about" ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
              }`}
            >
              About
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
              )}
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("products")}
                className={`inline-flex items-center gap-1 py-7 text-sm font-bold transition-colors ${
                  isProductsActive ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
                }`}
                aria-expanded={openDropdown === "products"}
              >
                Products <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-0 top-full w-80 border border-slate-200 bg-white p-2 shadow-xl z-50">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <Link
                      href="/products"
                      className="text-xs font-bold text-[#0b4267] hover:underline"
                    >
                      All Products Overview &rarr;
                    </Link>
                  </div>
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 hover:bg-[#eef4f8] transition-colors"
                    >
                      <div className="text-sm font-bold text-slate-800 hover:text-[#0a3858]">
                        {link.label}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("services")}
                className={`inline-flex items-center gap-1 py-7 text-sm font-bold transition-colors ${
                  isServicesActive ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
                }`}
                aria-expanded={openDropdown === "services"}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "services" && (
                <div className="absolute left-0 top-full w-80 border border-slate-200 bg-white p-2 shadow-xl z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2.5 hover:bg-[#eef4f8] transition-colors"
                    >
                      <div className="text-sm font-bold text-slate-800 hover:text-[#0a3858]">
                        {link.label}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("applications")}
                className={`inline-flex items-center gap-1 py-7 text-sm font-bold transition-colors ${
                  isApplicationsActive ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
                }`}
                aria-expanded={openDropdown === "applications"}
              >
                Applications <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === "applications" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "applications" && (
                <div className="absolute left-0 top-full w-80 border border-slate-200 bg-white p-2 shadow-xl z-50">
                  {applicationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2.5 hover:bg-[#eef4f8] transition-colors"
                    >
                      <div className="text-sm font-bold text-slate-800 hover:text-[#0a3858]">
                        {link.label}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">
                        {link.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/manufacturing"
              className={`relative py-7 text-sm font-bold transition-colors ${
                pathname === "/manufacturing" ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
              }`}
            >
              Manufacturing
              {pathname === "/manufacturing" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
              )}
            </Link>

            <Link
              href="/quality"
              className={`relative py-7 text-sm font-bold transition-colors ${
                pathname === "/quality" ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
              }`}
            >
              Quality
              {pathname === "/quality" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
              )}
            </Link>

            <Link
              href="/gallery"
              className={`relative py-7 text-sm font-bold transition-colors ${
                pathname === "/gallery" ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
              }`}
            >
              Gallery
              {pathname === "/gallery" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`relative py-7 text-sm font-bold transition-colors ${
                pathname === "/contact" ? "text-[#0a3858]" : "text-slate-700 hover:text-[#0a3858]"
              }`}
            >
              Contact
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" />
              )}
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex min-h-11 items-center gap-2 border border-[#0a3858] px-4 text-sm font-bold text-[#0a3858] hover:bg-[#eef4f8] transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Us
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center bg-[#0a3858] px-5 text-sm font-bold text-white hover:bg-[#082e49] transition-colors"
            >
              Request an Enquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-slate-300 text-[#0a3858] xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-b border-slate-200 bg-white xl:hidden">
          <div className="container-shell py-4">
            <nav className="divide-y divide-slate-200" aria-label="Mobile navigation">
              <Link
                href="/"
                className={`block py-3 text-base font-bold ${
                  pathname === "/" ? "border-l-4 border-amber-400 pl-3 text-[#0a3858]" : "text-slate-700"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-3 text-base font-bold ${
                  pathname === "/about" ? "border-l-4 border-amber-400 pl-3 text-[#0a3858]" : "text-slate-700"
                }`}
              >
                About
              </Link>

              {/* Mobile Products Accordion */}
              <div className="py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-left text-base font-bold text-[#0a3858]"
                  onClick={() => toggleDropdown("mobile-products")}
                >
                  Products{" "}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openDropdown === "mobile-products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "mobile-products" && (
                  <div className="border-l-2 border-amber-400 pl-4 py-2 space-y-2">
                    <Link
                      href="/products"
                      className="block text-xs font-bold text-[#0b4267] uppercase tracking-wider py-1"
                    >
                      All Products &rarr;
                    </Link>
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0a3858]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div className="py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-left text-base font-bold text-[#0a3858]"
                  onClick={() => toggleDropdown("mobile-services")}
                >
                  Services{" "}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "mobile-services" && (
                  <div className="border-l-2 border-amber-400 pl-4 py-2 space-y-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0a3858]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Applications Accordion */}
              <div className="py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-left text-base font-bold text-[#0a3858]"
                  onClick={() => toggleDropdown("mobile-applications")}
                >
                  Applications{" "}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openDropdown === "mobile-applications" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "mobile-applications" && (
                  <div className="border-l-2 border-amber-400 pl-4 py-2 space-y-2">
                    {applicationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0a3858]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/manufacturing"
                className={`block py-3 text-base font-bold ${
                  pathname === "/manufacturing" ? "border-l-4 border-amber-400 pl-3 text-[#0a3858]" : "text-slate-700"
                }`}
              >
                Manufacturing
              </Link>
              <Link
                href="/quality"
                className={`block py-3 text-base font-bold ${
                  pathname === "/quality" ? "border-l-4 border-amber-400 pl-3 text-[#0a3858]" : "text-slate-700"
                }`}
              >
                Quality
              </Link>
              <Link
                href="/gallery"
                className={`block py-3 text-base font-bold ${
                  pathname === "/gallery" ? "border-l-4 border-amber-400 pl-3 text-[#0a3858]" : "text-slate-700"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={`block py-3 text-base font-bold ${
                  pathname === "/contact" ? "border-l-4 border-amber-400 pl-3 text-[#0a3858]" : "text-slate-700"
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="grid gap-3 pt-5 sm:grid-cols-2">
              <a
                href={`tel:${company.phone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#0a3858] px-5 text-base font-bold text-[#0a3858]"
              >
                <Phone className="h-5 w-5" /> Call Us
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center bg-[#0a3858] px-5 text-base font-bold text-white"
              >
                Request an Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
