import {
  formatDateStringToHumanReadable,
  getColor,
} from "../../../utils/utils";

import ProgressBar from "../progressBar/ProgressBar";
import { useProjects } from "../../../contexts/projectsContext";
import { useBugs } from "../../../contexts/bugsContext";
import { useTasks } from "../../../contexts/tasksContext";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProjectDetail = ({ setIsManager, user }) => {
  const { id } = useParams();
  const { projects } = useProjects();

  const project = projects.filter((item) => item.$id === id)[0];

  useEffect(() => {
    if (project?.manager === user.name) {
      setIsManager(true);
    }
  }, [user.name]);

  const { bugs } = useBugs();
  const { tasks } = useTasks();

  // Preparing data for Number of bugs and tasks related to specific project
  const projectBugs = bugs.filter((bug) => bug.project === project?.name);
  const ProjectTasks = tasks.filter((task) => task.project === project?.name);

  const bugsCount = projectBugs.length;
  const tasksCount = ProjectTasks.length;

  if (!project)
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <h2 className="text-secondary dark:text-white">No data Found</h2>
      </div>
    );
  return (
    <div className="px-4 text-secondary dark:text-white">
      {/* PROJECT NAME / ALIAS */}
      <div className="flex flex-col md:flex-row gap-2 items-center mt-5 mb-8">
        <h2 className="text-tertiary leading-7 text-xl font-bold uppercase text-center">
          {project.name}
        </h2>
        <h4 className=" leading-3 text-sm tracking-[1px]">
          ( {project.alias} )
        </h4>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row justify-between lg:gap-12">
        {/* DESCRIPTION */}
        <div className="left">
          <div className="mb-2">
            <h2 className="text-tertiary text-lg mb-[5px]">Description:</h2>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="right basis-[300px] mt-5">
          {/* CREATED BY / CREATED DATE / DUE DATE */}
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Created By:{" "}
            </span>
            <span>{project.createdBy}</span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className=" bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Created Date:{" "}
            </span>
            <span>{formatDateStringToHumanReadable(project.createdDate)}</span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Due Date:{" "}
            </span>
            <span>{formatDateStringToHumanReadable(project.dueDate)}</span>
          </div>
          <hr className="text-tertiary opacity-40" />
          {/* PROJECT MANAGER */}
          <div className="flex items-center justify-between gap-5 text-sm my-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Project Manager:{" "}
            </span>
            <span>{project.manager || "-"}</span>
          </div>
          <hr className="text-tertiary opacity-40" />
          {/* PRIORITY / STATUS / PROGRESS */}
          <div className="flex items-center justify-between gap-5 text-sm my-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Status:{" "}
            </span>
            <span
              className={`uppercase block py-[0.5px] text-white font-bold rounded-sm shadow-sm px-[4px] text-[12px] ${getColor(
                project.status
              )}`}
            >
              {project.status}
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className=" bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Priority:{" "}
            </span>
            <span
              className={`uppercase block py-[0.5px] text-white font-bold rounded-sm shadow-sm px-[4px] text-[12px] ${getColor(
                project.priority
              )}`}
            >
              {project.priority}
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className=" bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Progress:{" "}
            </span>
            <ProgressBar
              progress={project.progress || 0}
              className=" w-48 h-[20px]"
            />
          </div>
          <hr className="text-tertiary opacity-40" />
          {/* BUGS / TASKS */}
          <div className="flex gap-5 my-4">
            <div className="flex items-center gap-2 text-sm border-[1px] border-tertiary rounded-sm">
              <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
                Tasks:{" "}
              </span>
              <span
                className={`uppercase block py-[0.5px] dark:text-whiteLight font-bold rounded-sm shadow-sm pr-[7px] text-[12px]`}
              >
                {tasksCount}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm border-[1px] border-tertiary rounded-sm">
              <span className=" bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
                Bugs:{" "}
              </span>
              <span
                className={`uppercase block py-[0.5px] dark:text-whiteLight font-bold rounded-sm shadow-sm pr-[7px] text-[12px] `}
              >
                {bugsCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
