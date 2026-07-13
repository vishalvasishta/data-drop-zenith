export type CTACategory =
  | "roadmap"
  | "curriculum"
  | "pricing"
  | "placement"
  | "projects"
  | "mentor"
  | "enroll"
  | "general";

export const CTA_LIBRARY: Record<CTACategory, string[]> = {
  roadmap: [
    "📖 Would you like to see the complete learning roadmap?",
    "🗺️ I can show you the month-by-month roadmap."
  ],

  curriculum: [
    "📚 Would you like to explore the complete curriculum?",
    "💻 I can show you everything you'll learn."
  ],

  pricing: [
    "💳 Would you like me to explain what's included in the fee?",
    "📦 I can also show you everything you receive after enrollment."
  ],

  placement: [
    "🚀 Would you like to see how we prepare students for placements?",
    "💼 I can explain our career support process."
  ],

  projects: [
    "🛠️ Would you like to see the real-world projects you'll build?",
    "📂 I can show you the complete project roadmap."
  ],

  mentor: [
    "👨‍🏫 Would you like to know how mentor support works?",
    "🤝 I can explain how our mentors guide students."
  ],

  enroll: [
    "🎯 Shall I help you start your enrollment?",
    "✅ You're just one step away from beginning your AI journey."
  ],

  general: [
    "😊 What would you like to explore next?",
    "💬 Feel free to ask me anything about the program."
  ]
};