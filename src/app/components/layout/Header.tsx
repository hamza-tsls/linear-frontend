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
        borderBottom: "1px solid #222429",
        borderBottomRightRadius: "16px",
        boxSizing: "border-box",
      }}
    >
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
