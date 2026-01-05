'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: 'team-details', label: 'Team Details' },
  { id: 'project-details', label: 'Project Details' },
  { id: 'problem-analysis', label: 'Problem Analysis' },
  { id: 'system-design', label: 'System Design' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'testing', label: 'Testing' },
  { id: 'devops', label: 'DevOps' },
  { id: 'reflection', label: 'Reflection' },
];

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='bg-very-dark-gray border-border-color rounded-xl border p-2 inline-flex min-w-full'>
        <div className='flex gap-2 w-full'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap',
                activeTab === tab.id
                  ? 'bg-dark-gray-4 text-white'
                  : 'text-light-gray-2 hover:bg-dark-gray-3 hover:text-light-gray-3'
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId='activeTab'
                  className='absolute inset-0 bg-dark-gray-4 rounded-lg -z-10'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

