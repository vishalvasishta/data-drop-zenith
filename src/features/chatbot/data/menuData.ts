import type { MenuOption } from '../types';

export const MAIN_MENU: MenuOption[] = [
  { id: 'about', label: 'About Course', icon: '📚', targetState: 'ABOUT', description: 'What is DATADROP & who is it for?' },
  { id: 'roadmap', label: 'Learning Roadmap', icon: '🗺️', targetState: 'ROADMAP', description: '18-month structured learning path' },
  { id: 'curriculum', label: 'Complete Curriculum', icon: '🎓', targetState: 'CURRICULUM', description: '28 modules from Python to Agentic AI' },
  { id: 'careers', label: 'Career Opportunities', icon: '💼', targetState: 'CAREERS', description: 'Jobs, salaries & growth paths' },
  { id: 'projects', label: 'Projects', icon: '🚀', targetState: 'PROJECTS', description: '25+ real-world portfolio projects' },
  { id: 'placement', label: 'Placement', icon: '🏆', targetState: 'PLACEMENT', description: '92% placement rate, avg ₹8.5 LPA' },
  { id: 'pricing', label: 'Course Fee', icon: '💰', targetState: 'PRICING', description: 'Just ₹4,599 for 18 months' },
  { id: 'bonuses', label: 'Bonuses', icon: '🎁', targetState: 'BONUSES', description: '₹12,500+ worth of extras — FREE' },
  { id: 'enroll', label: 'Enroll Now', icon: '✅', targetState: 'ENROLLMENT', description: 'Secure your seat today' },
  { id: 'faq', label: 'FAQs', icon: '❓', targetState: 'FAQ', description: '80+ common questions answered' },
  { id: 'student', label: 'Existing Student', icon: '👤', targetState: 'STUDENT_SUPPORT', description: 'Access, LMS & support' },
  { id: 'contact', label: 'Talk to Counselor', icon: '📞', targetState: 'CONTACT', description: 'Speak with a human advisor' },
];
