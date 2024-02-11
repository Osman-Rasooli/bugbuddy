// App.js
import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import ContextProviders from "./contexts/contextProviders";
import Redirect from "./pages/redirect/Redirect";

const App = () => {
  return (
    <ContextProviders>
      <Routes>
        <Route path="/*" element={<Redirect />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ContextProviders>
  );
};

export default App;
