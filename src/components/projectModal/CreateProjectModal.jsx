import Modal from "../ui/modal/Modal";
import Button from "../ui/button/Button";

import { BsExclamationCircle } from "react-icons/bs";

import { priorityList } from "../../data/data.js";

const CreateProjectModal = ({ isOpen, onClose }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("data");
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
              <label
                htmlFor="projectName"
                className="block mb-1 uppercase text-[12px]"
              >
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                id="projectName"
                placeholder="Aseel E-Commerce"
                className="w-full bg-secondary px-2 py-1 rounded-sm outline-none"
              />
              <small className="flex items-center gap-1 text-[red] mt-1">
                <BsExclamationCircle />{" "}
                <span>Project Name cannot be blank!</span>
              </small>
            </div>
            <div className="flex-1">
              <label
                htmlFor="alias"
                className="block mb-1 uppercase text-[12px]"
              >
                A short Alias for the Project
              </label>
              <input
                type="text"
                name="alias"
                id="alias"
                placeholder="AEC"
                className="w-full bg-secondary px-2 py-1 rounded-sm outline-none"
              />
              <small className="flex items-center gap-1 text-[red] mt-1">
                <BsExclamationCircle /> <span>Alias cannot be blank!</span>
              </small>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <label
                htmlFor="endDate"
                className="block mb-1 uppercase text-[12px]"
              >
                Due Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                className="w-full bg-secondary px-2 py-1 rounded-sm outline-none"
              />
              <small className="flex items-center gap-1 text-[red] mt-1">
                <BsExclamationCircle /> <span>Date cannot be blank!</span>
              </small>
            </div>
            <div className="flex-1">
              <label
                htmlFor="priority"
                className="block mb-1 uppercase text-[12px]"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                className="w-full bg-secondary px-2 py-[6px] rounded-sm outline-none"
              >
                {priorityList.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
              <small className="flex items-center gap-1 text-[red] mt-1">
                <BsExclamationCircle /> <span>Select a priority</span>
              </small>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-1 uppercase text-[12px]"
            >
              Project Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Project description..."
              className="w-full bg-secondary px-2 py-1 rounded-sm outline-none"
              rows="4"
            ></textarea>
            <small className="flex items-center gap-1 text-[red] mt-1">
              <BsExclamationCircle />{" "}
              <span>Project Description cannot be blank!</span>
            </small>
          </div>
          <div className="flex md:justify-end">
            <Button type="submit" className="border-none flex-1 md:flex-none">
              Create Project
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
