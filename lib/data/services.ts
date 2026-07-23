export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'End-to-end web applications built with MERN, Angular, and modern TypeScript stacks.',
    icon: 'code',
  },
  {
    id: '2',
    title: 'E-commerce Solutions',
    description: 'High-conversion online stores with payments, inventory, and checkout optimization.',
    icon: 'shopping-cart',
  },
  {
    id: '3',
    title: 'Inventory Management Systems',
    description: 'Real-time inventory tracking, automated alerts, and warehouse reporting tools.',
    icon: 'package',
  },
  {
    id: '4',
    title: 'AWS Cloud Deployment',
    description: 'Scalable AWS infrastructure with Docker, CI/CD, and zero-downtime deployments.',
    icon: 'cloud',
  },
  {
    id: '5',
    title: 'API Development',
    description: 'Secure, documented REST and GraphQL APIs with authentication and rate limiting.',
    icon: 'server',
  },
  {
    id: '6',
    title: 'AI Integration',
    description: 'OpenAI, Vertex AI, and prompt engineering integrated into your product workflows.',
    icon: 'sparkles',
  },
  {
    id: '7',
    title: 'Business Automation',
    description: 'Automate repetitive workflows with pipelines, scripts, and AI-powered tooling.',
    icon: 'workflow',
  },
];
