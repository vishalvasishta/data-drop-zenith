import type { ChatState } from "../types";

export type IntentType =
  | "navigation"
  | "knowledge"
  | "objection"
  | "greeting"
  | "unknown";

export interface IntentResult {
  type: IntentType;
  state?: ChatState;
}

const NAVIGATION: Record<string, ChatState> = {
  "about": "ABOUT",
  "about course": "ABOUT",
  "course": "ABOUT",
  "course details": "ABOUT",
  "program": "ABOUT",

  "curriculum": "CURRICULUM",
  "syllabus": "CURRICULUM",

  "roadmap": "ROADMAP",

  "placement": "PLACEMENT",

  "projects": "PROJECTS",
  "project": "PROJECTS",

  "pricing": "PRICING",
  "fees": "PRICING",
  "fee": "PRICING",
  "price": "PRICING",
  "cost": "PRICING",

  "enroll": "ENROLLMENT",
  "join": "ENROLLMENT",

  "contact": "CONTACT",
  "counselor": "CONTACT",
};

export function detectIntent(input: string): IntentResult {

  const q = input.toLowerCase().trim();

  // Navigation
  for (const [keyword, state] of Object.entries(NAVIGATION)) {
    if (q === keyword || q.includes(keyword)) {
      return {
        type: "navigation",
        state,
      };
    }
  }

  // Greeting
  if (
    ["hi", "hello", "hey", "good morning", "good evening"].includes(q)
  ) {
    return {
      type: "greeting",
    };
  }

  // Knowledge questions
  if (
    q.startsWith("what") ||
    q.startsWith("how") ||
    q.startsWith("is") ||
    q.startsWith("can") ||
    q.startsWith("do") ||
    q.startsWith("does") ||
    q.endsWith("?")
  ) {
    return {
      type: "knowledge",
    };
  }

  return {
    type: "unknown",
  };
}