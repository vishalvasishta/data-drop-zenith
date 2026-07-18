import { ELIGIBILITY } from "../../data/knowledgeBase";
import { createResponse } from "../../responseFactory";
import { getFollowUps } from "../followUps";
import type { KnowledgeRoute } from "../router";
import type { QuestionIntent } from "../../engine/context/questionAnalyzer";

export function handleEligibility(
  intent: QuestionIntent,
): KnowledgeRoute {
  if (intent?.subtype === "coding") {
    return {
      handled: true,
      response: createResponse({
        content: `💻 ${ELIGIBILITY.codingExperience}`,
        followUpSuggestions: getFollowUps("eligibility"),
        intent: "eligibility",
      }),
    };
  }
  if (intent?.subtype === "qualification") {
    return {
      handled: true,
      response: createResponse({
        content: `🎓 ${ELIGIBILITY.minimumQualification}`,
        followUpSuggestions: getFollowUps("eligibility"),
        intent: "eligibility",
      }),
    };
  }
  if (intent?.subtype === "age") {
    return {
      handled: true,
      response: createResponse({
        content: `🎂 ${ELIGIBILITY.ageLimit}`,
        followUpSuggestions: getFollowUps("eligibility"),
        intent: "eligibility",
      }),
    };
  }

  console.log(
    "[Eligibility Handler]",
    JSON.stringify(intent, null, 2)
  );
  const sections = [
    ELIGIBILITY.minimumQualification &&
    `🎓 ${ELIGIBILITY.minimumQualification}`,

    ELIGIBILITY.suitableFor?.length &&
    `👨‍🎓 Suitable For:\n${ELIGIBILITY.suitableFor
      .map(item => `• ${item}`)
      .join("\n")}`,

    ELIGIBILITY.codingExperience &&
    `💻 Coding Experience:\n${ELIGIBILITY.codingExperience}`,

    ELIGIBILITY.educationBackground &&
    `📚 Educational Background:\n${ELIGIBILITY.educationBackground}`,

    ELIGIBILITY.ageLimit &&
    `🎂 Age Limit:\n${ELIGIBILITY.ageLimit}`,

    ELIGIBILITY.laptop &&
    `💻 Laptop Requirement:\n${ELIGIBILITY.laptop}`,

    ELIGIBILITY.language &&
    `🗣 Language:\n${ELIGIBILITY.language}`,

    ELIGIBILITY.attendance &&
    `📅 Attendance:\n${ELIGIBILITY.attendance}`,

    ELIGIBILITY.commitment &&
    `⏳ Commitment:\n${ELIGIBILITY.commitment}`,
  ].filter(Boolean);
  switch (intent.subtype) {
    case "qualification":
      return {
        handled: true,
        response: createResponse({
          content: `🎓 ${ELIGIBILITY.minimumQualification}`,
          followUpSuggestions: getFollowUps("eligibility"),
          intent: "eligibility",
        }),
      };
  }

  const content = sections.join("\n\n");

  return {
    handled: true,
    response: createResponse({
      content,
      followUpSuggestions: getFollowUps("eligibility"),
      intent: "eligibility",
    }),
  };
}