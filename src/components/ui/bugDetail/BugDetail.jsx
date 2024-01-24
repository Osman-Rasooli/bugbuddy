import {
  formatDateStringToHumanReadable,
  getColor,
} from "../../../utils/utils";
import { useBugs } from "../../../contexts/bugsContext";
import { useParams } from "react-router-dom";
const BugDetail = () => {
  const { id } = useParams();
  const { bugs } = useBugs();

  const bug = bugs.filter((item) => item.$id === id)[0];

  if (!bug)
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <h2>No data Found</h2>
      </div>
    );

  return (
    <div className="px-4">
      {/* BUG NAME */}
      <div className="flex flex-col md:flex-row gap-2 items-center mb-8">
        <h2 className="text-tertiary leading-7 text-xl font-bold uppercase text-center">
          {bug.name}
        </h2>
      </div>
      <div className="flex flex-col gap-3 justify-between lg:flex-row">
        {/* DESCRIPTION */}
        <div className="left flex-5">
          <div className="mb-2">
            <h2 className="text-tertiary text-lg mb-[5px]">Description:</h2>
            <p>{bug.description}</p>
          </div>
        </div>
        <div className="right flex-1 lg:max-w-[300px]">
          {/* CREATED BY / CREATED DATE / DUE DATE */}
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
              Created By:{" "}
            </span>
            <span>{bug.createdBy}</span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className=" bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
              Created Date:{" "}
            </span>
            <span>{formatDateStringToHumanReadable(bug.createdDate)}</span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
              Updated Date:{" "}
            </span>
            <span>
              {formatDateStringToHumanReadable(bug.updatedDate) || "-"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
              Closed Date:{" "}
            </span>
            <span>
              {formatDateStringToHumanReadable(bug.closedDate) || "-"}
            </span>
          </div>
          <hr className="text-tertiary opacity-40" />
          {/* PRIORITY / STATUS / PROGRESS */}
          <div className="flex items-center justify-between gap-5 text-sm my-4">
            <span className="bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
              Status:{" "}
            </span>
            <span
              className={`uppercase block py-[0.5px] text-primary font-bold rounded-sm shadow-sm px-[4px] text-[12px] ${getColor(
                bug.status
              )}`}
            >
              {bug.status}
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className=" bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
              Priority:{" "}
            </span>
            <span
              className={`uppercase block py-[0.5px] text-primary font-bold rounded-sm shadow-sm px-[4px] text-[12px] ${getColor(
                bug.priority
              )}`}
            >
              {bug.priority}
            </span>
          </div>
          <hr className="text-tertiary opacity-40" />
          <div className="flex items-center justify-between gap-5 text-sm my-4">
            <span className=" bg-tertiary py-[2px] px-[4px] text-xs rounded-sm">
              Assigned To:{" "}
            </span>
            <span>{bug.assignedTo || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugDetail;