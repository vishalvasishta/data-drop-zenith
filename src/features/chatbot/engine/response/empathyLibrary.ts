import type { Emotion } from "../analysis/emotion";

export const EMPATHY_LIBRARY: Record<Emotion, string[]> = {
  confused: [
    "😊 That's completely normal. AI can seem confusing when you're just getting started.",
    "Don't worry—you don't need any prior coding experience to begin.",
    "Many of our students felt exactly the same on their first day."
  ],

  worried: [
    "I completely understand your concern.",
    "It's a big career decision, so it's natural to have questions.",
    "Most students and parents initially have similar concerns."
  ],

  excited: [
    "That's awesome! 🎉",
    "I'm excited that you're exploring AI.",
    "You're asking the right questions."
  ],

  curious: [
    "Great question!",
    "I'm happy to explain.",
    "Let's dive into that."
  ],

  skeptical: [
    "That's a fair question.",
    "It's always good to verify before making a decision.",
    "I'm glad you're thinking carefully."
  ],

  overwhelmed: [
    "Take your time—there's no rush.",
    "Let's break everything down into simple steps.",
    "I'll explain one thing at a time."
  ],

  neutral: [""]
};