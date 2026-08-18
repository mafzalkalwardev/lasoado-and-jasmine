import { Button } from "@/components/ui/Button";
import { company } from "@/lib/company";
import { StarDivider } from "@/components/ui/StarDivider";

export function FinalCta() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] navy-panel grain px-8 py-16 text-center text-cream">
        <div className="relative z-[2]">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-gold-light">
            Ready to book
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold">
            Send the load. We will run it.
          </h2>
          <StarDivider className="mt-6 mb-6" />
          <p className="mx-auto max-w-2xl text-cream/75 text-lg">
            Talk to {company.owner} at {company.phone} or request a quote online.
            24/7 pickup and delivery across all 48 states.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/quote">Get a freight quote</Button>
            <Button href="/contact" variant="outline">
              Contact dispatch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
