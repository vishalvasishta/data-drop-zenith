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


// ─────────────────────────────────────────────────────────────────────────────
// COURSE FAQ DATABASE
// Used for semantic FAQ search.
// ─────────────────────────────────────────────────────────────────────────────


// ── Eligibility ───────────────────────────────────────────────────────────────

export interface EligibilityRule {
  id: string;
  title: string;
  eligible: boolean;
  description: string;
}

export const ELIGIBILITY: EligibilityRule[] = [
  {
    id: "beginner",
    title: "Complete Beginner",
    eligible: true,
    description:
      "Yes. The program starts from absolute basics. No prior coding or AI knowledge is required.",
  },
  {
    id: "non-it",
    title: "Non-IT Background",
    eligible: true,
    description:
      "Students from B.Com, BBA, BA, B.Sc., MBA, Diploma and other non-IT backgrounds can successfully learn this program.",
  },
  {
    id: "engineering",
    title: "Engineering Students",
    eligible: true,
    description:
      "Engineering students from any branch can join and build AI, Machine Learning and Data Science skills.",
  },
  {
    id: "degree",
    title: "Degree Students",
    eligible: true,
    description:
      "Students pursuing or completing any undergraduate degree are eligible.",
  },
  {
    id: "working-professional",
    title: "Working Professionals",
    eligible: true,
    description:
      "Yes. Since classes are online and recordings are provided, working professionals can learn at their own pace.",
  },
  {
    id: "college-student",
    title: "College Students",
    eligible: true,
    description:
      "College students can join to build industry-ready AI skills before graduation.",
  },
  {
    id: "career-switch",
    title: "Career Switchers",
    eligible: true,
    description:
      "Professionals from any industry who want to transition into AI and Data Science are welcome.",
  },
  {
    id: "housewife",
    title: "Homemakers",
    eligible: true,
    description:
      "Homemakers who want to restart or build a technology career can comfortably learn through live classes and recordings.",
  },
  {
    id: "minimum-age",
    title: "Minimum Age",
    eligible: true,
    description:
      "Students who have completed at least Intermediate (12th) or an equivalent qualification are recommended.",
  },
  {
    id: "coding",
    title: "Coding Experience",
    eligible: true,
    description:
      "No coding experience is required. Everything is taught from scratch in a beginner-friendly manner.",
  },
  {
    id: "laptop",
    title: "Laptop Requirement",
    eligible: true,
    description:
      "A Windows, Mac or Linux laptop with a stable internet connection is recommended for practical sessions.",
  },
  {
    id: "english",
    title: "English Fluency",
    eligible: true,
    description:
      "Fluent English is not required. Classes are taught primarily in Telugu with English technical terms explained clearly.",
  },
];
// ── Payment Information & Policies ───────────────────────────────────────────

export interface PaymentInformation {
  courseFee: string;
  currency: string;
  paymentMethods: string[];
  emiAvailable: boolean;
  installmentAvailable: boolean;
  registrationRequired: boolean;
  invoiceProvided: boolean;
  gstApplicable: boolean;
  refundPolicy: string;
  enrollmentConfirmation: string;
  supportContact: string;
}

export const PAYMENT_INFO: PaymentInformation = {
  courseFee: "₹4,599",
  currency: "INR",

  paymentMethods: [
    "UPI",
    "Credit Card",
    "Debit Card",
    "Net Banking",
    "Wallets",
  ],

  emiAvailable: false,

  installmentAvailable: false,

  registrationRequired: true,

  invoiceProvided: true,

  gstApplicable: false,

  refundPolicy:
    "Please contact the admissions team for the latest refund and cancellation policy before completing your enrollment.",

  enrollmentConfirmation:
    "Once the payment is successfully completed, students receive an instant confirmation along with further onboarding instructions.",

  supportContact: "+91 8330961514",
};
// ── Student Support & Contact ────────────────────────────────────────────────

export interface StudentSupport {
  whatsapp: string;
  email: string;
  supportHours: string;
  responseTime: string;
  classSupport: string;
  technicalSupport: string;
  assignmentSupport: string;
  mentorshipSupport: string;
  community: string;
  officeMode: string;
}

export const STUDENT_SUPPORT: StudentSupport = {
  whatsapp: "+91 8330961514",

  email: "support@datadrop.ai",

  supportHours: "Monday to Saturday • 9:00 AM – 7:00 PM IST",

  responseTime:
    "Most WhatsApp queries are answered within 30 minutes during support hours.",

  classSupport:
    "Students can ask questions during live classes and receive guidance from mentors.",

  technicalSupport:
    "Dedicated assistance is available for installation issues, software setup and project-related technical problems.",

  assignmentSupport:
    "Assignments are reviewed by mentors with personalized feedback and improvement suggestions.",

  mentorshipSupport:
    "Students receive continuous mentorship throughout the program to stay on track with learning and career preparation.",

  community:
    "Private student community for discussions, doubt clarification, announcements and networking.",

  officeMode:
    "Online Support",
};
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
// ── FAQ Knowledge Base ────────────────────────────────────────────────────────

export type FAQCategory =
  | "General"
  | "Classes"
  | "Curriculum"
  | "Projects"
  | "Assignments"
  | "Placement"
  | "Fees"
  | "Payment"
  | "Certification"
  | "Eligibility"
  | "Support"
  | "Career"
  | "Technical";

export interface FAQItem {
  id: string;

  question: string;

  answer: string;

  category: FAQCategory;

  keywords: string[];

  relatedTopics?: string[];
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
// ── Industry Tools You'll Master ──────────────────────────────────────────────

export interface LearningTool {
  category: string;
  tools: string[];
}

export const TOOLS_YOU_WILL_LEARN: LearningTool[] = [
  {
    category: "Programming",
    tools: [
      "Python",
      "SQL",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
  {
    category: "Data Analysis",
    tools: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Excel",
    ],
  },
  {
    category: "Machine Learning",
    tools: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Optuna",
      "MLflow",
    ],
  },
  {
    category: "Deep Learning",
    tools: [
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "YOLO",
      "Hugging Face",
    ],
  },
  {
    category: "Generative AI",
    tools: [
      "OpenAI API",
      "Gemini API",
      "LangChain",
      "LangGraph",
      "Pinecone",
      "FAISS",
      "Weaviate",
      "Llama 3",
    ],
  },
  {
    category: "Deployment",
    tools: [
      "FastAPI",
      "Docker",
      "Render",
      "Vercel",
      "AWS",
      "Google Cloud",
      "Azure",
    ],
  },
];
// ── Certifications ────────────────────────────────────────────────────────────

export interface Certification {
  title: string;
  provider: string;
  included: boolean;
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "DATADROP AI Career Program Certificate",
    provider: "DATADROP",
    included: true,
    description:
      "Awarded after successfully completing the full AI Career Program and final capstone project.",
  },
  {
    title: "Python Programming Certificate",
    provider: "DATADROP",
    included: true,
    description:
      "Demonstrates proficiency in Python programming, problem solving, and automation.",
  },
  {
    title: "Machine Learning Certificate",
    provider: "DATADROP",
    included: true,
    description:
      "Recognizes practical skills in supervised learning, unsupervised learning, and model deployment.",
  },
  {
    title: "Deep Learning Certificate",
    provider: "DATADROP",
    included: true,
    description:
      "Issued after completing neural networks, CNNs, NLP, and transformer modules.",
  },
  {
    title: "Generative AI Certificate",
    provider: "DATADROP",
    included: true,
    description:
      "Covers Prompt Engineering, LLMs, RAG systems, AI Agents, and production AI applications.",
  },
  {
    title: "Project Completion Certificate",
    provider: "DATADROP",
    included: true,
    description:
      "Awarded for successfully completing all portfolio projects included in the curriculum.",
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// AI & DATA CAREER KNOWLEDGE
// Used for career guidance and recommendation.
// ─────────────────────────────────────────────────────────────────────────────
// ── Program Features ──────────────────────────────────────────────────────────

export interface ProgramFeature {
  id: string;
  title: string;
  available: boolean;
  description: string;
}

export const PROGRAM_FEATURES: ProgramFeature[] = [
  {
    id: "live-classes",
    title: "Live Interactive Classes",
    available: true,
    description:
      "Attend instructor-led live online classes where you can ask questions and interact with mentors in real time.",
  },
  {
    id: "recordings",
    title: "Class Recordings",
    available: true,
    description:
      "Every live session is recorded so you can watch it anytime if you miss a class or want to revise.",
  },
  {
    id: "assignments",
    title: "Assignments",
    available: true,
    description:
      "Each module includes practical assignments designed to reinforce concepts through hands-on practice.",
  },
  {
    id: "practice",
    title: "Practice Exercises",
    available: true,
    description:
      "Coding exercises, quizzes, and implementation tasks are provided throughout the program.",
  },
  {
    id: "projects",
    title: "Industry Projects",
    available: true,
    description:
      "Students build multiple portfolio-ready AI and Data Science projects using real-world datasets.",
  },
  {
    id: "mentor-support",
    title: "Mentor Support",
    available: true,
    description:
      "Get guidance from mentors whenever you need help during your learning journey.",
  },
  {
    id: "doubt-support",
    title: "Doubt Resolution",
    available: true,
    description:
      "Academic doubts are answered during dedicated support sessions and through the student community.",
  },
  {
    id: "placement",
    title: "Placement Assistance",
    available: true,
    description:
      "Receive career guidance including resume preparation, interview practice, portfolio review, and placement assistance.",
  },
  {
    id: "resume",
    title: "Resume Building",
    available: true,
    description:
      "Professional resume optimization tailored for AI and Data Science roles.",
  },
  {
    id: "linkedin",
    title: "LinkedIn Optimization",
    available: true,
    description:
      "Learn how to build a strong LinkedIn profile that attracts recruiters.",
  },
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    available: true,
    description:
      "Participate in technical and HR mock interviews before attending real interviews.",
  },
  {
    id: "community",
    title: "Student Community",
    available: true,
    description:
      "Join the exclusive DATADROP student community to network, collaborate, and receive announcements.",
  },
  {
    id: "certificate",
    title: "Course Certificate",
    available: true,
    description:
      "Receive a certificate after successfully completing the program requirements.",
  },
  {
    id: "lifetime-access",
    title: "Lifetime Access",
    available: false,
    description:
      "Lifetime access is not included unless explicitly mentioned during enrollment.",
  },
];
// ── Learning Support ──────────────────────────────────────────────────────────

export interface LearningSupport {
  id: string;
  title: string;
  value: string;
  description: string;
}

export const LEARNING_SUPPORT: LearningSupport[] = [
  {
    id: "class-mode",
    title: "Class Mode",
    value: "Live Online + Recorded",
    description:
      "Students attend live online classes and also receive recordings for revision.",
  },
  {
    id: "language",
    title: "Teaching Language",
    value: "Telugu + English",
    description:
      "Complex concepts are explained in simple Telugu with English technical terminology.",
  },
  {
    id: "recordings",
    title: "Class Recordings",
    value: "Available",
    description:
      "Every live session is recorded and shared with enrolled students.",
  },
  {
    id: "mentor-guidance",
    title: "Mentor Guidance",
    value: "Available",
    description:
      "Students receive continuous guidance from mentors throughout the program.",
  },
  {
    id: "doubt-support",
    title: "Doubt Resolution",
    value: "Available",
    description:
      "Students can ask questions during live classes and through the community support channels.",
  },
  {
    id: "assignments",
    title: "Assignments",
    value: "Every Module",
    description:
      "Each module contains practical assignments to reinforce learning.",
  },
  {
    id: "projects",
    title: "Hands-on Projects",
    value: "Included",
    description:
      "Students work on real-world AI and Data Science projects to build a professional portfolio.",
  },
  {
    id: "revision",
    title: "Revision Support",
    value: "Available",
    description:
      "Students can revisit recordings and course materials whenever needed.",
  },
  {
    id: "community",
    title: "Student Community",
    value: "Private Community",
    description:
      "Students collaborate, discuss doubts, and receive updates in the exclusive DATADROP community.",
  },
  {
    id: "attendance",
    title: "Missed Classes",
    value: "Recordings Provided",
    description:
      "Missing a live class won't affect learning because recordings are available.",
  },
];
// ── Placement Support ─────────────────────────────────────────────────────────

export interface PlacementSupport {
  id: string;
  title: string;
  available: boolean;
  description: string;
}

export const PLACEMENT_SUPPORT: PlacementSupport[] = [
  {
    id: "career-guidance",
    title: "Career Guidance",
    available: true,
    description:
      "Students receive personalized career guidance to choose the right AI and Data Science career path.",
  },
  {
    id: "resume-review",
    title: "Resume Building",
    available: true,
    description:
      "Professional AI-focused resume creation and review before applying for jobs.",
  },
  {
    id: "linkedin",
    title: "LinkedIn Optimization",
    available: true,
    description:
      "Students learn how to build a recruiter-friendly LinkedIn profile that attracts opportunities.",
  },
  {
    id: "portfolio",
    title: "Portfolio Building",
    available: true,
    description:
      "Students build an impressive portfolio of real-world AI projects to showcase their practical skills.",
  },
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    available: true,
    description:
      "Technical and HR mock interviews help students prepare confidently for real interviews.",
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    available: true,
    description:
      "Interview preparation includes aptitude guidance, technical questions, communication tips, and HR preparation.",
  },
  {
    id: "placement-assistance",
    title: "Placement Assistance",
    available: true,
    description:
      "DATADROP provides placement assistance to help eligible students connect with hiring opportunities.",
  },
  {
    id: "job-alerts",
    title: "Job Alerts",
    available: true,
    description:
      "Students receive updates about relevant AI, ML, Data Science, and Python job openings.",
  },
  {
    id: "referrals",
    title: "Referral Support",
    available: true,
    description:
      "Eligible students may receive referrals whenever suitable opportunities are available.",
  },
  {
    id: "career-support",
    title: "Career Support",
    available: true,
    description:
      "Career support continues throughout the learning journey with guidance on interviews and career growth.",
  },
];
// ── Master FAQ Database ───────────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "course-duration",
    category: "Course",
    keywords: ["duration", "course duration", "how long", "months"],
    question: "What is the duration of the course?",
    answer: "The Complete AI Career Program is an 18-month guided learning program."
  },

  {
    id: "mode",
    category: "Course",
    keywords: ["online", "offline", "mode", "live", "classes"],
    question: "Is the course online?",
    answer: "Yes. The program is conducted online through live interactive classes along with recordings."
  },

  {
    id: "language",
    category: "Course",
    keywords: ["language", "telugu", "english"],
    question: "What language is used?",
    answer: "Classes are taught in Telugu with English technical terminology so beginners can easily understand."
  },

  {
    id: "batch-size",
    category: "Course",
    keywords: ["batch", "students", "batch size"],
    question: "How many students are there in one batch?",
    answer: "Each batch is limited to approximately 40 students for better mentor interaction."
  },
  {
    id: "live-class",
    category: "Classes",
    keywords: ["live class", "live", "interactive"],
    question: "Are classes live?",
    answer: "Yes. All regular sessions are conducted live so students can interact directly with mentors."
  },

  {
    id: "recordings",
    category: "Classes",
    keywords: ["recording", "recordings", "miss class", "watch later"],
    question: "Do I get recordings?",
    answer: "Yes. Every live class is recorded and shared with enrolled students for revision."
  },

  {
    id: "miss-class",
    category: "Classes",
    keywords: ["miss class", "absent", "cannot attend"],
    question: "What if I miss a class?",
    answer: "No problem. You can watch the recording later and continue learning at your own pace."
  },
  {
    id: "assignments",
    category: "Learning",
    keywords: ["assignment", "assignments", "practice"],
    question: "Are assignments included?",
    answer: "Yes. Every module includes practical assignments to strengthen your understanding."
  },

  {
    id: "projects",
    category: "Learning",
    keywords: ["projects", "real projects", "portfolio"],
    question: "Will I build projects?",
    answer: "Yes. Students work on multiple industry-oriented projects that can be showcased in their portfolio."
  },

  {
    id: "mentor",
    category: "Learning",
    keywords: ["mentor", "mentors", "guidance"],
    question: "Do I get mentor support?",
    answer: "Yes. Mentors guide students throughout the learning journey and help with doubts."
  },
  {
    id: "placement",
    category: "Placement",
    keywords: ["placement", "job", "placement support"],
    question: "Do you provide placement assistance?",
    answer: "Yes. Eligible students receive placement assistance including resume building, mock interviews, portfolio guidance and interview preparation."
  },

  {
    id: "mock",
    category: "Placement",
    keywords: ["mock interview", "interview"],
    question: "Are mock interviews included?",
    answer: "Yes. Mock technical and HR interviews are included to help students prepare confidently."
  },

  {
    id: "resume",
    category: "Placement",
    keywords: ["resume", "cv"],
    question: "Do you help with resumes?",
    answer: "Yes. Students receive professional resume building and review support."
  },
  {
    id: "certificate",
    category: "Certificate",
    keywords: ["certificate", "certification"],
    question: "Will I receive a certificate?",
    answer: "Yes. Students who successfully complete the program receive a course completion certificate."
  },
];
export interface CareerRoleKnowledge {
  id: string;
  title: string;
  category:
  | "Data"
  | "Machine Learning"
  | "Deep Learning"
  | "Generative AI"
  | "Cloud"
  | "Product"
  | "Research";

  description: string;

  whoIsItFor: string;

  dailyWork: string[];

  skills: string[];

  beginnerFriendly: boolean;

  averageSalary: string;

  experienceRange: string;

  companies: string[];

  futureDemand: "Very High" | "High" | "Growing";
}

export const CAREER_KNOWLEDGE: CareerRoleKnowledge[] = [
  {
    id: "data-analyst",

    title: "Data Analyst",

    category: "Data",

    description:
      "Analyze business data, prepare reports, create dashboards, and help companies make better decisions.",

    whoIsItFor:
      "Students who enjoy numbers, Excel, SQL and business insights.",

    dailyWork: [
      "Analyze datasets",
      "Create dashboards",
      "Prepare reports",
      "Identify trends",
      "Present insights"
    ],

    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Excel",
      "Power BI"
    ],

    beginnerFriendly: true,

    averageSalary: "₹5–10 LPA",

    experienceRange: "0–5 Years",

    companies: [
      "Infosys",
      "TCS",
      "Accenture",
      "Amazon"
    ],

    futureDemand: "Very High",
  },
  {
    id: "data-scientist",

    title: "Data Scientist",

    category: "Machine Learning",

    description:
      "Build predictive models using machine learning and statistics to solve business problems.",

    whoIsItFor:
      "Students interested in analytics, mathematics and machine learning.",

    dailyWork: [
      "Build ML models",
      "Clean datasets",
      "Feature engineering",
      "Experimentation",
      "Business analysis"
    ],

    skills: [
      "Python",
      "SQL",
      "Statistics",
      "Machine Learning",
      "Scikit-learn"
    ],

    beginnerFriendly: true,

    averageSalary: "₹8–18 LPA",

    experienceRange: "0–6 Years",

    companies: [
      "PhonePe",
      "Groww",
      "Razorpay",
      "Flipkart"
    ],

    futureDemand: "Very High",
  },
  {
    id: "ml-engineer",

    title: "Machine Learning Engineer",

    category: "Machine Learning",

    description:
      "Develop, train and deploy machine learning models used in production applications.",

    whoIsItFor:
      "Students passionate about AI engineering and software development.",

    dailyWork: [
      "Train models",
      "Deploy APIs",
      "Improve accuracy",
      "Model monitoring",
      "Feature engineering"
    ],

    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Docker",
      "FastAPI"
    ],

    beginnerFriendly: true,

    averageSalary: "₹8–20 LPA",

    experienceRange: "0–6 Years",

    companies: [
      "Amazon",
      "Swiggy",
      "Flipkart",
      "CRED"
    ],

    futureDemand: "Very High",
  },
  {
    id: "llm-engineer",

    title: "LLM Engineer",

    category: "Generative AI",

    description:
      "Build AI applications using Large Language Models like GPT, Gemini and Llama.",

    whoIsItFor:
      "Students interested in Generative AI and modern AI applications.",

    dailyWork: [
      "Prompt Engineering",
      "RAG",
      "Fine Tuning",
      "Build Chatbots",
      "Deploy AI APIs"
    ],

    skills: [
      "Python",
      "LangChain",
      "OpenAI API",
      "Vector Databases",
      "Prompt Engineering"
    ],

    beginnerFriendly: true,

    averageSalary: "₹15–35 LPA",

    experienceRange: "0–8 Years",

    companies: [
      "Microsoft",
      "Google",
      "AI Startups",
      "OpenAI Partners"
    ],

    futureDemand: "Very High",
  },
  {
    id: "computer-vision",

    title: "Computer Vision Engineer",

    category: "Deep Learning",

    description:
      "Develop AI systems that understand images and videos.",

    whoIsItFor:
      "Students interested in image processing and Deep Learning.",

    dailyWork: [
      "Object Detection",
      "Image Classification",
      "Model Training",
      "Deploy Vision Models"
    ],

    skills: [
      "OpenCV",
      "YOLO",
      "PyTorch",
      "CNN"
    ],

    beginnerFriendly: false,

    averageSalary: "₹10–22 LPA",

    experienceRange: "2–8 Years",

    companies: [
      "Healthcare AI",
      "Manufacturing",
      "Retail AI"
    ],

    futureDemand: "High",
  },
  {
    id: "mlops",

    title: "MLOps Engineer",

    category: "Cloud",

    description:
      "Deploy, monitor and maintain Machine Learning systems in production.",

    whoIsItFor:
      "Students interested in cloud computing and deployment.",

    dailyWork: [
      "Deploy models",
      "CI/CD",
      "Docker",
      "Cloud",
      "Monitoring"
    ],

    skills: [
      "Docker",
      "AWS",
      "MLflow",
      "Kubernetes",
      "Python"
    ],

    beginnerFriendly: false,

    averageSalary: "₹12–28 LPA",

    experienceRange: "2–8 Years",

    companies: [
      "Amazon",
      "Infosys",
      "Flipkart",
      "Microsoft"
    ],

    futureDemand: "Very High",
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// COURSE FEATURES
// Everything included with the program.
// ─────────────────────────────────────────────────────────────────────────────

export interface CourseFeature {
  id: string;

  title: string;

  category:
  | "Learning"
  | "Support"
  | "Projects"
  | "Career"
  | "Community"
  | "Certification"
  | "Resources";

  description: string;

  benefits: string[];

  included: boolean;
}

export const COURSE_FEATURES = [
  {
    id: "live-classes",

    title: "Live Interactive Classes",

    category: "Learning",

    description:
      "Weekend live online classes with experienced mentors.",

    benefits: [
      "Ask doubts live",
      "Interactive sessions",
      "Learn step-by-step",
      "Real-time coding"
    ],

    included: true,
  },
  {
    id: "recordings",

    title: "Lifetime Recordings",

    category: "Learning",

    description:
      "Every live class recording is provided for revision.",

    benefits: [
      "Watch anytime",
      "Unlimited revisions",
      "Never miss a class"
    ],

    included: true,
  },
  {
    id: "assignments",

    title: "Assignments",

    category: "Learning",

    description:
      "Practice assignments after every major module.",

    benefits: [
      "Hands-on learning",
      "Better understanding",
      "Skill improvement"
    ],

    included: true,
  },
  {
    id: "mentor-support",

    title: "Mentor Support",

    category: "Support",

    description:
      "Dedicated mentor support throughout the program.",

    benefits: [
      "Ask unlimited doubts",
      "Personal guidance",
      "Technical help"
    ],

    included: true,
  },
  {
    id: "projects",

    title: "Real World Projects",

    category: "Projects",

    description:
      "Build industry-level AI projects for your portfolio.",

    benefits: [
      "Portfolio",
      "Hands-on experience",
      "Interview preparation"
    ],

    included: true,
  },
  {
    id: "resume",

    title: "Resume Building",

    category: "Career",

    description:
      "Professional resume creation and optimization.",

    benefits: [
      "ATS Friendly Resume",
      "Portfolio Guidance",
      "LinkedIn Optimization"
    ],

    included: true,
  },
  {
    id: "mock",

    title: "Mock Interviews",

    category: "Career",

    description:
      "Interview practice with detailed feedback.",

    benefits: [
      "Confidence Building",
      "Technical Interview Practice",
      "HR Interview Preparation"
    ],

    included: true,
  },
  {
    id: "placement",

    title: "Placement Assistance",

    category: "Career",

    description:
      "Career guidance and placement assistance.",

    benefits: [
      "Interview Opportunities",
      "Referral Network",
      "Career Guidance"
    ],

    included: true,
  },
  {
    id: "certificate",

    title: "Certificate",

    category: "Certification",

    description:
      "Industry-recognized course completion certificate.",

    benefits: [
      "Portfolio Value",
      "Resume Addition",
      "Professional Recognition"
    ],

    included: true,
  },
  {
    id: "community",

    title: "Private Student Community",

    category: "Community",

    description:
      "Join a community of learners and mentors.",

    benefits: [
      "Networking",
      "Peer Learning",
      "Career Discussions"
    ],

    included: true,
  },
  {
    id: "resources",

    title: "Learning Resources",

    category: "Resources",

    description:
      "Notes, templates, source code and additional study material.",

    benefits: [
      "PDF Notes",
      "Source Code",
      "Cheat Sheets",
      "Practice Datasets"
    ],

    included: true,
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// OBJECTION HANDLING KNOWLEDGE
// Common student concerns and recommended responses.
// ─────────────────────────────────────────────────────────────────────────────

export interface ObjectionKnowledge {
  id: string;

  objection: string;

  category:
  | "Fees"
  | "Time"
  | "Difficulty"
  | "Placement"
  | "Eligibility"
  | "Confidence"
  | "Trust";

  response: string;

  reassurance: string;

  action: string;

  keywords: string[];
}

export const OBJECTION_KNOWLEDGE: ObjectionKnowledge[] = [
  {
    id: "fee-high",

    objection: "The course fee is too high.",

    category: "Fees",

    response:
      "Learning AI is an investment in your career. The program is designed to provide practical skills, live mentoring, projects, and career support at an affordable fee.",

    reassurance:
      "Many students recover the course fee with their first job or internship.",

    action:
      "Speak with a counselor to understand the complete value included in the program.",

    keywords: [
      "expensive",
      "costly",
      "fee high",
      "price",
      "cost"
    ],
  },
  {
    id: "coding",

    objection: "I don't know coding.",

    category: "Difficulty",

    response:
      "No worries. The course starts from Python basics and assumes no prior programming knowledge.",

    reassurance:
      "Thousands of successful learners began without any coding experience.",

    action:
      "Start with the beginner-friendly foundation modules.",

    keywords: [
      "coding",
      "programming",
      "python",
      "zero knowledge",
      "beginner"
    ],
  },
  {
    id: "non-it",

    objection: "I am from a non-IT background.",

    category: "Eligibility",

    response:
      "Students from commerce, arts, science, mechanical, civil, MBA, B.Com, B.Sc., and many other backgrounds have successfully transitioned into AI careers.",

    reassurance:
      "Your background does not prevent you from learning AI if you are willing to practice consistently.",

    action:
      "Focus on the foundational modules before moving to advanced topics.",

    keywords: [
      "non it",
      "commerce",
      "civil",
      "mechanical",
      "arts",
      "mba"
    ],
  },
  {
    id: "time",

    objection: "I don't have enough time.",

    category: "Time",

    response:
      "Weekend live classes and recorded sessions are designed to help students balance learning with college or work.",

    reassurance:
      "You can learn at your own pace using the recordings whenever needed.",

    action:
      "Plan a weekly study schedule of a few focused hours.",

    keywords: [
      "busy",
      "time",
      "working",
      "college",
      "office"
    ],
  },
  {
    id: "placement",

    objection: "Will I really get a job?",

    category: "Placement",

    response:
      "No institute can honestly guarantee a job. However, the program provides practical projects, portfolio development, resume guidance, mock interviews, and placement assistance to improve your job readiness.",

    reassurance:
      "Your results depend on consistent learning, project work, and interview preparation.",

    action:
      "Complete the curriculum, build your portfolio, and actively participate in placement activities.",

    keywords: [
      "job",
      "placement",
      "guarantee",
      "interview"
    ],
  },
  {
    id: "english",

    objection: "My English is not good.",

    category: "Confidence",

    response:
      "The course is taught in Telugu and English so concepts are easier to understand.",

    reassurance:
      "Technical skills matter much more than perfect spoken English when you are learning.",

    action:
      "Focus on building technical knowledge first and improve communication gradually.",

    keywords: [
      "english",
      "communication",
      "language"
    ],
  },
  {
    id: "age",

    objection: "Am I too old to learn AI?",

    category: "Confidence",

    response:
      "AI can be learned by anyone who is willing to practice consistently. People from different age groups successfully transition into technology careers.",

    reassurance:
      "Learning ability is more important than age.",

    action:
      "Start with the fundamentals and progress step by step.",

    keywords: [
      "age",
      "old",
      "late"
    ],
  },
  {
    id: "trust",

    objection: "How do I know this course is genuine?",

    category: "Trust",

    response:
      "You can review the curriculum, projects, student testimonials, and speak directly with a counselor before making a decision.",

    reassurance:
      "We encourage students to ask questions and understand the program before enrolling.",

    action:
      "Contact a counselor for complete details and clarification.",

    keywords: [
      "fake",
      "genuine",
      "real",
      "trust",
      "scam"
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// QUESTION KNOWLEDGE BASE
// Natural language questions that students frequently ask.
// Parser can search keywords before falling back to FAQs.
// ─────────────────────────────────────────────────────────────────────────────

export interface QuestionKnowledge {
  id: string;

  question: string;

  answer: string;

  keywords: string[];

  category:
  | "Course"
  | "Classes"
  | "Eligibility"
  | "Projects"
  | "Placement"
  | "Certification"
  | "Support"
  | "Payment";
}

export const QUESTION_KNOWLEDGE: QuestionKnowledge[] = [
  {
    id: "recordings",

    question: "Will I get recordings?",

    answer:
      "Yes. Recordings of every live class are provided so you can revise anytime or catch up if you miss a session.",

    keywords: [
      "recording",
      "recordings",
      "video",
      "videos",
      "miss class",
      "missed class",
      "watch later"
    ],

    category: "Classes",
  },
  {
    id: "assignments",

    question: "Are assignments included?",

    answer:
      "Yes. Every major module includes assignments to help you practice and strengthen your understanding.",

    keywords: [
      "assignment",
      "assignments",
      "practice",
      "homework"
    ],

    category: "Course",
  },
  {
    id: "certificate",

    question: "Will I get a certificate?",

    answer:
      "Yes. After successfully completing the program, you'll receive an industry-recognized course completion certificate.",

    keywords: [
      "certificate",
      "certification",
      "completion certificate"
    ],

    category: "Certification",
  },
  {
    id: "mentor",

    question: "Will I get mentor support?",

    answer:
      "Yes. Mentors are available to help you with doubts, assignments, projects, and learning guidance throughout the program.",

    keywords: [
      "mentor",
      "support",
      "doubt",
      "help",
      "guidance"
    ],

    category: "Support",
  },
  {
    id: "weekend",

    question: "Are classes on weekends?",

    answer:
      "Yes. The program is designed primarily with weekend live sessions so students and working professionals can attend comfortably.",

    keywords: [
      "weekend",
      "saturday",
      "sunday",
      "weekends"
    ],

    category: "Classes",
  },
  {
    id: "beginner",

    question: "Can beginners join?",

    answer:
      "Absolutely. The course starts from Python fundamentals and assumes no prior coding experience.",

    keywords: [
      "beginner",
      "fresher",
      "new",
      "zero",
      "no coding",
      "no experience"
    ],

    category: "Eligibility",
  },
  {
    id: "projects",

    question: "How many projects will I build?",

    answer:
      "You'll work on multiple hands-on projects throughout the course, ranging from data analysis to machine learning and Generative AI applications.",

    keywords: [
      "project",
      "projects",
      "portfolio"
    ],

    category: "Projects",
  },
  {
    id: "placement",

    question: "Do you provide placement assistance?",

    answer:
      "Yes. The program includes resume guidance, mock interviews, portfolio development, and placement assistance to help you become job-ready.",

    keywords: [
      "placement",
      "job",
      "career",
      "interview"
    ],

    category: "Placement",
  },
  {
    id: "payment",

    question: "Can I pay online?",

    answer:
      "Yes. You can complete your enrollment securely through our online payment process. Contact a counselor if you need assistance.",

    keywords: [
      "payment",
      "pay",
      "upi",
      "online payment",
      "card",
      "emi"
    ],

    category: "Payment",
  },
];
