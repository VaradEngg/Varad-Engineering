type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <span className="eyebrow mb-4 block">{eyebrow}</span> : null}
      <h2
        className={`section-title ${light ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base md:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
