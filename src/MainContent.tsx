import React from "react";

const features = [
  {
    title: "Native speech generation",
    desc: "Generate high quality text to speech with Gemini",
    tag: "New",
  },
  {
    title: "Live audio-to-audio dialog",
    desc: "Try Gemini's natural, real-time dialog with audio and video inputs",
    tag: "New",
  },
  {
    title: "Native image generation",
    desc: "Interleaved text-and-image generation with the new Gemini 2.0 Flash",
    tag: "",
  },
  {
    title: "Explore and co-develop apps",
    desc: "See Gemini in action with interactive, open source examples",
    tag: "",
  },
];

export default function MainContent() {
  return (
    <main className="flex-1 p-12 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">
          Welcome to AI Studio
        </h1>
        <div className="flex items-center gap-2 mb-10">
          <input
            className="flex-1 px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Generate a scavenger hunt for street food around the city of Seoul, Korea."
          />
          <button className="ml-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold">
            Run
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What's new</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-6 flex flex-col gap-2 border border-gray-800"
              >
                <div className="flex items-center gap-2">
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
    </main>
  );
}
