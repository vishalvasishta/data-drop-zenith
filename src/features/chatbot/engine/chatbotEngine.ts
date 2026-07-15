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
        const faqResponse = searchFAQ(intent.query);

        if (faqResponse.faqData?.length) {
          return {
            handled: true,
            response: faqResponse,
            nextState: "FAQ",
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
      const faqResponse = searchFAQ(intent.raw);

      if (faqResponse.faqData && faqResponse.faqData.length > 0) {
        return {
          handled: true,
          response: faqResponse,
          nextState: "FAQ",
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
