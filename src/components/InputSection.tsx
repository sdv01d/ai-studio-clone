import React, { useState, ReactNode } from "react";
import {
  CommandLineIcon,
  ArrowTurnDownLeftIcon,
} from "@heroicons/react/24/outline";

interface Chip {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface InputSectionProps {
  placeholder?: string;
  chips?: Chip[];
}

export default function InputSection({
  placeholder,
  chips,
}: InputSectionProps) {
  const [input, setInput] = useState("");
  const isInputEmpty = input.trim() === "";
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-[#18181a] px-4 pb-2 pt-2 border-t border-[#232326] sm:static sm:bg-transparent sm:border-0 sm:px-0 sm:pb-0 sm:pt-0">
      <div className="w-full max-w-3xl flex flex-col items-center mx-auto">
        <div className="relative w-full flex items-center">
          <input
            className="w-full px-6 py-5 pr-16 sm:pr-24 rounded-full bg-[#2E2E2E] border border-[#232326] text-[#A8ABB4] focus:text-[#ffffff] focus:outline-none text-sm transition-colors placeholder-[#A8ABB4]"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:px-3 sm:py-2 rounded-full flex items-center justify-center gap-2 font-semibold text-sm transition-colors
              ${
                isInputEmpty
                  ? "bg-[#404041] text-[#6A6B6E] opacity-50 cursor-not-allowed"
                  : "bg-[#7A98E6] text-[#022865] hover:bg-[#E2E2E5]"
              }
            `}
            disabled={isInputEmpty}
          >
            <span className="block sm:hidden">
              <ArrowTurnDownLeftIcon className="h-6 w-6" />
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <div className="w-8 text-center">Run</div>
              <div className="w-8 flex">
                <CommandLineIcon className="h-4 w-4 stroke-2" />
                <ArrowTurnDownLeftIcon className="h-4 w-4 stroke-2" />
              </div>
            </span>
          </button>
        </div>
        {chips && chips.length > 0 && (
          <div className="flex gap-3 mt-6">
            {chips.map((chip, idx) => (
              <button
                key={chip.label}
                className="group flex items-center gap-2 px-3 py-2 rounded-full bg-[#13171F] border-2 border-[#7A98E6] border-opacity-50 text-[#E2E2E5] font-semibold text-sm transition-all duration-200 hover:border-[#87A9FF] hover:border-opacity-100"
                onClick={chip.onClick}
                disabled={chip.disabled}
              >
                {chip.icon}
                {chip.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
