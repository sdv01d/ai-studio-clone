import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";
import MainContent from "./MainContent.tsx";
import RightSidebar from "./RightSidebar.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen overflow-hidden bg-[#18181a] text-white">
        <Sidebar />
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Header />
          <div className="flex flex-1 flex-row h-0 min-h-0 overflow-hidden">
            <Routes>
              <Route path="/chat" element={<MainContent />} />
              <Route
                path="/stream"
                element={
                  <div className="flex-1 flex items-center justify-center text-2xl text-[#A8ABB4]">
                    Stream Page
                  </div>
                }
              />
              <Route
                path="/generate-media"
                element={
                  <div className="flex-1 flex items-center justify-center text-2xl text-[#A8ABB4]">
                    Generate Media Page
                  </div>
                }
              />
              <Route
                path="/build"
                element={
                  <div className="flex-1 flex items-center justify-center text-2xl text-[#A8ABB4]">
                    Build Page
                  </div>
                }
              />
              <Route
                path="/history"
                element={
                  <div className="flex-1 flex items-center justify-center text-2xl text-[#A8ABB4]">
                    History Page
                  </div>
                }
              />
              <Route
                path="/enable-saving"
                element={
                  <div className="flex-1 flex items-center justify-center text-2xl text-[#A8ABB4]">
                    Enable Saving Page
                  </div>
                }
              />
              <Route path="/" element={<Navigate to="/chat" replace />} />
            </Routes>
            <RightSidebar />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
