import React from "react";
import {
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const icons = [
  { icon: AdjustmentsHorizontalIcon, label: "Settings" },
  { icon: Squares2X2Icon, label: "Apps" },
];

interface RightSidebarProps {
  rightPanel: number | null;
  setRightPanel: (idx: number | null) => void;
}

export default function RightSidebar({
  rightPanel,
  setRightPanel,
}: RightSidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col items-center justify-start bg-[#181818] w-16 py-6 gap-6 rounded-r-3xl h-full z-20">
      {icons.map(({ icon: Icon, label }, idx) => (
        <button
          key={label}
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-[#343434] transition-colors group ${
            rightPanel === idx
              ? "focus:bg-[#343434] focus:text-[#E2E2E5]"
              : "text-[#A8ABB4]"
          }`}
          onClick={() => setRightPanel(rightPanel === idx ? null : idx)}
          aria-label={label}
        >
          <Icon className="h-5 w-5 group-hover:text-[#E2E2E5]" />
        </button>
      ))}
    </aside>
  );
}
