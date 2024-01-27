import { AuthProvider } from "./authContext";
import { ProjectsProvider } from "./projectsContext";
import { MembersProvider } from "./membersContext";
import { BugsProvider } from "./bugsContext";
import { TasksProvider } from "./tasksContext";
import { SideDrawerProvider } from "./sideDrawerContext";

const ContextProviders = ({ children }) => {
  return (
    <AuthProvider>
      <SideDrawerProvider>
        <ProjectsProvider>
          <MembersProvider>
            <TasksProvider>
              <BugsProvider>{children}</BugsProvider>
            </TasksProvider>
          </MembersProvider>
        </ProjectsProvider>
      </SideDrawerProvider>
    </AuthProvider>
  );
};

export default ContextProviders;
