'use client';

import { Ellipsis as LucideEllipsis } from 'lucide-react';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof LucideEllipsis> & {
  className?: string;
  color?: string;
  size?: number;
};

export default function Ellipsis({ className, color, size = 12, ...props }: Props) {
  return <LucideEllipsis className={className} color={color} size={size} {...props} />;
}
