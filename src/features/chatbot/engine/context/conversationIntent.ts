export type ConversationIntent =
  | "information"
  | "buying_signal"
  | "objection"
  | "comparison"
  | "career_guidance"
  | "confusion"
  | "support"
  | "greeting"
  | "gratitude"
  | "small_talk"
  | "unknown";

export interface ConversationIntentResult {
  intent: ConversationIntent;
  confidence: number;
}