import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/home/FinalCta";
import { company, values } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${company.name} — Indianapolis OTR carrier run with ${company.owner}. Nationwide trucking across 48 states.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="A carrier built to show up."
        copy={`${company.name} is an Indianapolis trucking company that runs over the road in all 48 contiguous states — with clean equipment, punctual drivers, and 24/7 dispatch.`}
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="Family LLC. Professional miles."
              copy={`Led by ${company.owner}, we operate multiple trucks and a mixed fleet so brokers and shippers can cover the load with one call. We are a bonded carrier. We keep the iron clean. We keep the clock.`}
            />
            <p className="mt-6 text-navy/70 leading-relaxed">
              From {company.address.full}, we dispatch OTR tractors, power-only, Sprinter vans,
              cargo vans, and 16ft and 26ft box trucks. Team drivers are available when the
              appointment and the mileage demand it. Late-night pickup and late-night delivery
              are part of the service — not an exception.
            </p>
            <div className="mt-8">
              <Button href="/contact">Talk with {company.owner}</Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] hairline-frame min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
              alt="Highway freight corridor at dusk"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl bg-navy text-cream p-7">
              <h2 className="font-display text-xl font-bold text-gold">{value.title}</h2>
              <p className="mt-3 text-cream/75 leading-relaxed">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 sm:p-12 text-center shadow-sm">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-gold-dark">
            How we operate
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">
            Multiple trucks. One standard.
          </h2>
          <p className="mt-5 text-navy/70 leading-relaxed max-w-3xl mx-auto">
            Every unit — tractor, van, or box — is expected to be clean, inspected, and
            ready. Drivers are punctual. Freight is secured with the right accessories.
            We haul every type of legal freight, and we treat on-time delivery as the job,
            not a slogan.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
