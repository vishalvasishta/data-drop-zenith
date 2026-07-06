// ── Personalized recommendation conversation text ──────────────────────────────
// Text-only content used to build the post-profiling recommendation message.
// Templating logic (which template to pick) stays in hooks/useChatbot.ts.

export const NOT_SURE_RECOMMENDATION =
  "No worries at all! I'd recommend exploring all the AI career paths we offer — Data Analyst, Data Scientist, AI Engineer, and Business Analyst — so you can see which one excites you the most.";

export const DEFAULT_RECOMMENDATION =
  "Great! Based on what you've shared, I'd recommend exploring all the AI career paths we offer — Data Analyst, Data Scientist, AI Engineer, and Business Analyst — to find the best fit for you.";

export function studentRecommendation(educationLabel: string, goalLabel: string): string {
  return `Excellent choice! Since you're a ${educationLabel} student aiming to become a ${goalLabel}, this program starts with Python fundamentals and gradually builds your SQL, Power BI, Statistics, Machine Learning and AI skills.`;
}

export function workingProfessionalRecommendation(educationLabel: string, goalLabel: string): string {
  return `Great goal! As a working professional with a ${educationLabel} background aiming for a career transition into ${goalLabel}, this program is designed to fit around your schedule while building the practical, job-ready skills you need for that transition.`;
}

export function careerSwitcherRecommendation(educationLabel: string, goalLabel: string): string {
  return `Perfect! Switching careers into ${goalLabel} is a big step, and with your ${educationLabel} background, this program gives you structured, step-by-step learning — from the fundamentals to job-ready skills — to make that switch smoothly.`;
}
