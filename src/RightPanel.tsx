import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface RightPanelProps {
  rightPanel: number | null;
  setRightPanel: (idx: number | null) => void;
}

const panelContent = [
  {
    label: "Run Settings",
    content: "Settings panel content goes here.",
  },
  {
    label: "Apps",
    content: "Apps panel content goes here.",
  },
];

export default function RightPanel({
  rightPanel,
  setRightPanel,
}: RightPanelProps) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out bg-[#1E1E1E] h-full rounded-3xl flex flex-col z-10 ${
        rightPanel !== null ? "w-72" : "w-0"
      }`}
      style={{
        minWidth: rightPanel !== null ? "18rem" : "0",
      }}
    >
      {rightPanel !== null && (
        <>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm font-semibold text-[#E2E2E5]">
              {panelContent[rightPanel].label}
            </span>
            <button
              className="p-2 rounded-full hover:bg-[#343434] text-[#A8ABB4]"
              onClick={() => setRightPanel(null)}
              aria-label="Close panel"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 px-4 py-2 text-[#A8ABB4]">
            {panelContent[rightPanel].content}
          </div>
        </>
      )}
    </div>
  );
}
