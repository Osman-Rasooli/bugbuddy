import { useState } from "react";
import Table from "../../components/ui/table/Table";
import { OutlinedButton } from "../../components/ui/button/Button";
import { dummyProjects } from "../../data/data";
import CreateProjectModal from "../../components/projectModal/CreateProjectModal";

const Projects = () => {
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
      <Table list={dummyProjects} title="Projects" link="projects" />
    </div>
  );
};

export default Projects;
