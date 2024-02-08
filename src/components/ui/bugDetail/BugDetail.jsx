import {
  formatDateStringToHumanReadable,
  getColor,
} from "../../../utils/utils";
import { useBugs } from "../../../contexts/bugsContext";
import { useAuth } from "../../../contexts/authContext";
import { useParams } from "react-router-dom";
const BugDetail = ({ setIsAssignedTo }) => {
  const { id } = useParams();
  const { bugs } = useBugs();
  const { user } = useAuth();

  const bug = bugs.filter((item) => item.$id === id)[0];

  if (bug?.assignedTo === user.name) {
    setIsAssignedTo(true);
  }

  // console.log({ bug, user });

  if (!bug)
    return (
      <div className="w-full h-32 flex justify-center items-center">
        <h2 className="text-secondary dark:text-white">No data Found</h2>
      </div>
    );

  return (
    <div className="px-4 text-secondary dark:text-white">
      {/* BUG NAME */}
      <div className="flex flex-col md:flex-row gap-2 items-center mt-5 mb-8">
        <h2 className="text-tertiary leading-7 text-xl font-bold uppercase text-center">
          {bug.name}
        </h2>
      </div>
      <div className="flex flex-col gap-3 justify-between lg:flex-row">
        {/* DESCRIPTION */}
        <div className="left">
          <div className="mb-2">
            <h2 className="text-tertiary text-lg mb-[5px]">Description:</h2>
            <p>{bug.description}</p>
          </div>
        </div>
        <div className="right basis-[300px] mt-5">
          {/* CREATED BY / CREATED DATE / DUE DATE */}
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Created By:{" "}
            </span>
            <span>{bug.createdBy}</span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className=" bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Created Date:{" "}
            </span>
            <span>{formatDateStringToHumanReadable(bug.createdDate)}</span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Closed Date:{" "}
            </span>
            <span>
              {formatDateStringToHumanReadable(bug.closedDate) || "-"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-5 text-sm mb-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Due Date:{" "}
            </span>
            <span>{formatDateStringToHumanReadable(bug.dueDate) || "-"}</span>
          </div>

          <hr className="text-tertiary opacity-40" />
          {/* PRIORITY / STATUS / PROGRESS */}
          <div className="flex items-center justify-between gap-5 text-sm my-4">
            <span className="bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
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
            <span className=" bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
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
            <span className=" bg-tertiary text-white py-[2px] px-[4px] text-xs rounded-sm">
              Assigned To:{" "}
            </span>
            <span>{bug?.assignedTo || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugDetail;
