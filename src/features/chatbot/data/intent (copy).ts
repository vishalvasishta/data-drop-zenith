import type { ChatState } from "../types";

export interface IntentGroup {
  state: ChatState;
  phrases: string[];
}

export const INTENTS: IntentGroup[] = [
  {
    state: "ABOUT",
    phrases: [
      // Basic
      "about",
      "about course",
      "about the course",
      "about your course",
      "tell me about the course",
      "tell me about your course",
      "tell me about datadrop",
      "about datadrop",
      "what is datadrop",
      "what is this course",
      "what is this program",
      "what is this training",
      "what is this",

      // Explanations
      "explain the course",
      "explain your course",
      "explain this course",
      "explain the program",
      "explain datadrop",
      "describe the course",
      "describe your course",
      "describe the program",
      "course overview",
      "overview",
      "introduction",
      "give overview",
      "brief overview",

      // Details
      "course details",
      "program details",
      "training details",
      "details",
      "complete details",
      "full details",
      "more details",
      "give details",
      "more information",
      "information",

      // Learning
      "what do you teach",
      "what do i study",
      "what do i learn",
      "what am i going to learn",
      "what subjects",
      "what topics",

      // Purpose
      "why should i join",
      "why datadrop",
      "why this course",
      "why this program",
      "why should i choose datadrop",
      "why should i enroll",

      // Audience
      "who is this course for",
      "who can join",
      "who should join",
      "who is eligible",
      "is this course for beginners",
      "is this for students",
      "is this for working professionals",

      // General
      "tell me more",
      "tell me everything",
      "show me the course",
      "show course",
      "give course info",
      "give course information",
      "course info",
      "program info",
      "course explanation",
      "training program",
      "ai course",
      "ai training",
      "complete ai course",
      "complete ai program",
      "professional ai course",
      "career program",
      "career accelerator",
      "datadrop ai course",

      // Conversational
      "i want to know about the course",
      "i want to know more",
      "can you explain the course",
      "can you tell me about the course",
      "can you explain your program",
      "can you give course details",
      "what exactly is this course",
      "what exactly do you teach",
      "what makes this course different",
      "how is this course different",
      "what is special about this course",
    ]
  },

  {
    state: "CURRICULUM",
    phrases: [
      "curriculum",
      "course curriculum",
      "complete curriculum",
      "syllabus",
      "course syllabus",
      "modules",
      "subjects",
      "topics",
      "course content",
      "what will i learn",
      "learning modules",
      "show curriculum",
      "show syllabus",
    ],
  },

  {
    state: "PLACEMENT",
    phrases: [
      "placement",
      "placement support",
      "placement assistance",
      "career support",
      "resume",
      "mock interview",
      "interview preparation",
      "companies",
      "job support",
      "job assistance",
      "hiring",
    ],
  },

  {
    state: "PROJECTS",
    phrases: [
      "projects",
      "real projects",
      "live projects",
      "portfolio",
      "github",
      "hands on",
      "practical",
      "case studies",
    ],
  },

  {
    state: "CAREERS",
    phrases: [
      "career",
      "jobs",
      "salary",
      "package",
      "career opportunities",
      "future",
      "roles",
      "job roles",
      "data scientist",
      "ai engineer",
    ],
  },

  {
    state: "PRICING",
    phrases: [
      "fee",
      "fees",
      "price",
      "pricing",
      "cost",
      "course fee",
      "payment",
      "emi",
      "installment",
      "scholarship",
      "discount",
    ],
  },

  {
    state: "CONTACT",
    phrases: [
      "contact",
      "call",
      "phone",
      "talk to counselor",
      "advisor",
      "human",
      "whatsapp",
      "callback",
      "support",
    ],
  },
];