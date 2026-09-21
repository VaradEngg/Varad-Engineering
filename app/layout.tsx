import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    template: `%s | ${company.name} Chakan`,
  },
  description:
    "Varad Engineering is an independent Broach Manufacturing Unit in Mhalunge, Chakan, Pune (GSTIN: 27BMEPT8875K1Z2). Specialists in precision flat broaches up to 1500mm, round spline broaches up to 2000mm, contract broaching, and tool resharpening.",
  keywords: [
    "Varad Engineering",
    "Varad Engineering Chakan",
    "Varad Engineering Pune",
    "Varad Engineering Broach Manufacturing Unit",
    "Varad Engineering Mhalunge",
    "Varad Engineering Contact Number",
    "Varad Engineering GSTIN",
    "Varad Engineering 27BMEPT8875K1Z2",
    "Varad Engineering Broaches",
    "Broach Manufacturer Chakan",
    "Broach Manufacturer Pune",
    "Broach Manufacturing Unit Mhalunge",
    "Flat Broaches Manufacturer Chakan",
    "Round Broaches Manufacturer Pune",
    "Spline Broaches India",
    "Keyway Broaches Chamfer",
    "Contract Broaching Chakan",
    "Broach Resharpening Service Chakan Pune",
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
    "Precision Tooling Mhalunge Chakan MIDC",
  ],
  authors: [{ name: `${company.name} (${company.unitName})`, url: `https://${company.domain}` }],
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
    siteName: "Varad Engineering - Broach Manufacturing Unit",
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
      "High-precision broach manufacturing and tooling solutions for the mechanical industry in Chakan, Pune.",
    images: [`https://${company.domain}/images/varad/hero-bg.jpg`],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
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
      <body className={`${inter.className} bg-stone-100 text-slate-900 antialiased`}>
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
