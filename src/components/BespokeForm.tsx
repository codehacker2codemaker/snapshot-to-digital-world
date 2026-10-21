import { useState } from "react";
import { bespokeMessage, isValidIndianPhone, waLink, type BespokeEnquiry } from "@/lib/site";

const TYPES = ["Ring", "Necklace", "Pendant", "Earrings", "Bracelet / Cuff", "Other"];
const MATERIALS = ["Sterling silver", "Silver with diamonds", "Silver with coloured stones", "Not sure yet"];
const BUDGETS = ["Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹1,50,000", "₹1,50,000 – ₹3,00,000", "Above ₹3,00,000"];

const empty: BespokeEnquiry = { name: "", phone: "", type: "", material: "", budget: "", description: "" };

export function BespokeForm({ initialType = "" }: { initialType?: string }) {
  const [v, setV] = useState<BespokeEnquiry>({ ...empty, type: initialType });
  const [errors, setErrors] = useState<Partial<Record<keyof BespokeEnquiry, string>>>({});
  const set = (k: keyof BespokeEnquiry) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setV({ ...v, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    if (v.name.trim().length < 2) err.name = "Please enter your full name.";
    if (!isValidIndianPhone(v.phone)) err.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!v.type) err.type = "Select a jewellery type.";
    if (!v.material) err.material = "Select a material.";
    if (!v.budget) err.budget = "Select a budget range.";
    if (v.description.trim().length < 10) err.description = "Tell us a little more (at least 10 characters).";
    setErrors(err);
    if (Object.keys(err).length) return;
    window.open(waLink(bespokeMessage(v)), "_blank", "noopener");
  };

  return (
    <form onSubmit={submit} noValidate className="grid gap-8 md:grid-cols-2">
      <Field errors={errors} id="name" label="Full Name"><input id="name" className="field-luxe" value={v.name} onChange={set("name")} autoComplete="name" /></Field>
      <Field errors={errors} id="phone" label="WhatsApp Number"><input id="phone" type="tel" inputMode="tel" className="field-luxe" placeholder="+91 98765 43210" value={v.phone} onChange={set("phone")} autoComplete="tel" /></Field>
      <Field errors={errors} id="type" label="Jewellery Type">
        <select id="type" className="field-luxe" value={v.type} onChange={set("type")}>
          <option value="">Select…</option>{TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field errors={errors} id="material" label="Preferred Material">
        <select id="material" className="field-luxe" value={v.material} onChange={set("material")}>
          <option value="">Select…</option>{MATERIALS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field errors={errors} id="budget" label="Budget Range">
          <select id="budget" className="field-luxe" value={v.budget} onChange={set("budget")}>
            <option value="">Select…</option>{BUDGETS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
      </div>
      <div className="md:col-span-2">
        <Field errors={errors} id="description" label="Design Description">
          <textarea id="description" rows={4} className="field-luxe resize-none" placeholder="Occasion, inspiration, stones, sizing, timeline…" value={v.description} onChange={set("description")} />
        </Field>
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="btn-luxe w-full md:w-auto">Send Enquiry on WhatsApp</button>
        <p className="mt-3 text-xs text-muted-foreground">Opens WhatsApp with your details pre-filled. Nothing is stored on this site.</p>
      </div>
    </form>
  );
}

function Field({ id, label, errors, children }: { id: keyof BespokeEnquiry; label: string; errors: Partial<Record<keyof BespokeEnquiry, string>>; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-muted-foreground">{label} *</label>
      {children}
      {errors[id] && <p role="alert" className="mt-1 text-xs text-destructive">{errors[id]}</p>}
    </div>
  );
}
