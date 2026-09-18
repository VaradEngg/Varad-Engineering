"use client";

import { useState } from "react";
import { company } from "@/lib/company";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  requirement: "",
  message: "",
  hp_website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Enter a valid email address.";
    if (!form.requirement.trim())
      nextErrors.requirement = "Please select a requirement type.";
    if (!form.message.trim())
      nextErrors.message = "Please describe your broach or tooling requirement.";
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setStatus("success");
      setStatusMessage(
        result.message || "Your enquiry has been dispatched to our engineering desk."
      );
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your enquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8"
      noValidate
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Submit Tooling Enquiry
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Responses are emailed directly to our Chakan works engineering desk.
          </p>
        </div>
      </div>

      {/* Hidden honeypot field for bot protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_website">Leave this field blank</label>
        <input
          id="hp_website"
          type="text"
          name="hp_website"
          tabIndex={-1}
          autoComplete="off"
          value={form.hp_website}
          onChange={handleChange}
        />
      </div>

      {/* Success Notification Banner */}
      {status === "success" && (
        <div
          className="mb-6 border-l-4 border-emerald-600 bg-emerald-50 p-4 text-emerald-900 shadow-sm"
          role="status"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-emerald-950">
                Enquiry Sent Successfully!
              </div>
              <div className="mt-1 text-sm text-emerald-800 leading-relaxed">
                {statusMessage}
              </div>
              <div className="mt-2 text-xs text-emerald-700">
                Our tooling engineers will review your specifications and reach back to you via your email or phone number.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {status === "error" && (
        <div
          className="mb-6 border-l-4 border-rose-600 bg-rose-50 p-4 text-rose-900 shadow-sm"
          role="alert"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-rose-950">
                Unable to Send Enquiry
              </div>
              <div className="mt-1 text-sm text-rose-800 leading-relaxed">
                {statusMessage}
              </div>
              <div className="mt-2 text-xs text-rose-700">
                You can also call us directly at{" "}
                <a
                  href={`tel:${company.phone}`}
                  className="font-bold underline hover:text-rose-950"
                >
                  {company.phone}
                </a>{" "}
                to discuss your broaching requirement immediately.
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-3.5 sm:gap-5 md:grid-cols-2">
        {([
          ["name", "Full Name *", "text", "e.g. Rajesh Sharma"],
          ["company", "Company / Organization", "text", "e.g. Acme Motors Ltd."],
          ["email", "Email Address *", "email", "name@company.com"],
          ["phone", "Phone Number", "tel", "+91 98765 43210"],
        ] as const).map(([name, label, type, placeholder]) => (
          <div key={name}>
            <label
              htmlFor={name}
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={form[name]}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full border px-3 py-2.5 text-sm outline-none transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed ${
                errors[name]
                  ? "border-red-500 bg-red-50/30 focus:border-red-600"
                  : "border-slate-300 bg-white focus:border-[#0b4267] focus:ring-1 focus:ring-[#0b4267]"
              }`}
            />
            {errors[name] && (
              <p className="mt-1 text-xs font-medium text-red-600">{errors[name]}</p>
            )}
          </div>
        ))}

        <div className="md:col-span-2">
          <label
            htmlFor="requirement"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Requirement Category *
          </label>
          <select
            id="requirement"
            name="requirement"
            value={form.requirement}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full border px-3 py-2.5 text-sm outline-none transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed ${
              errors.requirement
                ? "border-red-500 bg-red-50/30 focus:border-red-600"
                : "border-slate-300 bg-white focus:border-[#0b4267] focus:ring-1 focus:ring-[#0b4267]"
            }`}
          >
            <option value="">Select a requirement category</option>
            <option value="Flat Broaches">Flat Broaches (Key / Surface)</option>
            <option value="Round Broaches">Round Broaches (Spline / Involute / Hex)</option>
            <option value="Contract Broaching">Contract Broaching Services</option>
            <option value="Tool Sharpening">Tool Sharpening / Regrinding</option>
            <option value="Other Tooling Requirement">Other Tooling Requirement</option>
          </select>
          {errors.requirement && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.requirement}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Requirement Details &amp; Specifications *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Please mention dimensions, component material, keyway/spline specifications, quantity, or drawing notes..."
            value={form.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full border px-3 py-2.5 text-sm outline-none transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed ${
              errors.message
                ? "border-red-500 bg-red-50/30 focus:border-red-600"
                : "border-slate-300 bg-white focus:border-[#0b4267] focus:ring-1 focus:ring-[#0b4267]"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#0b4267] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#083653] disabled:opacity-75 disabled:cursor-not-allowed shadow-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-white" />
              <span>Sending Enquiry to Email...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>

        <span className="text-xs text-slate-500 text-center sm:text-right">
          Direct telephone support: <a href={`tel:${company.phone}`} className="font-semibold text-slate-700 hover:text-amber-600">{company.phone}</a>
        </span>
      </div>
    </form>
  );
}

