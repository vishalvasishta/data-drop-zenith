import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Lock, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { createOrder, verifyPayment, COURSES } from "@/lib/enrollment-fns";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id: string;
  prefill: { name: string; email: string; contact: string };
  notes: Record<string, string>;
  theme: { color: string };
  handler: (response: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => void;
  modal: { ondismiss: () => void };
}

interface RazorpayInstance {
  open: () => void;
}

// COURSES imported from enrollment-fns so display labels stay in sync with server-authoritative prices
const COURSE_OPTIONS = COURSES.map((c) => ({
  label: `${c.label} — ₹${c.amount.toLocaleString("en-IN")}`,
  value: c.label,
  amount: c.amount,
}));

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll — DATA DROP" },
      {
        name: "description",
        content: "Enroll in India's most practical AI career program. Secure online payment via Razorpay.",
      },
    ],
  }),
  component: EnrollPage,
});

function useRazorpayScript() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.Razorpay) { setReady(true); return; }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setReady(true);
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return ready;
}

function EnrollPage() {
  const navigate = useNavigate();
  const razorpayReady = useRazorpayScript();

  const [form, setForm] = useState({ name: "", email: "", phone: "", course: COURSE_OPTIONS[0].value });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email is required.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.course) e.course = "Please select a course.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError("");
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    if (!razorpayReady) {
      setApiError("Payment system is loading — please try again in a moment.");
      return;
    }

    setLoading(true);
    try {
      // amount is NOT sent to server — server derives it from course name
      const { orderId, enrollmentId, keyId, amount } = await createOrder({
        data: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          course: form.course,
        },
      });

      const rzp = new window.Razorpay({
        key: keyId,
        amount: amount * 100,
        currency: "INR",
        name: "Data Drop",
        description: form.course,
        order_id: orderId,
        prefill: { name: form.name.trim(), email: form.email.trim(), contact: form.phone.trim() },
        notes: { course: form.course, enrollment_id: enrollmentId },
        theme: { color: "#6d28d9" },
        handler: async (response) => {
          try {
            await verifyPayment({
              data: {
                enrollmentId,
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              },
            });
            navigate({
              to: "/success",
              search: { name: form.name.trim(), course: form.course },
            });
          } catch {
            setApiError("Payment received but verification failed. Please contact support with your payment ID: " + response.razorpay_payment_id);
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });

      rzp.open();
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  const selectedCourse = COURSE_OPTIONS.find((c) => c.value === form.course)!;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.04_265)] via-[oklch(0.22_0.06_270)] to-[oklch(0.18_0.04_265)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.22_265/0.2)] blur-[140px]" />
        <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-[oklch(0.5_0.24_300/0.15)] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-lg px-5 pt-28 pb-20 sm:px-8 lg:pt-36">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.35_0.04_270/0.6)] bg-[oklch(0.28_0.04_265/0.5)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.78_0.12_265)] uppercase backdrop-blur">
            Secure Enrollment
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Your <span className="text-gradient-brand">AI Journey</span>
          </h1>
          <p className="mt-3 text-sm text-[oklch(0.72_0.04_265)]">
            Fill in your details and complete payment to get instant access.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-9">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                autoComplete="name"
                placeholder="Ravi Kumar"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-white/30 bg-white/8 outline-none transition focus:ring-2 focus:ring-[oklch(0.6_0.22_270)] ${errors.name ? "border-rose-500" : "border-white/15"}`}
              />
              {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                autoComplete="email"
                placeholder="ravi@example.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-white/30 bg-white/8 outline-none transition focus:ring-2 focus:ring-[oklch(0.6_0.22_270)] ${errors.email ? "border-rose-500" : "border-white/15"}`}
              />
              {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                Phone Number <span className="text-rose-400">*</span>
              </label>
              <input
                type="tel"
                autoComplete="tel"
                placeholder="9876543210"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-white/30 bg-white/8 outline-none transition focus:ring-2 focus:ring-[oklch(0.6_0.22_270)] ${errors.phone ? "border-rose-500" : "border-white/15"}`}
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
            </div>

            {/* Course */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white/80">
                Select Course <span className="text-rose-400">*</span>
              </label>
              <select
                value={form.course}
                onChange={(e) => setForm((f) => ({ ...f, course: e.target.value as typeof f.course }))}
                className={`w-full rounded-xl border px-4 py-3 text-sm text-white bg-[oklch(0.22_0.05_270)] outline-none transition focus:ring-2 focus:ring-[oklch(0.6_0.22_270)] ${errors.course ? "border-rose-500" : "border-white/15"}`}
              >
                {COURSE_OPTIONS.map((c) => (
                  <option key={c.value} value={c.value} className="bg-[oklch(0.22_0.05_270)]">
                    {c.label}
                  </option>
                ))}
              </select>
              {errors.course && <p className="mt-1 text-xs text-rose-400">{errors.course}</p>}
            </div>

            {/* Price summary */}
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between">
              <span className="text-sm text-white/60">Total payable</span>
              <span className="text-xl font-bold text-gradient-brand">
                ₹{selectedCourse.amount.toLocaleString("en-IN")}
              </span>
            </div>

            {/* API Error */}
            {apiError && (
              <div className="flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{apiError}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group mt-1 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.52_0.26_290)] px-6 py-4 text-base font-bold text-white shadow-float transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-18px_oklch(0.55_0.25_280/0.6)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Opening Payment…
                </>
              ) : (
                <>
                  Submit &amp; Pay ₹{selectedCourse.amount.toLocaleString("en-IN")}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" /> Secured by Razorpay
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" /> 7-day money-back guarantee
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
