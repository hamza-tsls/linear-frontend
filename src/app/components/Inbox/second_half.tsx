"use client";

import React from "react";
import Inbox from "@/app/components/ui/inbox";

const SecondHalf: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-4">
      <Inbox 
        className="w-30 h-30 sm:w-16 sm:h-16 md:w-32 md:h-32 stroke-[0.3]" 
        color="#ffffffff" // Converted from lch(62.6 1.35 272)
      />
      <span
        className="mt-2 text-[13px] font-medium text-[#ffffffa4] text-center"
        style={{
          fontFamily: `"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif`,
          lineHeight: "normal",
        }}
      >
        No unread notifications
      </span>
    </div>
  );
};

export default SecondHalf;
        