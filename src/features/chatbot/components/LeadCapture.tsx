import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface LeadCaptureProps {
  onSubmit: (data: { name: string; phone: string }) => void;
}

export function LeadCapture({ onSubmit }: LeadCaptureProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(phone.trim())) e.phone = "Enter a valid 10-digit mobile number";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    onSubmit({ name: name.trim(), phone: phone.trim() });
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-4 mb-3 flex flex-col items-center gap-2.5 rounded-xl p-5 text-center"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
          }}
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="h-7 w-7 text-green-400" />
          <div>
            <p className="text-[13px] font-semibold text-green-300">Callback requested!</p>
            <p className="mt-0.5 text-[11.5px] text-zinc-500">
              A counselor will call you within 2 hours.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mb-3 space-y-2.5 rounded-xl p-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          aria-label="Request a callback form"
          noValidate
        >
          <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-400">
            Request a Callback
          </p>

          {/* Name */}
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              aria-label="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "lc-name-err" : undefined}
              className="w-full rounded-lg px-3 py-2 text-[13px] text-zinc-200 placeholder-zinc-600 outline-none transition-all duration-150 focus:ring-2 focus:ring-violet-500/50"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.name && (
              <p id="lc-name-err" role="alert" className="mt-1 text-[11px] text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit phone number"
              maxLength={10}
              autoComplete="tel"
              aria-label="Phone number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "lc-phone-err" : undefined}
              inputMode="numeric"
              className="w-full rounded-lg px-3 py-2 text-[13px] text-zinc-200 placeholder-zinc-600 outline-none transition-all duration-150 focus:ring-2 focus:ring-violet-500/50"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            {errors.phone && (
              <p id="lc-phone-err" role="alert" className="mt-1 text-[11px] text-red-400">
                {errors.phone}
              </p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full rounded-lg py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
            }}
          >
            Request Callback
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
