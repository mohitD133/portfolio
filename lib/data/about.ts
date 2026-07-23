export interface About {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  longBio: string[];
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  resumeUrl: string;
  heroImage?: string;
  social: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const about: About = {
  name: 'Brijesh Lakhani',
  title: 'Full Stack Developer | AWS Cloud Engineer | E-commerce Technology Consultant',
  tagline: 'Full Stack Developer & Cloud Engineer',
  bio: 'I build scalable web applications, cloud infrastructure, e-commerce platforms, and AI-powered solutions that help businesses grow. With 5+ years of experience, I have delivered client projects using MERN Stack, Angular, AWS, MongoDB, MySQL, Docker, Redis, and modern cloud technologies.',
  longBio: [
    'I help startups and enterprises turn complex business problems into reliable, scalable software. My work spans full-stack web applications, cloud infrastructure on AWS, and high-performance e-commerce platforms that handle real customer traffic.',
    'Over the last 5+ years I have delivered 20+ production projects and managed 40+ products end-to-end — from architecture and API design to deployment, monitoring, and automation. I focus on outcomes: faster load times, lower cloud costs, higher conversion, and systems that scale without breaking.',
    'Whether you need a MERN application, an AWS deployment pipeline, an inventory management system, or AI automation integrated into your product, I bring engineering rigor and a business-first mindset to every engagement.',
  ],
  location: 'Surat, Gujarat, India',
  email: 'hello@brijeshlakhani.dev',
  phone: '+91 00000 00000',
  whatsapp: 'https://wa.me/910000000000',
  resumeUrl: '/resume.pdf',
  heroImage: undefined,
  social: [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'WhatsApp', url: 'https://wa.me/910000000000', icon: 'whatsapp' },
    { name: 'Email', url: 'mailto:hello@brijeshlakhani.dev', icon: 'mail' },
  ],
};
