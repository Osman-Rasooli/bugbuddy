import Modal from "../ui/modal/Modal";

import UpdateBugModal from "../bugModal/UpdateBugModal";
import UpdateTaskModal from "../taskModal/UpdateTaskModal";
import UpdateProjectModal from "../projectModal/UpdateProjectModal";

import { useLocation } from "react-router-dom";

const UpdateModal = ({ isOpen, onClose }) => {
  const location = useLocation();
  let [type, id] = location.pathname.split("/").slice(1);

  let renderedModal;

  if (type === "bugs") {
    renderedModal = (
      <UpdateBugModal isOpen={isOpen} onClose={onClose} id={id} />
    );
  } else if (type === "tasks") {
    renderedModal = (
      <UpdateTaskModal isOpen={isOpen} onClose={onClose} id={id} />
    );
  } else {
    renderedModal = (
      <UpdateProjectModal isOpen={isOpen} onClose={onClose} id={id} />
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="">{renderedModal}</div>
    </Modal>
  );
};

export default UpdateModal;
