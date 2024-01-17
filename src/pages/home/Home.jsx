import CustomBarchart from "../../components/ui/customBarChart/CustomBarChart";
import Table from "../../components/ui/table/Table";
import { dummyUsers, dummyProjects } from "../../data/data";
const Home = () => {
  const data = dummyProjects.map((project) => ({
    name: project.projectName,
    bugs: project.Bugs.toString(),
    tasks: project.Tasks.toString(),
  }));
  console.log(data);
  return (
    <div className="text-whiteLight">
      <div className="flex flex-col md:flex-row gap-20 md:gap-5">
        <Table
          list={dummyUsers}
          title="Teams"
          className="max-h-[400px] flex-1"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-10">
        <CustomBarchart data={data} title="Projects Overview" />
        <CustomBarchart data={data} title="Projects Overview" />
      </div>
    </div>
  );
};

export default Home;
