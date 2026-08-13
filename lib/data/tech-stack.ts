export interface Tech {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export const techStack: Tech[] = [
  { name: 'Python', icon: 'python', color: '#3776AB', category: 'Programming' },
  { name: 'Power BI', icon: 'chart', color: '#F2C811', category: 'Business intelligence' },
  { name: 'React', icon: 'react', color: '#61DAFB', category: 'Frontend' },
  { name: 'Angular', icon: 'angular', color: '#DD0031', category: 'Frontend' },
  { name: 'AWS', icon: 'aws', color: '#FF9900', category: 'Cloud' },
  { name: 'XGBoost', icon: 'bot', color: '#FF6600', category: 'Machine learning' },
  { name: 'ARIMA', icon: 'chart', color: '#FF6600', category: 'Machine learning' },
  { name: 'n8n', icon: 'workflow', color: '#EA4B71', category: 'Automation' },
  { name: 'KPI Automation', icon: 'chart', color: '#F2C811', category: 'Business intelligence' },
  { name: 'TensorFlow', icon: 'bot', color: '#FF6F00', category: 'Machine learning' },
];
