import React, { useState } from "react";
import CornerDownRightIcon from "@/app/components/ui/corner_down_right";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full max-w-[776px] h-[55px] flex items-center pl-[12px] cursor-pointer rounded-md transition-colors duration-200
        ${selected ? "bg-[#1E1F22]" : "bg-transparent hover:bg-[#1A1B1F]"} 
        ${className || ""}`}
      style={{ marginLeft: "4px" }}
    >
      {/* Avatar container */}
      <div className="relative w-[32px] h-[32px] flex-shrink-0">
        <div className="w-full h-full bg-gray-300 rounded-full" />
        {/* Corner badge */}
        <div
          className="absolute bottom-0 right-0 w-[16px] h-[16px] rounded-full flex items-center justify-center border border-black shadow-md"
          style={{ backgroundColor: "#292B32" }}
        >
          <CornerDownRightIcon color="#f8f8ff" size={10} />
        </div>
      </div>

      {/* Text container */}
      <div className="ml-3 flex flex-col justify-center overflow-hidden">
        {/* Title */}
        <span
          className={`text-[14px] font-normal leading-[20px] truncate transition-colors duration-200
            ${selected ? "text-white" : "text-[#B0B0B0]"}`}
          style={{
            fontFamily:
              '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
          }}
        >
          LLM Chatbot
        </span>

        {/* Subtitle */}
        <span
          className={`text-[12px] font-[450] leading-normal whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-200
            ${selected ? "text-gray-300" : "text-[#808080]"}`}
          style={{
            fontFamily:
              '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
          }}
        >
          added as a project member by akirayagami665@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Contact;
