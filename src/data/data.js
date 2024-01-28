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
    alias: "ECP",
    description:
      "Build a comprehensive e-commerce platform with user authentication and payment integration.",
    status: "progressing",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    manager: "Alice Johnson",
    progress: 78,
    priority: "high",
    Bugs: 9,
    Tasks: 25,
  },
  {
    id: 2,
    projectName: "Mobile App Redesign",
    alias: "MAR",
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
    alias: "ITP",
    description:
      "Develop a training platform for internal use, providing courses and assessments for employees.",
    status: "on hold",
    startDate: "2023-07-01",
    endDate: "2023-12-31",
    manager: "Charlie Davis",
    progress: 15,
    priority: "medium",
    Bugs: 15,
    Tasks: 10,
  },
  {
    id: 4,
    projectName: "Mobile App Redesign",
    alias: "MAR",
    description:
      "Redesign the user interface and improve user experience for the existing mobile application.",
    status: "completed",
    startDate: "2023-02-15",
    endDate: "2023-05-31",
    manager: "Bob Williams",
    progress: 100,
    priority: "critical",
    Bugs: 20,
    Tasks: 18,
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

export const dummyBugs = [
  {
    id: 1,
    title: "UI Rendering Issue",
    description: "Buttons on the dashboard are not rendering properly.",
    priority: "medium",
    status: "open",
    assignedTo: "John Doe",
    createdAt: "2024-01-20",
    updatedAt: "2024-02-21",
    project: "E-commerce Platform",
  },
  {
    id: 2,
    title: "Data Loss on Form Submit",
    description: "Submitting a form results in data loss in certain scenarios.",
    priority: "high",
    status: "progressing",
    assignedTo: "Jane Smith",
    createdAt: "2024-01-22",
    updatedAt: "2024-03-23",
    project: "Mobile App Redesign",
  },
  {
    id: 3,
    title: "Crash on Mobile Devices",
    description: "App crashes frequently on iOS devices during navigation.",
    priority: "critical",
    status: "open",
    assignedTo: "Alice Johnson",
    createdAt: "2024-01-25",
    updatedAt: "2024-02-26",
    project: "E-commerce Platform",
  },
  {
    id: 4,
    title: "Performance Degradation",
    description:
      "Loading times have increased significantly after the latest update.",
    priority: "high",
    status: "progressing",
    assignedTo: "Alice Johnson",
    createdAt: "2024-01-28",
    updatedAt: "2024-02-29",
    project: "Internal Training Platform",
  },
  {
    id: 5,
    title: "Broken Link in Documentation",
    description: "Documentation contains broken links leading to 404 errors.",
    priority: "low",
    status: "resolved",
    assignedTo: "David Lee",
    createdAt: "2024-01-30",
    updatedAt: "2024-03-31",
    project: "E-commerce Platform",
  },
  {
    id: 6,
    title: "Missing Translation Strings",
    description:
      "Certain strings are not translated in the French version of the app.",
    priority: "medium",
    status: "open",
    assignedTo: "Jack White",
    createdAt: "2024-02-02",
    updatedAt: "2024-03-03",
    project: "Internal Training Platform",
  },
  {
    id: 7,
    title: "Incorrect Calculation in Reports",
    description: "Reports are showing incorrect totals for monthly statistics.",
    priority: "high",
    status: "progressing",
    assignedTo: "Jack White",
    createdAt: "2024-02-05",
    updatedAt: "2024-02-25",
    project: "E-commerce Platform",
  },
  {
    id: 8,
    title: "Email Notifications Not Sending",
    description: "Users are not receiving email notifications for new tasks.",
    priority: "medium",
    status: "completed",
    assignedTo: "Peter Brown",
    createdAt: "2024-02-01",
    updatedAt: "2024-02-09",
    project: "Mobile App Redesign",
  },
  {
    id: 9,
    title: "Browser Compatibility Issue",
    description: "App is not rendering correctly in Internet Explorer 11.",
    priority: "medium",
    status: "progressing",
    assignedTo: "Sophia Taylor",
    createdAt: "2024-02-11",
    updatedAt: "2024-02-17",
    project: "Mobile App Redesign",
  },
  {
    id: 10,
    title: "Missing Error Handling",
    description:
      "Certain error scenarios are not handled gracefully, leading to crashes.",
    priority: "high",
    status: "open",
    assignedTo: "Sophia Taylor",
    createdAt: "2024-02-15",
    updatedAt: "2024-02-20",
    project: "Mobile App Redesign",
  },
];

export const dummyTasks = [
  {
    id: 1,
    name: "Fix Login Authentication Issue",
    description: "Users are unable to log in due to authentication errors.",
    assignedTo: "John Doe",
    status: "open",
    priority: "high",
    createdDate: "2023-11-23",
    dueDate: "2024-02-05",
    closedDate: "",
  },
  {
    id: 2,
    name: "Implement Two-Factor Authentication",
    description:
      "Enhance security by adding two-factor authentication to the login process.",
    assignedTo: "Jane Smith",
    status: "progressing",
    priority: "medium",
    createdDate: "2023-11-23",
    dueDate: "2024-02-10",
    closedDate: "",
  },
  {
    id: 3,
    name: "Optimize Database Queries for Dashboard",
    description:
      "Improve performance by optimizing database queries on the dashboard page.",
    assignedTo: "Alice Johnson",
    status: "open",
    priority: "high",
    createdDate: "2024-01-03",
    dueDate: "2024-02-08",
    closedDate: "",
  },
  {
    id: 4,
    name: "Create User Profile Page",
    description:
      "Develop a user profile page with editable user information and preferences.",
    assignedTo: "Bob Wilson",
    status: "progressing",
    priority: "critical",
    createdDate: "2023-11-23",
    dueDate: "2024-02-15",
    closedDate: "",
  },
  {
    id: 5,
    name: "Test and Validate Contact Form",
    description:
      "Ensure the contact form is working correctly and validate input data.",
    assignedTo: "Eva Rodriguez",
    status: "review",
    priority: "low",
    createdDate: "2023-02-10",
    dueDate: "2024-02-12",
    closedDate: "",
  },
  {
    id: 6,
    name: "Optimize Database Queries for Dashboard",
    description:
      "Improve performance by optimizing database queries on the dashboard page.",
    assignedTo: "David Lee",
    status: "open",
    priority: "high",
    createdDate: "2023-12-03",
    dueDate: "2024-02-08",
    closedDate: "",
  },
  {
    id: 7,
    name: "Create User Profile Page",
    description:
      "Develop a user profile page with editable user information and preferences.",
    assignedTo: "Bob Wilson",
    status: "closed",
    priority: "critical",
    createdDate: "2023-01-10",
    dueDate: "2024-01-15",
    closedDate: "2024-01-15",
  },
  {
    id: 8,
    name: "Test and Validate Contact Form",
    description:
      "Ensure the contact form is working correctly and validate input data.",
    assignedTo: "Sophia Taylor",
    status: "review",
    priority: "low",
    createdDate: "2023-09-03",
    dueDate: "2024-02-12",
    closedDate: "",
  },
];

export const colors = {
  critical: "#ff6347",
  high: "#ffaa00",
  medium: "#3498db",
  low: "#6DBE45",
  open: "#2ecc71",
  "in progress": "#87ceeb",
  review: "royalblue",
  closed: "#808080",
  resolved: "#0066cc",
  completed: "#0066cc",
  new: "#9b59b6",
};

// export const priorityList = ["critical", "high", "medium", "low"];

export const statusList = ["open", "progressing", "review", "resolved"];

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
