import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

import { useAuth } from "../../contexts/authContext";

const AvatarDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { logout, user } = useAuth();

  return (
    <div className="relative inline-block text-left">
      {/* Avatar */}
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="flex items-center justify-center h-12 w-12 rounded-full text-white focus:outline-none hover:bg-secondaryLight transition"
        >
          <FaUser
            size={26}
            className="bg-[#343423] border-[#343423] border-[1px] rounded-full"
          />
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className={`${
          isDropdownOpen ? "" : "hidden"
        } origin-top-right absolute right-0 mt-2 w-48 z-50 shadow-sm shadow-secondary dark:shadow-white rounded-sm overflow-hidden bg-white focus:outline-none`}
        role="menu"
        ref={dropdownRef}
        aria-orientation="vertical"
        aria-labelledby="avatarButton"
        tabIndex="-1"
      >
        <div
          className=" bg-whiteBg dark:bg-secondaryLight divide-y divide-secondary"
          role="none"
        >
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-secondary dark:text-white text-sm hover:bg-secondaryLight hover:text-white dark:hover:bg-secondary"
            role="menuitem"
            tabIndex="-1"
          >
            <FaUserCircle size={18} className="mr-2" />
            Profile &nbsp;
            <span className="text-tertiary text-xs uppercase">
              {" "}
              ({user?.name})
            </span>
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm text-secondary dark:text-white hover:bg-secondaryLight hover:text-white dark:hover:bg-secondary"
            role="menuitem"
            tabIndex="-1"
          >
            <FaCog size={18} className="mr-2" />
            Settings
          </Link>
          <button
            onClick={logout}
            className="w-full flex items-center px-4 py-2 text-sm text-secondary dark:text-white text-sm hover:bg-secondaryLight hover:text-white dark:hover:bg-secondary"
            role="menuitem"
            tabIndex="-1"
          >
            <FaSignOutAlt size={18} className="mr-2" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropdown;
