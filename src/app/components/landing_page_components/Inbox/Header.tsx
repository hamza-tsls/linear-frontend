'use client';

import { useState } from 'react';
import SlidersHorizontalIcon from '@/app/components/ui/sliders';
import ListFilterIcon from '@/app/components/ui/filter';

interface InboxItemProps {
  className?: string;
}

export default function InboxItem({ className }: InboxItemProps) {
  const [hovered, setHovered] = useState<{ filter: boolean; slider: boolean }>({
    filter: false,
    slider: false,
  });

  const iconColor = '#939496';
  const iconHoverColor = '#ffffff';

  return (
    <div
      className={`flex items-center justify-between w-full h-[39px] border-b border-b-[#222429] ${className ?? ''}`}
    >
      {/* Left side: Inbox label */}
      <span
        className="ml-4 text-[13px] sm:text-[14px] md:text-[15px] font-medium"
        style={{
          fontFamily:
            '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
          lineHeight: 'normal',
          color: '#ffffff',
        }}
      >
        Inbox
      </span>

      {/* Right side: Filter & Slider icons */}
      <div className="flex items-center space-x-2 mr-4">
        {/* Filter icon */}
        <div
          className="flex justify-center items-center w-6 h-6 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/6"
          onMouseEnter={() => setHovered((prev) => ({ ...prev, filter: true }))}
          onMouseLeave={() => setHovered((prev) => ({ ...prev, filter: false }))}
        >
          <ListFilterIcon
            className="w-4 h-4"
            color={hovered.filter ? iconHoverColor : iconColor}
          />
        </div>

        {/* Slider icon */}
        <div
          className="flex justify-center items-center w-6 h-6 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-white/6"
          onMouseEnter={() => setHovered((prev) => ({ ...prev, slider: true }))}
          onMouseLeave={() => setHovered((prev) => ({ ...prev, slider: false }))}
        >
          <SlidersHorizontalIcon
            className="w-4 h-4"
            color={hovered.slider ? iconHoverColor : iconColor}
          />
        </div>
      </div>
    </div>
  );
}
