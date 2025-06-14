import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";
import MainContent from "./MainContent.tsx";
import RightSidebar from "./RightSidebar.tsx";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#18181a] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Header />
        <div className="flex flex-1 flex-row h-0 min-h-0 overflow-hidden">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
