import { ShieldCheck, Sparkles, Timer, Truck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    icon: Sparkles,
    title: "Clean trucks, no holes",
    text: "Equipment is kept presentable and tight so freight stays protected from weather and road spray.",
  },
  {
    icon: ShieldCheck,
    title: "Inspected & bonded",
    text: "Proper inspections, clean driving records, and bonded-carrier care on every dispatch.",
  },
  {
    icon: Timer,
    title: "Time-to-time delivery",
    text: "Punctual drivers. Appointments kept. Late-night and 24/7 windows are normal, not a special request.",
  },
  {
    icon: Truck,
    title: "The right iron",
    text: "Multiple trucks plus Sprinters, cargo vans, box trucks, and power-only — sized for the load.",
  },
];

export function WhyUs() {
  return (
    <section className="px-6 pb-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-cream-dark/50 px-6 py-16 sm:px-12">
        <SectionHeading
          eyebrow="Why brokers call us"
          title="We take care of the whole move."
          copy="From straps and liftgates to team drivers and overnight docks, dispatch handles the details so freight arrives intact and on the clock."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => (
            <article key={point.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <point.icon className="size-6 text-gold-dark" />
              <h3 className="mt-4 font-display font-bold text-navy text-lg">{point.title}</h3>
              <p className="mt-2 text-navy/70 leading-relaxed text-sm">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
