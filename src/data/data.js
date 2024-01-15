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
    role: { name: "developer", icon: <FaCode /> },
    status: "active",
    domain: "example1.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: { name: "tester", icon: <FaBug /> },
    status: "active",
    domain: "example2.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: { name: "developer", icon: <FaCode /> },
    status: "inactive",
    domain: "example3.com",
  },
  {
    id: 4,
    name: "Bob Wilson",
    email: "bob.wilson@example.com",
    role: { name: "tester", icon: <FaBug /> },
    status: "active",
    domain: "example4.com",
  },
  {
    id: 5,
    name: "Eva Rodriguez",
    email: "eva.rodriguez@example.com",
    role: { name: "admin", icon: <FaUserShield /> },
    status: "active",
    domain: "example5.com",
  },
  {
    id: 6,
    name: "David Lee",
    email: "david.lee@example.com",
    role: { name: "designer", icon: <FaPalette /> },
    status: "inactive",
    domain: "example6.com",
  },
  {
    id: 7,
    name: "Grace Moore",
    email: "grace.moore@example.com",
    role: { name: "developer", icon: <FaCode /> },
    status: "active",
    domain: "example7.com",
  },
  {
    id: 8,
    name: "Peter Brown",
    email: "peter.brown@example.com",
    role: { name: "tester", icon: <FaBug /> },
    status: "inactive",
    domain: "example8.com",
  },
  {
    id: 9,
    name: "Sophia Taylor",
    email: "sophia.taylor@example.com",
    role: { name: "designer", icon: <FaPalette /> },
    status: "active",
    domain: "example9.com",
  },
  {
    id: 10,
    name: "Jack White",
    email: "jack.white@example.com",
    role: { name: "developer", icon: <FaCode /> },
    status: "active",
    domain: "example10.com",
  },
];
