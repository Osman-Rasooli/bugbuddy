import Button, { OutlinedButton } from "../ui/button/Button";
import CustomTextarea from "../ui/form/CustomTextarea";
import CustomInput from "../ui/form/CustomInput";

import { useAuth } from "../../contexts/authContext";
import { useProjects } from "../../contexts/projectsContext";
import { useMembers } from "../../contexts/membersContext";

import { statusList, priorityList } from "../../data/data";

import { formatAppwriteDateForFormik } from "../../utils/utils";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Project Name is required!"),
  alias: Yup.string().required("Alias is required!"),
  description: Yup.string().required("Project Description is required"),
  priority: Yup.string(""),
  status: Yup.string(""),
  progress: Yup.number()
    .required("Please enter a number")
    .min(0, "Progress must be greater than or equal to 0")
    .max(100, "Progress must be less than or equal to 100"),
  dueDate: Yup.date()
    .required("Project Due Date is required!")
    .min(new Date(), "Due Date must be in the future"),
  manager: Yup.string(""),
});

const UpdateProjectModal = ({ id, isOpen, onClose }) => {
  const { projects, updateProject, loading: projectLoading } = useProjects();
  const { fetchMembers, members } = useMembers();
  const user = useAuth();
  console.log(user);

  const project = projects.filter((project) => project.$id === id)[0];

  // Prepared Members for Project Manager select
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
    const response = await updateProject(project.$id, values);
    if (response) {
      onClose();
    }
  };

  return (
    <div className="">
      <h2 className="text-tertiary border-b-[1px] pb-2">Update Project</h2>
      <Formik
        initialValues={{
          name: project.name,
          description: project.description,
          alias: project.alias,
          dueDate: formatAppwriteDateForFormik(project.dueDate),
          priority: project.priority,
          status: project.status,
          progress: project.progress,
          manager: project.manager?.toLowerCase(),
        }}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form className="space-y-2 py-4">
          <div className="flex flex-col md:flex-row gap-5 mb-3">
            <div className="flex-1">
              <Field
                label="Project Name"
                id="name"
                name="name"
                type="text"
                placeholder="Project Alpha"
                as={CustomInput}
              />
            </div>
            <div className="flex-1">
              <Field
                label="Project Alias"
                id="alias"
                name="alias"
                type="text"
                placeholder="Alpha"
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
              label="Bug Description"
              id="description"
              name="description"
              placeholder="Bug description..."
              as={CustomTextarea}
            />
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <Field
                type="number"
                label="Progress"
                id="progress"
                name="progress"
                className="h-[30px]"
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
          <div className="flex flex-col md:flex-row  gap-5 mb-3">
            <div className="flex-1">
              <Field
                type="select"
                label="Project Manager"
                id="manager"
                name="manager"
                className="h-[30px]"
                options={membersOptions}
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
              {projectLoading ? "Updating Bug..." : "Update"}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateProjectModal;
