import type { StudentProfile } from "../../types";

export function updateStudentProfile(
  profile: StudentProfile,
  message: string,
): StudentProfile {

  const text = message.toLowerCase();

  const updated = {
    ...profile,
  };

  // Coding experience
  if (
    text.includes("don't know coding") ||
    text.includes("no coding") ||
    text.includes("zero coding") ||
    text.includes("beginner")
  ) {
    updated.codingLevel = "beginner";
  }

  // Budget concern
  if (
    text.includes("expensive") ||
    text.includes("costly") ||
    text.includes("too much") ||
    text.includes("can't afford")
  ) {
    updated.budgetConcern = true;
  }

  // Parent concern
  if (
    text.includes("parents") ||
    text.includes("father") ||
    text.includes("mother") ||
    text.includes("family")
  ) {
    updated.parentConcern = true;
  }

  return updated;
}