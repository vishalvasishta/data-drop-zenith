import { STUDENT_SUPPORT } from "../../data/knowledgeBase";
import { createResponse } from "../../responseFactory";
import { getFollowUps } from "../followUps";
import type { KnowledgeRoute } from "../router";

export function handleMentorship(): KnowledgeRoute {
  return {
    handled: true,
    response: createResponse({
      content: `👨‍🏫 ${STUDENT_SUPPORT.mentorship}`,
      followUpSuggestions: getFollowUps("mentorship"),
      intent: "mentorship",
    }),
  };
}