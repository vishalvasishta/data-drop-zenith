export interface SearchDocument {
  id: string;
  type:
  | "faq"
  | "curriculum"
  | "course"
  | "project"
  | "career"
  | "bonus"
  | "teaching"
  | "outcome"
  | "payment"
  | "eligibility"
  | "certification";

  title: string;

  content: string;

  keywords: string[];

  category?: string;

  weight?: number;

  data?: unknown;
}

export interface SearchResult {
  document: SearchDocument;
  score: number;
}

export interface SearchResponse {
  found: boolean;
  results: SearchResult[];
}
