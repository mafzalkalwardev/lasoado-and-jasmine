"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { stats } from "@/lib/company";

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const counters = gsap.utils.toArray<HTMLElement>(".stat-num");
        counters.forEach((el) => {
          const end = Number(el.dataset.value ?? 0);
          const obj = { n: 0 };
          gsap.to(obj, {
            n: end,
            duration: 1.6,
            ease: "power2.out",
            snap: { n: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.n));
            },
          });
        });

        gsap.from(".stat-card", {
          y: 28,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative -mt-10 z-10 px-6">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card hairline-frame rounded-2xl bg-navy text-cream px-6 py-7 text-center"
          >
            <p className="font-display text-4xl font-extrabold text-gold">
              <span className="stat-num" data-value={stat.value}>
                {stat.value}
              </span>
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cream/70 font-display">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
