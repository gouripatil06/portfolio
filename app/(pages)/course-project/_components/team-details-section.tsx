'use client';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function TeamDetailsSection() {
  return (
    <motion.section
      id='team-details'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>Team Details</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Gouri Patil */}
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-6'>
            <div className='flex items-start gap-4'>
              <div className='bg-dark-gray-3 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-white'>
                GP
              </div>
              <div className='flex-1'>
                <h3 className='text-white text-xl font-semibold mb-1'>Gouri Patil</h3>
                <p className='text-light-gray-2 text-sm mb-2'>USN: 01FE23BCS022</p>
                <p className='text-light-gray-2 text-sm mb-3'>Roll No: 156</p>
                <Link
                  href='mailto:01fe23bcs022@kletech.ac.in'
                  className='text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm'
                >
                  <Mail size={14} />
                  01fe23bcs022@kletech.ac.in
                </Link>
              </div>
            </div>
          </div>

          {/* Ananya Desai */}
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-6'>
            <div className='flex items-start gap-4'>
              <div className='bg-dark-gray-3 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-white'>
                AD
              </div>
              <div className='flex-1'>
                <h3 className='text-white text-xl font-semibold mb-1'>Ananya Desai</h3>
                <p className='text-light-gray-2 text-sm mb-2'>USN: 01FE23BCS285</p>
                <p className='text-light-gray-2 text-sm mb-3'>Roll No: 157</p>
                <Link
                  href='mailto:01fe23bcs285@kletech.ac.in'
                  className='text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm'
                >
                  <Mail size={14} />
                  01fe23bcs285@kletech.ac.in
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 pt-6 border-t border-border-color'>
          <p className='text-light-gray-2 text-sm'>
            <span className='text-light-gray-4 font-semibold'>Course:</span> Software Engineering and Web Technology
          </p>
          <p className='text-light-gray-2 text-sm mt-1'>
            <span className='text-light-gray-4 font-semibold'>Semester:</span> V Sem (2025-26)
          </p>
          <p className='text-light-gray-2 text-sm mt-1'>
            <span className='text-light-gray-4 font-semibold'>Department:</span> Computer Science and Engineering
          </p>
          <p className='text-light-gray-2 text-sm mt-1'>
            <span className='text-light-gray-4 font-semibold'>Guided by:</span> Ms. Neha Tarannum, Ms. Muskan Indikar
          </p>
        </div>
      </div>
    </motion.section>
  );
}

