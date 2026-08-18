import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { company, mapsUrl } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${company.name} dispatch in Indianapolis. Phone ${company.phone}. Email ${company.email}.`,
};

const embed = `https://maps.google.com/maps?q=${encodeURIComponent(company.address.full)}&z=14&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Dispatch"
        title="Call, email, or send the form."
        copy={`${company.owner} · ${company.hours}`}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <aside className="space-y-4">
            <a
              href={company.phoneHref}
              className="flex items-start gap-4 rounded-3xl bg-navy text-cream p-6 hover:bg-navy-mid transition"
            >
              <Phone className="size-5 text-gold mt-1" />
              <span>
                <span className="block font-display text-xs uppercase tracking-[0.3em] text-gold">
                  Phone
                </span>
                <span className="mt-1 block text-lg">{company.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm"
            >
              <Mail className="size-5 text-gold-dark mt-1" />
              <span>
                <span className="block font-display text-xs uppercase tracking-[0.3em] text-gold-dark">
                  Email
                </span>
                <span className="mt-1 block text-lg text-navy">{company.email}</span>
              </span>
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm"
            >
              <MapPin className="size-5 text-gold-dark mt-1" />
              <span>
                <span className="block font-display text-xs uppercase tracking-[0.3em] text-gold-dark">
                  Office
                </span>
                <span className="mt-1 block text-lg text-navy">{company.address.full}</span>
              </span>
            </a>
            <div className="overflow-hidden rounded-3xl min-h-[240px]">
              <iframe
                title="Office location map"
                src={embed}
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
