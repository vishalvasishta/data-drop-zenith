import type { BotResponse } from "../../types";
import type { ConversationIntentResult } from "../context/conversationIntent";

export function handleInformationIntent(
  _: ConversationIntentResult,
): BotResponse | null {
  // Information requests continue through the normal chatbot flow.
  return null;
}