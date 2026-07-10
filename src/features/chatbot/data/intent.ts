import type { ChatState } from "../types";

export interface IntentGroup {
  state: ChatState;
  phrases: string[];
}

export const INTENTS: IntentGroup[] = [
  {
    state: "ABOUT",
    phrases: [
      "about course",
      "about the course",
      "about datadrop",

      "tell me about the course",
      "tell me about datadrop",

      "what is this course",
      "what is datadrop",

      "course overview",
      "course details",
      "course information",

      "program overview",
      "program details",

      "introduce the course",
      "explain the course",

      "what do you teach",
      "what is included",

      "about program",
      "complete ai career program",
    ]
  },

  {
    state: "CURRICULUM",
    phrases: [
      "curriculum",
      "complete curriculum",
      "course curriculum",

      "syllabus",
      "course syllabus",

      "learning roadmap",
      "learning path",

      "modules",
      "course modules",

      "subjects",

      "what will i learn",
      "what do i learn",

      "topics",
      "course topics",

      "curriculum details",

      "show curriculum",

      "show syllabus",

      "learning content",

      "course content",

      "module list",

      "complete syllabus",
    ],
  },

  {
    state: "PLACEMENT",
    phrases: [
      "placement",
      "placements",

      "placement support",
      "placement assistance",

      "job support",

      "job assistance",

      "job guarantee",

      "career support",

      "resume support",

      "resume building",

      "mock interview",

      "mock interviews",

      "interview preparation",

      "interview prep",

      "companies hiring",

      "hiring partners",

      "placement record",

      "placement statistics",

      "placement percentage",

      "average package",

      "salary",

      "salary package",

      "highest package",

      "jobs after course",
    ]
  },

  {
    state: "PROJECTS",
    phrases: [
      "projects",

      "real projects",

      "live projects",

      "portfolio",

      "portfolio projects",

      "hands on projects",

      "practical projects",

      "github projects",

      "build projects",

      "project list",

      "project details",

      "capstone projects",

      "industry projects",

      "what projects",

      "what will i build",
    ]
  },

  {
    state: "CAREERS",
    phrases: [
      "careers",

      "career opportunities",

      "career options",

      "jobs",

      "job roles",

      "ai jobs",

      "data science jobs",

      "career paths",

      "roles after course",

      "future jobs",

      "what jobs",

      "what career",

      "career growth",
    ]
  },

  {
    state: "PRICING",
    phrases: [
      "course fee",
      "course fees",
      "fee",
      "fees",

      "price",
      "course price",
      "pricing",

      "cost",
      "course cost",

      "how much",

      "how much is the course",

      "how much does it cost",

      "tuition fee",

      "payment amount",

      "payment details",

      "price of course",

      "course payment",

      "admission fee",

      "what is the fee",

      "what is the price",

      "how expensive",

      "course charges",
    ]
  },
  {
    state: "BONUSES",
    phrases: [
      "bonus",

      "bonuses",

      "free bonus",

      "extra benefits",

      "additional benefits",

      "free resources",

      "free materials",

      "course bonuses",

      "included bonuses",

      "what extras",

      "bonus details",
    ]
  },

  {
    state: "CONTACT",
    phrases: [
      "talk to counselor",

      "contact counselor",

      "call counselor",

      "speak to counselor",

      "talk to advisor",

      "call me",

      "contact",

      "phone number",

      "customer support",

      "human support",

      "contact details",

      "talk to human",
    ]
  },
  {
    state:"ROADMAP",
    phrases: [
      "roadmap",

      "learning roadmap",

      "course roadmap",

      "study plan",

      "learning path",

      "career roadmap",

      "timeline",

      "18 month roadmap",

      "course timeline",

      "program timeline",

      "learning schedule",
    ]
 
  },
];