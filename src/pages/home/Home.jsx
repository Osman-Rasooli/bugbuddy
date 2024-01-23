import CustomBarchart from "../../components/ui/customBarChart/CustomBarChart";
import CustomPieChart from "../../components/ui/customPieChart/CustomPieChart";
import Table from "../../components/ui/table/Table";
import { dummyBugs } from "../../data/data";
import { useMembers } from "../../contexts/membersContext";
import { useProjects } from "../../contexts/projectsContext";

const Home = () => {
  const { members, loading: memberLoading } = useMembers();
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useProjects();

  const dataProjects = projects.map((project) => ({
    name: project.name,
    alias: project.alias,
    bugs: project.bugs,
    tasks: project.tasks,
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
        {members && (
          <Table
            list={extractSpecificData(members)}
            title="Teams"
            className="max-h-[400px] flex-1"
            loading={memberLoading}
          />
        )}
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <CustomBarchart
          data={dataProjects}
          xAxisKey="alias"
          dataKeys={["bugs", "tasks"]}
          title="Projects Overview"
          loading={projectsLoading}
          error={projectsError}
        />
        <CustomPieChart data={pieChartData} title="Bugs Overview" />
      </div>
    </div>
  );
};

// Refactoring the received data into Table Component Compatible Data
const extractSpecificData = (data) => {
  const extractedData = data.map((document, index) => {
    const { $id, name, status, email, role, currentDomain } = document;
    return {
      No: index + 1,
      $id,
      name,
      email,
      status,
      role,
      currentDomain,
    };
  });

  return extractedData;
};

export default Home;
