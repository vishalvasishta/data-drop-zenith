import { CERTIFICATIONS } from "../../data/knowledgeBase";
import { createResponse } from "../../responseFactory";
import { getFollowUps } from "../followUps";
import type { KnowledgeRoute } from "../router";

export function handleCertificate(): KnowledgeRoute {
  console.log("[Knowledge Handler] Certificate");

  const sections = [
    CERTIFICATIONS.completion,
    `📁 ${CERTIFICATIONS.projectCertificate}`,
    `🎯 ${CERTIFICATIONS.skillsValidation}`,
    `💼 ${CERTIFICATIONS.digital}`,
  ].filter(Boolean);

  return {
    handled: true,
    response: createResponse({
      content: sections.join("\n\n"),
      followUpSuggestions: getFollowUps("certificate"),
      intent: "certificate",
    }),
  };
}