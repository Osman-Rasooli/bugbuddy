import { AuthProvider } from "./authContext";
import { ProjectsProvider } from "./projectsContext";
import { MembersProvider } from "./membersContext";
import { BugsProvider } from "./bugsContext";

const ContextProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <MembersProvider>
          <BugsProvider>{children}</BugsProvider>
        </MembersProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
};

export default ContextProviders;
