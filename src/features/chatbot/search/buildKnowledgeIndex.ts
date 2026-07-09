import {
  COURSE_INFO,
  CURRICULUM,
  FEATURED_PROJECTS,
  CAREER_PATHS,
  BONUSES,
  FAQ_DATA,
  TEACHING_METHODOLOGY,
  LEARNING_OUTCOMES,
  PAYMENT_INFO,
  ELIGIBILITY_INFO,
  CERTIFICATION_INFO,
} from "../data/knowledgeBase";

import type { SearchDocument } from "./types";
export function buildKnowledgeIndex(): SearchDocument[] {
  const documents: SearchDocument[] = [
    documents.push({
      id: "course-info",
      type: "course",
      title: COURSE_INFO.name,
      content: [
        COURSE_INFO.duration,
        COURSE_INFO.fee,
        COURSE_INFO.mode,
        COURSE_INFO.language,
        COURSE_INFO.batchSize,
        COURSE_INFO.nextBatch,
      ].join(" "),
      keywords: [
        "course",
        "fee",
        "fees",
        "duration",
        "batch",
        "mode",
        "language",
      ],
      weight: 10,
      data: COURSE_INFO,
    });
  FAQ_DATA.forEach((faq) => {
    documents.push({
      id: faq.id,
      type: "faq",
      title: faq.question,
      content: faq.answer,
      keywords: faq.keywords,
      category: faq.category,
      weight: 10,
      data: faq,
    });
  });
  CURRICULUM.forEach((topic) => {
    documents.push({
      id: topic.id,
      type: "curriculum",
      title: topic.title,
      content: [
        topic.description,
        topic.project,
        topic.careerOutcome,
        topic.skills.join(" "),
      ].join(" "),
      keywords: [
        topic.title.toLowerCase(),
        ...topic.skills.map((s) => s.toLowerCase()),
      ],
      category: `Phase ${topic.phase}`,
      weight: 9,
      data: topic,
    });
  });
  FEATURED_PROJECTS.forEach((project) => {
    documents.push({
      id: project.id,
      type: "project",
      title: project.title,
      content: project.description,
      keywords: [
        project.category.toLowerCase(),
        ...project.techStack.map((t) => t.toLowerCase()),
      ],
      weight: 8,
      data: project,
    });
  });
  CAREER_PATHS.forEach((career) => {
    documents.push({
      id: career.id,
      type: "career",
      title: career.title,
      content: career.description,
      keywords: [
        ...career.keySkills.map((s) => s.toLowerCase()),
        ...career.topCompanies.map((c) => c.toLowerCase()),
      ],
      weight: 8,
      data: career,
    });
  });
  BONUSES.forEach((bonus, index) => {
    documents.push({
      id: `bonus-${index}`,
      type: "bonus",
      title: bonus.title,
      content: bonus.description,
      keywords: bonus.title.toLowerCase().split(" "),
      weight: 7,
      data: bonus,
    });
  });
  TEACHING_METHODOLOGY.forEach((item, index) => {
    documents.push({
      id: `teaching-${index}`,
      type: "teaching",
      title: item.title,
      content: item.description,
      keywords: item.title.toLowerCase().split(" "),
      weight: 7,
      data: item,
    });
  });
  LEARNING_OUTCOMES.forEach((item, index) => {
    documents.push({
      id: `outcome-${index}`,
      type: "outcome",
      title: item.title,
      content: item.description,
      keywords: item.title.toLowerCase().split(" "),
      weight: 7,
      data: item,
    });
  });
  documents.push({
    id: "payment-info",
    type: "payment",
    title: "Payment Information",
    content: Object.values(PAYMENT_INFO).join(" "),
    keywords: ["payment", "emi", "fee", "fees"],
    weight: 9,
    data: PAYMENT_INFO,
  });
  documents.push({
    id: "eligibility-info",
    type: "eligibility",
    title: "Eligibility",
    content: Object.values(ELIGIBILITY_INFO).join(" "),
    keywords: ["eligibility", "degree", "student", "join"],
    weight: 9,
    data: ELIGIBILITY_INFO,
  });
  documents.push({
    id: "certification-info",
    type: "certification",
    title: "Certification",
    content: Object.values(CERTIFICATION_INFO).join(" "),
    keywords: ["certificate", "certification"],
    weight: 8,
    data: CERTIFICATION_INFO,
  });
  return documents;
}
  ];
