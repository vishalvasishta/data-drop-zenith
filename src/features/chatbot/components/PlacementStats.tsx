import { motion } from "framer-motion";
import { PLACEMENT_STATS, HIRING_COMPANIES, ALUMNI_TESTIMONIALS } from "../data/knowledgeBase";

const STAT_CARDS = [
  { value: PLACEMENT_STATS.placementRate, label: "Placement rate", icon: "✅", color: "#4ade80" },
  { value: PLACEMENT_STATS.averageSalary, label: "Average package", icon: "💰", color: "#fbbf24" },
  { value: PLACEMENT_STATS.highestSalary, label: "Highest offer", icon: "🚀", color: "#c084fc" },
  {
    value: PLACEMENT_STATS.avgTimeToPlacement,
    label: "Avg. time to offer",
    icon: "⏱️",
    color: "#60a5fa",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export function PlacementStats() {
  const testimonial = ALUMNI_TESTIMONIALS[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-4 mb-3 overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Header */}
      <div
        className="px-4 py-3"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-400">
          Placement Results
        </p>
        <p className="mt-0.5 text-[11.5px] text-zinc-500">
          {PLACEMENT_STATS.studentsPlaced} students placed · {PLACEMENT_STATS.companiesHired}{" "}
          companies
        </p>
      </div>

      {/* Stats grid */}
      <motion.div
        className="grid grid-cols-2 gap-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {STAT_CARDS.map((s) => (
          <motion.div
            key={s.label}
            variants={card}
            className="flex flex-col items-center gap-0.5 px-3 py-3.5 text-center"
            style={{ background: "#0f0f15" }}
          >
            <span className="text-base" aria-hidden="true">
              {s.icon}
            </span>
            <span className="text-[14px] font-bold" style={{ color: s.color }}>
              {s.value}
            </span>
            <span className="text-[10px] text-zinc-600">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Hiring companies */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="px-4 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
            Companies that hire our graduates
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 px-4 py-2.5">
          {HIRING_COMPANIES.map((co) => (
            <span
              key={co}
              className="rounded-md px-2 py-1 text-[10.5px] font-medium text-zinc-400"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {co}
            </span>
          ))}
        </div>
      </div>

      {/* Remote stat */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(99,102,241,0.06)",
        }}
      >
        <span className="text-sm" aria-hidden="true">
          🌍
        </span>
        <p className="text-[11px] text-zinc-400">{PLACEMENT_STATS.remoteRoles}</p>
      </div>

      {/* Alumni testimonial */}
      <div
        className="px-4 py-3.5"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.015)",
        }}
        aria-label="Alumni testimonial"
      >
        <blockquote className="relative">
          <p className="text-[11.5px] italic leading-relaxed text-zinc-400">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-2 flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4338ca)" }}
              aria-hidden="true"
            >
              {testimonial.name[0]}
            </div>
            <div>
              <p className="text-[11px] font-semibold text-zinc-300">{testimonial.name}</p>
              <p className="text-[10px] text-zinc-600">
                {testimonial.role} · {testimonial.salary}
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
}
