import Table from "../../components/ui/table/Table";
import CustomPieChart from "../../components/ui/customPieChart/CustomPieChart";
import { OutlinedButton } from "../../components/ui/button/Button";
import { dummyTasks } from "../../data/data";

const Tasks = () => {
  // Preparing Tasks Pie Chart Data
  const statusCounts = dummyTasks.reduce((counts, task) => {
    const status = task.status.toLowerCase();
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});

  const pieChartData = Object.keys(statusCounts).map((status) => ({
    name: status,
    value: statusCounts[status],
  }));

  // Preparing Tasks Pie Chart Data for Priorities
  const priorityCounts = dummyTasks.reduce((counts, task) => {
    const priority = task.priority.toLowerCase();
    counts[priority] = (counts[priority] || 0) + 1;
    return counts;
  }, {});

  const pieChartPriorityData = Object.keys(priorityCounts).map((priority) => ({
    name: priority,
    value: priorityCounts[priority],
  }));

  console.log(pieChartPriorityData);

  return (
    <div className="text-whiteLight">
      <div className="flex justify-end px-4">
        <OutlinedButton>Add Task</OutlinedButton>
      </div>
      <div>
        <Table list={dummyTasks} title="Tasks" link="tasks" />
      </div>
      <div className="flex">
        <CustomPieChart data={pieChartData} title="Completion Rate" />
        <CustomPieChart
          data={pieChartPriorityData}
          title="Priority Breakdown"
        />
      </div>
    </div>
  );
};

export default Tasks;
