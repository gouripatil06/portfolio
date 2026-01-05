'use client';
import { motion } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import React from 'react';

import { project_1, project_2, project_3, project_4 } from '@/app/assets/assets';

export interface AssignmentType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges: string;
  reflection: string;
  deployedUrl?: string;
  githubUrl?: string;
  image: string | StaticImageData;
  evaluation: string;
}

interface AssignmentCardProps {
  assignment: AssignmentType;
  onClick: () => void;
  index: number;
}

export default function AssignmentCard({ assignment, onClick, index }: AssignmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='relative h-auto w-full flex-none cursor-pointer'
      onClick={onClick}
    >
      <div className='bg-very-dark-gray border-dark-gray-3 group hover:bg-almost-black relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-5 overflow-visible rounded-xl border p-4 transition-all duration-500 sm:p-6'>
        {/* Image */}
        <div className='relative h-[180px] w-full overflow-hidden rounded-xl'>
          <figure className='relative inset-0 h-full w-full'>
            <Image
              src={assignment.image}
              alt={assignment.title}
              width={400}
              height={180}
              className='block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
            />
          </figure>
        </div>

        {/* Content */}
        <div className='relative flex h-min w-full flex-1 flex-col flex-nowrap items-start justify-start gap-3 overflow-visible p-0'>
          {/* Title */}
          <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
            <h3 className='text-light-gray-4 text-[20px] font-bold sm:text-[22px]'>{assignment.title}</h3>
          </div>

          {/* Description */}
          <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
            <p className='text-light-gray-2 text-[15px] leading-relaxed font-medium'>
              {assignment.description}
            </p>
          </div>

          {/* Technologies */}
          <div className='relative flex h-min w-full flex-none flex-wrap items-start justify-start gap-2 overflow-visible p-0'>
            {assignment.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className='bg-dark-gray-4 border-dark-gray-3 text-light-gray-4 inline-flex h-auto w-auto flex-none items-center justify-center rounded-md border px-2.5 py-1 text-[12px] font-medium sm:text-[13px]'
              >
                {tech}
              </span>
            ))}
            {assignment.technologies.length > 4 && (
              <span className='bg-dark-gray-4 border-dark-gray-3 text-light-gray-2 inline-flex h-auto w-auto flex-none items-center justify-center rounded-md border px-2.5 py-1 text-[12px] font-medium sm:text-[13px]'>
                +{assignment.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Evaluation Badge */}
          <div className='relative flex h-auto w-full flex-none flex-nowrap items-center justify-start gap-2 overflow-visible p-0'>
            <div className='bg-dark-gray-4 border-border-color relative flex h-min w-min flex-none flex-nowrap items-center justify-start gap-2.5 overflow-visible rounded-md border px-2.5 py-1'>
              <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
                <p className='text-light-gray-2 text-[12px] font-medium sm:text-[13px]'>
                  {assignment.evaluation}
                </p>
              </div>
            </div>
            {assignment.deployedUrl && (
              <div className='bg-green-500/10 border-green-500/20 relative flex h-min w-min flex-none flex-nowrap items-center justify-start gap-2.5 overflow-visible rounded-md border px-2.5 py-1'>
                <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
                  <p className='text-green-400 text-[12px] font-medium sm:text-[13px]'>Deployed</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Assignment Data
export const assignmentsData: AssignmentType[] = [
  {
    id: 1,
    title: 'Personal Blog Website',
    description: 'A responsive website to publish blogs with modern design and smooth animations.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    features: ['Grid-based layout', 'Hover effects and animations', 'Responsive design', 'Blog post cards', 'Contact form'],
    challenges: 'Responsive design issues solved using media queries',
    reflection: 'Improved understanding of layouts and styling, learned to create responsive designs that work across all devices.',
    deployedUrl: 'blog.gouri.fun',
    image: project_1,
    evaluation: 'Assignment 1',
  },
  {
    id: 2,
    title: 'To-Do List Application',
    description: 'Manage daily tasks dynamically with local storage persistence and filtering options.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Add, edit, delete tasks', 'Mark tasks as complete', 'Filter tasks (All, Active, Completed)', 'Local Storage persistence', 'Custom dialog boxes'],
    challenges: 'DOM manipulation & local storage handling',
    reflection: 'Learned event handling and state persistence. Gained deeper understanding of JavaScript DOM manipulation and browser storage APIs.',
    deployedUrl: 'todo.gouri.fun',
    image: project_2,
    evaluation: 'Evaluation 1',
  },
  {
    id: 3,
    title: 'Blog / Notes REST API',
    description: 'Backend API for CRUD operations with RESTful routes and middleware validation.',
    technologies: ['Node.js', 'Express.js'],
    features: ['RESTful routes', 'Middleware for validation', 'CRUD operations', 'Notes and Blogs endpoints', 'Error handling'],
    challenges: 'API routing and middleware logic',
    reflection: 'Understood backend architecture and REST principles. Learned how to structure APIs and implement proper validation.',
    deployedUrl: 'https://blog-notes-api.onrender.com',
    githubUrl: 'https://github.com/yourusername/assignment-3',
    image: project_3,
    evaluation: 'Evaluation 2',
  },
  {
    id: 4,
    title: 'Movie Search App',
    description: 'SPA using third-party APIs with React Hooks and dynamic rendering.',
    technologies: ['React', 'CSS', 'API'],
    features: ['React Hooks', 'Dynamic rendering', 'Movie search functionality', 'Movie details view', 'Responsive design', 'API integration'],
    challenges: 'State & async handling',
    reflection: 'Improved component-based thinking and learned to manage complex state in React applications. Gained experience with async operations and API calls.',
    deployedUrl: 'movies.gouri.fun',
    image: project_1,
    evaluation: 'Evaluation 3',
  },
  {
    id: 5,
    title: 'Restaurant Inventory Management System',
    description: 'Full-stack MERN application for managing restaurant inventory with authentication, role-based access control, and real-time tracking.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'JWT', 'Mongoose'],
    features: [
      'JWT Authentication & Authorization',
      'Role-based access (Admin, Manager, Staff)',
      'Inventory CRUD operations',
      'Real-time stock tracking',
      'Low stock alerts',
      'Statistics dashboard',
      'Inventory history tracking',
      'Search and filter functionality',
      'Dark theme UI matching portfolio design',
    ],
    challenges: 'Frontend-backend integration, authentication flow, state management across components, and ensuring consistent UI/UX with portfolio design.',
    reflection: 'Comprehensive full-stack experience building a production-ready application. Learned to integrate frontend and backend seamlessly, implement secure authentication with JWT, manage complex state with React Query, and deploy both frontend and backend services. Gained experience with MongoDB schema design, RESTful API architecture, and responsive UI development.',
    deployedUrl: 'inventory.gouri.fun',
    githubUrl: 'https://github.com/gouripatil06/restaurant-inventory-api',
    image: project_4,
    evaluation: 'Assignment 5',
  },
];

