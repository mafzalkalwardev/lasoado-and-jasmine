import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FleetPreview } from "@/components/home/FleetPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CoverageTeaser } from "@/components/home/CoverageTeaser";
import { WhyUs } from "@/components/home/WhyUs";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FleetPreview />
      <ServicesPreview />
      <CoverageTeaser />
      <WhyUs />
      <FinalCta />
    </>
  );
}
