// ── Contextual follow-up suggestions ──────────────────────────────────────────
// Shown as a second row of chips below the main quick replies on selected
// responses. Keyed by the ChatState the response transitions INTO.
//
// Routing rules — the parser (engine/parser.ts) resolves each string in order:
//   1. Strip leading emoji, then exact-match against MAIN_MENU labels (lowercase)
//   2. Keyword-match the first word against KEYWORD_STATE_MAP
//   3. Fall through to FAQ search (unknown → searchFAQ)
//
// Use strings whose stripped text either exactly matches a menu label OR whose
// first significant word appears in KEYWORD_STATE_MAP so navigation is reliable.
// Strings that fall through to FAQ search are acceptable for query-style topics
// like "EMI Options" or "Scholarships" where FAQ results are the right answer.
//
// To add or update suggestions: edit this file only — no other changes needed.

import type { ChatState } from "../../types";

export const FOLLOW_UP_SUGGESTIONS: Partial<Record<ChatState, string[]>> = {
  // Course Fee → payment sub-topics (FAQ-routed) + direct enrollment
  PRICING: ["💳 EMI Options", "🎓 Scholarships", "✅ Enroll Now"],

  // Placement → career paths (menu label match) + projects (keyword) + counselor (menu label)
  PLACEMENT: ["💼 Career Opportunities", "🚀 Projects", "📞 Talk to Counselor"],

  // Curriculum → careers (menu label) + projects (keyword) + enrollment (keyword)
  CURRICULUM: ["💼 Career Opportunities", "🚀 Projects", "✅ Enroll Now"],

  // About Course → curriculum (menu label) + placement (keyword) + fee (menu label)
  ABOUT: ["🎓 Complete Curriculum", "🏆 Placement", "💰 Course Fee"],
};
