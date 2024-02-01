import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useAuth } from "./authContext";
import { databases, databaseID, bugsCollectionID } from "../services/appwrite";

import { ID, Query } from "appwrite";

const BugsContext = createContext();

const bugsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BUGS":
      return { ...state, bugs: action.payload, loading: false, error: null };
    case "CREATE_BUG_REQUEST":
      return { ...state, loading: true, error: null };
    case "CREATE_BUG_SUCCESS":
      return {
        ...state,
        loading: false,
        bugs: [action.payload, ...state.bugs],
      };
    case "CREATE_BUG_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_BUG":
      return {
        ...state,
        bugs: state.bugs.map((bug) =>
          bug.id === action.payload.id ? action.payload : bug
        ),
      };
    case "DELETE_BUG_REQUEST":
      return { ...state, loading: true, error: null };
    case "DELETE_BUG_SUCCESS":
      return {
        ...state,
        tasks: state.bugs.filter((bug) => bug.$id !== action.payload),
        loading: false,
      };
    case "DELETE_BUG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload, error: null };
    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const BugsProvider = ({ children }) => {
  const { user } = useAuth();

  const initialState = {
    bugs: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(bugsReducer, initialState);

  const fetchBugs = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      if (!user) {
        throw new Error("User not authenticated");
      }

      // Fetch bugs data from Appwrite
      const response = await databases.listDocuments(
        databaseID,
        bugsCollectionID,
        [Query.orderDesc("createdDate")]
      );

      if (response.code < 200 || response.code > 300) {
        throw new Error("Failed to fetch Bugs");
      }

      const bugsData = response.documents;
      dispatch({ type: "SET_BUGS", payload: bugsData });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, [user, dispatch]);

  const createBug = useCallback(async (bugData) => {
    try {
      dispatch({ type: "CREATE_BUG_REQUEST" });

      const response = await databases.createDocument(
        databaseID,
        bugsCollectionID,
        ID.unique(),
        bugData
      );

      console.log(response);

      dispatch({
        type: "CREATE_BUG_SUCCESS",
        payload: response,
      });
      return true;
    } catch (error) {
      console.error(error);
      dispatch({ type: "CREATE_BUG_FAILURE", payload: error.message });
    }
  }, []);

  const updateBug = (bug) => {
    dispatch({ type: "UPDATE_BUG", payload: bug });
  };

  const deleteBug = async (bugId) => {
    try {
      dispatch({ type: "DELETE_BUG_REQUEST" });

      await databases.deleteDocument(databaseID, bugsCollectionID, bugId);

      // Dispatch the delete action to update the state
      dispatch({ type: "DELETE_BUG_SUCCESS", payload: bugId });
      return { success: true, error: null };
    } catch (error) {
      console.error("Error deleting bug:", error);
      dispatch({ type: "DELETE_BUG_FAILURE", payload: error.message });
      return { success: false, error: "Could not delete the bug." };
    }
  };

  useEffect(() => {
    // Fetch bugs when the user is logged in
    if (user) {
      fetchBugs();
    }
  }, [user, fetchBugs]);

  return (
    <BugsContext.Provider
      value={{ ...state, dispatch, fetchBugs, createBug, updateBug, deleteBug }}
    >
      {children}
    </BugsContext.Provider>
  );
};

const useBugs = () => {
  const context = useContext(BugsContext);
  if (!context) {
    throw new Error("useBugs must be used within a BugsProvider");
  }
  return context;
};

export { BugsProvider, useBugs };
