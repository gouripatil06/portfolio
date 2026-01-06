'use client';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ImplementationSection() {
  return (
    <motion.section
      id='implementation'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>Implementation</h2>

        {/* Demo Recording */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Integrated System Demo</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-6'>
            <p className='text-light-gray-2 text-sm mb-4'>
              Screen recording of the complete project demonstration showing all functionalities working together.
            </p>
            <div className='relative w-full aspect-video rounded-lg overflow-hidden bg-darkest-gray border border-border-color'>
              <iframe
                src='https://www.youtube.com/embed/sdnhUIcpiso?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1'
                title='Saheli 2.0 - Complete System Demo'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                className='absolute top-0 left-0 w-full h-full'
              />
            </div>
            <p className='text-light-gray-2 text-xs mt-3 text-center'>
              Watch the complete demonstration of Saheli 2.0 features including SOS alerts, real-time tracking, police dashboard, and community features.
            </p>
          </div>
        </div>

        {/* Module-wise Description */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Module-wise Description</h3>
          <div className='space-y-4'>
            {[
              {
                module: 'User Authentication Module',
                description: 'Secure registration and login system with JWT-based authentication and cookie-based sessions. Handles user profile management, emergency contacts, and role-based access control (user, police, admin).',
              },
              {
                module: 'SOS Alert Module',
                description: 'Core emergency alert system with one-click activation, automatic GPS location sharing, real-time status tracking, and WhatsApp notifications to emergency contacts.',
              },
              {
                module: 'Location Tracking Module',
                description: 'Real-time GPS tracking with Leaflet map integration. Provides continuous location updates during emergencies, route planning, and displays user location on interactive maps.',
              },
              {
                module: 'Notification System',
                description: 'WhatsApp Business API integration for sending emergency alerts to contacts. Real-time updates via Socket.io for live alert status changes and police dashboard notifications.',
              },
              {
                module: 'Police Dashboard',
                description: 'Comprehensive dashboard for police personnel to monitor active SOS alerts, manage reports, track officer assignments, and respond to emergencies with real-time updates.',
              },
              {
                module: 'Map Integration Module',
                description: 'Leaflet and OpenStreetMap integration for displaying user location, route planning, and safety indicators. Google Maps API used for turn-by-turn directions and navigation.',
              },
              {
                module: 'Issue Reporting Module',
                description: 'Community issue reporting system with categories (streetlight, harassment, unsafe areas), status tracking (Pending, Investigating, Resolved), location tagging, and feedback system with ratings.',
              },
              {
                module: 'Community Features',
                description: 'Social community feed with posts, likes, comments, and search functionality. Enables users to share safety tips, experiences, and build a supportive community network.',
              },
              {
                module: 'Safe Route & Travel Companion',
                description: 'Map-based safe route planning with safety indicators and travel companion matching system to find nearby users for safer travel experiences.',
              },
            ].map((mod, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <h4 className='text-white font-semibold mb-2'>{mod.module}</h4>
                <p className='text-light-gray-2 text-sm leading-relaxed'>{mod.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Project Repository</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
            <div className='flex items-center gap-4'>
              <Github className='text-light-gray-2' size={24} />
              <div className='flex-1'>
                <p className='text-light-gray-2 text-sm mb-2'>
                  GitHub repository containing the complete source code for Saheli 2.0
                </p>
                <Link
                  href='https://github.com/gouripatil06/saheli-2.0'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium'
                >
                  <ExternalLink size={16} />
                  View Repository on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

