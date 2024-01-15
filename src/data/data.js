import { FaHome, FaBriefcase, FaTasks, FaCalendarAlt } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
export const links = [
  { name: "Home", to: "/", icon: <FaHome /> },
  { name: "Projects", to: "/projects", icon: <FaBriefcase /> },
  { name: "Tasks", to: "/tasks", icon: <FaTasks /> },
  { name: "Bugs", to: "/bugs", icon: <GoIssueOpened /> },
  { name: "Calendar", to: "/calendar", icon: <FaCalendarAlt /> },
];
