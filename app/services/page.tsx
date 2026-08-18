import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCta } from "@/components/home/FinalCta";
import { faqs, services } from "@/lib/company";

export const metadata: Metadata = {
  title: "Services",
  description:
    "48-state OTR, all freight types, 24/7 pickup and delivery, late-night windows, team drivers, and bonded carrier service.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nationwide capacity, local accountability."
        copy="We haul every type of freight we can legally move — over the road, around the clock, with the equipment the load actually needs."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="From the first call to the last dock."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-gold/25 bg-white p-8">
                <h2 className="font-display text-2xl font-bold text-navy">{service.title}</h2>
                <p className="mt-3 text-navy/70 leading-relaxed">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-panel grain text-cream px-6 py-20">
        <div className="relative z-[2] mx-auto max-w-5xl">
          <SectionHeading
            light
            eyebrow="Operations"
            title="Built for real freight, not brochure freight."
            copy="Spot or dedicated. Solo or team. Dock high or liftgate. If the appointment is 2 a.m., we still make it."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-4 text-sm">
            {[
              "All legal freight types and commodities",
              "Over-the-road across all 48 states",
              "24/7 pickup and delivery",
              "Late-night pickup and late-night delivery",
              "Team driver service",
              "Time-definite / appointment freight",
              "Bonded carrier",
              "Power-only when you have the trailer",
              "Sprinter and cargo van expedite",
              "16ft and 26ft box with liftgate kit",
            ].map((item) => (
              <p key={item} className="glass rounded-2xl px-5 py-4">
                <span className="text-gold mr-2">★</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Questions" title="Straight answers." />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-white p-6 open:shadow-md transition"
              >
                <summary className="cursor-pointer font-display font-bold text-navy text-lg list-none flex justify-between gap-4">
                  {faq.q}
                  <span className="text-gold group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-navy/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
