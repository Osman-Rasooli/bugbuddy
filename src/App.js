// App.js
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/ui/header/Header";

const App = () => {
  return (
    <div className="flex h-screen bg-primary">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
        <Header title="Home" />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          {/* Add your main content here */}
        </main>
      </div>
    </div>
  );
};

export default App;
