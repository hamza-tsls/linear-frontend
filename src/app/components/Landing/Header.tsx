"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import React from "react";

export function Header() {
  const navLinks = ["Product", "Resources", "Pricing", "Customers", "Now", "Contact"];
  const transition = "all 180ms cubic-bezier(0.25, 0.1, 0.25, 1)";

  const ghostStyle = {
    backgroundColor: "transparent",
    color: "#8a8f98",
    borderRadius: "8px",
    padding: "0px 12px",
    fontSize: "13px",
    fontWeight: 510,
    lineHeight: "19.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition,
  };

  return (
    <header
      className="w-full sticky top-0 z-50 flex justify-center shadow-sm"
      style={{
        backgroundColor: "#090a0a",
        height: "64px",
        fontFamily:
          '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      {/* Bottom divider line */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[1px]"
        style={{ backgroundColor: "#1e1f1f" }}
      />

      <div
        className="flex items-center justify-between relative z-10"
        style={{
          width: "100%", // Changed from fixed 1024px for responsiveness
          maxWidth: "1024px", // Maintains original max width
          height: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Logo */}
        <div className="flex items-center pr-4 gap-2">
          <img
            src="/Linear-Brand-Assets/logo-light.svg"
            alt="Linear Logo"
            className="h-5 w-auto"
          />
          <span className="text-lg font-semibold text-white">Linear</span>
        </div>

        {/* Center Navigation */}
        {/* Added hidden md:flex to hide links on mobile to prevent overflow/breaking */}
        <nav className="flex-1 hidden md:flex justify-center gap-2.5 ml-2">
          {navLinks.map((link) => (
            <Button
              key={link}
              variant="ghost"
              size="sm"
              style={ghostStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF0F"; // Converted from rgba(255,255,255,0.06)
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {link}
            </Button>
          ))}
        </nav>

        {/* Login / Sign up */}
        <div className="flex items-center gap-2 pl-4">
          {/* LOGIN → /inbox */}
          <Link href="/inbox">
            <Button
              variant="ghost"
              size="sm"
              style={ghostStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF0F"; // Converted from rgba(255,255,255,0.06)
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Login
            </Button>
          </Link>

          {/* SIGN UP */}
          <Button
            size="sm"
            style={{
              backgroundColor: "#e6e6e6",
              borderColor: "#e6e6e6",
              borderWidth: "1.33333px",
              borderStyle: "solid",
              borderRadius: "8px",
              color: "#08090a",
              padding: "0px 12px",
              fontSize: "13px",
              fontWeight: 510,
              lineHeight: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "#00000000 0px 8px 2px 0px", // Converted from rgba(0,0,0,0.00)
              transition,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d9d9d9";
              e.currentTarget.style.borderColor = "#d9d9d9";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "#0000001A 0px 4px 12px"; // Converted from rgba(0,0,0,0.10)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e6e6e6";
              e.currentTarget.style.borderColor = "#e6e6e6";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "#00000000 0px 8px 2px 0px"; // Converted from rgba(0,0,0,0.00)
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}