import type { BotResponse } from "../../types";
import type { ConversationIntentResult } from "../context/conversationIntent";

export function handleConfusionIntent(
  _: ConversationIntentResult,
): BotResponse {

  return {
    content:
      "No worries 😊 I'm here to help.\n\nWhat would you like to know about?",

    quickReplies: [
      "📚 About Course",
      "💰 Course Fee",
      "📖 Curriculum",
      "💼 Placement Support",
      "🎓 Eligibility",
    ],
  };
}