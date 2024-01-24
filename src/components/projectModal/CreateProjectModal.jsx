import Modal from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import CustomInput from "../ui/form/CustomInput";
import CustomTextarea from "../ui/form/CustomTextarea";

import { formatDateForFormik } from "../../utils/utils";

import { priorityList } from "../../data/data.js";

import { useProjects } from "../../contexts/projectsContext";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  projectName: Yup.string().required("Project Name is required!"),
  alias: Yup.string().required("Project Alternative Name is required!"),
  dueDate: Yup.date()
    .required("Project Due Date is required!")
    .min(new Date(), "Due Date must be in the future"),
  priority: Yup.string(""),
  description: Yup.string().required("Project Description is required"),
});

const CreateProjectModal = ({ isOpen, onClose }) => {
  const { createProject } = useProjects();
  const submitHandler = async (values) => {
    await createProject(values);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:min-w-[500px]">
        <h2 className="text-tertiary border-b-[1px] pb-2">
          Create a New Project
        </h2>
        <Formik
          initialValues={{
            projectName: "",
            alias: "",
            description: "",
            dueDate: formatDateForFormik(new Date()),
            priority: "medium",
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({ status }) => {
            return (
              <Form className="space-y-2 py-4">
                <div className="flex flex-col md:flex-row gap-5 mb-3">
                  <div className="flex-1">
                    <Field
                      label="Project Name"
                      id="projectName"
                      name="projectName"
                      type="text"
                      placeholder="Aseel E-Commerce"
                      as={CustomInput}
                    />
                  </div>
                  <div className="flex-1">
                    <Field
                      label="A short Alias for the Project"
                      id="alias"
                      name="alias"
                      type="text"
                      placeholder="AEC"
                      as={CustomInput}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-5 mb-3">
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
                  <div className="flex-1">
                    <Field
                      type="select"
                      label="Priority"
                      id="priority"
                      name="priority"
                      className="h-[35px]"
                      options={priorityList}
                      as={CustomInput}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Field
                    type="textarea"
                    label="Project Description"
                    id="description"
                    name="description"
                    placeholder="Project description..."
                    as={CustomTextarea}
                  />
                </div>

                <div className="flex md:justify-end">
                  <Button
                    type="submit"
                    className="border-none text-sm flex-1 md:flex-none font-bold"
                  >
                    Add Project
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
