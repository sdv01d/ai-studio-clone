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
      className={`bg-[#18181a] flex flex-col p-3 border-r border-[#232326] rounded-l-3xl transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <div
          className={`text-2xl font-bold text-blue-400 transition-opacity duration-200 ${
            collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
        >
          Google AI Studio
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-full hover:bg-[#232326] focus:outline-none"
        >
          <Bars3Icon className="h-6 w-6 text-gray-400" />
        </button>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#232326] transition-colors font-medium focus:outline-none text-gray-200 ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <Icon className="h-6 w-6 text-blue-400" />
            <span
              className={`transition-opacity duration-200 ${
                collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
      <div
        className={`mt-auto text-xs text-gray-500 pt-8 transition-opacity duration-200 ${
          collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
        }`}
      >
        This model is not stable and may not be suitable for production use.
      </div>
    </aside>
  );
}
