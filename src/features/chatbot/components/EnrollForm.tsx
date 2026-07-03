import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import type { EnrollmentData } from "../types";

interface EnrollFormProps {
  onSubmit: (data: EnrollmentData) => void;
}

type Step = 1 | 2 | 3;

const EDUCATION_OPTIONS = [
  "10th / SSC",
  "12th / Intermediate",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
];
const PROFESSION_OPTIONS = [
  "Student",
  "Fresher (looking for first job)",
  "Working Professional",
  "Freelancer",
  "Business Owner",
  "Career Switcher",
  "Other",
];
const GOAL_OPTIONS = [
  "Get an AI / ML job",
  "Switch to data science",
  "Build an AI startup",
  "Upskill in current role",
  "Freelancing with AI",
  "Other",
];

const STEP_LABELS: Record<Step, string> = {
  1: "Personal Info",
  2: "Background",
  3: "Your Goal",
};

// ── Placeholder — wire to Razorpay when ready ─────────────────────────────────
function initiatePayment(_data: EnrollmentData): void {
  console.log("[DATADROP] initiatePayment placeholder — integrate Razorpay here.");
}

// ── Shared field wrapper ──────────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
  id,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-[11px] font-medium text-zinc-500">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="mt-1 text-[11px] text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase =
  "w-full rounded-lg px-3 py-2 text-[13px] text-zinc-200 placeholder-zinc-600 outline-none transition-all duration-150 focus:ring-2 focus:ring-violet-500/50";
const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
};

function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  maxLength,
  autoComplete,
  inputMode,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  maxLength?: number;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      autoComplete={autoComplete}
      inputMode={inputMode}
      className={inputBase}
      style={inputStyle}
    />
  );
}

function SelectInput({
  id,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className={inputBase}
      style={{ ...inputStyle, background: "#1a1a22" }}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function EnrollForm({ onSubmit }: EnrollFormProps) {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<Partial<EnrollmentData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof EnrollmentData, string>>>({});
  const [done, setDone] = useState(false);

  const set = (key: keyof EnrollmentData) => (value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const validateStep = (s: Step): boolean => {
    const e: Partial<Record<keyof EnrollmentData, string>> = {};
    if (s === 1) {
      if (!data.name?.trim()) e.name = "Required";
      if (!/^[6-9]\d{9}$/.test(data.phone?.trim() ?? ""))
        e.phone = "Valid 10-digit number required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email?.trim() ?? ""))
        e.email = "Valid email required";
    }
    if (s === 2) {
      if (!data.city?.trim()) e.city = "Required";
      if (!data.education) e.education = "Please select";
      if (!data.profession) e.profession = "Please select";
    }
    if (s === 3) {
      if (!data.careerGoal) e.careerGoal = "Please select your goal";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;
    if (step < 3) {
      setStep((s) => (s + 1) as Step);
      return;
    }
    const final = data as EnrollmentData;
    initiatePayment(final);
    onSubmit(final);
    setDone(true);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-4 mb-3 flex flex-col items-center gap-3 rounded-xl p-6 text-center"
        style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)" }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-8 w-8 text-green-400" />
        <div>
          <p className="text-[13px] font-semibold text-green-300">Enrollment Submitted!</p>
          <p className="mt-0.5 text-[11.5px] text-zinc-500">
            Check your email for confirmation and next steps.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={next}
      noValidate
      aria-label={`Enrollment form step ${step} of 3`}
      className="mx-4 mb-3 rounded-xl p-4"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Progress bar */}
      <div className="mb-4 flex gap-1.5" aria-hidden="true">
        {([1, 2, 3] as Step[]).map((s) => (
          <motion.div
            key={s}
            className="h-0.5 flex-1 rounded-full"
            animate={{
              background: step >= s ? "#8b5cf6" : "rgba(255,255,255,0.08)",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <p className="mb-3.5 text-[10.5px] font-semibold uppercase tracking-widest text-violet-400">
        Step {step} of 3 — {STEP_LABELS[step]}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -14 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="space-y-3"
        >
          {step === 1 && (
            <>
              <Field label="Full Name *" error={errors.name} id="ef-name">
                <TextInput
                  id="ef-name"
                  value={data.name ?? ""}
                  onChange={set("name")}
                  placeholder="Ravi Kumar"
                  autoComplete="name"
                />
              </Field>
              <Field label="Phone *" error={errors.phone} id="ef-phone">
                <TextInput
                  id="ef-phone"
                  value={data.phone ?? ""}
                  onChange={set("phone")}
                  placeholder="9876543210"
                  type="tel"
                  maxLength={10}
                  autoComplete="tel"
                  inputMode="numeric"
                />
              </Field>
              <Field label="Email *" error={errors.email} id="ef-email">
                <TextInput
                  id="ef-email"
                  value={data.email ?? ""}
                  onChange={set("email")}
                  placeholder="ravi@email.com"
                  type="email"
                  autoComplete="email"
                />
              </Field>
            </>
          )}

          {step === 2 && (
            <>
              <Field label="City *" error={errors.city} id="ef-city">
                <TextInput
                  id="ef-city"
                  value={data.city ?? ""}
                  onChange={set("city")}
                  placeholder="Hyderabad"
                  autoComplete="address-level2"
                />
              </Field>
              <Field label="Highest Education *" error={errors.education} id="ef-edu">
                <SelectInput
                  id="ef-edu"
                  value={data.education ?? ""}
                  onChange={set("education")}
                  options={EDUCATION_OPTIONS}
                  placeholder="Select qualification"
                />
              </Field>
              <Field label="Current Profession *" error={errors.profession} id="ef-prof">
                <SelectInput
                  id="ef-prof"
                  value={data.profession ?? ""}
                  onChange={set("profession")}
                  options={PROFESSION_OPTIONS}
                  placeholder="Select profession"
                />
              </Field>
            </>
          )}

          {step === 3 && (
            <fieldset>
              <legend className="mb-2 text-[11px] font-medium text-zinc-500">Career Goal *</legend>
              <div className="space-y-1.5">
                {GOAL_OPTIONS.map((g) => {
                  const active = data.careerGoal === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => set("careerGoal")(g)}
                      aria-pressed={active}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[12.5px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60"
                      style={{
                        background: active ? "rgba(139,92,246,0.16)" : "rgba(255,255,255,0.04)",
                        border: active
                          ? "1px solid rgba(139,92,246,0.45)"
                          : "1px solid rgba(255,255,255,0.07)",
                        color: active ? "#c4b5fd" : "#a1a1aa",
                      }}
                    >
                      <span
                        className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
                        style={{
                          borderColor: active ? "#8b5cf6" : "#52525b",
                          background: active ? "#8b5cf6" : "transparent",
                        }}
                        aria-hidden="true"
                      />
                      {g}
                    </button>
                  );
                })}
              </div>
              {errors.careerGoal && (
                <p role="alert" className="mt-1.5 text-[11px] text-red-400">
                  {errors.careerGoal}
                </p>
              )}
            </fieldset>
          )}
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60"
        style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
      >
        {step < 3 ? (
          <>
            Continue <ChevronRight className="h-3.5 w-3.5" />
          </>
        ) : (
          "🎉 Submit Enrollment"
        )}
      </motion.button>
    </form>
  );
}
