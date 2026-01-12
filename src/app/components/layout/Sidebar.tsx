'use client';

import { Heading } from "@/app/components/Sidebar/Heading";
import Workspace from "@/app/components/Sidebar/Workspace";
import Teams from "@/app/components/Sidebar/Teams";
import Try from "@/app/components/Sidebar/Try";
import { usePathname } from "next/navigation";

interface SidebarProps {
  currentPath: string;
}

export function Sidebar({ currentPath }: SidebarProps) {
  // You can use currentPath inside the component if needed
  console.log("Current path:", currentPath);

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-full md:w-[244px] bg-[#0a0a0a] z-20 px-3.5 pt-2"
      style={{ position: 'relative' }}
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
