'use client';
import { motion } from 'motion/react';

export default function ProjectDetailsSection() {
  return (
    <motion.section
      id='project-details'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>Course Project Details</h2>

        {/* Project Title */}
        <div className='mb-8'>
          <h3 className='text-white text-xl font-semibold mb-2'>Saheli 2.0: Predict. Prevent. Protect.</h3>
          <p className='text-light-gray-2 leading-relaxed'>
            An AI and community-powered women safety web platform that predicts, prevents, and responds to emergencies in real-time.
          </p>
        </div>

        {/* Problem Statement */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Problem Statement</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
            <p className='text-light-gray-2 leading-relaxed'>
              Most safety apps react after danger strikes — when it's already too late. Saheli 2.0 redefines protection with AI and community intelligence that predicts, prevents, and responds in real time. It detects distress through voice or movement, auto-triggers SOS alerts, and connects women, guardians, and police in one smart ecosystem. Because safety shouldn't wait for danger — it should stay one step ahead.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Objectives</h3>
          <ul className='space-y-2'>
            {[
              'Enable women to trigger SOS alerts instantly',
              'Provide real-time location tracking using GPS',
              'Notify guardians, police, and NGOs immediately',
              'Support live tracking on a map interface',
              'Ensure user data privacy and secure communication',
              'Provide a simple and user-friendly interface',
              'Reduce response time during emergencies',
            ].map((objective, index) => (
              <li key={index} className='flex items-start gap-3 text-light-gray-2'>
                <span className='text-blue-400 mt-1'>•</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Motivation */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Motivation</h3>
          <p className='text-light-gray-2 leading-relaxed'>
            Women often face safety risks in isolated or unfamiliar areas, and existing systems fail to provide immediate real-time help. Saheli 2.0 addresses this critical need by delivering instant SOS alerts to police, NGOs, and trusted contacts with live location tracking, ensuring faster response times and better protection.
          </p>
        </div>

        {/* Target Users */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Target Users</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              { title: 'Female Users', desc: 'Primary end users who need safety protection' },
              { title: 'Police Department', desc: 'Responders who receive and act on SOS alerts' },
              { title: 'NGOs', desc: 'Support organizations providing post-incident assistance' },
            ].map((user, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <h4 className='text-white font-semibold mb-2'>{user.title}</h4>
                <p className='text-light-gray-2 text-sm'>{user.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Technologies Used</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h4 className='text-white font-medium mb-2'>Frontend</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• HTML, CSS, JavaScript</li>
                <li>• React / Flutter</li>
                <li>• Bootstrap / Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>Backend</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• Node.js / Python (Flask/Django)</li>
                <li>• Firebase / MongoDB</li>
                <li>• Express.js</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>AI & Analytics</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• TensorFlow / PyTorch</li>
                <li>• OpenCV</li>
                <li>• Google Maps API</li>
                <li>• Crime Data APIs</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>Communication</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• Firebase Cloud Messaging (FCM)</li>
                <li>• Twilio / SMS Gateway</li>
                <li>• WebRTC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

