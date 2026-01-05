'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'team-details', title: 'Team Details' },
  { id: 'project-details', title: 'Project Details' },
  { id: 'problem-analysis', title: 'Problem Analysis' },
  { id: 'system-design', title: 'System Design' },
  { id: 'implementation', title: 'Implementation' },
  { id: 'testing', title: 'Software Testing' },
  { id: 'devops', title: 'DevOps Certification' },
  { id: 'reflection', title: 'Final Reflection' },
];

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>('team-details');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className='sticky top-24 hidden lg:block h-fit'>
        <div className='bg-very-dark-gray border-border-color rounded-xl border p-4'>
          <h3 className='text-light-gray-4 text-sm font-semibold mb-3 uppercase tracking-wider'>
            Sections
          </h3>
          <nav className='flex flex-col gap-1'>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  'text-left px-3 py-2 rounded-md text-sm transition-all duration-200',
                  activeSection === section.id
                    ? 'bg-dark-gray-4 text-white font-medium'
                    : 'text-light-gray-2 hover:bg-dark-gray-3 hover:text-light-gray-3'
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='lg:hidden mb-6 w-full'>
        <div className='bg-very-dark-gray border-border-color rounded-xl border p-4'>
          <h3 className='text-light-gray-4 text-sm font-semibold mb-3 uppercase tracking-wider'>
            Sections
          </h3>
          <nav className='flex flex-wrap gap-2'>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  'px-3 py-1.5 rounded-md text-xs transition-all duration-200',
                  activeSection === section.id
                    ? 'bg-dark-gray-4 text-white font-medium'
                    : 'text-light-gray-2 hover:bg-dark-gray-3 hover:text-light-gray-3 bg-dark-gray-4'
                )}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

