"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/company";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduce } = context.conditions ?? {};
          if (reduce) {
            gsap.set([".hero-kicker", ".hero-title", ".hero-copy", ".hero-cta", ".hero-badge", ".hero-arc", ".hero-line"], {
              autoAlpha: 1,
              y: 0,
              scale: 1,
            });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.from(".hero-bg", { scale: 1.12, duration: 1.6 })
            .from(".hero-arc", { autoAlpha: 0, scale: 0.85, duration: 1.1 }, 0.1)
            .from(".hero-kicker", { y: 24, autoAlpha: 0, duration: 0.6 }, 0.25)
            .from(".hero-title span", { y: 40, autoAlpha: 0, stagger: 0.08, duration: 0.7 }, 0.35)
            .from(".hero-copy", { y: 20, autoAlpha: 0, duration: 0.55 }, 0.7)
            .from(".hero-cta", { y: 16, autoAlpha: 0, stagger: 0.1, duration: 0.5 }, 0.85)
            .from(".hero-badge", { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.45 }, 0.95)
            .from(".hero-line", { scaleX: 0, duration: 0.9, stagger: 0.12 }, 0.4);

          gsap.to(".hero-truck", {
            x: 18,
            duration: 3.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden navy-panel grain text-cream">
      <Image
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2200&q=80"
        alt="Over-the-road tractor on the highway at dusk"
        fill
        priority
        className="hero-bg object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/50" />

      <svg
        className="hero-arc pointer-events-none absolute -left-24 top-16 h-[520px] w-[520px] text-gold/40"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 320 C 40 140, 160 40, 340 70"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M70 340 C 80 180, 190 70, 360 100"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.6"
        />
      </svg>

      <div className="absolute left-0 right-0 top-1/3 space-y-4 opacity-40 pointer-events-none">
        <div className="hero-line speed-line mx-8" />
        <div className="hero-line speed-line mx-24" />
        <div className="hero-line speed-line mx-16" />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 pb-16">
        <p className="hero-kicker font-display text-xs sm:text-sm uppercase tracking-[0.42em] text-gold-light">
          {company.tagline}
        </p>
        <h1 className="hero-title mt-5 max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
          <span className="block">Freight that moves</span>
          <span className="block gold-text">all 48 states.</span>
        </h1>
        <p className="hero-copy mt-6 max-w-xl text-lg text-cream/80 leading-relaxed">
          {company.name} runs over the road from Indianapolis with multiple
          trucks, Sprinters, cargo vans, and box units — bonded, punctual, and
          available 24/7.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="hero-cta">
            <Button href="/quote">Request a quote</Button>
          </div>
          <div className="hero-cta">
            <Button href="/fleet" variant="outline">
              View the fleet <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
          {[
            { icon: Truck, label: "OTR · vans · box · power only" },
            { icon: ShieldCheck, label: "Bonded carrier" },
            { icon: ShieldCheck, label: "Clean trucks & records" },
            { icon: Truck, label: "Team drivers available" },
          ].map((item) => (
            <div
              key={item.label}
              className="hero-badge glass rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <item.icon className="size-4 text-gold shrink-0" />
              <span className="text-sm text-cream/90">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-truck pointer-events-none absolute bottom-8 right-6 hidden lg:block opacity-80">
        <Image src="/logo.png" alt="" width={268} height={128} className="h-24 w-auto drop-shadow-2xl" />
      </div>
    </section>
  );
}
