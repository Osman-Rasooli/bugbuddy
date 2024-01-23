import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from "react";
import {
  databases,
  membersCollectionID,
  databaseID,
} from "../services/appwrite";

import { useAuth } from "./authContext";

// Define initial state
const initialState = {
  members: [],
  loading: true,
  error: null,
};

// Define actions
const SET_MEMBERS = "SET_MEMBERS";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

// Define reducer function
const membersReducer = (state, action) => {
  switch (action.type) {
    case SET_MEMBERS:
      return {
        ...state,
        members: action.payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Create context
const MembersContext = createContext();

// Create context provider component
const MembersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(membersReducer, initialState);

  const { user } = useAuth();

  const fetchMembers = useCallback(async () => {
    try {
      dispatch({ type: SET_LOADING, payload: true });

      // Fetch data from Appwrite (replace with your actual API call)
      const response = await databases.listDocuments(
        databaseID,
        membersCollectionID
      );

      dispatch({ type: SET_MEMBERS, payload: response.documents });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  }, [dispatch]);

  // Fetch members data from Appwrite and update state
  useEffect(() => {
    if (user) {
      fetchMembers();
    }
  }, [user, fetchMembers]); // Run this effect only once when the component mounts

  return (
    <MembersContext.Provider value={{ ...state, fetchMembers }}>
      {children}
    </MembersContext.Provider>
  );
};

const useMembers = () => {
  const { members, loading, error } = useContext(MembersContext);

  return {
    members,
    loading,
    error,
  };
};

export { useMembers, MembersProvider };
