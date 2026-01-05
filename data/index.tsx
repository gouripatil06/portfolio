import { 
  Github, 
  Instagram, 
  Mail, 
  User, 
  Home,
  BookOpen,
  FileText,
  Code,
  FolderKanban,
  Briefcase,
  GraduationCap
} from 'lucide-react';

import {
  asanaIcon,
  athonLogo,
  athonLogoLight,
  client_1,
  client_2,
  client_3,
  client_4,
  discord,
  dribble,
  dribbleIcon,
  dribbleLight,
  facebook,
  figmaIcon,
  framerIcon,
  graphicDesignIcon,
  graphicDesignIconLight,
  instagramIcon,
  instagramIconLight,
  linkedInIcon,
  linkedInIconLight,
  notionIcon,
  pinterest,
  pixelworksLogo,
  pixelworksLogoLight,
  project_1,
  project_2,
  project_3,
  project_4,
  seoOptIcon,
  seoOptIconLight,
  slackIcon,
  snapchat,
  spotify,
  stackIcon,
  stackIconLight,
  vortexLogo,
  vortexLogoLight,
  webDesignIcon,
  webDesignIconLight,
  webDevIcon,
  webDevIconLight,
  webflowIcon,
  XLogo,
  XLogoLight,
  youtube,
} from '@/app/assets/assets';
import type {
  counterListsType,
  FAQ,
  FollowerData,
  myExperienceTypes,
  myServicesPlansTypes,
  myServicesTypes,
  myShowCasesTypes,
  myStackTypes,
  socialBrandsTypes,
  testimonialsTypes,
} from '@/types';
import type { socialListsTypes } from '@/types';
import type { pagesListsType } from '@/types';

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    icon: <Home />,
  },
  {
    id: 2,
    title: 'About Me',
    href: '/about-me',
    icon: <User />,
  },
  {
    id: 3,
    title: 'Learning',
    href: '/learning',
    icon: <BookOpen />,
  },
  {
    id: 4,
    title: 'Assignments',
    href: '/assignments',
    icon: <FileText />,
  },
  {
    id: 5,
    title: 'Skills',
    href: '/skills',
    icon: <Code />,
  },
  {
    id: 6,
    title: 'Course Project',
    href: '/course-project',
    icon: <GraduationCap />,
  },
  {
    id: 7,
    title: 'Contact',
    href: '/contact',
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Instagram',
    icon: <Instagram size={22} />,
    link: 'https://www.instagram.com/',
  },
  {
    id: 2,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://github.com/gouripatil06',
  },
  {
    id: 3,
    title: 'Twitter',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        width='22'
        height='22'
      >
        <path d='M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z'></path>
      </svg>
    ),
    link: 'https://www.x.com',
  },
];

// Tech Stack Icons for Marquee
export const techStackBrands = [
  { id: 1, name: 'react', customIcon: false },
  { id: 2, name: 'nextjs', customIcon: false },
  { id: 3, name: 'typescript', customIcon: false },
  { id: 4, name: 'javascript', customIcon: true, iconPath: '/images/icons/js.png' },
  { id: 5, name: 'html5', customIcon: false },
  { id: 6, name: 'css3', customIcon: false },
  { id: 7, name: 'nodejs', customIcon: false },
  { id: 8, name: 'mongodb', customIcon: false },
  { id: 9, name: 'express', customIcon: true, iconPath: '/images/icons/express.png' },
  { id: 10, name: 'tailwindcss', customIcon: false },
  { id: 11, name: 'git', customIcon: false },
  { id: 12, name: 'github', customIcon: false },
  { id: 13, name: 'npm', customIcon: false },
  { id: 14, name: 'vscode', customIcon: false },
  { id: 15, name: 'bootstrap', customIcon: true, iconPath: '/images/icons/bootstrap.png' },
  { id: 16, name: 'redux', customIcon: false },
];

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    icon: linkedInIcon,
    lightIcon: linkedInIconLight,
  },
  {
    id: 2,
    name: 'Instagram',
    link: 'https://instagram.com',
    icon: instagramIcon,
    lightIcon: instagramIconLight,
  },
  {
    id: 3,
    name: 'Twitter',
    link: 'https://twitter.com',
    icon: XLogo,
    lightIcon: XLogoLight,
  },
  {
    id: 4,
    name: 'YouTube',
    link: 'https://youtube.com',
    icon: youtube,
    lightIcon: youtube,
  },
  {
    id: 5,
    name: 'Figma',
    link: 'https://figma.com',
    icon: figmaIcon,
    lightIcon: figmaIcon,
  },
  {
    id: 6,
    name: 'Notion',
    link: 'https://notion.so',
    icon: notionIcon,
    lightIcon: notionIcon,
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: 'Assignments Completed',
    value: 5,
  },
  {
    id: 2,
    title: 'Projects Built',
    value: 8,
  },
  {
    id: 3,
    title: 'Technologies Learned',
    value: 12,
  },
  {
    id: 4,
    title: 'Semester',
    value: 5,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: '2023 - Present',
    title: 'B.E. Computer Science & Engineering',
    company: 'KLE Technological University',
    label: '5th Semester',
    description:
      'Pursuing Bachelor of Engineering in Computer Science with focus on Web Technologies and Software Engineering. Actively learning and building projects in HTML, CSS, JavaScript, React, Node.js, and Express.js.',
    link: 'kletech.ac.in',
    logo: stackIcon,
    logoLight: stackIconLight,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: 'React',
    description: 'JavaScript Library for Building UIs',
    techName: 'react',
    link: 'https://react.dev',
  },
  {
    id: 2,
    title: 'Next.js',
    description: 'React Framework for Production',
    techName: 'nextjs',
    link: 'https://nextjs.org',
  },
  {
    id: 3,
    title: 'TypeScript',
    description: 'Typed Superset of JavaScript',
    techName: 'typescript',
    link: 'https://www.typescriptlang.org',
  },
  {
    id: 4,
    title: 'JavaScript',
    description: 'Programming Language for Web',
    techName: 'javascript',
    customIcon: true,
    iconPath: '/images/icons/js.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 5,
    title: 'Node.js',
    description: 'JavaScript Runtime Environment',
    techName: 'nodejs',
    link: 'https://nodejs.org',
  },
  {
    id: 6,
    title: 'Express.js',
    description: 'Web Framework for Node.js',
    techName: 'express',
    customIcon: true,
    iconPath: '/images/icons/express.png',
    link: 'https://expressjs.com',
  },
  {
    id: 7,
    title: 'MongoDB',
    description: 'NoSQL Database',
    techName: 'mongodb',
    link: 'https://www.mongodb.com',
  },
  {
    id: 8,
    title: 'Tailwind CSS',
    description: 'Utility-First CSS Framework',
    techName: 'tailwindcss',
    link: 'https://tailwindcss.com',
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    icon: webDesignIcon,
    lightIcon: webDesignIconLight,
    link: '/services',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    icon: webDevIcon,
    lightIcon: webDevIconLight,
    link: '/services',
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    icon: graphicDesignIcon,
    lightIcon: graphicDesignIconLight,
    link: '/services',
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    icon: seoOptIcon,
    lightIcon: seoOptIconLight,
    link: '/services',
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Movie Search App',
    description: 'A React application for browsing and searching movies using The Movie Database API. Features dynamic rendering, search functionality, and responsive design.',
    link: 'movies.gouri.fun',
    type: 'React App',
    theme: 'Dark',
    pages: 5,
    image: project_1,
  },
  {
    id: 2,
    title: 'To-Do List Application',
    description: 'A task management application built with vanilla JavaScript. Features add, edit, delete tasks, local storage persistence, and filter functionality.',
    link: 'todo.gouri.fun',
    type: 'Web App',
    theme: 'Dark',
    pages: 1,
    image: project_2,
  },
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    description:
      'I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...',
    location: 'New York City, USA.',
    avatar: client_1,
  },
  {
    id: 2,
    name: 'John Anderson',
    description:
      'Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.',
    location: 'Sydney, Australia.',
    avatar: client_2,
  },
  {
    id: 3,
    name: 'Mark Davis',
    description:
      'Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.',
    location: 'London, UK.',
    avatar: client_3,
  },
  {
    id: 4,
    name: 'Laura Adams',
    description:
      'Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.',
    location: 'Madrid, Spain.',
    avatar: client_4,
  },
];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'Web Design',
    price: '$50',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    completedWorks: '25+',
    experience: '5+',
    totalHoursWorked: '500 hours',
    icon: webDesignIcon,
    lightIcon: webDesignIconLight,
  },
  {
    id: 2,
    service: 'Web Dev',
    price: '$60',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    completedWorks: '30+',
    experience: '6+',
    totalHoursWorked: '420 hours',
    icon: webDevIcon,
    lightIcon: webDevIconLight,
  },
  {
    id: 3,
    service: 'Graphic Design',
    price: '$40',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    completedWorks: '40+',
    experience: '8+',
    totalHoursWorked: '328 hours',
    icon: graphicDesignIcon,
    lightIcon: graphicDesignIconLight,
  },
  {
    id: 4,
    service: 'SEO',
    price: '$70',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    completedWorks: '20+',
    experience: '4+',
    totalHoursWorked: '223 hours',
    icon: seoOptIcon,
    lightIcon: seoOptIconLight,
  },
];

export const faqData: FAQ[] = [
  {
    question: 'What technologies do you primarily work with?',
    answer:
      'I work with modern web technologies including HTML, CSS, JavaScript, React, Next.js, Node.js, and Express.js. I also have experience with databases like MongoDB and MySQL. I continuously learn new technologies and stay updated with the latest web development trends.',
  },
  {
    question: 'Are you available for collaboration or project work?',
    answer:
      'Yes, I am open to collaboration opportunities and project work, especially during my semester breaks and free time. As a 5th semester Computer Science student, I am eager to apply my skills in real-world projects and learn from experienced developers.',
  },
  {
    question: 'Can I view your assignment projects?',
    answer:
      'Absolutely! All my assignments are deployed and accessible. You can visit the Assignments page to view all projects with their deployed URLs. Each project includes detailed information about technologies used, features, challenges, and my learning reflections.',
  },
  {
    question: 'How can I contact you for academic collaboration?',
    answer:
      'You can reach me via email at 01fe23bcs022@kletech.ac.in. I am particularly interested in web development projects, open-source contributions, and learning opportunities. Feel free to connect with me on GitHub or LinkedIn as well.',
  },
  {
    question: 'What kind of projects have you worked on?',
    answer:
      'I have completed several assignments including a Personal Blog Website, To-Do List Application, RESTful API with Node.js and Express, and a Movie Search App with React. Each project has helped me learn different aspects of web development, from frontend design to backend architecture.',
  },
  {
    question: 'Do you have experience with version control?',
    answer:
      'Yes, I regularly use Git and GitHub for version control in all my projects. I understand the importance of proper commit messages, branching strategies, and collaborative development workflows.',
  },
  {
    question: 'What are your learning goals?',
    answer:
      'As an aspiring Full-Stack Web Developer, I am continuously learning and building projects. My current focus is on mastering React and Node.js ecosystems, understanding software engineering principles, and gaining hands-on experience with full-stack development.',
  },
  {
    question: 'Can I contribute to your projects?',
    answer:
      'I welcome feedback and contributions! If you find any issues or have suggestions for improvement in any of my projects, please feel free to reach out. I am always open to learning from the developer community.',
  },
];

export const followerData: FollowerData[] = [
  {
    platform: 'twitter',
    followers: '12.6K',
    url: 'https://twitter.com/',
    icon: XLogo,
    lightIcon: XLogoLight,
  },
  {
    platform: 'Instagram',
    followers: '8.3K',
    url: 'https://www.instagram.com/',
    icon: instagramIcon,
    lightIcon: instagramIconLight,
  },
  {
    platform: 'LinkedIn',
    followers: '2.5K',
    url: 'https://www.linkedin.com/',
    icon: linkedInIcon,
    lightIcon: linkedInIconLight,
  },
  {
    platform: 'Dribbble',
    followers: '3.2K',
    url: 'https://dribbble.com/',
    icon: dribbleIcon,
    lightIcon: dribbleLight,
  },
];
