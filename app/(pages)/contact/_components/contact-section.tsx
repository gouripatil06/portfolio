'use client';

import {
  calendarIcon,
  calendarIconLight,
  emailIcon,
  emailIconLight,
} from '@/app/assets/assets';
import ContactForm from '@/components/ContactForm/ContactForm';
import DynamicIcon from '@/components/dynamic-icon';
import SectionHeading from '@/components/SectionHeading';
import ScheduleButton from '@/components/ui/ScheduleButton';

export default function ContactSection() {
  const handleEmailClick = () => {
    const email = '01fe23bcs022@kletech.ac.in';
    const subject = 'Contact from Portfolio';
    const body = 'Hi Gouri, I would like to get in touch with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <>
      <SectionHeading
        darkImage={emailIcon}
        lightImage={emailIconLight}
        title='I Love to hear from you.'
        description="Connect with Me Today. Let's Create Something Amazing Together!"
      >
        <div className='relative flex h-min w-full flex-none flex-nowrap items-start justify-start gap-3 p-0 sm:gap-4'>
          <button
            onClick={handleEmailClick}
            className='bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 group relative flex w-full cursor-pointer flex-row flex-nowrap items-center justify-center gap-1.5 overflow-visible rounded-[10px] border p-[14px_18px] transition-all duration-300 sm:w-auto'
          >
            <div className='flex items-center justify-center gap-2'>
              {/* Icon */}
              <div className='relative aspect-square h-5 w-5 overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
                <figure className='absolute inset-0 h-full w-full rounded-[inherit]'>
                  <DynamicIcon
                    darkImage={emailIcon}
                    lightImage={emailIconLight}
                    altText='Email me'
                    className='block h-full w-full object-cover object-center'
                    width={20}
                    height={20}
                  />
                </figure>
              </div>

              {/* Text */}
              <div className='h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre opacity-70 group-hover:opacity-100'>
                <p className='text-very-light-gray font-IBM_Plex_Mono text-[15px] leading-[100%] font-semibold whitespace-pre uppercase'>
                  Email Me
                </p>
              </div>
            </div>
          </button>

          <ScheduleButton
            darkIcon={calendarIcon}
            lightIcon={calendarIconLight}
            label='Schedule Call'
          />
        </div>
      </SectionHeading>

      <ContactForm />
    </>
  );
}
