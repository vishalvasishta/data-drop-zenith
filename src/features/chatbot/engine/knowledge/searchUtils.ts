export interface SearchableItem {
  title: string;
  content: string;
  keywords: string[];
}

export interface SearchMatch<T> {
  item: T;
  score: number;
}

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
    .filter(word => word.length > 1);
}

export function scoreItem(
  query: string,
  item: SearchableItem,
): number {

  let score = 0;

  const queryTokens = tokenize(query);

  const title = normalize(item.title);
  const content = normalize(item.content);
  const keywords = item.keywords.map(normalize);

  for (const token of queryTokens) {

    if (title.includes(token)) {
      score += 25;
    }

    if (content.includes(token)) {
      score += 10;
    }

    if (keywords.includes(token)) {
      score += 20;
    }
  }

  return score;
}

export function findBestMatch<T extends SearchableItem>(
  query: string,
  items: T[],
): SearchMatch<T> | null {

  let best: SearchMatch<T> | null = null;

  for (const item of items) {

    const score = scoreItem(query, item);

    if (!best || score > best.score) {
      best = {
        item,
        score,
      };
    }
  }

  if (!best || best.score < 20) {
    return null;
  }

  return best;
}