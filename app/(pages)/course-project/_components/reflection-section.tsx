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
              'Gained comprehensive understanding of full-stack web development using MERN stack',
              'Learned to integrate AI/ML capabilities into web applications for real-time detection',
              'Mastered real-time communication systems using WebRTC and Firebase',
              'Developed skills in API design, RESTful architecture, and microservices',
              'Gained experience in mobile-responsive design and cross-platform compatibility',
              'Learned to implement secure authentication and authorization systems',
              'Understood the importance of user experience design in safety-critical applications',
              'Gained knowledge in DevOps practices for deployment and maintenance',
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
                solution: 'Implemented continuous GPS updates with efficient battery management and fallback mechanisms',
              },
              {
                challenge: 'AI Model Integration',
                solution: 'Overcame latency issues by optimizing model inference and implementing edge computing strategies',
              },
              {
                challenge: 'Multi-channel Notification System',
                solution: 'Ensured reliable delivery by implementing retry mechanisms and multiple notification providers',
              },
              {
                challenge: 'Scalability and Performance',
                solution: 'Designed microservices architecture and implemented caching strategies for high-traffic scenarios',
              },
              {
                challenge: 'Security and Privacy',
                solution: 'Implemented end-to-end encryption, secure authentication, and privacy-preserving location sharing',
              },
              {
                challenge: 'Team Coordination',
                solution: 'Established clear communication channels, daily standups, and defined sprint goals for effective collaboration',
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
              'Full-stack MERN development',
              'AI/ML integration in web apps',
              'Real-time communication systems',
              'RESTful API design',
              'Database design and optimization',
              'Cloud deployment and DevOps',
              'UI/UX design for safety apps',
              'Agile/Scrum methodology',
              'Version control with Git',
              'Testing and quality assurance',
              'Security best practices',
              'Project management',
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

