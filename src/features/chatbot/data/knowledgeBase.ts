import type { CourseTopic } from '../types';

export const COURSE_INFO = {
  name: 'DATADROP Complete AI Career Program',
  duration: '18 Months',
  fee: '₹4,599',
  feeNumeric: 4599,
  mode: 'Live + Recorded',
  language: 'Telugu + English',
  batchSize: 'Limited seats per batch',
  certificate: 'Industry-recognised certificate upon completion',
  mentorship: '1-on-1 mentorship sessions',
  placementSupport: 'Dedicated placement assistance',
  liveProjects: '25+ real-world projects',
  supportEmail: 'support@datadrop.in',
  counselorWhatsApp: '+91-9999999999',
} as const;

export const CURRICULUM: CourseTopic[] = [
  {
    title: 'Python Programming',
    description:
      'Master Python from scratch — variables, control flow, OOP, file I/O, error handling, and Pythonic idioms used by professional data scientists.',
    careerOutcome:
      'Python Developer, Data Analyst, Backend Engineer, AI Engineer',
    project: 'Build a CLI data-processing tool that parses CSV reports',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'Logic Building & Problem Solving',
    description:
      'Develop computational thinking using flowcharts, pseudocode, recursion, and classic algorithmic patterns used in coding interviews.',
    careerOutcome: 'Software Engineer, ML Engineer, Product Analyst',
    project: 'Solve 30 LeetCode-style problems with optimised Python solutions',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Data Structures & Algorithms',
    description:
      'Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching — with Big-O analysis and interview-ready patterns.',
    careerOutcome: 'Software Developer, ML Engineer, Data Engineer',
    project: 'Implement a search-autocomplete system using Trie data structure',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'SQL & Databases',
    description:
      'Relational database design, advanced SQL (JOINs, CTEs, window functions), query optimisation, and connecting databases to Python.',
    careerOutcome: 'Data Analyst, BI Developer, Backend Developer, Data Engineer',
    project: 'Design and query an e-commerce analytics database',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Pandas',
    description:
      'Data manipulation at scale — DataFrames, merging, groupby, pivoting, time-series handling, and performance tips for large datasets.',
    careerOutcome: 'Data Analyst, Data Scientist, ML Engineer',
    project: 'Perform full EDA on a real Kaggle dataset with 1M+ rows',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'NumPy',
    description:
      'Numerical computing foundation — n-dimensional arrays, broadcasting, vectorised operations, linear algebra, and random simulations.',
    careerOutcome: 'Data Scientist, ML Researcher, Quant Analyst',
    project: 'Implement linear regression from scratch using only NumPy',
    estimatedDuration: '1 week',
  },
  {
    title: 'Excel for Data Analysis',
    description:
      'Power Query, pivot tables, VLOOKUP/XLOOKUP, conditional formatting, dashboards, and macro automation for business reporting.',
    careerOutcome: 'Business Analyst, Data Analyst, Financial Analyst',
    project: 'Build a sales KPI dashboard with automated monthly refresh',
    estimatedDuration: '1 week',
  },
  {
    title: 'Matplotlib & Seaborn',
    description:
      'Publication-quality data visualisation — line charts, heatmaps, distributions, pair plots, and custom theming for executive presentations.',
    careerOutcome: 'Data Analyst, Data Scientist, BI Developer',
    project: 'Create a 10-chart visual story on Indian startup funding trends',
    estimatedDuration: '1 week',
  },
  {
    title: 'Regression Models',
    description:
      'Linear, polynomial, ridge, lasso, and elastic-net regression with feature engineering, cross-validation, and residual diagnostics.',
    careerOutcome: 'Data Scientist, Quant Analyst, ML Engineer',
    project: 'Predict house prices in Hyderabad with a deployable regression API',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Classification Models',
    description:
      'Logistic regression, decision trees, random forests, SVM, k-NN — with ROC curves, precision-recall, and class-imbalance handling.',
    careerOutcome: 'ML Engineer, Data Scientist, Risk Analyst',
    project: 'Build a churn-prediction classifier for a telecom dataset',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Clustering & Unsupervised Learning',
    description:
      'K-means, DBSCAN, hierarchical clustering, PCA, t-SNE — applied to customer segmentation and anomaly detection.',
    careerOutcome: 'ML Engineer, Marketing Analyst, Data Scientist',
    project: 'Segment e-commerce customers and design targeted campaigns',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Scikit-Learn Pipelines',
    description:
      'Production ML pipelines with transformers, feature unions, grid search, model persistence, and sklearn best practices.',
    careerOutcome: 'ML Engineer, Data Scientist, Platform Engineer',
    project: 'Build an end-to-end ML pipeline deployable via REST API',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Neural Networks',
    description:
      'Perceptrons, activation functions, forward pass, loss functions, gradient descent — the mathematical and intuitive foundations.',
    careerOutcome: 'Deep Learning Engineer, AI Researcher, ML Engineer',
    project: 'Train a neural network on MNIST from scratch in NumPy',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Backpropagation & Optimisers',
    description:
      'Chain rule derivation, vanishing gradients, SGD, Adam, RMSProp, learning-rate scheduling, and training diagnostics.',
    careerOutcome: 'Deep Learning Engineer, AI Researcher',
    project: 'Implement backprop by hand and compare optimisers on CIFAR-10',
    estimatedDuration: '1 week',
  },
  {
    title: 'Transfer Learning',
    description:
      'Fine-tune pre-trained models (ResNet, EfficientNet, BERT) for custom domains — dramatically reducing training time and data requirements.',
    careerOutcome: 'AI Engineer, Computer Vision Engineer, NLP Engineer',
    project: 'Fine-tune ResNet50 to classify 10 Telugu food categories',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Computer Vision',
    description:
      'CNNs, object detection (YOLO), image segmentation, OpenCV, real-time camera pipelines, and edge-device deployment.',
    careerOutcome: 'Computer Vision Engineer, Robotics Engineer, AI Product Developer',
    project: 'Build a real-time face-mask detector with YOLOv8',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'Sequence Modeling & NLP',
    description:
      'RNNs, LSTMs, GRUs, transformers, tokenisation, embeddings, sentiment analysis, and text classification at production scale.',
    careerOutcome: 'NLP Engineer, Conversational AI Developer, ML Engineer',
    project: 'Build a Telugu-English bilingual sentiment analyser',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'LLM Fine-Tuning',
    description:
      'Full fine-tuning vs. parameter-efficient methods (LoRA, QLoRA), dataset preparation, evaluation metrics, and pushing models to Hugging Face Hub.',
    careerOutcome: 'LLM Engineer, AI Researcher, ML Platform Engineer',
    project: 'Fine-tune LLaMA-3 on a custom Telugu Q&A dataset',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'Prompt Engineering',
    description:
      'Zero-shot, few-shot, chain-of-thought, tree-of-thought, system prompts, and structured output patterns for OpenAI, Claude, and Gemini APIs.',
    careerOutcome: 'Prompt Engineer, AI Product Developer, LLM Consultant',
    project: 'Build a production-grade prompt library for a legal-document assistant',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'RAG (Retrieval-Augmented Generation)',
    description:
      'Document ingestion, chunking strategies, embedding models, vector search, re-ranking, and full RAG pipelines with LangChain / LlamaIndex.',
    careerOutcome: 'AI Engineer, Knowledge Management Developer, Enterprise AI Consultant',
    project: 'Build a RAG-powered Q&A bot on DATADROP course material',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'AI Agents',
    description:
      'ReAct, tool-use, memory, planning, multi-agent orchestration using LangGraph and AutoGen — production-ready agent architectures.',
    careerOutcome: 'AI Automation Engineer, Agentic AI Developer, AI Product Manager',
    project: 'Build an autonomous research agent that writes market reports',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'Vector Databases',
    description:
      'Pinecone, Weaviate, ChromaDB, Qdrant — ANN algorithms, index tuning, hybrid search, and scaling vector stores to millions of documents.',
    careerOutcome: 'AI Infrastructure Engineer, Backend AI Developer, ML Platform Engineer',
    project: 'Build a semantic job-search engine with 100K+ job descriptions',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'API Development',
    description:
      'FastAPI, REST design, authentication (JWT/OAuth2), async endpoints, OpenAPI docs, and containerising ML services with Docker.',
    careerOutcome: 'Backend Developer, ML API Engineer, Full-Stack AI Developer',
    project: 'Wrap an ML model in a FastAPI service with auth and rate limiting',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Cloud Deployment',
    description:
      'AWS / GCP fundamentals, EC2 / Cloud Run, S3/GCS, serverless AI inference, CI/CD pipelines, and monitoring with CloudWatch.',
    careerOutcome: 'MLOps Engineer, Cloud AI Architect, DevOps Engineer',
    project: 'Deploy a full ML system on AWS with auto-scaling and logging',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'System Design for AI',
    description:
      'Distributed ML training, feature stores, model registries, A/B testing, data pipelines, caching strategies, and reliability patterns.',
    careerOutcome: 'ML System Designer, Staff ML Engineer, AI Architect',
    project: 'Design a recommendation-system architecture for 10M users',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'Agentic AI',
    description:
      'Long-horizon planning, tool orchestration, safety guardrails, memory architectures, and deploying autonomous agents in enterprise settings.',
    careerOutcome: 'Agentic AI Developer, Enterprise AI Consultant, AI Product Lead',
    project: 'Build a self-improving customer-support agent for an e-commerce brand',
    estimatedDuration: '3 weeks',
  },
  {
    title: 'Enterprise Deployment',
    description:
      'Model governance, compliance, MLOps maturity levels, shadow mode, canary releases, incident response, and SLA management for AI systems.',
    careerOutcome: 'MLOps Lead, AI Platform Engineer, CTO / VP of AI',
    project: 'Design and simulate a production MLOps workflow with rollback',
    estimatedDuration: '2 weeks',
  },
  {
    title: 'AI Product Design',
    description:
      'UX for AI — explainability, feedback loops, human-in-the-loop design, AI product strategy, and pitching AI products to stakeholders.',
    careerOutcome: 'AI Product Manager, AI Founder, Head of AI Products',
    project: 'Prototype and pitch a B2B AI SaaS product with a working demo',
    estimatedDuration: '2 weeks',
  },
];

export const PLACEMENT_STATS = {
  placementRate: '92%',
  averageSalary: '₹8.5 LPA',
  highestSalary: '₹28 LPA',
  companiesHired: '150+',
  studentsPlaced: '500+',
  avgTimeToPlacement: '3 months after completion',
};

export const BONUSES = [
  { title: '1-on-1 Mock Interviews', value: 'Worth ₹5,000 — FREE' },
  { title: 'Resume & LinkedIn Review', value: 'Worth ₹2,000 — FREE' },
  { title: 'Private Discord Community (Lifetime)', value: 'Worth ₹1,500 — FREE' },
  { title: 'Recorded Sessions (6-month access)', value: 'Worth ₹3,000 — FREE' },
  { title: 'Project Starter Templates', value: '25+ templates — FREE' },
  { title: 'Industry Guest Sessions', value: 'Monthly live sessions — FREE' },
  { title: 'Job-Ready Portfolio Review', value: 'Worth ₹1,000 — FREE' },
];
