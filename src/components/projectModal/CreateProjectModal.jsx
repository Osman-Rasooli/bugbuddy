import Modal from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import Input from "../ui/form/Input";
import TextArea from "../ui/form/TextArea";
import Select from "../ui/form/Select";

import { priorityList } from "../../data/data.js";

const CreateProjectModal = ({ isOpen, onClose }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:min-w-[500px]">
        <h2 className="text-tertiary border-b-[1px] pb-2">
          Create a New Project
        </h2>
        <form onSubmit={submitHandler} className="mt-5 text-sm">
          <div className="flex flex-col md:flex-row gap-5 mb-3">
            <div className="flex-1">
              <Input
                label="Project Name"
                id="projectName"
                name="projectName"
                type="text"
                placeholder="Aseel E-Commerce"
                errorText="Project Name cannot be blank!"
              />
            </div>
            <div className="flex-1">
              <Input
                label="A short Alias for the Project"
                id="alias"
                name="alias"
                type="text"
                placeholder="AEC"
                errorText="Alias cannot be blank!"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <Input
                label="Due Date"
                id="endDate"
                name="endDate"
                type="date"
                errorText="Date cannot be blank!"
              />
            </div>
            <div className="flex-1">
              <Select
                label="Priority"
                id="priority"
                name="priority"
                errorText="Select a priority"
                options={priorityList}
              />
            </div>
          </div>
          <div className="mb-4">
            <TextArea
              label="Project Description"
              id="description"
              name="description"
              placeholder="Project description..."
              errorText="Project Description cannot be blank!"
            />
          </div>
          <div className="flex md:justify-end">
            <Button
              type="submit"
              className="border-none flex-1 md:flex-none font-bold"
            >
              Add Project
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
