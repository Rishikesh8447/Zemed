import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const baseClasses = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`;

  if (href) {
    const isAnchor = href.startsWith('#');
    if (isAnchor) {
      return (
        <a href={href} className={baseClasses} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
}

