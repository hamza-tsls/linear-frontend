'use client';

import { MainLayout } from "@/app/components/layout/MainLayout";
import FirstHalf from "@/app/components/Inbox/first_half";
import SecondHalf from "@/app/components/Inbox/second_half";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function Inbox() {
  return (
    <MainLayout>
      <div className="flex-1 h-full"> {/* ensures panels fit remaining space */}
        <PanelGroup
          direction="horizontal"
          autoSaveId="inbox-panel-layout"
          className="h-full w-full bg-[#101012]"
        >
          {/* Left Panel */}
          <Panel defaultSize={30} minSize={20} maxSize={50} className="h-full">
            <FirstHalf />
          </Panel>

          {/* Resize Handle */}
          <PanelResizeHandle className="relative w-2 -ml-1 flex items-center justify-center outline-none transition-colors group z-10">
            <div className="h-full w-[1px] bg-[#222429] transition-colors group-hover:bg-[#44464A] group-active:bg-[#44464A]" />
          </PanelResizeHandle>

          {/* Right Panel */}
          <Panel className="h-full">
            <SecondHalf />
          </Panel>
        </PanelGroup>
      </div>
    </MainLayout>
  );
}
