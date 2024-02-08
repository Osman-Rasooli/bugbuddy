import Modal from "../ui/modal/Modal";
import Button from "../ui/button/Button";
import CustomInput from "../ui/form/CustomInput";
import CustomTextarea from "../ui/form/CustomTextarea";

import { useToast } from "../../contexts/toastContext";

import { formatDateForFormik, uniqueID } from "../../utils/utils";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { priorityList } from "../../data/data";

import { useProjects } from "../../contexts/projectsContext";
import { useAuth } from "../../contexts/authContext";
import { useBugs } from "../../contexts/bugsContext";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Bug Name is required!"),
  description: Yup.string().required("Bug Description is required"),
  priority: Yup.string(""),
  project: Yup.string("").required("Select a Project"),
  dueDate: Yup.date()
    .required("Bug Due Date is required!")
    .min(new Date(), "Due Date must be in the future"),
});

const CreateBugModal = ({ isOpen, onClose }) => {
  const { projects } = useProjects();
  const {
    user: { name: creator },
  } = useAuth();

  const { addToast } = useToast();

  // ADD TOAST FOR TASK ERRORS
  const {
    createBug,
    loading: bugLoading,
    // error: taskError
  } = useBugs();

  // Prepared Projects for projects select
  let projectsOptions = projects.map((project) => {
    return {
      id: project.$id,
      value: project.name,
      label: project.name,
    };
  });

  projectsOptions.unshift({ value: "", label: "select a project" });

  const submitHandler = async (values) => {
    values = {
      ...values,
      createdDate: new Date(),
      id: uniqueID(),
      status: "new",
      createdBy: creator,
    };

    const response = await createBug(values);
    if (response) {
      onClose();
      addToast({ type: "success", message: "Created Bug Successfully!" });
      return;
    }
    addToast({ type: "fail", message: "Could not create bug!" });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full md:min-w-[500px]">
        <h2 className="text-tertiary border-b-[1px] pb-2">Report a New Bug</h2>
        <Formik
          initialValues={{
            name: "",
            description: "",
            project: "",
            dueDate: formatDateForFormik(new Date()),
            priority: "medium",
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form className="space-y-2 py-4">
            <div className="flex flex-col md:flex-row gap-5 mb-3">
              <div className="flex-1">
                <Field
                  label="Bug Name"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="UI Rendering Issue"
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
                  className="h-[30px]"
                  options={priorityList}
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
                placeholder="Project description..."
                as={CustomTextarea}
              />
            </div>

            <div className="flex md:justify-end">
              <Button
                type="submit"
                className="border-none text-sm flex-1 md:flex-none font-bold"
              >
                {bugLoading ? "Creating Bug..." : "Report Bug"}
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateBugModal;
