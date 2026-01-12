import React from "react";
import Inbox from "@/app/components/landing_page_components/inbox/page";
import "@/app/styles/ScreenEffects.css";

const Screen: React.FC = () => {
  return (
    <div className="screen-3d-perspective">
      <div className="screen-3d">
        <Inbox />
      </div>
    </div>
  );
};

export default Screen;
