// ── Objection handling ─────────────────────────────────────────────────────────
// A lightweight, keyword-based detection layer that runs BEFORE the existing
// parser/state machine. It never touches ChatState — it only recognizes common
// sales objections in free-text user input and returns a dedicated response.
// If no objection is detected, the caller falls through to the normal parser.

import { OBJECTION_RULES } from "../data/conversations/objections";

export function detectObjection(rawInput: string): string | null {
  const input = rawInput.trim().toLowerCase();
  if (!input) return null;

  for (const rule of OBJECTION_RULES) {
    if (rule.keywords.some((keyword) => input.includes(keyword))) {
      return rule.response;
    }
  }

  return null;
}
