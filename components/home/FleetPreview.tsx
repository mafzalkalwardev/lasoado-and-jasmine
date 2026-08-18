"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { fleet } from "@/lib/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";

export function FleetPreview() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".fleet-card", {
          y: 40,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The fleet"
          title="The right unit for every load."
          copy="Tractors, power-only, Sprinters, cargo vans, and 16ft and 26ft box trucks — each kept clean, inspected, and equipped to move freight safely."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((unit) => (
            <TiltCard key={unit.slug} className="fleet-card">
              <Link
                href="/fleet"
                className="group block overflow-hidden rounded-3xl bg-navy text-cream hairline-frame h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="font-display text-xs uppercase tracking-[0.28em] text-gold">
                    {unit.short}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold">{unit.name}</h3>
                  <p className="mt-3 text-sm text-cream/75 leading-relaxed">{unit.summary}</p>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/fleet">Explore equipment</Button>
        </div>
      </div>
    </section>
  );
}
