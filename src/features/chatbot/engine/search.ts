import { FAQ_DATA, type FAQItem } from "../data/knowledgeBase";
import { SYNONYMS } from "./synonyms";
const SEARCH_WEIGHTS = {
  EXACT_QUESTION_MATCH: 100,
  QUESTION_PHRASE_MATCH: 40,
  ANSWER_PHRASE_MATCH: 20,
  EXACT_KEYWORD_MATCH: 15,
  KEYWORD_CONTAINS_TOKEN: 8,
  TOKEN_CONTAINS_KEYWORD: 6,
} as const;

const SEARCH_THRESHOLDS = {
  MIN_FAQ_SCORE: 10,
} as const;
export interface SearchResult {
  faq: FAQItem;
  score: number;
}


// 👇 Add this function below the interface

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");
}
function keywordHasToken(keyword: string, token: string): boolean {
  if (token.length < 3) {
    return false;
  }

  const keywordTokens = normalize(keyword).split(/\s+/);

  return keywordTokens.includes(token);
}
function tokenMatchesKeyword(token: string, keyword: string): boolean {
  if (keyword.length < 3) {
    return false;
  }

  const tokenWords = normalize(token).split(/\s+/);

  return tokenWords.includes(normalize(keyword));
}
export function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 1);
}
function expandWords(words: string[]): string[] {
  const expanded = new Set<string>();

  for (const word of words) {
    expanded.add(word);

    for (const variants of Object.values(SYNONYMS)) {
      if (variants.includes(word)) {
        variants.forEach((v) => expanded.add(v));
      }
    }
  }

  return [...expanded];
}
function scoreFAQ(query: string, faq: FAQItem): number {
  let score = 0;
  const reasons: string[] = [];

  const normalizedQuery = normalize(query);
  const queryWords = expandWords(tokenize(query));

  const question = normalize(faq.question);
  const answer = normalize(faq.answer);
  const keywords = expandWords(faq.keywords.map(normalize));

  // Exact question match
  if (normalizedQuery === question) {
    score += SEARCH_WEIGHTS.EXACT_QUESTION_MATCH;
  }

  // Query appears in question
  if (question.includes(normalizedQuery)) {
    score += SEARCH_WEIGHTS.QUESTION_PHRASE_MATCH;
  }

  // Query appears in answer
  if (answer.includes(normalizedQuery)) {
    score += SEARCH_WEIGHTS.ANSWER_PHRASE_MATCH;
  }

  // Keyword scoring
  const matched = new Set<string>();

  for (const word of queryWords) {
    for (const keyword of keywords) {
      if (matched.has(keyword)) continue;

      if (word === keyword) {
        score += SEARCH_WEIGHTS.EXACT_KEYWORD_MATCH;
        matched.add(keyword);
      } else if (keywordHasToken(keyword, word)) {
        score += SEARCH_WEIGHTS.KEYWORD_CONTAINS_TOKEN;
        matched.add(keyword);
      } else if (tokenMatchesKeyword(word, keyword)) {
        score += SEARCH_WEIGHTS.TOKEN_CONTAINS_KEYWORD;
        matched.add(keyword);
      }
    }
  }

  return score;
}
export function searchFAQs(query: string): SearchResult | null {
  const results: SearchResult[] = FAQ_DATA.map((faq) => ({
    faq,
    score: scoreFAQ(query, faq),
  }));

  results.sort((a, b) => b.score - a.score);

  const best = results[0];

  if (!best || best.score < SEARCH_THRESHOLDS.MIN_FAQ_SCORE) {
    return null;
  }

  return best;
}