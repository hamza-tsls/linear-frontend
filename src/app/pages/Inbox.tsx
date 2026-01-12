import { MainLayout } from "@/app/components/layout/MainLayout";
import { IssueCard, Issue } from "@/app/components/issues/IssueCard";

const mockIssues: Issue[] = [
  {
    id: "1",
    key: "LIN-1",
    title: "Implement dark mode for the application",
    description: "Add dark theme support across all pages and components",
    status: "in_progress",
    priority: "high",
    project: { name: "Design System", key: "DES" },
    assignee: { name: "Sarah Chen", avatar: "" },
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    key: "LIN-2",
    title: "Fix responsive design on mobile",
    description: "Mobile layout is broken on screens under 400px width",
    status: "todo",
    priority: "urgent",
    project: { name: "Website", key: "WEB" },
    assignee: { name: "Mike Johnson", avatar: "" },
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    key: "LIN-3",
    title: "Update documentation for API v2",
    description: "Complete API documentation with examples and use cases",
    status: "todo",
    priority: "medium",
    project: { name: "Mobile App", key: "MOB" },
    assignee: undefined,
    createdAt: "2024-01-13",
  },
  {
    id: "4",
    key: "LIN-4",
    title: "Optimize database queries",
    description: "Reduce query time by 50% for user list endpoint",
    status: "done",
    priority: "high",
    project: { name: "Design System", key: "DES" },
    assignee: { name: "Emma Wilson", avatar: "" },
    createdAt: "2024-01-12",
  },
  {
    id: "5",
    key: "LIN-5",
    title: "Add two-factor authentication",
    description: "Implement 2FA with TOTP support",
    status: "in_progress",
    priority: "high",
    project: { name: "Website", key: "WEB" },
    assignee: { name: "Alex Kim", avatar: "" },
    createdAt: "2024-01-11",
  },
  {
    id: "6",
    key: "LIN-6",
    title: "Create onboarding flow for new users",
    description: "Design and implement guided tutorial for first-time users",
    status: "todo",
    priority: "medium",
    project: { name: "Mobile App", key: "MOB" },
    assignee: undefined,
    createdAt: "2024-01-10",
  },
];

export default function Inbox() {
  return (
    <MainLayout title="Inbox" subtitle="Your notifications and assigned issues">
      <div className="bg-background">
        {mockIssues.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 text-5xl">📭</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No issues
            </h3>
            <p className="text-muted-foreground">
              You're all caught up! No issues assigned to you right now.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {mockIssues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
