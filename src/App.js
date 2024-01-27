// App.js
import React from "react";

import { Routes, Route } from "react-router-dom";

import PageRoutes from "./config/routes";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/ui/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import ContextProviders from "./contexts/contextProviders";

const App = () => {
  return (
    <ContextProviders>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="flex h-screen bg-primary">
              <Sidebar />
              <div className="flex-1 flex flex-col lg:ml-64 overflow-hidden">
                <Header title="Home" />
                <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 p-3 md:px-8">
                  <PageRoutes />
                </main>
              </div>
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ContextProviders>
  );
};

export default App;
