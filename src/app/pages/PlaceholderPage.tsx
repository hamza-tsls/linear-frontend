import { MainLayout } from "@/app/components/layout/MainLayout";

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export function PlaceholderPage({ title, subtitle, icon = "📄" }: PlaceholderPageProps) {
  return (
    <MainLayout title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 text-6xl">{icon}</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-md">
          This page is coming soon. Keep building amazing things!
        </p>
      </div>
    </MainLayout>
  );
}
