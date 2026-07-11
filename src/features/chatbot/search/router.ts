import { handleDuration } from "./handlers/duration";
import type { QuestionType } from "../context/questionAnalyzer";

import type { BotResponse } from "../types";

export interface KnowledgeRoute {
  handled: boolean;
  response?: BotResponse;
}
export function routeKnowledgeIntent(
  questionType: QuestionType,
): KnowledgeRoute {
  switch (questionType) {
      case "duration":
      return handleDuration();

    case "pricing":
      return { handled: false };

    case "projects":
      return { handled: false };

    case "placement":
      return { handled: false };

    case "certificate":
      return { handled: false };

    case "eligibility":
      return { handled: false };

    case "curriculum":
      return { handled: false };

    case "recordings":
      return { handled: false };

    case "mentorship":
      return { handled: false };

    case "assignments":
      return { handled: false };

    default:
      return { handled: false };
  }
}