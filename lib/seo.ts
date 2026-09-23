import { company } from "@/lib/company";

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const url = `https://${company.domain}${path}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
