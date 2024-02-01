import { Link, useLocation } from "react-router-dom";
import { OutlinedButton } from "../../components/ui/button/Button";

import { useState } from "react";

import { IoIosArrowBack, IoIosCreate } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

import ProjectDetail from "../../components/ui/projectDetail/ProjectDetail";
import BugDetail from "../../components/ui/bugDetail/BugDetail";
import TaskDetail from "../../components/ui/taskDetail/TaskDetail";

import DeleteTaskModal from "../../components/taskModal/DeleteTaskModal";

const Details = () => {
  const location = useLocation();
  const pagePath = location.pathname.split("/")[1];

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="text-whiteLight">
      <DeleteTaskModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="flex justify-center gap-2 md:justify-end px-4 mb-6 lg:mb-0">
        <Link to={`/${pagePath}`}>
          <OutlinedButton className="flex gap-1 items-center">
            <IoIosArrowBack />
            Back
          </OutlinedButton>
        </Link>

        <OutlinedButton className="flex gap-1 items-center">
          <IoIosCreate /> Update
        </OutlinedButton>

        <OutlinedButton onClick={openModal} className="flex gap-1 items-center">
          <AiOutlineDelete /> Delete
        </OutlinedButton>
      </div>
      {pagePath === "projects" && <ProjectDetail />}
      {pagePath === "bugs" && <BugDetail />}
      {pagePath === "tasks" && <TaskDetail />}
    </div>
  );
};

export default Details;
