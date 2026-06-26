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
