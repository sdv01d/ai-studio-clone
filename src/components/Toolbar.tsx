import React from "react";

interface ToolbarProps {
  title: string;
  icons: React.ReactNode;
}

export default function Toolbar({ title, icons }: ToolbarProps) {
  return (
    <div className="w-full mx-auto pt-4 px-6 flex items-center justify-between">
      <div className="text-lg font-semibold text-[#E2E2E5]">{title}</div>
      <div className="flex items-center gap-3">{icons}</div>
    </div>
  );
}
