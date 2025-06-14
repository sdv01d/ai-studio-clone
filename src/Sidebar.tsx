import React, { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  PlayCircleIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CloudArrowDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const navItems = [
  { label: "Chat", icon: ChatBubbleLeftRightIcon },
  { label: "Stream", icon: PlayCircleIcon },
  { label: "Generate Media", icon: PhotoIcon },
  { label: "Build", icon: WrenchScrewdriverIcon },
  { label: "History", icon: ClockIcon },
  { label: "Enable saving", icon: CloudArrowDownIcon },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`bg-[#181818] flex flex-col p-3 rounded-l-3xl transition-all duration-300 ${
        collapsed ? "w-20" : "w-52"
      }`}
    >
      <div className="flex items-center justify-between mb-8 mt-4">
        <div
          className={`text-2xl font-medium text-[#D0E3FE] transition-opacity duration-200 ${
            collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
        >
          Google AI Studio
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#E2E2E5] hover:text-[#232326] transition-colors font-medium focus:outline-none text-[#A8ABB4] focus:bg-[#E2E2E5] focus:text-[#232326] ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <Icon className="h-5 w-5 text-[#A8ABB4] group-hover:text-[#232326]" />
            <span
              className={`transition-opacity duration-200 text-sm ${
                collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
      <div
        className={`mt-auto text-xs text-[#A8ABB4] pt-8 transition-opacity duration-200 ${
          collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
        }`}
      >
        This model is not stable and may not be suitable for production use.
      </div>
    </aside>
  );
}
