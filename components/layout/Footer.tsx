import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, mapsUrl, navLinks } from "@/lib/company";
import { StarDivider } from "@/components/ui/StarDivider";

export function Footer() {
  return (
    <footer className="navy-panel grain text-cream">
      <div className="relative z-[2] mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt={`${company.name} logo`}
              width={214}
              height={102}
              className="h-16 w-auto bg-white rounded-md p-1"
            />
            <p className="mt-5 font-display text-xl font-bold tracking-wide">
              {company.name}
            </p>
            <p className="mt-1 text-gold uppercase tracking-[0.25em] text-xs font-display">
              {company.tagline}
            </p>
            <StarDivider className="justify-start mt-5" />
            <p className="mt-4 max-w-md text-cream/75 leading-relaxed">
              Over-the-road trucking from Indianapolis across all 48 states.
              Multiple trucks, vans, and box units. Bonded, punctual, 24/7.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm uppercase tracking-[0.3em] text-gold mb-4">
              Navigate
            </h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 hover:text-gold transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm uppercase tracking-[0.3em] text-gold mb-4">
              Dispatch
            </h2>
            <ul className="space-y-3 text-cream/85">
              <li>
                <a href={company.phoneHref} className="inline-flex items-start gap-2 hover:text-gold">
                  <Phone className="size-4 mt-1 text-gold shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="inline-flex items-start gap-2 hover:text-gold">
                  <Mail className="size-4 mt-1 text-gold shrink-0" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 hover:text-gold">
                  <MapPin className="size-4 mt-1 text-gold shrink-0" />
                  {company.address.full}
                </a>
              </li>
              <li className="text-sm text-cream/70">{company.hours}</li>
              <li className="text-sm">Contact: {company.owner}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3 justify-between text-xs text-cream/55">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Bonded carrier · Clean equipment · Time-definite freight</p>
        </div>
      </div>
    </footer>
  );
}
