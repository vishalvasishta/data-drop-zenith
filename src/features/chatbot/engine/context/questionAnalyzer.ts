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
    text.includes("fee") ||
    text.includes("fees") ||
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("charges") ||
    text.includes("payment") ||
    text.includes("amount") ||
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
    text.includes("who can join") ||
    text.includes("who is this course for") ||
    text.includes("can beginners join") ||
    text.includes("beginner") ||
    text.includes("no coding")
  ) {
    return "eligibility";
  }

  if (
    text.includes("curriculum") ||
    text.includes("syllabus") ||
    text.includes("roadmap") ||
    text.includes("modules") ||
    text.includes("topics") ||
    text.includes("subjects") ||
    text.includes("what will i learn") ||
    text.includes("what do you teach") ||
    text.includes("course content")
  ) {
    return "curriculum";
  }

  if (
    text.includes("recording") ||
    text.includes("recordings") ||
    text.includes("missed class") ||
    text.includes("miss class") ||
    text.includes("watch later") ||
    text.includes("watch again") ||
    text.includes("replay") ||
    text.includes("class recording")
  ) {
    return "recordings";
  }

  if (
    text.includes("mentor") ||
    text.includes("mentorship") ||
    text.includes("mentoring") ||
    text.includes("trainer") ||
    text.includes("faculty") ||
    text.includes("teacher") ||
    text.includes("instructor") ||
    text.includes("doubt support") ||
    text.includes("guidance") ||
    text.includes("who will teach") ||
    text.includes("one on one") ||
    text.includes("1-on-1")
  ) {
    return "mentorship";
  }

  if (
    text.includes("assignment") ||
    text.includes("assignments") ||
    text.includes("practice") ||
    text.includes("homework") ||
    text.includes("tasks") ||
    text.includes("exercise") ||
    text.includes("exercises")
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
    text.includes("fee") ||
    text.includes("fees") ||
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("charges") ||
    text.includes("payment") ||
    text.includes("amount") ||
    text.includes("how much")
  ) {
    intents.push("pricing");
  }

  if (
    text.includes("project") ||
    text.includes("projects") ||
    text.includes("portfolio") ||
    text.includes("real world") ||
    text.includes("hands on") ||
    text.includes("practical") ||
    text.includes("build") ||
    text.includes("capstone")
  ) {
    return "projects";
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