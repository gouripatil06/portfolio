'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

import { AvatarMe, stackIcon, stackIconLight } from '@/app/assets/assets';

export default function AboutMeSection() {
  return (
    <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'>
      {/* Profile Image and Basic Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-col flex-nowrap items-center justify-start gap-5 overflow-visible rounded-xl border p-6 sm:p-8'
      >
        {/* Profile Image */}
        <div className='border-dark-gray-3 relative flex h-auto w-auto flex-none items-center justify-center overflow-hidden rounded-full border-2 p-1'>
          <div className='relative aspect-square h-auto w-[120px] overflow-hidden rounded-full sm:w-[150px]'>
            <Image
              src={AvatarMe}
              alt='Gouri Patil'
              width={150}
              height={150}
              className='block h-full w-full rounded-full object-cover object-center'
              priority
            />
          </div>
        </div>

        {/* Name */}
        <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-center wrap-break-word whitespace-pre-wrap text-center'>
          <h2 className='text-light-gray-4 text-[28px] font-bold sm:text-[32px]'>Gouri Patil</h2>
        </div>

        {/* Academic Info */}
        <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-2 overflow-visible rounded-xl border p-4 sm:p-5'>
          <InfoRow label='USN' value='01fe23bcs022' />
          <InfoRow label='Semester' value="5th Sem 'A'" />
          <InfoRow label='Department' value='Computer Science' />
          <InfoRow label='University' value='KLE Technological University' />
        </div>
      </motion.div>

      {/* About Me Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-4 overflow-visible rounded-xl border p-6 sm:p-8'
      >
        <h3 className='text-light-gray-4 text-[22px] font-bold sm:text-[24px]'>About Me</h3>
        <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
          <p className='text-light-gray-2 text-[15px] leading-relaxed font-medium sm:text-[16px]'>
            I'm Gouri Patil, an aspiring Full-Stack Web Developer from Hubli, currently pursuing my
            Bachelor of Engineering in Computer Science at KLE Technological University. Currently in
            my 5th semester, I'm passionate about Web Technologies and Software Engineering.
          </p>
          <p className='mt-4 text-light-gray-2 text-[15px] leading-relaxed font-medium sm:text-[16px]'>
            My journey in web development started with a curiosity to understand how modern web
            applications work. Over time, I've developed a strong foundation in frontend
            technologies like HTML, CSS, JavaScript, and React, as well as backend technologies
            including Node.js and Express.js. I'm also exploring database technologies like MongoDB
            and MySQL to build complete full-stack solutions.
          </p>
          <p className='mt-4 text-light-gray-2 text-[15px] leading-relaxed font-medium sm:text-[16px]'>
            What drives me is the continuous learning process and the opportunity to solve real-world
            problems through code. I enjoy building projects that combine creativity with technical
            skills, and I'm always looking forward to expanding my knowledge and working on
            challenging projects.
          </p>
          <p className='mt-4 text-light-gray-2 text-[15px] leading-relaxed font-medium sm:text-[16px]'>
            Beyond coding, I believe in collaborative learning and teamwork. I'm excited about the
            future of web development and am committed to staying updated with the latest
            technologies and best practices in the field.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Info Row Component
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className='border-dark-gray-3 flex w-full items-center justify-between border-b px-0 py-2.5 last:border-transparent'>
      <div className='flex-1'>
        <p className='text-light-gray-2 text-[15px] font-medium'>{label}</p>
      </div>
      <div className='flex-1 text-right'>
        <p className='text-light-gray-4 text-[16px] font-bold sm:text-[18px]'>{value}</p>
      </div>
    </div>
  );
}

