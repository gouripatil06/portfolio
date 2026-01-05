import { stackIcon, stackIconLight } from '@/app/assets/assets';
import SectionHeading from '@/components/SectionHeading';

import AboutMeSection from './_components/about-me-section';
import SkillsOverviewSection from './_components/skills-overview-section';
import TeamDetailsSection from './_components/team-details-section';

export default function AboutMePage() {
  return (
    <>
      <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
        <div className='flex w-full max-w-full flex-col items-center gap-[60px] p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
          {/* About Me Section */}
          <SectionHeading
            darkImage={stackIcon}
            lightImage={stackIconLight}
            title='About Me'
            description='Get to know me better - my background, academic journey, and passion for web development.'
          />

          <AboutMeSection />

          {/* Team Details Section */}
          <TeamDetailsSection />

          {/* Skills Overview Section */}
          <SkillsOverviewSection />
        </div>
      </div>
    </>
  );
}

