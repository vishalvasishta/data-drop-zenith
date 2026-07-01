import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  component: RefundPage,
});

function RefundPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Refund &amp; Cancellation Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Effective Date: 31-05-2026
      </p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        Customer satisfaction is important to us. Please read this policy carefully before purchasing any course.
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Refund Eligibility
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Refund requests are accepted within{" "}
          <span className="font-semibold text-foreground">7 days</span> of purchase, provided that:
        </p>
        <ul className="mt-4 space-y-2 text-base text-muted-foreground">
          {[
            "Less than 10% of the course content has been accessed.",
            "No course completion certificate has been issued.",
            "The request complies with this policy.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.58_0.22_258)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Non-Refundable Situations
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Refunds will not be provided if:
        </p>
        <ul className="mt-4 space-y-2 text-base text-muted-foreground">
          {[
            "The refund request is made after the eligible period.",
            "A substantial portion of the course has already been accessed.",
            "The purchase was made using fraudulent or unauthorized payment methods.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.58_0.22_258)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Cancellation
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Customers may cancel their enrollment within the eligible refund period by contacting our support team.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Refund Processing
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Approved refunds will be processed to the original payment method within{" "}
          <span className="font-semibold text-foreground">7–10 business days</span>, depending on the payment provider.
        </p>
      </div>

      <p className="mt-10 text-base leading-relaxed text-muted-foreground">
        For assistance, email{" "}
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
