import Modal from "../ui/modal/Modal";

import UpdateBugModal from "../bugModal/UpdateBugModal";
// import Button, { OutlinedButton } from "../ui/button/Button";

import { useLocation } from "react-router-dom";

// import { useBugs } from "../../contexts/bugsContext";
// import { useTasks } from "../../contexts/tasksContext";
// import { useProjects } from "../../contexts/projectsContext";

const UpdateModal = ({ isOpen, onClose }) => {
  const location = useLocation();
  let [type, id] = location.pathname.split("/").slice(1);

  //   const { tasks, deleteTask } = useTasks();
  //   const { bugs, deleteBug } = useBugs();
  //   const { projects, deleteProject } = useProjects();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="">
        <UpdateBugModal isOpen={isOpen} onClose={onClose} id={id} />
      </div>
    </Modal>
  );
};

export default UpdateModal;
