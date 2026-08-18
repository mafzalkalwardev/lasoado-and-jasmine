import { StarDivider } from "./StarDivider";

type Props = {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
  align = "center",
}: Props) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`font-display text-xs uppercase tracking-[0.35em] mb-3 ${
            light ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
          light ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <StarDivider className="mt-5 mb-5" />
      {copy ? (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-cream/80" : "text-navy/70"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
