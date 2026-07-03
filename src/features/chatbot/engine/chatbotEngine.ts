import type { BotResponse, ChatState } from "../types";
import { parseInput } from "./parser";
import { getStateResponse } from "./stateMachine";
import { getCurriculumTopicResponse, searchFAQ, mainMenuAction } from "./actions";

type ProcessResult = { response: BotResponse; nextState: ChatState };

// ── Core engine: given current state + user input → next response + state ─────
// Uses switch on discriminated-union kind — exhaustive, no type assertions.
export function processInput(currentState: ChatState, userInput: string): ProcessResult {
  const intent = parseInput(userInput);

  switch (intent.kind) {
    case "navigate": {
      const response = getStateResponse(intent.state);
      return { response, nextState: response.nextState ?? intent.state };
    }
    case "back": {
      const response = mainMenuAction();
      return { response, nextState: "MAIN_MENU" };
    }
    case "curriculum-topic": {
      const response = getCurriculumTopicResponse(intent.title) ?? {
        content: "Sorry, I couldn't find that topic. Try browsing the full curriculum.",
        quickReplies: ["📋 Complete Curriculum", "⬅️ Back to Menu"],
      };
      return { response, nextState: "CURRICULUM" };
    }
    case "faq-search": {
      const response = searchFAQ(intent.query);
      return { response, nextState: "FAQ" };
    }
    case "unknown": {
      // Fallback: try FAQ search before giving up
      const faqResponse = searchFAQ(intent.raw);
      if (faqResponse.faqData && faqResponse.faqData.length > 0) {
        return { response: faqResponse, nextState: "FAQ" };
      }
      return {
        response: {
          content: "I didn't quite understand that. Here's what I can help you with:",
          quickReplies: [
            "📚 About Course",
            "💰 Course Fee",
            "✅ Enroll Now",
            "❓ FAQs",
            "📞 Talk to Counselor",
            "⬅️ Back to Menu",
          ],
        },
        nextState: currentState,
      };
    }
  }
}

// ── Initial bot message on open ───────────────────────────────────────────────
export function getWelcomeResponse(): ProcessResult {
  const response = getStateResponse("WELCOME");
  return { response, nextState: "MAIN_MENU" };
}
