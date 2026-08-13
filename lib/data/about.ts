export interface About {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  longBio: string[];
  location: string;
  email: string;
  phone: string;
  whatsapp?: string;
  resumeUrl: string;
  heroImage?: string;
  social: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const about: About = {
  name: 'Mohit Dangariya',
  title: 'Data Analyst | BI Developer | Data Engineer',
  tagline: 'Data Analyst & Full-Stack Data Engineer',
  bio: 'Detail-oriented data specialist and software engineer skilled in Python, SQL, Power BI, and modern web technologies. I turn complex data into reliable pipelines, useful dashboards, and practical business insights.',
  longBio: [
    'I am a data specialist and software engineer currently pursuing an M.Sc. in Web & Data Science at the University of Koblenz. My work combines data analysis, machine learning, business intelligence, and full-stack development.',
    'At RiseAscend Technologies, I automated ETL processes that connected Python, SharePoint, SQL, Power BI, DAX, and Power Query for Europe-wide workflows. I also developed dashboards and KPIs that gave engineering teams clearer, more actionable reporting.',
    'My earlier software engineering experience strengthened my ability to build performant, scalable products with C#, ASP.NET Core, SQL Server, Angular, and TypeScript. I enjoy transforming business requirements into data solutions that are clear, dependable, and measurable.',
  ],
  location: 'Koblenz, Germany',
  email: 'mohitdangariya57@gmail.com',
  phone: '+49 15563204659',
  resumeUrl: '/resume.pdf',
  social: [
    { name: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/mohit-dangariya/', icon: 'linkedin' },
    { name: 'WhatsApp', url: 'https://wa.me/4915563204659', icon: 'whatsapp' },
    { name: 'Email', url: 'mailto:mohitdangariya57@gmail.com', icon: 'mail' },
  ],
};
