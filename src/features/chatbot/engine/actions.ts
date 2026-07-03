import type { BotResponse, ChatState } from '../types';
import { COURSE_INFO, CURRICULUM, PLACEMENT_STATS, BONUSES } from '../data/knowledgeBase';
import { MAIN_MENU } from '../data/menuData';
import { FAQ_DATA } from '../data/faqData';

const BACK = '⬅️ Back to Menu';

// ── Shared helpers ────────────────────────────────────────────────────────────

function menuReplies(): string[] {
  return MAIN_MENU.map((m) => `${m.icon} ${m.label}`);
}

function withBack(replies: string[]): string[] {
  return [...replies, BACK];
}

// ── State action functions ─────────────────────────────────────────────────────
// Each function returns a BotResponse. No nested if/else — dispatch table only.

export function welcomeAction(): BotResponse {
  return {
    content: `👋 **Welcome to DATADROP!**\n\nI'm your AI career advisor. I can help you explore the *${COURSE_INFO.name}*, understand the curriculum, check placement stats, or get you enrolled.\n\nHow can I help you today?`,
    quickReplies: menuReplies(),
    nextState: 'MAIN_MENU',
  };
}

export function mainMenuAction(): BotResponse {
  return {
    content: '🎯 **Main Menu** — Choose a topic to explore:',
    quickReplies: menuReplies(),
  };
}

export function aboutAction(): BotResponse {
  return {
    content: `📚 **About ${COURSE_INFO.name}**\n\n🕐 **Duration:** ${COURSE_INFO.duration}\n💰 **Fee:** ${COURSE_INFO.fee} (one-time)\n📡 **Mode:** ${COURSE_INFO.mode}\n🗣️ **Language:** ${COURSE_INFO.language}\n🏆 **Certificate:** Yes — industry recognised\n\nThis program is designed for **anyone** — freshers, working professionals, or career switchers — who wants to build a high-paying AI career from scratch. No prior coding experience needed.\n\nWe cover everything from Python basics to deploying enterprise AI systems in just 18 months.`,
    quickReplies: withBack(['📋 See Curriculum', '🗺️ Learning Roadmap', '✅ Enroll Now']),
    nextState: 'ABOUT',
  };
}

export function roadmapAction(): BotResponse {
  return {
    content: `🗺️ **18-Month Learning Roadmap**\n\n**Phase 1 — Foundations (Months 1–4)**\n• Python, Logic Building, DSA, SQL, Excel\n• Core data manipulation with Pandas & NumPy\n• Data visualisation with Matplotlib & Seaborn\n\n**Phase 2 — Machine Learning (Months 5–9)**\n• Regression, Classification & Clustering\n• Scikit-Learn pipelines & model deployment\n• Feature engineering & model evaluation\n\n**Phase 3 — Deep Learning & NLP (Months 10–13)**\n• Neural Networks, CNNs, RNNs, Transformers\n• Computer Vision & Sequence Modeling\n• Transfer Learning with HuggingFace\n\n**Phase 4 — Generative AI & LLMs (Months 14–16)**\n• Prompt Engineering, RAG, LLM Fine-Tuning\n• AI Agents & Vector Databases\n\n**Phase 5 — Production & Career (Months 17–18)**\n• API Dev, Cloud Deployment, System Design\n• Agentic AI, Enterprise AI, AI Product Design\n• Portfolio, mock interviews & placement prep`,
    quickReplies: withBack(['📋 Full Curriculum', '💼 Career Outcomes', '✅ Enroll Now']),
    nextState: 'ROADMAP',
  };
}

export function curriculumAction(): BotResponse {
  const topicList = CURRICULUM.map((t, i) => `${i + 1}. **${t.title}** _(${t.estimatedDuration})_`).join('\n');
  return {
    content: `🎓 **Complete Curriculum — 28 Modules**\n\n${topicList}\n\nEach module includes live sessions, recorded videos, assignments, and a real-world project. Type any topic name to learn more about it.`,
    quickReplies: withBack(['🗺️ Roadmap', '🚀 Projects', '✅ Enroll Now']),
    nextState: 'CURRICULUM',
    component: null,
  };
}

export function careersAction(): BotResponse {
  return {
    content: `💼 **Career Opportunities After DATADROP**\n\nOur graduates land roles such as:\n• 🤖 ML / AI Engineer — ₹8–20 LPA\n• 📊 Data Scientist — ₹8–18 LPA\n• 👁️ Computer Vision Engineer — ₹10–22 LPA\n• 🗣️ NLP / LLM Engineer — ₹12–25 LPA\n• ⚙️ MLOps / Platform Engineer — ₹12–28 LPA\n• 🧠 AI Product Manager — ₹15–30 LPA\n• 🤖 Agentic AI Developer — ₹15–35 LPA\n\n**Top hiring companies:**\nAmazon, Microsoft, Flipkart, Swiggy, Razorpay, TCS, Infosys, and 150+ more.\n\n🌍 Several graduates now work remotely for US & European companies.`,
    quickReplies: withBack(['🏆 Placement Stats', '🚀 Projects', '✅ Enroll Now']),
    nextState: 'CAREERS',
  };
}

export function placementAction(): BotResponse {
  const s = PLACEMENT_STATS;
  return {
    content: `🏆 **Placement Statistics**\n\n✅ **Placement Rate:** ${s.placementRate}\n💰 **Average Salary:** ${s.averageSalary}\n🚀 **Highest Package:** ${s.highestSalary}\n🏢 **Companies:** ${s.companiesHired}\n👥 **Students Placed:** ${s.studentsPlaced}\n⏱️ **Avg. Time to Placement:** ${s.avgTimeToPlacement}\n\n**Our placement support includes:**\n• 1-on-1 mock interviews\n• Resume & LinkedIn profile review\n• Referrals to hiring partners\n• Dedicated placement counsellor\n• Job portal premium access`,
    quickReplies: withBack(['💼 Career Roles', '💰 Course Fee', '✅ Enroll Now']),
    nextState: 'PLACEMENT',
  };
}

export function projectsAction(): BotResponse {
  const sample = CURRICULUM.slice(0, 8).map((t) => `• **${t.title}:** ${t.project}`).join('\n');
  return {
    content: `🚀 **25+ Real-World Projects**\n\nYou'll build production-grade projects, including:\n\n${sample}\n• …and 17 more across every module!\n\nEvery project is portfolio-ready, pushed to GitHub, and reviewed by mentors. Your final capstone becomes the centrepiece of your job applications.`,
    quickReplies: withBack(['📋 Full Curriculum', '🏆 Placement', '✅ Enroll Now']),
    nextState: 'PROJECTS',
  };
}

export function pricingAction(): BotResponse {
  return {
    content: `💰 **Course Fee**\n\n**${COURSE_INFO.fee}** — One-time payment\n\n✅ 18 months of live + recorded classes\n✅ 28 modules, 25+ projects\n✅ Certificate of completion\n✅ Lifetime Discord community\n✅ 6 months recorded-session access\n✅ 1-on-1 mock interviews\n✅ Resume & LinkedIn review\n✅ Placement assistance\n✅ Project templates & guest sessions\n\n💳 Pay via UPI, debit/credit card, net banking\n🔒 Secured by Razorpay\n↩️ 7-day satisfaction guarantee\n\n*Total bonus value: ₹12,500+ — included FREE*`,
    quickReplies: withBack(['🎁 See Bonuses', '✅ Enroll Now', '📞 Talk to Counselor']),
    nextState: 'PRICING',
  };
}

export function bonusesAction(): BotResponse {
  const list = BONUSES.map((b) => `🎁 **${b.title}** — ${b.value}`).join('\n');
  return {
    content: `🎁 **Exclusive Bonuses Included**\n\n${list}\n\n💡 Total bonus value: **₹12,500+** — all included at no extra cost when you enroll for just ${COURSE_INFO.fee}.`,
    quickReplies: withBack(['💰 Course Fee', '✅ Enroll Now']),
    nextState: 'BONUSES',
  };
}

export function enrollmentAction(): BotResponse {
  return {
    content: `✅ **Ready to start your AI journey?**\n\nFill in the form below and we'll get you enrolled. Payment is only ${COURSE_INFO.fee} — secured by Razorpay.\n\nPlease complete the enrollment form:`,
    quickReplies: [],
    nextState: 'ENROLLMENT',
    component: 'enroll',
  };
}

export function paymentAction(): BotResponse {
  return {
    content: `💳 **Initiating Payment...**\n\nYou'll be redirected to our secure Razorpay checkout to complete your payment of **${COURSE_INFO.fee}**.\n\n🔒 256-bit SSL secured\n📱 UPI, cards, net banking accepted`,
    quickReplies: withBack(['❓ FAQs', '📞 Talk to Counselor']),
    nextState: 'PAYMENT',
  };
}

export function faqAction(): BotResponse {
  const categories = [...new Set(FAQ_DATA.map((f) => f.category))];
  return {
    content: `❓ **Frequently Asked Questions**\n\nBrowse ${FAQ_DATA.length} questions across ${categories.length} categories:\n${categories.map((c) => `• ${c}`).join('\n')}\n\nSearch any topic or select a category below:`,
    quickReplies: withBack(categories.slice(0, 6).map((c) => `❓ ${c}`)),
    nextState: 'FAQ',
    component: 'faq',
    faqData: FAQ_DATA.slice(0, 8),
  };
}

export function studentSupportAction(): BotResponse {
  return {
    content: `👤 **Existing Student Support**\n\n**Quick links:**\n• 🖥️ LMS: lms.datadrop.in\n• 💬 Discord: Use the invite link from your welcome email\n• 📧 Email: ${COURSE_INFO.supportEmail}\n\n**Common issues:**\n• LMS access problems\n• Discord invite expired\n• Certificate download\n• Session recording access\n• Placement assistance\n\nHow can I help you today?`,
    quickReplies: withBack(['🖥️ LMS Access', '💬 Discord Help', '📜 Certificate', '📞 Talk to Counselor']),
    nextState: 'STUDENT_SUPPORT',
  };
}

export function contactAction(): BotResponse {
  return {
    content: `📞 **Talk to a Counselor**\n\nOur counselors are available **Mon–Sat, 9 AM – 7 PM IST**.\n\n📱 **WhatsApp:** ${COURSE_INFO.counselorWhatsApp}\n📧 **Email:** ${COURSE_INFO.supportEmail}\n\nLeave your details and a counselor will call you back within 2 hours:`,
    quickReplies: withBack(['✅ Enroll Now', '❓ FAQs']),
    nextState: 'CONTACT',
    component: 'lead-capture',
  };
}

export function thankYouAction(): BotResponse {
  return {
    content: `🎉 **Thank You!**\n\nYour enrollment is confirmed! Welcome to the DATADROP family.\n\n**Next steps:**\n1. Check your email for the welcome pack\n2. Join our Discord community\n3. Complete the pre-course setup checklist\n4. Attend the orientation session\n\n🚀 Your AI career journey starts now! Is there anything else I can help you with?`,
    quickReplies: menuReplies(),
    nextState: 'MAIN_MENU',
  };
}

// ── Topic lookup (used by parser for curriculum deep-dives) ──────────────────

export function getCurriculumTopicResponse(topicTitle: string): BotResponse | null {
  const topic = CURRICULUM.find((t) =>
    t.title.toLowerCase().includes(topicTitle.toLowerCase()),
  );
  if (!topic) return null;
  return {
    content: `📖 **${topic.title}** _(${topic.estimatedDuration})_\n\n**What you'll learn:**\n${topic.description}\n\n**Career outcome:** ${topic.careerOutcome}\n\n**Project:** ${topic.project}`,
    quickReplies: ['📋 Full Curriculum', '✅ Enroll Now', BACK],
  };
}

// ── FAQ search ────────────────────────────────────────────────────────────────

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
      content: `🔍 No FAQs found for "${query}". Try different keywords or speak to a counselor.`,
      quickReplies: ['📞 Talk to Counselor', BACK],
    };
  }

  return {
    content: `🔍 Found ${matches.length} result${matches.length > 1 ? 's' : ''} for **"${query}"**:`,
    quickReplies: [BACK, '📞 Talk to Counselor'],
    component: 'faq',
    faqData: matches,
  };
}

export { BACK };
