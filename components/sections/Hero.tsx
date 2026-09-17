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
    <section className="relative overflow-hidden bg-[#06243a] text-white">
      {/* Static background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/varad/hero-bg.jpg"
          alt="CNC machining at Varad Engineering"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#06243a]/75" />
      </div>

      <div className="container-shell relative z-10">
        <div className="flex min-h-0 items-center py-8 sm:min-h-[580px] sm:py-14 lg:py-20">
          {/* CONTENT */}
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-[2px] w-6 bg-amber-400 sm:w-10" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400 sm:text-sm sm:tracking-[0.2em]">
                Broach Manufacturing Unit
              </span>
            </div>

            <h1 className="text-2xl font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              Precision
              <br />
              Broaches for
              <br />
              <span className="text-amber-400">Mechanical Manufacturing</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:mt-7 sm:text-xl sm:leading-8">
              We manufacture flat broaches and round broaches, with dedicated
              broach regrinding, grinding and contract broaching capabilities.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">
              <Link
                href="/products"
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 bg-amber-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-amber-300 sm:min-h-[54px] sm:px-7 sm:text-base"
              >
                View Products
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 border border-slate-400 bg-transparent px-5 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-slate-900 sm:min-h-[54px] sm:px-7 sm:text-base"
              >
                Request an Enquiry
              </Link>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-6 flex flex-col gap-2.5 text-xs font-semibold sm:mt-9 sm:flex-row sm:items-center sm:gap-7 sm:text-base">
              <a
                href="tel:+917774038964"
                className="flex items-center gap-2 hover:text-amber-400 sm:gap-3"
              >
                <Phone className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
                7774038964
              </a>

              <span className="hidden h-6 w-px bg-slate-600 sm:block" />

              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
                Mhalunge, Chakan, Pune – 410501
              </div>
            </div>

            {/* QUICK CAPABILITIES */}
            <div className="mt-10 grid max-w-2xl border-t border-slate-700 pt-7 sm:grid-cols-3">
              <div className="flex gap-3 border-slate-700 pb-5 sm:border-r sm:pr-5 sm:pb-0">
                <Ruler className="mt-1 h-6 w-6 shrink-0 text-amber-400" />
                <div>
                  <p className="font-bold text-white">Flat Broaches</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Up to 1500 mm length
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-slate-700 py-5 sm:border-r sm:px-5 sm:py-0">
                <Settings2 className="mt-1 h-6 w-6 shrink-0 text-amber-400" />
                <div>
                  <p className="font-bold text-white">Round Broaches</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Up to 200 mm dia × 2000 mm
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-slate-700 pt-5 sm:pl-5 sm:pt-0">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-amber-400" />
                <div>
                  <p className="font-bold text-white">Quality Inspection</p>
                  <p className="mt-1 text-sm text-slate-300">
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