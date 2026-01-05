'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import StackIcon from 'tech-stack-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface AssignmentLink {
  id: number;
  title: string;
  deployedUrl?: string;
  githubUrl?: string;
}

interface TechnologySectionProps {
  title: string;
  description: string;
  overview: string;
  keyConcepts: string[];
  assignments: AssignmentLink[];
  techName?: string;
  customIcon?: boolean;
  iconPath?: string;
}

export default function TechnologySection({
  title,
  description,
  overview,
  keyConcepts,
  assignments,
  techName,
  customIcon,
  iconPath,
}: TechnologySectionProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-5 overflow-visible rounded-xl border p-6 sm:p-8'
    >
      {/* Header */}
      <div className='relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-3 overflow-visible p-0'>
        <div className='relative flex h-min w-full flex-nowrap items-center justify-start gap-3 overflow-visible p-0'>
          <div className='bg-dark-gray-4 border-border-color relative flex aspect-square h-auto w-[50px] flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-2'>
            {customIcon && iconPath ? (
              <Image
                src={iconPath}
                alt={title}
                width={30}
                height={30}
                className='block h-full w-full rounded-[inherit] object-contain object-center'
              />
            ) : techName ? (
              <StackIcon
                name={techName as any}
                variant={isDark ? 'dark' : 'light'}
                className='object-contain'
                style={{ width: '30px', height: '30px' }}
              />
            ) : null}
          </div>
          <h3 className='text-light-gray-4 text-2xl font-bold font-space-grotesk'>{title}</h3>
        </div>
        <p className='text-light-gray-2 text-base leading-relaxed'>{description}</p>
      </div>

      {/* Overview */}
      <div className='relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-3 overflow-visible p-0'>
        <h4 className='text-white text-lg font-semibold font-space-grotesk'>Overview</h4>
        <p className='text-light-gray-2 text-[15px] leading-relaxed'>{overview}</p>
      </div>

      {/* Key Concepts */}
      <div className='relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-3 overflow-visible p-0'>
        <h4 className='text-white text-lg font-semibold font-space-grotesk'>Key Concepts Learned</h4>
        <div className='flex flex-wrap gap-2'>
          {keyConcepts.map((concept, index) => (
            <span
              key={index}
              className='bg-dark-gray-4 border-border-color text-light-gray-3 inline-flex h-auto w-auto flex-none items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium'
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Assignments Using This Technology */}
      {assignments.length > 0 && (
        <div className='relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-3 overflow-visible p-0 pt-2 border-t border-border-color'>
          <h4 className='text-white text-lg font-semibold font-space-grotesk'>Applied In Assignments</h4>
          <div className='flex flex-col gap-3 w-full'>
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className='bg-dark-gray-4 border-border-color flex items-center justify-between gap-3 rounded-lg border p-4 hover:bg-dark-gray-3 transition-colors'
              >
                <div className='flex-1 min-w-0'>
                  <p className='text-white font-medium font-space-grotesk mb-1'>{assignment.title}</p>
                  <p className='text-light-gray-1 text-sm'>Assignment {assignment.id}</p>
                </div>
                <div className='flex items-center gap-2 flex-shrink-0'>
                  {assignment.deployedUrl && (
                    <Link
                      href={assignment.deployedUrl.startsWith('http') ? assignment.deployedUrl : `https://${assignment.deployedUrl}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-green-500/10 border-green-500/30 hover:bg-green-500/20 text-green-400 flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors'
                    >
                      <ExternalLink size={14} />
                      <span>Live</span>
                    </Link>
                  )}
                  {assignment.githubUrl && (
                    <Link
                      href={assignment.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20 text-blue-400 flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors'
                    >
                      <ExternalLink size={14} />
                      <span>Code</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

