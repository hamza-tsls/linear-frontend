import { Copy } from "lucide-react";

interface CopyIconProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function CopyIcon({ className, color, size = 12 }: CopyIconProps) {
  return <Copy className={className} color={color} size={size} />;
}
