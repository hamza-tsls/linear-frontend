'use client';

import React, { ReactNode, useState, useRef } from 'react';
import ChevronRight from '@/app/components/ui/chevronRIght';
import ChevronDown from '@/app/components/ui/chevronDown';
import CopyIcon from '@/app/components/ui/copy';
import PlusIcon from '@/app/components/ui/plus';
import GithubIcon from '../ui/github';

interface TryProps {
  children?: ReactNode;
}

export default function Try({ children }: TryProps) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const iconColor = '#939496';
  const iconHoverColor = '#ffffff';
  const textColor = '#E5E5E5'; // Converted from lch(90.421 1 272)

  const items = [
    { label: 'Import Issues', Icon: CopyIcon },
    { label: 'Invite people', Icon: PlusIcon },
    { label: 'Link Github', Icon: GithubIcon },
  ];

  const handleMouseEnter = (index?: number, e?: React.MouseEvent<HTMLDivElement>) => {
    if (index !== undefined) setHoveredIndex(index);
    if (e) (e.currentTarget as HTMLDivElement).style.backgroundColor = '#FFFFFF0F'; // Converted from rgba(255,255,255,0.06)
  };

  const handleMouseLeave = (index?: number, e?: React.MouseEvent<HTMLDivElement>) => {
    if (index !== undefined) setHoveredIndex(null);
    if (e) (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
  };

  const headerStyle: React.CSSProperties = {
    width: '100%', // Changed from fixed 216px for responsiveness
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily:
      '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: iconColor,
    borderRadius: '4px',
    cursor: 'pointer',
    paddingLeft: '6px',
    transition: 'background-color 200ms',
  };

  const itemStyle = (index: number): React.CSSProperties => ({
    width: '100%',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '0 6px',
    fontFamily:
      '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
    fontSize: '13px',
    fontWeight: 450,
    lineHeight: 'normal',
    color: textColor,
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 200ms, color 200ms, opacity 250ms, transform 250ms',
    opacity: open ? 1 : 0,
    transform: open ? 'translateY(0px)' : 'translateY(-2px)',
    transitionDelay: open ? `${50 + index * 50}ms` : '0ms',
    backgroundColor: 'transparent',
  });

  return (
    <div style={{ width: '100%' }} className="flex flex-col p-2">
      {/* Try Header */}
      <div
        style={headerStyle}
        onClick={() => setOpen(!open)}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF0F')} // Converted from rgba(255,255,255,0.06)
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        className="flex justify-start items-center"
      >
        <span>Try</span>
        {open ? (
          <ChevronDown className="w-3 h-3" color={iconColor} />
        ) : (
          <ChevronRight className="w-3 h-3" color={iconColor} />
        )}
      </div>

      {/* Collapsible Content */}
      <div
        ref={contentRef}
        style={{
          height: open ? '96px' : '0px',
          overflow: 'hidden',
          transition: 'height 300ms ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%', // Changed from fixed 216px for responsiveness
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.label}
            style={itemStyle(index)}
            className="flex items-center transition-colors duration-200 w-full"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={(e) => handleMouseLeave(index, e)}
          >
            <item.Icon
              className="w-4 h-4 transition-colors duration-200"
              color={hoveredIndex === index ? iconHoverColor : iconColor}
            />
            <span>{item.label}</span>
          </div>
        ))}

        {children && <div className="mt-1">{children}</div>}
      </div>
    </div>
  );
}
