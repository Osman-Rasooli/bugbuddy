import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useAuth } from "./authContext";
import { databases, databaseID, bugsCollectionID } from "../services/appwrite";

const BugsContext = createContext();

const bugsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BUGS":
      return { ...state, bugs: action.payload, loading: false, error: null };
    case "ADD_BUG":
      return { ...state, bugs: [...state.bugs, action.payload] };
    case "UPDATE_BUG":
      return {
        ...state,
        bugs: state.bugs.map((bug) =>
          bug.id === action.payload.id ? action.payload : bug
        ),
      };
    case "DELETE_BUG":
      return {
        ...state,
        bugs: state.bugs.filter((bug) => bug.id !== action.payload),
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
        bugsCollectionID
      );

      if (response.code < 200 || response.code > 300) {
        throw new Error("Failed to fetch projects");
      }

      const bugsData = response.documents;
      dispatch({ type: "SET_BUGS", payload: bugsData });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, [user, dispatch]);

  const addBug = (bug) => {
    dispatch({ type: "ADD_BUG", payload: bug });
  };

  const updateBug = (bug) => {
    dispatch({ type: "UPDATE_BUG", payload: bug });
  };

  const deleteBug = (bugId) => {
    dispatch({ type: "DELETE_BUG", payload: bugId });
  };

  useEffect(() => {
    // Fetch bugs when the user is logged in
    if (user) {
      fetchBugs();
    }
  }, [user, fetchBugs]);

  return (
    <BugsContext.Provider
      value={{ ...state, dispatch, fetchBugs, addBug, updateBug, deleteBug }}
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
