import { stackIcon, stackIconLight } from '@/app/assets/assets';
import SectionHeading from '@/components/SectionHeading';

import SkillsCategorySection from './_components/skills-category-section';

export default function SkillsPage() {
  return (
    <>
      <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
        <div className='flex w-full max-w-full flex-col items-center gap-[60px] p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
          {/* Skills Section Heading */}
          <SectionHeading
            darkImage={stackIcon}
            lightImage={stackIconLight}
            title='My Skills'
            description='A comprehensive overview of my technical skills, organized by category with proficiency levels. Continuously learning and improving.'
          />

          {/* Skills Categories */}
          <SkillsCategorySection />
        </div>
      </div>
    </>
  );
}

