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

        {/* Module-wise Description */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Module-wise Description</h3>
          <div className='space-y-4'>
            {[
              {
                module: 'User Authentication Module',
                description: 'Secure registration and login system with JWT-based authentication. Handles user profile management and session management.',
              },
              {
                module: 'SOS Alert Module',
                description: 'Core emergency alert system with one-click activation, automatic location sharing, and multi-channel notification system (SMS, Email, Push).',
              },
              {
                module: 'Location Tracking Module',
                description: 'Real-time GPS tracking with map integration. Provides continuous location updates during emergencies and supports geofencing for safe zones.',
              },
              {
                module: 'AI Distress Detection Module',
                description: 'Voice and movement recognition using TensorFlow/PyTorch. Detects distress signals through audio analysis and motion sensors.',
              },
              {
                module: 'Notification System',
                description: 'Multi-channel notification system using Firebase Cloud Messaging (FCM), Twilio SMS gateway, and email services for instant alerts.',
              },
              {
                module: 'Admin Dashboard',
                description: 'Comprehensive dashboard for police and NGO personnel to monitor, manage, and respond to active alerts with real-time updates.',
              },
              {
                module: 'Map Integration Module',
                description: 'Google Maps API integration for displaying user location, nearby police stations, safe zones, and generating safety index heatmaps.',
              },
              {
                module: 'Feedback & Reporting Module',
                description: 'Post-incident feedback system allowing users to report false alerts, provide incident details, and rate response effectiveness.',
              },
            ].map((mod, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <h4 className='text-white font-semibold mb-2'>{mod.module}</h4>
                <p className='text-light-gray-2 text-sm leading-relaxed'>{mod.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section - Placeholder */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Application Screenshots</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-6 text-center'>
            <p className='text-light-gray-2 text-sm'>
              Screenshots of different pages and functionalities will be added here.
            </p>
            <p className='text-light-gray-2 text-xs mt-2'>
              This section will include UI screenshots of login, SOS trigger, dashboard, map view, and admin panels.
            </p>
          </div>
        </div>

        {/* Demo Recording */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Integrated System Demo</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-6 text-center'>
            <p className='text-light-gray-2 text-sm mb-4'>
              Screen recording of the complete project demonstration showing all functionalities working together.
            </p>
            <div className='bg-darkest-gray rounded-lg p-8 border border-border-color'>
              <p className='text-light-gray-2 text-sm'>Demo video will be embedded here</p>
            </div>
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

