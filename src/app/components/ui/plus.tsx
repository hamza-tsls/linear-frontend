import { Plus } from 'lucide-react';

interface PlusProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function PlusIcon({
  className,
  color,
  size = 12,
}: PlusProps) {
  return <Plus className={className} color={color} size={size} />;
}
