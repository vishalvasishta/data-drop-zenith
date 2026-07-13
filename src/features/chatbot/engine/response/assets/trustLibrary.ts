export type TrustCategory =
  | "beginner"
  | "placement"
  | "projects"
  | "mentorship"
  | "pricing"
  | "general";

export const TRUST_LIBRARY: Record<TrustCategory, string[]> = {
  beginner: [
    "The program is designed for complete beginners, so you don't need any prior coding experience.",
    "We start from the fundamentals and gradually build your AI skills step by step.",
    "Many of our successful students started with zero programming knowledge."
  ],

  placement: [
    "The curriculum focuses on industry-ready skills that employers are actively looking for.",
    "You'll build a strong portfolio that helps you stand out during interviews.",
    "We also provide career guidance and placement assistance throughout your journey."
  ],

  projects: [
    "Learning by building real projects is one of the fastest ways to become job-ready.",
    "Every major topic includes practical implementation so you gain real experience.",
    "Your portfolio will demonstrate your skills to recruiters."
  ],

  mentorship: [
    "Our mentors guide you throughout the program whenever you need support.",
    "You're never expected to learn everything on your own.",
    "Regular mentor support helps you stay consistent and confident."
  ],

  pricing: [
    "Think of this as an investment in a long-term AI career rather than just another course.",
    "The skills you learn are designed to create opportunities that far outweigh the course fee.",
    "The goal isn't just learning—it's building a career."
  ],

  general: [
    "Our goal is to help you build practical, industry-ready skills.",
    "Everything in the program is designed around real-world career outcomes.",
    "We focus on helping students become confident AI professionals."
  ]
};