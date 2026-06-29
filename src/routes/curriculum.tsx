import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Database,
  Brain,
  Cpu,
  Sparkles,
  CircuitBoard,
  Rocket,
  CalendarDays,
} from "lucide-react";

const roadmap = [
  {
    months: "Month 1–2",
    title: "Programming Foundations",
    skills: ["Python", "Logic Building", "Data Structures Basics"],
    icon: Code2,
    hue: "260",
  },
  {
    months: "Month 3–4",
    title: "Data Analytics",
    skills: ["SQL", "Pandas", "NumPy", "Data Visualization"],
    icon: Database,
    hue: "240",
  },
  {
    months: "Month 5–7",
    title: "Machine Learning",
    skills: ["Regression", "Classification", "Clustering", "Model Evaluation"],
    icon: Brain,
    hue: "280",
  },
  {
    months: "Month 8–10",
    title: "Deep Learning",
    skills: ["Neural Networks", "CNN", "RNN", "TensorFlow", "PyTorch"],
    icon: Cpu,
    hue: "300",
  },
  {
    months: "Month 11–13",
    title: "Generative AI",
    skills: ["LLMs", "Prompt Engineering", "LangChain", "RAG", "AI Chatbots"],
    icon: Sparkles,
    hue: "320",
  },
  {
    months: "Month 14–16",
    title: "AI Engineering",
    skills: ["Vector Databases", "AI Agents", "APIs", "Deployment", "Cloud AI"],
    icon: CircuitBoard,
    hue: "265",
  },
  {
    months: "Month 17–18",
    title: "Future of AI",
    skills: ["Agentic AI", "Multi-Agent Systems", "AI Automation", "Advanced Industry Use Cases"],
    icon: Rocket,
    hue: "150",
  },
];

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Data Drop" },
      {
        name: "description",
        content:
          "Explore the 18-month Data Drop AI Career curriculum. From Python fundamentals to Agentic AI — a step-by-step roadmap to becoming a job-ready AI engineer.",
      },
      { property: "og:title", content: "Curriculum — Data Drop" },
      {
        property: "og:description",
        content:
          "Explore the 18-month Data Drop AI Career curriculum. From Python fundamentals to Agentic AI.",
      },
    ],
  }),
  component: CurriculumPage,
});

function CurriculumPage() {
  return (
    <section className="relative bg-white min-h-screen">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[oklch(0.92_0.06_265)] blur-[160px] opacity-60" />
        <div className="absolute left-1/2 bottom-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[oklch(0.92_0.06_300)] blur-[160px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.9_0.02_270)] bg-[oklch(0.98_0.005_260)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.55_0.18_275)] uppercase">
            <CalendarDays className="h-3 w-3" />
            18-Month Curriculum
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Your Path to{" "}
            <span className="text-gradient-brand">AI Engineer.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            A carefully crafted, step-by-step roadmap that takes you from absolute
            beginner to job-ready AI professional.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical gradient line — centered on lg, left on mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.85_0.05_260)] via-[oklch(0.75_0.15_280)] to-[oklch(0.85_0.05_300)] lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-10 lg:space-y-14">
            {roadmap.map((m, i) => {
              const isEven = i % 2 === 0;
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className={`animate-card-rise relative flex items-start gap-6 lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Numbered node on the line */}
                  <div className="absolute left-6 top-0 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-[oklch(0.55_0.22_260)] to-[oklch(0.55_0.26_300)] text-sm font-bold text-white shadow-[0_8px_24px_-6px_oklch(0.55_0.22_275/0.5)] lg:left-1/2">
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 w-full lg:ml-0 lg:w-[calc(50%-3rem)] ${
                      isEven ? "lg:pr-14" : "lg:pl-14"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-3xl border border-[oklch(0.92_0.01_260)] bg-gradient-to-b from-[oklch(1_0_0/0.9)] to-[oklch(0.98_0.005_260/0.85)] p-6 shadow-soft backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_oklch(0.55_0.22_265/0.18)] sm:p-7">
                      {/* subtle inner glow */}
                      <div
                        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-30"
                        style={{ background: `oklch(0.85 0.14 ${m.hue})` }}
                      />

                      <div className="relative flex items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.95_0.03_265)] to-[oklch(0.93_0.05_300)] text-[oklch(0.45_0.18_275)] shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-2deg]">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[oklch(0.96_0.03_265)] to-[oklch(0.95_0.04_295)] px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[oklch(0.5_0.18_275)] uppercase">
                            {m.months}
                          </span>
                          <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                            {m.title}
                          </h3>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {m.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-lg bg-[oklch(0.97_0.005_260)] px-2.5 py-1 text-[11px] font-medium text-muted-foreground ring-1 ring-[oklch(0.93_0.01_260)]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for the opposite side on desktop */}
                  <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
