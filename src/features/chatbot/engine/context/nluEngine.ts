import { analyzeQuestion, type QuestionType } from "./questionAnalyzer";

export interface NLUResult {
  intent: QuestionType;
  confidence: number;
  entities: string[];
  keywords: string[];
  topic: string | null;
  isFollowUp: boolean;
}

export function analyzeMessage(message: string): NLUResult {
  const intent = analyzeQuestion(message);

  return {
    intent,
    confidence: calculateConfidence(message, intent),
    entities: [],
    keywords: [],
    topic: null,
    isFollowUp: false,
  };
}
function calculateConfidence(
  message: string,
  intent: QuestionType,
): number {
  if (intent === "unknown") {
    return 0;
  }

  const text = message.toLowerCase();

  let confidence = 0.5;

  // Longer, more descriptive questions are usually clearer.
  if (text.split(/\s+/).length >= 3) {
    confidence += 0.2;
  }

  // Explicit question words increase confidence.
  if (
    text.includes("how") ||
    text.includes("what") ||
    text.includes("when") ||
    text.includes("where") ||
    text.includes("can") ||
    text.includes("does")
  ) {
    confidence += 0.2;
  }

  // Intent-specific keywords.
  switch (intent) {
    case "pricing":
      if (
        text.includes("fee") ||
        text.includes("fees") ||
        text.includes("price") ||
        text.includes("cost")
      ) {
        confidence += 0.1;
      }
      break;

    case "duration":
      if (
        text.includes("duration") ||
        text.includes("months") ||
        text.includes("how long")
      ) {
        confidence += 0.1;
      }
      break;

    default:
      break;
  }

  return Math.min(confidence, 1);
}