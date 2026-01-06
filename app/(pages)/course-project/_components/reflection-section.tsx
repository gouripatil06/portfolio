'use client';
import { motion } from 'motion/react';

export default function ReflectionSection() {
  return (
    <motion.section
      id='reflection'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>Final Reflection</h2>

        {/* Learning Outcomes */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Learning Outcomes</h3>
          <div className='space-y-3'>
            {[
              'Gained comprehensive understanding of full-stack web development using MERN stack (MongoDB, Express, React, Node.js)',
              'Mastered real-time communication systems using Socket.io for live updates',
              'Developed skills in RESTful API design and backend architecture with Express.js',
              'Learned to integrate third-party APIs (WhatsApp Business API, Google Maps, OpenStreetMap)',
              'Gained experience in map integration using Leaflet and React Leaflet',
              'Learned to implement secure authentication and authorization with JWT and cookies',
              'Developed skills in database design and MongoDB schema modeling',
              'Gained experience in responsive UI design with Tailwind CSS and component libraries',
              'Understood the importance of user experience design in safety-critical applications',
              'Learned state management and context API for complex application flows',
              'Gained knowledge in version control, Git workflows, and collaborative development',
            ].map((outcome, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <p className='text-light-gray-2 text-sm'>{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Faced */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Challenges Faced</h3>
          <div className='space-y-3'>
            {[
              {
                challenge: 'Real-time Location Tracking',
                solution: 'Implemented GPS location tracking with Leaflet maps, handling browser geolocation API, and providing fallback mechanisms for location access issues',
              },
              {
                challenge: 'WhatsApp API Integration',
                solution: 'Integrated WhatsApp Business API (Facebook Graph API) for sending emergency alerts, handling API authentication, message formatting, and error handling',
              },
              {
                challenge: 'Real-time Updates with Socket.io',
                solution: 'Implemented Socket.io for real-time alert status updates between frontend and backend, ensuring police dashboard receives live updates when alerts are created or resolved',
              },
              {
                challenge: 'Map Integration and Routing',
                solution: 'Integrated multiple map services (Leaflet/OpenStreetMap for display, Google Maps for directions), handling map initialization, markers, and route planning',
              },
              {
                challenge: 'Authentication and Authorization',
                solution: 'Implemented JWT-based authentication with HTTP-only cookies, role-based access control (user, police, admin), and secure session management',
              },
              {
                challenge: 'State Management and Context',
                solution: 'Managed complex application state using React Context API for authentication and SOS alerts, ensuring consistent state across components',
              },
              {
                challenge: 'Team Coordination',
                solution: 'Established clear communication channels, daily standups, and defined sprint goals for effective collaboration using Scrum methodology',
              },
            ].map((item, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <h4 className='text-white font-medium mb-2'>{item.challenge}</h4>
                <p className='text-light-gray-2 text-sm'>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Gained */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Skills Gained</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              'Full-stack MERN development (MongoDB, Express, React, Node.js)',
              'Real-time communication with Socket.io',
              'RESTful API design and development',
              'Third-party API integration (WhatsApp, Maps)',
              'Map integration with Leaflet and React Leaflet',
              'Database design and MongoDB schema modeling',
              'JWT authentication and authorization',
              'React Context API and state management',
              'TypeScript for type-safe development',
              'Tailwind CSS and component-based UI design',
              'Responsive web design',
              'Agile/Scrum methodology',
              'Version control with Git',
              'Testing and quality assurance',
              'Security best practices',
              'Project management and collaboration',
            ].map((skill, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-3'>
                <p className='text-light-gray-2 text-sm'>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Collaboration */}
        <div>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Team Collaboration Experience</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-5'>
            <p className='text-light-gray-2 text-sm leading-relaxed mb-4'>
              Working on Saheli 2.0 provided an excellent opportunity to collaborate effectively as a team. We implemented Scrum methodology with:
            </p>
            <ul className='space-y-2 mb-4'>
              {[
                'Daily standup meetings to track progress and identify blockers',
                'Sprint planning sessions to prioritize features and set goals',
                'Code reviews and pair programming for knowledge sharing',
                'Regular retrospectives to improve our development process',
                'Clear division of responsibilities while maintaining flexibility',
                'Effective use of project management tools (Trello, GitHub)',
              ].map((item, index) => (
                <li key={index} className='flex items-start gap-3 text-light-gray-2 text-sm'>
                  <span className='text-blue-400 mt-1'>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className='text-light-gray-2 text-sm leading-relaxed'>
              This collaborative approach ensured timely delivery of features, high code quality, and a cohesive final product. The experience taught us the importance of communication, adaptability, and shared ownership in software development projects.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

