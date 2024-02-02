import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/logo.png";

import { links } from "../../data/data";

import { useSideDrawer } from "../../contexts/sideDrawerContext";

const Sidebar = () => {
  const { toggleDrawer, isDrawerOpen, closeDrawer, openDrawer } =
    useSideDrawer();

  const drawerRef = useRef(null);

  useEffect(() => {
    // If the width is greater than the specified size it opens else closes
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        openDrawer();
      } else {
        closeDrawer();
      }
    };

    // Closing Side drawer when user clicks outside the sidebar when it is open
    const handleClickOutside = (event) => {
      if (window.innerWidth > 1024) return;
      if (
        drawerRef.current &&
        isDrawerOpen &&
        !drawerRef.current.contains(event.target)
      ) {
        closeDrawer();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDrawer, openDrawer, isDrawerOpen]);

  // Opens the Side Drawer for the first time when the app is logged in and the device with is greater or equal to 1024px
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      openDrawer();
    }
  }, []);

  const handleSidebarClick = () => {
    if (isDrawerOpen && window.innerWidth < 1024) {
      closeDrawer();
    }
  };

  return (
    <div
      ref={drawerRef}
      className={`fixed inset-y-0 shadow-2xl left-0 z-50 ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
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
                onClick={handleSidebarClick}
              >
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="lg:hidden absolute top-6 right-5 text-white"
        onClick={toggleDrawer}
      >
        {isDrawerOpen ? <FaTimes size={15} /> : <FaBars size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
