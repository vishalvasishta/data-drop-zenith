import { Link } from "@tanstack/react-router";
import { Mail, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/assets/logo.png"
                alt="Data Drop Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-[17px] font-semibold tracking-tight">
                Data Drop
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              India&apos;s most practical AI career program. Master AI &amp; ML
              through live mentorship, real-world projects, and career guidance.
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">
                Subscribe to our newsletter
              </p>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none ring-ring transition-all focus:ring-2"
                />
                <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.52_0.26_290)] px-4 py-2.5 text-white shadow-soft transition-all hover:-translate-y-0.5">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                {[
                  { label: "Home", to: "/" },
                  { label: "Curriculum", to: "/curriculum" },
                  { label: "Projects", to: "/projects" },
                  { label: "Pricing", to: "/pricing" },
                  { label: "FAQ", to: "/faq" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Contact</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/918330961514?text=Hello%20can%20I%20get%20more%20info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Legal</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Shipping &amp; Delivery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Data Drop. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
