import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  const sections = [
    {
      title: "Course Access",
      content:
        "Course access is provided after successful payment. Access credentials may be delivered via email or through the student dashboard.",
    },
    {
      title: "Intellectual Property",
      content:
        "All course materials, videos, documents, graphics, logos, and website content are the intellectual property of Data Drop Zenith and may not be reproduced without written permission.",
    },
    {
      title: "Pricing",
      content:
        "Course prices are displayed on the website and may change without prior notice. Price changes will not affect completed purchases.",
    },
    {
      title: "Payments",
      content:
        "Payments are processed securely through authorized payment gateway providers.",
    },
    {
      title: "Limitation of Liability",
      content:
        "While we strive to provide high-quality educational content, we do not guarantee employment, salary outcomes, or specific career results.",
    },
    {
      title: "Termination",
      content:
        "We reserve the right to suspend or terminate access in cases of fraud, misuse, unauthorized sharing of course materials, or violations of these Terms.",
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed by the laws of India.",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Effective Date: 31-05-2026
      </p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        By accessing or purchasing any course from{" "}
        <span className="font-semibold text-foreground">Data Drop</span>,
        you agree to these Terms &amp; Conditions.
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          User Responsibilities
        </h2>
        <ul className="mt-4 space-y-2 text-base text-muted-foreground">
          {[
            "Provide accurate information",
            "Keep login credentials confidential",
            "Use the course for personal learning only",
            "Not copy, distribute, record, or resell course content",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.58_0.22_258)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {sections.map((s) => (
        <div key={s.title} className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            {s.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {s.content}
          </p>
        </div>
      ))}

      <p className="mt-10 text-base leading-relaxed text-muted-foreground">
        For any questions regarding these Terms, contact{" "}
        <a
          href="mailto:datadrop@gmail.com"
          className="font-medium text-[oklch(0.58_0.22_258)] hover:underline"
        >
          datadrop@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
