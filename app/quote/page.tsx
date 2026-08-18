import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Request a quote",
  description: `Request a freight quote from ${company.name}. 48-state OTR, vans, box trucks, and power-only.`,
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us the lane. We will price the move."
        copy="Include pickup, delivery, freight, and equipment. Dispatch reads every request — including late-night and team-driver needs."
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <QuoteForm />
          <p className="mt-6 text-center text-sm text-navy/55">
            Submissions go to {company.email}. First-time FormSubmit use requires a one-time
            confirmation in that inbox.
          </p>
        </div>
      </section>
    </>
  );
}
