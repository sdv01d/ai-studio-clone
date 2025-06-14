import React from "react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  KeyIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-5 bg-[#18181a]">
      <div />
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-[#444548] hover:bg-[#5a5b5e] text-white px-3 py-2 rounded-full font-semibold text-sm">
          <KeyIcon className="h-4 w-4" />
          Get API key
        </button>
        <nav className="flex items-center gap-3">
          <span className="font-bold text-sm text-white">Studio</span>
          <span className="text-[#A8ABB4] text-sm">Dashboard</span>
          <span className="text-[#A8ABB4] text-sm flex items-center gap-1">
            Documentation
            <ArrowTopRightOnSquareIcon className="h-4 w-4 inline-block" />
          </span>
        </nav>
        <Cog6ToothIcon className="h-8 w-8 text-[#A8ABB4] rounded-full hover:bg-[#232326] p-1" />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="h-9 w-9 rounded-full object-cover border border-[#232326]"
        />
      </div>
    </header>
  );
}
