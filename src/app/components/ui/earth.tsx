import { Earth } from 'lucide-react';

interface EarthIconProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function EarthIcon({ className, color, size = 16 }: EarthIconProps) {
  return <Earth className={className} color={color} size={size} />;
}
