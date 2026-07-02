import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { z } from "zod";

const searchSchema = z.object({
  name: z.string().optional().default(""),
  course: z.string().optional().default(""),
});

export const Route = createFileRoute("/success")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [{ title: "Enrollment Confirmed — DATA DROP" }],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const { name, course } = Route.useSearch();

  const nextSteps = [
    {
      icon: <BookOpen className="h-5 w-5 text-[oklch(0.68_0.18_265)]" />,
      title: "Check your inbox",
      desc: "You'll receive a welcome email with login credentials and onboarding instructions within a few minutes.",
    },
    {
      icon: <Users className="h-5 w-5 text-[oklch(0.68_0.18_265)]" />,
      title: "Join the community",
      desc: "A link to our private student Discord / WhatsApp group will be included in your welcome email.",
    },
    {
      icon: <Award className="h-5 w-5 text-[oklch(0.68_0.18_265)]" />,
      title: "Start learning",
      desc: "Your first live session schedule and pre-work will be shared within 24 hours. Get ready!",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.04_265)] via-[oklch(0.22_0.06_270)] to-[oklch(0.18_0.04_265)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.5_0.22_155/0.18)] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.22_265/0.15)] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-xl px-5 pt-28 pb-24 text-center sm:px-8 lg:pt-36">
        {/* Success icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-400/30 bg-emerald-500/10 shadow-[0_0_40px_oklch(0.6_0.2_155/0.3)]">
          <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Payment Confirmed! 🎉
        </h1>

        {name && (
          <p className="mt-3 text-lg font-medium text-[oklch(0.82_0.04_265)]">
            Welcome aboard,{" "}
            <span className="text-gradient-brand font-semibold">{name}</span>!
          </p>
        )}

        {course && (
          <p className="mt-2 text-sm text-[oklch(0.62_0.04_265)]">
            You're now enrolled in <span className="font-semibold text-white/80">{course}</span>.
          </p>
        )}

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Next steps */}
        <div className="space-y-4 text-left">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
            What happens next
          </p>
          {nextSteps.map((step) => (
            <div
              key={step.title}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.25_0.06_265/0.6)] border border-white/10">
                {step.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.52_0.26_290)] px-6 py-3.5 text-sm font-semibold text-white shadow-float transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-18px_oklch(0.55_0.25_280/0.6)]"
        >
          Back to Home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
