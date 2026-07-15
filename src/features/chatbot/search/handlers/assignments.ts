import { TEACHING_METHODOLOGY } from "../../data/knowledgeBase";
import { createResponse } from "../../responseFactory";
import { getFollowUps } from "../followUps";
import type { KnowledgeRoute } from "../router";

export function handleAssignments(): KnowledgeRoute {
  return {
    handled: true,
    response: createResponse({
      content: `📝 ${TEACHING_METHODOLOGY.assignments}`,
      followUpSuggestions: getFollowUps("assignments"),
      intent: "assignments",
    }),
  };
}