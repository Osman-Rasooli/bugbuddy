// App.js
import React from "react";

import Routes from "./config/routes";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/ui/header/Header";

import Login from "./pages/login/Login";

const App = () => {
  let loggedIn = true;
  return (
    <>
      {loggedIn && (
        <div className="flex h-screen bg-primary">
          <Sidebar />
          <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
            <Header title="Home" />
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
              <Routes />
            </main>
          </div>
        </div>
      )}
      {!loggedIn && <Login />}
    </>
  );
};

export default App;
