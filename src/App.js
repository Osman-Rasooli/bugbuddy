// App.js
import React from "react";

import { Routes, Route } from "react-router-dom";

import PageRoutes from "./config/routes";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/ui/header/Header";
import Login from "./pages/login/Login";

import { AuthProvider } from "./contexts/authContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="flex h-screen bg-primary">
              <Sidebar />
              <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
                <Header title="Home" />
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
                  <PageRoutes />
                </main>
              </div>
            </div>
          }
        />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
