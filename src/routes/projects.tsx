import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { MessagesSquare, FileText, ChartBar as BarChart3, Scan, Mic, Image as ImageIcon, ShieldAlert, ShieldCheck, FolderGit2, Sparkles, Clock, ArrowRight, Stethoscope, TrendingUp, SquareUser as UserSquare2, ScanLine, Rocket, Download, Cpu, Layers, Zap, Search, LayoutGrid, Star } from "lucide-react";

type Difficulty = "Easy" | "Intermediate" | "Advanced";

type Project = {
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
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "ChatGPT Clone",
    description: "Real-time conversational AI with streaming responses, memory, and custom system prompts.",
    icon: MessagesSquare,
    tags: ["OpenAI", "React", "FastAPI", "LangChain"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "LLM",
    preview: "chat",
    industry: true,
    ai: true,
    featured: true,
  },
  {
    title: "AI Resume Builder",
    description: "Intelligent resume generator that tailors content to job descriptions using LLM analysis.",
    icon: FileText,
    tags: ["LangChain", "React", "Tailwind", "OpenAI"],
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
    tags: ["Python", "Pandas", "Scikit", "AWS"],
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
    tags: ["PyTorch", "Python", "OpenCV", "CUDA"],
    difficulty: "Advanced",
    time: "1 Week",
    category: "Computer Vision",
    preview: "detect",
    industry: true,
    featured: true,
  },
  {
    title: "Speech Recognition",
    description: "Speech-to-text assistant with wake-word detection, NLP understanding and voice synthesis.",
    icon: Mic,
    tags: ["Python", "PyTorch", "FastAPI", "Whisper"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "Deep Learning",
    preview: "voice",
  },
  {
    title: "Image Generator",
    description: "Stable Diffusion pipeline with LoRA fine-tuning to generate images from text prompts.",
    icon: ImageIcon,
    tags: ["Diffusers", "PyTorch", "Gradio", "SDXL"],
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
    tags: ["Python", "Sklearn", "Pandas", "FastAPI"],
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
    tags: ["TensorFlow", "Pandas", "Python", "Plotly"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "Deep Learning",
    preview: "stock",
  },
  {
    title: "Fraud Detection",
    description: "Real-time anomaly detection on financial transactions using ensemble ML and graph signals.",
    icon: ShieldAlert,
    tags: ["Python", "XGBoost", "Kafka", "Postgres"],
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
    tags: ["OpenCV", "PyTorch", "React", "FastAPI"],
    difficulty: "Intermediate",
    time: "2 Days",
    category: "Computer Vision",
    preview: "face",
  },
  {
    title: "Document OCR",
    description: "Scan and extract structured data from invoices, IDs and forms with layout-aware OCR.",
    icon: ScanLine,
    tags: ["Python", "OpenCV", "Tesseract", "FastAPI"],
    difficulty: "Easy",
    time: "6 Hours",
    category: "NLP",
    preview: "ocr",
  },
  {
    title: "AI Voice Assistant",
    description: "Deploy an end-to-end voice agent: STT → LLM → TTS with streaming and tool calling.",
    icon: Sparkles,
    tags: ["OpenAI", "LangChain", "FastAPI", "AWS"],
    difficulty: "Advanced",
    time: "1 Week",
    category: "Deployment",
    preview: "imagegen",
    ai: true,
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
] as string[];

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

const diffDot: Record<Difficulty, string> = {
  Easy: "bg-emerald-500",
  Intermediate: "bg-amber-500",
  Advanced: "bg-rose-500",
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
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const featured = useMemo(() => projects.find((p) => p.featured)!, []);
  const rest = useMemo(() => projects.filter((p) => !p.featured), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter((p) => {
      const inCat = active === "All" || p.category === active;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inCat && inQuery;
    });
  }, [rest, active, query]);

  const showFeatured = active === "All" && !query.trim();

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

        {showFeatured && <FeaturedSpotlight project={featured} />}

        <Toolbar
          categories={categories}
          active={active}
          setActive={setActive}
          query={query}
          setQuery={setQuery}
          count={filtered.length + (showFeatured ? 1 : 0)}
        />

        {/* grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState onReset={() => { setActive("All"); setQuery(""); }} />
        )}

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

function FeaturedSpotlight({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className="mt-16 animate-card-rise">
      <div className="mb-5 flex items-center gap-2">
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.45_0.18_275)]">
          Featured Project
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-[oklch(0.85_0.04_270)] to-transparent" />
      </div>

      <div className="spotlight-card group relative overflow-hidden rounded-[28px]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          {/* Preview panel */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[oklch(0.42_0.22_260)] via-[oklch(0.4_0.25_285)] to-[oklch(0.45_0.24_315)] p-6 lg:h-auto">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[oklch(0.7_0.2_300)] opacity-40 blur-3xl" />
            <div className="pp-preview relative h-full w-full transition-transform duration-700">
              <Preview type={project.preview} />
            </div>
            <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
              <Sparkles className="h-3 w-3" />
              Capstone
            </span>
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.94_0.04_265)] to-[oklch(0.92_0.06_300)] text-[oklch(0.45_0.18_275)] shadow-soft">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-[oklch(0.55_0.18_275)]">
                  {project.category}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h2>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${diffColor[project.difficulty]}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${diffDot[project.difficulty]}`} />
                {project.difficulty}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.96_0.01_260)] px-2.5 py-1 text-[11px] font-medium text-muted-foreground ring-1 ring-[oklch(0.92_0.01_260)]">
                <Clock className="h-3 w-3" />
                {project.time}
              </span>
              {project.industry && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-500/30">
                  Industry
                </span>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="chip-gradient rounded-lg px-2 py-1 text-[11px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              to="/curriculum"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.5_0.22_260)] to-[oklch(0.52_0.25_295)] px-5 py-2.5 text-sm font-semibold text-white shadow-glass transition-all hover:-translate-y-0.5 hover:shadow-float"
            >
              Explore Build
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toolbar({
  categories,
  active,
  setActive,
  query,
  setQuery,
  count,
}: {
  categories: string[];
  active: string;
  setActive: (c: string) => void;
  query: string;
  setQuery: (q: string) => void;
  count: number;
}) {
  return (
    <div className="mt-16 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 " +
                (isActive
                  ? "text-white shadow-glass"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[oklch(0.5_0.22_260)] to-[oklch(0.52_0.25_295)] transition-all" />
              )}
              <span className="relative flex items-center gap-1.5">
                {cat === "All" && <LayoutGrid className="h-3.5 w-3.5" />}
                {cat}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative w-full lg:w-72">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, tags..."
          className="w-full rounded-full border border-[oklch(0.9_0.01_260)] bg-white/70 py-2.5 pl-10 pr-4 text-sm text-foreground outline-none backdrop-blur transition-all placeholder:text-muted-foreground/70 focus:border-[oklch(0.7_0.14_265)] focus:ring-2 focus:ring-[oklch(0.7_0.14_265/0.2)]"
        />
      </div>
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-dashed border-[oklch(0.85_0.02_260)] bg-white/50 py-20 text-center backdrop-blur">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.95_0.03_265)] to-[oklch(0.93_0.05_300)] text-[oklch(0.45_0.18_275)]">
        <Search className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        No projects found
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Try a different category or search term.
      </p>
      <button
        onClick={onReset}
        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[oklch(0.5_0.22_260)] to-[oklch(0.52_0.25_295)] px-5 py-2.5 text-sm font-semibold text-white shadow-glass transition hover:-translate-y-0.5"
      >
        Reset filters
      </button>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
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
        <span className={`absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 backdrop-blur ${diffColor[project.difficulty]}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${diffDot[project.difficulty]}`} />
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
                  AI
                </span>
              )}
            </div>
            <span className="mt-1 inline-block text-[11px] font-medium uppercase tracking-wider text-[oklch(0.55_0.18_275)]">
              {project.category}
            </span>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.94_0.04_265)] to-[oklch(0.92_0.06_300)] text-[oklch(0.45_0.18_275)] shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-3deg]">
            <Icon className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

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

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {project.time}
          </span>
          <Link
            to="/curriculum"
            className="pp-cta inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[oklch(0.5_0.22_260)] to-[oklch(0.52_0.25_295)] px-3.5 py-1.5 text-xs font-semibold text-white shadow-glass transition-all duration-300 hover:shadow-float"
          >
            View
            <ArrowRight className="h-3 w-3" />
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
        <div className="flex h-full gap-1.5 overflow-hidden rounded-xl">
          {/* Sidebar */}
          <div className="flex w-[30%] flex-col gap-1 rounded-lg bg-black/30 p-1.5 backdrop-blur">
            <div className="mb-1 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-violet-400" />
              <span className="text-[6px] font-bold text-white/80">ChatAI</span>
            </div>
            {["General chat", "Code helper", "Data analysis"].map((label, i) => (
              <div key={i} className={`rounded px-1 py-0.5 text-[5.5px] font-medium ${i === 0 ? "bg-violet-500/40 text-white" : "text-white/50"}`}>{label}</div>
            ))}
            <div className="mt-auto space-y-0.5">
              <div className="h-0.5 w-full rounded bg-white/10" />
              <div className="h-4 w-4 rounded-full bg-white/20" />
            </div>
          </div>
          {/* Chat area */}
          <div className="flex flex-1 flex-col gap-1 py-1">
            <div className="flex items-start gap-1">
              <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
              <div className="rounded-lg rounded-tl-none bg-white/15 px-1.5 py-1 text-[5.5px] text-white/90 backdrop-blur">
                Hello! How can I help you today?
              </div>
            </div>
            <div className="flex items-start justify-end gap-1">
              <div className="rounded-lg rounded-tr-none bg-violet-500/50 px-1.5 py-1 text-[5.5px] text-white">
                Explain transformer attention
              </div>
              <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-white/30" />
            </div>
            <div className="flex items-start gap-1">
              <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
              <div className="flex-1 space-y-0.5 rounded-lg rounded-tl-none bg-white/15 px-1.5 py-1 backdrop-blur">
                <div className="h-0.5 w-full rounded bg-white/50" />
                <div className="h-0.5 w-5/6 rounded bg-white/40" />
                <div className="h-0.5 w-4/5 rounded bg-white/30" />
              </div>
            </div>
            <div className="mt-auto flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 backdrop-blur">
              <div className="flex-1 text-[5.5px] text-white/30">Message AI...</div>
              <div className="flex items-center gap-0.5">
                {[0,1,2].map(i => (
                  <span key={i} className="block h-1 w-1 rounded-full bg-violet-300 animate-typing-dot" style={{ animationDelay: `${i * 0.18}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case "resume":
      return (
        <div className="flex h-full gap-1.5 overflow-hidden rounded-xl">
          {/* Editor panel */}
          <div className="flex w-[45%] flex-col gap-1 rounded-lg bg-black/25 p-1.5">
            <div className="text-[5.5px] font-bold uppercase tracking-wider text-white/60">Editor</div>
            <div className="space-y-0.5">
              <div className="h-1 w-2/3 rounded bg-white/40" />
              <div className="h-0.5 w-full rounded bg-white/15" />
              <div className="h-0.5 w-5/6 rounded bg-white/15" />
            </div>
            <div className="mt-1 rounded bg-emerald-400/20 px-1 py-0.5">
              <div className="text-[5px] text-emerald-300">✦ AI Suggestion</div>
              <div className="mt-0.5 h-0.5 w-full rounded bg-emerald-400/40" />
              <div className="h-0.5 w-4/5 rounded bg-emerald-400/30" />
            </div>
            <div className="mt-1 space-y-0.5">
              <div className="text-[5px] font-semibold text-white/60">ATS Score</div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300" />
              </div>
              <div className="text-right text-[5px] font-bold text-emerald-300">87%</div>
            </div>
            <div className="mt-auto rounded bg-gradient-to-r from-violet-500/60 to-blue-500/60 px-1 py-0.5 text-center text-[5.5px] font-semibold text-white">
              Generate ✦
            </div>
          </div>
          {/* Resume preview */}
          <div className="flex-1 overflow-hidden rounded-lg bg-white/95 p-1.5 shadow-lg">
            <div className="mb-1 text-center">
              <div className="mx-auto h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
              <div className="mt-0.5 h-1 w-2/3 mx-auto rounded bg-gray-300" />
              <div className="h-0.5 w-1/2 mx-auto mt-0.5 rounded bg-gray-200" />
            </div>
            <div className="h-0.5 w-full rounded bg-violet-300/60" />
            {[["Experience", "4/5"], ["Skills", "5/5"], ["Education", "4/5"]].map(([label, score], i) => (
              <div key={i} className="mt-0.5">
                <div className="text-[4.5px] font-bold uppercase text-gray-400">{label}</div>
                <div className="mt-0.5 h-0.5 w-full rounded bg-gray-100" />
                <div className="h-0.5 w-5/6 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      );

    case "recommend":
      return (
        <div className="flex h-full flex-col gap-1 overflow-hidden rounded-xl">
          {/* Top bar */}
          <div className="flex items-center justify-between rounded-lg bg-black/25 px-2 py-1">
            <span className="text-[6px] font-bold text-white/90">For You · Priya</span>
            <div className="flex gap-0.5">
              {["ML","Data","AI"].map((t,i) => (
                <span key={i} className={`rounded px-1 py-0.5 text-[4.5px] font-semibold ${i===0 ? "bg-violet-500/60 text-white":"text-white/40 bg-white/10"}`}>{t}</span>
              ))}
            </div>
          </div>
          {/* Cards */}
          <div className="grid flex-1 grid-cols-3 gap-1">
            {[
              { color: "from-blue-500 to-violet-500", score: "98%", label: "Deep Learning" },
              { color: "from-violet-500 to-pink-500", score: "94%", label: "NLP Mastery" },
              { color: "from-emerald-400 to-teal-500", score: "91%", label: "MLOps" },
            ].map((c, i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-lg bg-white/10">
                <div className={`h-[40%] bg-gradient-to-br ${c.color} opacity-80`} />
                <div className="flex flex-col p-1">
                  <div className="text-[5px] font-semibold text-white leading-tight">{c.label}</div>
                  <div className="mt-auto flex items-center gap-0.5">
                    <span className="text-[4.5px] text-amber-300">★★★★★</span>
                  </div>
                  <div className="mt-0.5 text-[5px] font-bold text-emerald-300">{c.score} match</div>
                </div>
              </div>
            ))}
          </div>
          {/* Analytics bar */}
          <div className="flex items-center gap-1 rounded-lg bg-black/20 px-1.5 py-1">
            <span className="text-[5px] text-white/50">Accuracy</span>
            <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
            </div>
            <span className="text-[5px] font-bold text-violet-300">92%</span>
          </div>
        </div>
      );

    case "detect":
      return (
        <div className="relative flex h-full overflow-hidden rounded-xl bg-black/30">
          {/* Simulated camera feed */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, oklch(0.4 0.1 220), oklch(0.3 0.05 270))" }} />
            {/* Grid overlay */}
            <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[20,40,60,80].map(v=>(
                <g key={v}>
                  <line x1={v} y1="0" x2={v} y2="100" stroke="white" strokeWidth="0.3"/>
                  <line x1="0" y1={v} x2="100" y2={v} stroke="white" strokeWidth="0.3"/>
                </g>
              ))}
            </svg>
          </div>
          {/* Bounding boxes */}
          <div className="absolute" style={{ left: "10%", top: "18%", width: "38%", height: "52%" }}>
            <div className="h-full w-full rounded border-2 border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]">
              <div className="absolute -top-2.5 left-0 rounded bg-emerald-400 px-1 py-0.5 text-[5.5px] font-bold text-black whitespace-nowrap">Person · 97%</div>
            </div>
          </div>
          <div className="absolute" style={{ left: "54%", top: "28%", width: "26%", height: "32%" }}>
            <div className="h-full w-full rounded border-2 border-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]">
              <div className="absolute -top-2.5 left-0 rounded bg-sky-400 px-1 py-0.5 text-[5.5px] font-bold text-black whitespace-nowrap">Car · 94%</div>
            </div>
          </div>
          <div className="absolute" style={{ left: "62%", top: "65%", width: "16%", height: "20%" }}>
            <div className="h-full w-full rounded border-2 border-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]">
              <div className="absolute -top-2.5 left-0 rounded bg-amber-400 px-1 py-0.5 text-[5.5px] font-bold text-black whitespace-nowrap">Sign · 89%</div>
            </div>
          </div>
          {/* Stats overlay */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between rounded-md bg-black/60 px-2 py-1 backdrop-blur">
            <span className="text-[5.5px] font-semibold text-white/80">YOLO v8 · Live</span>
            <div className="flex items-center gap-1">
              <span className="text-[5px] text-white/50">Objects:</span>
              <span className="text-[5.5px] font-bold text-emerald-300">3</span>
              <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      );

    case "voice":
      return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-black/25">
          {/* Header */}
          <div className="flex items-center justify-between px-2 py-1.5">
            <span className="text-[6px] font-bold text-white/80">Voice Assistant</span>
            <span className="flex items-center gap-0.5 rounded-full bg-emerald-400/20 px-1.5 py-0.5 text-[5px] font-semibold text-emerald-300">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          </div>
          {/* Mic + waveform */}
          <div className="flex flex-1 flex-col items-center justify-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-violet-400/20 animate-ping" />
              <div className="absolute -inset-2 rounded-full bg-violet-400/10 animate-ping" style={{ animationDelay: "0.3s" }} />
              <div className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <Mic className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex h-6 items-end gap-[1.5px]">
              {Array.from({ length: 22 }).map((_, i) => {
                const heights = [3,6,10,14,10,7,12,16,10,6,14,10,7,13,9,6,11,15,9,5,8,4];
                return (
                  <span key={i} className="block w-[2px] rounded-full bg-gradient-to-t from-violet-400 to-blue-300 animate-wave-bar" style={{ height: `${heights[i]}px`, animationDelay: `${i * 0.06}s` }} />
                );
              })}
            </div>
          </div>
          {/* Transcription */}
          <div className="mx-1.5 mb-1.5 rounded-lg bg-white/10 px-2 py-1 backdrop-blur">
            <div className="text-[5px] font-semibold uppercase text-white/40">Transcription</div>
            <div className="mt-0.5 text-[5.5px] text-white/80">"Set a reminder for 9am tomorrow..."</div>
            <div className="mt-0.5 h-0.5 w-2/3 rounded bg-violet-400/50" />
          </div>
        </div>
      );

    case "imagegen":
      return (
        <div className="flex h-full gap-1.5 overflow-hidden rounded-xl">
          {/* Left panel */}
          <div className="flex w-[38%] flex-col gap-1 rounded-lg bg-black/30 p-1.5">
            <div className="text-[5.5px] font-bold text-white/60">Prompt</div>
            <div className="rounded bg-white/10 p-1 text-[5px] italic text-white/60 leading-tight">
              "cyberpunk city at night, neon rain, 4K"
            </div>
            <div className="space-y-0.5">
              <div className="text-[5px] text-white/50">Style</div>
              <div className="grid grid-cols-3 gap-0.5">
                {[
                  { label: "Photo", active: false },
                  { label: "Art", active: true },
                  { label: "3D", active: false },
                ].map((s) => (
                  <div key={s.label} className={`rounded px-0.5 py-0.5 text-center text-[4.5px] font-medium ${s.active ? "bg-violet-500/70 text-white" : "bg-white/10 text-white/40"}`}>{s.label}</div>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <div className="mb-0.5 text-[5px] text-white/50">Generating…</div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-400 to-blue-400 animate-pulse" />
              </div>
            </div>
            <div className="rounded bg-gradient-to-r from-violet-500/70 to-blue-500/70 px-1 py-0.5 text-center text-[5.5px] font-bold text-white">
              ✦ Generate
            </div>
          </div>
          {/* Image gallery */}
          <div className="grid flex-1 grid-cols-2 gap-1">
            {[
              ["from-blue-600 to-violet-700", "opacity-100"],
              ["from-violet-600 to-pink-600", "opacity-80"],
              ["from-cyan-500 to-blue-600", "opacity-75"],
              ["from-indigo-500 to-purple-600", "opacity-90"],
            ].map(([gradient, opacity], i) => (
              <div key={i} className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${gradient} ${opacity}`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                {i === 0 && (
                  <div className="absolute bottom-0.5 right-0.5 rounded bg-emerald-400 px-0.5 text-[4px] font-bold text-black">HD</div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "medical":
      return (
        <div className="flex h-full gap-1.5 overflow-hidden rounded-xl">
          {/* Patient panel */}
          <div className="flex w-[35%] flex-col gap-1 rounded-lg bg-black/25 p-1.5">
            <div className="flex items-center gap-1">
              <div className="h-4 w-4 rounded-full bg-white/20" />
              <div>
                <div className="text-[5.5px] font-semibold text-white">Ananya S.</div>
                <div className="text-[4.5px] text-white/40">Age 34 · F</div>
              </div>
            </div>
            <div className="space-y-0.5">
              {[["BP", "120/80", "text-emerald-300"], ["HR", "72 bpm", "text-sky-300"], ["SpO₂", "98%", "text-emerald-300"]].map(([label, value, color]) => (
                <div key={label} className="flex items-center justify-between rounded bg-white/10 px-1 py-0.5">
                  <span className="text-[4.5px] text-white/50">{label}</span>
                  <span className={`text-[5px] font-bold ${color}`}>{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto rounded bg-emerald-500/30 px-1 py-0.5 text-center text-[5px] font-bold text-emerald-300">Low Risk</div>
          </div>
          {/* Dashboard */}
          <div className="flex flex-1 flex-col gap-1">
            <div className="rounded-lg bg-black/20 px-1.5 py-1">
              <div className="text-[5px] font-semibold text-white/70">AI Diagnosis</div>
              <div className="mt-0.5 text-[5.5px] text-white/90">No critical findings detected</div>
              <div className="mt-0.5 flex items-center gap-0.5">
                <span className="text-[4.5px] text-white/40">Confidence:</span>
                <div className="flex-1 h-0.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                </div>
                <span className="text-[5px] font-bold text-emerald-300">94%</span>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-black/20 p-1">
              <div className="text-[5px] text-white/50 mb-0.5">Risk Prediction</div>
              <div className="flex h-full items-end gap-0.5 pb-1">
                {[30, 55, 42, 70, 38, 62, 45].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{
                    height: `${h}%`,
                    background: `linear-gradient(to top, oklch(0.7 0.18 ${200 + i*15}), oklch(0.65 0.22 ${220 + i*15}))`
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case "stock":
      return (
        <div className="flex h-full flex-col gap-1 overflow-hidden rounded-xl bg-black/25 p-1.5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[7px] font-bold text-white">AAPL</div>
              <div className="text-[5px] text-white/40">Apple Inc.</div>
            </div>
            <div className="text-right">
              <div className="text-[7px] font-bold text-white">$187.42</div>
              <div className="text-[5.5px] font-semibold text-emerald-300">▲ +3.21%</div>
            </div>
          </div>
          {/* Chart */}
          <div className="relative flex-1">
            <svg viewBox="0 0 200 70" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sg2" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
              <path d="M0,55 C20,50 30,45 45,42 S65,35 80,32 S100,28 115,22 S140,18 160,14 S185,10 200,8 L200,70 L0,70 Z" fill="url(#sg2)" />
              <path d="M0,55 C20,50 30,45 45,42 S65,35 80,32 S100,28 115,22 S140,18 160,14 S185,10 200,8" stroke="url(#lineGrad)" strokeWidth="1.8" fill="none" />
              <circle cx="200" cy="8" r="2.5" fill="#34d399" />
            </svg>
          </div>
          {/* Stats row */}
          <div className="flex gap-1">
            {[["LSTM", "92%"], ["MA-20", "↑"], ["Vol", "2.1M"]].map(([label, val]) => (
              <div key={label} className="flex-1 rounded bg-white/10 px-1 py-0.5 text-center">
                <div className="text-[4.5px] text-white/40">{label}</div>
                <div className="text-[5.5px] font-bold text-white">{val}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "fraud":
      return (
        <div className="flex h-full flex-col gap-1 overflow-hidden rounded-xl bg-black/25 p-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-emerald-300" />
              <span className="text-[6px] font-bold text-white/90">SecureGuard AI</span>
            </div>
            <div className="flex items-center gap-0.5 rounded-full bg-emerald-400/20 px-1 py-0.5">
              <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[5px] font-semibold text-emerald-300">LIVE</span>
            </div>
          </div>
          {/* Transaction stream */}
          <div className="space-y-0.5">
            {[
              { id: "TXN-4821", amt: "$1,240", status: "Safe", color: "text-emerald-300 bg-emerald-400/15" },
              { id: "TXN-4822", amt: "$89,500", status: "⚠ Alert", color: "text-red-300 bg-red-400/20" },
              { id: "TXN-4823", amt: "$320", status: "Safe", color: "text-emerald-300 bg-emerald-400/15" },
            ].map((tx) => (
              <div key={tx.id} className="flex items-center justify-between rounded-md bg-white/8 px-1.5 py-1 border border-white/5">
                <div>
                  <div className="text-[5.5px] font-medium text-white/80">{tx.id}</div>
                  <div className="text-[5px] text-white/40">{tx.amt}</div>
                </div>
                <span className={`rounded-full px-1 py-0.5 text-[5px] font-semibold ${tx.color}`}>{tx.status}</span>
              </div>
            ))}
          </div>
          {/* Graph scatter */}
          <div className="flex-1 overflow-hidden rounded-lg bg-white/5">
            <svg viewBox="0 0 200 60" className="h-full w-full">
              {[[30,40],[60,25],[90,38],[130,15],[160,30],[50,48],[110,42],[170,20]].map(([cx,cy],i)=>(
                <circle key={i} cx={cx} cy={cy} r={i===1?4:2.5} fill={i===1?"#f87171":"rgba(255,255,255,0.5)"} opacity={i===1?1:0.6} />
              ))}
              {i===1 && <circle cx={60} cy={25} r={8} fill="none" stroke="#f87171" strokeWidth="0.8" opacity="0.4" />}
            </svg>
          </div>
        </div>
      );

    case "face":
      return (
        <div className="relative flex h-full overflow-hidden rounded-xl bg-black/30">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Face silhouette */}
            <div className="relative">
              <div className="h-16 w-14 rounded-t-[50%] rounded-b-lg bg-white/15" />
              {/* Scan overlay */}
              <div className="absolute inset-0 rounded-t-[50%] rounded-b-lg border-2 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                {/* Corner markers */}
                {[
                  "top-0 left-0 border-t-2 border-l-2 rounded-tl",
                  "top-0 right-0 border-t-2 border-r-2 rounded-tr",
                  "bottom-0 left-0 border-b-2 border-l-2 rounded-bl",
                  "bottom-0 right-0 border-b-2 border-r-2 rounded-br",
                ].map((cls, i) => (
                  <div key={i} className={`absolute h-2 w-2 border-emerald-400 ${cls}`} />
                ))}
                {/* Landmark dots */}
                {[[28, 28], [52, 28], [40, 40], [30, 52], [50, 52]].map(([x, y], i) => (
                  <div key={i} className="absolute h-1 w-1 rounded-full bg-violet-300/80" style={{ left: `${x}%`, top: `${y}%` }} />
                ))}
              </div>
              {/* Scan line */}
              <div className="absolute inset-x-0 h-0.5 bg-emerald-400/70 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-scan" />
            </div>
          </div>
          {/* Sidebar data */}
          <div className="absolute right-1.5 top-1.5 space-y-0.5">
            {[["ID", "USR-0042"], ["Age", "~28"], ["Conf.", "99.2%"]].map(([k, v]) => (
              <div key={k} className="rounded bg-black/50 px-1 py-0.5 backdrop-blur">
                <div className="text-[4.5px] text-white/40">{k}</div>
                <div className="text-[5.5px] font-bold text-white">{v}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-1.5 inset-x-1.5 flex items-center justify-between rounded-md bg-black/60 px-2 py-1 backdrop-blur">
            <span className="text-[5.5px] font-bold text-emerald-300">✓ Match Found</span>
            <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      );

    case "ocr":
      return (
        <div className="flex h-full gap-1.5 overflow-hidden rounded-xl">
          {/* Document */}
          <div className="relative w-[45%] overflow-hidden rounded-lg bg-white/90 p-1.5 shadow-lg">
            <div className="mb-1 text-[5.5px] font-bold text-gray-500 uppercase">Invoice #4821</div>
            <div className="space-y-0.5">
              <div className="h-0.5 w-full rounded bg-gray-200" />
              <div className="h-0.5 w-5/6 rounded bg-gray-200" />
              <div className="h-0.5 w-4/5 rounded bg-gray-200" />
              <div className="h-2 w-full rounded bg-gray-100 mt-1" />
              <div className="h-0.5 w-full rounded bg-gray-200" />
              <div className="h-0.5 w-5/6 rounded bg-gray-200" />
              <div className="h-0.5 w-2/3 rounded bg-gray-200" />
            </div>
            {/* Scan highlight overlay */}
            <div className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-scan" />
            <div className="absolute left-1 top-4 right-1 h-2 rounded bg-violet-400/15 border border-violet-400/40" />
          </div>
          {/* Extracted data */}
          <div className="flex flex-1 flex-col gap-1 rounded-lg bg-black/25 p-1.5">
            <div className="text-[5.5px] font-bold text-white/70">Extracted Fields</div>
            {[
              ["Date", "Jun 28, 2026"],
              ["Total", "$4,200.00"],
              ["Vendor", "Acme Corp"],
              ["PO#", "PO-9921"],
            ].map(([key, val]) => (
              <div key={key} className="flex items-center justify-between rounded bg-white/10 px-1 py-0.5">
                <span className="text-[4.5px] text-white/40">{key}</span>
                <span className="text-[5px] font-semibold text-emerald-300">{val}</span>
              </div>
            ))}
            <div className="mt-auto flex items-center gap-0.5 rounded bg-emerald-400/15 px-1 py-0.5">
              <span className="text-[5px] font-bold text-emerald-300">✓ 100% Confidence</span>
            </div>
          </div>
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
