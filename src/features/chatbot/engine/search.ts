import { FAQ_DATA, type FAQItem } from "../data/knowledgeBase";
import { SYNONYMS } from "./synonyms";

export interface SearchResult {
  faq: FAQItem;
  score: number;
}


// 👇 Add this function below the interface

function normalize(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");
}
function tokenize(text: string): string[] {
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

  const normalizedQuery = normalize(query);
  const queryWords = expandWords(tokenize(query));

  const question = normalize(faq.question);
  const answer = normalize(faq.answer);
  const keywords = expandWords(faq.keywords.map(normalize));

  // Exact question match
  if (normalizedQuery === question) {
    score += 100;
  }

  // Query appears in question
  if (question.includes(normalizedQuery)) {
    score += 40;
  }

  // Query appears in answer
  if (answer.includes(normalizedQuery)) {
    score += 20;
  }

  // Keyword scoring
  const matched = new Set<string>();

  for (const word of queryWords) {
    for (const keyword of keywords) {
      if (matched.has(keyword)) continue;

      if (word === keyword) {
        score += 15;
        matched.add(keyword);
      } else if (keyword.includes(word)) {
        score += 8;
        matched.add(keyword);
      } else if (word.includes(keyword)) {
        score += 6;
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

  if (!best || best.score < 10) {
    return null;
  }

  return best;
}