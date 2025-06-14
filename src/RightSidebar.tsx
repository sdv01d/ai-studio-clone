import React from "react";
import {
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const icons = [AdjustmentsHorizontalIcon, Squares2X2Icon];

export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col items-center justify-start bg-[#181818] w-16 py-6 gap-6 rounded-r-3xl h-full">
      {icons.map((Icon, idx) => (
        <button
          key={idx}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-[#E2E2E5] focus:bg-[#E2E2E5] transition-colors group"
        >
          <Icon className="h-7 w-7 text-[#A8ABB4] group-hover:text-[#232326] group-focus:text-[#232326]" />
        </button>
      ))}
    </aside>
  );
}
