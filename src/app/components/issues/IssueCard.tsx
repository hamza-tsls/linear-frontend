import Link from "next/link";
import { ChevronRight, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Issue {
  id: string;
  key: string;
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high" | "urgent";
  assignee?: {
    name: string;
    avatar: string;
  };
  project: {
    name: string;
    key: string;
  };
  createdAt: string;
}

interface IssueCardProps {
  issue: Issue;
  onClick?: () => void;
}

const statusConfig = {
  todo: { label: "To do", color: "bg-gray-100 text-gray-800" },
  in_progress: { label: "In progress", color: "bg-blue-100 text-blue-800" },
  done: { label: "Done", color: "bg-green-100 text-green-800" },
};

const priorityConfig = {
  low: { label: "Low", color: "text-gray-500" },
  medium: { label: "Medium", color: "text-orange-500" },
  high: { label: "High", color: "text-red-500" },
  urgent: { label: "Urgent", color: "text-red-600" },
};

export function IssueCard({ issue, onClick }: IssueCardProps) {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Link
      href={`/issue/${issue.id}`}
      onClick={handleClick}
      className="block group"
    >
      <div className="px-6 py-4 border-b border-border hover:bg-secondary transition-colors cursor-pointer flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              {issue.project.key}-{issue.key}
            </span>
            <span
              className={cn(
                "text-xs font-medium px-2 py-1 rounded",
                statusConfig[issue.status].color
              )}
            >
              {statusConfig[issue.status].label}
            </span>
            {issue.priority !== "low" && (
              <span
                className={cn("text-xs font-medium", priorityConfig[issue.priority].color)}
              >
                {priorityConfig[issue.priority].label}
              </span>
            )}
          </div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {issue.title}
          </h3>
          {issue.description && (
            <p className="text-sm text-muted-foreground truncate mt-1">
              {issue.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {issue.assignee && (
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
              title={issue.assignee.name}
            >
              {issue.assignee.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
          <ChevronRight
            size={18}
            className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </Link>
  );
}
