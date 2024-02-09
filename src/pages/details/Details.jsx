import { Link, useLocation } from "react-router-dom";
import { OutlinedButton } from "../../components/ui/button/Button";

import { useState } from "react";

import { useAuth } from "../../contexts/authContext";

import { IoIosArrowBack, IoIosCreate } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

import ProjectDetail from "../../components/ui/projectDetail/ProjectDetail";
import BugDetail from "../../components/ui/bugDetail/BugDetail";
import TaskDetail from "../../components/ui/taskDetail/TaskDetail";

import DeleteModal from "../../components/deleteModal/DeleteModal";
import UpdateModal from "../../components/updateModal/UpdateModal";

const Details = () => {
  const { user } = useAuth();
  const location = useLocation();
  const pagePath = location.pathname.split("/")[1];

  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isAssignedTo, setIsAssignedTo] = useState(false);
  const [isManager, setIsManager] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let content;
  if (pagePath === "projects") {
    content = <ProjectDetail setIsManager={setIsManager} user={user} />;
  } else if (pagePath === "bugs") {
    content = <BugDetail setIsAssignedTo={setIsAssignedTo} />;
  } else {
    content = <TaskDetail setIsAssignedTo={setIsAssignedTo} />;
  }

  return (
    <div className="text-whiteLight">
      <DeleteModal isOpen={isModalOpen} onClose={closeModal} />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
      />

      <div className="flex justify-center gap-2 md:justify-end px-4 mb-6 lg:mb-0">
        <Link to={`/${pagePath}`}>
          <OutlinedButton className="flex gap-1 items-center">
            <IoIosArrowBack />
            Back
          </OutlinedButton>
        </Link>

        {/* Only ADMIN and MANAGER can UPDATE items */}
        {(user.labels?.includes("admin") || isAssignedTo || isManager) && (
          <OutlinedButton
            onClick={() => setUpdateModalOpen(true)}
            className="flex gap-1 items-center"
          >
            <IoIosCreate /> Update
          </OutlinedButton>
        )}

        {/* Only ADMIN and MANAGER can DELETE items */}
        {user.labels?.includes("admin") && (
          <OutlinedButton
            onClick={openModal}
            className="flex gap-1 items-center"
          >
            <AiOutlineDelete /> Delete
          </OutlinedButton>
        )}
      </div>
      {content}
    </div>
  );
};

export default Details;
