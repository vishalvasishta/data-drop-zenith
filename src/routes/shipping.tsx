import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping")({
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Shipping &amp; Delivery Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Effective Date: 31-05-2026
      </p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">Data Drop</span> provides digital educational products only.
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Delivery Method
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          No physical products are shipped. After successful payment, students will receive access to their purchased course through email and/or the student dashboard.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Delivery Time
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Course access is generally provided immediately after successful payment. In some cases, activation may take up to{" "}
          <span className="font-semibold text-foreground">24 hours</span> due to technical verification or maintenance.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Support
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          If you do not receive course access within 24 hours, please contact:
        </p>
        <p className="mt-3 text-base text-muted-foreground">
          Email:{" "}
          <a
            href="mailto:datadrop@gmail.com"
            className="font-medium text-[oklch(0.58_0.22_258)] hover:underline"
          >
            datadrop@gmail.com
          </a>
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Our support team will resolve the issue as quickly as possible.
        </p>
      </div>
    </main>
  );
}
