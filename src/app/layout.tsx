import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linear – Build Better Products",
  description: "A modern issue tracking and project management system.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string; // optional className for custom padding or styling
}

export default function RootLayout({ children, className = "" }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Allow parent or children to control padding via className */}
        <div className={className}>{children}</div>
      </body>
    </html>
  );
}
