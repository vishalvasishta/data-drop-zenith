import type { BotResponse, StudentProfile } from "../../types";

export function enhanceResponse(
  response: BotResponse,
  profile: StudentProfile,
): BotResponse {

  let content = response.content;

  // Personalize for beginners
  if (
    profile.codingLevel === "none" &&
    content.toLowerCase().includes("python")
  ) {
    content =
      "🌱 Don't worry if you've never coded before.\n\n" +
      content;
  }

  // Personalize for career switchers
  if (
    profile.careerGoal &&
    profile.careerGoal.toLowerCase().includes("career")
  ) {
    content +=
      "\n\n💡 Many learners successfully transition into AI careers by following this roadmap step by step.";
  }

  return {
    ...response,
    content,
  };
}