// src/app/components/ui/inbox.tsx
"use client";

import { Inbox as LucideInbox } from "lucide-react";

interface InboxProps {
  className?: string;
  color?: string;
}

export default function Inbox({ className, color }: InboxProps) {
  return <LucideInbox className={className} color={color} />;
}
