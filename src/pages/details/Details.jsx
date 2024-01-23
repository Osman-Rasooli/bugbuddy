import { useParams, Link } from "react-router-dom";
import { OutlinedButton } from "../../components/ui/button/Button";
import { useProjects } from "../../contexts/projectsContext";
import { getColor } from "../../utils/utils";

import { IoIosArrowBack, IoIosCreate } from "react-icons/io";

import { formatDateStringToHumanReadable } from "../../utils/utils";
import ProgressBar from "../../components/ui/progressBar/ProgressBar";

const Details = () => {
  const { id } = useParams();
  const { projects } = useProjects();

  const project = projects.filter((item) => item.$id === id)[0];

  if (!project)
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <h2>No data Found</h2>
      </div>
    );

  return (
    <div className="text-whiteLight">
      <div className="flex justify-center gap-2 md:justify-end px-4 mb-6 lg:mb-0">
        <Link to="/projects">
          <OutlinedButton className="flex gap-1 items-center">
            <IoIosArrowBack />
            Back
          </OutlinedButton>
        </Link>
        <Link>
          <OutlinedButton className="flex gap-1 items-center">
            <IoIosCreate /> Update Project
          </OutlinedButton>
        </Link>
      </div>
      <div className="px-4">
        {/* PROJECT NAME / ALIAS */}
        <div className="flex flex-col md:flex-row gap-2 items-center mb-8">
          <h2 className="text-tertiary leading-7 text-xl font-bold uppercase text-center">
            {project.name}
          </h2>
          <h4 className=" leading-3 text-sm tracking-[1px]">
            ( {project.alias} )
          </h4>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* DESCRIPTION */}
          <div className="left flex-5">
            <div className="mb-2">
              <h2 className="text-tertiary text-lg mb-[5px]">Description:</h2>
              <p>{project.description}</p>
            </div>
          </div>
          <div className="right flex-1 lg:max-w-[300px]">
            {/* CREATED BY / CREATED DATE / DUE DATE */}
            <div className="flex items-center justify-between gap-5 text-sm mb-4">
              <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
                Created By:{" "}
              </span>
              <span>{project.createdBy}</span>
            </div>
            <div className="flex items-center justify-between gap-5 text-sm mb-4">
              <span className=" bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
                Created Date:{" "}
              </span>
              <span>
                {formatDateStringToHumanReadable(project.createdDate)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 text-sm mb-4">
              <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
                Due Date:{" "}
              </span>
              <span>{formatDateStringToHumanReadable(project.dueDate)}</span>
            </div>
            <hr className="text-tertiary opacity-40" />
            {/* PRIORITY / STATUS / PROGRESS */}
            <div className="flex items-center justify-between gap-5 text-sm my-4">
              <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
                Status:{" "}
              </span>
              <span
                className={`uppercase block py-[0.5px] text-primary font-bold rounded-sm shadow-sm px-[4px] text-[12px] ${getColor(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 text-sm mb-4">
              <span className=" bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
                Priority:{" "}
              </span>
              <span
                className={`uppercase block py-[0.5px] text-primary font-bold rounded-sm shadow-sm px-[4px] text-[12px] ${getColor(
                  project.priority
                )}`}
              >
                {project.priority}
              </span>
            </div>
            <div className="flex items-center justify-between gap-5 text-sm mb-4">
              <span className=" bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
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
                <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
                  Tasks:{" "}
                </span>
                <span
                  className={`uppercase block py-[0.5px] text-whiteLight font-bold rounded-sm shadow-sm pr-[7px] text-[12px]`}
                >
                  {project.tasks}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm border-[1px] border-tertiary rounded-sm">
                <span className=" bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
                  Bugs:{" "}
                </span>
                <span
                  className={`uppercase block py-[0.5px] text-whiteLight font-bold rounded-sm shadow-sm pr-[7px] text-[12px] `}
                >
                  {project.bugs}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
