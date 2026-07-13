export type QuestionType =
  | "duration"
  | "pricing"
  | "projects"
  | "placement"
  | "certificate"
  | "eligibility"
  | "curriculum"
  | "recordings"
  | "mentorship"
  | "assignments"
  | "unknown";

export interface QuestionIntent {
  type: QuestionType;
  confidence: number;
}

/**
 * Determines what information the user is requesting.
 * It does NOT determine the entity (course, project, etc.).
 * It only classifies the type of question.
 */
export function analyzeQuestion(message: string): QuestionType {
  const text = message.toLowerCase();

  if (
    text.includes("how long") ||
    text.includes("duration") ||
    text.includes("months") ||
    text.includes("how many months")
  ) {
    return "duration";
  }

  if (
    text.includes("price") ||
    text.includes("fees") ||
    text.includes("cost") ||
    text.includes("how much")
  ) {
    return "pricing";
  }

  if (
    text.includes("project") ||
    text.includes("projects")
  ) {
    return "projects";
  }

  if (
    text.includes("placement") ||
    text.includes("job")
  ) {
    return "placement";
  }

  if (
    text.includes("certificate")
  ) {
    return "certificate";
  }

  if (
    text.includes("eligible") ||
    text.includes("eligibility") ||
    text.includes("who can join")
  ) {
    return "eligibility";
  }

  if (
    text.includes("curriculum") ||
    text.includes("syllabus")
  ) {
    return "curriculum";
  }

  if (
    text.includes("recording")
  ) {
    return "recordings";
  }

  if (
    text.includes("mentor") ||
    text.includes("mentorship")
  ) {
    return "mentorship";
  }

  if (
    text.includes("assignment")
  ) {
    return "assignments";
  }

  return "unknown";
}
export function analyzeQuestions(message: string): QuestionType[] {
  const text = message.toLowerCase();

  const intents: QuestionType[] = [];

  if (
    text.includes("how long") ||
    text.includes("duration") ||
    text.includes("months") ||
    text.includes("how many months")
  ) {
    intents.push("duration");
  }

  if (
    text.includes("price") ||
    text.includes("fees") ||
    text.includes("cost") ||
    text.includes("how much")
  ) {
    intents.push("pricing");
  }

  if (
    text.includes("project") ||
    text.includes("projects")
  ) {
    intents.push("projects");
  }

  if (
    text.includes("placement") ||
    text.includes("job")
  ) {
    intents.push("placement");
  }

  if (
    text.includes("certificate")
  ) {
    intents.push("certificate");
  }

  if (
    text.includes("eligible") ||
    text.includes("eligibility") ||
    text.includes("who can join")
  ) {
    intents.push("eligibility");
  }

  if (
    text.includes("curriculum") ||
    text.includes("syllabus")
  ) {
    intents.push("curriculum");
  }

  if (
    text.includes("recording")
  ) {
    intents.push("recordings");
  }

  if (
    text.includes("mentor") ||
    text.includes("mentorship")
  ) {
    intents.push("mentorship");
  }

  if (
    text.includes("assignment")
  ) {
    intents.push("assignments");
  }

  return intents.length ? intents : ["unknown"];
}