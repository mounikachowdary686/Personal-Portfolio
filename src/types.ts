export type ProjectCategory = 'all' | 'web' | 'aiml' | 'iot' | 'tools';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  highlightMetric?: string;
  highlights?: string[];
  architecture?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Hackathon' | 'AI & Python' | 'Computer Science' | 'Entrepreneurship';
  description: string;
  isHackathon?: boolean;
  skills: string[];
  date: string;
  credentialId?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  tagline: string;
  category: 'Programming' | 'Web' | 'Database' | 'Tools';
  icon: string;
  projectsUsed: string[];
}

export interface EducationDetail {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  timeline: string;
  description: string;
  coursework: string[];
  keyHighlights: string[];
}
