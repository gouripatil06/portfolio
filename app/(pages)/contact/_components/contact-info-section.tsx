'use client';
import { motion } from 'motion/react';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfoSection() {
  const contactInfo = {
    email: '01fe23bcs022@kletech.ac.in',
    github: 'https://github.com/gouripatil06',
    linkedin: 'https://linkedin.com/in/gourip',
    deployedUrls: [
      { name: 'Personal Blog', url: 'https://blog.gouri.fun' },
      { name: 'To-Do List App', url: 'https://todo.gouri.fun' },
      { name: 'Movie Search App', url: 'https://movies.gouri.fun' },
      { name: 'REST API Backend', url: 'https://blog-notes-api.onrender.com' },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-5 overflow-visible rounded-xl border p-6 sm:p-8'
    >
      <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
        <h3 className='text-light-gray-4 text-[22px] font-bold sm:text-[24px]'>Get in Touch</h3>
      </div>

      <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-4 overflow-visible p-0'>
        {/* Email */}
        <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'>
          <div className='bg-dark-gray-4 border-border-color relative flex aspect-square h-auto w-[45px] flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-0'>
            <Mail size={20} className='text-light-gray-2' />
          </div>
          <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-1 overflow-visible p-0'>
            <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
              <p className='text-light-gray-2 text-[14px] font-medium'>Professional Email</p>
            </div>
            <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
              <a
                href={`mailto:${contactInfo.email}`}
                className='text-light-gray-4 hover:text-light-gray-2 text-[15px] font-semibold transition-colors duration-200 sm:text-[16px]'
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'>
          <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
            <h4 className='text-light-gray-4 text-[16px] font-bold sm:text-[17px]'>Connect With Me</h4>
          </div>
          <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-3 overflow-visible p-0'>
            <Link
              href={contactInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-dark-gray-4 border-dark-gray-3 hover:bg-dark-gray-3 group relative flex h-min w-auto flex-none cursor-pointer flex-nowrap items-center justify-center gap-2 overflow-visible rounded-lg border px-4 py-2.5 transition-all duration-200'
            >
              <Github size={18} className='text-light-gray-2' />
              <span className='text-light-gray-4 text-[14px] font-semibold'>GitHub</span>
            </Link>
            <Link
              href={contactInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-dark-gray-4 border-dark-gray-3 hover:bg-dark-gray-3 group relative flex h-min w-auto flex-none cursor-pointer flex-nowrap items-center justify-center gap-2 overflow-visible rounded-lg border px-4 py-2.5 transition-all duration-200'
            >
              <Linkedin size={18} className='text-light-gray-2' />
              <span className='text-light-gray-4 text-[14px] font-semibold'>LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Deployed URLs */}
        <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'>
          <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
            <h4 className='text-light-gray-4 text-[16px] font-bold sm:text-[17px]'>Deployed Projects</h4>
          </div>
          <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-2 overflow-visible p-0'>
            {contactInfo.deployedUrls.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-dark-gray-4 border-dark-gray-3 hover:bg-dark-gray-3 group relative flex h-min w-full flex-none cursor-pointer flex-nowrap items-center justify-between gap-3 overflow-visible rounded-lg border px-4 py-2.5 transition-all duration-200'
              >
                <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-0 overflow-visible p-0'>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-4 text-[14px] font-semibold'>{item.name}</p>
                  </div>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-2 text-[12px] font-medium'>{item.url.replace('https://', '')}</p>
                  </div>
                </div>
                <ExternalLink size={16} className='text-light-gray-2 opacity-70 group-hover:opacity-100' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

