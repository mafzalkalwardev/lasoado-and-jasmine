import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { UsaMap } from "@/components/coverage/UsaMap";
import { FinalCta } from "@/components/home/FinalCta";
import { stateTiles } from "@/lib/states";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "LASOADO AND JASMINE LLC runs over the road in all 48 contiguous U.S. states from Indianapolis, Indiana.",
};

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title="All 48. No gaps."
        copy="We run over the road throughout the contiguous United States. Alaska and Hawaii are outside this network. Everything else is in play."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <UsaMap />
          <div className="mt-16">
            <h2 className="font-display text-2xl font-extrabold text-navy text-center">
              States we serve
            </h2>
            <ul className="mt-8 columns-2 sm:columns-3 lg:columns-4 gap-6 text-navy/80">
              {stateTiles
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((state) => (
                  <li key={state.id} className="py-1">
                    <span className="text-gold-dark font-display font-bold mr-2">
                      {state.id}
                    </span>
                    {state.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
