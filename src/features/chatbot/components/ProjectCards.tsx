import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "../data/knowledgeBase";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Generative AI": {
    bg: "rgba(234,179,8,0.1)",
    text: "#fbbf24",
    border: "rgba(234,179,8,0.2)",
  },
  "Machine Learning": {
    bg: "rgba(168,85,247,0.1)",
    text: "#c084fc",
    border: "rgba(168,85,247,0.2)",
  },
  "AI Agents": {
    bg: "rgba(236,72,153,0.1)",
    text: "#f472b6",
    border: "rgba(236,72,153,0.2)",
  },
  "Computer Vision": {
    bg: "rgba(59,130,246,0.1)",
    text: "#60a5fa",
    border: "rgba(59,130,246,0.2)",
  },
  "LLM Engineering": {
    bg: "rgba(16,185,129,0.1)",
    text: "#34d399",
    border: "rgba(16,185,129,0.2)",
  },
  "Time Series": {
    bg: "rgba(249,115,22,0.1)",
    text: "#fb923c",
    border: "rgba(249,115,22,0.2)",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export function ProjectCards() {
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
          25+ Portfolio Projects
        </p>
        <p className="mt-0.5 text-[11.5px] text-zinc-500">
          Production-grade builds reviewed by mentors — yours to own
        </p>
      </div>

      {/* Project cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="divide-y"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
        role="list"
        aria-label="Featured projects"
      >
        {FEATURED_PROJECTS.map((project) => {
          const cat = CATEGORY_COLORS[project.category] ?? {
            bg: "rgba(139,92,246,0.1)",
            text: "#c4b5fd",
            border: "rgba(139,92,246,0.2)",
          };
          return (
            <motion.article
              key={project.id}
              variants={item}
              role="listitem"
              className="px-4 py-3.5"
            >
              {/* Category + phase */}
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="rounded-md px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide"
                  style={{ background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}
                >
                  {project.category}
                </span>
                <span className="text-[10px] text-zinc-700">Phase {project.phase}</span>
              </div>

              <h3 className="text-[12.5px] font-semibold leading-snug text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-1 text-[11.5px] leading-relaxed text-zinc-500">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-2 flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded px-1.5 py-0.5 text-[9.5px] font-medium text-zinc-500"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <div
                className="mt-2.5 flex items-start gap-1.5 rounded-lg px-3 py-2"
                style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
              >
                <span className="mt-px text-xs" aria-hidden="true">
                  ⚡
                </span>
                <p className="text-[10.5px] leading-snug" style={{ color: cat.text }}>
                  {project.impact}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
