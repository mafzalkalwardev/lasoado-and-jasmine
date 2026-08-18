import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your message was sent to LASOADO AND JASMINE LLC dispatch.",
};

export default function ThankYouPage() {
  return (
    <section className="navy-panel grain min-h-[80svh] flex items-center text-cream px-6 pt-32 pb-20">
      <div className="relative z-[2] mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.4em] text-gold-light">
          Message received
        </p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold">
          Thank you. Dispatch has it.
        </h1>
        <StarDivider className="mt-6 mb-6" />
        <p className="text-lg text-cream/80 leading-relaxed">
          Your form was submitted to {company.email}. {company.owner} or dispatch will
          follow up. For urgent freight, call{" "}
          <a href={company.phoneHref} className="text-gold">
            {company.phone}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/">Back home</Button>
          <Button href="/quote" variant="outline">
            Send another quote
          </Button>
        </div>
      </div>
    </section>
  );
}
