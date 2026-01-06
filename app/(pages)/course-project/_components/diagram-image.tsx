'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DiagramImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
  singleSrc?: string; // For images that don't have light/dark variants
}

export default function DiagramImage({ 
  lightSrc, 
  darkSrc, 
  alt, 
  className,
  singleSrc 
}: DiagramImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  
  // Use single source if provided, otherwise use theme-based source
  const imageSrc = singleSrc || (isDark ? darkSrc : lightSrc);

  const containerClass = 'bg-dark-gray-4 dark:bg-dark-gray-4 p-4 rounded-lg border border-border-color';

  return (
    <div className={cn('relative w-full overflow-hidden', containerClass, className)}>
      <Image
        src={imageSrc}
        alt={alt}
        width={1200}
        height={800}
        className='w-full h-auto object-contain'
        unoptimized
      />
    </div>
  );
}

