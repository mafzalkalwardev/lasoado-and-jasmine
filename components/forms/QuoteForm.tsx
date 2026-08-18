"use client";

import { motion } from "framer-motion";
import {
  company,
  equipmentOptions,
  formSubmitEndpoint,
  specialNeeds,
} from "@/lib/company";

const field =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";
const label = "mb-1.5 block text-xs font-display uppercase tracking-[0.2em] text-navy/70";

export function QuoteForm() {
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
      className="rounded-[2rem] bg-white p-6 sm:p-10 shadow-sm space-y-6"
    >
      <input type="hidden" name="_next" value="/thank-you" />
      <input type="hidden" name="_subject" value={`Quote request — ${company.name}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label="Full name" required />
        <Field name="company" label="Company" />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" type="tel" required />
        <Field name="pickup" label="Pickup city / state" required />
        <Field name="delivery" label="Delivery city / state" required />
        <Field name="pickup_date" label="Pickup date" type="date" />
        <Field name="delivery_date" label="Delivery date" type="date" />
        <Field name="freight_type" label="Freight type" required />
        <div>
          <label className={label} htmlFor="equipment">
            Equipment needed
          </label>
          <select id="equipment" name="equipment" className={field} defaultValue="">
            <option value="" disabled>
              Select equipment
            </option>
            {equipmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <Field name="weight" label="Weight" placeholder="e.g. 8,000 lbs" />
        <Field name="dimensions" label="Dimensions" placeholder="L x W x H" />
      </div>

      <fieldset>
        <legend className={label}>Special needs</legend>
        <div className="mt-3 grid sm:grid-cols-2 gap-3">
          {specialNeeds.map((need) => (
            <label key={need.id} className="flex items-center gap-3 text-sm text-navy">
              <input
                type="checkbox"
                name="special_needs[]"
                value={need.label}
                className="size-4 accent-gold"
              />
              {need.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={label} htmlFor="notes">
          Notes
        </label>
        <textarea id="notes" name="notes" rows={5} className={field} />
      </div>

      <button
        type="submit"
        className="gold-fill w-full sm:w-auto rounded-full px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-navy-deep"
      >
        Submit quote request
      </button>
    </motion.form>
  );
}

function Field({
  name,
  label: text,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className={label} htmlFor={name}>
        {text}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={field}
      />
    </div>
  );
}
