import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, User, CheckCircle } from "lucide-react";

interface LeadCaptureProps {
  onSubmit: (data: { name: string; phone: string }) => void;
}

export function LeadCapture({ onSubmit }: LeadCaptureProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: { name?: string; phone?: string } = {};
    if (!name.trim()) e.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(phone.trim())) e.phone = "Enter a valid 10-digit Indian mobile number";
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

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-4 mb-2 flex flex-col items-center gap-2 rounded-2xl border border-green-500/30 bg-green-500/10 p-5 text-center"
      >
        <CheckCircle className="h-8 w-8 text-green-400" />
        <p className="text-sm font-semibold text-green-300">
          Got it! A counselor will call you within 2 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-4 mb-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-400">
        Request a Callback
      </p>
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-violet-500/50">
            <User className="h-4 w-4 shrink-0 text-gray-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="flex-1 bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-600"
            />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-violet-500/50">
            <Phone className="h-4 w-4 shrink-0 text-gray-500" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              maxLength={10}
              className="flex-1 bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-600"
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
        >
          Request Callback
        </motion.button>
      </div>
    </form>
  );
}
