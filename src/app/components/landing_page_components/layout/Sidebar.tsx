'use client';

import { Heading } from "@/app/components/landing_page_components/Sidebar/Heading";
import Workspace from "@/app/components/landing_page_components/Sidebar/Workspace";
import Teams from "@/app/components/landing_page_components/Sidebar/Teams";
import Try from "@/app/components/landing_page_components/Sidebar/Try";
import { usePathname } from "next/navigation";

interface SidebarProps {
  currentPath: string;
}

export function Sidebar({ currentPath }: SidebarProps) {
  console.log("Current path:", currentPath);

  const borderColor = "#222429"; // Subtle border color
  const borderRadius = "16px";   // Rounded corner

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-full md:w-[244px] bg-[#0a0a0a] z-20 px-3.5 pt-2"
      style={{
        position: 'relative',
        borderLeft: `0.5px solid ${borderColor}`, // Left border
        borderTop: `0.5px solid ${borderColor}`,  // Top border
        borderTopLeftRadius: borderRadius,        // Rounded top-left corner
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '8px',
          right: 0,
          height: `calc(100% - 8.5px)`,
          width: '1px',
          backgroundColor: '#222429',
          borderTopRightRadius: '16px',
        }}
      />
      <div className="flex flex-col">
        <Heading />
        <Workspace />
        <Teams />
        <Try />
      </div>
    </aside>
  );
}
