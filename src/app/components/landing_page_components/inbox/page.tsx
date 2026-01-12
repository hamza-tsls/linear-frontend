'use client';

import { MainLayout } from "@/app/components/landing_page_components/layout/MainLayout";
import FirstHalf from "@/app/components/landing_page_components/Inbox/first_half";
import SecondHalf from "@/app/components/landing_page_components/Inbox/second_half";
import { Panel, PanelGroup } from "react-resizable-panels";

export default function Inbox() {
  return (
    <MainLayout>
      <div className="flex-1 h-full">
        <PanelGroup 
          direction="horizontal" 
          autoSaveId="inbox-panel-layout"
          className="h-full w-full bg-[#101012]"
        >
          
          {/* Left Panel - fixed 40% */}
          <Panel 
            defaultSize={40} 
            minSize={40} 
            maxSize={40} 
            className="h-full"
          >
            <FirstHalf />
          </Panel>

          {/* Dead Divider for visual border only */}
          <div
            className="h-full pointer-events-none select-none"
            style={{
              width: '0.5px',
              backgroundColor: '#222429',
            }}
          />

          {/* Right Panel - remaining 60% */}
          <Panel className="h-full">
            <SecondHalf />
          </Panel>

        </PanelGroup>
      </div>
    </MainLayout>
  );
}
