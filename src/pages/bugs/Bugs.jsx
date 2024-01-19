import { dummyBugs } from "../../data/data";
import { OutlinedButton } from "../../components/ui/button/Button";
import Table from "../../components/ui/table/Table";
import CustomBarChart from "../../components/ui/customBarChart/CustomBarChart";

const Bugs = () => {
  const chartData = prepareDataForProjectStatusPriorityChart(dummyBugs);
  const xAxisKey = "project";
  const barDataKeys = [
    "open",
    "resolved",
    "progressing",
    "low",
    "medium",
    "high",
    "critical",
  ];
  return (
    <div className="text-whiteLight">
      <div className="flex justify-end px-4">
        <OutlinedButton>Add Bug</OutlinedButton>
      </div>
      <div>
        <Table
          list={dummyBugs}
          title="Bugs"
          link="bugs"
          className="max-h-[500px] flex-1"
        />
      </div>
      <div className="">
        <CustomBarChart
          data={chartData}
          xAxisKey={xAxisKey}
          dataKeys={barDataKeys}
          title="Bugs Preview"
        />
      </div>
    </div>
  );
};

const prepareDataForProjectStatusPriorityChart = (bugs) => {
  const projectData = bugs.reduce((acc, bug) => {
    const { project, status, priority } = bug;
    acc[project] = acc[project] || { project, status: {}, priority: {} };
    acc[project].status[status] = (acc[project].status[status] || 0) + 1;
    acc[project].priority[priority] =
      (acc[project].priority[priority] || 0) + 1;
    return acc;
  }, {});

  const data = Object.values(projectData).map(
    ({ project, status, priority }) => ({
      project,
      ...status,
      ...priority,
    })
  );

  return data;
};

export default Bugs;
