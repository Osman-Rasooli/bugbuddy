import { AuthProvider } from "./authContext";
import { ProjectsProvider } from "./projectsContext";
import { MembersProvider } from "./membersContext";
import { BugsProvider } from "./bugsContext";
import { TasksProvider } from "./tasksContext";

const ContextProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <MembersProvider>
          <TasksProvider>
            <BugsProvider>{children}</BugsProvider>
          </TasksProvider>
        </MembersProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
};

export default ContextProviders;
