import Modal from "../ui/modal/Modal";
import Button, { OutlinedButton } from "../ui/button/Button";

import { useLocation, useNavigate } from "react-router-dom";

import { useBugs } from "../../contexts/bugsContext";
import { useTasks } from "../../contexts/tasksContext";
import { useProjects } from "../../contexts/projectsContext";
import { useToast } from "../../contexts/toastContext";
import { useState, useEffect } from "react";

const DeleteModal = ({ isOpen, onClose }) => {
  const [itemId, setItemId] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  let [type] = location.pathname.split("/").slice(1);

  const { tasks, deleteTask } = useTasks();
  const { bugs, deleteBug } = useBugs();
  const { projects, deleteProject } = useProjects();

  useEffect(() => {
    // Set type and id when the component mounts or location changes
    const pathParts = location.pathname.split("/").slice(1);
    setItemId(pathParts[1]);
  }, [location.pathname]);

  let result;
  if (type === "tasks") {
    result = tasks.filter((task) => task.$id === itemId)[0];
  } else if (type === "bugs") {
    result = bugs.filter((bug) => bug.$id === itemId)[0];
  } else {
    result = projects.filter((project) => project.$id === itemId)[0];
  }

  const handleDelete = async () => {
    let res;
    if (type === "tasks") {
      res = await deleteTask(result.$id);
    } else if (type === "bugs") {
      res = await deleteBug(result.$id);
    } else {
      res = await deleteProject(result.$id);
    }

    navigate(`/${type}`);
    if (res.error) {
      addToast({ type: "fail", message: "Could not delete item!" });
      return;
    }
    addToast({ type: "success", message: "Deleted Succcessfully!" });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:min-w-[500px]">
        <h2 className="text-tertiary border-b-[1px] pb-2">
          Do you want to delete?
        </h2>

        <div className="mt-4 flex justify-end gap-4">
          <OutlinedButton onClick={onClose}>Cancel</OutlinedButton>
          <Button onClick={handleDelete} className="border-0 outline-none">
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
