// ── Objection handling ─────────────────────────────────────────────────────────
// A lightweight, keyword-based detection layer that runs BEFORE the existing
// parser/state machine. It never touches ChatState — it only recognizes common
// sales objections in free-text user input and returns a dedicated response.
// If no objection is detected, the caller falls through to the normal parser.

interface ObjectionRule {
  keywords: string[];
  response: string;
}

const OBJECTION_RULES: ObjectionRule[] = [
  {
    // expensive / costly / fee is high / EMI
    keywords: ["expensive", "costly", "cost is high", "fee is high", "high fee", "afford", "emi", "too much money", "too pricey"],
    response:
      "I totally understand — it's a real investment! Here's the thing: AI professionals typically see salary jumps of 40-100% within their first year post-certification, so the program pays for itself quickly. We also offer easy EMI options starting at just a small monthly amount, so you don't have to pay it all upfront. Would you like details on the EMI plans?",
  },
  {
    // no coding / beginner
    keywords: ["no coding", "not a coder", "never coded", "beginner", "no programming", "don't know coding", "dont know coding", "zero experience"],
    response:
      "No worries at all — most of our learners start with zero coding background! The course begins from absolute fundamentals and builds up gradually with hands-on projects and live mentor support, so you're never stuck. Thousands of beginners have gone on to land AI roles this way.",
  },
  {
    // placement / job guarantee
    keywords: ["placement", "job guarantee", "guaranteed job", "will i get a job", "get placed", "job assurance"],
    response:
      "Great question! We provide dedicated placement assistance — resume building, mock interviews, referrals to our hiring partner network, and interview preparation support until you land a role. While no ethical program can 'guarantee' a job, our track record shows strong placement outcomes for learners who complete the program and projects.",
  },
  {
    // working professional / time constraints
    keywords: ["working", "job right now", "full time job", "no time", "don't have time", "dont have time", "busy schedule", "time constraint"],
    response:
      "That's exactly who this program is built for! Classes are scheduled on weekends/evenings and everything is recorded, so you can learn at your own pace around your job. Many of our learners are working professionals who upskill without quitting their current role.",
  },
  {
    // AI replacing jobs
    keywords: ["ai replacing jobs", "ai will replace", "ai take my job", "ai taking over", "will ai replace", "robots taking jobs"],
    response:
      "Fair concern! AI isn't eliminating jobs, it's shifting demand toward people who know how to build and work with AI. Companies across every industry are hiring for AI/ML roles right now, and that demand is only growing. Learning these skills puts you ahead of the shift instead of behind it.",
  },
];

export function detectObjection(rawInput: string): string | null {
  const input = rawInput.trim().toLowerCase();
  if (!input) return null;

  for (const rule of OBJECTION_RULES) {
    if (rule.keywords.some((keyword) => input.includes(keyword))) {
      return rule.response;
    }
  }

  return null;
}
