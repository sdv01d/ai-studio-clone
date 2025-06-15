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
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-[#E2E2E5] focus:bg-[#E2E2E5] transition-colors group ${
            rightPanel === idx ? "ring-2 ring-[#7A98E6]" : ""
          }`}
          onClick={() => setRightPanel(rightPanel === idx ? null : idx)}
          aria-label={label}
        >
          <Icon className="h-7 w-7 text-[#A8ABB4] group-hover:text-[#232326] group-focus:text-[#232326]" />
        </button>
      ))}
    </aside>
  );
}
