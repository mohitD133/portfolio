export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { category: 'Data & BI', icon: 'chart', skills: ['Power BI', 'Tableau', 'DAX', 'Power Query', 'KPI Automation', 'VBA', 'Matplotlib', 'Seaborn', 'Plotly'] },
  { category: 'Data Science', icon: 'sparkles', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'PySpark', 'Feature Engineering'] },
  { category: 'Programming & Data', icon: 'code', skills: ['Python', 'SQL', 'Java', 'JavaScript', 'C#', 'SQL Server'] },
  { category: 'Full-Stack & Tools', icon: 'layout', skills: ['React', 'Angular', 'ASP.NET Core', 'Entity Framework Core', 'AWS', 'n8n', 'GitLab', 'JIRA', 'Postman'] },
];
