import { useState, useMemo } from "react";
import type { Lead } from "@/lib/lead-storage";

// ── Sort / filter configuration ────────────────────────────────────────────────

export type SortField = "leadScore" | "createdAt";
export type SortDir = "asc" | "desc";

export interface LeadFilters {
  role: string;        // "" = all
  careerGoal: string;  // "" = all
  minScore: number;    // 0 = no minimum
}

const DEFAULT_FILTERS: LeadFilters = { role: "", careerGoal: "", minScore: 0 };

// ── Hook ───────────────────────────────────────────────────────────────────────

export function useLeadDashboard(leads: Lead[]) {
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [filters, setFilters] = useState<LeadFilters>(DEFAULT_FILTERS);

  // Derived: unique values for filter dropdowns
  const roleOptions = useMemo(
    () => Array.from(new Set(leads.map((l) => l.role).filter(Boolean) as string[])).sort(),
    [leads],
  );

  const careerGoalOptions = useMemo(
    () => Array.from(new Set(leads.map((l) => l.careerGoal).filter(Boolean) as string[])).sort(),
    [leads],
  );

  // Derived: filtered then sorted
  const filteredLeads = useMemo(() => {
    let result = [...leads];

    if (filters.role) {
      result = result.filter((l) => l.role === filters.role);
    }
    if (filters.careerGoal) {
      result = result.filter((l) => l.careerGoal === filters.careerGoal);
    }
    if (filters.minScore > 0) {
      result = result.filter((l) => l.leadScore >= filters.minScore);
    }

    result.sort((a, b) => {
      let delta = 0;
      if (sortField === "leadScore") {
        delta = a.leadScore - b.leadScore;
      } else {
        delta = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return sortDir === "asc" ? delta : -delta;
    });

    return result;
  }, [leads, filters, sortField, sortDir]);

  // Toggle sort: clicking the same column flips direction; new column defaults to desc.
  function toggleSort(field: SortField) {
    if (field === sortField) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  }

  function setFilter<K extends keyof LeadFilters>(key: K, value: LeadFilters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  const hasActiveFilters =
    filters.role !== "" || filters.careerGoal !== "" || filters.minScore > 0;

  return {
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
  };
}
