import type { Emotion } from "../analysis/emotion";

export type ConversationStrategy =
  | "ANSWER"
  | "BUILD_TRUST"
  | "HANDLE_OBJECTION"
  | "SIMPLIFY"
  | "QUALIFY_LEAD"
  | "CREATE_URGENCY"
  | "CLOSE";

export interface StrategyContext {
  emotion: Emotion;
  conversationIntent: string;
  leadScore: number;
  trustLevel: number;
}

export function determineStrategy(
  context: StrategyContext,
): ConversationStrategy {

  // User is confused → slow down and simplify
  if (context.emotion === "confused") {
    return "SIMPLIFY";
  }

  // User is worried → build confidence first
  if (context.emotion === "worried") {
    return "BUILD_TRUST";
  }

  // Price objections
  if (context.conversationIntent === "price_objection") {
    return "HANDLE_OBJECTION";
  }

  // High buying intent
  if (
    context.conversationIntent === "buying_signal" &&
    context.leadScore >= 80
  ) {
    return "CLOSE";
  }

  // High interest but low trust
  if (
    context.leadScore >= 60 &&
    context.trustLevel < 50
  ) {
    return "BUILD_TRUST";
  }

  // Default
  return "ANSWER";
}