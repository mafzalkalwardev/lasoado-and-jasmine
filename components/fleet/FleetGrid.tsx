"use client";

import Image from "next/image";
import { fleet } from "@/lib/company";
import { TiltCard } from "@/components/ui/TiltCard";

export function FleetGrid() {
  return (
    <div className="space-y-16">
      {fleet.map((unit, index) => (
        <TiltCard key={unit.slug}>
          <article
            id={unit.slug}
            className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] bg-navy text-cream hairline-frame ${
              index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image src={unit.image} alt={unit.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            </div>
            <div className="p-8 sm:p-12">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                Equipment {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold">{unit.name}</h2>
              <p className="mt-4 text-cream/80 leading-relaxed">{unit.details}</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-xs uppercase tracking-[0.25em] text-gold">
                    Typical freight
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-cream/80">
                    {unit.typical.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xs uppercase tracking-[0.25em] text-gold">
                    On the truck
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-cream/80">
                    {unit.accessories.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </TiltCard>
      ))}
    </div>
  );
}
