import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Tasks from "../pages/tasks/Tasks";
import Bugs from "../pages/bugs/Bugs";
import Calendar from "../pages/calendar/Calendar";

import React from "react";

const routes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/bugs" element={<Bugs />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
};

export default routes;
