import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FleetGrid } from "@/components/fleet/FleetGrid";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "OTR tractors, power-only, Sprinter vans, cargo vans, 16ft and 26ft box trucks with straps, load locks, liftgate, and pallet jacks.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet & equipment"
        title="Clean trucks. The right accessories."
        copy="Multiple trucks, multiple sizes, no holes, current inspections. Box trucks roll with straps, load locks, liftgate, and pallet jacks."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <FleetGrid />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
