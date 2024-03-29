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
import { useEffect } from "react";

const Home = () => {
  const { members, loading: memberLoading, fetchMembers } = useMembers();
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

  useEffect(() => {
    if (members.length === 0) {
      fetchMembers();
    }
  }, [members.length, fetchMembers]);

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
      <div className="flex flex-row gap-3 text-secondary dark:text-white md:gap-5 mt-7">
        <div className="flex flex-col justify-center items-center bg-white dark:bg-secondary hover:bg-whiteBg dark:hover:bg-primary transition py-7 px-2 md:px-5 flex-1 border-[0.5px]  rounded-md border-secondaryLight shadow-sm shadow-secondaryLight dark:shadow-white">
          <span className="block md:text-lg uppercase">Projects</span>
          <span className="text-tertiary text-4xl md:text-6xl mt-2">
            {projects.length}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white dark:bg-secondary hover:bg-whiteBg dark:hover:bg-primary transition py-5 px-2 md:px-5 flex-1 border-[0.5px]  rounded-md border-secondaryLight shadow-sm shadow-secondaryLight dark:shadow-white">
          <span className="block md:text-lg uppercase text-center">
            Members
          </span>
          <span className="text-tertiary text-4xl md:text-6xl mt-2">
            {members.length}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white dark:bg-secondary hover:bg-whiteBg dark:hover:bg-primary transition py-5 px-2 md:px-5 flex-1 border-[0.5px]  rounded-md border-secondaryLight shadow-sm shadow-secondaryLight dark:shadow-white">
          <span className="block md:text-lg uppercase">Tasks</span>
          <span className="text-tertiary text-4xl md:text-6xl mt-2">
            {tasks.length}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white dark:bg-secondary hover:bg-whiteBg dark:hover:bg-primary transition py-5 px-2 md:px-5 flex-1 border-[0.5px]  rounded-md border-secondaryLight shadow-sm shadow-secondaryLight dark:shadow-white">
          <span className="block md:text-lg uppercase">Bugs</span>
          <span className="text-tertiary text-4xl md:text-6xl mt-2">
            {bugs.length}
          </span>
        </div>
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
