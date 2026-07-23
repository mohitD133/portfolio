export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Founder',
    company: 'RetailFlow',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'Brijesh rebuilt our e-commerce platform from scratch. Load times dropped by 40% and our conversion rate jumped 25%. He understands both engineering and business impact.',
    rating: 5,
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'CTO',
    company: 'CloudPeak SaaS',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'He set up our entire AWS CI/CD pipeline with Docker. Deployments went from 45 minutes to under 10. Reliable, communicative, and genuinely invested in our success.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'Inventrack',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'The inventory system Brijesh built eliminated our stockouts and saved us 15 hours a week in manual reporting. He delivered ahead of schedule.',
    rating: 5,
  },
  {
    id: '4',
    name: 'James Anderson',
    role: 'CEO',
    company: 'ContentAI',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    review: 'His AI automation workflow cut our content production time by 80%. Brijesh thinks like a product owner, not just a developer. Highly recommended.',
    rating: 5,
  },
];
