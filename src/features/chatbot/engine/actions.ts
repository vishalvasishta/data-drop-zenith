
import type { BotResponse } from "../types";
import { COURSE_INFO, CURRICULUM, PLACEMENT_STATS, BONUSES } from "../data/knowledgeBase";
import { MAIN_MENU } from "../data/menuData";
import { FAQ_DATA } from "../data/faqData";
import { WELCOME_MESSAGE, ROLE_QUICK_REPLIES } from "../data/conversations/welcome";
import { MAIN_MENU_PROMPT } from "../data/conversations/mainMenu";
import { FOLLOW_UP_SUGGESTIONS } from "../data/conversations/followUpSuggestions";

export const BACK = "⬅️ Back to Menu";

// ── Shared helpers ─────────────────────────────────────────────────────────────

function menuReplies(): string[] {
  return MAIN_MENU.map((m) => `${m.icon} ${m.label}`);
}

function withBack(replies: string[]): string[] {
  return [...replies, BACK];
}

// ── State actions — professional marketing copy ────────────────────────────────

export function welcomeAction(): BotResponse {
  return {
    content: WELCOME_MESSAGE,
    quickReplies: ROLE_QUICK_REPLIES,
    nextState: "MAIN_MENU",
  };
}

export function mainMenuAction(): BotResponse {
  return {
    content: MAIN_MENU_PROMPT,
    quickReplies: menuReplies(),
  };
}

export function aboutAction(): BotResponse {
  return {
    content: `**The ${COURSE_INFO.name}** is not a crash course. It's an 18-month career transformation.

Most AI programs give you theory and a certificate. We give you **25+ production projects**, 1-on-1 mentorship, and placement support that has helped **500+ students** land roles at companies like Amazon, Microsoft, and Razorpay.

Here's what makes DATADROP different from every other program in India:`,
    quickReplies: withBack(["🗺️ Learning Roadmap", "📋 Full Curriculum", "🏆 Placement Stats"]),
    followUpSuggestions: FOLLOW_UP_SUGGESTIONS["ABOUT"],
    nextState: "ABOUT",
    component: "course-overview",
  };
}

export function roadmapAction(): BotResponse {
  return {
    content: `**Your 18-month journey from zero to AI engineer** — structured across 5 phases, each building directly on the last.

By the end of Phase 2 you'll be placing in the top 20% of ML candidates. By Phase 4, you'll be building LLM-powered systems that most engineers don't know exist. Tap any phase to see exactly what you'll master:`,
    quickReplies: withBack(["📋 Full Curriculum", "💼 Career Paths", "✅ Enroll Now"]),
    nextState: "ROADMAP",
    component: "roadmap",
  };
}

export function curriculumAction(): BotResponse {
  const total = CURRICULUM.length;
  const phases = 5;
  return {
    content: `**${total} modules across ${phases} phases** — every one ending with a real project you push to GitHub and own forever.

This isn't a list of YouTube tutorials stitched together. Each module is designed by Vishal Vasishta with a specific career outcome in mind. Select a phase to explore what's inside:`,
    quickReplies: withBack(["🗺️ Roadmap", "🚀 Projects", "✅ Enroll Now"]),
    followUpSuggestions: FOLLOW_UP_SUGGESTIONS["CURRICULUM"],
    nextState: "CURRICULUM",
    component: "curriculum-cards",
  };
}

export function careersAction(): BotResponse {
  return {
    content: `**6 high-paying AI career paths** you'll be qualified for after DATADROP — with real salary ranges from actual placements, not industry surveys.

The demand for AI engineers in India is growing faster than universities can produce them. Every role below has more open positions than qualified candidates right now:`,
    quickReplies: withBack(["🏆 Placement Stats", "🚀 Projects", "✅ Enroll Now"]),
    nextState: "CAREERS",
    component: "career-paths",
  };
}

export function placementAction(): BotResponse {
  const s = PLACEMENT_STATS;
  return {
    content: `**${s.placementRate} of DATADROP graduates** who complete all modules receive a job offer within ${s.avgTimeToPlacement}.

These aren't self-reported numbers. Every placement is verified — company, role, and salary. ${s.studentsPlaced} students placed across ${s.companiesHired} companies, with ${s.remoteRoles.toLowerCase()}.`,
    quickReplies: withBack(["💼 Career Paths", "💰 Course Fee", "✅ Enroll Now"]),
    followUpSuggestions: FOLLOW_UP_SUGGESTIONS["PLACEMENT"],
    nextState: "PLACEMENT",
    component: "placement-stats",
  };
}

export function projectsAction(): BotResponse {
  return {
    content: `**25+ production-grade projects** — not toy exercises, not datasets from Kaggle tutorials. These are systems built to run in the real world, reviewed by mentors, and added to your GitHub portfolio.

Three of our alumni have actually deployed their DATADROP projects at their current companies. Here are six of the most impressive:`,
    quickReplies: withBack(["📋 Full Curriculum", "🏆 Placement", "✅ Enroll Now"]),
    nextState: "PROJECTS",
    component: "project-cards",
  };
}

export function pricingAction(): BotResponse {
  const bonusTotal = "₹12,500+";
  return {
    content: `**${COURSE_INFO.fee}** — one-time, all-inclusive. No monthly fees, no hidden charges, no upsells.

To put that in perspective: a single 1-on-1 mock interview session at most platforms costs ₹2,000. We include **six** of them, plus everything below — all for ${COURSE_INFO.fee}.

✅ 18 months of live + recorded classes
✅ 28 modules across 5 phases
✅ 25+ real projects with mentor review
✅ Industry-recognised certificate
✅ Lifetime Discord community (1,000+ engineers)
✅ 6 months recorded-session access
✅ Dedicated placement counsellor from Month 15
✅ Job referrals to 150+ hiring partners
✅ All bonuses worth ${bonusTotal} — included FREE

💳 Pay via UPI, debit/credit card, or net banking · Secured by Razorpay
↩️ 7-day, no-questions-asked refund guarantee`,
    quickReplies: withBack(["🎁 Bonuses", "✅ Enroll Now", "📞 Talk to Counselor"]),
    followUpSuggestions: FOLLOW_UP_SUGGESTIONS["PRICING"],
    nextState: "PRICING",
  };
}

export function bonusesAction(): BotResponse {
  const list = BONUSES.map((b) => `**${b.title}** (worth ${b.value}) — ${b.description}`).join(
    "\n\n",
  );
  const total = BONUSES.reduce((sum) => sum, 0);
  void total;
  return {
    content: `**Everything included at no extra cost:**

${list}

Total bonus value: **₹12,500+** — all yours when you enroll for just ${COURSE_INFO.fee}. These aren't filler bonuses. The mock interviews and placement referrals alone are responsible for dozens of our placements.`,
    quickReplies: withBack(["💰 Course Fee", "✅ Enroll Now"]),
    nextState: "BONUSES",
  };
}

export function enrollmentAction(): BotResponse {
  return {
    content: `**Ready to start?** The next batch begins **${COURSE_INFO.nextBatch}** — seats are capped at 40 students.

Fill in the form below and our team will confirm your seat within 2 hours. Payment is secured through Razorpay.`,
    quickReplies: [],
    nextState: "ENROLLMENT",
    component: "enroll",
  };
}

export function paymentAction(): BotResponse {
  return {
    content: `**Initiating secure payment for ${COURSE_INFO.fee}...**

🔒 256-bit SSL · Secured by Razorpay
📱 UPI, debit card, credit card, net banking accepted
↩️ 7-day refund guarantee if you change your mind`,
    quickReplies: withBack(["❓ FAQs", "📞 Talk to Counselor"]),
    nextState: "PAYMENT",
  };
}

export function faqAction(): BotResponse {
  const categories = [...new Set(FAQ_DATA.map((f) => f.category))];
  return {
    content: `**${FAQ_DATA.length} questions answered** across ${categories.length} categories — fees, eligibility, placement, course structure, technical requirements, and more.

The most common questions are expanded below. Type any keyword to search, or browse by category:`,
    quickReplies: withBack(categories.slice(0, 5).map((c) => `❓ ${c}`)),
    nextState: "FAQ",
    component: "faq",
    faqData: FAQ_DATA.slice(0, 8),
  };
}

export function studentSupportAction(): BotResponse {
  return {
    content: `**Student Support**

Your go-to channels for any issue:

**LMS access:** ${COURSE_INFO.lmsUrl}
**Discord:** Use the invite from your welcome email
**Email:** ${COURSE_INFO.supportEmail} — response within 4 hours on weekdays

If your Discord invite has expired or your LMS login isn't working, email ${COURSE_INFO.supportEmail} with your enrolled address and we'll resolve it same-day.`,
    quickReplies: withBack([
      "🖥️ LMS Access",
      "💬 Discord Help",
      "📜 Certificate",
      "📞 Talk to Counselor",
    ]),
    nextState: "STUDENT_SUPPORT",
  };
}

export function contactAction(): BotResponse {
  return {
    content: `**Talk to a Course Counselor**

Our counselors are available **Monday–Saturday, 9 AM–7 PM IST** and typically reply on WhatsApp within 30 minutes.

📱 **WhatsApp:** ${COURSE_INFO.counselorWhatsApp}
📧 **Email:** ${COURSE_INFO.supportEmail}

Or leave your name and number below and we'll call you back within 2 hours:`,
    quickReplies: withBack(["✅ Enroll Now", "❓ FAQs"]),
    nextState: "CONTACT",
    component: "lead-capture",
  };
}

export function thankYouAction(): BotResponse {
  return {
    content: `🎉 **Welcome to DATADROP!**

Your enrollment is confirmed. Here's what happens next:

1. **Check your email** — your welcome pack and LMS login arrive within 15 minutes
2. **Join Discord** — the link is in your welcome email. Introduce yourself in #introductions
3. **Complete the setup guide** — install Python, VS Code, and Git before your first session
4. **Attend orientation** — details in your welcome email

Your batch starts **${COURSE_INFO.nextBatch}**. You're about to join 500+ DATADROP alumni who made the same decision — and changed their careers. Is there anything else I can help you with?`,
    quickReplies: menuReplies(),
    nextState: "MAIN_MENU",
  };
}

// ── Curriculum topic deep-dive ─────────────────────────────────────────────────

export function getCurriculumTopicResponse(topicTitle: string): BotResponse | null {
  const topic = CURRICULUM.find((t) => t.title.toLowerCase().includes(topicTitle.toLowerCase()));
  if (!topic) return null;

  return {
    content: `**${topic.title}** · ${topic.estimatedDuration} · Phase ${topic.phase}

${topic.description}

**Skills you'll gain:** ${topic.skills.join(", ")}

**Project:** ${topic.project}

**Career outcome:** ${topic.careerOutcome}`,
    quickReplies: ["📋 Full Curriculum", "✅ Enroll Now", BACK],
  };
}

// ── FAQ search ─────────────────────────────────────────────────────────────────

export function searchFAQ(query: string): BotResponse {
  const q = query.toLowerCase();
  const matches = FAQ_DATA.filter(
    (f) =>
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q),
  ).slice(0, 6);

  if (!matches.length) {
    return {
      content: `No FAQs found for "${query}". Try different keywords — or speak directly to a counselor who can answer any question in detail.`,
      quickReplies: ["📞 Talk to Counselor", BACK],
    };
  }

  return {
    content: `Found ${matches.length} answer${matches.length > 1 ? "s" : ""} for "${query}":`,
    quickReplies: [BACK, "📞 Talk to Counselor"],
    component: "faq",
    faqData: matches,
  };
}
