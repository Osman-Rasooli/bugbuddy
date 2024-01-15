import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/logo.png";

import { links } from "../../data/data";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    // Event listener to update the sidebar state when window is resized
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`fixed inset-y-0 shadow-2xl left-0 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out w-64
       bg-secondary text-white overflow-y-auto`}
    >
      <div className="p-6 py-10">
        <div className="">
          <img src={logo} alt="BugBuddy" className="w-2/3" />
        </div>
        <ul className="mt-6 text-whiteLight">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className="link flex gap-3 justify-start items-center font-normal py-2 px-2 rounded-sm transition "
              >
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="md:hidden absolute top-6 right-5 text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={15} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
