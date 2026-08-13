export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  { id: '1', title: 'Data Analysis & BI', description: 'Transform raw data into clear dashboards, KPIs, and reports with Power BI, SQL, DAX, and Power Query.', icon: 'chart' },
  { id: '2', title: 'Data Engineering', description: 'Build reliable data workflows and ETL processes using Python, SQL, SharePoint, and business intelligence tools.', icon: 'workflow' },
  { id: '3', title: 'Machine Learning', description: 'Develop practical machine-learning models with Python, Scikit-learn, TensorFlow, and PyTorch.', icon: 'sparkles' },
  { id: '4', title: 'Full-Stack Development', description: 'Create responsive web applications with C#, ASP.NET Core, Angular, React, and modern frontend tooling.', icon: 'code' },
  { id: '5', title: 'Database Optimization', description: 'Design and optimize SQL queries and database integrations for efficient data retrieval and reporting.', icon: 'server' },
];
