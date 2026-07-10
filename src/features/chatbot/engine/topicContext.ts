import type { ChatState } from "../types";

export interface TopicContext {
  defaultEntity: string;
  aliases: string[];
}

export const TOPIC_CONTEXT: Partial<Record<ChatState, TopicContext>> = {
  ABOUT: {
    defaultEntity: "course",
    aliases: [
      "course",
      "program",
      "training",
    ],
  },

  CURRICULUM: {
    defaultEntity: "curriculum",
    aliases: [
      "curriculum",
      "syllabus",
      "modules",
      "subjects",
    ],
  },

  PRICING: {
    defaultEntity: "course",
    aliases: [
      "fees",
      "fee",
      "price",
      "pricing",
      "cost",
    ],
  },

  PROJECTS: {
    defaultEntity: "projects",
    aliases: [
      "project",
      "projects",
    ],
  },
};