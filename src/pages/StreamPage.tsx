import React from "react";
import PageLayout from "../PageLayout.tsx";
import InputSection from "../components/InputSection.tsx";
import {
  ClipboardIcon,
  CodeBracketIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const toolbarIcons = (
  <>
    <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
      <ClipboardIcon className="h-4 w-4" />
    </button>
    <button className="p-2 rounded-full hover:bg-[#232326] text-[#A8ABB4]">
      <CodeBracketIcon className="h-4 w-4" />
    </button>
  </>
);

const chips = [
  {
    icon: <MicrophoneIcon className="h-5 w-5" />,
    label: "Talk",
  },
  {
    icon: <VideoCameraIcon className="h-5 w-5" />,
    label: "Webcam",
  },
  {
    icon: <ComputerDesktopIcon className="h-5 w-5" />,
    label: "Share Screen",
  },
];

interface StreamPageProps {
  rightPanel: number | null;
}

export default function StreamPage({ rightPanel }: StreamPageProps) {
  return (
    <PageLayout
      toolbarTitle="Stream Realtime"
      toolbarIcons={toolbarIcons}
      showWhatsNew={false}
      showInput={false}
      gradientTitle="Talk to Gemini live"
      rightPanel={rightPanel}
    >
      <InputSection placeholder="Start typing a prompt" chips={chips} />
    </PageLayout>
  );
}
