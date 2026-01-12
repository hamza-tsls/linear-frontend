'use client';

import MagnifyingGlassButton from '@/app/components/ui/magnifyingGlassButton';
import EditButton from '@/app/components/ui/editButton';
import ChevronDown from '@/app/components/ui/chevronDown';
import Focus from '@/app/components/ui/focus';
import Inbox from '@/app/components/ui/inbox';
import { useState } from 'react';

interface HeadingProps {
  workspaceName?: string;
}

export function Heading({ workspaceName = 'Workspace' }: HeadingProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 0: Inbox, 1: My Issues
  const initials =
    workspaceName
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || workspaceName.slice(0, 2).toUpperCase();

  const iconColor = '#939496';
  const iconHoverColor = '#ffffff';

  const handleMouseEnter = (index?: number, e?: React.MouseEvent<HTMLDivElement>) => {
    if (index !== undefined) setHoveredIndex(index);
    if (e) (e.currentTarget as HTMLDivElement).style.backgroundColor = '#FFFFFF0F'; // Converted from rgba(255,255,255,0.06)
  };

  const handleMouseLeave = (index?: number, e?: React.MouseEvent<HTMLDivElement>) => {
    if (index !== undefined) setHoveredIndex(null);
    if (e) (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Top Header Row */}
      <div className="flex justify-between items-center w-full">
        {/* Workspace Button */}
        <div
          className="flex items-center justify-between px-2 rounded-sm cursor-pointer transition-colors duration-200"
          style={{ height: '28px', maxWidth: '160px', backgroundColor: 'transparent' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF0F')} // Converted from rgba(255,255,255,0.06)
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <div
            className="flex items-center justify-center w-5 h-5 rounded-sm text-white text-xs font-semibold"
            style={{ backgroundColor: '#a63521' }}
          >
            {initials}
          </div>
          <span
            className="flex-1 truncate px-1"
            style={{
              fontFamily:
                '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '23px',
              color: '#E5E5E5', // Converted from lch(90.421 1 272)
            }}
          >
            {workspaceName}
          </span>
          <ChevronDown className="w-3 h-3" color="#939496" />
        </div>

        {/* Right Buttons */}
        <div className="flex justify-end items-center gap-2">
          <div
            style={{ width: '28px', height: '28px' }}
            className="flex justify-center items-center rounded-lg cursor-pointer transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF0F')} // Converted from rgba(255,255,255,0.06)
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <MagnifyingGlassButton className="w-4 h-4" color="#939496" />
          </div>

          <div
            style={{ width: '28px', height: '28px', backgroundColor: '#1f2126' }}
            className="flex justify-center items-center rounded-lg cursor-pointer transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2a2c31')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1f2126')}
          >
            <EditButton className="w-4 h-4" color="#ffffff" />
          </div>
        </div>
      </div>

      {/* Bottom Row: Inbox and My Issues */}
      <div
        style={{ width: '100%', height: 'auto' }} // Changed from fixed width/height for responsiveness
        className="flex flex-col justify-between p-[5px] gap-1" // Added gap for spacing
      >
        {/* Inbox */}
        <div
          style={{ width: '100%', height: '28px' }} // Changed from fixed width
          className="flex items-center justify-start gap-2 rounded-sm px-2 cursor-pointer transition-colors duration-200"
          onMouseEnter={(e) => handleMouseEnter(0, e)}
          onMouseLeave={(e) => handleMouseLeave(0, e)}
        >
          <Inbox className="w-4 h-4 transition-colors duration-200" color={hoveredIndex === 0 ? iconHoverColor : iconColor} />
          <span
            style={{
              fontFamily:
                '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
              fontSize: '13px',
              fontWeight: 450,
              lineHeight: 'normal',
              color: '#E5E5E5', // Converted from lch(90.421 1 272)
            }}
          >
            Inbox
          </span>
        </div>

        {/* My Issues */}
        <div
          style={{ width: '100%', height: '28px' }} // Changed from fixed width
          className="flex items-center justify-start gap-2 rounded-sm px-2 cursor-pointer transition-colors duration-200"
          onMouseEnter={(e) => handleMouseEnter(1, e)}
          onMouseLeave={(e) => handleMouseLeave(1, e)}
        >
          <Focus className="w-4 h-4 transition-colors duration-200" color={hoveredIndex === 1 ? iconHoverColor : iconColor} />
          <span
            style={{
              fontFamily:
                '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
              fontSize: '13px',
              fontWeight: 450,
              lineHeight: 'normal',
              color: '#E5E5E5', // Converted from lch(90.421 1 272)
            }}
          >
            My Issues
          </span>
        </div>
      </div>
    </div>
  );
}