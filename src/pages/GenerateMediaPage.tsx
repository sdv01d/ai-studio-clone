import React from "react";
import PageLayout from "../PageLayout.tsx";

const topModels = [
  {
    title: "Gemini image generation",
    desc: "Explore multimodal native image generation and editing",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    title: "Gemini speech generation",
    desc: "Generate high quality text to speech with Gemini",
    tag: "New",
    icon: () => (
      <span className="inline-block w-10 h-10 bg-[#7A98E6] rounded-xl" />
    ),
  },
  {
    title: "Imagen",
    desc: "Generate high quality images across multiple aspect ratios",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    title: "Veo",
    desc: "Create clips & animate images using generative video",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
];
const exampleModels = [
  {
    title: "Example 1",
    desc: "Example description",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    title: "Example 2",
    desc: "Example description",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    title: "Example 3",
    desc: "Example description",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
  {
    title: "Example 4",
    desc: "Example description",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&q=80",
  },
];

export default function GenerateMediaPage() {
  return (
    <PageLayout
      showWhatsNew={true}
      whatsNewFeatures={topModels}
      gradientTitle="Create Generative Media"
      whatsNewTitle="Explore models"
      whatsNewGridClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      <div className="w-full max-w-5xl mt-8">
        <h2 className="text-sm font-bold mb-3 text-[#A8ABB4]">
          Or try some examples
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {exampleModels.map((f, i) => (
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
                ) : null}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-bold text-sm text-white leading-tight">
                    {f.title}
                  </span>
                </div>
                <div className="text-[#A8ABB4] text-sm leading-snug font-normal">
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
