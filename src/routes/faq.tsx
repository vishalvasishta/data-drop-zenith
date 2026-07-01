import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "This course is designed for anyone looking to break into AI and Machine Learning — students, working professionals, and career switchers. Whether you come from a technical background or are completely new to programming, our structured curriculum and mentor support will guide you from fundamentals to advanced AI engineering.",
  },
  {
    question: "Is it beginner friendly?",
    answer:
      "Absolutely. We start from absolute basics — Python programming, logic building, and core math concepts. No prior coding or AI experience is required. Our live mentorship and step-by-step projects ensure you never feel lost, even if you're starting from scratch.",
  },
  {
    question: "How long is the course?",
    answer:
      "The complete AI Career Program spans 18 months. This includes foundational training, hands-on projects, advanced specializations, and dedicated interview preparation. You also get lifetime access to all course materials and future updates.",
  },
  {
    question: "Will I get projects?",
    answer:
      "Yes. You will build 50+ real-world projects throughout the program — from a ChatGPT clone and AI Resume Builder to Object Detection systems and Fraud Detection models. Each project is designed to be portfolio-ready and interview-worthy.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Upon successful completion of the program and required projects, you will receive an industry-recognized certificate. This certificate validates your skills in Python, Machine Learning, Deep Learning, Generative AI, and AI Engineering.",
  },
  {
    question: "Do you provide career guidance?",
    answer:
      "Yes, career support is a core part of our program. You get resume reviews, LinkedIn optimization, mock interviews, referral opportunities, and direct connections with hiring partners. Our goal is not just to teach you AI, but to help you land your dream job.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — DATA DROP" },
      {
        name: "description",
        content:
          "Find answers to frequently asked questions about the DATA DROP AI Career Program — duration, projects, certification, and career support.",
      },
      { property: "og:title", content: "FAQ — DATA DROP" },
      {
        property: "og:description",
        content:
          "Find answers to frequently asked questions about the DATA DROP AI Career Program.",
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-[oklch(0.92_0.06_265)] blur-[160px] opacity-40" />
        <div className="absolute -right-32 bottom-1/4 h-[480px] w-[480px] rounded-full bg-[oklch(0.92_0.06_300)] blur-[160px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 pt-28 pb-32 sm:px-8 lg:pt-36 lg:pb-40">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[oklch(0.9_0.02_270)] bg-[oklch(0.98_0.005_260)] px-3 py-1 text-[11px] font-semibold tracking-widest text-[oklch(0.55_0.18_275)] uppercase">
            <HelpCircle className="h-3 w-3" />
            FAQ
          </span>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Frequently Asked{" "}
            <span className="text-gradient-brand">Questions.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Everything you need to know about the program. Can&apos;t find what
            you&apos;re looking for? Reach out to our team.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="faq-card rounded-2xl px-6 py-1 border-b-0"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline data-[state=open]:text-[oklch(0.55_0.22_265)]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
