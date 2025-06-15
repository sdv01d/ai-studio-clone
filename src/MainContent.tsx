import React, { useState } from "react";
import {
  SpeakerWaveIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  ArrowTurnDownLeftIcon,
  ClipboardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShareIcon,
  ArrowPathIcon,
  EllipsisVerticalIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Native speech generation",
    desc: "Generate high quality text to speech with Gemini",
    tag: "New",
    icon: SpeakerWaveIcon,
    image: undefined,
  },
  {
    title: "Live audio-to-audio dialog",
    desc: "Try Gemini's natural, real-time dialog with audio and video inputs",
    tag: "New",
    icon: ChatBubbleLeftRightIcon,
    image: undefined,
  },
  {
    title: "Native image generation",
    desc: "Interleaved text-and-image generation with the new Gemini 2.0 Flash",
    tag: "",
    icon: PhotoIcon,
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    title: "Explore and co-develop apps",
    desc: "See Gemini in action with interactive, open source examples",
    tag: "",
    icon: RocketLaunchIcon,
    image:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png",
  },
];

interface MainContentProps {
  rightPanel: number | null;
}

export default function MainContent({ rightPanel }: MainContentProps) {
  const [input, setInput] = useState("");
  const isInputEmpty = input.trim() === "";
  return (
    <main
      className={`flex-1 min-h-0 flex flex-col items-center justify-start gap-4 overflow-y-auto bg-[#1E1E1E] rounded-3xl transition-all duration-300 ease-in-out ${
        rightPanel !== null ? "mr-0 lg:mr-2" : ""
      }`}
    >
      {/* Toolbar with section name and icons */}
      <div className="w-full mx-auto pt-4 px-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-[#E2E2E5]">Chat Prompt</div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
            <ClipboardIcon className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
            <ShareIcon className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
            <ArrowDownTrayIcon className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
            <ArrowPathIcon className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
            <EllipsisVerticalIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="w-full mx-auto mb-4 px-6">
        <div className="border-b border-[#343434] w-full" />
      </div>
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
      <div className="w-full max-w-3xl mt-4">
        <h2 className="text-sm font-bold mb-3 text-[#A8ABB4]">What's new</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative flex items-center bg-[#35363A] rounded-2xl px-3 py-3 gap-3 border-none shadow-none"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#232326] flex items-center justify-center overflow-hidden">
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <f.icon className="h-10 w-10 text-[#A8ABB4]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-bold text-sm text-white leading-tight">
                    {f.title}
                  </span>
                  {f.tag && (
                    <span className="absolute top-2 right-3 text-xs bg-[#9CCCFE] text-black px-1 py-0.5 rounded-lg font-semibold">
                      {f.tag}
                    </span>
                  )}
                </div>
                <div className="text-[#A8ABB4] text-sm leading-snug font-normal">
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
