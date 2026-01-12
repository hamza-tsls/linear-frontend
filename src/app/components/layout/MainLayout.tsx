"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

export function MainLayout({
  children,
  title,
  subtitle,
  showHeader = true,
}: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar (desktop only) */}
      <aside className="hidden md:block">
        <Sidebar currentPath={pathname} />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {showHeader && (
          <Header title={title} subtitle={subtitle} />
        )}

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
