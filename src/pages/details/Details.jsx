import { Link, useLocation } from "react-router-dom";
import { OutlinedButton } from "../../components/ui/button/Button";

import { IoIosArrowBack, IoIosCreate } from "react-icons/io";

import ProjectDetail from "../../components/ui/projectDetail/ProjectDetail";
import BugDetail from "../../components/ui/bugDetail/BugDetail";
import TaskDetail from "../../components/ui/taskDetail/TaskDetail";

const Details = () => {
  const location = useLocation();
  const pagePath = location.pathname.split("/")[1];

  return (
    <div className="text-whiteLight">
      <div className="flex justify-center gap-2 md:justify-end px-4 mb-6 lg:mb-0">
        <Link to={`/${pagePath}`}>
          <OutlinedButton className="flex gap-1 items-center">
            <IoIosArrowBack />
            Back
          </OutlinedButton>
        </Link>
        <Link>
          <OutlinedButton className="flex gap-1 items-center">
            <IoIosCreate /> Update
          </OutlinedButton>
        </Link>
      </div>
      {pagePath === "projects" && <ProjectDetail />}
      {pagePath === "bugs" && <BugDetail />}
      {pagePath === "tasks" && <TaskDetail />}
    </div>
  );
};

export default Details;
