import type { TrustCategory } from "./assets/trustLibrary";

export function selectTrustCategory(
  message: string,
): TrustCategory {

  const text = message.toLowerCase();

  if (
    text.includes("coding") ||
    text.includes("beginner") ||
    text.includes("experience")
  ) {
    return "beginner";
  }

  if (
    text.includes("placement") ||
    text.includes("job") ||
    text.includes("career")
  ) {
    return "placement";
  }

  if (
    text.includes("project") ||
    text.includes("portfolio")
  ) {
    return "projects";
  }

  if (
    text.includes("mentor") ||
    text.includes("teacher") ||
    text.includes("support")
  ) {
    return "mentorship";
  }

  if (
    text.includes("fee") ||
    text.includes("price") ||
    text.includes("cost")
  ) {
    return "pricing";
  }

  return "general";
}