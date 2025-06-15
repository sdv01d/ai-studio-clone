import React, { useState } from "react";
import PageLayout from "../PageLayout.tsx";
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

const toolbarIcons = (
  <>
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
  </>
);

export default function ChatPage({
  rightPanel,
}: {
  rightPanel: number | null;
}) {
  const [input, setInput] = useState("");
  const isInputEmpty = input.trim() === "";
  return (
    <PageLayout
      toolbarTitle="Chat Prompt"
      toolbarIcons={toolbarIcons}
      showWhatsNew={true}
      whatsNewFeatures={features}
      showInput={true}
      inputPlaceholder="Generate a scavenger hunt for street food around the city of Seoul, Korea."
      gradientTitle="Welcome to AI Studio"
      rightPanel={rightPanel}
    />
  );
}
