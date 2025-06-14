import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gray-950">
      <div />
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
          Get API key
        </button>
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg font-bold">
          U
        </div>
      </div>
    </header>
  );
}
