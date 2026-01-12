"use client";

import { SquarePen } from "lucide-react";

interface EditButtonProps {
  className?: string;
  color?: string;
}

export default function EditButton({ className, color }: EditButtonProps) {
  return <SquarePen className={className} color={color} />;
}
