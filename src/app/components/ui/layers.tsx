'use client';

import { Layers as LucideLayers } from 'lucide-react';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof LucideLayers> & {
  className?: string;
  color?: string;
  size?: number;
};

export default function Layers({ className, color, size = 12, ...props }: Props) {
  return <LucideLayers className={className} color={color} size={size} {...props} />;
}
