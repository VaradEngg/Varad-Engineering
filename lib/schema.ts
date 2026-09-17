import { company } from "@/lib/company";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  "@id": `https://${company.domain}/#organization`,
  name: company.name,
  legalName: company.name,
  alternateName: [company.unitName, "Varad Engineering Pune", company.sisterConcern.name],
  url: `https://${company.domain}`,
  logo: `https://${company.domain}/images/varad/cnc.jpg`,
  image: `https://${company.domain}/images/varad/hero-bg.jpg`,
  description:
    "Varad Engineering (Founder: Mr. Abhishek Tayade) is a premier Broach Manufacturing Unit in Mhalunge, Chakan, Pune. Specializing in high-precision flat broaches up to 1500mm, round broaches up to 200mm dia x 2000mm length, contract broaching, and cutter resharpening.",
  telephone: company.phone,
  vatID: company.gstin,
  taxID: company.gstin,
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: company.founder,
    jobTitle: "Proprietor",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Mhalunge, Chakan, Tal. Khed",
    addressRegion: "Maharashtra",
    postalCode: company.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.7606,
    longitude: 73.8617,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:30",
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Chakan" },
    { "@type": "Place", name: "Pune" },
    { "@type": "Place", name: "Maharashtra" },
    { "@type": "Place", name: "India" },
  ],
  priceRange: "$$$",
  knowsAbout: [
    "Flat Broaches",
    "Round Broaches",
    "Key Broaches with Chamfer",
    "Surface Broaches",
    "Spline Broaches",
    "Across Flat Broaches",
    "Double D Broaches",
    "Hexagonal Broaches",
    "Contract Broaching",
    "Broach Regrinding",
    "Gear Shaving Cutter Sharpening",
    "Shaping Cutter Sharpening",
    "Hob Sharpening",
    "Carbide Tooling Solutions for CNCs",
    "Hoffler CNC Gear Tester ZP 260",
    "KAPP NILES CNC Gear Tester KNM 2X",
  ],
  sameAs: [
    `https://${company.domain}`,
    `https://www.${company.domain}`,
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `https://${company.domain}/#website`,
  name: company.name,
  alternateName: ["Varad Engineering Chakan", "Varad Engineering Pune"],
  url: `https://${company.domain}`,
  publisher: {
    "@id": `https://${company.domain}/#organization`,
  },
};

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of broaches does Varad Engineering manufacture in Chakan, Pune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varad Engineering manufactures Flat Broaches (Key Broaches with & without chamfer, Surface Broaches up to 1500 mm length) and Round Broaches (Spline Broaches combination & interspaced, Across Flat, Double D, Hexagonal, and Special Profile Broaches up to 200 mm diameter and 2000 mm length).",
      },
    },
    {
      "@type": "Question",
      name: "Who founded Varad Engineering and when was it incorporated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varad Engineering was founded by Mr. Abhishek Tayade and incorporated in 2018–2019 in Mhalunge, Chakan, Pune. Its sister concern M/s Sayali Engineering was incorporated in 2008–2009.",
      },
    },
    {
      "@type": "Question",
      name: "What gear cutter sharpening & carbide tooling services are provided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In addition to broach resharpening (using 4 imported machines including Arthur Klink, Pentagon, Lapointe), sharpening of gear shaving cutters, shaping cutters, and hobs, as well as CNC carbide tooling solutions are provided through sister concern M/s Sayali Engineering.",
      },
    },
    {
      "@type": "Question",
      name: "What CNC gear testing and inspection equipment is available at the factory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inspection facilities include Hoffler CNC Gear Tester (ZP 260), KAPP NILES CNC Gear Tester (KNM 2X with internal testing), Profile Projector (10x, 20x, 30x), Grade A 63-piece Slip Gauge set, Inspection Pin Rollers (0.75 to 10 mm), and FIE Group Hardness Tester (RASN, 10 to 150 Kgf).",
      },
    },
    {
      "@type": "Question",
      name: "Which OEM and tier-1 automotive companies are served by Varad Engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key customers include Mahindra & Mahindra, Kalyani Forge Limited, Varroc, Sona, RSB Transmissions, PreciForge & Gears (PFG), Jagadamba Auto-components, Spicer (Dana), Fairfield Gear & Drive Solutions, and IGW.",
      },
    },
  ],
};
