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
    case "UPDATE_TASK_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "UPDATE_TASK_SUCCESS":
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) =>
          task.$id === action.payload.id ? action.payload.response : task
        ),
      };
    case "UPDATE_TASK_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_TASK_REQUEST":
      return { ...state, loading: true, error: null };
    case "DELETE_TASK_SUCCESS":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.$id !== action.payload),
        loading: false,
      };
    case "DELETE_TASK_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
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
      return { success: true, error: "Created Task Successfully!" };
    } catch (error) {
      console.error(error);
      dispatch({ type: "CREATE_TASK_FAILURE", payload: error.message });
      return { success: false, error: "Could not update task" };
    }
  }, []);

  const updateTask = async (id, taskData) => {
    try {
      dispatch({ type: "UPDATE_TASK_REQUEST" });

      const response = await databases.updateDocument(
        databaseID,
        tasksCollectionID,
        id,
        taskData
      );

      dispatch({
        type: "UPDATE_TASK_SUCCESS",
        payload: { id, response },
      });
      return { success: true, error: "Updated Successfully!" };
    } catch (error) {
      dispatch({ type: "UPDATE_TASK_FAILURE", payload: error.message });
      return { success: false, error: "Could not update the task." };
    }
  };

  const deleteTask = async (taskId) => {
    try {
      dispatch({ type: "DELETE_TASK_REQUEST" });

      await databases.deleteDocument(databaseID, tasksCollectionID, taskId);

      // Dispatch the delete action to update the state
      dispatch({ type: "DELETE_TASK_SUCCESS", payload: taskId });
      return { success: true, error: null };
    } catch (error) {
      console.error("Error deleting task:", error);
      dispatch({ type: "DELETE_TASK_FAILURE", payload: error.message });
      return { success: false, error: "Could not delete the task." };
    }
  };

  useEffect(() => {
    // Fetch tasks when the user is logged in
    if (user) {
      fetchTasks();
    }
  }, [user, fetchTasks, createTask]);

  return (
    <TasksContext.Provider
      value={{
        ...state,
        dispatch,
        fetchTasks,
        createTask,
        updateTask,
        deleteTask,
      }}
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
