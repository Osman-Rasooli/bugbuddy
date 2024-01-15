import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

const AvatarDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Avatar */}
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="flex items-center justify-center h-12 w-12 rounded-full text-white focus:outline-none hover:bg-secondaryLight transition"
        >
          <FaUser size={24} className="border-[1px] rounded-full" />
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className={`${
          isDropdownOpen ? "" : "hidden"
        } origin-top-right absolute right-0 mt-2 w-48 z-50 shadow-sm shadow-white rounded-sm overflow-hidden bg-white focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="avatarButton"
        tabIndex="-1"
      >
        <div
          className=" bg-secondaryLight divide-y divide-secondary"
          role="none"
        >
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm hover:bg-secondary"
            role="menuitem"
            tabIndex="-1"
          >
            <FaUserCircle size={18} className="mr-2" />
            Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm hover:bg-secondary"
            role="menuitem"
            tabIndex="-1"
          >
            <FaCog size={18} className="mr-2" />
            Settings
          </Link>
          <button
            onClick={() => {}}
            className="w-full flex items-center px-4 py-2 text-sm hover:bg-secondary"
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
