import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import RightSidebar from "./components/RightSidebar.tsx";
import RightPanel from "./components/RightPanel.tsx";
import StreamPage from "./pages/StreamPage.tsx";
import GenerateMediaPage from "./pages/GenerateMediaPage.tsx";
import BuildPage from "./pages/BuildPage.tsx";
import ComingSoonPage from "./pages/ComingSoonPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [rightPanel, setRightPanel] = useState<number | null>(null);
  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen overflow-hidden bg-[#18181a] text-white">
        <Sidebar />
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Header />
          <div className="flex flex-1 flex-row h-0 min-h-0 overflow-hidden">
            <div className="flex flex-1 flex-row">
              <Routes>
                <Route
                  path="/chat"
                  element={<ChatPage rightPanel={rightPanel} />}
                />
                <Route
                  path="/stream"
                  element={<StreamPage rightPanel={rightPanel} />}
                />
                <Route path="/generate-media" element={<GenerateMediaPage />} />
                <Route path="/build" element={<BuildPage />} />
                <Route
                  path="/history"
                  element={<ComingSoonPage title="History" />}
                />
                <Route
                  path="/enable-saving"
                  element={<ComingSoonPage title="Enable saving" />}
                />
                <Route path="/" element={<Navigate to="/chat" replace />} />
              </Routes>
              <RightPanel
                rightPanel={rightPanel}
                setRightPanel={setRightPanel}
              />
            </div>
            <RightSidebar
              rightPanel={rightPanel}
              setRightPanel={setRightPanel}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
