import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useAuth } from "./authContext";
import {
  databases,
  projectsCollectionID,
  databaseID,
} from "../services/appwrite";

import { ID } from "appwrite";

const ProjectsContext = createContext();

const projectsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload, error: null };
    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_PROJECT_REQUEST":
      return { ...state, loading: true, error: null };
    case "CREATE_PROJECT_SUCCESS":
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
      };
    case "CREATE_PROJECT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProjectsProvider = ({ children }) => {
  const { user } = useAuth();

  const initialState = {
    projects: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(projectsReducer, initialState);

  const fetchProjects = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Perform API request to fetch projects data from Appwrite
      const response = await databases.listDocuments(
        databaseID,
        projectsCollectionID
      );

      if (response.code < 200 || response.code > 300) {
        throw new Error("Failed to fetch projects");
      }

      const projectsData = response.documents;
      dispatch({ type: "SET_PROJECTS", payload: projectsData });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, [dispatch]);

  const createProject = useCallback(
    async (projectData) => {
      try {
        dispatch({ type: "CREATE_PROJECT_REQUEST" });

        // Your Appwrite logic for creating a project
        const response = await databases.createDocument(
          databaseID,
          projectsCollectionID,
          ID.unique(),
          {
            ...projectData,
            id: ID.unique(),
            createdDate: new Date(),
            createdBy: "Osman Rasooli",
          }
        );

        console.log(response);

        dispatch({
          type: "CREATE_PROJECT_SUCCESS",
          payload: response,
        });
      } catch (error) {
        dispatch({
          type: "CREATE_PROJECT_FAILURE",
          payload: error.message,
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    // Fetch projects when the user is logged in
    if (user) {
      fetchProjects();
    }
  }, [user, fetchProjects]);

  return (
    <ProjectsContext.Provider
      value={{ ...state, dispatch, fetchProjects, createProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};

export { ProjectsProvider, useProjects };
