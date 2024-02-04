import { useState } from "react";
import { OutlinedButton } from "../../components/ui/button/Button";
import { extractSpecificData } from "../../utils/utils";
import Table from "../../components/ui/table/Table";
import CustomBarChart from "../../components/ui/customBarChart/CustomBarChart";

import CreateBugModal from "../../components/bugModal/CreateBugModal";

import { useBugs } from "../../contexts/bugsContext";

const Bugs = () => {
  const { bugs, error: bugsError, loading: bugsLoading } = useBugs();
  // Create Bug Modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const chartData = prepareDataForProjectStatusPriorityChart(bugs);
  const xAxisKey = "project";
  const barDataKeys = [
    "open",
    "resolved",
    "in progress",
    "low",
    "medium",
    "high",
    "critical",
  ];

  return (
    <div className="text-whiteLight">
      <CreateBugModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex justify-end px-4">
        <OutlinedButton onClick={openModal}>Add Bug</OutlinedButton>
      </div>
      <div>
        <Table
          list={extractSpecificData(bugs, [
            "$id",
            "name",
            "project",
            "assignedTo",
            "priority",
            "status",
          ])}
          title="Bugs"
          link="bugs"
          className="max-h-[500px] flex-1"
          error={bugsError}
          loading={bugsLoading}
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
