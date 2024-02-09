import {
  FaHome,
  FaBriefcase,
  FaTasks,
  FaCalendarAlt,
  FaCode,
  FaUserShield,
  FaPalette,
  FaBug,
  FaRegFlag,
} from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import {
  BsExclamationCircle,
  BsCheckCircle,
  BsPlusCircle,
} from "react-icons/bs";
import { AiOutlineWarning, AiOutlinePauseCircle } from "react-icons/ai";
import { MdInfoOutline, MdCheckCircle, MdCancel } from "react-icons/md";
import { BiRun } from "react-icons/bi";

export const links = [
  { name: "Home", to: "/", icon: <FaHome /> },
  { name: "Projects", to: "/projects", icon: <FaBriefcase /> },
  { name: "Tasks", to: "/tasks", icon: <FaTasks /> },
  { name: "Bugs", to: "/bugs", icon: <GoIssueOpened /> },
  { name: "Calendar", to: "/calendar", icon: <FaCalendarAlt /> },
];

export const icons = {
  priority: {
    critical: <BsExclamationCircle />,
    high: <AiOutlineWarning />,
    medium: <FaCalendarAlt />,
    low: <MdInfoOutline />,
  },
  role: {
    developer: <FaCode />,
    tester: <FaBug />,
    designer: <FaPalette />,
    admin: <FaUserShield />,
  },
  status: {
    completed: <BsCheckCircle />,
    "on hold": <AiOutlinePauseCircle />,
    progressing: <BiRun />,
    "in progress": <BiRun />,
    active: <MdCheckCircle />,
    inactive: <MdCancel />,
    open: <MdInfoOutline />,
    review: <FaRegFlag />,
    closed: <BsCheckCircle />,
    resolved: <BsCheckCircle />,
    new: <BsPlusCircle />,
  },
};

export const colors = {
  critical: "#ff6347",
  high: "#ffaa00",
  medium: "#3498db",
  low: "#6DBE45",
  open: "#2ecc71",
  "in progress": "#007B8A",
  review: "royalblue",
  closed: "#808080",
  resolved: "#0066cc",
  completed: "#0066cc",
  new: "#9b59b6",
};

export const priorityList = [
  { value: "critical", label: "Critical" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export const roleList = [
  { value: "", label: "Select a role" },
  { value: "designer", label: "Designer" },
  { value: "developer", label: "Developer" },
  { value: "tester", label: "Tester" },
];

export const statusList = [
  { value: "new", label: "New" },
  { value: "open", label: "Open" },
  { value: "in progress", label: "In Progress" },
  { value: "review", label: "Review" },
  { value: "resolved", label: "Resolved" },
];
