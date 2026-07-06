// ── Lead Intelligence ──────────────────────────────────────────────────────────
// Pure logic only — no React, no side-effects, no UI imports.
// This module answers three questions:
//   1. What interest label (if any) does a ChatState transition represent?
//   2. What objection label (if any) did the user express?
//   3. What is the lead score for a given profile snapshot?
//
// Call sites: hooks/useChatbot.ts only.

import type { ChatState, StudentProfile } from "../types";
import { OBJECTION_RULES } from "../data/conversations/objections";

// ── 1. Interest tracking ───────────────────────────────────────────────────────
// Maps each navigable ChatState to a human-readable interest label.
// States omitted here (WELCOME, MAIN_MENU, THANK_YOU …) produce no interest signal.
export const INTEREST_STATES: Partial<Record<ChatState, string>> = {
  ABOUT: "About Course",
  ROADMAP: "Roadmap",
  CURRICULUM: "Curriculum",
  CAREERS: "Careers",
  PLACEMENT: "Placement",
  PROJECTS: "Projects",
  PRICING: "Pricing",
  BONUSES: "Bonuses",
  FAQ: "FAQ",
  CONTACT: "Contact",
};

// ── 2. Objection tracking ──────────────────────────────────────────────────────
// Parallel label array — same index as OBJECTION_RULES in data/conversations/objections.ts.
// Reuses the existing keyword lists; no duplication.
const OBJECTION_RULE_LABELS: string[] = [
  "Pricing Concern",        // expensive / emi / costly …
  "No Coding Background",   // never coded / beginner …
  "Placement Doubt",        // job guarantee / will i get a job …
  "Time Constraint",        // busy schedule / no time …
  "AI Job Fear",            // ai will replace / robots taking jobs …
];

/** Returns the label for the objection expressed in rawInput, or null if none. */
export function detectObjectionLabel(rawInput: string): string | null {
  const input = rawInput.trim().toLowerCase();
  for (let i = 0; i < OBJECTION_RULES.length; i++) {
    if (OBJECTION_RULES[i].keywords.some((k) => input.includes(k))) {
      return OBJECTION_RULE_LABELS[i] ?? "General Objection";
    }
  }
  return null;
}

// ── 3. Lead score ──────────────────────────────────────────────────────────────
// Points awarded per signal. Capped at 100.
//
//   Profile completion:
//     Role selected             +10
//     Education selected        +10
//     Career goal selected      +10
//
//   Page-view interests:
//     Pricing viewed            +20
//     Placement viewed          +15
//     Curriculum viewed         +10
//     Contact (callback req.)   +30
//
//   Objection signals (high purchase-intent):
//     Pricing Concern (EMI)     +10
//
//   Maximum                     100

const INTEREST_SCORE: Partial<Record<string, number>> = {
  Pricing: 20,
  Placement: 15,
  Curriculum: 10,
  Contact: 30,
};

const OBJECTION_SCORE: Partial<Record<string, number>> = {
  "Pricing Concern": 10,
};

/** Pure function — compute lead score from any profile snapshot. */
export function computeLeadScore(profile: StudentProfile): number {
  let score = 0;

  // Profile completion signals
  if (profile.role !== null) score += 10;
  if (profile.education !== null) score += 10;
  if (profile.careerGoal !== null) score += 10;

  // Page-view interest signals
  for (const interest of profile.interests) {
    score += INTEREST_SCORE[interest] ?? 0;
  }

  // Objection / high-intent signals
  for (const objection of profile.objections) {
    score += OBJECTION_SCORE[objection] ?? 0;
  }

  return Math.min(score, 100);
}
