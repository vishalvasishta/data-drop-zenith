import {
  COURSE_INFO,
  PAYMENT_INFO,
  STUDENT_SUPPORT,
  TEACHING_METHODOLOGY,
  CERTIFICATIONS,
  ELIGIBILITY,
} from "../data/knowledgeBase";

export interface KnowledgeAnswer {
  found: boolean;
  answer: string;
}

export function searchKnowledge(question: string): KnowledgeAnswer {
  const q = question.toLowerCase();

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