import React from "react";
import "./App.css";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";
import MainContent from "./MainContent.tsx";

function App() {
  return (
    <div className="flex h-screen bg-[#18181a] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
