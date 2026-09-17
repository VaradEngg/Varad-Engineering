import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} | High-Precision Broach & Tooling Manufacturer`,
    template: `%s | ${company.name}`,
  },
  description:
    "Varad Engineering supplies high-precision tooling for the mechanical industry, including flat broaches, round broaches, contract broaching and tooling sharpening solutions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${company.name} | High-Precision Broach & Tooling Manufacturer`,
    description:
      "High-precision broach manufacturing and tooling solutions for the mechanical industry.",
    url: `https://${company.domain}`,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | High-Precision Broach & Tooling Manufacturer`,
    description:
      "High-precision broach manufacturing and tooling solutions for the mechanical industry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-stone-100 text-slate-900 antialiased">
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
