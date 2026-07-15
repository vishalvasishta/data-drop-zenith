
import { handleAssignments } from "./handlers/assignments";
import { handleMentorship } from "./handlers/mentorship";
import { handleEligibility } from "./handlers/eligibility";
import { handleRecordings } from "./handlers/recordings";
import { handleCertificate } from "./handlers/certificate";
import { handlePricing } from "./handlers/pricing";
import { handleDuration } from "./handlers/duration";
import type { QuestionType } from "../engine/context/questionAnalyzer";
import { handleCurriculum } from "./handlers/curriculum";
import { handleProjects } from "./handlers/projects";
import { handlePlacement } from "./handlers/placement";
import type { ChatState, BotResponse } from "../types";
export interface KnowledgeRoute {
  handled: boolean;
  response?: BotResponse;
  topic?: ChatState;
}
export function routeKnowledgeIntent(
  questionType: QuestionType,
):
  KnowledgeRoute {
  console.log("[Eligibility Handler]");
  switch (questionType) {
    case "mentorship":
      return {
        ...handleMentorship(),
        topic: "STUDENT_SUPPORT",
      };
    case "duration":
      return {
        ...handleDuration(),
        topic: "ABOUT",
      };
    case "projects":
      return {
        ...handleProjects(),
        topic: "PROJECTS",
      };
    case "pricing":
      return {
        ...handlePricing(),
        topic: "PRICING",
      };

    case "certificate":
      return {
        ...handleCertificate(),
        topic: "ABOUT",
      };

    case "recordings":
      return {
        ...handleRecordings(),
        topic: "STUDENT_SUPPORT",
      };
    case "assignments":
      return {
        ...handleAssignments(),
        topic: "STUDENT_SUPPORT",
      };
    case "projects":
      return handleProjects();

    case "placement":
      return {
        ...handlePlacement(),
        topic: "PLACEMENT",
      };

    case "curriculum":
      return {
        ...handleCurriculum(),
        topic: "CURRICULUM",
      };
    case "eligibility": {
      const result = handleEligibility();

      return {
        ...result,
        topic: "ABOUT",
      };
    }

    // Remaing question types (projects, placement, certificate,
    // eligibility, curriculum, recordings, mentorship, assignments) do not
    // have a dedicated structured handler yet — they fall through to FAQ
    // search / the legacy rule engine in knowledgeSearch.ts.
    default:
      return { handled: false };
  }
}