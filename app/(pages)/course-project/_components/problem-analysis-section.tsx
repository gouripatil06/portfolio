'use client';
import { motion } from 'motion/react';

export default function ProblemAnalysisSection() {
  return (
    <motion.section
      id='problem-analysis'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>Problem Analysis & Requirement Specification</h2>

        {/* Functional Requirements */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Functional Requirements</h3>
          <div className='space-y-3'>
            {[
              { title: 'User Registration/Login', desc: 'Secure sign-up and authentication with JWT tokens and cookie-based sessions. Role-based access for users, police, and admin.' },
              { title: 'SOS Trigger Module', desc: 'One-click emergency alert activation with automatic GPS location sharing and real-time status tracking.' },
              { title: 'Location Tracking', desc: 'Real-time GPS tracking with Leaflet map integration for displaying user location and route planning.' },
              { title: 'Alert Notification System', desc: 'WhatsApp Business API integration to send emergency alerts to contacts. Real-time updates via Socket.io.' },
              { title: 'Map Integration', desc: 'Leaflet and OpenStreetMap for displaying user location, safe routes, and safety indicators. Google Maps for navigation.' },
              { title: 'Police Dashboard', desc: 'Comprehensive dashboard for police personnel to monitor alerts, manage reports, and respond to emergencies.' },
              { title: 'Issue Reporting System', desc: 'Community issue reporting with categories, location tagging, status tracking, and feedback mechanism.' },
              { title: 'Community Features', desc: 'Social feed with posts, likes, comments, and search to build a supportive safety community network.' },
              { title: 'Safe Route & Travel Companion', desc: 'Map-based safe route planning and travel companion matching for safer travel experiences.' },
            ].map((req, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <h4 className='text-white font-medium mb-1'>{req.title}</h4>
                <p className='text-light-gray-2 text-sm'>{req.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Functional Requirements */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Non-Functional Requirements</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              { title: 'Security', desc: 'Protect all user data using encryption and secure authentication.' },
              { title: 'Privacy', desc: 'User identity and location remain private and only shared during emergencies.' },
              { title: 'Performance', desc: 'SOS alerts and live tracking must work quickly, with responses in seconds.' },
              { title: 'Reliability', desc: 'System must work consistently without failures and not miss emergency alerts.' },
              { title: 'Availability', desc: 'Accessible 24/7, especially during emergencies, without long downtime.' },
              { title: 'Usability', desc: 'Interface must be easy to use, simple to understand, and quick to operate in panic situations.' },
              { title: 'Scalability', desc: 'Support increasing numbers of users as it expands from city-level to national-level deployment.' },
              { title: 'Interoperability', desc: 'Work smoothly with external services like maps, crime data APIs, transport APIs, and police dashboards.' },
              { title: 'Maintainability', desc: 'Easy to update, fix, improve, and add new features without breaking existing ones.' },
              { title: 'Accuracy', desc: 'AI-based features should give highly accurate predictions.' },
              { title: 'Compatibility', desc: 'Work on various devices, browsers, and network conditions (2G/3G/4G/5G, Wi-Fi).' },
              { title: 'Fault Tolerance', desc: 'If internet or sensors fail, system should still send alerts through SMS or manual SOS fallback.' },
            ].map((req, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <h4 className='text-white font-medium mb-1 text-sm'>{req.title}</h4>
                <p className='text-light-gray-2 text-xs'>{req.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scrum Roles */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Scrum Roles and Team Setup</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-4 overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-border-color'>
                  <th className='text-left py-2 px-4 text-light-gray-4 font-semibold'>Role</th>
                  <th className='text-left py-2 px-4 text-light-gray-4 font-semibold'>Member</th>
                  <th className='text-left py-2 px-4 text-light-gray-4 font-semibold'>Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-border-color'>
                  <td className='py-2 px-4 text-light-gray-2'>Product Owner</td>
                  <td className='py-2 px-4 text-light-gray-2'>Women</td>
                  <td className='py-2 px-4 text-light-gray-2'>Defines backlog, ensures product value</td>
                </tr>
                <tr className='border-b border-border-color'>
                  <td className='py-2 px-4 text-light-gray-2'>Scrum Master</td>
                  <td className='py-2 px-4 text-light-gray-2'>Gouri Patil, Ananya Desai</td>
                  <td className='py-2 px-4 text-light-gray-2'>Organizes sprint meetings, removes blockers</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 text-light-gray-2'>Developers</td>
                  <td className='py-2 px-4 text-light-gray-2'>Gouri Patil, Ananya Desai</td>
                  <td className='py-2 px-4 text-light-gray-2'>Build UI, backend, test & integrate modules</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-light-gray-2 text-sm mt-3'>
            <span className='text-light-gray-4 font-semibold'>Sprint Duration:</span> 1 week per sprint (Total 4 sprints)
          </p>
          <p className='text-light-gray-2 text-sm'>
            <span className='text-light-gray-4 font-semibold'>Meetings:</span> Daily Scrum at end of day to discuss progress and blockers
          </p>
        </div>

        {/* Sprint Setup */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Sprint Development Plan</h3>
          <div className='space-y-4'>
            {[
              { sprint: 'Sprint 1', duration: 'Week 1', focus: 'Requirement Analysis & UI Design', deliverables: ['Software Requirements Specification (SRS)', 'Use Case Diagrams', 'UI Mockups'] },
              { sprint: 'Sprint 2', duration: 'Week 2-3', focus: 'Issue Reporting Module Implementation', deliverables: ['Functional form to report safety issues', 'Photo upload feature', 'GPS tagging'] },
              { sprint: 'Sprint 3', duration: 'Week 4-5', focus: 'Admin Dashboard & Issue Tracking', deliverables: ['Admin dashboard for monitoring reports', 'Status update system for each issue'] },
              { sprint: 'Sprint 4', duration: 'Week 6', focus: 'Testing & Deployment', deliverables: ['End-to-end testing', 'Hosted portal', 'Feedback form for user input'] },
            ].map((sprint, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <div className='flex items-start gap-4 mb-2'>
                  <div className='bg-blue-500/20 text-blue-400 px-3 py-1 rounded-md text-sm font-semibold'>
                    {sprint.sprint}
                  </div>
                  <div>
                    <p className='text-white font-medium'>{sprint.focus}</p>
                    <p className='text-light-gray-2 text-sm'>{sprint.duration}</p>
                  </div>
                </div>
                <div className='mt-3'>
                  <p className='text-light-gray-4 text-sm font-medium mb-2'>Key Deliverables:</p>
                  <ul className='space-y-1'>
                    {sprint.deliverables.map((item, idx) => (
                      <li key={idx} className='text-light-gray-2 text-sm flex items-start gap-2'>
                        <span className='text-blue-400 mt-1'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Stories */}
        <div>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>User Stories</h3>
          <div className='space-y-4'>
            {[
              {
                actor: 'Female User (Primary End User)',
                story: 'As a woman, I want to trigger an SOS alert instantly so that I can receive immediate assistance during an emergency.',
                description: 'The female user can tap the SOS button on the home screen to activate an emergency alert. Once triggered, her real-time GPS location is automatically captured and shared with the backend system. WhatsApp notifications are sent to her emergency contacts with her location and details. The system provides real-time status updates showing alert progress.',
              },
              {
                actor: 'Police Department (Responder)',
                story: 'As police staff, I want to receive live SOS alerts with accurate location tracking so that I can respond quickly and reach the victim in time.',
                description: 'When an SOS alert is triggered, police officers receive alerts on their dedicated dashboard showing victim details, current GPS location, emergency contact information, and alert status. The dashboard displays all active alerts on a map interface, allowing officers to accept, track, and resolve alerts. Real-time updates are provided via Socket.io.',
              },
              {
                actor: 'Community User',
                story: 'As a community member, I want to report safety issues and connect with other users so that we can collectively improve neighborhood safety.',
                description: 'Users can report issues like broken streetlights, harassment hotspots, or unsafe areas with location tagging. They can also share posts, experiences, and safety tips in the community feed. The reporting system allows tracking of issue status and provides feedback mechanisms.',
              },
              {
                actor: 'System Backend / Alert Engine',
                story: 'As the system backend, I want to process alerts, route them to the correct authorities, and store evidence so that the system remains reliable, fast, and secure.',
                description: 'The backend processes incoming SOS alerts using Express.js and MongoDB. It captures GPS location, sends WhatsApp notifications via Facebook Graph API, stores alert data securely, and provides real-time updates via Socket.io. The system handles authentication, authorization, and maintains alert status throughout the emergency lifecycle.',
              },
            ].map((userStory, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-5'>
                <div className='bg-blue-500/10 border-blue-500/30 inline-block px-3 py-1 rounded-md mb-3'>
                  <p className='text-blue-400 text-sm font-semibold'>{userStory.actor}</p>
                </div>
                <h4 className='text-white font-semibold mb-2'>{userStory.story}</h4>
                <p className='text-light-gray-2 text-sm leading-relaxed'>{userStory.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

