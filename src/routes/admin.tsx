import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Loader2, Users, CheckCircle2, Clock, XCircle, LogOut, RefreshCw } from "lucide-react";
import { getAdminData } from "@/lib/enrollment-fns";
import { getLeadsFn } from "@/lib/lead-fns";
import type { Enrollment } from "@/lib/storage";
import type { Lead } from "@/lib/lead-storage";
import { LeadDashboard } from "@/features/leads/LeadDashboard";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — DATA DROP" }] }),
  component: AdminPage,
});

// ── Shared sub-components ──────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Enrollment["status"] }) {
  if (status === "paid")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
        <CheckCircle2 className="h-3 w-3" /> Paid
      </span>
    );
  if (status === "pending")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-400 border border-amber-500/20">
        <Clock className="h-3 w-3" /> Pending
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/15 px-2.5 py-0.5 text-xs font-semibold text-rose-400 border border-rose-500/20">
      <XCircle className="h-3 w-3" /> Failed
    </span>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

type Tab = "enrollments" | "leads";

function AdminPage() {
  const [password, setPassword] = useState("");
  const [enrollments, setEnrollments] = useState<Enrollment[] | null>(null);
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("enrollments");

  const paidCount = (enrollments ?? []).filter((e) => e.status === "paid").length;
  const pendingCount = (enrollments ?? []).filter((e) => e.status === "pending").length;
  const revenue = (enrollments ?? [])
    .filter((e) => e.status === "paid")
    .reduce((sum, e) => sum + e.amount, 0);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Fetch both datasets in parallel on login
      const [enrollmentData, leadData] = await Promise.all([
        getAdminData({ data: { password } }),
        getLeadsFn({ data: { password } }),
      ]);
      setEnrollments(enrollmentData);
      setLeads(leadData);
    } catch (err) {
      setError(err instanceof Error && err.message === "Unauthorized" ? "Incorrect password." : "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function refresh() {
    setLoading(true);
    try {
      const [enrollmentData, leadData] = await Promise.all([
        getAdminData({ data: { password } }),
        getLeadsFn({ data: { password } }),
      ]);
      setEnrollments(enrollmentData);
      setLeads(leadData);
    } catch {
      setError("Session expired. Please log in again.");
      setEnrollments(null);
      setLeads(null);
    } finally {
      setLoading(false);
    }
  }

  // ── Login Screen ─────────────────────────────────────────────────────────────
  if (!enrollments) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.04_265)] via-[oklch(0.22_0.06_270)] to-[oklch(0.18_0.04_265)]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.22_265/0.18)] blur-[120px]" />
        </div>

        <div className="relative flex min-h-screen items-center justify-center px-5">
          <div className="w-full max-w-sm">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Lock className="h-6 w-6 text-[oklch(0.68_0.18_265)]" />
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Access</h1>
              <p className="mt-1.5 text-sm text-white/40">Enter your admin password to continue.</p>
            </div>

            <form onSubmit={login} className="space-y-4">
              <input
                type="password"
                placeholder="Admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                className="w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:ring-2 focus:ring-[oklch(0.6_0.22_270)]"
              />
              {error && (
                <p className="text-sm text-rose-400 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading || !password}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[oklch(0.58_0.22_258)] to-[oklch(0.52_0.26_290)] px-6 py-3.5 text-sm font-bold text-white shadow-float transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
                {loading ? "Verifying…" : "Unlock Dashboard"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // ── Dashboard ────────────────────────────────────────────────────────────────
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.04_265)] via-[oklch(0.22_0.06_270)] to-[oklch(0.18_0.04_265)]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-20 sm:px-8 lg:pt-36">
        {/* Header row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-white/40">
              {enrollments.length} enrollment{enrollments.length !== 1 ? "s" : ""} · {(leads ?? []).length} lead{(leads ?? []).length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={refresh}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 transition hover:bg-white/10 disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={() => { setEnrollments(null); setLeads(null); setPassword(""); setActiveTab("enrollments"); setError(""); }}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-rose-400 transition hover:bg-rose-500/10"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="mb-6 flex gap-1 rounded-xl border border-white/10 bg-white/4 p-1 w-fit">
          {(["enrollments", "leads"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-5 py-2 text-sm font-medium capitalize transition ${
                activeTab === tab
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Enrollments tab ──────────────────────────────────────────────── */}
        {activeTab === "enrollments" && (
          <>
            {/* Stats */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: "Total Enrollments", value: enrollments.length, icon: <Users className="h-5 w-5" />, color: "oklch(0.68_0.18_265)" },
                { label: "Paid", value: paidCount, icon: <CheckCircle2 className="h-5 w-5" />, color: "oklch(0.6_0.2_155)" },
                { label: "Revenue (INR)", value: `₹${revenue.toLocaleString("en-IN")}`, icon: <CheckCircle2 className="h-5 w-5" />, color: "oklch(0.68_0.2_85)" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/60">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/40">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pending warning */}
            {pendingCount > 0 && (
              <div className="mb-6 rounded-xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm text-amber-300 flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                {pendingCount} pending enrollment{pendingCount > 1 ? "s" : ""} — payment not yet completed or verified.
              </div>
            )}

            {/* Table */}
            {enrollments.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-16 text-center">
                <Users className="mx-auto mb-3 h-10 w-10 text-white/20" />
                <p className="text-white/40">No enrollments yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-white/40">
                      <th className="px-5 py-4 text-left">Student</th>
                      <th className="px-5 py-4 text-left">Phone</th>
                      <th className="px-5 py-4 text-left">Course</th>
                      <th className="px-5 py-4 text-right">Amount</th>
                      <th className="px-5 py-4 text-left">Status</th>
                      <th className="px-5 py-4 text-left">Payment ID</th>
                      <th className="px-5 py-4 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {enrollments.map((e) => (
                      <tr key={e.id} className="transition hover:bg-white/5">
                        <td className="px-5 py-4">
                          <p className="font-medium text-white">{e.name}</p>
                          <p className="text-xs text-white/40">{e.email}</p>
                        </td>
                        <td className="px-5 py-4 text-white/60">{e.phone}</td>
                        <td className="px-5 py-4 text-white/80">{e.course}</td>
                        <td className="px-5 py-4 text-right font-semibold text-white">
                          ₹{e.amount.toLocaleString("en-IN")}
                        </td>
                        <td className="px-5 py-4">
                          <StatusBadge status={e.status} />
                        </td>
                        <td className="px-5 py-4">
                          {e.razorpayPaymentId ? (
                            <span className="font-mono text-xs text-white/50">
                              {e.razorpayPaymentId}
                            </span>
                          ) : (
                            <span className="text-white/20">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-xs text-white/40">
                          {new Date(e.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* ── Leads tab ────────────────────────────────────────────────────── */}
        {activeTab === "leads" && (
          <LeadDashboard leads={leads ?? []} />
        )}
      </div>
    </section>
  );
}
