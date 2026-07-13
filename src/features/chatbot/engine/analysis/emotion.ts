import { normalizeText } from "../../utils/textNormalization";
export type Emotion =
  | "confused"
  | "worried"
  | "excited"
  | "curious"
  | "skeptical"
  | "overwhelmed"
  | "neutral";
const EMOTION_PATTERNS = {
  confused: [
    "confused",
    "confuse",
    "confusing",
    "not sure",
    "dont understand",
    "didnt understand",
    "understand",
    "unclear",
    "lost",
    "no idea",
    "help",
    "explain",
  ],

  worried: [
    "worried",
    "worry",
    "afraid",
    "scared",
    "fear",
    "future",
    "job",
    "career",
    "parents",
    "risk",
    "tension",
    "pressure",
  ],

  excited: [
    "awesome",
    "amazing",
    "excellent",
    "great",
    "wow",
    "love",
    "excited",
    "interesting",
    "sounds good",
    "nice",
    "perfect",
  ],

  curious: [
    "tell me more",
    "more information",
    "more details",
    "how",
    "why",
    "what",
    "can you explain",
    "learn more",
  ],

  skeptical: [
    "fake",
    "real",
    "proof",
    "trust",
    "legit",
    "review",
    "genuine",
    "scam",
  ],

  overwhelmed: [
    "too much",
    "hard",
    "difficult",
    "cant decide",
    "dont know",
    "too many",
    "overwhelmed",
    "confusing",
  ],
} as const;
export function detectEmotion(
  message: string,
): Emotion {
  const text = normalizeText(message);

  // Debug: show the normalized text being analyzed
  console.log("[Emotion]", text);

  for (const [emotion, patterns] of Object.entries(EMOTION_PATTERNS)) {
    for (const pattern of patterns) {
      if (text.includes(pattern)) {
        // Debug: show which emotion matched
        console.log("[Emotion Match]", emotion);

        return emotion as Emotion;
      }
    }
  }

  console.log("[Emotion Match]", "neutral");

  return "neutral";
}