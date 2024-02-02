import Modal from "../ui/modal/Modal";
import Button, { OutlinedButton } from "../ui/button/Button";

import { useLocation, useNavigate } from "react-router-dom";

import { useBugs } from "../../contexts/bugsContext";
import { useTasks } from "../../contexts/tasksContext";
import { useProjects } from "../../contexts/projectsContext";

const DeleteModal = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let [type, id] = location.pathname.split("/").slice(1);

  const { tasks, deleteTask } = useTasks();
  const { bugs, deleteBug } = useBugs();
  const { projects, deleteProject } = useProjects();

  let result;
  if (type === "tasks") {
    result = tasks.filter((task) => task.$id === id)[0];
  } else if (type === "bugs") {
    result = bugs.filter((bug) => bug.$id === id)[0];
  } else {
    result = projects.filter((project) => project.$id === id)[0];
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

    if (res.error) {
      alert(res.error);
    }
    navigate(`/${type}`);
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
