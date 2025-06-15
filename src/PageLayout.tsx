import React from "react";
import Toolbar from "./components/Toolbar.tsx";
import WhatsNew from "./components/WhatsNew.tsx";
import InputSection from "./components/InputSection.tsx";

interface PageLayoutProps {
  toolbarTitle?: string;
  toolbarIcons?: React.ReactNode;
  showWhatsNew?: boolean;
  whatsNewFeatures?: any[];
  whatsNewGridClassName?: string;
  showInput?: boolean;
  inputPlaceholder?: string;
  gradientTitle?: string;
  children?: React.ReactNode;
  rightPanel?: number | null;
  whatsNewTitle?: string;
}

function GradientTitle({ title }: { title: string }) {
  return (
    <h1
      className="text-3xl font-medium mt-12 mb-8 text-center bg-gradient-to-r from-[#b1c5ff] to-[#076eff] bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(177, 197, 255) 0%, rgb(7, 110, 255) 100%)",
      }}
    >
      {title}
    </h1>
  );
}

export default function PageLayout({
  toolbarTitle,
  toolbarIcons,
  showWhatsNew = false,
  whatsNewFeatures = [],
  whatsNewGridClassName,
  showInput = false,
  inputPlaceholder = "",
  gradientTitle,
  children,
  rightPanel,
  whatsNewTitle,
}: PageLayoutProps) {
  return (
    <main
      className={`flex-1 min-h-0 flex flex-col items-center justify-start gap-4 overflow-y-auto bg-[#1E1E1E] rounded-3xl transition-all duration-300 ease-in-out ${
        rightPanel !== null ? "mr-0 lg:mr-2" : ""
      }`}
    >
      {toolbarTitle && (
        <>
          <Toolbar title={toolbarTitle} icons={toolbarIcons} />
          <div className="w-full mx-auto px-6">
            <div className="border-b border-[#343434] w-full" />
          </div>
        </>
      )}
      {gradientTitle && <GradientTitle title={gradientTitle} />}
      {showInput && <InputSection placeholder={inputPlaceholder} />}
      {showWhatsNew && (
        <WhatsNew
          features={whatsNewFeatures}
          gridClassName={whatsNewGridClassName}
          title={whatsNewTitle}
        />
      )}
      {children}
    </main>
  );
}
