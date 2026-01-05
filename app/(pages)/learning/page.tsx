'use client';
import { stackIcon, stackIconLight } from '@/app/assets/assets';
import SectionHeading from '@/components/SectionHeading';
import { assignmentsData } from '../assignments/_components/assignment-card';

import TechnologySection from './_components/technology-section';

export default function LearningPage() {
  const getAssignmentsByTech = (techName: string) => {
    if (!assignmentsData || !Array.isArray(assignmentsData)) {
      return [];
    }
    return assignmentsData
      .filter((assignment) => {
        // Match exact or partial technology names (e.g., 'Express' matches 'Express.js')
        return assignment.technologies.some((tech) => 
          tech === techName || tech.includes(techName) || techName.includes(tech)
        );
      })
      .map(({ id, title, deployedUrl, githubUrl }) => ({ id, title, deployedUrl, githubUrl }));
  };
  return (
    <>
      <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
        <div className='flex w-full max-w-full flex-col items-center gap-[60px] p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
          {/* Learning Section Heading */}
          <SectionHeading
            darkImage={stackIcon}
            lightImage={stackIconLight}
            title='My Learning Journey'
            description='A comprehensive overview of technologies and concepts I have learned through hands-on projects and assignments during my Web Technologies and Software Engineering course.'
          />

          {/* Technology Sections */}
          <div className='flex w-full flex-col gap-8'>
            {/* HTML */}
            <TechnologySection
              title='HTML (HyperText Markup Language)'
              description='The foundation of web development - structuring content for the web.'
              overview='HTML is the standard markup language for creating web pages. Through my assignments, I learned to structure content semantically, use proper HTML5 elements, create forms, and build accessible web pages. I gained hands-on experience with semantic HTML, form validation, and understanding the Document Object Model (DOM).'
              keyConcepts={[
                'Semantic HTML5',
                'Forms & Input Types',
                'Accessibility (ARIA)',
                'Document Structure',
                'HTML5 APIs',
                'Meta Tags & SEO',
              ]}
              assignments={getAssignmentsByTech('HTML')}
              techName='html5'
            />

            {/* CSS */}
            <TechnologySection
              title='CSS (Cascading Style Sheets)'
              description='Styling and designing beautiful, responsive web interfaces.'
              overview='CSS enables me to transform plain HTML into visually appealing and responsive designs. I learned advanced CSS techniques including Flexbox, Grid layouts, animations, transitions, and responsive design principles. I also worked with CSS frameworks like Bootstrap and Tailwind CSS to build modern, professional interfaces.'
              keyConcepts={[
                'Flexbox & Grid',
                'Responsive Design',
                'CSS Animations',
                'CSS Variables',
                'Media Queries',
                'Bootstrap & Tailwind',
                'Custom Properties',
              ]}
              assignments={getAssignmentsByTech('CSS')}
              techName='css3'
            />

            {/* JavaScript */}
            <TechnologySection
              title='JavaScript'
              description='The programming language that brings interactivity to web pages.'
              overview='JavaScript is the core of dynamic web applications. I learned fundamental JavaScript concepts including DOM manipulation, event handling, asynchronous programming, local storage, and ES6+ features. Through practical projects, I gained experience in building interactive user interfaces, managing application state, and working with browser APIs.'
              keyConcepts={[
                'DOM Manipulation',
                'Event Handling',
                'Async/Await & Promises',
                'Local Storage API',
                'ES6+ Features',
                'Functions & Closures',
                'Array Methods',
                'Object-Oriented JS',
              ]}
              assignments={getAssignmentsByTech('JavaScript')}
              techName='javascript'
              customIcon={true}
              iconPath='/images/icons/js.png'
            />

            {/* Node.js */}
            <TechnologySection
              title='Node.js'
              description='JavaScript runtime for building server-side applications.'
              overview='Node.js allows me to use JavaScript on the server side. I learned to build RESTful APIs, handle HTTP requests and responses, work with the file system, and understand the Node.js event loop. Through backend development, I gained experience in creating scalable server applications and understanding server-side JavaScript architecture.'
              keyConcepts={[
                'Server-Side JavaScript',
                'NPM & Package Management',
                'File System Operations',
                'Event Loop',
                'Modules & Require',
                'Environment Variables',
                'Error Handling',
              ]}
              assignments={getAssignmentsByTech('Node.js')}
              techName='nodejs'
            />

            {/* Express.js */}
            <TechnologySection
              title='Express.js'
              description='Fast, unopinionated web framework for Node.js.'
              overview='Express.js is the most popular web framework for Node.js. I learned to create RESTful APIs, implement middleware, handle routing, manage request/response cycles, and integrate with databases. I gained practical experience in building scalable backend architectures, implementing authentication, and creating well-structured API endpoints.'
              keyConcepts={[
                'RESTful Routing',
                'Middleware',
                'Request/Response Handling',
                'Error Middleware',
                'Route Parameters',
                'Body Parsing',
                'CORS Configuration',
                'Rate Limiting',
              ]}
              assignments={getAssignmentsByTech('Express')}
              techName='express'
              customIcon={true}
              iconPath='/images/icons/express.png'
            />

            {/* MongoDB */}
            <TechnologySection
              title='MongoDB'
              description='NoSQL database for modern applications.'
              overview='MongoDB is a document-based database that I learned to use for storing and managing application data. Through Mongoose ODM, I learned to design schemas, perform CRUD operations, implement relationships, and handle database queries. I gained experience in data modeling, indexing, and understanding NoSQL database concepts.'
              keyConcepts={[
                'Document Database',
                'Mongoose ODM',
                'Schema Design',
                'CRUD Operations',
                'Data Modeling',
                'Indexing',
                'Relationships',
                'Aggregation',
              ]}
              assignments={getAssignmentsByTech('MongoDB')}
              techName='mongodb'
            />

            {/* React.js */}
            <TechnologySection
              title='React.js'
              description='JavaScript library for building user interfaces.'
              overview='React revolutionized how I think about building user interfaces. I learned component-based architecture, state management, hooks, props, and the React lifecycle. Through projects, I gained experience in building single-page applications, managing complex state, handling user interactions, and creating reusable components. I also worked with React Router for navigation and React Query for data fetching.'
              keyConcepts={[
                'Component Architecture',
                'React Hooks',
                'State Management',
                'Props & Props Drilling',
                'Event Handling',
                'Conditional Rendering',
                'React Router',
                'React Query',
                'Context API',
              ]}
              assignments={getAssignmentsByTech('React')}
              techName='react'
            />
          </div>
        </div>
      </div>
    </>
  );
}

