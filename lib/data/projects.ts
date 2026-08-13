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
    description: 'A full-featured e-commerce platform built with the MEAN stack.',
    image: 'https://brijesh-lakhani.vercel.app/assets/ecommerce-uJMWUYZS.png',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Hapi.js', 'AWS S3'],
    problem: 'Create a complete, approachable storefront and management experience for a modern online business.',
    solution: 'Built the Business Mart console with Angular, Node.js, MongoDB, Hapi.js, and AWS S3 for a full e-commerce workflow.',
    result: 'A live, publicly accessible e-commerce application with source code available on GitHub.',
    link: 'https://business-mart-console.vercel.app/',
    github: 'https://github.com/Mrlakhani01/business-mart-console',
    featured: true,
  },
  {
    id: '2',
    title: 'Happy Gems Jewelry Landing Page',
    description: 'An elegant, responsive landing page crafted for Happy Gems, a luxury jewelry brand.',
    image: 'https://brijesh-lakhani.vercel.app/assets/happy-gems-LconBVpM.png',
    technologies: ['React.js', 'Framer Motion', 'Twilio', 'Node.js'],
    problem: 'Present a luxury jewelry brand with a refined, responsive web experience.',
    solution: 'Created a responsive React landing page with polished interactions using Framer Motion and supporting Node.js and Twilio integrations.',
    result: 'A live brand experience with the frontend source publicly available on GitHub.',
    link: 'https://happy-gems-frontend.vercel.app',
    github: 'https://github.com/Mrlakhani01/happy-gems-frontend',
    featured: true,
  },
  {
    id: '3',
    title: 'Wellocare',
    description: 'A comprehensive healthcare solution designed to streamline patient care and medical management.',
    image: 'https://brijesh-lakhani.vercel.app/assets/wellocare-COSBthph.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    problem: 'Healthcare workflows require a clear, centralized experience for patient care and medical management.',
    solution: 'Built a modern healthcare web application with Next.js, Tailwind CSS, Node.js, and MongoDB.',
    result: 'Delivered a live healthcare solution with source code available on GitHub.',
    link: 'https://wellocare.vercel.app/',
    github: 'https://github.com/Mrlakhani01/wellocare',
    featured: true,
  },
  {
    id: '4',
    title: 'Imperial Property Public Website',
    description: 'A sleek, SEO-optimized public platform for Imperial Property, showcasing real-estate listings with powerful filters and a modern UI.',
    image: 'https://brijesh-lakhani.vercel.app/assets/imperial-Bn93aBE8.png',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Axios', 'Vercel', 'Guest Allow'],
    problem: 'Prospective buyers need an easy way to browse and filter real-estate listings online.',
    solution: 'Created a modern, search-friendly public property platform using Next.js, Tailwind CSS, MongoDB, and Axios.',
    result: 'Delivered a live real-estate listing website with public source code on GitHub.',
    link: 'https://www.imperialproperty.in/',
    github: 'https://github.com/BrijeshLakhani/imperial-property-public',
    featured: true,
  },
];

export const technologies = Array.from(new Set(projects.flatMap((project) => project.technologies))).sort();
