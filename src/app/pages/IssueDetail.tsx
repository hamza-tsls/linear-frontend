import { MainLayout } from "@/app/components/layout/MainLayout";
import { useParams } from "react-router-dom";
import {
  ChevronLeft,
  Trash2,
  MoreHorizontal,
  Link as LinkIcon,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IssueDetail() {
  const { id } = useParams();

  return (
    <MainLayout showHeader={false}>
      <div className="flex h-full">
        {/* Main Content */}
        <div className="flex-1 border-r border-border overflow-y-auto">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="px-8 py-4 border-b border-border flex items-center gap-2 sticky top-0 bg-background z-5">
              <Link to="/" className="text-primary hover:underline">
                <ChevronLeft size={20} />
              </Link>
              <span className="text-sm text-muted-foreground">DES-1</span>
            </div>

            {/* Issue Header */}
            <div className="px-8 py-6 border-b border-border">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl font-bold text-foreground flex-1">
                  Implement dark mode for the application
                </h1>
                <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                  <MoreHorizontal size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-medium">
                  In Progress
                </span>
                <span className="text-red-600 font-medium">High</span>
                <span>Created on Jan 15, 2024</span>
              </div>
            </div>

            {/* Issue Body */}
            <div className="px-8 py-6">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Description
                </h3>
                <p className="text-muted-foreground mb-4">
                  Add dark theme support across all pages and components. This
                  should include:
                </p>
                <ul className="text-muted-foreground space-y-2 ml-4 list-disc">
                  <li>Toggle in settings to switch between light and dark mode</li>
                  <li>
                    System preference detection for automatic theme selection
                  </li>
                  <li>Persistent user preference storage</li>
                  <li>Smooth transition between themes</li>
                  <li>Complete design coverage across all components</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Acceptance Criteria
                </h3>
                <ul className="text-muted-foreground space-y-2 ml-4 list-disc">
                  <li>✓ Dark mode toggle in settings page</li>
                  <li>All components have dark theme variants</li>
                  <li>Theme preference persists after refresh</li>
                  <li>System preference is respected</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-border overflow-y-auto p-6 space-y-6">
          <div>
            <label className="text-xs font-semibold uppercase text-muted-foreground mb-2 block">
              Status
            </label>
            <button className="w-full px-3 py-2 bg-blue-100 text-blue-800 rounded-md font-medium text-sm hover:bg-blue-200 transition-colors text-left">
              In Progress
            </button>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-muted-foreground mb-2 block">
              Priority
            </label>
            <button className="w-full px-3 py-2 border border-border rounded-md text-foreground text-sm hover:bg-secondary transition-colors text-left">
              High
            </button>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-muted-foreground mb-2 block">
              Assignee
            </label>
            <button className="w-full px-3 py-2 border border-border rounded-md text-foreground text-sm hover:bg-secondary transition-colors text-left flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <span>Sarah Chen</span>
            </button>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-muted-foreground mb-2 block">
              Project
            </label>
            <div className="px-3 py-2 border border-border rounded-md text-foreground text-sm">
              Design System
            </div>
          </div>

          <hr className="border-border" />

          <div className="space-y-2">
            <button className="w-full px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors">
              <LinkIcon size={16} />
              Copy link
            </button>
            <button className="w-full px-3 py-2 flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
