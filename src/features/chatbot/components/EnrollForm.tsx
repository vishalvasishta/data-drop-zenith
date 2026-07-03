import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import type { EnrollmentData } from '../types';

interface EnrollFormProps {
  onSubmit: (data: EnrollmentData) => void;
}

type Step = 1 | 2 | 3;

const EDUCATION_OPTIONS = ['10th / SSC', '12th / Intermediate', 'Diploma', "Bachelor's Degree", "Master's Degree", 'PhD', 'Other'];
const PROFESSION_OPTIONS = ['Student', 'Fresher (looking for first job)', 'Working Professional', 'Freelancer', 'Business Owner', 'Career Switcher', 'Other'];
const GOAL_OPTIONS = ['Get an AI / ML job', 'Switch to data science', 'Build an AI startup', 'Upskill in current role', 'Freelancing with AI', 'Other'];

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-400">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = 'text', maxLength }: { value: string; onChange: (v: string) => void; placeholder: string; type?: string; maxLength?: number }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 outline-none placeholder:text-gray-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
    />
  );
}

function Select({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string }) {
  return (
    <select
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-gray-900 px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-500/50 transition-all"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

// ── Placeholder payment function — Razorpay NOT integrated yet ─────────────
function initiatePayment(_data: EnrollmentData): void {
  // TODO: Integrate Razorpay here
  console.log('[DATADROP] initiatePayment placeholder called. Integrate Razorpay to proceed.');
}

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
      if (!data.name?.trim()) e.name = 'Required';
      if (!/^[6-9]\d{9}$/.test(data.phone?.trim() ?? '')) e.phone = 'Valid 10-digit number required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email?.trim() ?? '')) e.email = 'Valid email required';
    }
    if (s === 2) {
      if (!data.city?.trim()) e.city = 'Required';
      if (!data.education) e.education = 'Please select';
      if (!data.profession) e.profession = 'Please select';
    }
    if (s === 3) {
      if (!data.careerGoal) e.careerGoal = 'Please select your goal';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    if (step < 3) { setStep((s) => (s + 1) as Step); return; }
    // Final submit
    const final = data as EnrollmentData;
    initiatePayment(final);
    onSubmit(final);
    setDone(true);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-4 mb-2 flex flex-col items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center"
      >
        <CheckCircle className="h-10 w-10 text-green-400" />
        <div>
          <p className="font-semibold text-green-300">Enrollment Submitted!</p>
          <p className="mt-1 text-xs text-gray-400">Check your email for confirmation and next steps.</p>
        </div>
      </motion.div>
    );
  }

  const STEP_LABELS: Record<Step, string> = { 1: 'Personal Info', 2: 'Background', 3: 'Your Goal' };

  return (
    <div className="mx-4 mb-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      {/* Progress */}
      <div className="mb-4 flex items-center gap-1">
        {([1, 2, 3] as Step[]).map((s) => (
          <div key={s} className="flex flex-1 items-center gap-1">
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= s ? 'bg-violet-500' : 'bg-white/10'}`} />
          </div>
        ))}
      </div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400">
        Step {step} of 3 — {STEP_LABELS[step]}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="space-y-3"
        >
          {step === 1 && (
            <>
              <Field label="Full Name *" error={errors.name}>
                <Input value={data.name ?? ''} onChange={set('name')} placeholder="Ravi Kumar" />
              </Field>
              <Field label="Phone Number *" error={errors.phone}>
                <Input value={data.phone ?? ''} onChange={set('phone')} placeholder="9876543210" type="tel" maxLength={10} />
              </Field>
              <Field label="Email Address *" error={errors.email}>
                <Input value={data.email ?? ''} onChange={set('email')} placeholder="ravi@email.com" type="email" />
              </Field>
            </>
          )}
          {step === 2 && (
            <>
              <Field label="City *" error={errors.city}>
                <Input value={data.city ?? ''} onChange={set('city')} placeholder="Hyderabad" />
              </Field>
              <Field label="Highest Education *" error={errors.education}>
                <Select value={data.education ?? ''} onChange={set('education')} options={EDUCATION_OPTIONS} placeholder="Select qualification" />
              </Field>
              <Field label="Current Profession *" error={errors.profession}>
                <Select value={data.profession ?? ''} onChange={set('profession')} options={PROFESSION_OPTIONS} placeholder="Select profession" />
              </Field>
            </>
          )}
          {step === 3 && (
            <Field label="Career Goal *" error={errors.careerGoal}>
              <div className="space-y-2">
                {GOAL_OPTIONS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => set('careerGoal')(g)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-sm text-left transition-all ${
                      data.careerGoal === g
                        ? 'border-violet-500/60 bg-violet-500/20 text-violet-200'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <span className={`h-4 w-4 rounded-full border-2 shrink-0 transition-colors ${data.careerGoal === g ? 'border-violet-400 bg-violet-400' : 'border-gray-500'}`} />
                    {g}
                  </button>
                ))}
              </div>
              {errors.careerGoal && <p className="mt-1 text-xs text-red-400">{errors.careerGoal}</p>}
            </Field>
          )}
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={next}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
      >
        {step < 3 ? 'Continue' : '🎉 Submit Enrollment'}
        {step < 3 && <ChevronRight className="h-4 w-4" />}
      </motion.button>
    </div>
  );
}
