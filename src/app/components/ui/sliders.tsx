import { SlidersHorizontal } from "lucide-react";

interface SlidersHorizontalProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function SlidersHorizontalIcon({ className, color, size = 12 }: SlidersHorizontalProps) {
  return <SlidersHorizontal className={className} color={color} size={size} />;
}
