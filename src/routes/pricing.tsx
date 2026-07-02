import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  FolderGit2,
  Award,
  Briefcase,
  Users,
  Zap,
  Sparkles,
  ArrowRight,
  Lock,
  CheckCircle2,
} from "lucide-react";

const pricingFeatures = [
  { label: "18 Months", icon: <CalendarDays className="h-4 w-4" /> },
  { label: "Projects", icon: <FolderGit2 className="h-4 w-4" /> },
  { label: "Certificate", icon: <Award className="h-4 w-4" /> },
  { label: "Career Support", icon: <Briefcase className="h-4 w-4" /> },
  { label: "Live Classes", icon: <Users className="h-4 w-4" /> },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DATA DROP" },
      {
        name: "description",
        content:
          "Invest in your AI career. Get the complete DATA DROP AI Career Program for ₹4,599 — 18 months of live mentorship, projects, and career support.",
      },
      { property: "og:title", content: "Pricing — DATA DROP" },
      {
        property: "og:description",
        content:
          "Invest in your AI career. Get the complete DATA DROP AI Career Program for ₹4,599.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.04_265)] via-[oklch(0.22_0.06_270)] to-[oklch(0.18_0.04_265)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.22_265/0.25)] blur-[140px] opacity-70" />
        <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-[oklch(0.5_0.24_300/0.2)] blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[oklch(0.5_0.22_250/0.2)] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.35_0.04_270/0.6)] bg-[oklch(0.28_0.04_265/0.5)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.78_0.12_265)] uppercase backdrop-blur">
            <Zap className="h-3 w-3" />
            Limited Time Offer
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
            Invest in Your Future{" "}
            <span className="text-gradient-brand">Today.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[oklch(0.82_0.03_260)]">
            Everything you need to become an AI engineer — at a price that makes sense.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-14 max-w-md">
          <div className="pricing-card animate-card-rise relative rounded-[2rem] p-8 sm:p-10">
            {/* Most Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[oklch(0.55_0.22_260)] to-[oklch(0.5_0.26_300)] px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-float">
                <Sparkles className="h-3 w-3" />
                MOST POPULAR
              </div>
            </div>

            {/* Plan Name */}
            <div className="mt-3 text-center">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Complete AI Career Program
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Full access. Lifetime updates. No hidden fees.
              </p>
            </div>

            {/* Price */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg font-medium text-muted-foreground line-through decoration-2">
                  ₹24,999
                </span>
                <span className="rounded-full bg-[oklch(0.95_0.04_25/0.12)] px-2.5 py-0.5 text-xs font-bold text-[oklch(0.55_0.18_25)]">
                  -84%
                </span>
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-6xl font-bold tracking-tighter text-gradient-brand">
                  ₹4,599
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                One-time payment. No subscriptions.
              </p>
            </div>

            {/* CTA */}
            <a href="/enroll" className="group mt-8 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.52_0.26_290)] px-6 py-4 text-base font-bold text-white shadow-float transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-18px_oklch(0.55_0.25_280/0.6)]">
              Enroll Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Guarantee */}
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4 text-[oklch(0.55_0.18_265)]" />
              <span>7-Day Money-Back Guarantee</span>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Features */}
            <ul className="space-y-3.5">
              {pricingFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.95_0.04_265)] to-[oklch(0.93_0.06_300)] text-[oklch(0.45_0.18_275)] shadow-soft">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                  <CheckCircle2 className="ml-auto h-5 w-5 text-[oklch(0.6_0.18_145)]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
