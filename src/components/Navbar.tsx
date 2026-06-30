import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", to: "/" },
    { label: "Curriculum", to: "/curriculum" },
    { label: "Projects", to: "/projects" },
    { label: "Pricing", to: "/pricing" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/assets/logo.png"
            alt="Data Drop Logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
          <span className="text-[17px] font-semibold tracking-tight">
            Data Drop
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "rounded-full px-3.5 py-2 text-sm font-medium bg-secondary text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="https://wa.me/918330961514?text=Hello%20can%20I%20get%20more%20info" target="_blank" rel="noopener noreferrer" className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.55_0.25_290)] px-4 py-2 text-sm font-semibold text-white shadow-float transition-all hover:shadow-[0_18px_40px_-12px_oklch(0.55_0.25_280/0.55)] hover:-translate-y-0.5 md:inline-flex">
            Enroll Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
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
                <Link
                  to={l.to}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href="https://wa.me/918330961514?text=Hello%20can%20I%20get%20more%20info" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.55_0.25_290)] px-4 py-2.5 text-sm font-semibold text-white shadow-float">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
