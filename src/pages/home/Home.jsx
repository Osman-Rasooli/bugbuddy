import CustomBarchart from "../../components/ui/customBarChart/CustomBarChart";
import CustomPieChart from "../../components/ui/customPieChart/CustomPieChart";
import Table from "../../components/ui/table/Table";
import { dummyUsers, dummyProjects, dummyBugs } from "../../data/data";

const Home = () => {
  // Bar Chart Data Preparing
  const dataProjects = dummyProjects.map((project) => ({
    name: project.projectName,
    alias: project.alias,
    bugs: project.Bugs.toString(),
    tasks: project.Tasks.toString(),
  }));

  // Pie Chart Data Preparing
  const priorityCounts = dummyBugs.reduce((acc, bug) => {
    acc[bug.priority] = (acc[bug.priority] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(priorityCounts).map((priority) => ({
    name: priority,
    value: priorityCounts[priority],
  }));

  return (
    <div className="text-whiteLight">
      <div className="flex flex-col md:flex-row gap-20 md:gap-5">
        <Table
          list={dummyUsers}
          title="Teams"
          className="max-h-[400px] flex-1"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <CustomBarchart
          data={dataProjects}
          xAxisKey="alias"
          dataKeys={["bugs", "tasks"]}
          title="Projects Overview"
        />
        <CustomPieChart data={pieChartData} title="Bugs Overview" />
      </div>
    </div>
  );
};

export default Home;
