import React from "react";

const navItems = [
  "Chat",
  "Stream",
  "Generate Media",
  "Build",
  "History",
  "Enable saving",
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 flex flex-col p-6 border-r border-gray-800">
      <div className="text-2xl font-bold mb-10 text-blue-400">
        Google AI Studio
      </div>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item}
            className="text-left px-3 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="mt-auto text-xs text-gray-500 pt-8">
        This model is not stable and may not be suitable for production use.
      </div>
    </aside>
  );
}
