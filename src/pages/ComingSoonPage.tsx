import React from "react";
import Toolbar from "../components/Toolbar.tsx";

export default function ComingSoonPage({ title }: { title: string }) {
  return (
    <main className="flex-1 min-h-0 flex flex-col items-center justify-start gap-4 overflow-y-auto bg-[#1E1E1E] rounded-3xl transition-all duration-300 ease-in-out">
      <Toolbar title={title} icons={[]} />
      <div className="w-full mx-auto mb-4 px-6">
        <div className="border-b border-[#343434] w-full" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-[#7A98E6] mt-32">
          Coming soon
        </h1>
      </div>
    </main>
  );
}
