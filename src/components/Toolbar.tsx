import React, { useState, useRef, useEffect } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

interface ToolbarProps {
  title: string;
  icons: React.ReactNode[];
}

export default function Toolbar({ title, icons }: ToolbarProps) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Convert icons to array if not already
  const iconArray = Array.isArray(icons)
    ? icons
    : React.Children.toArray(icons);
  const firstTwo = iconArray.slice(0, 2);
  const rest = iconArray.slice(2);

  // Close popup on click outside
  useEffect(() => {
    if (!showPopup) return;
    function handleClick(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showPopup]);

  return (
    <div className="w-full mx-auto pt-4 px-6 flex items-center justify-between relative">
      <div className="text-lg font-semibold text-[#E2E2E5]">{title}</div>
      {/* Desktop: show all icons, never show ellipsis. Mobile: show first two + ellipsis if needed. */}
      <div className="hidden sm:flex items-center gap-3">{iconArray}</div>
      <div className="flex sm:hidden items-center gap-3">
        {firstTwo}
        {rest.length > 0 && (
          <>
            <button
              className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4] relative"
              onClick={() => setShowPopup((v) => !v)}
              aria-label="More options"
            >
              <EllipsisVerticalIcon className="h-5 w-5" />
            </button>
            {showPopup && (
              <div
                ref={popupRef}
                className="absolute right-0 top-12 bg-[#232326] rounded-xl shadow-lg p-2 flex flex-col gap-2 z-50 min-w-[44px]"
              >
                {rest.map((icon, idx) => (
                  <div key={idx} onClick={() => setShowPopup(false)}>
                    {icon}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
