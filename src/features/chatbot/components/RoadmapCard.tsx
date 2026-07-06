import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Phase {
  number: 1 | 2 | 3 | 4 | 5;
  name: string;
  period: string;
  color: string;
  accent: string;
  summary: string;
  topics: string[];
  outcome: string;
}

const PHASES: Phase[] = [
  {
    number: 1,
    name: "Foundations",
    period: "Months 1–4",
    color: "rgba(59,130,246,0.12)",
    accent: "#60a5fa",
    summary: "Python · SQL · Statistics · Data Analysis",
    topics: [
      "Python for Data Science — OOP, file handling, libraries",
      "Data Analysis with Pandas & NumPy",
      "Data Visualisation & Storytelling with Plotly",
      "SQL & Relational Databases — window functions, CTEs",
      "Statistics & Probability — hypothesis testing, A/B tests",
    ],
    outcome: "Junior Data Analyst — ready to solve real business problems",
  },
  {
    number: 2,
    name: "Machine Learning",
    period: "Months 5–9",
    color: "rgba(168,85,247,0.12)",
    accent: "#c084fc",
    summary: "Supervised · Unsupervised · MLOps Basics",
    topics: [
      "ML Fundamentals — gradient descent, bias-variance",
      "Supervised Learning — XGBoost, Random Forest, SVM",
      "Unsupervised Learning — clustering, PCA, anomaly detection",
      "Feature Engineering & Hyperparameter Tuning with Optuna",
      "ML Deployment with FastAPI and Docker",
    ],
    outcome: "ML Engineer — can train, evaluate, and deploy production models",
  },
  {
    number: 3,
    name: "Deep Learning & NLP",
    period: "Months 10–13",
    color: "rgba(236,72,153,0.12)",
    accent: "#f472b6",
    summary: "CNNs · NLP · Transformers · Time Series",
    topics: [
      "Neural Networks & Deep Learning with PyTorch",
      "Computer Vision with CNNs and YOLOv8",
      "NLP — embeddings, sentiment analysis, text classification",
      "Transformers & BERT — fine-tuning on custom datasets",
      "Time Series Forecasting with LSTM and Prophet",
      "Recommender Systems — collaborative filtering",
    ],
    outcome: "Deep Learning Engineer — roles in CV, NLP, and AI product teams",
  },
  {
    number: 4,
    name: "Generative AI & Agents",
    period: "Months 14–16",
    color: "rgba(234,179,8,0.12)",
    accent: "#fbbf24",
    summary: "LLMs · RAG · Fine-Tuning · Agentic AI",
    topics: [
      "Generative AI — GANs, diffusion models, Stable Diffusion",
      "LLM Engineering & Prompt Design — GPT-4o, Gemini",
      "RAG Systems — Pinecone, FAISS, LangChain pipelines",
      "LLM Fine-Tuning — LoRA / QLoRA on Llama 3 & Mistral",
      "AI Agents & Agentic Systems with LangGraph and AutoGen",
      "Vector Databases & Semantic Search at scale",
    ],
    outcome: "LLM / Generative AI Engineer — ₹15–35 LPA, hottest role of 2025",
  },
  {
    number: 5,
    name: "Production & Career",
    period: "Months 17–18",
    color: "rgba(34,197,94,0.12)",
    accent: "#4ade80",
    summary: "MLOps · Cloud · System Design · Placement",
    topics: [
      "MLOps — MLflow, CI/CD, drift detection, retraining pipelines",
      "Cloud AI — AWS SageMaker, GCP Vertex AI, Azure ML",
      "AI System Design — feature stores, FAANG-level interviews",
      "Enterprise AI & AI Product Management",
      "Capstone Project — mentored, deployed, portfolio-ready",
      "Placement Prep — 6 mock interviews, resume, referrals",
    ],
    outcome: "Job-ready for ₹8–35 LPA AI roles in India and globally",
  },
];

export function RoadmapCard() {
  const [openPhase, setOpenPhase] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-4 mb-3 overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      role="list"
      aria-label="18-month learning roadmap"
    >
      <div
        className="px-4 py-3"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-400">
          18-Month Roadmap
        </p>
        <p className="mt-0.5 text-[12px] text-zinc-400">Tap a phase to see what you'll master</p>
      </div>

      {PHASES.map((phase, idx) => (
        <div
          key={phase.number}
          role="listitem"
          style={idx > 0 ? { borderTop: "1px solid rgba(255,255,255,0.05)" } : undefined}
        >
          {/* Phase header button */}
          <button
            onClick={() => setOpenPhase((p) => (p === phase.number ? null : phase.number))}
            aria-expanded={openPhase === phase.number}
            aria-controls={`phase-detail-${phase.number}`}
            className="flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500/40"
            style={openPhase === phase.number ? { background: phase.color } : undefined}
          >
            {/* Phase number badge */}
            <div
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
              style={{
                background: phase.color,
                border: `1.5px solid ${phase.accent}`,
                color: phase.accent,
              }}
              aria-hidden="true"
            >
              {phase.number}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <p className="text-[12.5px] font-semibold text-zinc-200">{phase.name}</p>
                <p className="text-[10.5px] text-zinc-600">{phase.period}</p>
              </div>
              <p className="mt-0.5 truncate text-[11px] text-zinc-500">{phase.summary}</p>
            </div>

            <motion.span
              animate={{ rotate: openPhase === phase.number ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 shrink-0 text-zinc-600"
              aria-hidden="true"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.span>
          </button>

          {/* Expanded detail */}
          <AnimatePresence initial={false}>
            {openPhase === phase.number && (
              <motion.div
                id={`phase-detail-${phase.number}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="overflow-hidden"
                role="region"
              >
                <div
                  className="pb-4 pl-12 pr-4 pt-1"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <ul className="space-y-1.5" aria-label={`Phase ${phase.number} topics`}>
                    {phase.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span
                          className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: phase.accent }}
                          aria-hidden="true"
                        />
                        <span className="text-[11.5px] leading-snug text-zinc-400">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-3 rounded-lg px-3 py-2"
                    style={{ background: phase.color, border: `1px solid ${phase.accent}25` }}
                  >
                    <p className="text-[11px] font-medium" style={{ color: phase.accent }}>
                      🎯 Outcome: {phase.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
}
