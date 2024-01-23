import { useState } from "react";
import Table from "../../components/ui/table/Table";
import { OutlinedButton } from "../../components/ui/button/Button";
import CreateProjectModal from "../../components/projectModal/CreateProjectModal";
import { useProjects } from "../../contexts/projectsContext";

import { extractSpecificData } from "../../utils/utils";

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
        list={extractSpecificData(projects, [
          "$id",
          "name",
          "description",
          "status",
          "priority",
          "progress",
          "createdBy",
        ])}
        title="Projects"
        link="projects"
        loading={loading}
      />
    </div>
  );
};

export default Projects;
