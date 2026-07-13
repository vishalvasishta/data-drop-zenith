import type { BotResponse } from "../../types";
import type { ConversationIntentResult } from "../context/conversationIntent";

export function handleBuyingSignalIntent(
  _: ConversationIntentResult,
): BotResponse {

  return {
    content:
      "That's great to hear! 🎉\n\nI'd be happy to help you join the Complete AI Career Program.\n\nWould you like to see the admission process or speak with a counselor?",

    quickReplies: [
      "✅ Enroll Now",
      "📞 Talk to Counselor",
      "💰 Course Fee",
      "⬅️ Back to Menu",
    ],
  };
}