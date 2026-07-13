import type { ConversationIntent } from "../context/conversationIntent";

export function calculateTrustChange(
  intent: ConversationIntent,
): number {

  switch (intent) {

    case "greeting":
      return 2;

    case "information":
      return 3;

    case "career_guidance":
      return 5;

    case "comparison":
      return 4;

    case "buying_signal":
      return 10;

    case "gratitude":
      return 8;

    case "objection":
      return -1;

    case "confusion":
      return 1;

    default:
      return 0;
  }

}
export function updateTrustLevel(
  current: number,
  change: number,
): number {

  const updated = current + change;

  return Math.max(0, Math.min(100, updated));

}