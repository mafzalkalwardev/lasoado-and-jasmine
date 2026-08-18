"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StarDivider } from "./StarDivider";

type Props = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PageHero({ eyebrow, title, copy }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden navy-panel grain text-cream pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full border border-gold/30" />
        <div className="absolute -right-10 bottom-0 h-96 w-96 rounded-full border border-gold/20" />
      </div>
      <div className="relative z-[2] mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xs uppercase tracking-[0.4em] text-gold-light"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          {title}
        </motion.h1>
        <StarDivider className="mt-6 mb-6" />
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.16 }}
          className="mx-auto max-w-2xl text-lg text-cream/80 leading-relaxed"
        >
          {copy}
        </motion.p>
      </div>
    </section>
  );
}
