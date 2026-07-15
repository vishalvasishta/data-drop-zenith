
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
import type { BotResponse } from "../types";

export interface KnowledgeRoute {
  handled: boolean;
  response?: BotResponse;
}
export function routeKnowledgeIntent(
  questionType: QuestionType,
):
  KnowledgeRoute {
  console.log("[Eligibility Handler]");
  switch (questionType) {
    case "mentorship":
      return handleMentorship();
    case "duration":
      return handleDuration();
    case "projects":
      return handleProjects();
    case "pricing":
      return handlePricing();

    case "certificate":
      return handleCertificate();

    case "recordings":
      return handleRecordings();
    case "assignments":
      return handleAssignments();
    case "projects":
      return handleProjects();

    case "placement":
      return handlePlacement();

    case "curriculum":
      return handleCurriculum();
    case "eligibility": {
        console.log("[Router] Before handler");

        const result = handleEligibility();

        console.log("[Router] After handler", result);

      return result;
      }

    // Remaing question types (projects, placement, certificate,
    // eligibility, curriculum, recordings, mentorship, assignments) do not
    // have a dedicated structured handler yet — they fall through to FAQ
    // search / the legacy rule engine in knowledgeSearch.ts.
    default:
      return { handled: false };
  }
}