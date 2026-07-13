import type { ConversationStrategy } from "./strategyEngine";

export const STRATEGY_RESPONSES: Record<
  ConversationStrategy,
  string
> = {
  ANSWER: "",

  SIMPLIFY:
    "That's completely normal. AI can seem confusing at first. Let me explain it in a simple way.",

  BUILD_TRUST:
    "I completely understand your concern. Many students and parents initially feel the same way before learning more about the program.",

  HANDLE_OBJECTION:
    "That's a valid concern. Let's understand what's bothering you so I can guide you properly.",

  QUALIFY_LEAD:
    "Before I recommend the best path, may I ask you a couple of quick questions?",

  CREATE_URGENCY:
    "Starting early gives you a significant advantage in today's AI job market.",

  CLOSE:
    "Based on everything you've shared, I genuinely believe this program is the right fit for you. Would you like to speak with an AI Career Advisor?"
};