import { COURSE_INFO } from "../../data/knowledgeBase";
import { createResponse } from "../../responseFactory";
import { getFollowUps } from "../followUps";
import type { KnowledgeRoute } from "../router";

export function handleDuration(): KnowledgeRoute {
  return {
    handled: true,
    response: createResponse({
      content: `The Complete AI Career Program runs for ${COURSE_INFO.duration}.`,
      followUpSuggestions: getFollowUps("duration"),
      intent: "duration",
    }),
  };
}