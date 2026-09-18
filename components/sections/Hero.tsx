import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Ruler,
  Settings2,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-112px)] flex-col justify-center overflow-hidden bg-[#06243a] text-white">
      {/* Background image covering the whole hero section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/varad/hero-bg.jpg"
          alt="CNC machining at Varad Engineering"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Balanced overlay so the entire image is visible across the whole hero section */}
        <div className="absolute inset-0 bg-[#06243a]/65" />
      </div>

      <div className="container-shell relative z-10 w-full py-12 sm:py-16 lg:py-20">
        <div className="flex items-center">
          {/* CONTENT */}
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
              <span className="h-[2px] w-6 bg-amber-400 sm:w-10" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400 sm:text-sm sm:tracking-[0.2em]">
                Broach Manufacturing Unit
              </span>
            </div>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[44px]">
              Precision Broaches for{" "}
              <span className="text-amber-400">Mechanical Manufacturing</span>
            </h1>

            <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-slate-200 sm:mt-5 sm:text-base lg:text-lg sm:leading-7">
              We manufacture flat broaches and round broaches, with dedicated
              broach regrinding, grinding and contract broaching capabilities.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
              <Link
                href="/products"
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 bg-amber-400 px-6 text-sm font-bold text-slate-950 transition hover:bg-amber-300 sm:min-h-[50px] sm:px-7 sm:text-base"
              >
                View Products
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 border border-slate-400 bg-transparent px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-slate-900 sm:min-h-[50px] sm:px-7 sm:text-base"
              >
                Request an Enquiry
              </Link>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-6 flex flex-col gap-2.5 text-xs font-semibold sm:mt-8 sm:flex-row sm:items-center sm:gap-7 sm:text-sm lg:text-base">
              <a
                href="tel:+917774038964"
                className="flex items-center gap-2 hover:text-amber-400 sm:gap-3"
              >
                <Phone className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
                7774038964
              </a>

              <span className="hidden h-5 w-px bg-slate-600 sm:block" />

              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
                Mhalunge, Chakan, Pune – 410501
              </div>
            </div>

            {/* QUICK CAPABILITIES */}
            <div className="mt-8 grid max-w-2xl border-t border-slate-700/80 pt-6 sm:mt-10 sm:grid-cols-3 sm:pt-7">
              <div className="flex gap-3 border-slate-700/80 pb-5 sm:border-r sm:pr-5 sm:pb-0">
                <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 sm:h-6 sm:w-6" />
                <div>
                  <p className="font-bold text-white">Flat Broaches</p>
                  <p className="mt-0.5 text-xs text-slate-300 sm:text-sm">
                    Up to 1500 mm length
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-slate-700/80 py-5 sm:border-r sm:px-5 sm:py-0">
                <Settings2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 sm:h-6 sm:w-6" />
                <div>
                  <p className="font-bold text-white">Round Broaches</p>
                  <p className="mt-0.5 text-xs text-slate-300 sm:text-sm">
                    Up to 200 mm dia × 2000 mm
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-slate-700/80 pt-5 sm:pl-5 sm:pt-0">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 sm:h-6 sm:w-6" />
                <div>
                  <p className="font-bold text-white">Quality Inspection</p>
                  <p className="mt-0.5 text-xs text-slate-300 sm:text-sm">
                    Precision inspection facilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}