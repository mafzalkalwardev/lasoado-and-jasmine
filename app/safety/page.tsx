import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCta } from "@/components/home/FinalCta";
import { values } from "@/lib/company";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Clean trucks with no holes, proper inspections, clean driving records, bonded carrier service, and careful freight handling.",
};

const extras = [
  {
    title: "Secure the load",
    text: "Straps, load locks, liftgates, and pallet jacks are on the box trucks so freight is restrained and handled the right way — not improvised at the dock.",
  },
  {
    title: "Comfortable, careful miles",
    text: "Freight should arrive the way it left. We move it safely and comfortably, without rushing corners or skipping walk-arounds.",
  },
  {
    title: "On the clock",
    text: "Punctual drivers and 24/7 availability mean pickup and delivery happen when they are supposed to — including late night.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety & compliance"
        title="Inspected iron. Clean records. Bonded care."
        copy="We do not treat safety as a page on a website. Trucks stay inspected, drivers stay professional, and freight is secured before the wheels roll."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The standard"
            title="What “taken care of” looks like."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl bg-navy text-cream p-8">
                <h2 className="font-display text-2xl font-bold text-gold">{value.title}</h2>
                <p className="mt-3 text-cream/75 leading-relaxed">{value.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {extras.map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-navy/70 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
