'use client';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header
      className="w-full pl-0 md:pl-[244px]"
      style={{
        height: "8px",
        backgroundColor: "#0a0a0a",
        borderTop: "0.5px solid #222429",    // Top border
        borderBottom: "0.5px solid #222429", // Bottom border
        borderTopRightRadius: "16px",        // Rounded top-right corner
        boxSizing: "border-box",
      }}
    >
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
