import {
  FaHome,
  FaBriefcase,
  FaTasks,
  FaCalendarAlt,
  FaCode,
  FaUserShield,
  FaPalette,
  FaBug,
} from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import { BsExclamationCircle, BsCheckCircle } from "react-icons/bs";
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

// Function to generate unique dummy users
export const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "developer",
    status: "active",
    domain: "example1.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "tester",
    status: "active",
    domain: "example2.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "developer",
    status: "inactive",
    domain: "example3.com",
  },
  {
    id: 4,
    name: "Bob Wilson",
    email: "bob.wilson@example.com",
    role: "tester",
    status: "active",
    domain: "example4.com",
  },
  {
    id: 5,
    name: "Eva Rodriguez",
    email: "eva.rodriguez@example.com",
    role: "admin",
    status: "active",
    domain: "example5.com",
  },
  {
    id: 6,
    name: "David Lee",
    email: "david.lee@example.com",
    role: "designer",
    status: "inactive",
    domain: "example6.com",
  },
  {
    id: 7,
    name: "Grace Moore",
    email: "grace.moore@example.com",
    role: "developer",
    status: "active",
    domain: "example7.com",
  },
  {
    id: 8,
    name: "Peter Brown",
    email: "peter.brown@example.com",
    role: "tester",
    status: "inactive",
    domain: "example8.com",
  },
  {
    id: 9,
    name: "Sophia Taylor",
    email: "sophia.taylor@example.com",
    role: "designer",
    status: "active",
    domain: "example9.com",
  },
  {
    id: 10,
    name: "Jack White",
    email: "jack.white@example.com",
    role: "developer",
    status: "active",
    domain: "example10.com",
  },
];

// Dummy Projects
export const dummyProjects = [
  {
    id: 1,
    projectName: "E-commerce Platform",
    description:
      "Build a comprehensive e-commerce platform with user authentication and payment integration.",
    status: "in progress",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    manager: "Alice Johnson",
    progress: 50,
    priority: "high",
    Bugs: 3,
    Tasks: 25,
  },
  {
    id: 2,
    projectName: "Mobile App Redesign",
    description:
      "Redesign the user interface and improve user experience for the existing mobile application.",
    status: "completed",
    startDate: "2023-02-15",
    endDate: "2023-05-31",
    manager: "Bob Williams",
    progress: 100,
    priority: "critical",
    Bugs: 0,
    Tasks: 18,
  },
  {
    id: 3,
    projectName: "Internal Training Platform",
    description:
      "Develop a training platform for internal use, providing courses and assessments for employees.",
    status: "on hold",
    startDate: "2023-07-01",
    endDate: "2023-12-31",
    manager: "Charlie Davis",
    progress: 15,
    priority: "medium",
    Bugs: 5,
    Tasks: 10,
  },
  {
    id: 4,
    projectName: "Mobile App Redesign",
    description:
      "Redesign the user interface and improve user experience for the existing mobile application.",
    status: "completed",
    startDate: "2023-02-15",
    endDate: "2023-05-31",
    manager: "Bob Williams",
    progress: 100,
    priority: "critical",
    Bugs: 0,
    Tasks: 18,
  },
  {
    id: 5,
    projectName: "E-commerce Platform",
    description:
      "Build a comprehensive e-commerce platform with user authentication and payment integration.",
    status: "in progress",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    manager: "Alice Johnson",
    progress: 50,
    priority: "high",
    Bugs: 3,
    Tasks: 25,
  },
  {
    id: 6,
    projectName: "E-commerce Platform",
    description:
      "Build a comprehensive e-commerce platform with user authentication and payment integration.",
    status: "in progress",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    manager: "Alice Johnson",
    progress: 50,
    priority: "low",
    Bugs: 3,
    Tasks: 25,
  },
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
    "in progress": <BiRun />,
    active: <MdCheckCircle />,
    inactive: <MdCancel />,
  },
};
