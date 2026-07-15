import { CERTIFICATIONS } from "../../data/knowledgeBase";
import { createResponse } from "../../responseFactory";
import { getFollowUps } from "../followUps";
import type { KnowledgeRoute } from "../router";

export function handleCertificate(): KnowledgeRoute {
  console.log("[Knowledge Handler] Certificate");

  return {
    handled: true,
    response: createResponse({
      content: `${CERTIFICATIONS.completion}

    📁 ${CERTIFICATIONS.projectCertificate}

    🎯 ${CERTIFICATIONS.skillsValidation}

    💼 ${CERTIFICATIONS.digital}`,
      followUpSuggestions: getFollowUps("certificate"),
      intent: "certificate",
    }),
  };
}