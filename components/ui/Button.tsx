"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Variant = "gold" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  gold: "gold-fill text-navy-deep shadow-[0_10px_30px_rgba(201,162,39,0.28)] hover:brightness-110",
  outline:
    "border border-gold/70 text-gold bg-transparent hover:bg-gold/10",
  ghost: "text-cream hover:text-gold",
};

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "gold",
  className = "",
  type = "button",
}: Props) {
  const reduce = useReducedMotion();
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase font-display transition will-change-transform ${styles[variant]} ${className}`;

  const motionProps = {
    whileHover: reduce ? undefined : { y: -2, scale: 1.02 },
    whileTap: reduce ? undefined : { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <Link href={href} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} className={cls} {...motionProps}>
      {children}
    </motion.button>
  );
}
