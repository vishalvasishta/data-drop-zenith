import { createFileRoute } from "@tanstack/react-router";
import {
  MessagesSquare,
  FileText,
  BarChart3,
  Scan,
  Mic,
  Image,
  ShieldAlert,
  ShieldCheck,
  FolderGit2,
} from "lucide-react";

const projects = [
  {
    title: "ChatGPT Clone",
    description:
      "Build a real-time conversational AI with streaming responses, conversation memory, and custom system prompts.",
    icon: MessagesSquare,
    tags: ["OpenAI API", "React", "Node.js", "WebSocket"],
    hue: "260",
    preview: "chat",
  },
  {
    title: "AI Resume Builder",
    description:
      "Create an intelligent resume generator that tailors content to job descriptions using LLM-powered analysis.",
    icon: FileText,
    tags: ["LangChain", "Next.js", "Tailwind", "OpenAI"],
    hue: "275",
    preview: "resume",
  },
  {
    title: "Recommendation Engine",
    description:
      "Design a collaborative filtering system that predicts user preferences based on behavior and ratings data.",
    icon: BarChart3,
    tags: ["Python", "Scikit-learn", "Pandas", "Redis"],
    hue: "290",
    preview: "recommend",
  },
  {
    title: "Object Detection",
    description:
      "Train a YOLO-based model to identify and localize objects in images and video streams in real time.",
    icon: Scan,
    tags: ["YOLO", "PyTorch", "OpenCV", "CUDA"],
    hue: "240",
    preview: "detect",
  },
  {
    title: "Voice Assistant",
    description:
      "Develop a speech-to-text assistant with wake-word detection, NLP understanding, and voice synthesis.",
    icon: Mic,
    tags: ["Whisper", "PyTorch", "FastAPI", "gTTS"],
    hue: "310",
    preview: "voice",
  },
  {
    title: "Image Generator",
    description:
      "Build a Stable Diffusion pipeline with custom LoRA fine-tuning for generating images from text descriptions.",
    icon: Image,
    tags: ["Stable Diffusion", "PyTorch", "Diffusers", "Gradio"],
    hue: "320",
    preview: "imagegen",
  },
  {
    title: "Fraud Detection",
    description:
      "Implement a real-time anomaly detection system for financial transactions using ensemble ML models.",
    icon: ShieldAlert,
    tags: ["XGBoost", "Python", "Kafka", "PostgreSQL"],
    hue: "220",
    preview: "fraud",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Data Drop" },
      {
        name: "description",
        content:
          "Build 50+ real-world AI projects with Data Drop. From ChatGPT clones to Fraud Detection systems — portfolio pieces that get you hired.",
      },
      { property: "og:title", content: "Projects — Data Drop" },
      {
        property: "og:description",
        content:
          "Build 50+ real-world AI projects with Data Drop. Portfolio pieces that get you hired.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.985_0.003_265)] min-h-screen">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-[520px] w-[520px] rounded-full bg-[oklch(0.92_0.06_265)] blur-[160px] opacity-60" />
        <div className="absolute -right-32 bottom-20 h-[520px] w-[520px] rounded-full bg-[oklch(0.92_0.06_300)] blur-[160px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.9_0.02_270)] bg-[oklch(0.98_0.005_260)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.55_0.18_275)] uppercase">
            <FolderGit2 className="h-3 w-3" />
            Portfolio
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Projects That{" "}
            <span className="text-gradient-brand">Get You Hired.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Build 50+ real-world AI projects. Each one designed to teach
            industry skills and become a portfolio piece recruiters actually
            notice.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group project-card animate-card-rise rounded-3xl"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Preview */}
                <div className="relative h-44 overflow-hidden rounded-t-3xl border-b border-[oklch(0.93_0.01_260/0.7)] bg-gradient-to-br from-[oklch(0.55_0.22_260)] to-[oklch(0.52_0.25_300)] p-4">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-40"
                    style={{ background: `oklch(0.85 0.14 ${p.hue})` }}
                  />
                  <ProjectPreview type={p.preview} hue={p.hue} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.95_0.03_265)] to-[oklch(0.93_0.05_300)] text-[oklch(0.45_0.18_275)] shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-3deg]">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[oklch(0.97_0.005_260)] px-2.5 py-1 text-[11px] font-medium text-muted-foreground ring-1 ring-[oklch(0.93_0.01_260)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ type, hue }: { type: string; hue: string }) {
  switch (type) {
    case "chat":
      return (
        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-1.5">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-[8px] font-semibold text-white/90">AI Chat</span>
          </div>
          <div className="mt-auto space-y-2">
            <div className="ml-auto w-fit max-w-[80%] rounded-lg bg-white/20 px-2 py-1 text-[7px] text-white shadow-sm">
              Explain neural networks
            </div>
            <div className="w-fit max-w-[85%] rounded-lg bg-white/10 px-2 py-1 text-[7px] text-white/80">
              Neural networks are computing systems inspired by biological brains...
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-white/[0.07] px-2 py-1">
              <div className="h-1 w-full rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      );

    case "resume":
      return (
        <div className="relative flex h-full gap-2">
          <div className="w-1/4 space-y-1.5 rounded-lg bg-white/10 p-2">
            <div className="h-6 w-6 rounded-full bg-white/20" />
            <div className="h-1.5 w-full rounded bg-white/15" />
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
          </div>
          <div className="flex-1 space-y-1.5 rounded-lg bg-white/10 p-2">
            <div className="h-2.5 w-3/4 rounded bg-white/20" />
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-5/6 rounded bg-white/10" />
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-4/5 rounded bg-white/10" />
          </div>
        </div>
      );

    case "recommend":
      return (
        <div className="relative flex h-full flex-col">
          <div className="text-[8px] font-semibold text-white/80">Recommended</div>
          <div className="mt-2 space-y-2">
            {[
              { w: "65%", s: "4.8" },
              { w: "80%", s: "4.5" },
              { w: "55%", s: "4.9" },
            ].map((r, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-md bg-white/10 px-2 py-1.5">
                <div className="h-5 w-5 rounded bg-white/20" />
                <div className="flex-1">
                  <div className="h-1.5 rounded bg-white/15" style={{ width: r.w }} />
                </div>
                <span className="text-[7px] font-medium text-white/70">{r.s}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "detect":
      return (
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-x-4 inset-y-2 rounded-lg border border-white/20" />
          <div className="absolute left-4 top-2 h-3 w-3 rounded-tl-md border-l-2 border-t-2 border-white/50" />
          <div className="absolute right-4 top-2 h-3 w-3 rounded-tr-md border-r-2 border-t-2 border-white/50" />
          <div className="absolute bottom-2 left-4 h-3 w-3 rounded-bl-md border-b-2 border-l-2 border-white/50" />
          <div className="absolute bottom-2 right-4 h-3 w-3 rounded-br-md border-b-2 border-r-2 border-white/50" />
          <div className="relative">
            <div className="h-10 w-10 rounded-lg bg-white/20" />
            <div className="absolute -right-8 -top-5 rounded bg-[oklch(0.55_0.22_150)] px-1 py-0.5 text-[7px] font-semibold text-white">
              Car 98%
            </div>
            <div className="absolute -inset-1 rounded-lg border border-[oklch(0.55_0.22_150)]" />
          </div>
        </div>
      );

    case "voice":
      return (
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="relative grid h-12 w-12 place-items-center rounded-full bg-white/15 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            <Mic className="h-5 w-5 text-white" />
            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30" />
          </div>
          <div className="mt-3 flex items-end gap-1">
            {[20, 45, 30, 60, 40, 55, 35, 50, 25].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-white/40"
                style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      );

    case "imagegen":
      return (
        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="text-[7px] text-white/60">a cyberpunk city at night...</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-[oklch(0.7_0.15_260)] to-[oklch(0.6_0.2_300)] opacity-80" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-[oklch(0.75_0.12_220)] to-[oklch(0.65_0.18_280)] opacity-80" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-[oklch(0.65_0.18_320)] to-[oklch(0.55_0.22_280)] opacity-80" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-[oklch(0.7_0.14_200)] to-[oklch(0.6_0.18_260)] opacity-80" />
          </div>
        </div>
      );

    case "fraud":
      return (
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.85_0.12_145)]" />
              <span className="text-[8px] font-semibold text-white/90">SecureGuard</span>
            </div>
            <span className="rounded bg-[oklch(0.55_0.22_150)] px-1.5 py-0.5 text-[7px] font-semibold text-white">
              Live
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { label: "Risk Score", val: "12%", safe: true },
              { label: "Txn #8921", val: "Flagged", safe: false },
              { label: "Txn #8922", val: "Safe", safe: true },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between rounded-md bg-white/10 px-2 py-1.5">
                <span className="text-[7px] text-white/70">{row.label}</span>
                <span className={`text-[7px] font-semibold ${row.safe ? "text-[oklch(0.85_0.12_145)]" : "text-[oklch(0.75_0.18_25)]"}`}>
                  {row.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
