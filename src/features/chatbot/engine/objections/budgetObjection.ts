import type { BotResponse } from "../../types";

export function handleBudgetObjection(): BotResponse {
  return {
    content:
      "I completely understand why it feels expensive at first.\n\nCan I ask you something?\n\nAre you comparing it with other AI courses, or is affordability your main concern?",
    quickReplies: [
      "Comparing with other courses",
      "It's beyond my budget",
      "Just checking",
    ],
  };
}