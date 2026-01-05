import { env } from '../env.mjs';

export const siteConfig = {
  title: 'Gouri Patil • Student Portfolio',
  name: 'Gouri Patil',
  description:
    'The personal portfolio of Gouri Patil — Aspiring Full-Stack Web Developer and Computer Science student at KLE Technological University, specializing in Web Technologies and Software Engineering.',
  keywords: [
    // ──────────────── 🧑‍💻 Portfolio & Personal Brand ────────────────
    'Gouri Patil',
    'Gouri Patil Portfolio',
    'Gouri Portfolio',
    'Gouri Patil Developer',
    'Gouri Patil Website',
    'Gouri Patil Student',
    'KLE Tech Student',
    'Portfolio Website',
    'Personal Portfolio',
    'Developer Portfolio',
    'Frontend Portfolio',
    'Creative Developer Portfolio',
    'Modern Portfolio Design',
    'Next.js Portfolio',
    'React Portfolio',
    'Professional Portfolio',
    'Software Engineer Portfolio',

    // ──────────────── 🌐 Web Development & Frontend ────────────────
    'Front-end Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Developer',
    'Frontend Engineer',
    'UI Developer',
    'Web Development',
    'Frontend Development',
    'Responsive Web Design',
    'Website Development',
    'Web Applications',
    'Modern Web Apps',
    'Progressive Web Apps',
    'Web Performance Optimization',
    'Accessibility in Web Design',
    'Semantic HTML',
    'CSS Expert',

    // ──────────────── 🎨 UI / UX & Design ────────────────
    'UI/UX Design',
    'User Interface Engineer',
    'User Experience Designer',
    'Tailwind CSS',
    'Framer Motion',
    'Shadcn UI',
    'Responsive UI',
    'Design Systems',
    'Component Design',
    'Interactive UI',
    'Visual Design',
    'Aesthetic Web Design',
    'Creative UI Developer',

    // ──────────────── ⚙️ Tools, Frameworks & Tech Stack ────────────────
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Framer Motion',
    'Lucide Icons',
    'Vercel',
    'GitHub Actions',
    'Husky',
    'Prettier',
    'ESLint',
    'Mongoose',
    'Zod',
    'Env Validation',
    'Server Components',
    'Next.js App Router',
    'SEO Optimization',

    // ──────────────── 🚀 Career & Industry ────────────────
    'Front-end Engineer India',
    'Software Developer India',
    'Web Developer Delhi',
    'Tech Enthusiast',
    'Freelance Developer',
    'Freelance Frontend Developer',
    'Open Source Developer',
    'Next.js Freelancer',
    'React Freelancer',
    'Frontend Specialist',
    'Performance-Oriented Developer',
    'Full Stack Enthusiast',
    'UI Developer Delhi',

    // ──────────────── 💡 Soft Skills & Personal Traits ────────────────
    'Creative Problem Solver',
    'Clean Code Advocate',
    'Modern Design Thinker',
    'Tech Enthusiast',
    'Continuous Learner',
    'Innovative Developer',
    'Collaborative Engineer',
    'Design-minded Developer',

    // ──────────────── 🔍 SEO & Meta Context ────────────────
    'Portfolio Website SEO',
    'Personal Branding Developer',
    'Next.js SEO',
    'Open Graph Optimization',
    'Meta Tags Optimization',
    'Structured Data',
    'Schema.org Portfolio',
    'Google Search Optimization',
  ],

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },

  url: env.SITE_URL || 'https://dark-portfolio-site.vercel.app/',
  ogImage: `${env.SITE_URL || 'https://dark-portfolio-site.vercel.app/'}/og-image.png`,
  twitterHandle: '@gourip',
  locale: 'en_IN',
  author: {
    name: 'Gouri Patil',
    url: 'https://dark-portfolio-site.vercel.app/',
    email: '01fe23bcs022@kletech.ac.in',
  },
  themeColor: '#0f172a',
  googleSiteVerificationId: '', // TODO

  //  <Metadata>
  metadata: {
    title: 'Gouri Patil • Student Portfolio',
    description:
      'Explore the work, projects, and assignments of Gouri Patil — Aspiring Full-Stack Web Developer and Computer Science student at KLE Technological University, specializing in Web Technologies and Software Engineering.',
    openGraph: {
      type: 'website',
      url: env.SITE_URL,
      title: 'Gouri Patil • Student Portfolio',
      description:
        'Explore the work, projects, and assignments of Gouri Patil — Aspiring Full-Stack Web Developer and Computer Science student at KLE Technological University, specializing in Web Technologies and Software Engineering.',
      siteName: 'Gouri Patil',

      images: [
        {
          url: `${env.SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Gouri Patil Portfolio Preview',
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@gourip',
      creator: '@gourip',
      title: 'Gouri Patil • Student Portfolio',
      description:
        'Aspiring Full-Stack Web Developer and Computer Science student building modern web applications with React, Node.js, and Express.js.',
      images: [`${env.SITE_URL}/og-image.png`],
    },
  },
};
