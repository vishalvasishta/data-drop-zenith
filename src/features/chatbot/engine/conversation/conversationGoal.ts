import type { StudentProfile } from "../../types";

export type ConversationGoal =
  | "DISCOVER"
  | "EDUCATE"
  | "BUILD_TRUST"
  | "HANDLE_OBJECTION"
  | "QUALIFY"
  | "CLOSE";

export function determineConversationGoal(
  profile: StudentProfile,
): ConversationGoal {

  switch (profile.conversationStage) {

    case "discovery":
      return "DISCOVER";

    case "interest":
      return "EDUCATE";

    case "evaluation":
      if (profile.objections.length > 0) {
        return "HANDLE_OBJECTION";
      }

      return "BUILD_TRUST";

    case "decision":
      return "CLOSE";

    case "enrollment":
      return "CLOSE";

    default:
      return "DISCOVER";
  }
}