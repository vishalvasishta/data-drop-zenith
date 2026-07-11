const CONTEXTUAL_WORDS = [
  "it",
  "its",
  "they",
  "them",
  "their",
  "this",
  "that",
  "these",
  "those",
] as const;

/**
 * Returns true if the message contains a contextual pronoun
 * that may require conversation memory to resolve.
 */
export function hasContextPronoun(message: string): boolean {
  const words = message.toLowerCase().split(/\s+/);

  return CONTEXTUAL_WORDS.some((pronoun) => words.includes(pronoun));
}