import React from "react";

interface WhatsNewProps {
  features: any[];
  gridClassName?: string;
  title?: string;
}

export default function WhatsNew({
  features,
  gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-3",
  title = "What's new",
}: WhatsNewProps) {
  return (
    <div className="w-full max-w-3xl mt-4">
      <h2 className="text-sm font-bold mb-3 text-[#A8ABB4]">{title}</h2>
      <div className={gridClassName}>
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
  );
}
