import Button, { OutlinedButton } from "../ui/button/Button";
import CustomTextarea from "../ui/form/CustomTextarea";
import CustomInput from "../ui/form/CustomInput";

import { useTasks } from "../../contexts/tasksContext";
import { useAuth } from "../../contexts/authContext";
import { useProjects } from "../../contexts/projectsContext";
import { useMembers } from "../../contexts/membersContext";

import { statusList, priorityList } from "../../data/data";

import { formatAppwriteDateForFormik } from "../../utils/utils";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Task Name is required!"),
  description: Yup.string().required("Task Description is required"),
  priority: Yup.string(""),
  project: Yup.string("").required("Select a Project"),
  dueDate: Yup.date()
    .required("Task Due Date is required!")
    .min(new Date(), "Due Date must be in the future"),
});

const UpdateTaskModal = ({ id, isOpen, onClose }) => {
  const { tasks, updateTask, loading: taskLoading } = useTasks();
  const { projects } = useProjects();
  const { fetchMembers, members } = useMembers();

  const task = tasks.filter((task) => task.$id === id)[0];

  // Prepared Projects for projects select
  let projectsOptions = projects.map((project) => {
    return {
      id: project.$id,
      value: project.name,
      label: project.name,
    };
  });

  // Prepared Members for assignedTo select
  let membersOptions = members?.map((member) => {
    return {
      id: member.$id,
      value: member.name?.toLowerCase(),
      label: member.name,
      active: !member.currentDomain,
    };
  });

  membersOptions.unshift({ value: "", label: "-" });

  useEffect(() => {
    const fetchData = async () => {
      await fetchMembers();
    };
    fetchData();
  }, [fetchMembers]);

  const submitHandler = async (values) => {
    const response = await updateTask(task.$id, values);
    if (response) {
      onClose();
    }
  };

  return (
    <div>
      <h2 className="text-tertiary border-b-[1px] pb-2">Update Bug</h2>
      <Formik
        initialValues={{
          name: task.name,
          description: task.description,
          project: task.project,
          dueDate: formatAppwriteDateForFormik(task.dueDate),
          priority: task.priority,
          status: task.status,
          assignedTo: task.assignedTo?.toLowerCase(),
        }}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form className="space-y-2 py-4">
          <div className="flex flex-col md:flex-row gap-5 mb-3">
            <div className="flex-1">
              <Field
                label="Task Name"
                id="name"
                name="name"
                type="text"
                placeholder="IMPLEMENT AUTHENTICATION"
                as={CustomInput}
              />
            </div>
            <div className="flex-1">
              <Field
                type="select"
                label="Related to Project"
                id="project"
                name="project"
                className="h-[30px]"
                options={projectsOptions}
                as={CustomInput}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <Field
                type="select"
                label="Priority"
                id="priority"
                name="priority"
                className="h-[30px]"
                options={priorityList}
                as={CustomInput}
              />
            </div>
            <div className="flex-1">
              <Field
                type="select"
                label="Status"
                id="status"
                name="status"
                className="h-[30px]"
                options={statusList}
                as={CustomInput}
              />
            </div>
          </div>
          <div className="mb-4">
            <Field
              type="textarea"
              label="Task Description"
              id="description"
              name="description"
              placeholder="Task description..."
              as={CustomTextarea}
            />
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <Field
                type="select"
                label="Assigned To"
                id="assignedTo"
                name="assignedTo"
                className="h-[30px]"
                options={membersOptions}
                as={CustomInput}
              />
            </div>
            <div className="flex-1">
              <Field
                label="Due Date"
                id="dueDate"
                name="dueDate"
                type="date"
                className=""
                as={CustomInput}
              />
            </div>
          </div>
          <div className="flex gap-5 md:justify-end">
            <OutlinedButton type="button" onClick={onClose}>
              Cancel
            </OutlinedButton>
            <Button
              type="submit"
              className="border-none text-sm flex-1 md:flex-none font-bold"
            >
              {taskLoading ? "Updating Task..." : "Update"}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateTaskModal;
