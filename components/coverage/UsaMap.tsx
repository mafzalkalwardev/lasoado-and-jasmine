"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { hubState, regions, stateTiles } from "@/lib/states";
import { company } from "@/lib/company";

export function UsaMap() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(hubState);
  const current = stateTiles.find((s) => s.id === active);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".map-tile", {
          autoAlpha: 0,
          y: 10,
          stagger: { amount: 1.1, from: "center" },
          duration: 0.35,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="grid lg:grid-cols-[1.5fr_0.9fr] gap-10 items-start">
      <div className="rounded-[2rem] bg-navy p-4 sm:p-8 hairline-frame">
        <div
          className="grid gap-1.5"
          style={{
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gridTemplateRows: "repeat(6, minmax(0, 1fr))",
          }}
        >
          {stateTiles.map((state) => {
            const isHub = state.id === hubState;
            const isActive = state.id === active;
            return (
              <button
                key={state.id}
                type="button"
                className={`map-tile aspect-square rounded-md text-[10px] sm:text-xs font-display font-bold transition ${
                  isHub
                    ? "bg-gold text-navy-deep ring-2 ring-gold-light"
                    : isActive
                      ? "bg-gold-light text-navy-deep"
                      : "bg-navy-light/60 text-cream/80 hover:bg-gold hover:text-navy-deep"
                }`}
                style={{ gridColumn: state.c, gridRow: state.r }}
                onMouseEnter={() => setActive(state.id)}
                onFocus={() => setActive(state.id)}
                aria-label={state.name}
              >
                {state.id}
              </button>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-gold">
          48 contiguous states · hub {company.address.city}
        </p>
      </div>

      <aside className="rounded-[2rem] bg-white p-8 shadow-sm">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-gold-dark">
          {current?.id === hubState ? "Indianapolis hub" : "We run this state"}
        </p>
        <h3 className="mt-3 font-display text-3xl font-extrabold text-navy">
          {current?.name}
        </h3>
        <p className="mt-4 text-navy/70 leading-relaxed">
          {current?.id === hubState
            ? `${company.address.full}. Every nationwide lane can start or end here.`
            : `LASOADO AND JASMINE LLC hauls to and from ${current?.name} with OTR tractors, power-only, Sprinters, cargo vans, and box trucks. 24/7 pickup and delivery.`}
        </p>
        <ul className="mt-8 space-y-5">
          {regions.map((region) => (
            <li key={region.name}>
              <p className="font-display font-bold text-navy">{region.name}</p>
              <p className="text-sm text-navy/65 mt-1">{region.text}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
