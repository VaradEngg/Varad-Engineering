import { company } from "@/lib/company";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.unitName,
  url: `https://${company.domain}`,
  description:
    "High-precision broach manufacturing and tooling solutions for sectors of the mechanical industry.",
  taxID: company.gstin,
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: company.city,
    addressRegion: company.state,
    postalCode: company.pincode,
    addressCountry: company.country,
  },
  telephone: company.phone,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: `https://${company.domain}`,
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
