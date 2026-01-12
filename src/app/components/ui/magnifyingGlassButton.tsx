"use client";

import { Search } from "lucide-react";

interface MagnifyingGlassButtonProps {
  className?: string;
  color?: string;
}

export default function MagnifyingGlassButton({ className, color }: MagnifyingGlassButtonProps) {
  return <Search className={className} color={color} />;
}
