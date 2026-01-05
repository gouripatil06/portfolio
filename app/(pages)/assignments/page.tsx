import { stackIcon, stackIconLight } from '@/app/assets/assets';
import SectionHeading from '@/components/SectionHeading';

import AssignmentsGrid from './_components/assignments-grid';

export default function AssignmentsPage() {
  return (
    <>
      <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
        <div className='flex w-full max-w-full flex-col items-center gap-[60px] p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
          {/* Assignments Section Heading */}
          <SectionHeading
            darkImage={stackIcon}
            lightImage={stackIconLight}
            title='My Assignments'
            description='A collection of assignments completed as part of my Web Technologies and Software Engineering course. Each project showcases different skills and learning outcomes.'
          />

          {/* Assignments Grid */}
          <AssignmentsGrid />
        </div>
      </div>
    </>
  );
}

