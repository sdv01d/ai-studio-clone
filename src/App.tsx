import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";
import MainContent from "./MainContent.tsx";
import RightSidebar from "./RightSidebar.tsx";

function App() {
  return (
    <div className="flex h-screen bg-[#18181a] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1 flex-row">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
