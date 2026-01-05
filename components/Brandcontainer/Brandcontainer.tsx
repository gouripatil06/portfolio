'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import StackIcon from 'tech-stack-icons';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { techStackBrands } from '@/data/index';

export default function Brandcontainer() {
  return (
    <section className='relative flex h-min w-full flex-none flex-nowrap gap-[30px] overflow-hidden p-[0px_0px_10px]'>
      <div className='maskImage flex max-h-full w-full max-w-full justify-between overflow-hidden p-2.5'>
        <MerqueeItems />
      </div>
    </section>
  );
}

const MerqueeItems = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <Marquee
      className='w-full gap-7'
      autoFill
    >
      <ul className='relative ml-20 flex h-full max-h-full w-full max-w-full shrink-0 place-items-center gap-7 p-0'>
        {techStackBrands.map((tech) => (
          <li
            key={tech.id}
            className='h-full w-full flex items-center justify-center'
          >
            <div className='relative h-[45px] w-[80px] shrink-0 cursor-pointer overflow-hidden flex items-center justify-center'>
              {tech.customIcon && tech.iconPath ? (
                <Image
                  src={tech.iconPath}
                  alt={tech.name}
                  width={80}
                  height={45}
                  className='object-contain w-full h-full'
                  style={{ maxWidth: '80px', maxHeight: '45px' }}
                />
              ) : (
                <StackIcon
                  name={tech.name as any}
                  variant={isDark ? 'dark' : 'light'}
                  className='object-contain'
                  style={{ width: '80px', height: '45px', maxWidth: '80px', maxHeight: '45px' }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Marquee>
  );
};
