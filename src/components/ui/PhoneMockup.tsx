import React from 'react';
import Image from 'next/image';

interface PhoneMockupProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  phoneWidth?: number | string;
}

export function PhoneMockup({
  src,
  alt,
  width = 717,
  height = 1467,
  priority = false,
  className = '',
  phoneWidth = 270,
}: PhoneMockupProps) {
  const widthStyle = typeof phoneWidth === 'number' ? `${phoneWidth}px` : phoneWidth;

  return (
    <div
      className={`phone ${className}`}
      style={{ width: widthStyle }}
    >
      <div className="relative w-full aspect-[9/18.4] overflow-hidden bg-black">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover object-top"
          sizes="(max-width: 768px) 260px, 320px"
        />
      </div>
    </div>
  );
}

