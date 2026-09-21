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
    default: "Varad Engineering | Broach Manufacturer in Chakan, Pune",
    template: `%s | Varad Engineering Chakan`,
  },
  description:
    "Varad Engineering is a specialized Broach Manufacturing Unit located in Mhalunge, Chakan, Pune (GSTIN: 27BMEPT8875K1Z2). Specialists in precision flat broaches up to 1500 mm, round broaches up to 2000 mm, contract broaching, and tool regrinding.",
  keywords: [
    "Varad Engineering",
    "Varad Engineering Chakan",
    "Varad Engineering Pune",
    "Varad Engineering Mhalunge",
    "Varad Engineering Broach Manufacturing Unit",
    "Varad Engineering Broaches",
    "Broach Manufacturer Chakan",
    "Broach Manufacturer Pune",
    "Broach Manufacturing Unit Mhalunge",
    "Flat Broaches Manufacturer Chakan",
    "Round Broaches Manufacturer Pune",
    "Contract Broaching Chakan",
    "Broach Regrinding Chakan Pune",
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
    "Special Profile Broaches",
    "Keyway Broaches with Chamfer",
    "Surface Broaches",
    "Spline Broaches",
    "Involute Spline Broaches",
    "Across Flat Broaches",
    "Double D Broaches",
    "Hexagonal Broaches",
    "Contract Broaching Services",
    "Contract Broaching",
    "Broach Resharpening",
    "Broach Regrinding",
    "Gear Shaving Cutter Sharpening",
    "Shaping Cutter Sharpening",
    "Hob Sharpening Pune",
    "CNC Carbide Tooling Solutions",
    "Precision Tooling Solutions Chakan",
    "Broaching Machine Tooling Pune",
    "Broach Manufacturing Chakan",
    "Varad Engineering broach",
    "Varad Engineering broaching",
    "Varad Engineering broach manufacturer",
    "Varad Engineering broach regrinding",
    "Varad Engineering broach resharpening",
    "Varad Engineering contract broaching",
    "Varad Engineering broach manufacturer chakan",
    "Varad Engineering broach manufacturer pune",
    "Varad Engineering broach manufacturer mhalunge",
    "Varad Engineering broach manufacturer chakan pune",
    "Varad Engineering broach manufacturer chakan mhalunge",
    "Varad Engineering broach manufacturer chakan pune mhalunge",
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
    title: "Varad Engineering | Broach Manufacturer in Chakan, Pune",
    description:
      "Precision broach manufacturing unit in Mhalunge, Chakan, Pune. Specializing in flat broaches up to 1500 mm, round broaches up to 2000 mm, contract broaching and regrinding.",
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
    title: "Varad Engineering | Broach Manufacturer in Chakan, Pune",
    description:
      "Precision broach manufacturing unit in Mhalunge, Chakan, Pune. Specializing in flat broaches up to 1500 mm, round broaches up to 2000 mm, contract broaching and regrinding.",
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
