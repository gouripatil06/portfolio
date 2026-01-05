'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import StackIcon from 'tech-stack-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Code, Database, Wrench } from 'lucide-react';

type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

interface Skill {
  id: number;
  name: string;
  proficiency: ProficiencyLevel;
  techName?: string;
  customIcon?: boolean;
  iconPath?: string;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const getProficiencyPercentage = (level: ProficiencyLevel): number => {
  switch (level) {
    case 'Beginner':
      return 40;
    case 'Intermediate':
      return 70;
    case 'Advanced':
      return 90;
    default:
      return 0;
  }
};

const getProficiencyColor = (level: ProficiencyLevel): string => {
  switch (level) {
    case 'Beginner':
      return 'bg-blue-500';
    case 'Intermediate':
      return 'bg-green-500';
    case 'Advanced':
      return 'bg-purple-500';
    default:
      return 'bg-gray-500';
  }
};

export default function SkillsCategorySection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: 'Languages',
      icon: <Code size={24} className='text-light-gray-4' />,
      skills: [
        { id: 1, name: 'HTML', proficiency: 'Intermediate', techName: 'html5' },
        { id: 2, name: 'CSS', proficiency: 'Intermediate', techName: 'css3' },
        { id: 3, name: 'JavaScript', proficiency: 'Intermediate', techName: 'javascript', customIcon: true, iconPath: '/images/icons/js.png' },
        { id: 4, name: 'TypeScript', proficiency: 'Beginner', techName: 'typescript' },
      ],
    },
    {
      id: 2,
      title: 'Frameworks',
      icon: <Database size={24} className='text-light-gray-4' />,
      skills: [
        { id: 5, name: 'React', proficiency: 'Intermediate', techName: 'react' },
        { id: 6, name: 'Next.js', proficiency: 'Intermediate', techName: 'nextjs' },
        { id: 7, name: 'Node.js', proficiency: 'Intermediate', techName: 'nodejs' },
        { id: 8, name: 'Express.js', proficiency: 'Intermediate', techName: 'express', customIcon: true, iconPath: '/images/icons/express.png' },
        { id: 9, name: 'Tailwind CSS', proficiency: 'Intermediate', techName: 'tailwindcss' },
        { id: 10, name: 'Bootstrap', proficiency: 'Intermediate', techName: 'bootstrap', customIcon: true, iconPath: '/images/icons/bootstrap.png' },
        { id: 11, name: 'Redux', proficiency: 'Beginner', techName: 'redux' },
      ],
    },
    {
      id: 3,
      title: 'Tools',
      icon: <Wrench size={24} className='text-light-gray-4' />,
      skills: [
        { id: 12, name: 'Git', proficiency: 'Intermediate', techName: 'git' },
        { id: 13, name: 'GitHub', proficiency: 'Intermediate', techName: 'github' },
        { id: 14, name: 'MongoDB', proficiency: 'Intermediate', techName: 'mongodb' },
        { id: 15, name: 'MySQL', proficiency: 'Beginner', techName: 'mysql' },
        { id: 16, name: 'npm', proficiency: 'Intermediate', techName: 'npm' },
        { id: 17, name: 'VS Code', proficiency: 'Intermediate', techName: 'vscode' },
      ],
    },
  ];

  return (
    <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'>
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
          className='bg-very-dark-gray border-dark-gray-3 relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-5 overflow-visible rounded-xl border p-6 sm:p-8'
        >
          {/* Category Header */}
          <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-start gap-3 overflow-visible p-0'>
            <div className='bg-dark-gray-4 border-border-color relative flex aspect-square h-auto w-[50px] flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-0'>
              {category.icon}
            </div>
            <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-0 overflow-visible p-0'>
              <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                <h3 className='text-light-gray-4 text-[22px] font-bold sm:text-[24px]'>{category.title}</h3>
              </div>
            </div>
          </div>

          {/* Skills List */}
          <div className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-4 overflow-visible p-0'>
            {category.skills.map((skill, skillIndex) => {
              const percentage = getProficiencyPercentage(skill.proficiency);
              const colorClass = getProficiencyColor(skill.proficiency);

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  className='relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-2 overflow-visible p-0'
                >
                  {/* Skill Header */}
                  <div className='relative flex h-min w-full flex-none flex-nowrap items-center justify-between overflow-visible p-0'>
                    <div className='relative flex h-min flex-1 flex-nowrap items-center justify-start gap-3 overflow-visible p-0'>
                      {/* Icon */}
                      <div className='bg-dark-gray-4 border-border-color relative flex aspect-square h-auto w-[35px] flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-lg border p-0'>
                        {skill.customIcon && skill.iconPath ? (
                          <Image
                            src={skill.iconPath}
                            alt={skill.name}
                            width={20}
                            height={20}
                            className='block h-full w-full rounded-[inherit] object-contain object-center'
                          />
                        ) : skill.techName ? (
                          <StackIcon
                            name={skill.techName as any}
                            variant={isDark ? 'dark' : 'light'}
                            className='object-contain'
                            style={{ width: '20px', height: '20px' }}
                          />
                        ) : null}
                      </div>
                      {/* Name */}
                      <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-center gap-0 overflow-visible p-0'>
                        <div className='relative flex h-auto w-full flex-none shrink-0 flex-col justify-start wrap-break-word whitespace-pre-wrap'>
                          <p className='text-light-gray-4 text-[16px] font-semibold sm:text-[17px]'>{skill.name}</p>
                        </div>
                      </div>
                    </div>
                    {/* Proficiency Badge */}
                    <div className='relative h-auto w-auto flex-none'>
                      <div
                        className={`border-dark-gray-3 relative flex h-min w-min flex-none flex-nowrap items-center justify-start gap-2.5 overflow-visible rounded-md border px-2.5 py-1 ${
                          skill.proficiency === 'Advanced'
                            ? 'bg-purple-500/10'
                            : skill.proficiency === 'Intermediate'
                              ? 'bg-green-500/10'
                              : 'bg-blue-500/10'
                        }`}
                      >
                        <div className='relative flex h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre'>
                          <p
                            className={`text-[12px] font-semibold sm:text-[13px] ${
                              skill.proficiency === 'Advanced'
                                ? 'text-purple-400'
                                : skill.proficiency === 'Intermediate'
                                  ? 'text-green-400'
                                  : 'text-blue-400'
                            }`}
                          >
                            {skill.proficiency}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className='bg-dark-gray-4 border-border-color relative flex h-auto w-full flex-none flex-col flex-nowrap justify-start gap-0 overflow-hidden rounded-lg border p-0.5'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }}
                      viewport={{ once: true }}
                      className={`${colorClass} relative h-2 flex-none overflow-hidden rounded-md`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

