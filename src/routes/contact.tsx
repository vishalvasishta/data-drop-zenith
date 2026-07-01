import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        We're here to help. If you have any questions regarding admissions, payments, course access, technical issues, or general inquiries, please reach out to us using the details below.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {/* Email */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_258)]">
              <Mail className="h-5 w-5 text-[oklch(0.58_0.22_258)]" />
            </div>
            <h2 className="text-sm font-semibold text-foreground">Email</h2>
          </div>
          <a
            href="mailto:datadrop@gmail.com"
            className="mt-3 block text-sm text-[oklch(0.58_0.22_258)] hover:underline"
          >
            datadrop@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_258)]">
              <Phone className="h-5 w-5 text-[oklch(0.58_0.22_258)]" />
            </div>
            <h2 className="text-sm font-semibold text-foreground">Phone</h2>
          </div>
          <a
            href="tel:+918330961514"
            className="mt-3 block text-sm text-[oklch(0.58_0.22_258)] hover:underline"
          >
            +91 8330961514
          </a>
        </div>

        {/* Support Hours */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_258)]">
              <Clock className="h-5 w-5 text-[oklch(0.58_0.22_258)]" />
            </div>
            <h2 className="text-sm font-semibold text-foreground">Support Hours</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Monday – Saturday</p>
          <p className="text-sm text-muted-foreground">10:00 AM – 7:00 PM (IST)</p>
        </div>

        {/* Business Name */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_258)]">
              <span className="text-sm font-bold text-[oklch(0.58_0.22_258)]">DD</span>
            </div>
            <h2 className="text-sm font-semibold text-foreground">Business Name</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Data Drop</p>
        </div>
      </div>

      {/* Address */}
      <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_258)]">
            <MapPin className="h-5 w-5 text-[oklch(0.58_0.22_258)]" />
          </div>
          <h2 className="text-sm font-semibold text-foreground">Business Address</h2>
        </div>
        <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
          1-5-50, Vikas Nagar<br />
          First Block, Vikas Nagar Road<br />
          Mancherial, TELANGANA<br />
          District: Mancherial — Pin 504208
        </address>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        We aim to respond to all inquiries within <span className="font-medium text-foreground">24–48 business hours</span>.
      </p>
    </main>
  );
}
