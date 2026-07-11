import { routeKnowledgeIntent } from "../search/router";
import { analyzeQuestion } from "../engine/context/questionAnalyzer";
import { getLastTopic } from "../engine/conversationMemory";
import { normalizeText } from "../utils/textNormalization";
import {
  COURSE_INFO,
  PAYMENT_INFO,
  STUDENT_SUPPORT,
  TEACHING_METHODOLOGY,
  CERTIFICATIONS,
  ELIGIBILITY,
} from "../data/knowledgeBase";
import { searchFAQs } from "./search";
export interface KnowledgeAnswer {
  found: boolean;
  answer: string;
}
const NAVIGATION_PHRASES = [
  // About
  "📚 about course",
  "about course",
  "tell me about the course",
  "about the course",
  "about your course",
  "what is this course",
  "explain the course",
  "tell me about datadrop",
  "about datadrop",

  // Curriculum
  "🎓 complete curriculum",
  "complete curriculum",
  "show curriculum",
  "course curriculum",
  "course syllabus",
  "what will i learn",

  // Roadmap
  "🗺️ learning roadmap",
  "learning roadmap",
  "roadmap",

  // Careers
  "💼 career opportunities",
  "career opportunities",

  // Placement
  "🏆 placement",
  "placement",

  // Projects
  "🚀 projects",
  "projects",

  // Pricing
  "💰 course fee",
  "course fee",

  // Bonuses
  "🎁 bonuses",
  "bonuses",

  // Enrollment
  "✅ enroll now",
  "enroll now",

  // FAQ
  "❓ faqs",
  "faqs",

  // Contact
  "📞 talk to counselor",
  "talk to counselor",
];

export function searchKnowledge(question: string): KnowledgeAnswer {
  const q = normalizeText(question);
  const questionType = analyzeQuestion(q);
  const route = routeKnowledgeIntent(questionType);

  if (route.handled && route.response) {
    return {
      found: true,
      answer: route.response.content,
    };
  }
  const lastTopic = getLastTopic();
  // Let the parser handle navigation-style requests.
  if (
    NAVIGATION_PHRASES.some(
      phrase => q.includes(phrase) || phrase.includes(q)
    )
  ) {
    return {
      found: false,
      answer: "",
    };
  }


  // ---------- Intelligent FAQ Search ----------
  const bestMatch = searchFAQs(question);

  if (
    bestMatch &&
    bestMatch.score >= 3
  ) {
    return {
      found: true,
      answer: bestMatch.faq.answer,
    };
  }

  // ---------- Legacy Rule Engine ----------
  // --------------------
  // Conversation Memory
  // --------------------

  // User previously asked about the course
  if (
    lastTopic === "ABOUT" &&
    (q.includes("duration") ||
      q.includes("how long") ||
      q === "how long is it")
  ) {
    return {
      found: true,
      answer: `The Complete AI Career Program runs for ${COURSE_INFO.duration}.`,
    };
  }

  if (
    lastTopic === "ABOUT" &&
    (q.includes("fee") ||
      q.includes("fees") ||
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("how much"))
  ) {
    return {
      found: true,
      answer: `The Complete AI Career Program fee is ${COURSE_INFO.fee}.`,
    };
  }

  if (
    lastTopic === "ABOUT" &&
    (q.includes("project") || q.includes("projects"))
  ) {
    return {
      found: true,
      answer:
        "Students build 25+ real-world projects covering Data Analytics, Machine Learning, Deep Learning, Generative AI, RAG, AI Agents, and Production AI systems.",
    };
  }

  if (
    lastTopic === "ABOUT" &&
    (q.includes("placement") || q.includes("job"))
  ) {
    return {
      found: true,
      answer:
        "Students receive complete placement guidance including resume building, portfolio reviews, mock interviews, and job referrals.",
    };
  }
  // Live classes
  if (
    q.includes("live") &&
    (q.includes("class") || q.includes("classes"))
  ) {
    return {
      found: true,
      answer: `✅ Yes. ${TEACHING_METHODOLOGY.liveClasses}`,
    };
  }

  // Recordings
  if (
    q.includes("record") ||
    q.includes("recording") ||
    q.includes("recordings")
  ) {
    return {
      found: true,
      answer: `🎥 ${TEACHING_METHODOLOGY.recordings}`,
    };
  }

  // Assignments
  if (
    q.includes("assignment") ||
    q.includes("assignments") ||
    q.includes("practice")
  ) {
    return {
      found: true,
      answer: `📝 ${TEACHING_METHODOLOGY.assignments}`,
    };
  }

  // Doubts
  if (
    q.includes("doubt") ||
    q.includes("support")
  ) {
    return {
      found: true,
      answer: STUDENT_SUPPORT.mentorshipSupport,
    };
  }

  // Certificate
  if (
    q.includes("certificate") ||
    q.includes("certification")
  ) {
    return {
      found: true,
      answer: CERTIFICATIONS.description,
    };
  }

  // Beginner
  if (
    q.includes("beginner") ||
    q.includes("experience") ||
    q.includes("coding")
  ) {
    const beginner = ELIGIBILITY.find(
      e => e.id === "beginner"
    );

    if (beginner) {
      return {
        found: true,
        answer: beginner.description,
      };
    }
  }

  // Fees
  if (
    q.includes("fee") ||
    q.includes("price") ||
    q.includes("cost")
  ) {
    return {
      found: true,
      answer: `The course fee is ${COURSE_INFO.fee}.`,
    };
  }

  // Duration
  if (
    q.includes("duration") ||
    q.includes("months")
  ) {
    return {
      found: true,
      answer: `The program duration is ${COURSE_INFO.duration}.`,
    };
  }

  return {
    found: false,
    answer: "",
  };
}