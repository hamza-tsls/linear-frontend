'use client';

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import ChevronDown from '@/app/components/ui/chevronDown';
import ChevronRight from '@/app/components/ui/chevronRIght';
import Plus from '@/app/components/ui/plus';
import Earth from '@/app/components/ui/earth';
import Box from '@/app/components/ui/box';
import Layers from '@/app/components/ui/layers';
import CopyIcon from '@/app/components/ui/copy';

interface TeamsProps {
  children?: ReactNode;
}

export default function Teams({ children }: TeamsProps) {
  const [openTeams, setOpenTeams] = useState(true);
  const [rowHoveredTeams, setRowHoveredTeams] = useState(false);
  const [plusHoveredTeams, setPlusHoveredTeams] = useState(false);
  const [chevronHoveredTeams, setChevronHoveredTeams] = useState(false);

  // New state to control overflow visibility
  const [teamsOverflowVisible, setTeamsOverflowVisible] = useState(true);

  const [openWorkspace, setOpenWorkspace] = useState(false);
  const [chevronHoveredWorkspace, setChevronHoveredWorkspace] = useState(false);
  
  const [hoveredWorkspaceItem, setHoveredWorkspaceItem] = useState<number | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const iconColor = '#939496';
  const iconHoverColor = '#ffffff';
  const textColor = '#E5E5E5'; // Converted from lch(90.421 1 272)

  const workspaceItems = [
    { label: 'Issues', Icon: CopyIcon },
    { label: 'Projects', Icon: Box },
    { label: 'Views', Icon: Layers },
  ];

  // Logic to handle overflow timing
  useEffect(() => {
    if (openTeams) {
      // If opening, wait for transition (300ms) to finish, then allow overflow
      const timer = setTimeout(() => {
        setTeamsOverflowVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // If closing, hide overflow IMMEDIATELY so content doesn't spill out
      setTeamsOverflowVisible(false);
    }
  }, [openTeams]);

  const headerStyle = {
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

  const itemStyle = (index: number, isOpen: boolean) => ({
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
    cursor: 'pointer',
    backgroundColor: hoveredWorkspaceItem === index ? '#FFFFFF0F' : 'transparent', // Converted from rgba
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0px)' : 'translateY(-4px)',
    transition: 'opacity 250ms ease, transform 250ms ease, color 200ms, background-color 200ms',
    transitionDelay: isOpen ? `${index * 60 + 50}ms` : '0ms',
    paddingLeft: '18px', 
    paddingRight: '6px',
  });

  const teamsChildStyle = {
    opacity: openTeams ? 1 : 0,
    transform: openTeams ? 'translateY(0px)' : 'translateY(-4px)',
    transition: 'opacity 250ms ease, transform 250ms ease',
    transitionDelay: openTeams ? '50ms' : '0ms',
  };

  return (
    <div style={{ width: '100%' }} className="flex flex-col px-2">
      {/* Your Teams Header */}
      <div
        style={{
          ...headerStyle,
          backgroundColor: rowHoveredTeams ? '#FFFFFF0F' : 'transparent', // Converted from rgba
        }}
        onClick={() => {
          setOpenTeams(!openTeams);
          if (openTeams) {
            setOpenWorkspace(false);
          }
        }}
        onMouseEnter={() => setRowHoveredTeams(true)}
        onMouseLeave={() => {
          setRowHoveredTeams(false);
          setPlusHoveredTeams(false);
          setChevronHoveredTeams(false);
        }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-[4px]">
          <span>Your teams</span>
          <div
            className="w-[28px] h-[28px] flex items-center justify"
            onMouseEnter={(e) => {
              e.stopPropagation();
              setChevronHoveredTeams(true);
            }}
            onMouseLeave={() => setChevronHoveredTeams(false)}
          >
            {openTeams ? (
              <ChevronDown
                className="w-3 h-3 transition-colors duration-200"
                color={chevronHoveredTeams ? iconHoverColor : iconColor}
              />
            ) : (
              <ChevronRight
                className="w-3 h-3 transition-colors duration-200"
                color={chevronHoveredTeams ? iconHoverColor : iconColor}
              />
            )}
          </div>
        </div>

        <div
          className="w-[28px] h-[28px] flex items-center justify-center transition-opacity duration-200"
          style={{ opacity: rowHoveredTeams ? 1 : 0 }}
          onMouseEnter={(e) => {
            e.stopPropagation();
            setPlusHoveredTeams(true);
          }}
          onMouseLeave={() => setPlusHoveredTeams(false)}
          onClick={(e) => e.stopPropagation()}
        >
          <Plus
            className="w-3 h-3 transition-colors duration-200"
            color={plusHoveredTeams ? iconHoverColor : iconColor}
          />
        </div>
      </div>

      {/* Collapsible Workspace */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: openTeams ? '1fr' : '0fr',
          transition: 'grid-template-rows 300ms ease',
        }}
      >
        {/* FIX: overflow logic is now conditional.
           It is 'hidden' when closed or animating. 
           It becomes 'visible' 300ms after opening.
        */}
        <div style={{ overflow: teamsOverflowVisible ? 'visible' : 'hidden' }}>
          <div style={{ ...teamsChildStyle, width: '100%' }}> {/* Changed width for responsiveness */}
            
            {/* Workspace Header */}
            <div
              style={{
                ...headerStyle,
                fontSize: '13px',
                color: '#FFFFFF', // Converted from lch(100 0 272)
                backgroundColor: 'transparent',
                paddingLeft: '6px'
              }}
              onClick={() => setOpenWorkspace(!openWorkspace)}
              className="flex items-center" 
            >
              <div className="flex items-center gap-[4px]">
                <Earth className="w-4 h-4" />
                <span>Workspace</span>
              </div>
              
              <div
                className="w-[28px] h-[28px] flex items-center justify-center"
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setChevronHoveredWorkspace(true);
                }}
                onMouseLeave={() => setChevronHoveredWorkspace(false)}
              >
                {openWorkspace ? (
                  <ChevronDown
                    className="w-3 h-3 transition-colors duration-200"
                    color={chevronHoveredWorkspace ? iconHoverColor : iconColor}
                  />
                ) : (
                  <ChevronRight
                    className="w-3 h-3 transition-colors duration-200"
                    color={chevronHoveredWorkspace ? iconHoverColor : iconColor}
                  />
                )}
              </div>
            </div>

            {/* Inner Collapsible Content */}
            <div
              ref={contentRef}
              style={{
                height: openWorkspace ? `${workspaceItems.length * 28}px` : '0px',
                // Note: Inner content might also need this logic if items have hover effects that go outside.
                // For now, keeping your original 'hidden' here as it wasn't the main cause of the spacing issue.
                overflow: 'hidden', 
                transition: 'height 300ms ease',
                display: 'flex',
                flexDirection: 'column',
                width: '100%', // Changed from fixed 216px for responsiveness
              }}
            >
              {workspaceItems.map((item, index) => (
                <div 
                  key={item.label} 
                  style={itemStyle(index, openWorkspace)} 
                  className="flex items-center w-full"
                  onMouseEnter={() => setHoveredWorkspaceItem(index)}
                  onMouseLeave={() => setHoveredWorkspaceItem(null)}
                >
                  <item.Icon 
                    className="w-4 h-4 transition-colors duration-200" 
                    color={hoveredWorkspaceItem === index ? iconHoverColor : iconColor} 
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
