import { ChevronRight } from "lucide-react";

interface ChevronRightProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function ChevronRightIcon({ className, color, size = 12 }: ChevronRightProps) {
  return <ChevronRight className={className} color={color} size={size} />;
}
