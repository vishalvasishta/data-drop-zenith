import { ELIGIBILITY } from "../../data/knowledgeBase";
import { createResponse } from "../../responseFactory";
import { getFollowUps } from "../followUps";
import type { KnowledgeRoute } from "../router";

export function handleEligibility(): KnowledgeRoute {
  const content = `🎓 ${ELIGIBILITY.minimumQualification}

👨‍🎓 Suitable For:
${ELIGIBILITY.suitableFor.map(item => `• ${item}`).join("\n")}

💻 Coding Experience:
${ELIGIBILITY.codingExperience}

📚 Educational Background:
${ELIGIBILITY.educationBackground}

🎂 Age Limit:
${ELIGIBILITY.ageLimit}

💻 Laptop Requirement:
${ELIGIBILITY.laptop}

🗣 Language:
${ELIGIBILITY.language}

📅 Attendance:
${ELIGIBILITY.attendance}

⏳ Commitment:
${ELIGIBILITY.commitment}`;

  return {
    handled: true,
    response: createResponse({
      content,
      followUpSuggestions: getFollowUps("eligibility"),
      intent: "eligibility",
    }),
  };
}