import Table from "../../components/ui/table/Table";
import { dummyProjects } from "../../data/data";

const projects = () => {
  return (
    <div className="text-whiteLight">
      <Table list={dummyProjects} title="Projects" link="projects" />
    </div>
  );
};

export default projects;
