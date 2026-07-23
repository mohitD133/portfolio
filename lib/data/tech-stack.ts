export interface Tech {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const techStack: Tech[] = [
  { name: 'React', icon: 'react', color: '#61DAFB', category: 'Frontend' },
  { name: 'Angular', icon: 'angular', color: '#DD0031', category: 'Frontend' },
  { name: 'Node.js', icon: 'node', color: '#339933', category: 'Backend' },
  { name: 'MongoDB', icon: 'mongodb', color: '#47A248', category: 'Database' },
  { name: 'MySQL', icon: 'mysql', color: '#4479A1', category: 'Database' },
  { name: 'Redis', icon: 'redis', color: '#DC382D', category: 'Caching' },
  { name: 'AWS', icon: 'aws', color: '#FF9900', category: 'Cloud' },
  { name: 'Docker', icon: 'docker', color: '#2496ED', category: 'DevOps' },
  { name: 'GitHub', icon: 'github', color: '#F9FAFB', category: 'Version control' },
  { name: 'OpenAI', icon: 'openai', color: '#10A37F', category: 'AI integration' },
];
