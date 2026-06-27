import { createFileRoute } from "@tanstack/react-router";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Download,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  TrendingUp,
  Database,
  Brain,
  Cpu,
  Code2,
  Github,
  CheckCircle2,
  CalendarDays,
  Layers,
  Users,
  Compass,
  Briefcase,
  GraduationCap,
  ScrollText,
  FolderX,
  UserX,
  AlertTriangle,
  BookOpen,
  Rocket,
  FolderGit2,
  MessagesSquare,
  Trophy,
  Building2,
  Calculator,
  Stethoscope,
  Scale,
  Bot,
  CircuitBoard,
  LineChart,
  Eye,
  FileText,
  BarChart3,
  Scan,
  Mic,
  Image,
  ShieldAlert,
} from "lucide-react";


import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Data Drop — Become the AI Engineer Companies Want to Hire" },
      {
        name: "description",
        content:
          "India's most practical AI career program. Master AI & ML through live mentorship, real-world projects, interview prep, and career guidance.",
      },
      { property: "og:title", content: "Data Drop — India's Most Practical AI Career Program" },
      {
        property: "og:description",
        content:
          "Master AI & ML with live mentorship, 50+ real-world projects, and end-to-end career support.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundMesh />
      <Navbar />
      <Hero />
      <TrustSection />
      <JourneySection />
      <SalarySection />
      <RoadmapSection />
      <ProjectsSection />
      <ToolsSection />
    </div>
  );
}

/* ----------------------------- Background ----------------------------- */

function BackgroundMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="mesh-bg animate-gradient-pan absolute inset-0" />
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[oklch(0.72_0.2_260/0.45)] blur-[120px] animate-pulse-glow" />
      <div
        className="absolute top-10 -right-40 h-[560px] w-[560px] rounded-full bg-[oklch(0.7_0.24_300/0.4)] blur-[130px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[oklch(0.78_0.16_230/0.35)] blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "4s" }}
      />
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.85 0.02 260 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.85 0.02 260 / 0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}

/* ------------------------------- Navbar ------------------------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_260)] to-[oklch(0.55_0.26_300)] shadow-glass">
            <Database className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="text-[17px] font-semibold tracking-tight">Data Drop</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.55_0.25_290)] px-4 py-2 text-sm font-semibold text-white shadow-float transition-all hover:shadow-[0_18px_40px_-12px_oklch(0.55_0.25_280/0.55)] hover:-translate-y-0.5 md:inline-flex">
            Enroll Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/60 backdrop-blur md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-white/80 backdrop-blur md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.55_0.25_290)] px-4 py-2.5 text-sm font-semibold text-white shadow-float">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* -------------------------------- Hero -------------------------------- */

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pt-12 pb-24 sm:px-8 lg:pt-20 lg:pb-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* LEFT */}
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.85_0.05_270)] bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[oklch(0.42_0.18_275)] shadow-soft backdrop-blur">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.65_0.2_260)] to-[oklch(0.6_0.24_300)] text-white">
              🚀
            </span>
            INDIA'S MOST PRACTICAL AI CAREER PROGRAM
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[4.25rem]">
            Become the{" "}
            <span className="text-gradient-brand animate-gradient-pan">AI Engineer</span>
            <br className="hidden sm:block" />
            Companies Want to Hire.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Master Artificial Intelligence and Machine Learning through{" "}
            <span className="font-medium text-foreground/80">live mentorship</span>, real-world
            projects, interview preparation, and end-to-end career guidance.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.52_0.26_290)] px-6 py-3.5 text-sm font-semibold text-white shadow-float transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-18px_oklch(0.55_0.25_280/0.6)]">
              Enroll Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white">
              <Download className="h-4 w-4 text-[oklch(0.5_0.2_270)]" />
              Download Curriculum
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[oklch(0.78_0.16_75)] text-[oklch(0.78_0.16_75)]"
                  />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9</span>
            </div>
            <Divider />
            <TrustItem icon={<ShieldCheck className="h-4 w-4" />} label="Career Support" />
            <Divider />
            <TrustItem icon={<Award className="h-4 w-4" />} label="Certificate" />
            <Divider />
            <TrustItem icon={<Sparkles className="h-4 w-4" />} label="Beginner Friendly" />
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat value="18" suffix="Months" label="Program" />
            <Stat value="50+" label="Projects" />
            <Stat value="100+" label="Learning Hours" />
            <Stat value="₹3,999" label="Program Fee" highlight />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <LaptopMockup />
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return <span className="hidden h-4 w-px bg-border sm:block" />;
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[oklch(0.5_0.2_270)]">{icon}</span>
      <span className="font-medium text-foreground/80">{label}</span>
    </div>
  );
}

function Stat({
  value,
  suffix,
  label,
  highlight,
}: {
  value: string;
  suffix?: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border border-border/70 bg-white/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-soft ${
        highlight
          ? "bg-gradient-to-br from-[oklch(0.97_0.04_265)] to-[oklch(0.96_0.05_295)]"
          : ""
      }`}
    >
      <div className="flex items-baseline gap-1.5">
        <span
          className={`text-2xl font-semibold tracking-tight ${
            highlight ? "text-gradient-brand" : "text-foreground"
          }`}
        >
          {value}
        </span>
        {suffix && (
          <span className="text-xs font-medium text-muted-foreground">{suffix}</span>
        )}
      </div>
      <div className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </div>
    </div>
  );
}

/* ----------------------------- Laptop ----------------------------- */

function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      {/* glow halo */}
      <div className="absolute inset-x-6 top-10 -z-10 h-[80%] rounded-[60px] bg-gradient-to-br from-[oklch(0.7_0.22_260/0.45)] to-[oklch(0.65_0.24_300/0.45)] blur-3xl" />

      {/* Floating badges */}
      <FloatingBadge
        className="-left-6 top-8 animate-float-slow"
        icon={<PythonGlyph />}
        label="Python"
      />
      <FloatingBadge
        className="-right-4 top-2 animate-float-slower"
        icon={<TensorflowGlyph />}
        label="TensorFlow"
      />
      <FloatingBadge
        className="-right-8 top-1/2 animate-float-slow"
        icon={<OpenAIGlyph />}
        label="OpenAI"
      />
      <FloatingBadge
        className="-left-10 bottom-24 animate-float-slower"
        icon={<Github className="h-4 w-4" />}
        label="GitHub"
      />
      <FloatingBadge
        className="right-6 -bottom-2 animate-float-slow"
        icon={<VSCodeGlyph />}
        label="VS Code"
      />

      {/* Laptop body */}
      <div className="relative" style={{ perspective: "1800px" }}>
        <div
          className="relative rounded-[26px] bg-gradient-to-b from-[oklch(0.22_0.04_265)] to-[oklch(0.14_0.04_265)] p-2.5 shadow-laptop"
          style={{ transform: "rotateX(6deg)" }}
        >
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[18px] bg-white">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-border/70 bg-[oklch(0.98_0.005_260)] px-3.5 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.18_25)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.14_85)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.16_145)]" />
              </div>
              <div className="rounded-md bg-white px-3 py-1 text-[10px] font-medium text-muted-foreground shadow-soft">
                datadrop.in/dashboard
              </div>
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[oklch(0.65_0.2_260)] to-[oklch(0.6_0.24_300)]" />
            </div>

            <Dashboard />
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-[20px] bg-gradient-to-b from-[oklch(0.32_0.03_265)] to-[oklch(0.16_0.03_265)] shadow-[0_30px_40px_-20px_oklch(0.2_0.04_265/0.5)]">
          <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-xl bg-[oklch(0.1_0.02_265)]" />
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const courses = [
    { name: "Python", progress: 92, icon: <Code2 className="h-3.5 w-3.5" />, hue: "260" },
    { name: "Machine Learning", progress: 78, icon: <Brain className="h-3.5 w-3.5" />, hue: "280" },
    { name: "Deep Learning", progress: 64, icon: <Cpu className="h-3.5 w-3.5" />, hue: "240" },
    { name: "Generative AI", progress: 48, icon: <Sparkles className="h-3.5 w-3.5" />, hue: "300" },
    { name: "Prompt Engineering", progress: 35, icon: <Sparkles className="h-3.5 w-3.5" />, hue: "320" },
  ];

  return (
    <div className="grid grid-cols-12 gap-3 bg-gradient-to-br from-[oklch(0.99_0.005_260)] to-[oklch(0.96_0.02_280)] p-3.5">
      {/* sidebar */}
      <aside className="col-span-3 rounded-2xl bg-white/80 p-2.5 shadow-soft backdrop-blur">
        <div className="mb-2 px-2 text-[9px] font-semibold tracking-widest text-muted-foreground uppercase">
          Course
        </div>
        <ul className="space-y-1">
          {["Overview", "Modules", "Projects", "Mentors"].map((it, i) => (
            <li
              key={it}
              className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[10px] font-medium ${
                i === 0
                  ? "bg-gradient-to-r from-[oklch(0.95_0.04_260)] to-[oklch(0.94_0.05_295)] text-[oklch(0.4_0.2_275)]"
                  : "text-muted-foreground"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              {it}
            </li>
          ))}
        </ul>
      </aside>

      {/* main */}
      <main className="col-span-9 space-y-3">
        {/* hero card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_260)] to-[oklch(0.5_0.26_295)] p-3.5 text-white shadow-glass">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
          <div className="relative flex items-center justify-between">
            <div>
              <div className="text-[9px] font-semibold tracking-widest uppercase opacity-80">
                Your AI Career Track
              </div>
              <div className="mt-1 text-base font-semibold">Week 12 · Deep Learning</div>
            </div>
            <div className="rounded-xl bg-white/15 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
              <span className="opacity-80">Streak</span>{" "}
              <span className="font-semibold">28d</span>
            </div>
          </div>
          <div className="relative mt-3 grid grid-cols-3 gap-2 text-[10px]">
            {[
              { k: "Completion", v: "67%" },
              { k: "Projects", v: "12/18" },
              { k: "Mentor hrs", v: "24" },
            ].map((x) => (
              <div key={x.k} className="rounded-lg bg-white/10 p-2 backdrop-blur">
                <div className="opacity-70">{x.k}</div>
                <div className="text-sm font-semibold">{x.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* courses + analytics */}
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-2xl bg-white/85 p-3 shadow-soft backdrop-blur">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[10px] font-semibold text-foreground">Modules</div>
              <div className="flex items-center gap-1 text-[9px] text-[oklch(0.45_0.18_150)]">
                <TrendingUp className="h-2.5 w-2.5" />
                +12% this week
              </div>
            </div>
            <ul className="space-y-1.5">
              {courses.map((c) => (
                <li key={c.name} className="flex items-center gap-2">
                  <span
                    className="grid h-6 w-6 place-items-center rounded-lg text-white"
                    style={{
                      backgroundImage: `linear-gradient(135deg, oklch(0.58 0.22 ${c.hue}), oklch(0.5 0.26 ${Number(c.hue) + 20}))`,
                    }}
                  >
                    {c.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-medium text-foreground">{c.name}</span>
                      <span className="text-muted-foreground">{c.progress}%</span>
                    </div>
                    <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-[oklch(0.94_0.01_260)]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${c.progress}%`,
                          backgroundImage: `linear-gradient(90deg, oklch(0.62 0.2 ${c.hue}), oklch(0.55 0.26 ${Number(c.hue) + 30}))`,
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 space-y-3">
            <AnalyticsCard />
            <div className="rounded-2xl bg-white/85 p-3 shadow-soft backdrop-blur">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground">
                <CheckCircle2 className="h-3 w-3 text-[oklch(0.55_0.18_150)]" />
                Next milestone
              </div>
              <div className="mt-1 text-[10px] text-muted-foreground">
                Ship GenAI capstone & unlock interview prep.
              </div>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[oklch(0.95_0.04_260)] to-[oklch(0.94_0.05_295)] px-2 py-0.5 text-[9px] font-semibold text-[oklch(0.42_0.2_275)]">
                4 days left
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AnalyticsCard() {
  const points = [22, 30, 26, 38, 34, 48, 44, 58, 54, 70, 66, 82];
  const max = Math.max(...points);
  const w = 160;
  const h = 56;
  const step = w / (points.length - 1);
  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const areaPath = `${linePath} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="rounded-2xl bg-white/85 p-3 shadow-soft backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-semibold text-foreground">Weekly Progress</div>
        <div className="text-[9px] text-muted-foreground">12w</div>
      </div>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-lg font-semibold tracking-tight">82</span>
        <span className="text-[9px] font-medium text-[oklch(0.55_0.18_150)]">+18%</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-1 h-12 w-full">
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.6 0.24 280)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.6 0.24 280)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.58 0.22 258)" />
            <stop offset="100%" stopColor="oklch(0.55 0.26 300)" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#area)" />
        <path d={linePath} fill="none" stroke="url(#line)" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function FloatingBadge({
  className = "",
  icon,
  label,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`absolute z-20 inline-flex items-center gap-1.5 rounded-2xl bg-white/85 px-3 py-2 text-xs font-semibold text-foreground shadow-glass backdrop-blur ${className}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.02_260)] to-[oklch(0.95_0.04_295)] text-[oklch(0.4_0.2_275)]">
        {icon}
      </span>
      {label}
    </div>
  );
}

/* tiny inline glyphs to avoid extra deps */
function PythonGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M12 2c-3 0-5 1.2-5 3v3h5v1H5c-2 0-3 2-3 5s1 5 3 5h2v-3c0-2 2-3 4-3h4c2 0 3-1 3-3V5c0-2-2-3-6-3Zm-2 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}
function TensorflowGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M12 2 4 6v4l4-2v10l4 2V6l-4 2V8l4-2 4 2v2l-4-2v12l4-2V6l-8-4Z" />
    </svg>
  );
}
function OpenAIGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3a4 4 0 0 1 4 4v2l-4 2-4-2V7a4 4 0 0 1 4-4Z" />
      <path d="M3 12a4 4 0 0 1 2-3.5L9 10v4l-4 2A4 4 0 0 1 3 12Z" />
      <path d="M12 21a4 4 0 0 1-4-4v-2l4-2 4 2v2a4 4 0 0 1-4 4Z" />
    </svg>
  );
}
function VSCodeGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M17 2 7 11 4 9 2 10v4l2 1 3-2 10 9 5-2V4l-5-2Zm0 5v10l-7-5 7-5Z" />
    </svg>
  );
}

/* -------------------------- Trust Section -------------------------- */

const trustCards = [
  {
    icon: CalendarDays,
    title: "18 Months",
    desc: "A comprehensive, paced journey from fundamentals to job-ready expertise.",
  },
  {
    icon: Layers,
    title: "50+ Projects",
    desc: "Build a portfolio that stands out with real-world, industry-grade projects.",
  },
  {
    icon: Users,
    title: "Live Mentorship",
    desc: "Weekly live sessions with AI engineers who have shipped at top tech companies.",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    desc: "Personalised roadmaps, resume reviews, and LinkedIn optimisation.",
  },
  {
    icon: Award,
    title: "Certificate",
    desc: "Industry-recognised credential that signals real competence to recruiters.",
  },
  {
    icon: Briefcase,
    title: "Placement Preparation",
    desc: "Mock interviews, coding rounds, and company-specific preparation modules.",
  },
];

function TrustSection() {
  return (
    <section className="relative bg-white">
      {/* subtle top fade from hero mesh into white */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-white" />

      <div className="mx-auto max-w-7xl px-5 pt-28 pb-28 sm:px-8 lg:pt-36 lg:pb-36">
        {/* headline */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.9_0.02_270)] bg-[oklch(0.98_0.005_260)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.55_0.18_275)] uppercase">
            <Sparkles className="h-3 w-3" />
            Why Data Drop
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            Trusted by Future{" "}
            <span className="text-gradient-brand">AI Professionals.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Everything you need to launch your AI career, built into one
            transformative program.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, i) => (
            <div
              key={card.title}
              className="trust-card animate-card-rise rounded-3xl p-7"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between">
                <span className="trust-icon grid h-12 w-12 place-items-center rounded-2xl">
                  <card.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-colors group-hover:text-[oklch(0.55_0.18_275)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Journey Section -------------------------- */

const traditionalSteps = [
  { icon: GraduationCap, title: "College", note: "Four years of theory" },
  { icon: ScrollText, title: "Degree", note: "A certificate on paper" },
  { icon: FolderX, title: "No Projects", note: "Nothing real to show" },
  { icon: UserX, title: "No Portfolio", note: "Invisible to recruiters" },
  { icon: AlertTriangle, title: "Job Struggles", note: "Endless applications, no callbacks" },
];

const dataDropSteps = [
  { icon: BookOpen, title: "Learn Skills", note: "Python, ML, DL, GenAI — taught the way industry uses them" },
  { icon: Rocket, title: "Projects", note: "50+ real-world builds, shipped end-to-end" },
  { icon: FolderGit2, title: "Portfolio", note: "GitHub, case studies, and a personal site that ranks" },
  { icon: MessagesSquare, title: "Interview Prep", note: "Mock interviews with engineers from top AI teams" },
  { icon: Trophy, title: "Career Ready", note: "Confident, hired, and shipping from day one" },
];

function JourneySection() {
  return (
    <section className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
        <div className="absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-[oklch(0.92_0.06_265)] blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-[460px] w-[460px] rounded-full bg-[oklch(0.92_0.07_300)] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.9_0.02_270)] bg-[oklch(0.98_0.005_260)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.55_0.18_275)] uppercase">
            <Compass className="h-3 w-3" />
            The Two Paths
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Why College Alone{" "}
            <span className="text-gradient-brand">Isn't Enough.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            A degree opens a door. A portfolio of real work walks you through it.
            Here's how the two journeys diverge.
          </p>
        </div>

        {/* Split */}
        <div className="relative mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Divider on lg */}
          <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] -translate-x-1/2 lg:block">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-[oklch(0.9_0.02_270)] to-transparent" />
          </div>

          <JourneyColumn
            label="Traditional Education"
            tone="muted"
            tagline="The default path"
            steps={traditionalSteps}
          />
          <JourneyColumn
            label="Data Drop"
            tone="brand"
            tagline="The practical path"
            steps={dataDropSteps}
          />
        </div>
      </div>
    </section>
  );
}

function JourneyColumn({
  label,
  tagline,
  tone,
  steps,
}: {
  label: string;
  tagline: string;
  tone: "muted" | "brand";
  steps: { icon: React.ElementType; title: string; note: string }[];
}) {
  const isBrand = tone === "brand";
  return (
    <div className="relative">
      {/* Column header */}
      <div
        className={
          "mb-8 flex items-center justify-between rounded-2xl border px-5 py-4 backdrop-blur-xl " +
          (isBrand
            ? "border-[oklch(0.88_0.05_275)] bg-gradient-to-r from-[oklch(0.97_0.03_265)] to-[oklch(0.97_0.04_300)]"
            : "border-[oklch(0.92_0.01_265)] bg-[oklch(0.985_0.003_260)]")
        }
      >
        <div>
          <p className={"text-[11px] font-semibold uppercase tracking-[0.18em] " + (isBrand ? "text-[oklch(0.5_0.2_275)]" : "text-muted-foreground")}>
            {tagline}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
            {label}
          </h3>
        </div>
        <span
          className={
            "grid h-10 w-10 place-items-center rounded-xl " +
            (isBrand
              ? "bg-gradient-to-br from-[oklch(0.6_0.22_265)] to-[oklch(0.55_0.24_300)] text-white shadow-[0_8px_20px_-6px_oklch(0.55_0.22_275/0.45)]"
              : "bg-[oklch(0.94_0.01_265)] text-muted-foreground")
          }
        >
          {isBrand ? <Sparkles className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
        </span>
      </div>

      {/* Timeline */}
      <ol className="relative space-y-4">
        {steps.map((step, i) => (
          <li key={step.title}>
            <div
              className={
                "group relative rounded-3xl border bg-white/70 p-5 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-0.5 " +
                (isBrand
                  ? "border-[oklch(0.9_0.03_275)] shadow-[0_12px_36px_-20px_oklch(0.55_0.22_275/0.35)] hover:shadow-[0_24px_60px_-24px_oklch(0.55_0.22_275/0.45)]"
                  : "border-[oklch(0.93_0.01_265)] shadow-[0_8px_24px_-18px_oklch(0.2_0.04_265/0.4)]")
              }
            >
              <div className="flex items-start gap-4">
                <span
                  className={
                    "relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl " +
                    (isBrand
                      ? "bg-gradient-to-br from-[oklch(0.95_0.04_265)] to-[oklch(0.93_0.06_300)] text-[oklch(0.45_0.2_275)]"
                      : "bg-[oklch(0.96_0.005_260)] text-[oklch(0.5_0.03_265)]")
                  }
                >
                  <step.icon className="h-5 w-5" strokeWidth={2} />
                  <span
                    className={
                      "absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold " +
                      (isBrand
                        ? "bg-[oklch(0.55_0.22_275)] text-white"
                        : "bg-white text-muted-foreground ring-1 ring-[oklch(0.9_0.01_265)]")
                    }
                  >
                    {i + 1}
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-[15px] font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h4>
                    {isBrand && i === steps.length - 1 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.96_0.04_150)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.45_0.15_150)]">
                        <CheckCircle2 className="h-3 w-3" />
                        Outcome
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.note}
                  </p>
                </div>
              </div>
            </div>

            {/* connector arrow */}
            {i < steps.length - 1 && (
              <div className="flex justify-center py-2" aria-hidden>
                <span
                  className={
                    "grid h-7 w-7 place-items-center rounded-full " +
                    (isBrand
                      ? "bg-gradient-to-br from-[oklch(0.6_0.22_265)] to-[oklch(0.55_0.24_300)] text-white shadow-[0_6px_16px_-6px_oklch(0.55_0.22_275/0.55)]"
                      : "bg-[oklch(0.95_0.005_260)] text-muted-foreground")
                  }
                >
                  <ArrowDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* -------------------------- Salary Section -------------------------- */

const traditionalRoles = [
  { icon: Building2, role: "Business Analyst", salary: "6 LPA", range: "4 – 9 LPA" },
  { icon: Calculator, role: "Chartered Accountant", salary: "8 LPA", range: "6 – 12 LPA" },
  { icon: Stethoscope, role: "Medical Officer", salary: "7 LPA", range: "5 – 11 LPA" },
  { icon: Scale, role: "Corporate Lawyer", salary: "9 LPA", range: "6 – 14 LPA" },
];

const aiRoles = [
  { icon: Bot, role: "GenAI Engineer", salary: "32 LPA", range: "22 – 60 LPA", tag: "Hot" },
  { icon: Brain, role: "ML Engineer", salary: "28 LPA", range: "18 – 55 LPA" },
  { icon: CircuitBoard, role: "AI Research Engineer", salary: "42 LPA", range: "30 – 90 LPA", tag: "Top" },
  { icon: Eye, role: "Computer Vision Engineer", salary: "26 LPA", range: "16 – 50 LPA" },
];

function SalarySection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.18_0.04_265)] text-white">
      {/* glow mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-[oklch(0.55_0.22_265)] opacity-30 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[560px] w-[560px] rounded-full bg-[oklch(0.55_0.24_305)] opacity-25 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(oklch(1_0_0)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-white/80 backdrop-blur-xl">
            <TrendingUp className="h-3 w-3" />
            Salary Outlook · 2026
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
            AI is Creating the{" "}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.12_240)] via-[oklch(0.78_0.16_275)] to-[oklch(0.78_0.18_310)] bg-clip-text text-transparent">
              Highest Paying Careers.
            </span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/65">
            Across industries, AI roles now command 3–5× the compensation of
            traditional career paths — and the gap is widening every quarter.
          </p>
        </div>

        {/* Compare */}
        <div className="relative mt-20 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
          <SalaryColumn
            kind="traditional"
            label="Traditional Careers"
            tagline="Established paths"
            roles={traditionalRoles}
            average="₹7.5 LPA"
            averageLabel="Avg. mid-career"
          />

          {/* VS Pill */}
          <div className="relative flex items-center justify-center lg:px-2">
            <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />
            <span className="relative grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-[oklch(0.22_0.05_265)] text-sm font-semibold tracking-widest text-white/80 shadow-[0_20px_60px_-20px_oklch(0.55_0.22_275/0.6)] backdrop-blur-xl">
              VS
            </span>
          </div>

          <SalaryColumn
            kind="ai"
            label="AI Careers"
            tagline="The next decade"
            roles={aiRoles}
            average="₹32 LPA"
            averageLabel="Avg. mid-career"
          />
        </div>

        {/* Footnote */}
        <p className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-white/40">
          Source · Glassdoor · LinkedIn Salary · Naukri · Levels.fyi · India 2026
        </p>
      </div>
    </section>
  );
}

function SalaryColumn({
  kind,
  label,
  tagline,
  roles,
  average,
  averageLabel,
}: {
  kind: "traditional" | "ai";
  label: string;
  tagline: string;
  roles: { icon: React.ElementType; role: string; salary: string; range: string; tag?: string }[];
  average: string;
  averageLabel: string;
}) {
  const isAi = kind === "ai";
  return (
    <div
      className={
        "group relative overflow-hidden rounded-[28px] border p-7 backdrop-blur-2xl transition-all duration-500 ease-out sm:p-8 " +
        (isAi
          ? "border-white/15 bg-gradient-to-br from-[oklch(0.35_0.18_265)]/80 via-[oklch(0.3_0.16_280)]/70 to-[oklch(0.32_0.2_305)]/80 shadow-[0_40px_100px_-30px_oklch(0.55_0.22_275/0.7)]"
          : "border-white/10 bg-white/[0.04]")
      }
    >
      {/* inner glow */}
      {isAi && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[oklch(0.78_0.18_310)] opacity-25 blur-3xl" />
      )}

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className={"text-[11px] font-semibold uppercase tracking-[0.18em] " + (isAi ? "text-[oklch(0.85_0.12_280)]" : "text-white/45")}>
            {tagline}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">{label}</h3>
        </div>
        {isAi && (
          <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.96_0.04_150)]/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.35_0.15_150)]">
            <TrendingUp className="h-3 w-3" /> +280%
          </span>
        )}
      </div>

      {/* Average headline */}
      <div className="relative mt-7 flex items-end justify-between border-b border-white/10 pb-7">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
            {averageLabel}
          </p>
          <p
            className={
              "mt-1 font-semibold leading-none tracking-[-0.04em] " +
              (isAi
                ? "bg-gradient-to-br from-white via-white to-[oklch(0.85_0.12_280)] bg-clip-text text-[3.2rem] text-transparent sm:text-[4rem]"
                : "text-[3.2rem] text-white/85 sm:text-[4rem]")
            }
          >
            {average}
          </p>
        </div>
        <span
          className={
            "grid h-12 w-12 place-items-center rounded-2xl " +
            (isAi
              ? "bg-white/15 text-white shadow-inner"
              : "bg-white/[0.06] text-white/60")
          }
        >
          {isAi ? <LineChart className="h-5 w-5" /> : <Briefcase className="h-5 w-5" />}
        </span>
      </div>

      {/* Roles */}
      <ul className="relative mt-6 space-y-3">
        {roles.map((r) => (
          <li
            key={r.role}
            className={
              "flex items-center gap-4 rounded-2xl border p-3.5 transition-all duration-300 hover:-translate-y-0.5 " +
              (isAi
                ? "border-white/10 bg-white/[0.05] hover:border-white/25 hover:bg-white/[0.09]"
                : "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]")
            }
          >
            <span
              className={
                "grid h-10 w-10 shrink-0 place-items-center rounded-xl " +
                (isAi
                  ? "bg-gradient-to-br from-[oklch(0.7_0.18_265)] to-[oklch(0.65_0.22_305)] text-white"
                  : "bg-white/[0.08] text-white/70")
              }
            >
              <r.icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-[14px] font-medium text-white/90">
                  {r.role}
                </p>
                {r.tag && (
                  <span className="rounded-full bg-[oklch(0.96_0.04_150)]/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[oklch(0.85_0.18_150)]">
                    {r.tag}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/40">
                {r.range}
              </p>
            </div>
            <p
              className={
                "shrink-0 text-right font-semibold tabular-nums tracking-tight " +
                (isAi ? "text-[18px] text-white" : "text-[18px] text-white/75")
              }
            >
              ₹{r.salary}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------- Roadmap Section -------------------------- */

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

function RoadmapSection() {
  return (
    <section className="relative bg-white">
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

/* -------------------------- Projects Section -------------------------- */

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

function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.985_0.003_265)]">
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

/* --------------------------- Tools Section ---------------------------- */

const toolCategories = [
  {
    label: "Programming",
    hue: "260",
    tools: ["Python", "VS Code", "Git & GitHub", "Jupyter Notebook", "Google Colab"],
  },
  {
    label: "Machine Learning",
    hue: "280",
    tools: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV"],
  },
  {
    label: "Generative AI",
    hue: "300",
    tools: ["ChatGPT", "Gemini", "Claude", "Hugging Face", "LangChain", "LangGraph", "Ollama", "ChromaDB"],
  },
  {
    label: "Deployment",
    hue: "245",
    tools: ["FastAPI", "Streamlit", "Docker", "REST APIs"],
  },
];

function ToolsSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[oklch(0.9_0.08_260)] blur-[160px] opacity-40" />
        <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[oklch(0.9_0.08_300)] blur-[160px] opacity-35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.9_0.02_270)] bg-[oklch(0.98_0.005_260)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.55_0.18_275)] uppercase">
            <Cpu className="h-3 w-3" />
            Tech Stack
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Master{" "}
            <span className="text-gradient-brand">Industry Tools.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Work with the same tools used by engineers at Google, OpenAI, and
            top AI startups. Not theory — hands-on fluency.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-20 space-y-20">
          {toolCategories.map((cat, ci) => (
            <div key={cat.label}>
              <div className="mb-8 flex items-center gap-3">
                <span
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(to right, transparent, oklch(0.85 0.06 ${cat.hue}))`,
                  }}
                />
                <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                  {cat.label}
                </h3>
                <span
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(to left, transparent, oklch(0.85 0.06 ${cat.hue}))`,
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {cat.tools.map((tool, ti) => {
                  const initial = tool
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();
                  return (
                    <div
                      key={tool}
                      className="tool-card animate-card-rise group rounded-2xl p-5"
                      style={{ animationDelay: `${(ci * 0.15) + (ti * 0.06)}s` }}
                    >
                      <div className="flex flex-col items-center gap-3.5 text-center">
                        <span
                          className="tool-icon grid h-12 w-12 place-items-center rounded-xl text-sm font-bold tracking-tight shadow-glass"
                        >
                          {initial}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {tool}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ type, hue }: { type: string; hue: string }) {
  const panel =
    "absolute rounded-md shadow-sm backdrop-blur-sm";

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
          {/* viewfinder corners */}
          <div className="absolute inset-x-4 inset-y-2 rounded-lg border border-white/20" />
          <div className="absolute left-4 top-2 h-3 w-3 rounded-tl-md border-l-2 border-t-2 border-white/50" />
          <div className="absolute right-4 top-2 h-3 w-3 rounded-tr-md border-r-2 border-t-2 border-white/50" />
          <div className="absolute bottom-2 left-4 h-3 w-3 rounded-bl-md border-b-2 border-l-2 border-white/50" />
          <div className="absolute bottom-2 right-4 h-3 w-3 rounded-br-md border-b-2 border-r-2 border-white/50" />
          {/* object */}
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

