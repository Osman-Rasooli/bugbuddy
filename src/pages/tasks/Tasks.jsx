import { useState } from "react";

import Table from "../../components/ui/table/Table";
import CustomPieChart from "../../components/ui/customPieChart/CustomPieChart";
import { OutlinedButton } from "../../components/ui/button/Button";
import { extractSpecificData } from "../../utils/utils";
import CreateTaskModal from "../../components/taskModal/createTaskModal";

import { useTasks } from "../../contexts/tasksContext";

const Tasks = () => {
  const { tasks, error: tasksError, loading: tasksLoading } = useTasks();
  console.log(tasks);

  // Create Task Modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Preparing Tasks Pie Chart Data
  const statusCounts = tasks.reduce((counts, task) => {
    const status = task.status.toLowerCase();
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});

  const pieChartData = Object.keys(statusCounts).map((status) => ({
    name: status,
    value: statusCounts[status],
  }));

  // Preparing Tasks Pie Chart Data for Priorities
  const priorityCounts = tasks.reduce((counts, task) => {
    const priority = task.priority.toLowerCase();
    counts[priority] = (counts[priority] || 0) + 1;
    return counts;
  }, {});

  const pieChartPriorityData = Object.keys(priorityCounts).map((priority) => ({
    name: priority,
    value: priorityCounts[priority],
  }));

  return (
    <div className="text-whiteLight">
      <CreateTaskModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex justify-end px-4">
        <OutlinedButton onClick={openModal}>Add Task</OutlinedButton>
      </div>
      <div>
        <Table
          list={extractSpecificData(tasks, [
            "$id",
            "name",
            "project",
            "assignedTo",
            "priority",
            "status",
            "createdDate",
          ])}
          title="Tasks"
          link="tasks"
          className="max-h-[600px] flex-1"
          error={tasksError}
          loading={tasksLoading}
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <CustomPieChart
          data={pieChartData}
          title="Completion Rate"
          error={tasksError}
          loading={tasksLoading}
        />
        <CustomPieChart
          data={pieChartPriorityData}
          title="Priority Breakdown"
          error={tasksError}
          loading={tasksLoading}
        />
      </div>
    </div>
  );
};

export default Tasks;
