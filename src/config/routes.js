import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Tasks from "../pages/tasks/Tasks";
import Bugs from "../pages/bugs/Bugs";
import Calendar from "../pages/calendar/Calendar";
import Details from "../pages/details/Details";

import ProtectedRoutes from "./ProtectedRoutes";

import React from "react";

const routes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Details />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<Details />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/bugs/:id" element={<Details />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default routes;
