import React, { useState } from "react";
import {
  SpeakerWaveIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
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
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  return (
    <main className="flex-1 flex flex-row gap-8 p-12 overflow-y-auto bg-[#18181a]">
      <div className="max-w-3xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">
          Welcome to AI Studio
        </h1>
        <div className="flex items-center gap-3 mb-12">
          <input
            className="flex-1 px-6 py-4 rounded-3xl bg-[#232326] border border-[#232326] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            placeholder="Generate a scavenger hunt for street food around the city of Seoul, Korea."
          />
          <button className="ml-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-3xl text-white font-semibold text-lg">
            Run
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">What's new</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-[#18181a] rounded-3xl p-7 flex flex-col gap-2 border border-[#232326] hover:shadow-xl transition-shadow duration-200 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <f.icon className="h-10 w-10 text-blue-400 rounded-full bg-[#232326] p-2 group-hover:bg-blue-900 transition-colors" />
                  <span className="font-bold text-lg">{f.title}</span>
                  {f.tag && (
                    <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-0.5 rounded">
                      {f.tag}
                    </span>
                  )}
                </div>
                <div className="text-gray-400">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right-side panel placeholder, collapsible */}
      {rightPanelOpen && (
        <div className="hidden lg:block w-80 rounded-3xl bg-[#18181a] border border-[#232326] ml-4 mt-8 h-[80vh] relative">
          <button
            onClick={() => setRightPanelOpen(false)}
            className="absolute top-2 right-2 p-2 rounded-full hover:bg-[#232326] text-gray-400"
          >
            ✕
          </button>
        </div>
      )}
      {!rightPanelOpen && (
        <button
          onClick={() => setRightPanelOpen(true)}
          className="hidden lg:block w-10 h-10 rounded-full bg-[#232326] border border-[#232326] ml-4 mt-8 flex items-center justify-center text-gray-400 hover:bg-blue-900"
        >
          {"<"}
        </button>
      )}
    </main>
  );
}
