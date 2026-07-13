import type {
  ConversationIntent,
  ConversationIntentResult,
} from "./conversationIntent";

export function classifyConversationIntent(
  message: string,
): ConversationIntentResult {
  const text = message.toLowerCase().trim();

  // Buying Signals
  if (
    text.includes("join") ||
    text.includes("enroll") ||
    text.includes("admission") ||
    text.includes("register") ||
    text.includes("how do i join") ||
    text.includes("payment")
  ) {
    return {
      intent: "buying_signal",
      confidence: 0.95,
    };
  }

  // Objections
  if (
    text.includes("expensive") ||
    text.includes("costly") ||
    text.includes("too much") ||
    text.includes("not sure") ||
    text.includes("worth it") ||
    text.includes("doubt")
  ) {
    return {
      intent: "objection",
      confidence: 0.90,
    };
  }

  // Comparison
  if (
    text.includes("better than") ||
    text.includes("vs") ||
    text.includes("versus") ||
    text.includes("compare")
  ) {
    return {
      intent: "comparison",
      confidence: 0.90,
    };
  }

  // Career Guidance
  if (
    text.includes("career") ||
    text.includes("job") ||
    text.includes("future") ||
    text.includes("salary")
  ) {
    return {
      intent: "career_guidance",
      confidence: 0.85,
    };
  }

  // Confusion
  if (
    text.includes("confused") ||
    text.includes("don't understand") ||
    text.includes("dont understand") ||
    text.includes("not clear")
  ) {
    return {
      intent: "confusion",
      confidence: 0.85,
    };
  }

  // Greeting
  if (
    text === "hi" ||
    text === "hello" ||
    text === "hey"
  ) {
    return {
      intent: "greeting",
      confidence: 1,
    };
  }

  // Gratitude
  if (
    text.includes("thanks") ||
    text.includes("thank you")
  ) {
    return {
      intent: "gratitude",
      confidence: 1,
    };
  }

  return {
    intent: "information",
    confidence: 0.60,
  };
}