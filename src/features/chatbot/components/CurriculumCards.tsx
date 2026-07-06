import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CURRICULUM } from "../data/knowledgeBase";

const PHASE_META: Record<
  number,
  { label: string; color: string; text: string; border: string; months: string }
> = {
  1: {
    label: "Phase 1",
    color: "rgba(59,130,246,0.1)",
    text: "#60a5fa",
    border: "rgba(59,130,246,0.25)",
    months: "Months 1–4",
  },
  2: {
    label: "Phase 2",
    color: "rgba(168,85,247,0.1)",
    text: "#c084fc",
    border: "rgba(168,85,247,0.25)",
    months: "Months 5–9",
  },
  3: {
    label: "Phase 3",
    color: "rgba(236,72,153,0.1)",
    text: "#f472b6",
    border: "rgba(236,72,153,0.25)",
    months: "Months 10–13",
  },
  4: {
    label: "Phase 4",
    color: "rgba(234,179,8,0.1)",
    text: "#fbbf24",
    border: "rgba(234,179,8,0.25)",
    months: "Months 14–16",
  },
  5: {
    label: "Phase 5",
    color: "rgba(34,197,94,0.1)",
    text: "#4ade80",
    border: "rgba(34,197,94,0.25)",
    months: "Months 17–18",
  },
};

const PHASE_NAMES: Record<number, string> = {
  1: "Foundations",
  2: "Machine Learning",
  3: "Deep Learning & NLP",
  4: "Generative AI & Agents",
  5: "Production & Career",
};

export function CurriculumCards() {
  const [activePhase, setActivePhase] = useState<number>(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const phases = [1, 2, 3, 4, 5] as const;
  const filtered = CURRICULUM.filter((m) => m.phase === activePhase);
  const meta = PHASE_META[activePhase];

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
          Curriculum — 28 Modules
        </p>
        <p className="mt-0.5 text-[11.5px] text-zinc-500">Select a phase to explore its modules</p>
      </div>

      {/* Phase tabs */}
      <div
        className="flex gap-1 overflow-x-auto px-3 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        role="tablist"
        aria-label="Curriculum phases"
      >
        {phases.map((p) => {
          const m = PHASE_META[p];
          const isActive = activePhase === p;
          return (
            <button
              key={p}
              role="tab"
              aria-selected={isActive}
              aria-controls={`phase-panel-${p}`}
              onClick={() => {
                setActivePhase(p);
                setExpandedId(null);
              }}
              className="shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
              style={{
                background: isActive ? m.color : "transparent",
                border: `1px solid ${isActive ? m.border : "rgba(255,255,255,0.06)"}`,
                color: isActive ? m.text : "#71717a",
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Phase title strip */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ background: meta.color, borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-[12px] font-semibold" style={{ color: meta.text }}>
          {PHASE_NAMES[activePhase]}
        </p>
        <p className="text-[10.5px] text-zinc-500">{meta.months}</p>
      </div>

      {/* Module list */}
      <div
        id={`phase-panel-${activePhase}`}
        role="tabpanel"
        aria-label={`Phase ${activePhase} modules`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.15 }}
          >
            {filtered.map((module, idx) => (
              <div
                key={module.id}
                style={idx > 0 ? { borderTop: "1px solid rgba(255,255,255,0.05)" } : undefined}
              >
                <button
                  onClick={() => setExpandedId((prev) => (prev === module.id ? null : module.id))}
                  aria-expanded={expandedId === module.id}
                  aria-controls={`mod-${module.id}`}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500/40"
                >
                  {/* Index */}
                  <span
                    className="mt-0.5 shrink-0 text-[10px] font-bold tabular-nums"
                    style={{ color: meta.text, minWidth: 18 }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] font-semibold leading-snug text-zinc-200">
                      {module.title}
                    </p>
                    <p className="mt-0.5 text-[10.5px] text-zinc-600">{module.estimatedDuration}</p>
                  </div>
                  {/* Skills chips */}
                  <div className="hidden shrink-0 items-center gap-1 sm:flex">
                    {module.skills.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="rounded px-1.5 py-0.5 text-[9.5px] font-medium"
                        style={{ background: "rgba(255,255,255,0.05)", color: "#71717a" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedId === module.id && (
                    <motion.div
                      id={`mod-${module.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                      role="region"
                    >
                      <div
                        className="px-4 pb-4 pl-10 pt-1"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                      >
                        <p className="mb-2 text-[12px] leading-relaxed text-zinc-400">
                          {module.description}
                        </p>

                        <div className="mb-2 flex flex-wrap gap-1">
                          {module.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded px-2 py-0.5 text-[10px] font-medium"
                              style={{
                                background: meta.color,
                                border: `1px solid ${meta.border}`,
                                color: meta.text,
                              }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <div
                          className="mt-2 rounded-lg px-3 py-2.5"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.07)",
                          }}
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                            Project
                          </p>
                          <p className="mt-0.5 text-[11.5px] text-zinc-300">{module.project}</p>
                          <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                            Career Outcome
                          </p>
                          <p className="mt-0.5 text-[11px] text-zinc-400">{module.careerOutcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
