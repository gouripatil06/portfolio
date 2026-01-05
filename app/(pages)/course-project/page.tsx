'use client';
import { useState } from 'react';
import { stackIcon, stackIconLight } from '@/app/assets/assets';
import SectionHeading from '@/components/SectionHeading';
import TabNavigation from './_components/tab-navigation';
import TeamDetailsSection from './_components/team-details-section';
import ProjectDetailsSection from './_components/project-details-section';
import ProblemAnalysisSection from './_components/problem-analysis-section';
import SystemDesignSection from './_components/system-design-section';
import ImplementationSection from './_components/implementation-section';
import TestingSection from './_components/testing-section';
import DevOpsSection from './_components/devops-section';
import ReflectionSection from './_components/reflection-section';

export default function CourseProjectPage() {
  const [activeTab, setActiveTab] = useState('team-details');

  const renderSection = () => {
    switch (activeTab) {
      case 'team-details':
        return <TeamDetailsSection />;
      case 'project-details':
        return <ProjectDetailsSection />;
      case 'problem-analysis':
        return <ProblemAnalysisSection />;
      case 'system-design':
        return <SystemDesignSection />;
      case 'implementation':
        return <ImplementationSection />;
      case 'testing':
        return <TestingSection />;
      case 'devops':
        return <DevOpsSection />;
      case 'reflection':
        return <ReflectionSection />;
      default:
        return <TeamDetailsSection />;
    }
  };

  return (
    <>
      <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
        <div className='flex w-full max-w-full flex-col items-center gap-[60px] p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
          {/* Page Heading */}
          <SectionHeading
            darkImage={stackIcon}
            lightImage={stackIconLight}
            title='Course Project: Saheli 2.0'
            description='An AI and community-powered women safety web platform that predicts, prevents, and responds to emergencies in real-time. This integrated course project demonstrates comprehensive full-stack development skills, system design, and collaborative software engineering practices.'
          />

          {/* Tab Navigation */}
          <div className='w-full'>
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Active Section Content */}
          <div className='w-full'>
            {renderSection()}
          </div>
        </div>
      </div>
    </>
  );
}
