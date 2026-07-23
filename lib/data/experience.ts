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
    year: '2021',
    title: 'Started Professional Development',
    description: 'Began building production web applications with the MERN stack and modern frontend frameworks.',
    highlights: [
      'Delivered first client web applications using React and Node.js',
      'Built REST APIs and integrated third-party services',
    ],
  },
  {
    id: '2',
    year: '2022',
    title: 'Delivered Multiple Client Projects',
    description: 'Shipped full-stack projects across e-commerce, dashboards, and SaaS tools for clients worldwide.',
    highlights: [
      'Delivered 10+ client projects end-to-end',
      'Improved application performance and code quality through testing',
    ],
  },
  {
    id: '3',
    year: '2023',
    title: 'Specialized in MERN Applications',
    description: 'Focused on scalable MERN architecture, MongoDB performance, and real-time features with Redis.',
    highlights: [
      'Architected scalable MERN applications with Redis caching',
      'Reduced API response times by 40% through query optimization',
    ],
  },
  {
    id: '4',
    year: '2024',
    title: 'Cloud Infrastructure & AWS',
    description: 'Built AWS cloud infrastructure with Docker, CI/CD pipelines, and automated deployments.',
    highlights: [
      'Designed AWS deployments with EC2, S3, and CloudFront',
      'Implemented CI/CD pipelines with GitHub Actions and Docker',
    ],
  },
  {
    id: '5',
    year: '2025',
    title: 'E-commerce Solutions & Automation',
    description: 'Delivered high-conversion e-commerce platforms and inventory management systems with automation.',
    highlights: [
      'Built e-commerce platforms with Stripe and inventory automation',
      'Increased client conversion rates through performance tuning',
    ],
  },
  {
    id: '6',
    year: '2026',
    title: 'AI Integrations & Technology Consulting',
    description: 'Integrating OpenAI, Vertex AI, and automation workflows into products and consulting on architecture.',
    highlights: [
      'Integrated OpenAI and Vertex AI into production applications',
      'Consulting startups on scalable architecture and AI automation',
    ],
  },
];
