export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'NestJS', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'CloudFront', 'S3', 'EC2'],
  },
  {
    category: 'AI & Automation',
    icon: 'sparkles',
    skills: ['OpenAI', 'Vertex AI', 'Prompt Engineering', 'Automation Workflows'],
  },
];
