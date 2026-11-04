import React from 'react';

interface PulseDividerProps {
  variant?: 'one' | 'two';
  className?: string;
}

export function PulseDivider({ variant = 'one', className = '' }: PulseDividerProps) {
  const dPath =
    variant === 'one'
      ? 'M0,32 L430,32 L470,10 L500,54 L535,20 L565,32 L620,32 L650,44 L680,32 L1180,32'
      : 'M0,32 L500,32 L535,50 L565,14 L600,32 L650,32 L680,40 L710,32 L1180,32';

  return (
    <div className={`pulse-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1180 64"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 block"
      >
        <line x1="0" y1="32" x2="1180" y2="32" className="pulse-line" />
        <path className="pulse-path" d={dPath} />
      </svg>
    </div>
  );
}

