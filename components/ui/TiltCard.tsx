"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          fine: "(hover: hover) and (pointer: fine)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { fine, reduce } = context.conditions ?? {};
          if (!fine || reduce) return;

          const xTo = gsap.quickTo(el, "rotationY", { duration: 0.45, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "rotationX", { duration: 0.45, ease: "power3.out" });

          const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            xTo(px * 10);
            yTo(py * -8);
          };
          const onLeave = () => {
            xTo(0);
            yTo(0);
          };

          el.addEventListener("mousemove", onMove);
          el.addEventListener("mouseleave", onLeave);
          gsap.set(el, { transformPerspective: 900 });

          return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
          };
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`will-change-transform ${className}`} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}
