import Table from "../../components/ui/table/Table";
import { OutlinedButton } from "../../components/ui/button/Button";
import { dummyProjects } from "../../data/data";

const projects = () => {
  return (
    <div className="text-whiteLight">
      <div className="flex justify-end px-4">
        <OutlinedButton>Add Project</OutlinedButton>
      </div>
      <Table list={dummyProjects} title="Projects" link="projects" />
    </div>
  );
};

export default projects;
