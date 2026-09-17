"use client";

import { useState } from "react";
import { company } from "@/lib/company";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", requirement: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.requirement.trim()) nextErrors.requirement = "Please select a requirement type.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitted(true);
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
      <h2 className="text-lg font-bold text-slate-900 mb-4 sm:text-xl sm:mb-6">Submit Enquiry</h2>
      <div className="grid gap-3.5 sm:gap-5 md:grid-cols-2">
        {([
          ["name", "Name", "text"],
          ["company", "Company", "text"],
          ["email", "Email", "email"],
          ["phone", "Phone", "tel"],
        ] as const).map(([name, label, type]) => (
          <div key={name}>
            <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
            <input id={name} name={name} type={type} value={form[name]} onChange={handleChange} className="w-full border border-slate-300 px-3 py-2.5 outline-none focus:border-slate-900" />
            {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
          </div>
        ))}

        <div className="md:col-span-2">
          <label htmlFor="requirement" className="mb-2 block text-sm font-medium text-slate-700">Requirement</label>
          <select id="requirement" name="requirement" value={form.requirement} onChange={handleChange} className="w-full border border-slate-300 px-3 py-2.5 outline-none focus:border-slate-900">
            <option value="">Select a requirement type</option>
            <option value="Flat Broaches">Flat Broaches</option>
            <option value="Round Broaches">Round Broaches</option>
            <option value="Contract Broaching">Contract Broaching</option>
            <option value="Tool Sharpening">Tool Sharpening / Resharpening</option>
            <option value="Other Tooling Requirement">Other Tooling Requirement</option>
          </select>
          {errors.requirement && <p className="mt-1 text-sm text-red-600">{errors.requirement}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Requirement Details</label>
          <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className="w-full border border-slate-300 px-3 py-2.5 outline-none focus:border-slate-900" />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>
      </div>

      <button type="submit" className="mt-6 inline-flex items-center justify-center bg-[#0b4267] px-6 py-3 text-sm font-bold text-white hover:bg-[#083653]">
        Submit Enquiry
      </button>

      {submitted && (
        <div className="mt-4 border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700" role="status">
          Your enquiry has been prepared. This frontend form does not send data to a server yet. Please contact Varad Engineering directly at {company.phone} to submit the requirement.
        </div>
      )}
    </form>
  );
}
