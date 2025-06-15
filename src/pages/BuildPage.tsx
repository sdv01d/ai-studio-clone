import React from "react";
import PageLayout from "../PageLayout.tsx";

export default function BuildPage() {
  return (
    <PageLayout
      showWhatsNew={false}
      showInput={true}
      inputPlaceholder="Start from a template or enter your own prompt..."
      gradientTitle="Build apps with Gemini"
    />
  );
}
