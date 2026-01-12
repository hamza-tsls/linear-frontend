'use client';

import MagnifyingGlassButton from '@/app/components/ui/magnifyingGlassButton';
import EditButton from '@/app/components/ui/editButton';
import ChevronDown from '@/app/components/ui/chevronDown';
import Focus from '@/app/components/ui/focus';
import Inbox from '@/app/components/ui/inbox';
import { ReactNode } from 'react';

interface HeadingProps {
  workspaceName?: string;
}

export function Heading({ workspaceName = 'Workspace' }: HeadingProps) {
  const initials =
    workspaceName
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || workspaceName.slice(0, 2).toUpperCase();

  const iconColor = '#939496';
  const selectedColor = '#FFFFFF'; // Color for selected item
  const textColor = '#E5E5E5';

  const headerStyle: React.CSSProperties = {
    width: '100%',
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
    cursor: 'default',
    paddingLeft: '6px',
    justifyContent: 'space-between',
  };

  const rowStyle: React.CSSProperties = {
    width: '100%',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '0 8px',
    borderRadius: '4px',
    cursor: 'default',
    backgroundColor: '#FFFFFF0F', // Active background for Inbox
  };

  const itemTextStyle: React.CSSProperties = {
    fontFamily:
      '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
    fontSize: '13px',
    fontWeight: 450,
    lineHeight: 'normal',
    color: textColor,
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Top Header Row */}
      <div className="flex justify-between items-center w-full">
        {/* Workspace Button */}
        <div
          className="flex items-center justify-between px-2 rounded-sm"
          style={{ height: '28px', maxWidth: '160px', backgroundColor: 'transparent' }}
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
              color: '#E5E5E5',
            }}
          >
            {workspaceName}
          </span>
          <ChevronDown className="w-3 h-3" color={iconColor} />
        </div>

        {/* Right Buttons */}
        <div className="flex justify-end items-center gap-2">
          <div
            style={{ width: '28px', height: '28px' }}
            className="flex justify-center items-center rounded-lg"
          >
            <MagnifyingGlassButton className="w-4 h-4" color={iconColor} />
          </div>

          <div
            style={{ width: '28px', height: '28px', backgroundColor: '#1f2126' }}
            className="flex justify-center items-center rounded-lg"
          >
            <EditButton className="w-4 h-4" color="#ffffff" />
          </div>
        </div>
      </div>

      {/* Bottom Row: Inbox and My Issues */}
      <div
        style={{ width: '100%' }}
        className="flex flex-col justify-between gap-1 p-[5px]"
      >
        {/* Inbox (always selected) */}
        <div style={rowStyle} className="flex items-center w-full">
          <Inbox className="w-4 h-4" color={selectedColor} />
          <span
            style={{
              ...itemTextStyle,
              color: selectedColor, // Text color for selected
            }}
          >
            Inbox
          </span>
        </div>

        {/* My Issues (normal) */}
        <div style={{ ...rowStyle, backgroundColor: 'transparent' }} className="flex items-center w-full">
          <Focus className="w-4 h-4" color={iconColor} />
          <span style={itemTextStyle}>My Issues</span>
        </div>
      </div>
    </div>
  );
}
