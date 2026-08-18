"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { hubState, stateTiles } from "@/lib/states";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CoverageTeaser() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(hubState);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".state-tile", {
          autoAlpha: 0,
          scale: 0.7,
          stagger: { amount: 0.9, from: "center" },
          duration: 0.4,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const current = stateTiles.find((s) => s.id === active);

  return (
    <section ref={root} className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Coverage"
          title="The Lower 48 is our lane."
          copy="From our Indianapolis hub we run over the road in every contiguous U.S. state. Hover a tile — that state is on the board."
        />

        <div className="mt-12 grid lg:grid-cols-[1.4fr_0.8fr] gap-10 items-center">
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
                  className={`state-tile aspect-square rounded-md text-[10px] sm:text-xs font-display font-bold tracking-wide transition ${
                    isHub
                      ? "bg-gold text-navy-deep"
                      : isActive
                        ? "bg-navy text-gold"
                        : "bg-navy-mid/10 text-navy hover:bg-navy hover:text-gold"
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

          <div className="rounded-3xl bg-navy text-cream p-8 hairline-frame">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              {current?.id === hubState ? "Home base" : "Service state"}
            </p>
            <h3 className="mt-3 font-display text-3xl font-extrabold">
              {current?.name ?? "Select a state"}
            </h3>
            <p className="mt-4 text-cream/75 leading-relaxed">
              {current?.id === hubState
                ? "Indianapolis, Indiana — 3937 N High School Rd. The hub from which every nationwide run starts."
                : `Yes, we haul to and from ${current?.name}. OTR, van, box, and power-only — 24/7.`}
            </p>
            <div className="mt-8">
              <Button href="/coverage">Full coverage map</Button>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-navy/60">
          Alaska and Hawaii are outside our 48-state OTR network.{" "}
          <Link href="/coverage" className="text-gold-dark underline">
            See the full map
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
