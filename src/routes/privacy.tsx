import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      items: [
        "Name",
        "Email address",
        "Phone number",
        "Billing information",
        "Course enrollment details",
        "Device and browser information",
        "Website usage data through cookies and analytics",
      ],
    },
    {
      title: "How We Use Your Information",
      items: [
        "Process course enrollments",
        "Provide access to purchased courses",
        "Process payments through secure payment gateways",
        "Send important course-related communications",
        "Provide customer support",
        "Improve our services",
        "Comply with legal obligations",
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Effective Date: 31-05-2026
      </p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        Data Drop respects your privacy and is committed to protecting your personal information.
      </p>

      {sections.map((s) => (
        <div key={s.title} className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-foreground">{s.title}</h2>
          <ul className="mt-4 space-y-2 text-base text-muted-foreground">
            {s.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.58_0.22_258)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Payment Information</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Payments are processed through trusted third-party payment gateways. We do not store your complete debit card, credit card, or banking information on our servers.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Cookies</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Our website may use cookies to improve user experience, remember preferences, and analyze website performance.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Data Security</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          We implement reasonable technical and organizational measures to safeguard your information. However, no method of internet transmission or electronic storage is completely secure.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Third-Party Services</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          We may use trusted third-party services such as payment gateways, analytics providers, email service providers, and hosting providers to operate our business.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Your Rights</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          You may request access to, correction of, or deletion of your personal information by contacting us.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Changes to This Policy</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
        </p>
      </div>

      <p className="mt-10 text-base leading-relaxed text-muted-foreground">
        For privacy-related concerns, contact us at{" "}
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
