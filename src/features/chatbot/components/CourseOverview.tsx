import { motion } from "framer-motion";
import { COURSE_INFO } from "../data/knowledgeBase";

const STATS = [
  { value: "18", unit: "Months", label: "Program duration" },
  { value: "28", unit: "Modules", label: "Structured curriculum" },
  { value: "25+", unit: "Projects", label: "Portfolio-ready builds" },
  { value: "92%", unit: "Placed", label: "Within 68 days" },
];

const PILLARS = [
  {
    icon: "🎯",
    title: "Project-first learning",
    body: "Every module ends with a real project you own and deploy. Your portfolio grows every week.",
  },
  {
    icon: "🗣️",
    title: "Telugu + English instruction",
    body: "India's first comprehensive AI program taught in your language. No language barrier, ever.",
  },
  {
    icon: "🏆",
    title: "Placement guaranteed support",
    body: "Dedicated counsellor from Month 15, mock interviews, referrals to 150+ hiring partners.",
  },
];

export function CourseOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-4 mb-3 overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(139,92,246,0.2)" }}
    >
      {/* Header */}
      <div
        className="px-4 py-4"
        style={{
          background: "linear-gradient(135deg, rgba(109,40,217,0.3) 0%, rgba(79,70,229,0.2) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-400">
          DATADROP Complete AI Career Program
        </p>
        <p className="mt-1 text-[13px] font-semibold leading-snug text-zinc-100">
          From zero to AI engineer — in 18 months
        </p>
        <div className="mt-1.5 flex flex-wrap gap-2">
          <span
            className="rounded-full px-2 py-0.5 text-[10.5px] font-medium text-violet-300"
            style={{
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            {COURSE_INFO.fee} · One-time
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-[10.5px] font-medium text-zinc-400"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {COURSE_INFO.mode}
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-[10.5px] font-medium text-zinc-400"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {COURSE_INFO.language}
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="grid grid-cols-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className="flex flex-col items-center py-3 text-center"
            style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.06)" } : undefined}
          >
            <span className="text-[15px] font-bold text-violet-300">{s.value}</span>
            <span className="text-[9px] font-semibold text-zinc-400">{s.unit}</span>
          </div>
        ))}
      </div>

      {/* Pillars */}
      <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        {PILLARS.map((p) => (
          <div key={p.title} className="flex items-start gap-3 px-4 py-3">
            <span className="mt-0.5 text-base" aria-hidden="true">
              {p.icon}
            </span>
            <div>
              <p className="text-[12px] font-semibold text-zinc-200">{p.title}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-500">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Next batch */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          background: "rgba(34,197,94,0.06)",
          borderTop: "1px solid rgba(34,197,94,0.12)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
          <p className="text-[11px] text-green-400">
            Next batch: <strong>{COURSE_INFO.nextBatch}</strong>
          </p>
        </div>
        <p className="text-[10px] text-zinc-600">Seats limited to 40</p>
      </div>
    </motion.div>
  );
}
