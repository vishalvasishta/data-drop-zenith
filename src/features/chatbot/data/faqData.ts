import type { FAQ } from '../types';

export const FAQ_DATA: FAQ[] = [
  // ── General ───────────────────────────────────────────────────────────────
  { id: 'g1', category: 'General', question: 'What is DATADROP?', answer: 'DATADROP is a premium AI career program that takes you from zero to job-ready in 18 months, covering Python, Machine Learning, Deep Learning, LLMs, Agentic AI, and deployment — taught live in Telugu + English.' },
  { id: 'g2', category: 'General', question: 'Who is this program for?', answer: 'Anyone who wants to build a career in AI/Data — freshers, working professionals switching domains, or entrepreneurs wanting to leverage AI. No prior coding experience needed.' },
  { id: 'g3', category: 'General', question: 'Do I need a coding background?', answer: 'No! We start from absolute basics — how to install Python, what a variable is — and progress to advanced AI topics. Many of our top students had zero coding experience.' },
  { id: 'g4', category: 'General', question: 'What language is the course taught in?', answer: 'Live classes are conducted in Telugu + English. All recorded videos are available in both Telugu and English.' },
  { id: 'g5', category: 'General', question: 'What is the duration of the program?', answer: 'The complete program is 18 months — covering fundamentals, ML, Deep Learning, Generative AI, and career preparation.' },
  { id: 'g6', category: 'General', question: 'Is this course live or recorded?', answer: 'Both! We have live interactive sessions + all recordings stored for 6 months so you can revisit any topic at any time.' },
  { id: 'g7', category: 'General', question: 'What is the batch size?', answer: 'We keep batches small — limited seats per cohort — so every student gets personal attention from mentors.' },
  { id: 'g8', category: 'General', question: 'How many projects will I build?', answer: 'You will build 25+ real-world projects throughout the program, from a data CLI tool to a full Agentic AI system.' },
  { id: 'g9', category: 'General', question: 'Will I get a certificate?', answer: 'Yes! You receive an industry-recognised DATADROP certificate upon successful completion of the program.' },
  { id: 'g10', category: 'General', question: 'Is this program worth it?', answer: 'Absolutely. Our graduates earn an average of ₹8.5 LPA within 3 months of completion. The ₹4,599 fee is less than the cost of one month\'s salary increase you\'ll get.' },

  // ── Curriculum ────────────────────────────────────────────────────────────
  { id: 'c1', category: 'Curriculum', question: 'What topics are covered in the program?', answer: 'Python, Logic Building, DSA, SQL, Pandas, NumPy, Excel, Matplotlib, Seaborn, ML (Regression, Classification, Clustering), Scikit-Learn, Neural Networks, Backpropagation, Transfer Learning, Computer Vision, NLP, LLM Fine-Tuning, Prompt Engineering, RAG, AI Agents, Vector Databases, API Development, Cloud Deployment, System Design, Agentic AI, Enterprise Deployment, and AI Product Design.' },
  { id: 'c2', category: 'Curriculum', question: 'Will I learn LLMs and ChatGPT-style AI?', answer: 'Yes — we cover Prompt Engineering, RAG, LLM Fine-tuning (LoRA/QLoRA), and building AI Agents using LangChain, LlamaIndex, and LangGraph.' },
  { id: 'c3', category: 'Curriculum', question: 'Is Deep Learning covered?', answer: 'Yes — Neural Networks, Backpropagation, CNNs, RNNs, LSTMs, Transformers, Transfer Learning, Computer Vision, and Sequence Modeling are all part of the curriculum.' },
  { id: 'c4', category: 'Curriculum', question: 'Do you teach cloud deployment?', answer: 'Yes — AWS and GCP fundamentals, EC2/Cloud Run, S3/GCS, serverless inference, CI/CD, and monitoring are all covered.' },
  { id: 'c5', category: 'Curriculum', question: 'Is SQL taught in this program?', answer: 'Yes — relational database design, advanced SQL (JOINs, window functions, CTEs), query optimisation, and integrating SQL with Python.' },
  { id: 'c6', category: 'Curriculum', question: 'Will I learn Pandas and NumPy?', answer: 'Yes — both are covered in depth. Pandas for data wrangling and NumPy for numerical computing form the foundation of the ML section.' },
  { id: 'c7', category: 'Curriculum', question: 'Is Generative AI part of the curriculum?', answer: 'Yes — Prompt Engineering, RAG systems, LLM Fine-Tuning, AI Agents, and Agentic AI are all dedicated modules.' },
  { id: 'c8', category: 'Curriculum', question: 'What ML libraries will I learn?', answer: 'Scikit-Learn, TensorFlow/Keras, PyTorch, Hugging Face Transformers, LangChain, LlamaIndex, and more.' },
  { id: 'c9', category: 'Curriculum', question: 'Is system design for AI covered?', answer: 'Yes — distributed ML training, feature stores, model registries, A/B testing, data pipelines, and reliability patterns.' },
  { id: 'c10', category: 'Curriculum', question: 'Will I learn how to fine-tune LLMs?', answer: 'Yes — we cover full fine-tuning, LoRA, QLoRA, dataset preparation, evaluation, and pushing models to Hugging Face Hub.' },

  // ── Pricing & Payment ─────────────────────────────────────────────────────
  { id: 'p1', category: 'Pricing', question: 'What is the course fee?', answer: 'The complete 18-month program is available for just ₹4,599 — a one-time payment that gives you lifetime community access and 6 months of recorded sessions.' },
  { id: 'p2', category: 'Pricing', question: 'Are there any EMI options?', answer: 'We are working on EMI plans. Please talk to a counsellor to check the latest available payment options.' },
  { id: 'p3', category: 'Pricing', question: 'Is there a refund policy?', answer: 'We offer a 7-day satisfaction guarantee. If you are not happy with the program, contact support within 7 days of your first class for a full refund.' },
  { id: 'p4', category: 'Pricing', question: 'What does the fee include?', answer: 'Everything — live classes, recorded sessions (6 months), 1-on-1 mock interviews, resume review, LinkedIn review, Discord community (lifetime), project templates, guest sessions, and portfolio review.' },
  { id: 'p5', category: 'Pricing', question: 'Is the payment secure?', answer: 'Yes — we use Razorpay, India\'s most trusted payment gateway, with 256-bit SSL encryption and support for UPI, debit cards, credit cards, and net banking.' },
  { id: 'p6', category: 'Pricing', question: 'Can I pay via UPI?', answer: 'Yes! We accept UPI, debit cards, credit cards, net banking, and wallets via Razorpay.' },
  { id: 'p7', category: 'Pricing', question: 'Will I get a receipt after payment?', answer: 'Yes — an automated receipt will be sent to your registered email address immediately after successful payment.' },
  { id: 'p8', category: 'Pricing', question: 'Is there a group or corporate discount?', answer: 'Yes — contact our counsellor for group enrollments of 3 or more students. Corporate training packages are also available.' },

  // ── Placement & Careers ───────────────────────────────────────────────────
  { id: 'pl1', category: 'Placement', question: 'What is the placement rate?', answer: 'Our placement rate is 92% — 9 out of every 10 DATADROP graduates land a job within 3 months of completing the program.' },
  { id: 'pl2', category: 'Placement', question: 'What is the average salary after the course?', answer: 'Our graduates earn an average of ₹8.5 LPA, with the highest package to date being ₹28 LPA.' },
  { id: 'pl3', category: 'Placement', question: 'Which companies hire DATADROP graduates?', answer: 'Our graduates work at TCS, Infosys, Wipro, HCL, Amazon, Microsoft, Flipkart, Swiggy, Zomato, and 150+ other companies.' },
  { id: 'pl4', category: 'Placement', question: 'Do you provide placement assistance?', answer: 'Yes — dedicated placement support including mock interviews, resume review, referrals, job portal access, and counsellor guidance throughout your job search.' },
  { id: 'pl5', category: 'Placement', question: 'What job roles can I get after this program?', answer: 'Data Analyst, ML Engineer, AI Engineer, Data Scientist, NLP Engineer, Computer Vision Engineer, MLOps Engineer, AI Product Manager, LLM Engineer, and more.' },
  { id: 'pl6', category: 'Placement', question: 'How many students have been placed?', answer: 'Over 500 students have been successfully placed so far, with the number growing every batch.' },
  { id: 'pl7', category: 'Placement', question: 'Do you conduct mock interviews?', answer: 'Yes — every student gets 1-on-1 mock interviews with industry professionals, plus HR round preparation and coding challenge practice.' },
  { id: 'pl8', category: 'Placement', question: 'Can I get a job in a product-based company?', answer: 'Yes! Several of our graduates work at top product companies. The curriculum covers system design and advanced AI topics specifically to help you crack product-company interviews.' },

  // ── Mentorship & Support ──────────────────────────────────────────────────
  { id: 'm1', category: 'Mentorship', question: 'Will I get 1-on-1 mentorship?', answer: 'Yes — every student has access to 1-on-1 mentorship sessions with the instructor and senior teaching assistants.' },
  { id: 'm2', category: 'Mentorship', question: 'What if I miss a live class?', answer: 'No problem — every live class is recorded and available within 24 hours. You can also ask questions in our Discord community.' },
  { id: 'm3', category: 'Mentorship', question: 'How long are the live sessions?', answer: 'Live sessions are typically 2–3 hours on weekday evenings and Saturday mornings, designed for working professionals.' },
  { id: 'm4', category: 'Mentorship', question: 'Is there a community for students?', answer: 'Yes — a private Discord server exclusively for DATADROP students, with channels for each topic, project showcases, job sharing, and direct mentor access.' },
  { id: 'm5', category: 'Mentorship', question: 'What kind of support is available if I am stuck?', answer: 'You can raise doubts in Discord, attend weekly doubt-clearing sessions, post in the forum, or book a 1-on-1 call with a teaching assistant.' },
  { id: 'm6', category: 'Mentorship', question: 'How quickly are doubts resolved?', answer: 'Most doubts are resolved within 24 hours via Discord. Urgent technical issues can be escalated to a TA in real time during live sessions.' },
  { id: 'm7', category: 'Mentorship', question: 'Who is the instructor?', answer: 'The program is led by industry practitioners with 5+ years of hands-on AI/ML experience, having worked at top MNCs and built real AI products.' },

  // ── Schedule & Format ─────────────────────────────────────────────────────
  { id: 's1', category: 'Schedule', question: 'When do the next batches start?', answer: 'New batches start every 6–8 weeks. Contact our counsellor or enroll now to be placed in the next available batch.' },
  { id: 's2', category: 'Schedule', question: 'How many hours per week do I need to commit?', answer: 'Approximately 8–12 hours per week — 4–6 hours of live classes plus 4–6 hours of self-study and project work.' },
  { id: 's3', category: 'Schedule', question: 'Is the schedule flexible for working professionals?', answer: 'Yes — live sessions are held in the evenings (6–9 PM IST) and on Saturday mornings so you can learn while working full-time.' },
  { id: 's4', category: 'Schedule', question: 'What if I fall behind in the curriculum?', answer: 'Use the recorded sessions to catch up. You also have access to a structured self-paced track with assignments you can complete at your own pace.' },
  { id: 's5', category: 'Schedule', question: 'Are there any assignments or assessments?', answer: 'Yes — weekly assignments, monthly project submissions, and a final capstone project that goes into your portfolio.' },
  { id: 's6', category: 'Schedule', question: 'How long will I have access to course materials?', answer: 'Discord community access is lifetime. Recorded video access is 6 months from enrollment date. Projects and materials are yours to keep forever.' },

  // ── Technical Requirements ────────────────────────────────────────────────
  { id: 't1', category: 'Technical', question: 'What laptop or PC specs do I need?', answer: 'Any laptop with 8GB RAM, an Intel i5 / AMD Ryzen 5 or better processor, and Windows 10+, macOS, or Ubuntu. For deep learning we provide free cloud GPU access (Google Colab Pro guidance).' },
  { id: 't2', category: 'Technical', question: 'Do I need a GPU for deep learning?', answer: 'No — we teach you to use free cloud GPUs (Google Colab, Kaggle Notebooks). Local GPU is optional but helpful for advanced projects.' },
  { id: 't3', category: 'Technical', question: 'What software will I need?', answer: 'VS Code, Python 3.10+, Anaconda, Git — all free and we guide you through setup on day one.' },
  { id: 't4', category: 'Technical', question: 'Is internet connection speed important?', answer: 'A stable connection of at least 10 Mbps is recommended for attending live Zoom/Google Meet sessions without interruption.' },
  { id: 't5', category: 'Technical', question: 'Do I need to know maths before joining?', answer: 'Basic 10th-grade maths is sufficient. We teach the necessary statistics, linear algebra, and calculus concepts as part of the curriculum — no advanced maths degree required.' },

  // ── Bonuses ───────────────────────────────────────────────────────────────
  { id: 'b1', category: 'Bonuses', question: 'What bonuses are included?', answer: '1-on-1 mock interviews, resume & LinkedIn review, lifetime Discord community, 6-month recorded session access, 25+ project templates, monthly industry guest sessions, and portfolio review — all FREE with enrollment.' },
  { id: 'b2', category: 'Bonuses', question: 'Are the bonus sessions live?', answer: 'Mock interviews, resume reviews, and guest sessions are all conducted live. You can book slots as soon as you enroll.' },
  { id: 'b3', category: 'Bonuses', question: 'How valuable are the bonuses?', answer: 'Combined value of all bonuses is over ₹12,500 — more than 2x the course fee. You get all of this at no extra cost.' },
  { id: 'b4', category: 'Bonuses', question: 'Will there be guest speakers from the industry?', answer: 'Yes — we host monthly live sessions with AI practitioners from companies like Amazon, Microsoft, Google, and leading AI startups.' },

  // ── Enrollment ────────────────────────────────────────────────────────────
  { id: 'e1', category: 'Enrollment', question: 'How do I enroll?', answer: 'Click "Enroll Now" on any page, fill in your details, and complete the secure payment. Enrollment is confirmed instantly.' },
  { id: 'e2', category: 'Enrollment', question: 'Is there an entrance test or interview?', answer: 'No entrance test needed. The program is open to anyone willing to commit to learning. Our counsellors may do a quick orientation call to understand your goals.' },
  { id: 'e3', category: 'Enrollment', question: 'What happens after I pay?', answer: 'You receive an email confirmation with batch details, Discord invite link, onboarding guide, and setup instructions within 24 hours.' },
  { id: 'e4', category: 'Enrollment', question: 'Can I enroll anytime?', answer: 'Enrollment is open year-round, but seats are limited per batch. Early enrollment guarantees your spot in the next batch.' },
  { id: 'e5', category: 'Enrollment', question: 'I enrolled — what should I do next?', answer: 'Check your email for the welcome pack, join Discord, introduce yourself in the community, and complete the pre-course setup checklist shared in your welcome email.' },
  { id: 'e6', category: 'Enrollment', question: 'Can I transfer my enrollment to someone else?', answer: 'Enrollments are non-transferable. If you have a special circumstance, contact support@datadrop.in within 7 days.' },

  // ── Existing Students ─────────────────────────────────────────────────────
  { id: 'es1', category: 'Student Support', question: 'I am an existing student. How do I access the LMS?', answer: 'Log in at lms.datadrop.in using your registered email. If you have trouble, email support@datadrop.in.' },
  { id: 'es2', category: 'Student Support', question: 'I cannot access the Discord server. What do I do?', answer: 'Email support@datadrop.in with your enrollment ID and we will restore access within 24 hours.' },
  { id: 'es3', category: 'Student Support', question: 'How do I download my certificate?', answer: 'Certificates are issued after you complete all modules and the capstone project. You can download it from the LMS portal under "My Certificates".' },
  { id: 'es4', category: 'Student Support', question: 'Can I get an extension on my recorded session access?', answer: 'Yes — extensions are available for 3-month periods. Contact support with your reason and enrollment ID for approval.' },
  { id: 'es5', category: 'Student Support', question: 'I missed the placement drive. What should I do?', answer: 'Contact your placement counsellor directly via Discord or email placement@datadrop.in — we will include you in the next drive.' },

  // ── About the Company ─────────────────────────────────────────────────────
  { id: 'a1', category: 'About', question: 'When was DATADROP founded?', answer: 'DATADROP was founded by a team of AI practitioners who saw the need for quality, affordable, vernacular AI education in India — specifically in Telugu.' },
  { id: 'a2', category: 'About', question: 'Is DATADROP accredited?', answer: 'DATADROP is a private training institute. Our certificate is industry-recognised, backed by our strong placement track record and industry partnerships.' },
  { id: 'a3', category: 'About', question: 'Where is DATADROP based?', answer: 'DATADROP operates fully online, serving students across Andhra Pradesh, Telangana, and all of India. No travel required.' },
  { id: 'a4', category: 'About', question: 'How can I contact DATADROP support?', answer: 'Email us at support@datadrop.in, or talk to a counsellor directly via WhatsApp. We respond within 24 hours.' },
  { id: 'a5', category: 'About', question: 'Does DATADROP have any social media presence?', answer: 'Yes — follow us on YouTube, Instagram, LinkedIn, and Twitter @DataDropAI for free tutorials, student success stories, and industry insights.' },

  // ── Career & Scope ────────────────────────────────────────────────────────
  { id: 'cr1', category: 'Careers', question: 'Is AI a good career choice in 2025?', answer: 'AI is the fastest-growing career field globally. India alone needs 1 million+ AI professionals by 2026. The demand far outpaces supply, making it an excellent career choice.' },
  { id: 'cr2', category: 'Careers', question: 'What is the salary range for AI engineers in India?', answer: 'Entry-level AI roles start at ₹5–8 LPA. Mid-level engineers earn ₹12–20 LPA. Senior AI engineers and architects earn ₹25–50+ LPA.' },
  { id: 'cr3', category: 'Careers', question: 'Can I get an international job after this program?', answer: 'Yes — several DATADROP graduates now work remotely for US and European companies. The curriculum is designed to meet international job requirements.' },
  { id: 'cr4', category: 'Careers', question: 'Is Data Science the same as AI Engineering?', answer: 'They are related but different. Data Science focuses on analytics and insights; AI Engineering focuses on building and deploying AI systems. Our program covers both.' },
  { id: 'cr5', category: 'Careers', question: 'Should I learn AI or traditional software development?', answer: 'The future is AI-integrated software. We recommend learning both — our program teaches you AI built on top of solid software engineering foundations.' },
  { id: 'cr6', category: 'Careers', question: 'Can I freelance as an AI engineer after this program?', answer: 'Absolutely. Freelance AI engineering is one of the highest-paid remote gigs globally. Our curriculum covers API development, prompt engineering, and AI product design — all highly sought-after freelance skills.' },
];
