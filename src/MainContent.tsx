import React, { useState } from "react";
import {
  SpeakerWaveIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  ArrowTurnDownLeftIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Native speech generation",
    desc: "Generate high quality text to speech with Gemini",
    tag: "New",
    icon: SpeakerWaveIcon,
  },
  {
    title: "Live audio-to-audio dialog",
    desc: "Try Gemini's natural, real-time dialog with audio and video inputs",
    tag: "New",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Native image generation",
    desc: "Interleaved text-and-image generation with the new Gemini 2.0 Flash",
    tag: "",
    icon: PhotoIcon,
  },
  {
    title: "Explore and co-develop apps",
    desc: "See Gemini in action with interactive, open source examples",
    tag: "",
    icon: RocketLaunchIcon,
  },
];

export default function MainContent() {
  const [input, setInput] = useState("");
  const isInputEmpty = input.trim() === "";
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-8 p-12 overflow-y-auto bg-[#1E1E1E] rounded-3xl">
      <div className="w-full flex flex-col items-center justify-center">
        <h1
          className="text-3xl font-medium mb-8 text-center bg-gradient-to-r from-[#b1c5ff] to-[#076eff] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(177, 197, 255) 0%, rgb(7, 110, 255) 100%)",
          }}
        >
          Welcome to AI Studio
        </h1>
        <div className="w-full max-w-3xl flex flex-col items-center">
          <div className="relative w-full flex items-center">
            <input
              className="w-full px-6 py-5 pr-24 rounded-full bg-[#2E2E2E] border border-[#232326] text-[#A8ABB4] focus:text-[#ffffff] focus:outline-none text-sm transition-colors placeholder-[#A8ABB4]"
              placeholder="Generate a scavenger hunt for street food around the city of Seoul, Korea."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className={`absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full flex items-center gap-2 font-semibold text-sm transition-colors
                ${
                  isInputEmpty
                    ? "bg-[#404041] text-[#6A6B6E] opacity-50 cursor-not-allowed"
                    : "bg-[#7A98E6] text-[#022865] hover:bg-[#E2E2E5]"
                }
              `}
              disabled={isInputEmpty}
            >
              <div className="w-8 text-center">Run</div>
              <div className="w-8 flex">
                <CommandLineIcon className="h-4 w-4 stroke-2" />
                <ArrowTurnDownLeftIcon className="h-4 w-4 stroke-2" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6 text-[#E2E2E5]">
          What's new
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#18181a] rounded-3xl p-7 flex flex-col gap-2 border border-[#232326] hover:shadow-xl transition-shadow duration-200 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-2">
                <f.icon className="h-10 w-10 text-[#A8ABB4] rounded-full bg-[#232326] p-2 group-hover:bg-[#E2E2E5] group-hover:text-[#232326] transition-colors" />
                <span className="font-bold text-lg text-[#E2E2E5]">
                  {f.title}
                </span>
                {f.tag && (
                  <span className="ml-2 text-xs bg-[#A8ABB4] text-[#232326] px-2 py-0.5 rounded">
                    {f.tag}
                  </span>
                )}
              </div>
              <div className="text-[#A8ABB4]">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
