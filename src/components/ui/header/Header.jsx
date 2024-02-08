import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

import AvatarDropdown from "../../avatarDropdown/AvatarDropdown";

import { useSideDrawer } from "../../../contexts/sideDrawerContext";

import { useTheme } from "../../../contexts/themeContext";

const Header = ({ title }) => {
  const { pathname } = useLocation();
  const { openDrawer } = useSideDrawer();
  const {
    toggleTheme,
    state: { isDarkMode },
  } = useTheme();
  let heading = pathname === "/" ? "home" : pathname.split("/")[1];

  const themeBtn = isDarkMode ? (
    <button onClick={toggleTheme} className="border-[0.5px] rounded-full p-1">
      <IoSunnySharp size={18} />
    </button>
  ) : (
    <button
      onClick={toggleTheme}
      className="text-secondary border-[0.5px] rounded-full p-1"
    >
      <IoMoonSharp size={18} />
    </button>
  );
  return (
    <header className=" text-white p-4 px-8 border-b-2 border-white dark:border-secondary flex items-center justify-between">
      <button className="lg:hidden" onClick={openDrawer}>
        <FaBars size={24} />
      </button>

      <h1 className="text-2xl font-bold text-tertiary capitalize">{heading}</h1>
      <div className="flex items-center gap-2">
        {themeBtn}
        <AvatarDropdown />
      </div>
    </header>
  );
};

export default Header;
