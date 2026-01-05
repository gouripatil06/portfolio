import { stackIcon, stackIconLight } from '@/app/assets/assets';

import SectionHeading from '../SectionHeading';
import ExperienceItem from './experience-item';

export default function MyExperience() {
  return (
    <div
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'
      aria-label='Academic Background'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          darkImage={stackIcon}
          lightImage={stackIconLight}
          title='Academic Background'
          description='My educational journey and commitment to continuous learning in Computer Science and Web Development.'
        />
      </div>
      <ExperienceItem />
    </div>
  );
}
