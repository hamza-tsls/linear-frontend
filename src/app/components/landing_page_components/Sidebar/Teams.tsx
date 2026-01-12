'use client';

import React, { ReactNode } from 'react';
import ChevronDown from '@/app/components/ui/chevronDown';
import Earth from '@/app/components/ui/earth';
import Box from '@/app/components/ui/box';
import Layers from '@/app/components/ui/layers';
import CopyIcon from '@/app/components/ui/copy';
import Plus from '@/app/components/ui/plus';

interface TeamsProps {
  children?: ReactNode;
}

export default function Teams({ children }: TeamsProps) {
  const iconColor = '#939496';
  const textColor = '#E5E5E5';

  const workspaceItems = [
    { label: 'Issues', Icon: CopyIcon },
    { label: 'Projects', Icon: Box },
    { label: 'Views', Icon: Layers },
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
    justifyContent: 'space-between',
  };

  const itemStyle: React.CSSProperties = {
    width: '100%',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily:
      '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
    fontSize: '13px',
    fontWeight: 450,
    lineHeight: 'normal',
    color: textColor,
    borderRadius: '4px',
    cursor: 'default',
    paddingLeft: '18px',
    paddingRight: '6px',
  };

  return (
    <div style={{ width: '100%' }} className="flex flex-col px-2">
      {/* Teams Header */}
      <div style={headerStyle} className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span
            style={{
              fontFamily:
                '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: 'normal',
              color: iconColor,
            }}
          >
            Your teams
          </span>
          <ChevronDown className="w-3 h-3" color={iconColor} />
        </div>

        <Plus className="w-3 h-3" color={iconColor} />
      </div>

      {/* Workspace Section */}
      <div style={{ width: '100%', marginTop: '4px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily:
              '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: 'normal',
            color: '#FFFFFF',
          }}
        >
          <Earth className="w-4 h-4" />
          <span>Workspace</span>
          <ChevronDown className="w-3 h-3" color={iconColor} />
        </div>

        {/* Workspace Items */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '4px' }}>
          {workspaceItems.map((item) => (
            <div key={item.label} style={itemStyle} className="flex items-center w-full">
              <item.Icon className="w-4 h-4" color={textColor} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {children && <div className="mt-1">{children}</div>}
    </div>
  );
}
