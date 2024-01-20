import { useState } from "react";

import Table from "../../components/ui/table/Table";
import CustomPieChart from "../../components/ui/customPieChart/CustomPieChart";
import { OutlinedButton } from "../../components/ui/button/Button";
import { dummyTasks } from "../../data/data";
import CreateTaskModal from "../../components/taskModal/createTaskModal";

const Tasks = () => {
  // Create Task Modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
      <CreateTaskModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex justify-end px-4">
        <OutlinedButton onClick={openModal}>Add Task</OutlinedButton>
      </div>
      <div>
        <Table
          list={dummyTasks}
          title="Tasks"
          link="tasks"
          className="max-h-[600px] flex-1"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
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
