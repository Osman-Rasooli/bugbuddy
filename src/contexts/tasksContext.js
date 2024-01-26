import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useAuth } from "./authContext";
import { databases, databaseID, tasksCollectionID } from "../services/appwrite";

import { ID, Query } from "appwrite";

const TasksContext = createContext();

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload, loading: false, error: null };
    case "CREATE_TASK_REQUEST":
      return { ...state, loading: true, error: null };
    case "CREATE_TASK_SUCCESS":
      return {
        ...state,
        loading: false,
        tasks: [action.payload, ...state.tasks],
      };
    case "CREATE_TASK_FAILURE":
      return { ...state, loading: false, error: action.payload };
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
        tasksCollectionID,
        [Query.orderDesc("createdDate")]
      );

      if (response.code < 200 || response.code > 300) {
        throw new Error("Failed to fetch Tasks");
      }

      const tasksData = response.documents;
      dispatch({ type: "SET_TASKS", payload: tasksData });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, [user, dispatch]);

  const createTask = useCallback(async (taskData) => {
    try {
      dispatch({ type: "CREATE_TASK_REQUEST" });

      const response = await databases.createDocument(
        databaseID,
        tasksCollectionID,
        ID.unique(),
        taskData
      );

      dispatch({
        type: "CREATE_TASK_SUCCESS",
        payload: response,
      });
      return true;
    } catch (error) {
      console.error(error);
      dispatch({ type: "CREATE_TASK_FAILURE", payload: error.message });
    }
  }, []);

  useEffect(() => {
    // Fetch tasks when the user is logged in
    if (user) {
      fetchTasks();
    }
  }, [user, fetchTasks, createTask]);

  return (
    <TasksContext.Provider
      value={{ ...state, dispatch, fetchTasks, createTask }}
    >
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
