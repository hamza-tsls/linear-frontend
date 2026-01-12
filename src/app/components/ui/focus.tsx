// src/app/components/ui/focus.tsx
"use client";

import { Focus as LucideFocus } from "lucide-react";

interface FocusProps {
  className?: string;
  color?: string;
}

export default function Focus({ className, color }: FocusProps) {
  return <LucideFocus className={className} color={color} />;
}
