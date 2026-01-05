'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DiagramImageProps {
  src: string;
  alt: string;
  isLightTheme?: boolean; // For images that are light-themed (like sequence_diagram)
  className?: string;
}

export default function DiagramImage({ src, alt, isLightTheme = false, className }: DiagramImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  // If image is light-themed, invert background in dark mode
  // If image is dark-themed, use normal background
  const containerClass = isLightTheme
    ? isDark
      ? 'bg-white p-4 rounded-lg' // Light image on dark background needs white container
      : 'bg-gray-50 p-4 rounded-lg' // Light image on light background
    : isDark
      ? 'bg-dark-gray-4 p-4 rounded-lg' // Dark image on dark background
      : 'bg-gray-100 p-4 rounded-lg'; // Dark image on light background

  return (
    <div className={cn('relative w-full overflow-hidden', containerClass, className)}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className='w-full h-auto object-contain'
        unoptimized
      />
    </div>
  );
}

