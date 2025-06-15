import React, { useState } from "react";
import "./App.css";
import Sidebar, { MobileSidebarDrawer } from "./components/Sidebar.tsx";
import Header, { MobileHeader } from "./components/Header.tsx";
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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileRightDrawer, setMobileRightDrawer] = useState<number | null>(
    null
  );

  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen overflow-hidden bg-[#18181a] text-white">
        {/* Desktop Sidebar */}
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        {/* Mobile Sidebar Drawer */}
        <MobileSidebarDrawer
          open={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
        {/* Mobile Right Drawer */}
        {mobileRightDrawer !== null && (
          <div className="fixed inset-0 z-50 flex sm:hidden">
            <div
              className="flex-1 bg-black bg-opacity-40"
              onClick={() => setMobileRightDrawer(null)}
            />
            <div className="w-64 bg-[#232326] h-full flex flex-col p-4">
              <button
                className="self-end mb-4 p-2 rounded-full bg-[#232326] text-[#A8ABB4]"
                onClick={() => setMobileRightDrawer(null)}
              >
                <span className="text-lg">×</span>
              </button>
              {/* Render right drawer content based on mobileRightDrawer index */}
              {mobileRightDrawer === 0 && <div>Settings panel (mobile)</div>}
              {mobileRightDrawer === 1 && <div>Apps panel (mobile)</div>}
            </div>
          </div>
        )}
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          {/* Desktop Header */}
          <Header />
          {/* Mobile Header */}
          <MobileHeader
            onHamburger={() => setMobileSidebarOpen(true)}
            onRightSidebar={(idx) => setMobileRightDrawer(idx)}
          />
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
            {/* Desktop Right Sidebar */}
            <div className="hidden lg:block">
              <RightSidebar
                rightPanel={rightPanel}
                setRightPanel={setRightPanel}
              />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
