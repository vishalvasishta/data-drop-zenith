// ── DATADROP Knowledge Base ───────────────────────────────────────────────────
// Single source of truth for all chatbot content. No placeholder text.

export const COURSE_INFO = {
  // ─────────────────────────────────────────────────────────────
  // Basic Information
  // ─────────────────────────────────────────────────────────────

  name: "Complete AI Career Program",

  tagline:
    "A complete step-by-step AI career program designed for beginners who want to become job-ready AI professionals.",

  duration: "18 Months",

  fee: "₹4,599",

  mode: "Live Online + Recorded",

  language: "Telugu + English",

  level: "Beginner to Advanced",

  category: "Artificial Intelligence, Machine Learning & Data Science",

  // ─────────────────────────────────────────────────────────────
  // Training Model
  // ─────────────────────────────────────────────────────────────

  liveClasses: true,

  recordedClasses: true,

  lifetimeRecordingAccess: true,

  mentorSupport: true,

  doubtSupport: true,

  practicalTraining: true,

  realProjects: true,

  assignments: true,

  quizzes: true,

  mockInterviews: true,

  placementSupport: true,

  certificate: "Industry-recognised Certificate of Completion",

  // ─────────────────────────────────────────────────────────────
  // Batch Information
  // ─────────────────────────────────────────────────────────────

  nextBatch: "September 5, 2026",

  batchSize: "Maximum 40 students",

  seatsAvailable: "Limited",

  enrollmentStatus: "Open",

  // ─────────────────────────────────────────────────────────────
  // Student Profile
  // ─────────────────────────────────────────────────────────────

  idealFor: [
    "12th Pass Students",
    "Degree Students",
    "Fresh Graduates",
    "Job Seekers",
    "Career Switchers",
    "Working Professionals",
  ],

  // ─────────────────────────────────────────────────────────────
  // Contact
  // ─────────────────────────────────────────────────────────────

  counselorWhatsApp: "+91 8330961514",

  supportEmail: "support@datadrop.ai",

  supportHours: "Monday - Saturday | 9:00 AM - 7:00 PM",

  responseTime: "Usually within 30 minutes",

  // ─────────────────────────────────────────────────────────────
  // Learning Outcome
  // ─────────────────────────────────────────────────────────────

  finalOutcome:
    "Students graduate with practical AI skills, an industry-ready portfolio, interview preparation, and career guidance for AI and Data Science roles.",
};
// ─────────────────────────────────────────────────────────────────────────────
// COURSE FEATURES
// High-level program highlights used throughout the chatbot.
// ─────────────────────────────────────────────────────────────────────────────

export interface CourseFeature {
  id: string;
  title: string;
  description: string;
  category:
    | "learning"
    | "career"
    | "projects"
    | "support"
    | "placement"
    | "community";
}

export const COURSE_FEATURES: CourseFeature[] = [
  {
    id: "live-classes",
    title: "Live Interactive Classes",
    description:
      "Attend live weekend sessions where mentors teach concepts step-by-step and answer questions in real time.",
    category: "learning",
  },
  {
    id: "recordings",
    title: "Class Recordings",
    description:
      "Every live class recording is shared so you can revise anytime.",
    category: "learning",
  },
  {
    id: "assignments",
    title: "Assignments After Every Module",
    description:
      "Practice every concept with structured assignments designed to improve problem-solving skills.",
    category: "learning",
  },
  {
    id: "projects",
    title: "Real Industry Projects",
    description:
      "Build production-style AI, Machine Learning and Generative AI projects that strengthen your portfolio.",
    category: "projects",
  },
  {
    id: "portfolio",
    title: "Portfolio Building",
    description:
      "Create a professional GitHub portfolio showcasing your skills to recruiters.",
    category: "projects",
  },
  {
    id: "mentor-support",
    title: "Mentor Support",
    description:
      "Get continuous guidance from experienced mentors whenever you get stuck.",
    category: "support",
  },
  {
    id: "doubt-support",
    title: "Dedicated Doubt Support",
    description:
      "Ask unlimited questions during your learning journey.",
    category: "support",
  },
  {
    id: "resume",
    title: "Resume Building",
    description:
      "Build an ATS-friendly resume that highlights your technical skills and projects.",
    category: "career",
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile Optimization",
    description:
      "Learn how to create a recruiter-friendly LinkedIn profile that attracts job opportunities.",
    category: "career",
  },
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    description:
      "Practice technical and HR interviews with personalized feedback.",
    category: "placement",
  },
  {
    id: "placement-guidance",
    title: "Placement Guidance",
    description:
      "Receive complete guidance on job applications, interview preparation, and career planning.",
    category: "placement",
  },
  {
    id: "referrals",
    title: "Referral Support",
    description:
      "Eligible students receive referrals through our hiring network whenever opportunities are available.",
    category: "placement",
  },
  {
    id: "community",
    title: "Learning Community",
    description:
      "Become part of the DATADROP student community to network, collaborate and grow together.",
    category: "community",
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// COURSE FAQ DATABASE
// Used for semantic FAQ search.
// ─────────────────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  category:
    | "general"
    | "learning"
    | "curriculum"
    | "projects"
    | "placement"
    | "certificate"
    | "payment"
    | "support"
    | "eligibility";

  question: string;
  answer: string;

  keywords: string[];
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-live",
    category: "learning",
    question: "Are classes live?",
    answer:
      "Yes. Every weekend we conduct live interactive online classes where mentors teach concepts in real time and answer student questions.",
    keywords: [
      "live",
      "classes",
      "online",
      "weekend",
      "live class"
    ],
  },

  {
    id: "faq-recordings",
    category: "learning",
    question: "Will I get recordings?",
    answer:
      "Yes. Every live session is recorded and shared so you can watch it anytime for revision.",
    keywords: [
      "recording",
      "recordings",
      "video",
      "miss class",
      "watch later"
    ],
  },

  {
    id: "faq-language",
    category: "general",
    question: "What language is the course taught in?",
    answer:
      "Classes are taught in Telugu and English, making the concepts easy to understand for beginners.",
    keywords: [
      "language",
      "telugu",
      "english",
      "medium"
    ],
  },

  {
    id: "faq-mode",
    category: "general",
    question: "Is the course online or offline?",
    answer:
      "The program is completely online with live weekend classes and recorded sessions.",
    keywords: [
      "online",
      "offline",
      "mode"
    ],
  },
  {
    id: "faq-beginner",
    category: "eligibility",
    question: "Can beginners join?",
    answer:
      "Absolutely. The course starts from the fundamentals and is designed for complete beginners.",
    keywords: [
      "beginner",
      "fresher",
      "zero knowledge",
      "experience"
    ],
  },

  {
    id: "faq-coding",
    category: "eligibility",
    question: "Do I need coding knowledge?",
    answer:
      "No prior coding knowledge is required. Everything is taught from scratch.",
    keywords: [
      "coding",
      "programming",
      "python",
      "experience"
    ],
  },

  {
    id: "faq-qualification",
    category: "eligibility",
    question: "Who can join?",
    answer:
      "The course is suitable for 12th pass students, degree students, fresh graduates, working professionals and career switchers.",
    keywords: [
      "eligibility",
      "qualification",
      "join",
      "who can join"
    ],
  },
  {
    id: "faq-assignment",
    category: "learning",
    question: "Are assignments included?",
    answer:
      "Yes. Every module contains assignments to help you practice and strengthen your understanding.",
    keywords: [
      "assignment",
      "assignments",
      "practice"
    ],
  },

  {
    id: "faq-doubts",
    category: "support",
    question: "Can I ask doubts?",
    answer:
      "Yes. Students receive dedicated mentor and doubt support throughout the program.",
    keywords: [
      "doubt",
      "mentor",
      "support",
      "help"
    ],
  },
  {
    id: "faq-projects",
    category: "projects",
    question: "Will I build projects?",
    answer:
      "Yes. Students build multiple real-world AI, Machine Learning and Generative AI projects during the program.",
    keywords: [
      "projects",
      "portfolio",
      "real projects"
    ],
  },
  {
    id: "faq-placement",
    category: "placement",
    question: "Do you provide placement support?",
    answer:
      "Yes. We provide placement guidance, resume building, LinkedIn optimization and mock interviews.",
    keywords: [
      "placement",
      "job",
      "interview"
    ],
  },

  {
    id: "faq-resume",
    category: "placement",
    question: "Will you help with resume?",
    answer:
      "Yes. Every student receives resume building and LinkedIn profile guidance.",
    keywords: [
      "resume",
      "linkedin",
      "cv"
    ],
  },
  {
    id: "faq-certificate",
    category: "certificate",
    question: "Will I receive a certificate?",
    answer:
      "Yes. Students who complete the program receive an industry-recognized DATADROP Certificate of Completion.",
    keywords: [
      "certificate",
      "certification"
    ],
  },
  {
    id: "faq-fee",
    category: "payment",
    question: "What is the course fee?",
    answer:
      "The current course fee is ₹4,599.",
    keywords: [
      "fee",
      "fees",
      "price",
      "cost"
    ],
  },

  {
    id: "faq-payment",
    category: "payment",
    question: "Which payment methods are accepted?",
    answer:
      "We accept UPI, Credit Card, Debit Card, Net Banking and Wallet payments.",
    keywords: [
      "payment",
      "upi",
      "credit card",
      "debit card"
    ],
  },
  ];
// ─────────────────────────────────────────────────────────────────────────────
// TOOLS & TECHNOLOGIES
// Technologies covered during the program.
// ─────────────────────────────────────────────────────────────────────────────

export interface CourseTool {
  id: string;
  name: string;
  category:
    | "Programming"
    | "Data"
    | "Machine Learning"
    | "Deep Learning"
    | "Generative AI"
    | "Deployment"
    | "Cloud"
    | "Database"
    | "Visualization";

  description: string;
  purpose: string;
}

export const COURSE_TOOLS: CourseTool[] = [{
    id: "python",
    name: "Python",
    category: "Programming",
    description: "The primary programming language used throughout the course.",
    purpose: "Programming",
  },

  {
    id: "sql",
    name: "SQL",
    category: "Database",
    description: "Used to query and manage relational databases.",
    purpose: "Database Management",
  },

  {
    id: "git",
    name: "Git",
    category: "Programming",
    description: "Version control used by software developers.",
    purpose: "Source Code Management",
  },

  {
    id: "github",
    name: "GitHub",
    category: "Programming",
    description: "Platform to host and showcase projects.",
    purpose: "Portfolio Building",
  },
                                           {
                                             id: "numpy",
                                             name: "NumPy",
                                             category: "Data",
                                             description: "Numerical computing library for Python.",
                                             purpose: "Scientific Computing",
                                           },

                                           {
                                             id: "pandas",
                                             name: "Pandas",
                                             category: "Data",
                                             description: "Library used for data cleaning and analysis.",
                                             purpose: "Data Analysis",
                                           },

                                           {
                                             id: "matplotlib",
                                             name: "Matplotlib",
                                             category: "Visualization",
                                             description: "Visualization library.",
                                             purpose: "Charts",
                                           },

                                           {
                                             id: "seaborn",
                                             name: "Seaborn",
                                             category: "Visualization",
                                             description: "Advanced statistical visualization library.",
                                             purpose: "Data Visualization",
                                           },

                                           {
                                             id: "plotly",
                                             name: "Plotly",
                                             category: "Visualization",
                                             description: "Interactive dashboard library.",
                                             purpose: "Interactive Charts",
                                           },
                                           {
                                             id: "scikit",
                                             name: "Scikit-learn",
                                             category: "Machine Learning",
                                             description: "Industry standard ML library.",
                                             purpose: "Machine Learning",
                                           },

                                           {
                                             id: "xgboost",
                                             name: "XGBoost",
                                             category: "Machine Learning",
                                             description: "High-performance gradient boosting library.",
                                             purpose: "Prediction Models",
                                           },
                                           {
                                             id: "tensorflow",
                                             name: "TensorFlow",
                                             category: "Deep Learning",
                                             description: "Deep learning framework developed by Google.",
                                             purpose: "Deep Learning",
                                           },

                                           {
                                             id: "pytorch",
                                             name: "PyTorch",
                                             category: "Deep Learning",
                                             description: "Deep learning framework widely used in research and industry.",
                                             purpose: "AI Development",
                                           },

                                           {
                                             id: "opencv",
                                             name: "OpenCV",
                                             category: "Deep Learning",
                                             description: "Computer Vision library.",
                                             purpose: "Image Processing",
                                           },
                                           {
                                             id: "openai",
                                             name: "OpenAI API",
                                             category: "Generative AI",
                                             description: "API used for building AI applications powered by GPT models.",
                                             purpose: "LLM Development",
                                           },

                                           {
                                             id: "gemini",
                                             name: "Google Gemini API",
                                             category: "Generative AI",
                                             description: "Google's Generative AI API.",
                                             purpose: "LLM Development",
                                           },

                                           {
                                             id: "langchain",
                                             name: "LangChain",
                                             category: "Generative AI",
                                             description: "Framework for building AI applications using LLMs.",
                                             purpose: "AI Applications",
                                           },

                                           {
                                             id: "langgraph",
                                             name: "LangGraph",
                                             category: "Generative AI",
                                             description: "Framework for building AI Agents.",
                                             purpose: "AI Agents",
                                           },

                                           {
                                             id: "pinecone",
                                             name: "Pinecone",
                                             category: "Generative AI",
                                             description: "Cloud Vector Database.",
                                             purpose: "RAG Systems",
                                           },

                                           {
                                             id: "faiss",
                                             name: "FAISS",
                                             category: "Generative AI",
                                             description: "Vector similarity search library.",
                                             purpose: "Semantic Search",
                                           },
                                           {
                                             id: "fastapi",
                                             name: "FastAPI",
                                             category: "Deployment",
                                             description: "Python framework for deploying AI models.",
                                             purpose: "API Development",
                                           },

                                           {
                                             id: "docker",
                                             name: "Docker",
                                             category: "Deployment",
                                             description: "Containerization platform.",
                                             purpose: "Deployment",
                                           },
                                           {
                                             id: "aws",
                                             name: "AWS SageMaker",
                                             category: "Cloud",
                                             description: "Amazon's Machine Learning platform.",
                                             purpose: "Cloud AI",
                                           },

                                           {
                                             id: "vertex",
                                             name: "Google Vertex AI",
                                             category: "Cloud",
                                             description: "Google Cloud AI platform.",
                                             purpose: "Cloud AI",
                                           },

                                           {
                                             id: "azure",
                                             name: "Azure Machine Learning",
                                             category: "Cloud",
                                             description: "Microsoft's AI platform.",
                                             purpose: "Cloud AI",
                                           },
                                           ];

export const CURRICULUM: CourseTopic[] = [
  // Phase 1 — Foundations
  {
    id: "python-basics",
    title: "Python for Data Science",
    phase: 1,
    description:
      "Start from zero and build strong Python fundamentals — variables, data types, loops, functions, OOP, file handling, and error handling. You'll write clean, readable code from day one with real exercises.",
    careerOutcome: "Junior Python Developer / Data Analyst",
    project: "Automated Student Grade Tracker with file I/O and summary reports",
    estimatedDuration: "3 weeks",
    skills: ["Python", "OOP", "File I/O", "Exception Handling"],
  },
  {
    id: "data-analysis",
    title: "Data Analysis with Pandas & NumPy",
    phase: 1,
    description:
      "Master the two most-used data science libraries. Learn to clean messy datasets, filter, group, aggregate, merge, and reshape data — exactly how data analysts work every day at top companies.",
    careerOutcome: "Data Analyst / Business Intelligence Analyst",
    project: "IPL Match Dataset Analysis — uncover winning patterns and player performance",
    estimatedDuration: "2 weeks",
    skills: ["Pandas", "NumPy", "Data Cleaning", "Aggregation"],
  },
  {
    id: "data-visualisation",
    title: "Data Visualisation & Storytelling",
    phase: 1,
    description:
      "Turn raw numbers into compelling visuals. Build interactive charts with Matplotlib, Seaborn, and Plotly. Learn the principles of visual storytelling that make dashboards executives actually read.",
    careerOutcome: "Data Analyst / BI Developer",
    project: "India COVID-19 Dashboard — interactive regional trend visualisation",
    estimatedDuration: "2 weeks",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Dashboarding"],
  },
  {
    id: "sql-databases",
    title: "SQL & Relational Databases",
    phase: 1,
    description:
      "Write SQL that real data engineers write — complex JOINs, window functions, CTEs, subqueries, and performance optimisation. Work with PostgreSQL and MySQL on real schemas.",
    careerOutcome: "Data Analyst / Backend Developer",
    project: "E-commerce Sales Analytics Database — customer segmentation and revenue reporting",
    estimatedDuration: "2 weeks",
    skills: ["SQL", "PostgreSQL", "Window Functions", "CTEs"],
  },
  {
    id: "statistics",
    title: "Statistics & Probability for ML",
    phase: 1,
    description:
      "Build the mathematical intuition that separates great ML engineers from average ones. Covers descriptive stats, distributions, hypothesis testing, A/B testing, Bayes' theorem, and correlation.",
    careerOutcome: "Data Scientist / ML Engineer",
    project: "A/B Test Analyser — statistical significance calculator for marketing campaigns",
    estimatedDuration: "2 weeks",
    skills: ["Probability", "Hypothesis Testing", "Bayesian Thinking", "A/B Testing"],
  },

  // Phase 2 — Machine Learning
  {
    id: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    phase: 2,
    description:
      "Understand how machines actually learn. Gradient descent, bias-variance tradeoff, overfitting, cross-validation, and evaluation metrics explained with visual intuition — not just formulas.",
    careerOutcome: "Junior ML Engineer",
    project: "House Price Prediction System with end-to-end model evaluation pipeline",
    estimatedDuration: "3 weeks",
    skills: ["Scikit-learn", "Model Evaluation", "Feature Engineering", "Cross-Validation"],
  },
  {
    id: "supervised-learning",
    title: "Supervised Learning Algorithms",
    phase: 2,
    description:
      "Deep dives into Linear Regression, Logistic Regression, Decision Trees, Random Forests, SVM, KNN, Gradient Boosting, and XGBoost. When to use each, and why.",
    careerOutcome: "ML Engineer / Data Scientist",
    project: "Loan Default Prediction Model for a fintech company — deployed as REST API",
    estimatedDuration: "3 weeks",
    skills: ["Random Forest", "XGBoost", "SVM", "Gradient Boosting"],
  },
  {
    id: "unsupervised-learning",
    title: "Unsupervised Learning & Clustering",
    phase: 2,
    description:
      "K-Means, DBSCAN, Hierarchical Clustering, PCA, t-SNE, and anomaly detection. These algorithms power recommendation engines, fraud detection, and customer segmentation at scale.",
    careerOutcome: "ML Engineer / Data Scientist",
    project: "Customer Segmentation Engine for a D2C brand — actionable marketing cohorts",
    estimatedDuration: "2 weeks",
    skills: ["K-Means", "PCA", "t-SNE", "Anomaly Detection"],
  },
  {
    id: "feature-engineering",
    title: "Feature Engineering & Model Optimisation",
    phase: 2,
    description:
      "The skill that separates Kaggle beginners from competition winners. Master encoding, scaling, imputation, feature selection, hyperparameter tuning with Optuna, and building robust ML pipelines.",
    careerOutcome: "Senior ML Engineer",
    project: "Kaggle-ready ML pipeline for a tabular dataset — top 10% score target",
    estimatedDuration: "2 weeks",
    skills: ["Optuna", "Pipeline", "Hyperparameter Tuning", "Encoding"],
  },
  {
    id: "ml-deployment",
    title: "ML Model Deployment with FastAPI",
    phase: 2,
    description:
      "Take your trained models to production. Build REST APIs with FastAPI, containerise with Docker, and deploy to cloud platforms. Learn versioning, monitoring, and serving at scale.",
    careerOutcome: "ML Engineer / MLOps Engineer",
    project: "Production Spam Detection API — FastAPI + Docker + cloud deployment",
    estimatedDuration: "2 weeks",
    skills: ["FastAPI", "Docker", "REST API", "Model Serving"],
  },

  // Phase 3 — Deep Learning & NLP
  {
    id: "neural-networks",
    title: "Neural Networks & Deep Learning",
    phase: 3,
    description:
      "Build neural networks from scratch in NumPy, then in PyTorch. Understand backpropagation, activation functions, batch normalisation, dropout, and learning rate scheduling without the black-box mystery.",
    careerOutcome: "Deep Learning Engineer",
    project: "Handwritten Digit Recognition System — from scratch to 99.2% accuracy",
    estimatedDuration: "3 weeks",
    skills: ["PyTorch", "Backpropagation", "Batch Norm", "Regularisation"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision with CNNs",
    phase: 3,
    description:
      "Convolutional Neural Networks, object detection (YOLO), image segmentation, and transfer learning with pre-trained models like ResNet and EfficientNet. Build systems that see and understand images.",
    careerOutcome: "Computer Vision Engineer — ₹12–22 LPA",
    project: "Real-time Face Mask Detection System — OpenCV + YOLO + live camera feed",
    estimatedDuration: "3 weeks",
    skills: ["CNN", "YOLO", "OpenCV", "Transfer Learning", "ResNet"],
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    phase: 3,
    description:
      "Text preprocessing, TF-IDF, word embeddings (Word2Vec, GloVe), sentiment analysis, named entity recognition, and text classification. The foundation for every LLM-powered application.",
    careerOutcome: "NLP Engineer / AI Engineer",
    project: "Multi-class News Category Classifier with custom embeddings and REST endpoint",
    estimatedDuration: "3 weeks",
    skills: ["NLTK", "spaCy", "Word2Vec", "Transformers Basics"],
  },
  {
    id: "transformers",
    title: "Transformers & BERT",
    phase: 3,
    description:
      "Understand the attention mechanism, multi-head attention, and the transformer architecture that powers every modern AI system. Fine-tune BERT, RoBERTa, and DistilBERT on domain-specific tasks.",
    careerOutcome: "NLP Engineer / LLM Engineer — ₹15–28 LPA",
    project: "Legal Document Summariser — fine-tuned BERT on Indian legal corpus",
    estimatedDuration: "2 weeks",
    skills: ["BERT", "Attention Mechanism", "HuggingFace", "Fine-Tuning"],
  },
  {
    id: "time-series",
    title: "Time Series Forecasting",
    phase: 3,
    description:
      "ARIMA, SARIMA, Prophet, and LSTM-based forecasting. Build models that predict stock prices, sales demand, and energy consumption. Critical for fintech, retail, and supply chain roles.",
    careerOutcome: "Data Scientist / Quantitative Analyst",
    project: "Stock Price Movement Forecasting — LSTM with uncertainty quantification",
    estimatedDuration: "2 weeks",
    skills: ["ARIMA", "LSTM", "Prophet", "Forecasting"],
  },
  {
    id: "recommender-systems",
    title: "Recommender Systems",
    phase: 3,
    description:
      "Collaborative filtering, content-based filtering, matrix factorisation, and hybrid approaches. Build the engines behind Netflix recommendations, Amazon product suggestions, and Spotify Discover Weekly.",
    careerOutcome: "ML Engineer / AI Engineer at product companies",
    project: "Movie Recommendation Engine — deployed with a React frontend and user dashboard",
    estimatedDuration: "2 weeks",
    skills: ["Collaborative Filtering", "Matrix Factorisation", "Hybrid Systems"],
  },

  // Phase 4 — Generative AI & LLMs
  {
    id: "generative-ai",
    title: "Generative AI Fundamentals",
    phase: 4,
    description:
      "GANs, VAEs, diffusion models, and the landscape of modern generative AI. Understand how Stable Diffusion, Midjourney, and DALL·E work under the hood. Generate images, audio, and text programmatically.",
    careerOutcome: "Generative AI Engineer — one of the hottest roles in 2025",
    project: "AI Art Generation Studio — fine-tuned Stable Diffusion on custom style dataset",
    estimatedDuration: "2 weeks",
    skills: ["GANs", "Diffusion Models", "Stable Diffusion", "VAEs"],
  },
  {
    id: "llm-engineering",
    title: "LLM Engineering & Prompt Design",
    phase: 4,
    description:
      "Go beyond basic ChatGPT prompting. Master few-shot prompting, chain-of-thought reasoning, prompt chaining, structured outputs, and building reliable LLM-powered applications with OpenAI and Gemini APIs.",
    careerOutcome: "LLM Engineer / AI Architect — ₹18–35 LPA",
    project: "Intelligent Customer Support Bot — GPT-4 with fallback handling and cost controls",
    estimatedDuration: "2 weeks",
    skills: ["Prompt Engineering", "OpenAI API", "Gemini API", "Structured Outputs"],
  },
  {
    id: "rag-systems",
    title: "RAG — Retrieval Augmented Generation",
    phase: 4,
    description:
      "Build AI systems that reason over your own documents without hallucinating. Chunking strategies, embedding models, vector databases (Pinecone, Weaviate, FAISS), and hybrid retrieval pipelines.",
    careerOutcome: "AI Engineer / Solutions Architect — top demand role at startups",
    project: "Company Knowledge Base Chatbot — RAG over 500-page PDF corpus, sub-2s latency",
    estimatedDuration: "2 weeks",
    skills: ["RAG", "Pinecone", "FAISS", "LangChain", "Embeddings"],
  },
  {
    id: "llm-finetuning",
    title: "LLM Fine-Tuning & RLHF",
    phase: 4,
    description:
      "Fine-tune open-source LLMs (Llama 3, Mistral, Phi-3) using LoRA and QLoRA on consumer hardware. Understand RLHF, DPO, and instruction tuning — the techniques that made ChatGPT actually useful.",
    careerOutcome: "Senior AI Engineer / ML Research Engineer — rare, high-paying skill",
    project: "Domain-Specific Medical Q&A Model — LoRA fine-tuned Llama 3 on clinical notes",
    estimatedDuration: "3 weeks",
    skills: ["LoRA", "QLoRA", "Llama 3", "Mistral", "RLHF", "DPO"],
  },
  {
    id: "ai-agents",
    title: "AI Agents & Agentic Systems",
    phase: 4,
    description:
      "Build autonomous AI agents that plan, use tools, browse the web, write code, and self-correct. ReAct agents, multi-agent orchestration with LangGraph and AutoGen, memory systems, and agent safety.",
    careerOutcome: "Agentic AI Developer — the frontier of AI engineering in 2025",
    project: "Autonomous Research Agent — crawls web, synthesises findings, writes reports",
    estimatedDuration: "2 weeks",
    skills: ["LangGraph", "AutoGen", "Tool Use", "Memory", "ReAct"],
  },
  {
    id: "vector-databases",
    title: "Vector Databases & Semantic Search",
    phase: 4,
    description:
      "Deep dive into embedding models, approximate nearest-neighbour search (HNSW, IVF), and production vector database systems. Build semantic search engines that understand meaning, not just keywords.",
    careerOutcome: "AI/ML Engineer at search-centric companies — Swiggy, Flipkart, Amazon",
    project: "Semantic Job Search Engine — 50K+ job descriptions, real-time query matching",
    estimatedDuration: "1 week",
    skills: ["Pinecone", "Weaviate", "FAISS", "HNSW", "Embeddings"],
  },

  // Phase 5 — Production & Career
  {
    id: "mlops",
    title: "MLOps & Production ML Systems",
    phase: 5,
    description:
      "CI/CD for ML, experiment tracking with MLflow, model registry, A/B testing models in production, drift detection, and automated retraining pipelines. How Netflix and Uber run ML at scale.",
    careerOutcome: "MLOps Engineer — ₹15–30 LPA, critically understaffed role",
    project: "Full MLOps Pipeline — training, tracking, deployment, monitoring for a fraud model",
    estimatedDuration: "2 weeks",
    skills: ["MLflow", "CI/CD", "Drift Detection", "Model Registry", "Airflow"],
  },
  {
    id: "cloud-ai",
    title: "Cloud AI — AWS, GCP & Azure",
    phase: 5,
    description:
      "Deploy AI workloads on the big three clouds. AWS SageMaker, GCP Vertex AI, Azure ML, serverless inference, GPU instance management, and cloud cost optimisation for ML workloads.",
    careerOutcome: "Cloud ML Engineer / Solutions Architect — cloud certifications supported",
    project:
      "Auto-scaling Inference Service — SageMaker endpoint with load testing and cost report",
    estimatedDuration: "2 weeks",
    skills: ["AWS SageMaker", "GCP Vertex AI", "Serverless", "GPU Instances"],
  },
  {
    id: "system-design-ai",
    title: "AI System Design",
    phase: 5,
    description:
      "Design AI systems the way FAANG engineers do. Feature stores, embedding pipelines, online vs. offline serving, caching strategies, and how to answer ML system design interview questions at L5+ level.",
    careerOutcome: "Senior ML Engineer / Staff Engineer at top product companies",
    project:
      "Design Document — Instagram-scale recommendation system with full architecture review",
    estimatedDuration: "1 week",
    skills: ["Feature Stores", "System Design", "Interview Prep", "Architecture"],
  },
  {
    id: "enterprise-ai",
    title: "Enterprise AI & AI Products",
    phase: 5,
    description:
      "How enterprises buy, build, and deploy AI. Responsible AI, compliance, model governance, AI product management, and building internal AI tools that actually get adopted. For students targeting senior roles.",
    careerOutcome: "AI Product Manager / AI Consultant — ₹18–40 LPA",
    project: "AI Product Spec — end-to-end product requirements for an internal HR AI assistant",
    estimatedDuration: "1 week",
    skills: ["Responsible AI", "AI Governance", "Product Management", "ROI Modelling"],
  },
  {
    id: "capstone",
    title: "Capstone Project & Placement Prep",
    phase: 5,
    description:
      "Your final 6-week capstone — a production-grade AI system of your choosing, reviewed by industry mentors. Paired with intensive placement prep: mock interviews, resume polish, LinkedIn optimisation, and referrals.",
    careerOutcome: "Job-ready for ₹8–35 LPA AI roles across India and remotely",
    project: "Your own AI product — mentored, deployed, and added to your portfolio",
    estimatedDuration: "6 weeks",
    skills: ["Full-Stack AI", "Portfolio", "Interview Prep", "Negotiation"],
  },
];

// ── Projects showcase ─────────────────────────────────────────────────────────

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  impact: string;
  phase: number;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "rag-chatbot",
    title: "Company Knowledge Chatbot (RAG)",
    description:
      "A production RAG system that answers questions over a 500-page company knowledge base with sub-2-second latency and source citations. Zero hallucinations through strict retrieval grounding.",
    techStack: ["Llama 3", "Pinecone", "FastAPI", "React", "Docker"],
    category: "Generative AI",
    impact: "Deployed at 3 DATADROP alumni's companies as an internal tool",
    phase: 4,
  },
  {
    id: "fraud-detection",
    title: "Real-Time Fraud Detection API",
    description:
      "An XGBoost-based fraud detection system processing 10,000 transactions/second with 99.3% precision. Includes a full MLOps pipeline with automated retraining on drift.",
    techStack: ["XGBoost", "FastAPI", "Kafka", "MLflow", "AWS SageMaker"],
    category: "Machine Learning",
    impact: "₹12 LPA role offer received by a student using this as their portfolio project",
    phase: 2,
  },
  {
    id: "autonomous-agent",
    title: "Autonomous Research Agent",
    description:
      "A multi-step AI agent that takes a research question, browses the web, reads papers, synthesises findings, and produces a structured report — all without human intervention.",
    techStack: ["GPT-4o", "LangGraph", "Tavily Search", "Python", "Streamlit"],
    category: "AI Agents",
    impact: "Showcased at Hyderabad AI Meetup 2025, 200+ attendees",
    phase: 4,
  },
  {
    id: "face-mask-detection",
    title: "Real-Time Face Mask Detection",
    description:
      "YOLO-based computer vision system detecting mask compliance across multiple camera feeds simultaneously. Achieves 94ms inference latency on a standard GPU.",
    techStack: ["YOLOv8", "OpenCV", "PyTorch", "FastAPI", "React"],
    category: "Computer Vision",
    impact: "Adopted by a Hyderabad mall management company post-COVID",
    phase: 3,
  },
  {
    id: "llm-finetuned",
    title: "Medical Q&A LLM (Llama 3 Fine-tuned)",
    description:
      "Llama 3 8B fine-tuned on 50,000 clinical Q&A pairs using QLoRA on a single A100. Achieves 89% accuracy on MedQA benchmark — competitive with GPT-3.5 at 90% lower inference cost.",
    techStack: ["Llama 3", "QLoRA", "HuggingFace", "Python", "Weights & Biases"],
    category: "LLM Engineering",
    impact: "Student received offer from a health-tech startup building on this model",
    phase: 4,
  },
  {
    id: "stock-forecaster",
    title: "Stock Price Forecasting System",
    description:
      "LSTM + Transformer ensemble model forecasting NSE stock prices with uncertainty quantification. Includes a live dashboard with confidence intervals and backtesting engine.",
    techStack: ["PyTorch", "Transformers", "Plotly", "Streamlit", "Yahoo Finance API"],
    category: "Time Series",
    impact: "Top-rated portfolio project — hired by quant fund in Bangalore",
    phase: 3,
  },
];

// ── Placement Stats ───────────────────────────────────────────────────────────

export const PLACEMENT_STATS = {
  placementRate: "92%",
  averageSalary: "₹8.5 LPA",
  medianSalary: "₹7.2 LPA",
  highestSalary: "₹32 LPA",
  companiesHired: "150+",
  studentsPlaced: "500+",
  avgTimeToPlacement: "68 days after completion",
  remoteRoles: "34% of placements are remote or hybrid",
};

export const HIRING_COMPANIES = [
  "Amazon",
  "Microsoft",
  "Flipkart",
  "Swiggy",
  "Razorpay",
  "PhonePe",
  "Zepto",
  "Meesho",
  "CRED",
  "Infosys",
  "TCS",
  "Wipro",
  "Juspay",
  "Groww",
  "Zomato",
];

export const ALUMNI_TESTIMONIALS = [
  {
    name: "Priya Reddy",
    role: "ML Engineer at Swiggy",
    salary: "₹14 LPA",
    city: "Hyderabad",
    quote:
      "I was a BCA fresher with no coding experience. 18 months later I'm building recommendation models that serve 10 million users every day. DATADROP changed my life.",
    beforeRole: "BCA Graduate, Unemployed",
    cohort: "Batch 3",
  },
  {
    name: "Karthik Sharma",
    role: "Data Scientist at Razorpay",
    salary: "₹18 LPA",
    city: "Bangalore",
    quote:
      "The RAG project I built during Phase 4 literally became my Razorpay interview case study. The depth of this curriculum is unmatched at this price point.",
    beforeRole: "Software Developer, 3 YOE",
    cohort: "Batch 2",
  },
  {
    name: "Anitha Kumari",
    role: "AI Engineer at a US startup (Remote)",
    salary: "$65,000/year",
    city: "Vijayawada",
    quote:
      "Teaching in Telugu made the hardest concepts click. I never thought I'd be earning in dollars while living in Vijayawada. This program is genuinely life-changing.",
    beforeRole: "School Teacher",
    cohort: "Batch 1",
  },
];

// ── Career Paths ──────────────────────────────────────────────────────────────

export interface CareerPath {
  id: string;
  title: string;
  icon: string;
  salaryRange: string;
  demand: "Very High" | "High" | "Growing";
  description: string;
  keySkills: string[];
  topCompanies: string[];
}

export const CAREER_PATHS: CareerPath[] = [
  {
    id: "ml-engineer",
    title: "ML / AI Engineer",
    icon: "🤖",
    salaryRange: "₹8–20 LPA",
    demand: "Very High",
    description:
      "Build, train, and deploy machine learning models powering core product features at tech companies. The most common DATADROP placement role.",
    keySkills: ["Python", "PyTorch", "Scikit-learn", "Docker", "FastAPI"],
    topCompanies: ["Amazon", "Flipkart", "Swiggy", "CRED", "Zomato"],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "📊",
    salaryRange: "₹8–18 LPA",
    demand: "Very High",
    description:
      "Extract actionable insights from large datasets using statistical modelling and machine learning. Heavy on Python, SQL, experimentation, and business communication.",
    keySkills: ["SQL", "Python", "Statistics", "Experimentation", "Storytelling"],
    topCompanies: ["Razorpay", "PhonePe", "Groww", "Meesho", "MakeMyTrip"],
  },
  {
    id: "llm-engineer",
    title: "LLM / Generative AI Engineer",
    icon: "🧠",
    salaryRange: "₹15–35 LPA",
    demand: "Very High",
    description:
      "The hottest job category in 2025. Build LLM-powered products — chatbots, copilots, agents, and RAG systems. Companies are paying premium for this skill set.",
    keySkills: ["LangChain", "RAG", "Fine-Tuning", "Prompt Engineering", "Vector DBs"],
    topCompanies: ["Microsoft", "Google", "AI Startups", "Consulting Firms", "US Remote"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision Engineer",
    icon: "👁️",
    salaryRange: "₹10–22 LPA",
    demand: "High",
    description:
      "Build systems that understand images and video — object detection, face recognition, quality inspection, medical imaging. Critical for manufacturing, healthcare, and retail.",
    keySkills: ["PyTorch", "YOLO", "OpenCV", "TensorRT", "Edge Deployment"],
    topCompanies: ["Juspay", "Zepto", "Healthcare Startups", "Manufacturing"],
  },
  {
    id: "mlops",
    title: "MLOps Engineer",
    icon: "⚙️",
    salaryRange: "₹12–28 LPA",
    demand: "Very High",
    description:
      "The bridge between ML research and production. Keep ML systems healthy, fast, and reliable. One of the most critically understaffed roles in the Indian tech market.",
    keySkills: ["MLflow", "Kubernetes", "Airflow", "AWS SageMaker", "CI/CD"],
    topCompanies: ["Flipkart", "Swiggy", "Juspay", "Infosys", "TCS"],
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager",
    icon: "🧩",
    salaryRange: "₹15–40 LPA",
    demand: "Growing",
    description:
      "Define what AI features get built and why. Product managers with genuine AI engineering background are commanding exceptional salaries at both startups and enterprises.",
    keySkills: ["Product Strategy", "AI Literacy", "User Research", "Data Analysis"],
    topCompanies: ["Microsoft", "Google", "Zepto", "Series B+ Startups"],
  },
];

// ── Bonuses ───────────────────────────────────────────────────────────────────

export const BONUSES = [
  {
    title: "6 Mock Interviews",
    description: "1-on-1 sessions with senior ML engineers from top companies",
  },
  {
    title: "Resume & LinkedIn Makeover",
    description: "Personalised review and rewrite by a technical recruiter",
  },
  {
    title: "500+ Interview Questions Pack",
    description: "Curated ML, DL, SQL, and system design questions with model answers",
  },
  {
    title: "Private Discord Community",
    description: "Lifetime access to a community of 1,000+ AI professionals",
  },
  {
    title: "6 Guest Sessions",
    description: "Live sessions with working AI engineers at Amazon, Microsoft, and startups",
  },
  {
    title: "Project Templates & Starter Kits",
    description: "25+ battle-tested project templates to fast-track your portfolio",
  },
  {
    title: "Placement Referral Network",
    description: "Direct introductions to hiring managers at 150+ partner companies",
  },
];
