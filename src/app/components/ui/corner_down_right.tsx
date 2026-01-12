import { CornerDownRight } from "lucide-react";

interface CornerDownRightProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function CornerDownRightIcon({ className, color, size = 12 }: CornerDownRightProps) {
  return <CornerDownRight className={className} color={color} size={size} />;
}
