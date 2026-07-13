import { analyzeQuestion } from "./context/questionAnalyzer";
import type { ChatState } from "../types";
import { MAIN_MENU } from "../data/menuData";
import { CURRICULUM } from "../data/knowledgeBase";
import { SYNONYMS } from "../data/synonyms";
import { INTENTS } from "../data/intent";
import { BACK } from "./actions";
import { normalizeText } from "../utils/textNormalization";


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
// Natural language navigation patterns

function synonymMatch(input: string): string | null {
  for (const [category, words] of Object.entries(SYNONYMS)) {
    if (words.some((word) => input.includes(word))) {
      return category;
    }
  }

  return null;
}
const STOP_WORDS = new Set([
  "i",
  "me",
  "my",
  "mine",
  "you",
  "your",
  "yours",
  "we",
  "our",
  "ours",

  "a",
  "an",
  "the",

  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",

  "do",
  "does",
  "did",

  "can",
  "could",
  "would",
  "should",
  "will",

  "please",

  "tell",
  "show",
  "give",
  "know",
  "want",
  "need",
  "explain",

  "to",
  "for",
  "of",
  "about",
  "on",
  "in",
  "at",
  "with",
  "from",

  "more",
  "some",
  "any",

  "what",
  "when",
  "where",
  "why",
  "how",

  "this",
  "that",
  "these",
  "those",

  "get",
  "got",
  "have",
  "has",
  "had",
]);
function scoreIntent(
  input: string,
  phrases: string[],
): number {
  let bestScore = 0;

  const words = input
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .filter(word => !STOP_WORDS.has(word));

  for (const phrase of phrases) {
    const phraseWords = phrase
      .toLowerCase()
      .split(/\s+/)
      .filter(word => !STOP_WORDS.has(word));

    let score = 0;

    for (const word of phraseWords) {
      if (words.includes(word)) {
        score++;
      }
    }

    // Exact phrase gets a bonus
    if (input.includes(phrase)) {
      score += 5;
    }

    // Bonus when every important word matches
    if (
      phraseWords.length > 0 &&
      phraseWords.every(word => words.includes(word))
    ) {
      score += 2;
    }

    bestScore = Math.max(bestScore, score);
  }
  return bestScore;
}
export function parseInput(raw: string): ParsedIntent {
  const input = normalizeText(normaliseInput(raw));
  const questionType = analyzeQuestion(input);
  // Back navigation
  if (
    input === "back" ||
    input === "back to menu"
  ) {
    return { kind: "back" };
  }

  // Strip emoji prefix from quick-reply labels (e.g. "📚 About Course" → "about course")
  const stripped = input.replace(/^[\p{Emoji}\s]+/u, "").trim();

  // Exact menu label match
  const menuState = MENU_LABEL_MAP[stripped] ?? MENU_LABEL_MAP[input];
  if (menuState) return { kind: "navigate", state: menuState };

  // Keyword match (single word)
  // Natural language navigation patterns
  // Natural-language intent matching
  let bestIntent: ChatState | null = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    const score = scoreIntent(
      input,
      intent.phrases,
    );

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent.state;
    }
  }

  if (
    bestIntent &&
    bestScore >= 2 &&
    questionType === "unknown"
  ) {
    console.log(
      "[Intent Match]",
      "Input:", input,
      "Intent:", bestIntent,
      "Score:", bestScore,
    );

    return {
      kind: "navigate",
      state: bestIntent,
    };
  }

  // Keyword match (single word)
  const firstWord = input.split(/\s+/)[0];
  const kwState = KEYWORD_STATE_MAP[input] ?? KEYWORD_STATE_MAP[firstWord];

  if (kwState && questionType === "unknown") {
    return {
      kind: "navigate",
      state: kwState,
    };
  }

  // Curriculum topic match
  const topicMatch = CURRICULUM.find(
    (t) => input.includes(t.title.toLowerCase()) || t.title.toLowerCase().includes(input),
  );
  if (topicMatch) return { kind: "curriculum-topic", title: topicMatch.title };
  const synonym = synonymMatch(input);

  if (synonym) {
    switch (synonym) {
      case "fees":
        return { kind: "navigate", state: "PRICING" };

      case "curriculum":
        return { kind: "navigate", state: "CURRICULUM" };

      case "placement":
        return { kind: "navigate", state: "PLACEMENT" };

      case "projects":
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
  return { kind: "unknown", raw };
}