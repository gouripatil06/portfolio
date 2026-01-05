'use client';
import { motion } from 'motion/react';
import { Code, Database, Server } from 'lucide-react';

export default function SkillsOverviewSection() {
  const skillsCategories = [
    {
      id: 1,
      title: 'Frontend',
      icon: <Code size={24} className='text-light-gray-4' />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
      description: 'Building responsive and interactive user interfaces',
    },
    {
      id: 2,
      title: 'Backend',
      icon: <Server size={24} className='text-light-gray-4' />,
      technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'Middleware'],
      description: 'Creating robust server-side applications and APIs',
    },
    {
      id: 3,
      title: 'Database',
      icon: <Database size={24} className='text-light-gray-4' />,
      technologies: ['MongoDB', 'MySQL'],
      description: 'Designing and managing database systems',
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
        <h3 className='text-light-gray-4 text-[22px] font-bold sm:text-[24px]'>Skills Overview</h3>
        <p className='text-light-gray-2 text-[15px] font-medium sm:text-[16px]'>
          Technologies and tools I'm proficient in, organized by category.
        </p>

        <div className='relative grid h-min w-full flex-none grid-cols-1 justify-center gap-3 overflow-visible p-0 lg:grid-cols-[repeat(3,minmax(50px,1fr))]'>
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='border-dark-gray-3 bg-darkest-gray relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-4 overflow-visible rounded-xl border p-4 sm:p-5'
            >
              {/* Icon and Title */}
              <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-3 overflow-visible p-0'>
                <div className='bg-dark-gray-4 border-border-color relative flex aspect-square h-auto w-[45px] flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-0'>
                  {category.icon}
                </div>
                <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-0 overflow-visible p-0'>
                  <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                    <p className='text-light-gray-4 text-[18px] font-bold'>{category.title}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                <p className='text-light-gray-2 text-[14px] font-medium'>{category.description}</p>
              </div>

              {/* Technologies */}
              <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-2 overflow-visible p-0'>
                <div className='relative flex h-min w-full flex-none flex-wrap items-start justify-start gap-2 overflow-visible p-0'>
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-dark-gray-4 border-dark-gray-3 text-light-gray-4 inline-flex h-auto w-auto flex-none items-center justify-center rounded-md border px-3 py-1.5 text-[13px] font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

