import React, { useState } from "react";
import {
  UserCircleIcon,
  DocumentTextIcon,
  Squares2X2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-[#18181a]">
      <div />
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold">
          Get API key
        </button>
        <button
          className="p-2 rounded-full hover:bg-[#232326]"
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
        >
          {rightPanelOpen ? (
            <ChevronRightIcon className="h-6 w-6 text-gray-400" />
          ) : (
            <ChevronLeftIcon className="h-6 w-6 text-gray-400" />
          )}
        </button>
        {rightPanelOpen && (
          <div className="flex items-center gap-3">
            <Squares2X2Icon className="h-7 w-7 text-blue-400 rounded-full hover:bg-[#232326] p-1" />
            <DocumentTextIcon className="h-7 w-7 text-blue-400 rounded-full hover:bg-[#232326] p-1" />
            <UserCircleIcon className="h-10 w-10 text-gray-400 rounded-full hover:bg-[#232326] p-1" />
          </div>
        )}
      </div>
    </header>
  );
}
