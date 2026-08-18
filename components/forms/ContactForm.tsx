"use client";

import { motion } from "framer-motion";
import { company, formSubmitEndpoint } from "@/lib/company";

const field =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";
const label = "mb-1.5 block text-xs font-display uppercase tracking-[0.2em] text-navy/70";

export function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      action={formSubmitEndpoint}
      method="POST"
      onSubmit={(event) => {
        const next = event.currentTarget.elements.namedItem("_next");
        if (next instanceof HTMLInputElement) {
          next.value = `${window.location.origin}/thank-you`;
        }
      }}
      className="rounded-[2rem] bg-white p-6 sm:p-10 shadow-sm space-y-5"
    >
      <input type="hidden" name="_next" value="/thank-you" />
      <input type="hidden" name="_subject" value={`Website message — ${company.name}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className={label} htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required className={field} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="subject">
          Subject
        </label>
        <input id="subject" name="subject" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={6} required className={field} />
      </div>
      <button
        type="submit"
        className="gold-fill w-full sm:w-auto rounded-full px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-navy-deep"
      >
        Send message
      </button>
    </motion.form>
  );
}
