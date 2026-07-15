import { searchKnowledge } from "./knowledgeSearch";
import type { BotResponse, ChatState } from "../types";
import { parseInput } from "./parser";
import { getStateResponse } from "./stateMachine";
import { getCurriculumTopicResponse, searchFAQ, mainMenuAction } from "./actions";

type ProcessResult = {
  handled: boolean;
  response: BotResponse;
  nextState: ChatState;
};

// ── Core engine: given current state + user input → next response + state ─────
// Uses switch on discriminated-union kind — exhaustive, no type assertions.
export function processInput(currentState: ChatState, userInput: string): ProcessResult {
  const intent = parseInput(userInput);

  switch (intent.kind) {
    case "navigate": {
      const response = getStateResponse(intent.state);
      return {
        handled: true,
        response,
        nextState: response.nextState ?? intent.state,
      };
    }
    case "back": {
      const response = mainMenuAction();
      return {
        handled: true,
        response,
        nextState: "MAIN_MENU",
      };
    }
    case "curriculum-topic": {
      const response = getCurriculumTopicResponse(intent.title) ?? {
        content: "Sorry, I couldn't find that topic. Try browsing the full curriculum.",
        quickReplies: ["📋 Complete Curriculum", "⬅️ Back to Menu"],
      };
      return {
        handled: true,
        response,
        nextState: "CURRICULUM",
      };
    }
    case "faq-search": {
      const faqResult = searchFAQ(intent.query);

      if (faqResult.found) {
        return {
          handled: true,
          response: faqResult.response,
          nextState: faqResult.topic ?? "FAQ",
        };
      }

      return {
        handled: false,
        response: {
          content: "I couldn't find any matching FAQ.",
          quickReplies: [
            "📞 Talk to Counselor",
            "⬅️ Back to Menu",
          ],
        },
        nextState: currentState,
      };
    }
    case "unknown": {


      const knowledge = searchKnowledge(intent.raw);



      if (knowledge.found) {


        return {
          handled: true,
          response: knowledge.response!,
          nextState: currentState,
        };
      }

      // Then fall back to FAQ search
      const faqResult = searchFAQ(intent.raw);

      if (faqResult.found) {
        return {
          handled: true,
          response: faqResult.response,
          nextState: faqResult.topic ?? currentState,
        };
      }

      // Finally show the default help menu
      return {
        handled: false,
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

  return {
    handled: true,
    response,
    nextState: "MAIN_MENU",
  };
}
