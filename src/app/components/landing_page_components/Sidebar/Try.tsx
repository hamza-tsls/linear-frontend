'use client';

import React, { ReactNode } from 'react';
import ChevronDown from '@/app/components/ui/chevronDown';
import CopyIcon from '@/app/components/ui/copy';
import PlusIcon from '@/app/components/ui/plus';
import GithubIcon from '@/app/components/ui/github';

interface TryProps {
  children?: ReactNode;
}

export default function Try({ children }: TryProps) {
  const iconColor = '#939496';
  const textColor = '#E5E5E5';

  const items = [
    { label: 'Import Issues', Icon: CopyIcon },
    { label: 'Invite people', Icon: PlusIcon },
    { label: 'Link Github', Icon: GithubIcon },
  ];

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
  };

  const itemStyle: React.CSSProperties = {
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
    cursor: 'default',
    backgroundColor: 'transparent',
  };

  return (
    <div style={{ width: '100%' }} className="flex flex-col p-2">
      {/* Try Header */}
      <div style={headerStyle} className="flex items-center gap-2">
        <span>Try</span>
        {/* ChevronDown directly next to text */}
        <ChevronDown className="w-3 h-3" color={iconColor} />
      </div>

      {/* Try Items */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '4px' }}>
        {items.map((item) => (
          <div key={item.label} style={itemStyle} className="flex items-center w-full">
            <item.Icon className="w-4 h-4" color={textColor} />
            <span>{item.label}</span>
          </div>
        ))}

        {children && <div className="mt-1">{children}</div>}
      </div>
    </div>
  );
}
