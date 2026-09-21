import { company } from "@/lib/company";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  "@id": `https://${company.domain}/#organization`,
  name: company.name,
  legalName: "Varad Engineering",
  alternateName: [
    "Varad Engineering Chakan",
    "Varad Engineering Broach Manufacturing Unit",
    "Varad Engineering Mhalunge",
    "Varad Engineering Pune",
  ],
  disambiguatingDescription:
    "Varad Engineering (Broach Manufacturing Unit) located in Mhalunge, Chakan, Tal. Khed, Dist. Pune, Maharashtra (GSTIN: 27BMEPT8875K1Z2). Specializing in precision flat broaches up to 1500mm, round spline broaches up to 2000mm, contract broaching, and tool resharpening.",
  url: `https://${company.domain}`,
  logo: `https://${company.domain}/images/varad/cnc.jpg`,
  image: `https://${company.domain}/images/varad/hero-bg.jpg`,
  description:
    "Varad Engineering is a specialized Broach Manufacturing Unit in Mhalunge, Chakan, Pune (GSTIN: 27BMEPT8875K1Z2). Specialists in precision flat broaches up to 1500mm, round broaches up to 2000mm, contract broaching, and tool regrinding.",
  telephone: company.phone,
  vatID: company.gstin,
  taxID: company.gstin,
  foundingDate: "2018",
  hasMap: "https://maps.google.com/?q=18.7606,73.8617",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Mhalunge, Chakan, Tal. Khed",
    addressRegion: "Dist. Pune, Maharashtra",
    postalCode: company.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.7606,
    longitude: 73.8617,
  },
  areaServed: [
    { "@type": "Place", name: "Chakan" },
    { "@type": "Place", name: "Mhalunge" },
    { "@type": "Place", name: "Bhosari" },
    { "@type": "Place", name: "Talawade" },
    { "@type": "Place", name: "Pimpri-Chinchwad" },
    { "@type": "Place", name: "Pune" },
    { "@type": "Place", name: "Talegaon Dabhade" },
    { "@type": "Place", name: "Ranjangaon MIDC" },
    { "@type": "Place", name: "Sanaswadi" },
    { "@type": "Place", name: "Maharashtra" },
    { "@type": "Place", name: "India" },
  ],
  knowsAbout: [
    "Broach Manufacturing",
    "Flat Broaches",
    "Round Broaches",
    "Spline Broaches",
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
    "Surface Grinding",
    "Cylindrical Grinding",
    "Spline Grinding",
    "Quality Inspection",
    "Broach Resharpening Chakan",
    "Gear Shaving Cutter Sharpening",
    "Shaping Cutter Sharpening",
    "Hob Sharpening Pune",
    "Carbide Tooling Solutions for CNCs",
    "Hoffler CNC Gear Tester ZP 260",
    "KAPP NILES CNC Gear Tester KNM 2X",
    "Profile Projection 10x 20x 30x",
    "Grade A Slip Gauges",
    "Inspection Pin Rollers 0.75 to 10 mm",
    "FIE Group Hardness Tester RASN",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Broach Manufacturing & Tooling Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flat Broaches Manufacturing",
          description: "Key broaches and surface broaches up to 1500 mm length.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Round Broaches Manufacturing",
          description: "Internal round, spline, double-D, and hexagonal broaches up to 200 mm dia x 2000 mm length.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract Broaching Services",
          description: "High-precision batch machining and component broaching in Chakan, Pune.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Broach Resharpening & Regrinding",
          description: "Supported by dedicated imported machines including Arthur Klink, Pentagon, and Lapointe.",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `https://${company.domain}/#website`,
  name: "Varad Engineering | Broach Manufacturer in Chakan, Pune",
  alternateName: [
    "Varad Engineering Chakan",
    "Varad Engineering Pune",
    "Varad Engineering Broach Manufacturing Unit",
  ],
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
      name: "Where is Varad Engineering Broach Manufacturing Unit located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varad Engineering is located at G.NO: 134 / 2 B H NO.10, Mhalunge, Chakan, Tal. Khed, Dist. Pune – 410501, Maharashtra, India. We are an independent broach manufacturing and contract broaching unit in the Chakan automotive MIDC belt (Phone: +91 7774038964, GSTIN: 27BMEPT8875K1Z2).",
      },
    },
    {
      "@type": "Question",
      name: "What broach manufacturing and contract broaching services does Varad Engineering provide in Chakan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varad Engineering specializes exclusively in Flat Broaches (Key Broaches with & without chamfer, Surface Broaches up to 1500 mm length), Round Broaches (Spline, Double D, Hexagonal, and Special Profile Broaches up to 200 mm dia x 2000 mm length), Contract Broaching, and Cutter Resharpening.",
      },
    },
    {
      "@type": "Question",
      name: "How is Varad Engineering Chakan differentiated from other companies named Varad Engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varad Engineering in Mhalunge, Chakan (GSTIN: 27BMEPT8875K1Z2) is exclusively a high-precision broach manufacturing and regrinding unit serving Tier-1 automotive and mechanical OEMs. It is completely independent and not associated with UPVC valve traders in Navi Mumbai, metal forging suppliers, or fire protection companies that share a similar name.",
      },
    },
    {
      "@type": "Question",
      name: "When was Varad Engineering incorporated in Chakan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varad Engineering was incorporated in the year 2018–2019 in Mhalunge, Chakan, Pune to supply high precision broaches and tooling solutions with competitive pricing and minimal lead time.",
      },
    },
    {
      "@type": "Question",
      name: "What gear cutter sharpening and regrinding machines are available at the factory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Broach resharpening is supported by 4 dedicated imported machines (Arthur Klink, Pentagon Grd-4, Lapointe Grd-5), alongside sharpening for gear shaving cutters, shaping cutters, hobs, and CNC carbide tooling solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What CNC gear testing and inspection equipment is installed at the facility?",
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


