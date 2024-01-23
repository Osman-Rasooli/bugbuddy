import Modal from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import Input from "../ui/form/Input";
import TextArea from "../ui/form/TextArea";
import Select from "../ui/form/Select";

import { priorityList, statusList, dummyUsers } from "../../data/data.js";

const CreateProjectModal = ({ isOpen, onClose }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("data");
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:min-w-[500px]">
        <h2 className="text-tertiary border-b-[1px] pb-2">Create a New Task</h2>
        <form onSubmit={submitHandler} className="mt-5 text-sm">
          <div className="flex flex-col md:flex-row gap-5 mb-3">
            <div className="flex-1">
              <Input
                label="Task Name"
                id="taskName"
                name="taskName"
                type="text"
                placeholder="Fix Login Authentication Issue"
                errorText="Task Name cannot be blank!"
              />
            </div>
            <div className="flex-1">
              <Input
                label="Related to Project"
                id="projectName"
                name="projectName"
                type="text"
                placeholder="Aseel E-Commerce"
                errorText="Related Project cannot be blank!"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <Select
                label="Priority"
                id="priority"
                name="priority"
                errorText="Select a priority"
                options={priorityList}
              />
            </div>
            <div className="flex-1">
              <Select
                label="Status"
                id="status"
                name="status"
                errorText="Select a status"
                options={statusList}
              />
            </div>
          </div>
          <div className="mb-3">
            <TextArea
              label="Task Description"
              id="description"
              name="description"
              placeholder="Task description..."
              errorText="Task Description cannot be blank!"
            />
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <Select
                label="Assigned to"
                id="assignedTo"
                name="assignedTo"
                errorText="Select a team member"
                options={dummyUsers}
              />
            </div>
            <div className="flex-1">
              <Input
                label="Due Date"
                id="endDate"
                name="endDate"
                type="date"
                errorText="Date cannot be blank!"
              />
            </div>
          </div>

          <div className="flex md:justify-end mt-4">
            <Button
              type="submit"
              className="border-none flex-1 md:flex-none font-bold"
            >
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;