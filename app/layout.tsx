import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { company } from "@/lib/company";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} | Broach Manufacturer Chakan Pune | Flat & Round Broaches`,
    template: `%s | ${company.name}`,
  },
  description:
    "Varad Engineering is a premier Broach Manufacturing Unit in Mhalunge, Chakan, Pune. Specializing in precision flat broaches up to 1500mm, round broaches up to 200mm dia x 2000mm length, contract broaching, gear shaving cutter sharpening, and hob sharpening.",
  keywords: [
    "Varad Engineering",
    "Varad Engineering Chakan",
    "Varad Engineering Pune",
    "Sayali Engineering Pune",
    "Broach Manufacturer Pune",
    "Broach Manufacturer Chakan",
    "Flat Broaches Manufacturer",
    "Round Broaches Manufacturer",
    "Spline Broaches India",
    "Keyway Broaches Chamfer",
    "Contract Broaching Chakan",
    "Broach Resharpening Service",
    "Broach Regrinding Chakan",
    "Gear Shaving Cutter Sharpening",
    "Shaping Cutter Sharpening",
    "Hob Sharpening Pune",
    "Carbide Tooling Solutions CNC",
    "Hoffler CNC Gear Tester ZP 260",
    "KAPP NILES CNC Gear Tester",
    "Arthur Klink Broach Resharpening",
    "ELB SCHLIFF Surface Grinding",
    "TOS Cylindrical Grinding",
    "MC3 Russian Spline Grinding",
    "Precision Tooling Mhalunge",
  ],
  authors: [{ name: company.name, url: `https://${company.domain}` }],
  creator: company.name,
  publisher: company.name,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `https://${company.domain}`,
  },
  openGraph: {
    title: `${company.name} | Broach Manufacturer Chakan Pune`,
    description:
      "High-precision broach manufacturing, contract broaching, gear shaving cutter & hob sharpening in Mhalunge, Chakan, Pune.",
    url: `https://${company.domain}`,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `https://${company.domain}/images/varad/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Varad Engineering Broach Manufacturing Facility Chakan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Broach Manufacturer Chakan Pune`,
    description:
      "High-precision broach manufacturing and tooling solutions for the mechanical industry.",
    images: [`https://${company.domain}/images/varad/hero-bg.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
