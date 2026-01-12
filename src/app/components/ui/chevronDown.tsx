"use client";

interface ChevronDownProps {
  className?: string;
  color?: string;
}

export default function ChevronDown({ className, color }: ChevronDownProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || "#000"} // default stroke
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
