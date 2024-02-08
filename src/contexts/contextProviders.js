import { AuthProvider } from "./authContext";
import { ProjectsProvider } from "./projectsContext";
import { MembersProvider } from "./membersContext";
import { BugsProvider } from "./bugsContext";
import { TasksProvider } from "./tasksContext";
import { SideDrawerProvider } from "./sideDrawerContext";
import { ThemeProvider } from "./themeContext";
import { ToastProvider } from "./toastContext";

const ContextProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <MembersProvider>
          <AuthProvider>
            <SideDrawerProvider>
              <ProjectsProvider>
                <TasksProvider>
                  <BugsProvider>{children}</BugsProvider>
                </TasksProvider>
              </ProjectsProvider>
            </SideDrawerProvider>
          </AuthProvider>
        </MembersProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
