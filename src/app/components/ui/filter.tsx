import { ListFilter } from "lucide-react";

interface ListFilterProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function ListFilterIcon({ className, color, size = 12 }: ListFilterProps) {
  return <ListFilter className={className} color={color} size={size} />;
}
