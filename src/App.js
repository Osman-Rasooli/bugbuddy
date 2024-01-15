// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/ui/header/Header";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Tasks from "./pages/tasks/Tasks";
import Bugs from "./pages/bugs/Bugs";
import Calendar from "./pages/calendar/Calendar";
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
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/bugs" element={<Bugs />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </div>
      )}
      {!loggedIn && <Login />}
    </>
  );
};

export default App;
