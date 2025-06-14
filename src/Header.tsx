import React from "react";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-[#18181a]">
      <div />
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold">
          Get API key
        </button>
        <Cog6ToothIcon className="h-7 w-7 text-blue-400 rounded-full hover:bg-[#232326] p-1" />
        <UserCircleIcon className="h-10 w-10 text-gray-400 rounded-full hover:bg-[#232326] p-1" />
      </div>
    </header>
  );
}
