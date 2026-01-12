'use client';

import { Box as LucideBox } from 'lucide-react';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof LucideBox> & {
  className?: string;
  color?: string;
  size?: number;
};

export default function Box({ className, color, size = 12, ...props }: Props) {
  return <LucideBox className={className} color={color} size={size} {...props} />;
}
