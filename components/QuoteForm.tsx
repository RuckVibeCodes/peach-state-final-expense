"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CONSENT_TEXT } from "@/lib/site";

type Errors = Record<string, string>;
const sample = { fullName: "Jordan Example", phone: "202-555-0147", email: "jordan@example.com", cityZip: "Dacula, GA 30019" };

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    if (!data.get("ageRange")) nextErrors.ageRange = "Select an age range.";
    if (!data.get("contactMethod")) nextErrors.contactMethod = "Choose a contact preference.";
    if (!data.get("tcpaConsent")) nextErrors.tcpaConsent = "Check the box to continue with the sample.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => document.getElementById(Object.keys(nextErrors)[0])?.focus());
      return;
    }
    // This public preview never sends form values, persists them, or calls the API.
    setSubmitted(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }
  function reset() {
    setSubmitted(false);
    setErrors({});
    requestAnimationFrame(() => document.getElementById("ageRange")?.focus());
  }
  function errorProps(name: string) {
    return { "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `${name}-error` : undefined };
  }
  if (submitted) return <section className="demo-success" aria-label="Request confirmation">
    <p className="demo-label">Demo</p><h2 ref={successRef} tabIndex={-1}>You&apos;re one step closer to clarity.</h2>
    <p>Your sample request is complete. Nothing was sent or saved, and no one will contact you.</p>
    <div className="success-actions"><button type="button" className="premium-button" onClick={reset}>Try the form again</button><Link className="text-link" href="/guides/faq">Explore common questions</Link></div>
  </section>;

  return <form ref={formRef} onSubmit={submit} noValidate className="premium-form">
    <p id="demo-notice" className="demo-notice"><span className="demo-label">Demo</span> Try the form with sample contact details. Nothing is sent or saved.</p>
    {Object.keys(errors).length > 0 ? <p role="alert" className="form-error-summary">Please complete the highlighted fields.</p> : null}
    <div className="premium-form-grid">
      {[
        { name: "fullName", label: "Full name", type: "text" },
        { name: "phone", label: "Phone number", type: "tel" },
        { name: "email", label: "Email (optional)", type: "email" },
        { name: "cityZip", label: "City or ZIP code", type: "text" },
      ].map(field => <div key={field.name}><label htmlFor={field.name}>{field.label}</label><input id={field.name} name={field.name} type={field.type} value={sample[field.name as keyof typeof sample]} readOnly autoComplete="off" aria-describedby="demo-notice" /></div>)}
      <div><label htmlFor="ageRange">Age range <span aria-hidden="true">*</span></label><select id="ageRange" name="ageRange" required defaultValue="" {...errorProps("ageRange")}><option value="">Select an age range</option>{["50-59", "60-69", "70-79", "80-85"].map(age => <option value={age} key={age}>{age}</option>)}</select>{errors.ageRange ? <p className="field-error" id="ageRange-error">{errors.ageRange}</p> : null}</div>
      <div><label htmlFor="contactMethod">Preferred contact <span aria-hidden="true">*</span></label><select id="contactMethod" name="contactMethod" required defaultValue="" {...errorProps("contactMethod")}><option value="">Choose a preference</option>{["Phone call", "Text message", "Email"].map(method => <option key={method}>{method}</option>)}</select>{errors.contactMethod ? <p className="field-error" id="contactMethod-error">{errors.contactMethod}</p> : null}</div>
    </div>
    <div className="consent-area"><label htmlFor="tcpaConsent"><input id="tcpaConsent" name="tcpaConsent" type="checkbox" required {...errorProps("tcpaConsent")} /><span>{CONSENT_TEXT}</span></label>{errors.tcpaConsent ? <p className="field-error" id="tcpaConsent-error">{errors.tcpaConsent}</p> : null}</div>
    <button className="premium-button" type="submit">Request information <span aria-hidden="true">&#8599;</span></button>
    <p className="form-privacy">Privacy: this demo uses fixed sample contact information and stays in your browser. It does not accept personal details or send calls, texts, or emails.</p>
  </form>;
}
