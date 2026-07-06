import { ArrowUpDown, ArrowUp, ArrowDown, Users, Trophy, Filter, X } from "lucide-react";
import type { Lead } from "@/lib/lead-storage";
import { useLeadDashboard, type SortField } from "./useLeadDashboard";

// ── Helpers ────────────────────────────────────────────────────────────────────

function stripEmoji(label: string): string {
  return label.replace(/^[\p{Emoji}\uFE0F\s]+/u, "").trim();
}

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 70
      ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
      : score >= 40
        ? "bg-amber-500/15 text-amber-400 border-amber-500/20"
        : "bg-white/8 text-white/40 border-white/10";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-bold ${color}`}
    >
      <Trophy className="h-3 w-3" />
      {score}
    </span>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-violet-500/12 border border-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-300">
      {label}
    </span>
  );
}

function SortIcon({ field, active, dir }: { field: SortField; active: SortField; dir: "asc" | "desc" }) {
  if (field !== active) return <ArrowUpDown className="h-3.5 w-3.5 opacity-30" />;
  return dir === "asc"
    ? <ArrowUp className="h-3.5 w-3.5 text-violet-400" />
    : <ArrowDown className="h-3.5 w-3.5 text-violet-400" />;
}

// ── Filter bar ─────────────────────────────────────────────────────────────────

interface FilterBarProps {
  roleOptions: string[];
  careerGoalOptions: string[];
  filters: { role: string; careerGoal: string; minScore: number };
  hasActiveFilters: boolean;
  onFilter: (key: "role" | "careerGoal" | "minScore", value: string | number) => void;
  onReset: () => void;
}

const SCORE_THRESHOLDS = [0, 20, 40, 60, 80] as const;

function FilterBar({ roleOptions, careerGoalOptions, filters, hasActiveFilters, onFilter, onReset }: FilterBarProps) {
  const selectClass =
    "rounded-lg border border-white/12 bg-white/6 px-3 py-1.5 text-xs text-white/80 outline-none transition focus:ring-1 focus:ring-violet-500/50 cursor-pointer";

  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      <Filter className="h-3.5 w-3.5 text-white/30 shrink-0" />

      {/* Role */}
      <select
        value={filters.role}
        onChange={(e) => onFilter("role", e.target.value)}
        className={selectClass}
        aria-label="Filter by role"
      >
        <option value="">All roles</option>
        {roleOptions.map((r) => (
          <option key={r} value={r}>
            {stripEmoji(r)}
          </option>
        ))}
      </select>

      {/* Career Goal */}
      <select
        value={filters.careerGoal}
        onChange={(e) => onFilter("careerGoal", e.target.value)}
        className={selectClass}
        aria-label="Filter by career goal"
      >
        <option value="">All goals</option>
        {careerGoalOptions.map((g) => (
          <option key={g} value={g}>
            {stripEmoji(g)}
          </option>
        ))}
      </select>

      {/* Min score */}
      <select
        value={filters.minScore}
        onChange={(e) => onFilter("minScore", Number(e.target.value))}
        className={selectClass}
        aria-label="Filter by minimum lead score"
      >
        {SCORE_THRESHOLDS.map((t) => (
          <option key={t} value={t}>
            {t === 0 ? "Any score" : `Score ≥ ${t}`}
          </option>
        ))}
      </select>

      {hasActiveFilters && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1 rounded-lg border border-white/12 bg-white/5 px-2.5 py-1.5 text-xs text-white/50 transition hover:text-white/80"
        >
          <X className="h-3 w-3" />
          Clear
        </button>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

interface LeadDashboardProps {
  leads: Lead[];
}

export function LeadDashboard({ leads }: LeadDashboardProps) {
  const {
    filteredLeads,
    sortField,
    sortDir,
    filters,
    roleOptions,
    careerGoalOptions,
    toggleSort,
    setFilter,
    resetFilters,
    hasActiveFilters,
  } = useLeadDashboard(leads);

  const avgScore =
    leads.length > 0
      ? Math.round(leads.reduce((s, l) => s + l.leadScore, 0) / leads.length)
      : 0;
  const hotLeads = leads.filter((l) => l.leadScore >= 70).length;

  return (
    <div>
      {/* Summary stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Total Leads", value: leads.length, icon: <Users className="h-5 w-5" />, color: "oklch(0.68_0.18_265)" },
          { label: "Hot Leads (≥70)", value: hotLeads, icon: <Trophy className="h-5 w-5" />, color: "oklch(0.6_0.2_155)" },
          { label: "Avg Lead Score", value: avgScore, icon: <Trophy className="h-5 w-5" />, color: "oklch(0.68_0.2_85)" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8"
                style={{ color: stat.color }}
              >
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

      {/* Filters */}
      <FilterBar
        roleOptions={roleOptions}
        careerGoalOptions={careerGoalOptions}
        filters={filters}
        hasActiveFilters={hasActiveFilters}
        onFilter={(key, value) => setFilter(key, value as never)}
        onReset={resetFilters}
      />

      {/* Table / empty state */}
      {leads.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-16 text-center">
          <Users className="mx-auto mb-3 h-10 w-10 text-white/20" />
          <p className="text-white/40">No leads captured yet.</p>
          <p className="mt-1 text-xs text-white/20">
            Leads appear here once a visitor submits the callback form in the chatbot.
          </p>
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-16 text-center">
          <Filter className="mx-auto mb-3 h-10 w-10 text-white/20" />
          <p className="text-white/40">No leads match the current filters.</p>
          <button onClick={resetFilters} className="mt-3 text-xs text-violet-400 hover:underline">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold uppercase tracking-wider text-white/40">
                <th className="px-5 py-4 text-left">Lead</th>
                <th className="px-5 py-4 text-left">Role</th>
                <th className="px-5 py-4 text-left">Education</th>
                <th className="px-5 py-4 text-left">Goal</th>
                {/* Sortable: Lead Score */}
                <th className="px-5 py-4 text-left">
                  <button
                    onClick={() => toggleSort("leadScore")}
                    className="inline-flex items-center gap-1 transition hover:text-white/70"
                    aria-label="Sort by lead score"
                  >
                    Score
                    <SortIcon field="leadScore" active={sortField} dir={sortDir} />
                  </button>
                </th>
                <th className="px-5 py-4 text-left">Interests</th>
                <th className="px-5 py-4 text-left">Objections</th>
                {/* Sortable: Date */}
                <th className="px-5 py-4 text-left">
                  <button
                    onClick={() => toggleSort("createdAt")}
                    className="inline-flex items-center gap-1 transition hover:text-white/70"
                    aria-label="Sort by date"
                  >
                    Date
                    <SortIcon field="createdAt" active={sortField} dir={sortDir} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="transition hover:bg-white/[0.03]">
                  {/* Lead name + phone */}
                  <td className="px-5 py-4">
                    <p className="font-medium text-white">{lead.name}</p>
                    <p className="text-xs text-white/40">{lead.phone}</p>
                  </td>
                  {/* Role */}
                  <td className="px-5 py-4 text-white/70">
                    {lead.role ? stripEmoji(lead.role) : <span className="text-white/20">—</span>}
                  </td>
                  {/* Education */}
                  <td className="px-5 py-4 text-white/60 text-xs max-w-[140px]">
                    {lead.education ?? <span className="text-white/20">—</span>}
                  </td>
                  {/* Career Goal */}
                  <td className="px-5 py-4 text-white/60 text-xs max-w-[140px]">
                    {lead.careerGoal ? stripEmoji(lead.careerGoal) : <span className="text-white/20">—</span>}
                  </td>
                  {/* Lead Score */}
                  <td className="px-5 py-4">
                    <ScoreBadge score={lead.leadScore} />
                  </td>
                  {/* Interests */}
                  <td className="px-5 py-4">
                    {lead.interests.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {lead.interests.map((i) => (
                          <Chip key={i} label={i} />
                        ))}
                      </div>
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                  {/* Objections */}
                  <td className="px-5 py-4">
                    {lead.objections.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {lead.objections.map((o) => (
                          <span
                            key={o}
                            className="inline-block rounded-full bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[10px] font-medium text-rose-300"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                  {/* Date */}
                  <td className="px-5 py-4 text-xs text-white/40 whitespace-nowrap">
                    {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Row count footer */}
          <div className="border-t border-white/8 px-5 py-3 text-xs text-white/30">
            Showing {filteredLeads.length} of {leads.length} lead{leads.length !== 1 ? "s" : ""}
          </div>
        </div>
      )}
    </div>
  );
}
