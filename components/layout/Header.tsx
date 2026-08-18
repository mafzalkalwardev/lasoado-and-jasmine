"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { company, navLinks } from "@/lib/company";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy-deep/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(6,16,31,0.45)]"
          : "bg-gradient-to-b from-navy-deep/80 to-transparent"
      }`}
    >
      <div className="h-[2px] gold-fill" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt={`${company.name} logo`}
            width={214}
            height={102}
            className="h-12 sm:h-14 w-auto bg-white rounded-md p-1"
            priority
          />
          <span className="hidden lg:block min-w-0">
            <span className="block font-display text-[11px] font-extrabold tracking-[0.18em] text-cream leading-tight">
              {company.name}
            </span>
            <span className="block font-display text-[10px] tracking-[0.22em] text-gold uppercase">
              {company.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-[11px] uppercase tracking-[0.2em] transition ${
                  active ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={company.phoneHref}
            className="hidden md:inline-flex items-center gap-2 text-cream/90 hover:text-gold text-sm"
          >
            <Phone className="size-4 text-gold" />
            {company.phone}
          </a>
          <Link
            href="/quote"
            className="hidden sm:inline-flex gold-fill text-navy-deep font-display text-xs font-bold uppercase tracking-widest rounded-full px-5 py-2.5"
          >
            Get a quote
          </Link>
          <button
            type="button"
            className="xl:hidden inline-flex size-11 items-center justify-center rounded-full border border-gold/40 text-cream"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden bg-navy-deep/98 border-t border-gold/20"
          >
            <nav className="flex flex-col px-6 py-6 gap-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-display uppercase tracking-[0.25em] text-sm ${
                    pathname === link.href ? "text-gold" : "text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={company.phoneHref} className="text-gold pt-2">
                {company.phone}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
