export const company = {
  name: "Varad Engineering",
  unitName: "Broach Manufacturing Unit",
  domain: (process.env.NEXT_PUBLIC_SITE_DOMAIN || "varadengg.co.in")
    .replace(/^https?:\/\//, "")
    .replace(/\/+$/, ""),
  tagline: "Precision broach manufacturing and tooling solutions",
  address: "G.NO: 134 / 2 B H NO.10",
  city: "Mhalunge, Chakan, Tal. Khed",
  state: "Dist. Pune, Maharashtra",
  pincode: "410501",
  country: "India",
  phone: "+91 7774038964",
  phoneDisplay: "7774038964",
  email: "",
  gstin: "27BMEPT8875K1Z2",
  incorporatedYear: "2018 – 2019",
  team: {
    total: 11,
    shopFloor: 7,
    salesMarketing: 2,
    backOffice: 2,
  },
  socials: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
};

export const productLinks = [
  {
    href: "/products/flat-broaches",
    label: "Flat Broaches",
    description: "Key broaches with & without chamfer and surface broaches up to 1500 mm.",
  },
  {
    href: "/products/round-broaches",
    label: "Round Broaches",
    description: "Internal spline, double-D, hexagonal & profile broaches up to 200 mm dia.",
  },
  {
    href: "/products/keyway-broaches",
    label: "Keyway Broaches",
    description: "Precision key broaches with and without chamfer for internal slots.",
  },
  {
    href: "/products/spline-broaches",
    label: "Spline Broaches",
    description: "Combination and interspaced spline broaches for driveline & gears.",
  },
  {
    href: "/products/surface-broaches",
    label: "Surface Broaches",
    description: "External flat and surface profile broaches up to 1500 mm length.",
  },
];

export const serviceLinks = [
  {
    href: "/products/contract-broaching",
    label: "Contract Broaching",
    description: "Batch broaching work backed by CNC gear inspection and slip gauges.",
  },
  {
    href: "/services/broach-regrinding-resharpening",
    label: "Broach Regrinding & Resharpening",
    description: "Precision regrinding and face resharpening on imported machinery.",
  },
];

export const applicationLinks = [
  {
    href: "/applications/keyway-machining",
    label: "Keyway Machining",
    description: "Internal keyway cutting for gears, sprockets, pulleys & couplings.",
  },
  {
    href: "/applications/spline-machining",
    label: "Spline Machining",
    description: "High-accuracy internal spline production for automotive transmissions.",
  },
];

export const vision = {
  title: "Our Vision",
  description:
    "We at VARAD ENGINEERING shall strive vigorously to delight our customers, by pursuing excellence and innovation through committed team work.",
  bulletPoints: [
    "Promote continuous learning and achievement orientation",
    "Pursue excellence and innovation through committed teamwork",
    "Follow ethical business practices to shine as a world-class manufacturer",
  ],
};

export const mission = {
  title: "Our Mission",
  description:
    "To create and reinforce our position as leading Indian manufacturer of broach and aggregates and meet the aspiration of customers in domestic and export market. This will be achieved through on time delivery and zero defect supplies, at optimum cost backed by responsive services and empowered employees.",
  bulletPoints: [
    "Serve domestic and export markets with broach and aggregate solutions",
    "Deliver supplies on time with a zero-defect focus",
    "Maintain optimum cost with responsive service and empowered employees",
  ],
};

export const coreValues = [
  "Customer satisfaction is our first priority",
  "Business ethics",
  "Care of environment and society",
  "Empowerment",
  "Transparency",
  "Team Work",
  "Confidentiality",
  "Professional Behaviour",
  "Personal growth of our employees",
];

export const qualityPolicy = {
  title: "Quality Policy",
  statement:
    "VARAD ENGINEERING is committed to providing quality work to our customers that meets the standards and specifications for materials, workmanship, accuracies, timeline and service while maintaining profitability and competitiveness.",
  commitment:
    "VARAD ENGINEERING ensures continual improvement through quality systems and rigorous inspection standards.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality", href: "/quality" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const productCategories = [
  {
    slug: "flat-broaches",
    title: "Flat Broaches",
    description:
      "Key broaches (with & without chamfer) and surface broaches up to 1500 mm length manufactured using dedicated ELB SCHLIFF surface grinding and imported resharpening machinery.",
    image: "/images/varad/broaches.jpg",
    items: [
      "Key Broaches (With & Without Chamfer)",
      "Surface Broaches (Up to 1500 mm length)",
    ],
    capacity: "Up to 1500 mm length",
  },
  {
    slug: "round-broaches",
    title: "Round Broaches",
    description:
      "Precision internal round broaches including combination & interspaced spline broaches, across flat, double-D, hexagonal, and special profile broaches up to 200 mm diameter and 2000 mm length.",
    image: "/images/varad/round-broach.jpg",
    items: [
      "Spline Broaches (Combination & Interspaced)",
      "Across Flat Broaches",
      "Double (D) Broaches",
      "Hexagonal Broaches",
      "Special Profile Broaches",
    ],
    capacity: "Up to 200 mm dia × 2000 mm length",
  },
  {
    slug: "contract-broaching",
    title: "Contract Broaching",
    description:
      "Comprehensive contract broaching services backed by CNC gear testing (Hoffler ZP 260 & KAPP NILES KNM 2X), profile projection, and Grade A slip gauges.",
    image: "/images/varad/broach-detail.jpg",
    items: [
      "Contract Broaching Work",
      "Customer-Specific Tooling & Aggregate Broaching",
      "High-Precision Batch Machining",
    ],
    capacity: "Application-specific high precision support",
  },
  {
    slug: "tooling-accessories-sharpening",
    title: "Tooling Accessories & Cutter Sharpening",
    description:
      "Broach resharpening and regrinding supported by dedicated imported machines (Arthur Klink, Pentagon, Lapointe), alongside sharpening of gear shaving cutters, shaping cutters, hobs, and CNC carbide tooling solutions.",
    image: "/images/varad/arthur-klink.jpg",
    items: [
      "Broach Resharpening / Regrinding (Arthur Klink, Pentagon, Lapointe)",
      "Gear Shaving Cutter Sharpening",
      "Shaping Cutter Sharpening",
      "Hob Sharpening",
      "Carbide Tooling Solutions for CNCs",
      "Tooling Accessories",
    ],
    capacity: "Imported broach resharpening machines + cutter sharpening",
  },
];

export const machinesList = [
  {
    name: "Broach Resharpening / Regrinding Machines",
    makes: "Arthur Klink, Pentagon, Lapointe",
    image: "/images/varad/arthur-klink.jpg",
    details:
      "Dedicated to flat broaches (up to 1500 mm), round broaches (up to 200 mm dia & 2000 mm length), and manufacturing new broaches.",
  },
  {
    name: "Cylindrical Grinding Machines",
    makes: "TOS Make",
    image: "/images/varad/cylindrical-grinding.jpg",
    details:
      "Capable of handling broaches up to 125 mm diameter and 1800 mm length.",
  },
  {
    name: "Surface Grinding Machines",
    makes: "ELB SCHLIFF",
    image: "/images/varad/surface-grinding.jpg",
    details:
      "Capable of handling flat broaches up to 1500 mm length.",
  },
  {
    name: "Spline Grinding Machine",
    makes: "MC3 Russian",
    image: "/images/varad/spline-grinding.jpg",
    details:
      "Capable of handling jobs up to 125 mm diameter and 2000 mm length.",
  },
  {
    name: "Lathe Machine",
    makes: "Precision Heavy Duty Lathe",
    image: "/images/varad/lathe.jpg",
    details: "For pre-machining and broach shank turning.",
  },
  {
    name: "Milling Machine",
    makes: "Universal Milling Machine",
    image: "/images/varad/broach-detail.jpg",
    details: "Supporting tooling accessories and profile pre-machining.",
  },
];

export const inspectionFacilities = [
  {
    name: "Profile Projector",
    spec: "10×, 20× & 30× Magnification (Electronica PP 300 H)",
    image: "/images/varad/profile-projector.jpg",
    details: "Profile projector with magnification of 10, 20 and 30 times.",
  },
  {
    name: "Hoffler CNC Gear Tester",
    spec: "Hoffler ZP 260",
    image: "/images/varad/profile-projector-detail.jpg",
    details: "Hoffler make CNC gear tester, model ZP 260 for gear profile and pitch verification.",
  },
  {
    name: "KAPP NILES CNC Gear Tester",
    spec: "KAPP NILES KNM 2X",
    image: "/images/varad/profile-projector.jpg",
    details: "KAPP NILES make CNC gear tester, model KNM 2X with internal gear testing facility.",
  },
  {
    name: "Slip Gauge Set",
    spec: "63 Slips · Grade A Accuracy",
    image: "/images/varad/broach-detail.jpg",
    details: "Set of 63 slip gauges with Grade A precision calibration.",
  },
  {
    name: "Inspection Pin Rollers",
    spec: "0.75–10 mm (Least Count 0.1 mm)",
    image: "/images/varad/roller-pin-set.jpg",
    details: "Roller pin set with least count of 0.1 mm ranging from 0.75 mm to 10 mm.",
  },
  {
    name: "Hardness Tester",
    spec: "FIE Group Model RASN (10–150 Kgf)",
    image: "/images/varad/hardness-tester.jpg",
    details: "FIE Group hardness tester, Model RASN, supporting Rockwell test loads from 10 to 150 Kgf.",
  },
];

export const clientList = [
  { name: "Mahindra & Mahindra", logo: "/images/varad/mahindra.png" },
  { name: "Kalyani Forge Limited", logo: "/images/varad/kalyani-forge.jpg" },
  { name: "Varroc Excellence", logo: "/images/varad/varroc.jpg" },
  { name: "Sona (More Torque Per Gram)", logo: "/images/varad/sona.png" },
  { name: "RSB Transmissions (I) Ltd.", logo: "/images/varad/rsb.jpg" },
  { name: "PreciForge & Gears (PFG)", logo: "/images/varad/pfg.png" },
  { name: "Jagadamba Auto-components Ltd.", logo: "/images/varad/jagadamba.jpg" },
  { name: "Trans Auto", logo: "/images/varad/trans-auto.png" },
  { name: "Flash", logo: "/images/varad/flash.png" },
  { name: "Wanfeng", logo: "/images/varad/wanfeng.jpg" },
  { name: "IGW", logo: "/images/varad/igw.png" },
  { name: "Evolvente Technologies", logo: "/images/varad/evolvente.jpg" },
  { name: "Manasi Pressings Private Limited", logo: "/images/varad/manasi.png" },
  { name: "Fairfield Gear & Drive Solutions", logo: "/images/varad/fairfield.png" },
  { name: "Kores (India) Ltd.", logo: "/images/varad/kores.jpg" },
  { name: "Radicon Powerbuild", logo: "/images/varad/radicon.jpg" },
  { name: "Edicon", logo: "/images/varad/edicon.jpg" },
  { name: "Bhavani", logo: "/images/varad/bhavani.png" },
  { name: "Spicer (Dana)", logo: "/images/varad/spicer.png" },
];
