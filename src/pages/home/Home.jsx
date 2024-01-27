import CustomBarchart from "../../components/ui/customBarChart/CustomBarChart";
import CustomPieChart from "../../components/ui/customPieChart/CustomPieChart";
import Table from "../../components/ui/table/Table";
import { useMembers } from "../../contexts/membersContext";
import { useProjects } from "../../contexts/projectsContext";
import { useBugs } from "../../contexts/bugsContext";
import { useTasks } from "../../contexts/tasksContext";

import {
  extractSpecificData,
  countEntriesByProject,
  combineBugsAndTasks,
} from "../../utils/utils";

const Home = () => {
  const { members, loading: memberLoading } = useMembers();
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useProjects();

  const { bugs, error: bugsError, loading: bugsLoading } = useBugs();
  const { tasks } = useTasks();

  // Bugs Pie Chart Data Refactoring after fetching data
  const priorityCounts = bugs.reduce((acc, bug) => {
    acc[bug.priority] = (acc[bug.priority] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.keys(priorityCounts).map((priority) => ({
    name: priority,
    value: priorityCounts[priority],
  }));

  // Members Table Data Refactoring after fetching data
  const resultBugs = countEntriesByProject(bugs, "project", "bugs");
  const resultTasks = countEntriesByProject(tasks, "project", "tasks");

  const resultBugsAndTasks = combineBugsAndTasks(resultBugs, resultTasks);

  // Adds Alias to all projects
  resultBugsAndTasks.forEach((item) => {
    for (let project of projects) {
      if (project.name === item.project) {
        item.alias = project.alias;
      }
    }
  });

  return (
    <div className="text-whiteLight">
      <div className="flex flex-col md:flex-row gap-20 md:gap-5">
        {members && (
          <Table
            list={extractSpecificData(members, [
              "$id",
              "name",
              "status",
              "email",
              "role",
              "currentDomain",
            ])}
            title="Teams"
            className="max-h-[400px] flex-1"
            loading={memberLoading}
          />
        )}
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <CustomBarchart
          data={resultBugsAndTasks}
          xAxisKey="alias"
          dataKeys={["bugs", "tasks"]}
          title="Projects Overview"
          loading={projectsLoading}
          error={projectsError}
        />
        <CustomPieChart
          data={pieChartData}
          title="Bugs Overview"
          loading={bugsLoading}
          error={bugsError}
        />
      </div>
    </div>
  );
};

export default Home;
