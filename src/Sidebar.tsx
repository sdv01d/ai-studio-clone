import React, { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  PlayCircleIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  CloudArrowDownIcon,
  Bars3Icon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Chat", icon: ChatBubbleLeftRightIcon, to: "/chat" },
  { label: "Stream", icon: PlayCircleIcon, to: "/stream" },
  { label: "Generate Media", icon: PhotoIcon, to: "/generate-media" },
  { label: "Build", icon: WrenchScrewdriverIcon, to: "/build" },
  { label: "History", icon: ClockIcon, to: "/history" },
  { label: "Enable saving", icon: CloudArrowDownIcon, to: "/enable-saving" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`relative bg-[#181818] flex flex-col p-3 rounded-l-3xl transition-all duration-300 ${
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
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-full transition-colors font-medium hover:bg-[#343434] hover:text-[#E2E2E5] focus:outline-none text-[#A8ABB4] text-sm ${
                collapsed ? "justify-center" : ""
              } ${
                isActive
                  ? "bg-[#343434] text-[#E2E2E5] focus:bg-[#343434] focus:text-[#E2E2E5]"
                  : "focus:bg-[#343434] focus:text-[#E2E2E5]"
              }`
            }
          >
            <Icon className="h-5 w-5" />
            <span
              className={`transition-opacity duration-200 ${
                collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
              }`}
            >
              {label}
            </span>
          </NavLink>
        ))}
      </nav>
      <div
        className={`mt-auto text-xs text-[#A8ABB4] pt-8 transition-opacity duration-200 ${
          collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
        }`}
      >
        This model is not stable and may not be suitable for production use.
      </div>
      {/* Floating caret button */}
      <button
        className="absolute -right-3 bottom-8 w-8 h-8 flex items-center justify-center rounded-full bg-[#1E1E1E] hover:bg-[#343434] transition-colors z-30"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.15)" }}
      >
        <ChevronLeftIcon
          className={`h-5 w-5 text-[#A8ABB4] transition-transform duration-200 ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </button>
    </aside>
  );
}
