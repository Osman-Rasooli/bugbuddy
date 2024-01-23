import { useState } from "react";
import Table from "../../components/ui/table/Table";
import { OutlinedButton } from "../../components/ui/button/Button";
import CreateProjectModal from "../../components/projectModal/CreateProjectModal";
import { useProjects } from "../../contexts/projectsContext";

const Projects = () => {
  const { projects, loading } = useProjects();
  console.log(projects);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="text-whiteLight">
      <CreateProjectModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex justify-end px-4">
        <OutlinedButton onClick={openModal}>Add Project</OutlinedButton>
      </div>
      <Table
        list={extractSpecificData(projects)}
        title="Projects"
        link="projects"
        loading={loading}
      />
    </div>
  );
};

// Refactoring the received data into Table Component Compatible Data
const extractSpecificData = (data) => {
  const extractedData = data.map((document, index) => {
    const { $id, name, description, status, priority, progress, createdBy } =
      document;
    return {
      No: index + 1,
      $id,
      name,
      description,
      status,
      priority,
      progress,
      createdBy,
    };
  });

  return extractedData;
};

export default Projects;
