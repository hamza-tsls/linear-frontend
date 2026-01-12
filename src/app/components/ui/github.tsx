import { Github } from "lucide-react";

interface GithubIconProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function GithubIcon({
  className,
  color,
  size = 16,
}: GithubIconProps) {
  return <Github className={className} color={color} size={size} />;
}
