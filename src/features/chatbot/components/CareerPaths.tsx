import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CAREER_PATHS } from "../data/knowledgeBase";

const DEMAND_STYLE = {
  "Very High": { bg: "rgba(34,197,94,0.1)", text: "#4ade80", border: "rgba(34,197,94,0.2)" },
  High: { bg: "rgba(59,130,246,0.1)", text: "#60a5fa", border: "rgba(59,130,246,0.2)" },
  Growing: { bg: "rgba(234,179,8,0.1)", text: "#fbbf24", border: "rgba(234,179,8,0.2)" },
};

export function CareerPaths() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-4 mb-3 overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      role="list"
      aria-label="AI career paths"
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
          AI Career Paths
        </p>
        <p className="mt-0.5 text-[11.5px] text-zinc-500">
          Tap any role to see salary, skills, and companies hiring
        </p>
      </div>

      {CAREER_PATHS.map((path, idx) => {
        const demand = DEMAND_STYLE[path.demand];
        const isOpen = openId === path.id;

        return (
          <div
            key={path.id}
            role="listitem"
            style={idx > 0 ? { borderTop: "1px solid rgba(255,255,255,0.05)" } : undefined}
          >
            <button
              onClick={() => setOpenId((p) => (p === path.id ? null : path.id))}
              aria-expanded={isOpen}
              aria-controls={`career-${path.id}`}
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500/40"
              style={isOpen ? { background: "rgba(139,92,246,0.05)" } : undefined}
            >
              <span className="text-xl" aria-hidden="true">
                {path.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <p className="text-[12.5px] font-semibold text-zinc-200">{path.title}</p>
                  <span
                    className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
                    style={{
                      background: demand.bg,
                      color: demand.text,
                      border: `1px solid ${demand.border}`,
                    }}
                  >
                    {path.demand}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] font-semibold text-violet-400">
                  {path.salaryRange}
                </p>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-zinc-600"
                aria-hidden="true"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`career-${path.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="overflow-hidden"
                  role="region"
                >
                  <div
                    className="px-4 pb-4 pl-[52px] pt-1"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <p className="mb-2.5 text-[12px] leading-relaxed text-zinc-400">
                      {path.description}
                    </p>

                    {/* Key skills */}
                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                      Key skills
                    </p>
                    <div className="mb-3 flex flex-wrap gap-1">
                      {path.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded px-2 py-0.5 text-[10.5px] font-medium text-violet-300"
                          style={{
                            background: "rgba(139,92,246,0.1)",
                            border: "1px solid rgba(139,92,246,0.2)",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Companies */}
                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                      Top companies hiring
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {path.topCompanies.map((co) => (
                        <span
                          key={co}
                          className="rounded px-2 py-0.5 text-[10.5px] text-zinc-400"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
