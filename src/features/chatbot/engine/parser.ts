import type { ChatState } from "../types";
import { MAIN_MENU } from "../data/menuData";
import { CURRICULUM } from "../data/knowledgeBase";
import { SYNONYMS } from "../data/synonyms";
import { BACK } from "./actions";


// ── Normalise raw user input ──────────────────────────────────────────────────
export function normaliseInput(raw: string): string {
  return raw.trim().toLowerCase();
}

// ── Resolve a quick-reply / menu label to a target state ─────────────────────
type ParsedIntent =
  | { kind: "navigate"; state: ChatState }
  | { kind: "back" }
  | { kind: "curriculum-topic"; title: string }
  | { kind: "faq-search"; query: string }
  | { kind: "unknown"; raw: string };

// Build two entries per menu item:
//  1. bare label          ("talk to counselor")   — matches typed input after emoji-stripping
//  2. icon + space + label ("📞 talk to counselor") — matches the exact quick-reply chip string
// This makes menu routing immune to emoji-regex edge cases (e.g. variation-selector suffixes
// on multi-codepoint emoji like 🗺️ that the stripping pass may not fully consume).
const MENU_LABEL_MAP: Record<string, ChatState> = Object.fromEntries([
  ...MAIN_MENU.map((m) => [m.label.toLowerCase(), m.targetState]),
  ...MAIN_MENU.map((m) => [`${m.icon} ${m.label}`.toLowerCase(), m.targetState]),
]);

// Additional keyword shortcuts
const KEYWORD_STATE_MAP: Record<string, ChatState> = {
  about: "ABOUT",
  course: "ABOUT",
  roadmap: "ROADMAP",
  curriculum: "CURRICULUM",
  syllabus: "CURRICULUM",
  career: "CAREERS",
  careers: "CAREERS",
  job: "CAREERS",
  jobs: "CAREERS",
  placement: "PLACEMENT",
  placed: "PLACEMENT",
  project: "PROJECTS",
  projects: "PROJECTS",
  price: "PRICING",
  pricing: "PRICING",
  fee: "PRICING",
  cost: "PRICING",
  fees: "PRICING",
  bonus: "BONUSES",
  bonuses: "BONUSES",
  enroll: "ENROLLMENT",
  join: "ENROLLMENT",
  register: "ENROLLMENT",
  admission: "ENROLLMENT",
  faq: "FAQ",
  question: "FAQ",
  help: "FAQ",
  student: "STUDENT_SUPPORT",
  support: "STUDENT_SUPPORT",
  counselor: "CONTACT",
  contact: "CONTACT",
  call: "CONTACT",
  talk: "CONTACT",
  menu: "MAIN_MENU",
  home: "MAIN_MENU",
  start: "MAIN_MENU",
  hi: "MAIN_MENU",
  hello: "MAIN_MENU",
  hey: "MAIN_MENU",
};
function synonymMatch(input: string): string | null {
  for (const [category, words] of Object.entries(SYNONYMS)) {
    if (words.some((word) => input.includes(word))) {
      return category;
    }
  }

  return null;
}
export function parseInput(raw: string): ParsedIntent {
  const input = normaliseInput(raw);

  // Back navigation
  if (raw === BACK || input === "back" || input === "⬅️ back to menu") {
    return { kind: "back" };
  }

  // Strip emoji prefix from quick-reply labels (e.g. "📚 About Course" → "about course")
  const stripped = input.replace(/^[\p{Emoji}\s]+/u, "").trim();

  // Exact menu label match
  const menuState = MENU_LABEL_MAP[stripped] ?? MENU_LABEL_MAP[input];
  if (menuState) return { kind: "navigate", state: menuState };

  // Keyword match (single word)
  const firstWord = input.split(/\s+/)[0];
  const kwState = KEYWORD_STATE_MAP[input] ?? KEYWORD_STATE_MAP[firstWord];
  if (kwState) return { kind: "navigate", state: kwState };

  // Curriculum topic match
  const topicMatch = CURRICULUM.find(
    (t) => input.includes(t.title.toLowerCase()) || t.title.toLowerCase().includes(input),
  );
  if (topicMatch) return { kind: "curriculum-topic", title: topicMatch.title };
  const synonym = synonymMatch(input);

  if (synonym) {
    switch (synonym) {
      case "fee":
        return { kind: "navigate", state: "PRICING" };

      case "curriculum":
        return { kind: "navigate", state: "CURRICULUM" };

      case "placement":
        return { kind: "navigate", state: "PLACEMENT" };

      case "project":
        return { kind: "navigate", state: "PROJECTS" };

      case "contact":
        return { kind: "navigate", state: "CONTACT" };

      case "eligibility":
        return { kind: "navigate", state: "ABOUT" };

      default:
        break;
    }
  }
  // FAQ category quick-reply (e.g. "❓ Placement")
  const faqCategoryStripped = stripped.replace(/^❓\s*/, "");
  const FAQ_CATEGORIES = [
    "general",
    "curriculum",
    "pricing",
    "placement",
    "mentorship",
    "schedule",
    "technical",
    "bonuses",
    "enrollment",
    "student support",
    "about",
    "careers",
  ];
  if (FAQ_CATEGORIES.includes(faqCategoryStripped.toLowerCase())) {
    return { kind: "faq-search", query: faqCategoryStripped };
  }

  // Generic FAQ search for question-like inputs
  if (
    input.includes("?") ||
    input.startsWith("what") ||
    input.startsWith("how") ||
    input.startsWith("when") ||
    input.startsWith("why") ||
    input.startsWith("is ") ||
    input.startsWith("does") ||
    input.startsWith("can ") ||
    input.startsWith("do ")
  ) {
    return { kind: "faq-search", query: raw };
  }

  return { kind: "unknown", raw };
}
