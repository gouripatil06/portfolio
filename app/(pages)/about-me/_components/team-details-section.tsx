'use client';
import { motion } from 'motion/react';
import { Mail, User } from 'lucide-react';

export default function TeamDetailsSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Gouri Patil',
      email: '01fe23bcs022@kletech.ac.in',
    },
    {
      id: 2,
      name: 'Ananya Desai',
      email: '01fe23bcs285@kletech.ac.in',
    },
  ];

  return (
    <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-4 overflow-visible rounded-xl border p-6 sm:p-8'
      >
        <h3 className='text-light-gray-4 text-[22px] font-bold sm:text-[24px]'>Team Details</h3>
        <p className='text-light-gray-2 text-[15px] font-medium sm:text-[16px]'>
          Our team consists of two dedicated Computer Science students working together on projects
          and assignments.
        </p>

        <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-3 overflow-visible p-0'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'
            >
              <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-3 overflow-visible p-0'>
                <div className='bg-dark-gray-4 border-border-color relative flex aspect-square h-auto w-[40px] flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-0'>
                  <User size={20} className='text-light-gray-2' />
                </div>
                <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-0 overflow-visible p-0'>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-4 text-[18px] font-bold'>{member.name}</p>
                  </div>
                  <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-2 overflow-visible p-0'>
                    <Mail size={16} className='text-light-gray-2' />
                    <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                      <a
                        href={`mailto:${member.email}`}
                        className='text-light-gray-2 hover:text-light-gray-4 text-[14px] font-medium transition-colors duration-200 sm:text-[15px]'
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

