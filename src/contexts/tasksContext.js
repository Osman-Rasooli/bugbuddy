import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useAuth } from "./authContext";
import { databases, databaseID, tasksCollectionID } from "../services/appwrite";

const TasksContext = createContext();

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload, loading: false, error: null };
    // Add other task-related actions here if needed
    default:
      return state;
  }
};

const TasksProvider = ({ children }) => {
  const { user } = useAuth();

  const initialState = {
    tasks: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const fetchTasks = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      if (!user) {
        throw new Error("User not authenticated");
      }

      // Fetch tasks data from Appwrite
      const response = await databases.listDocuments(
        databaseID,
        tasksCollectionID
      );

      if (response.code < 200 || response.code > 300) {
        throw new Error("Failed to fetch projects");
      }

      const tasksData = response.documents;
      dispatch({ type: "SET_TASKS", payload: tasksData });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, [user, dispatch]);

  useEffect(() => {
    // Fetch tasks when the user is logged in
    if (user) {
      fetchTasks();
    }
  }, [user, fetchTasks]);

  return (
    <TasksContext.Provider value={{ ...state, dispatch, fetchTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export { TasksProvider, useTasks };
