import { FaBars } from "react-icons/fa";
import AvatarDropdown from "../../avatarDropdown/AvatarDropdown";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 text-white p-4 px-8 border-b-2 border-secondary flex items-center justify-between">
      <button className="md:hidden" onClick={() => {}}>
        <FaBars size={24} />
      </button>
      <h1 className="text-2xl font-bold text-tertiary">{title}</h1>
      <AvatarDropdown />
    </header>
  );
};

export default Header;
