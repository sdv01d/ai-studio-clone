import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface RightPanelProps {
  rightPanel: number | null;
  setRightPanel: (idx: number | null) => void;
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      className={`w-9 h-4 flex items-center rounded-full transition-colors duration-200 focus:outline-none ${
        checked ? "bg-[#588CFF]" : "bg-[#343434]"
      }`}
      onClick={onChange}
      aria-pressed={checked}
    >
      <span
        className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function SettingsConfig() {
  const [thinkingMode, setThinkingMode] = useState(false);
  const [structuredOutput, setStructuredOutput] = useState(false);
  const [codeExecution, setCodeExecution] = useState(false);
  const [functionCalling, setFunctionCalling] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Model Selector */}
      <div>
        <label className="block text-xs font-semibold mb-1 text-[#A8ABB4]">
          Model
        </label>
        <select className="w-full bg-[#232326] text-[#E2E2E5] rounded-lg px-3 py-2 text-sm border border-[#343434] focus:outline-none">
          <option>Gemini 2.5 Pro Preview</option>
          <option>Gemini 1.5 Pro</option>
        </select>
      </div>
      {/* Token Count */}
      <div className="flex items-center justify-between text-xs text-[#A8ABB4]">
        <span>Token count</span>
        <span>0 / 1,048,576</span>
      </div>
      {/* Temperature Slider */}
      <div>
        <label className="block text-xs font-semibold mb-1 text-[#A8ABB4]">
          Temperature
        </label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={2}
            step={0.1}
            defaultValue={1}
            className="w-full accent-[#7A98E6]"
          />
          <input
            type="number"
            min={0}
            max={2}
            step={0.1}
            defaultValue={1}
            className="w-12 bg-[#232326] text-[#E2E2E5] rounded px-1 py-0.5 border border-[#343434] text-xs"
          />
        </div>
      </div>
      {/* Thinking Mode Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#A8ABB4]">Thinking mode</span>
        <Toggle
          checked={thinkingMode}
          onChange={() => setThinkingMode((v) => !v)}
        />
      </div>
      {/* Tools */}
      <div>
        <div className="text-xs font-semibold text-[#A8ABB4] mb-2">Tools</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#A8ABB4]">Structured output</span>
            <Toggle
              checked={structuredOutput}
              onChange={() => setStructuredOutput((v) => !v)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#A8ABB4]">Code execution</span>
            <Toggle
              checked={codeExecution}
              onChange={() => setCodeExecution((v) => !v)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#A8ABB4]">Function calling</span>
            <Toggle
              checked={functionCalling}
              onChange={() => setFunctionCalling((v) => !v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppsConfig() {
  return (
    <div className="text-xs text-[#A8ABB4]">Apps panel content goes here.</div>
  );
}

const panelContent = [
  {
    label: "Run settings",
    content: <SettingsConfig />,
  },
  {
    label: "Apps",
    content: <AppsConfig />,
  },
];

export default function RightPanel({
  rightPanel,
  setRightPanel,
}: RightPanelProps) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out bg-[#1E1E1E] h-full rounded-3xl flex flex-col z-10 ${
        rightPanel !== null ? "w-72" : "w-0"
      }`}
      style={{
        minWidth: rightPanel !== null ? "18rem" : "0",
      }}
    >
      {rightPanel !== null && (
        <>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm font-semibold text-[#E2E2E5]">
              {panelContent[rightPanel].label}
            </span>
            <button
              className="p-2 rounded-full hover:bg-[#343434] text-[#A8ABB4]"
              onClick={() => setRightPanel(null)}
              aria-label="Close panel"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 px-4 py-2 text-[#A8ABB4] overflow-y-auto">
            {panelContent[rightPanel].content}
          </div>
        </>
      )}
    </div>
  );
}
