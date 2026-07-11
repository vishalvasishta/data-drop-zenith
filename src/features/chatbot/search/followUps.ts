import type { QuestionType } from "../engine/context/questionAnalyzer";

export const FOLLOW_UPS: Record<QuestionType, string[]> = {
  duration: [
    "📚 Curriculum",
    "🏆 Certificate",
    "💼 Placement",
  ],

  pricing: [
    "💳 Payment Methods",
    "🎁 Bonuses",
    "📞 Talk to Counselor",
  ],

  projects: [
    "💼 Placement",
    "👨‍🏫 Mentorship",
    "🏆 Certificate",
  ],

  placement: [
    "🛠 Projects",
    "👨‍🏫 Mentorship",
    "✅ Enroll Now",
  ],

  certificate: [
    "💼 Placement",
    "📚 Curriculum",
    "✅ Enroll Now",
  ],

  eligibility: [
    "💰 Course Fee",
    "📚 Curriculum",
    "✅ Enroll Now",
  ],

  curriculum: [
    "🛠 Projects",
    "💼 Placement",
    "🏆 Certificate",
  ],

  recordings: [
    "👨‍🏫 Mentorship",
    "📚 Curriculum",
    "💰 Course Fee",
  ],

  mentorship: [
    "🛠 Projects",
    "💼 Placement",
    "✅ Enroll Now",
  ],

  assignments: [
    "👨‍🏫 Mentorship",
    "🏆 Certificate",
    "💼 Placement",
  ],

  unknown: [],
};
export function getFollowUps(intent: QuestionType): string[] {
  return FOLLOW_UPS[intent] ?? [];
}