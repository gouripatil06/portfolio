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
            A community-powered women safety web platform that enables instant SOS alerts, real-time location tracking, and connects women with police and emergency contacts for faster response during emergencies.
          </p>
        </div>

        {/* Problem Statement */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Problem Statement</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
            <p className='text-light-gray-2 leading-relaxed'>
              Most safety apps react after danger strikes — when it's already too late. Saheli 2.0 redefines protection with instant SOS alerts and community intelligence that responds in real time. Users can trigger emergency alerts with one click, automatically sharing their GPS location with police and emergency contacts via WhatsApp. The platform connects women, guardians, and police in one smart ecosystem, ensuring faster response times and better protection.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Objectives</h3>
          <ul className='space-y-2'>
            {[
              'Enable women to trigger SOS alerts instantly with one click',
              'Provide real-time location tracking using GPS and map integration',
              'Notify emergency contacts and police immediately via WhatsApp',
              'Support live tracking on interactive map interface for responders',
              'Enable community issue reporting and social features for collective safety',
              'Provide police dashboard for monitoring and managing alerts',
              'Ensure user data privacy and secure authentication',
              'Provide a simple and user-friendly interface for quick access',
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
              Women often face safety risks in isolated or unfamiliar areas, and existing systems fail to provide immediate real-time help. Saheli 2.0 addresses this critical need by delivering instant SOS alerts to police and trusted contacts via WhatsApp with live location tracking, ensuring faster response times and better protection. The platform also enables community reporting and social features to build collective safety awareness.
            </p>
        </div>

        {/* Target Users */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-3'>Target Users</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {[
              { title: 'Female Users', desc: 'Primary end users who need safety protection and can trigger SOS alerts' },
              { title: 'Police Department', desc: 'Responders who receive and act on SOS alerts through dedicated dashboard' },
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
                <li>• React 18.3 (TypeScript)</li>
                <li>• Vite (Build Tool)</li>
                <li>• Tailwind CSS</li>
                <li>• Shadcn UI / Radix UI</li>
                <li>• React Router DOM</li>
                <li>• React Hook Form + Zod</li>
                <li>• TanStack Query (React Query)</li>
                <li>• Axios</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>Backend</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB with Mongoose</li>
                <li>• JWT (jsonwebtoken)</li>
                <li>• bcryptjs</li>
                <li>• Socket.io</li>
                <li>• express-async-handler</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>Maps & Location</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• Leaflet & React Leaflet</li>
                <li>• Google Maps API</li>
                <li>• GPS Location Tracking</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>Communication & Services</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• WhatsApp Business API</li>
                <li>• Socket.io (Real-time)</li>
                <li>• RESTful API</li>
                <li>• Cookie-based Authentication</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>UI/UX Libraries</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• Lucide React (Icons)</li>
                <li>• Recharts (Data Visualization)</li>
                <li>• Sonner (Toast Notifications)</li>
                <li>• next-themes (Theme Management)</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-2'>Development Tools</h4>
              <ul className='space-y-1 text-light-gray-2 text-sm'>
                <li>• TypeScript</li>
                <li>• ESLint</li>
                <li>• PostCSS & Autoprefixer</li>
                <li>• Nodemon (Dev Server)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

