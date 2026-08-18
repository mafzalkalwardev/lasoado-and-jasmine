"use client";

import { useRef } from "react";
import { Clock, Shield, Users, Package } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { services } from "@/lib/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const icons = [Package, Clock, Shield, Users, Clock, Shield];

export function ServicesPreview() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".svc-card", {
          y: 32,
          autoAlpha: 0,
          stagger: 0.08,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="navy-panel grain text-cream px-6 py-24">
      <div className="relative z-[2] mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="How we haul"
          title="Every freight. Every hour. Every state."
          copy="Late-night pickup, late-night delivery, team drivers, and time-definite appointments — we take care of the move from dock to dock."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i] ?? Package;
            return (
              <article
                key={service.title}
                className="svc-card glass rounded-3xl p-7"
              >
                <Icon className="size-6 text-gold" />
                <h3 className="mt-5 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-cream/75 leading-relaxed">{service.text}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/services">All services</Button>
        </div>
      </div>
    </section>
  );
}
