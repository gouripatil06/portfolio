'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import StackIcon from 'tech-stack-icons';

import { rightArrow as rightArrowDark, rightArrowLight } from '@/app/assets/assets';
import { myStack } from '@/data';

import DynamicIcon from '../dynamic-icon';

export default function StackLists() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div className='w-full'>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='relative grid h-min w-full flex-none auto-rows-min grid-cols-1 justify-center gap-2.5 overflow-visible p-0 lg:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-rows-[repeat(2,min-content)]'
      >
        {myStack?.map((stack, index) => (
          <motion.li
            key={stack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{
              once: true,
            }}
            className='w-full'
          >
            <Link
              href={stack.link}
              aria-label={`View more about ${stack.title}`}
              className='bg-very-dark-gray border-dark-gray-3 group hover:bg-almost-black relative flex h-min w-full cursor-pointer flex-nowrap items-center justify-start gap-2.5 overflow-visible rounded-xl border p-[14px_24px_14px_14px] transition-all duration-500'
            >
              {/* logo  */}
              <div className='bg-dark-gray-4 border-border-color relative flex h-min w-min flex-none flex-nowrap items-center justify-center gap-2.5 overflow-hidden rounded-[7px] border p-2'>
                <div className='relative aspect-square h-auto w-[30px] flex-none overflow-hidden flex items-center justify-center'>
                  {stack.customIcon && stack.iconPath ? (
                    <Image
                      src={stack.iconPath}
                      alt={stack.title}
                      width={30}
                      height={30}
                      className='block h-full w-full rounded-[inherit] object-contain object-center'
                    />
                  ) : stack.techName ? (
                    <StackIcon
                      name={stack.techName as any}
                      variant={isDark ? 'dark' : 'light'}
                      className='object-contain'
                      style={{ width: '30px', height: '30px' }}
                    />
                  ) : stack.logo ? (
                    <Image
                      src={stack.logo}
                      alt={stack.title}
                      width={30}
                      height={30}
                      className='block h-full w-full rounded-[inherit] object-contain object-center'
                    />
                  ) : null}
                </div>
              </div>
              {/* text  */}
              <div className='relative flex h-min flex-1 flex-col flex-nowrap items-start justify-start gap-0 overflow-visible p-0'>
                <div className='relative flex h-auto w-full flex-none shrink-0 flex-col wrap-break-word whitespace-pre-wrap'>
                  <p className='text-light-gray-4 text-[18px] font-semibold'>{stack.title}</p>
                </div>
                <div className='relative flex h-auto w-full flex-none shrink-0 flex-col wrap-break-word whitespace-pre-wrap'>
                  <p className='text-light-gray-2 text-[15px] font-medium'>{stack.description}</p>
                </div>
              </div>
              {/* arrow  */}
              <div className='relative aspect-square h-auto w-6 flex-none overflow-hidden opacity-50 group-hover:opacity-100'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center rounded-full'>
                  <DynamicIcon
                    lightImage={rightArrowLight}
                    darkImage={rightArrowDark}
                    width={24}
                    height={24}
                    altText='Right arrow icon'
                    className='block h-full w-full rounded-full object-cover object-center transition-all duration-500 group-hover:-rotate-45'
                  />
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
