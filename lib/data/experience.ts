export interface Experience {
  id: string;
  year: string;
  title: string;
  description: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: '1',
    year: 'Mar 2026 – Present',
    title: 'Full Stack Data Engineer · Think3DDD',
    description: 'Work-study role based in Berlin, Germany (remote).',
    highlights: ['Full Stack Data Engineer', 'Work-study · Remote'],
  },
  {
    id: '2',
    year: 'Jun 2023 – Jun 2025',
    title: 'Junior Data Analyst · RiseAscend Technologies',
    description: 'Built data workflows and business intelligence reporting for engineering teams.',
    highlights: [
      'Automated ETL processes using Python, SharePoint, SQL, Power BI, DAX, and Power Query for Europe-wide workflows',
      'Developed Power BI dashboards and KPIs to improve reporting transparency and support data-driven decisions',
      'Gathered stakeholder requirements and designed scalable data solutions, achieving 95% stakeholder satisfaction',
      'Optimized SQL queries to improve data retrieval and visualization integration',
    ],
  },
  {
    id: '3',
    year: 'Jan 2023 – Jun 2023',
    title: 'Software Engineer · eSparkBiz',
    description: 'Developed scalable backend and responsive frontend solutions for business systems.',
    highlights: [
      'Improved ASP.NET Core and Entity Framework Core backend functionality for systems supporting $1M+ in operations',
      'Reduced latency by 20% through optimized SQL Server queries',
      'Architected a multi-tenant SaaS solution that cut deployment costs by 70%',
      'Expanded Angular applications and improved Lighthouse accessibility scores by 30%',
    ],
  },
];
