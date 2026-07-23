export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  result: string;
  link?: string;
  github?: string;
  caseStudy?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A high-conversion e-commerce platform with product catalog, cart, payments, and order management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    problem: 'Client needed a fast, scalable online store that could handle traffic spikes during sales events without downtime.',
    solution: 'Built a Next.js storefront with SSR, Stripe payments, Redis caching, and AWS-backed infrastructure with CDN delivery.',
    result: '40% faster load times, 25% increase in conversion rate, and zero downtime during peak sales.',
    link: '#',
    github: '#',
    caseStudy: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Inventory Management System',
    description: 'Real-time inventory management system with stock tracking, alerts, and automated reporting.',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['React', 'NestJS', 'MySQL', 'Redis', 'Docker'],
    problem: 'Manual inventory tracking caused stockouts, overselling, and inaccurate reporting across warehouses.',
    solution: 'Built a real-time inventory system with automated alerts, role-based access, and analytics dashboards.',
    result: 'Reduced stockouts by 60% and saved 15+ hours/week of manual reporting work.',
    link: '#',
    github: '#',
    caseStudy: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'AWS Cloud Deployment Pipeline',
    description: 'Automated CI/CD pipeline with Docker, GitHub Actions, and AWS infrastructure as code.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'EC2', 'S3', 'CloudFront'],
    problem: 'Manual deployments were slow, error-prone, and blocked the team from shipping frequently.',
    solution: 'Designed an automated CI/CD pipeline with Docker images, GitHub Actions, and AWS auto-deployment.',
    result: 'Deployment time reduced from 45 minutes to 8 minutes with zero-downtime releases.',
    link: '#',
    github: '#',
    caseStudy: '#',
    featured: true,
  },
  {
    id: '4',
    title: 'AI Content Automation',
    description: 'AI-powered content generation and automation workflow integrated into a SaaS product.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['Next.js', 'OpenAI', 'Vertex AI', 'Node.js', 'PostgreSQL'],
    problem: 'Marketing team spent 20+ hours/week producing repetitive content manually.',
    solution: 'Built an AI automation workflow with OpenAI and Vertex AI for content generation and review.',
    result: 'Cut content production time by 80% while keeping quality and brand consistency.',
    link: '#',
    github: '#',
    caseStudy: '#',
    featured: true,
  },
  {
    id: '5',
    title: 'Real-time Analytics Dashboard',
    description: 'A real-time analytics dashboard with custom charts, filtering, and data export.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['React', 'TypeScript', 'WebSocket', 'Node.js', 'Redis'],
    problem: 'Business needed live visibility into user behavior and sales metrics.',
    solution: 'Built a WebSocket-powered dashboard with real-time charts, filters, and CSV export.',
    result: 'Enabled data-driven decisions with sub-second metric updates.',
    link: '#',
    github: '#',
  },
  {
    id: '6',
    title: 'SaaS API Platform',
    description: 'A multi-tenant SaaS API platform with authentication, rate limiting, and billing.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'Stripe', 'Docker'],
    problem: 'Startup needed a scalable, billable API platform to launch their SaaS quickly.',
    solution: 'Architected a multi-tenant API with JWT auth, Redis rate limiting, and Stripe billing.',
    result: 'Launched in 6 weeks with secure, scalable infrastructure ready for paying customers.',
    link: '#',
    github: '#',
  },
];

export const technologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();
