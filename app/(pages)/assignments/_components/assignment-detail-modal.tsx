'use client';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import React from 'react';

import { AssignmentType } from './assignment-card';

interface AssignmentDetailModalProps {
  assignment: AssignmentType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AssignmentDetailModal({
  assignment,
  isOpen,
  onClose,
}: AssignmentDetailModalProps) {
  if (!assignment) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='bg-black/80 fixed inset-0 z-50 flex items-start justify-start p-0 backdrop-blur-sm'
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className='bg-very-dark-gray border-dark-gray-3 fixed left-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto rounded-r-xl border-r border-t-0 border-b-0 border-l-0 shadow-2xl sm:max-w-lg lg:max-w-2xl'
          >
            <div className='relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-6 overflow-visible p-6 sm:p-8'>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className='bg-dark-gray-4 border-dark-gray-3 hover:bg-dark-gray-3 absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200 sm:right-6 sm:top-6'
                aria-label='Close modal'
              >
                <X size={20} className='text-light-gray-2' />
              </button>

              {/* Title */}
              <div className='relative flex h-auto w-full flex-none flex-col flex-nowrap items-start justify-start gap-3 overflow-visible pr-12 p-0'>
                <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                  <h2 className='text-light-gray-4 text-[26px] font-bold sm:text-[28px]'>{assignment.title}</h2>
                </div>
                <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-3 overflow-visible p-0'>
                  <div className='bg-dark-gray-4 border-border-color relative flex h-min w-min flex-none flex-nowrap items-center justify-start gap-2.5 overflow-visible rounded-md border px-3 py-1'>
                    <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
                      <p className='text-light-gray-2 text-[13px] font-medium'>{assignment.evaluation}</p>
                    </div>
                  </div>
                  {assignment.deployedUrl && (
                    <a
                      href={assignment.deployedUrl.startsWith('http') ? assignment.deployedUrl : `https://${assignment.deployedUrl}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-green-500 hover:bg-green-600 group relative flex h-min w-auto flex-none cursor-pointer flex-nowrap items-center justify-center gap-2 overflow-visible rounded-md px-4 py-1.5 transition-all duration-200'
                    >
                      <ExternalLink size={16} className='text-white' />
                      <span className='text-white text-[13px] font-semibold'>Visit Live Site</span>
                    </a>
                  )}
                  {assignment.githubUrl && (
                    <a
                      href={assignment.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-dark-gray-4 border-dark-gray-3 hover:bg-dark-gray-3 group relative flex h-min w-auto flex-none cursor-pointer flex-nowrap items-center justify-center gap-2 overflow-visible rounded-md border px-4 py-1.5 transition-all duration-200'
                    >
                      <Github size={16} className='text-light-gray-2' />
                      <span className='text-light-gray-2 text-[13px] font-semibold'>View Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                <p className='text-light-gray-2 text-[15px] leading-relaxed font-medium sm:text-[16px]'>
                  {assignment.description}
                </p>
              </div>

              {/* Technologies */}
              <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'>
                <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                  <h3 className='text-light-gray-4 text-[18px] font-bold sm:text-[19px]'>Technologies</h3>
                </div>
                <div className='relative flex h-min w-full flex-none flex-wrap items-start justify-start gap-2 overflow-visible p-0'>
                  {assignment.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-dark-gray-4 border-dark-gray-3 text-light-gray-4 inline-flex h-auto w-auto flex-none items-center justify-center rounded-md border px-3 py-1.5 text-[13px] font-medium sm:text-[14px]'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'>
                <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                  <h3 className='text-light-gray-4 text-[18px] font-bold sm:text-[19px]'>Features</h3>
                </div>
                <ul className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-2 overflow-visible p-0'>
                  {assignment.features.map((feature, index) => (
                    <li
                      key={index}
                      className='text-light-gray-2 relative flex h-min w-full flex-none flex-nowrap items-start justify-start gap-2.5 overflow-visible p-0 text-[14px] leading-relaxed font-medium sm:text-[15px]'
                    >
                      <span className='bg-light-gray-4 relative mt-1.5 flex aspect-square h-auto w-1.5 flex-none shrink-0 items-center justify-center overflow-visible rounded-full p-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Reflection */}
              <div className='relative grid h-min w-full flex-none grid-cols-1 gap-4 overflow-visible p-0 lg:grid-cols-2'>
                {/* Challenges */}
                <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <h3 className='text-light-gray-4 text-[18px] font-bold sm:text-[19px]'>Challenges</h3>
                  </div>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-2 text-[14px] leading-relaxed font-medium sm:text-[15px]'>
                      {assignment.challenges}
                    </p>
                  </div>
                </div>

                {/* Reflection */}
                <div className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-3 overflow-visible rounded-xl border p-4 sm:p-5'>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <h3 className='text-light-gray-4 text-[18px] font-bold sm:text-[19px]'>Reflection</h3>
                  </div>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-2 text-[14px] leading-relaxed font-medium sm:text-[15px]'>
                      {assignment.reflection}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

