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
  XMarkIcon,
  InformationCircleIcon,
  KeyIcon,
  ArrowTopRightOnSquareIcon,
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

function StudioLogo() {
  // Placeholder SVG for Google AI Studio logo
  return (
    <div className="flex items-center justify-center w-full py-4">
      <svg
        width={48}
        height={48}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 8c2.5-6 12-6 8 2-2 4-8 4-8-2z" fill="#fff" />
        <path d="M20 8c-2.5-6-12-6-8 2 2 4 8 4 8-2z" fill="#fff" />
        <circle cx="20" cy="20" r="2.5" fill="#fff" />
      </svg>
    </div>
  );
}

export function MobileSidebarDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 sm:hidden ${
        open ? "" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`absolute top-0 left-0 h-full w-72 bg-[#181818] flex flex-col p-4 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ minHeight: "100vh" }}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-[#232326] text-[#A8ABB4]"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center justify-center w-full mb-6 mt-2 min-h-[40px]">
          <StudioLogo />
        </div>
        <nav className="flex flex-col gap-2 w-full mb-6">
          {navItems.map(({ label, icon: Icon, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-full transition-colors font-medium hover:bg-[#343434] hover:text-[#E2E2E5] focus:outline-none text-[#A8ABB4] text-sm ${
                  isActive ? "bg-[#343434] text-[#E2E2E5]" : ""
                }`
              }
              onClick={onClose}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-col gap-3 mb-6">
          <button className="flex items-center gap-2 bg-[#444548] hover:bg-[#5a5b5e] text-white px-3 py-2 rounded-full font-semibold text-sm w-fit">
            <KeyIcon className="h-4 w-4" />
            Get API key
          </button>
          <span className="font-bold text-sm text-white">Studio</span>
          <span className="text-[#A8ABB4] text-sm">Dashboard</span>
          <span className="text-[#A8ABB4] text-sm flex items-center gap-1">
            Documentation
            <ArrowTopRightOnSquareIcon className="h-4 w-4 inline-block" />
          </span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center justify-center w-full mb-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="h-12 w-12 rounded-full object-cover border border-[#232326]"
          />
        </div>
      </aside>
    </div>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`relative bg-[#181818] flex flex-col items-center p-3 rounded-l-3xl transition-all duration-300 h-full ${
        collapsed ? "w-20" : "w-52"
      }`}
    >
      <div className="flex items-center justify-center w-full mb-2 mt-2 min-h-[40px]">
        {collapsed ? (
          <StudioLogo />
        ) : (
          <span className="text-2xl font-medium text-[#D0E3FE] transition-opacity duration-200 opacity-100 w-auto py-4">
            Google AI Studio
          </span>
        )}
      </div>
      <nav
        className={`flex flex-col gap-2 w-full ${collapsed ? "mt-4" : "mt-6"}`}
      >
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `${
                collapsed
                  ? "flex items-center justify-center w-12 h-12 rounded-full mx-auto transition-colors text-[#A8ABB4] hover:bg-[#232326]"
                  : "flex items-center gap-3 px-4 py-2 rounded-full transition-colors font-medium hover:bg-[#343434] hover:text-[#E2E2E5] focus:outline-none text-[#A8ABB4] text-sm"
              } ${
                isActive
                  ? "bg-[#343434] text-[#E2E2E5] focus:bg-[#343434] focus:text-[#E2E2E5]"
                  : "focus:bg-[#343434] focus:text-[#E2E2E5]"
              }`
            }
          >
            <Icon className={collapsed ? "h-7 w-7" : "h-5 w-5"} />
            {!collapsed && (
              <span className="transition-opacity duration-200 opacity-100 w-auto">
                {label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="flex-1" />
      <div className="w-full flex flex-col items-center mb-4">
        {collapsed ? (
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[#343434] bg-transparent hover:bg-[#232326] text-[#A8ABB4]"
            aria-label="Model info"
          >
            <InformationCircleIcon className="h-6 w-6" />
          </button>
        ) : (
          <div className="text-xs text-[#A8ABB4] pt-8 text-center px-2">
            This model is not stable and may not be suitable for production use.
          </div>
        )}
      </div>
      <button
        className="absolute -right-3 bottom-20 w-10 h-8 flex items-center justify-center rounded-3xl bg-[#1E1E1E] hover:bg-[#343434] transition-colors z-30"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronLeftIcon
          className={`h-4 w-4 text-[#A8ABB4] transition-transform duration-200 ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </button>
    </aside>
  );
}
