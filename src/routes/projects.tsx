import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  MessagesSquare,
  FileText,
  BarChart3,
  Scan,
  Mic,
  Image as ImageIcon,
  ShieldAlert,
  ShieldCheck,
  FolderGit2,
  Sparkles,
  Clock,
  ArrowRight,
  Stethoscope,
  TrendingUp,
  UserSquare2,
  ScanLine,
  Rocket,
  Download,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";

type Difficulty = "Easy" | "Intermediate" | "Advanced";

const projects: Array<{
  title: string;
  description: string;
  icon: any;
  tags: string[];
  difficulty: Difficulty;
  time: string;
  category: string;
  preview: string;
  industry?: boolean;
  ai?: boolean;
}> = [
  {
    title: "ChatGPT Clone",
    description: "Real-time conversational AI with streaming responses, memory, and custom system prompts.",
    icon: MessagesSquare,
    tags: ["🤖 OpenAI", "⚛ React", "⚡ FastAPI", "🧩 LangChain"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "LLM",
    preview: "chat",
    industry: true,
    ai: true,
  },
  {
    title: "AI Resume Builder",
    description: "Intelligent resume generator that tailors content to job descriptions using LLM analysis.",
    icon: FileText,
    tags: ["🧩 LangChain", "⚛ React", "🎨 Tailwind", "🤖 OpenAI"],
    difficulty: "Easy",
    time: "6 Hours",
    category: "Generative AI",
    preview: "resume",
    ai: true,
  },
  {
    title: "Recommendation Engine",
    description: "Collaborative filtering system predicting user preferences from behavior and rating data.",
    icon: BarChart3,
    tags: ["🐍 Python", "📊 Pandas", "🧠 Scikit", "☁ AWS"],
    difficulty: "Intermediate",
    time: "1 Week",
    category: "Machine Learning",
    preview: "recommend",
    industry: true,
  },
  {
    title: "Object Detection",
    description: "Train a YOLO-based model to identify and localize objects in images and video streams.",
    icon: Scan,
    tags: ["🔥 PyTorch", "🐍 Python", "📷 OpenCV", "⚡ CUDA"],
    difficulty: "Advanced",
    time: "1 Week",
    category: "Computer Vision",
    preview: "detect",
    industry: true,
  },
  {
    title: "Speech Recognition",
    description: "Speech-to-text assistant with wake-word detection, NLP understanding and voice synthesis.",
    icon: Mic,
    tags: ["🐍 Python", "🔥 PyTorch", "⚡ FastAPI", "🎙 Whisper"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "Deep Learning",
    preview: "voice",
  },
  {
    title: "Image Generator",
    description: "Stable Diffusion pipeline with LoRA fine-tuning to generate images from text prompts.",
    icon: ImageIcon,
    tags: ["🧠 Diffusers", "🔥 PyTorch", "🎨 Gradio", "🤖 SDXL"],
    difficulty: "Advanced",
    time: "1 Week",
    category: "Generative AI",
    preview: "imagegen",
    ai: true,
  },
  {
    title: "Medical Diagnosis",
    description: "Disease prediction dashboard combining patient signals with explainable ML models.",
    icon: Stethoscope,
    tags: ["🐍 Python", "🧠 Sklearn", "📊 Pandas", "⚡ FastAPI"],
    difficulty: "Advanced",
    time: "1 Week",
    category: "Data Science",
    preview: "medical",
    industry: true,
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM-driven time series model forecasting prices with backtesting and live chart updates.",
    icon: TrendingUp,
    tags: ["🧠 TensorFlow", "📊 Pandas", "🐍 Python", "📈 Plotly"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "Deep Learning",
    preview: "stock",
  },
  {
    title: "Fraud Detection",
    description: "Real-time anomaly detection on financial transactions using ensemble ML and graph signals.",
    icon: ShieldAlert,
    tags: ["🐍 Python", "🌲 XGBoost", "🔗 Kafka", "🗄 Postgres"],
    difficulty: "Advanced",
    time: "1 Week",
    category: "Machine Learning",
    preview: "fraud",
    industry: true,
  },
  {
    title: "Face Recognition",
    description: "Build a face authentication pipeline with embeddings, liveness detection, and admin panel.",
    icon: UserSquare2,
    tags: ["📷 OpenCV", "🔥 PyTorch", "⚛ React", "⚡ FastAPI"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "Computer Vision",
    preview: "face",
  },
  {
    title: "Document OCR",
    description: "Scan and extract structured data from invoices, IDs and forms with layout-aware OCR.",
    icon: ScanLine,
    tags: ["🐍 Python", "📷 OpenCV", "🔍 Tesseract", "⚡ FastAPI"],
    difficulty: "Easy",
    time: "6 Hours",
    category: "NLP",
    preview: "ocr",
  },
  {
    title: "AI Voice Assistant",
    description: "Deploy an end-to-end voice agent: STT → LLM → TTS with streaming and tool calling.",
    icon: Sparkles,
    tags: ["🤖 OpenAI", "🧩 LangChain", "⚡ FastAPI", "☁ AWS"],
    difficulty: "Advanced",
    time: "1 Week",
    category: "Deployment",
    preview: "imagegen",
    ai: true,
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Hands-on Projects" },
  { value: 15, suffix: "+", label: "Capstone Projects" },
  { value: 25, suffix: "+", label: "Industry Case Studies" },
  { value: 100, suffix: "+", label: "Coding Challenges" },
];

const diffColor: Record<Difficulty, string> = {
  Easy: "bg-emerald-500/15 text-emerald-700 ring-emerald-500/30",
  Intermediate: "bg-amber-500/15 text-amber-700 ring-amber-500/30",
  Advanced: "bg-rose-500/15 text-rose-700 ring-rose-500/30",
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Data Drop" },
      {
        name: "description",
        content:
          "Build 50+ real-world AI portfolio projects with Data Drop — LLMs, Computer Vision, Generative AI and more.",
      },
      { property: "og:title", content: "AI Portfolio Projects — Data Drop" },
      {
        property: "og:description",
        content:
          "Build portfolio projects that get you hired. 50+ industry-grade AI builds across LLMs, CV and GenAI.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.985_0.003_265)] min-h-screen">
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-40 top-10 h-[560px] w-[560px] rounded-full bg-[oklch(0.78_0.18_260)] opacity-30 blur-[140px] animate-blob" />
        <div className="absolute -right-40 top-80 h-[600px] w-[600px] rounded-full bg-[oklch(0.72_0.22_300)] opacity-30 blur-[160px] animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute left-1/3 bottom-0 h-[500px] w-[500px] rounded-full bg-[oklch(0.75_0.2_220)] opacity-25 blur-[140px] animate-blob" style={{ animationDelay: "-12s" }} />
      </div>

      <Particles />

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        <Header />

        {/* grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <Stats />

        <BottomCTA />
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="mx-auto max-w-3xl text-center animate-card-rise">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.88_0.04_270)] bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.45_0.18_275)] uppercase backdrop-blur">
        <FolderGit2 className="h-3 w-3" />
        AI Portfolio
      </span>
      <h1 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
        Build Portfolio Projects That{" "}
        <span className="text-gradient-brand">Get You Hired.</span>
      </h1>
      <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
        Learn by building real-world AI applications used in industry. Every
        project is designed to strengthen your portfolio and prepare you for
        interviews.
      </p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const Icon = project.icon;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translateY(-8px) scale(1.03) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="project-card-pro group animate-card-rise flex h-full flex-col"
      style={{ animationDelay: `${index * 0.07}s`, transformStyle: "preserve-3d", transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease, border-color 0.4s ease" }}
    >
      {/* preview */}
      <div className="relative h-44 overflow-hidden rounded-t-[24px] border-b border-white/40 bg-gradient-to-br from-[oklch(0.48_0.22_260)] via-[oklch(0.45_0.25_285)] to-[oklch(0.5_0.24_315)] p-4">
        <div className="pp-preview h-full w-full transition-transform duration-700">
          <Preview type={project.preview} />
        </div>

        {/* difficulty badge */}
        <span className={`absolute right-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 backdrop-blur ${diffColor[project.difficulty]}`}>
          {project.difficulty}
        </span>

        {/* ribbons */}
        {project.industry && (
          <span className="absolute left-0 top-4 z-10 rounded-r-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md">
            Industry Project
          </span>
        )}
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-lg font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              {project.ai && (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-violet-500/15 to-blue-500/15 px-2 py-0.5 text-[9px] font-semibold text-violet-700 ring-1 ring-violet-500/30">
                  <Sparkles className="h-2.5 w-2.5" />
                  Built with AI
                </span>
              )}
            </div>
            <span className="mt-1 inline-block text-[11px] font-medium uppercase tracking-wider text-[oklch(0.55_0.18_275)]">
              {project.category}
            </span>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.94_0.04_265)] to-[oklch(0.92_0.06_300)] text-[oklch(0.45_0.18_275)] shadow-soft">
            <Icon className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {project.time}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="pp-chip chip-gradient rounded-lg px-2 py-1 text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-2">
          <Link
            to="/curriculum"
            className="pp-cta inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[oklch(0.5_0.22_260)] to-[oklch(0.52_0.25_295)] px-4 py-2.5 text-sm font-semibold text-white opacity-0 translate-y-1 shadow-glass transition-all duration-300 hover:shadow-float"
          >
            View Curriculum
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------- Previews ---------- */
function Preview({ type }: { type: string }) {
  switch (type) {
    case "chat":
      return (
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-1.5 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <span className="text-[8px] font-semibold text-white/90">AI Assistant</span>
          </div>
          <div className="mt-auto space-y-1.5">
            <div className="ml-auto w-fit max-w-[80%] rounded-lg bg-white/25 px-2 py-1 text-[7px] text-white shadow-sm">
              Explain transformers
            </div>
            <div className="w-fit max-w-[85%] rounded-lg bg-white/10 px-2 py-1 text-[7px] text-white/90">
              Transformers use self-attention to model token relationships...
            </div>
            <div className="flex w-fit items-center gap-0.5 rounded-lg bg-white/10 px-2 py-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-1 w-1 rounded-full bg-white/80 animate-typing-dot" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        </div>
      );
    case "resume":
      return (
        <div className="flex h-full gap-2">
          <div className="w-1/4 space-y-1.5 rounded-lg bg-white/15 p-2 backdrop-blur">
            <div className="h-6 w-6 rounded-full bg-white/30" />
            <div className="h-1 w-full rounded bg-white/20" />
            <div className="h-1 w-2/3 rounded bg-white/15" />
          </div>
          <div className="relative flex-1 space-y-1.5 overflow-hidden rounded-lg bg-white/15 p-2">
            <div className="h-2 w-3/4 rounded bg-white/30" />
            <div className="h-1 w-full rounded bg-white/15" />
            <div className="h-1 w-5/6 rounded bg-emerald-300/60" />
            <div className="h-1 w-full rounded bg-white/15" />
            <div className="h-1 w-4/5 rounded bg-emerald-300/60" />
            <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-emerald-300/30 to-transparent animate-scan" />
          </div>
        </div>
      );
    case "recommend":
      return (
        <div className="flex h-full flex-col">
          <div className="text-[8px] font-semibold text-white/80">For You</div>
          <div className="mt-2 space-y-1.5">
            {[{ w: "65%", s: "4.8" }, { w: "80%", s: "4.5" }, { w: "55%", s: "4.9" }].map((r, i) => (
              <div key={i} className="flex items-center gap-2 rounded-md bg-white/10 px-2 py-1.5">
                <div className="h-4 w-4 rounded bg-white/25" />
                <div className="flex-1">
                  <div className="h-1 rounded bg-white/30" style={{ width: r.w }} />
                </div>
                <span className="text-[7px] font-semibold text-amber-200">★ {r.s}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "detect":
      return (
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-x-4 inset-y-2 rounded-lg border border-white/15" />
          <div className="relative">
            <div className="h-12 w-16 rounded-md bg-white/20" />
            <div className="absolute -inset-1 rounded-md border-2 border-emerald-300" />
            <div className="absolute -right-2 -top-4 rounded bg-emerald-400 px-1 py-0.5 text-[7px] font-bold text-emerald-950">Car 98%</div>
          </div>
          <div className="absolute right-6 bottom-4">
            <div className="h-6 w-6 rounded bg-white/20" />
            <div className="absolute -inset-0.5 rounded border-2 border-sky-300" />
            <div className="absolute -bottom-3 -right-1 rounded bg-sky-300 px-1 text-[6px] font-bold text-sky-950">Sign 92%</div>
          </div>
        </div>
      );
    case "voice":
      return (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="relative grid h-10 w-10 place-items-center rounded-full bg-white/20">
            <Mic className="h-4 w-4 text-white" />
            <span className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
          </div>
          <div className="mt-3 flex h-8 items-center gap-0.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="block w-0.5 origin-center rounded-full bg-white/70 animate-wave-bar"
                style={{ height: `${20 + (i % 5) * 6}px`, animationDelay: `${i * 0.07}s` }}
              />
            ))}
          </div>
        </div>
      );
    case "imagegen":
      return (
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1.5">
            <Sparkles className="h-2.5 w-2.5 text-white/70" />
            <span className="text-[7px] text-white/70">cyberpunk city, neon rain...</span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {[260, 220, 320, 290].map((h, i) => (
              <div
                key={i}
                className="aspect-square rounded-md opacity-90"
                style={{ background: `linear-gradient(135deg, oklch(0.7 0.18 ${h}), oklch(0.55 0.24 ${h + 30}))` }}
              />
            ))}
          </div>
        </div>
      );
    case "medical":
      return (
        <div className="flex h-full flex-col gap-2">
          <div className="flex items-center justify-between rounded-md bg-white/10 px-2 py-1.5">
            <span className="text-[8px] font-semibold text-white/90">Diagnosis</span>
            <span className="rounded bg-emerald-400 px-1 text-[7px] font-bold text-emerald-950">Healthy</span>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-1.5">
            {[60, 80, 45].map((v, i) => (
              <div key={i} className="flex flex-col justify-end rounded bg-white/10 p-1">
                <div className="rounded bg-gradient-to-t from-sky-300 to-violet-300" style={{ height: `${v}%` }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "stock":
      return (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between text-[8px] text-white/80">
            <span className="font-semibold">AAPL</span>
            <span className="text-emerald-300">▲ +2.4%</span>
          </div>
          <svg viewBox="0 0 200 80" className="mt-2 flex-1">
            <defs>
              <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.18 145)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.85 0.18 145)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,60 L25,50 L50,55 L75,40 L100,45 L125,30 L150,35 L175,20 L200,15 L200,80 L0,80 Z" fill="url(#sg)" />
            <path d="M0,60 L25,50 L50,55 L75,40 L100,45 L125,30 L150,35 L175,20 L200,15" stroke="oklch(0.85 0.18 145)" strokeWidth="1.5" fill="none" className="animate-stock-draw" />
          </svg>
        </div>
      );
    case "fraud":
      return (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-emerald-300" />
              <span className="text-[8px] font-semibold text-white/90">SecureGuard</span>
            </div>
            <span className="rounded bg-emerald-400 px-1 text-[7px] font-bold text-emerald-950">LIVE</span>
          </div>
          <svg viewBox="0 0 200 80" className="mt-1 flex-1">
            {[[40,30],[100,20],[160,35],[60,60],[120,55],[170,65]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r="4" fill="white" opacity="0.7" />
            ))}
            <g stroke="white" strokeWidth="0.5" opacity="0.4">
              <line x1="40" y1="30" x2="100" y2="20" />
              <line x1="100" y1="20" x2="160" y2="35" />
              <line x1="40" y1="30" x2="60" y2="60" />
              <line x1="100" y1="20" x2="120" y2="55" />
              <line x1="160" y1="35" x2="170" y2="65" />
              <line x1="60" y1="60" x2="120" y2="55" />
            </g>
            <circle cx="120" cy="55" r="6" fill="oklch(0.7 0.22 25)" />
          </svg>
        </div>
      );
    case "face":
      return (
        <div className="relative flex h-full items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15">
            <UserSquare2 className="h-7 w-7 text-white/80" />
          </div>
          <div className="absolute inset-x-6 inset-y-3 rounded-xl border border-emerald-300/70" />
          <span className="absolute bottom-2 right-3 rounded bg-emerald-400 px-1 text-[7px] font-bold text-emerald-950">Match 99%</span>
        </div>
      );
    case "ocr":
      return (
        <div className="relative flex h-full flex-col gap-1 overflow-hidden rounded-md bg-white/15 p-2">
          <div className="h-1.5 w-1/2 rounded bg-white/40" />
          <div className="h-1 w-full rounded bg-white/20" />
          <div className="h-1 w-5/6 rounded bg-white/20" />
          <div className="h-1 w-2/3 rounded bg-white/20" />
          <div className="h-1 w-full rounded bg-white/20" />
          <div className="absolute inset-x-0 top-0 h-0.5 bg-emerald-300 shadow-[0_0_10px_2px_oklch(0.85_0.18_145)] animate-scan" />
        </div>
      );
    default:
      return null;
  }
}

/* ---------- Particles ---------- */
function Particles() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-[oklch(0.7_0.2_280)]/40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animation: `particle-float ${10 + (i % 6)}s linear infinite`,
            animationDelay: `${(i % 8) * -1.5}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  return (
    <div className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {stats.map((s, i) => (
        <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
      ))}
    </div>
  );
}

function Counter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !seen) {
          setSeen(true);
          const dur = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, seen]);

  return (
    <div
      ref={ref}
      className="trust-card animate-counter rounded-3xl p-6 text-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl font-bold tracking-tight">
        <span className="text-gradient-brand">{n}{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------- Bottom CTA ---------- */
function BottomCTA() {
  return (
    <div className="cta-glow-card mt-24 px-6 py-14 text-center sm:px-12 sm:py-16">
      {/* floating icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Cpu className="absolute left-[8%] top-[20%] h-6 w-6 text-white/30 animate-float-slow" />
        <Layers className="absolute right-[10%] top-[30%] h-7 w-7 text-white/30 animate-float-slower" />
        <Zap className="absolute left-[15%] bottom-[15%] h-5 w-5 text-white/30 animate-float-slower" />
        <Sparkles className="absolute right-[12%] bottom-[18%] h-6 w-6 text-white/30 animate-float-slow" />
      </div>
      <div className="relative mx-auto max-w-2xl">
        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Build an AI Portfolio Recruiters Can't Ignore?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-white/80">
          Start building real-world projects from Day 1 and graduate with a
          portfolio that stands out.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/curriculum"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.4_0.22_280)] shadow-float transition hover:scale-[1.03]"
          >
            <Rocket className="h-4 w-4" />
            View Complete Curriculum
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
            <Download className="h-4 w-4" />
            Download Syllabus
          </button>
        </div>
      </div>
    </div>
  );
}
