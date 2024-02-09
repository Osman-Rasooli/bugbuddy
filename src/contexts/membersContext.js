import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from "react";
import {
  databases,
  membersCollectionID,
  databaseID,
} from "../services/appwrite";

import { uniqueID } from "../utils/utils";

import { ID } from "appwrite";

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
const CREATE_MEMBER_REQUEST = "CREATE_MEMEBER_REQUEST";
const CREATE_MEMBER_SUCCESS = "CREATE_MEMEBER_SUCCESS";
const CREATE_MEMBER_FAILURE = "CREATE_MEMEBER_FAILURE";

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
    case CREATE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        members: [action.payload, ...state.members],
      };
    case CREATE_MEMBER_FAILURE:
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

  const createMember = useCallback(
    async (memberData) => {
      try {
        dispatch({ type: CREATE_MEMBER_REQUEST });

        const response = await databases.createDocument(
          databaseID,
          membersCollectionID,
          ID.unique(),
          { id: uniqueID(), ...memberData }
        );

        dispatch({ type: CREATE_MEMBER_SUCCESS, payload: response });
      } catch (error) {
        dispatch({ type: CREATE_MEMBER_FAILURE, payload: error.message });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    try {
      fetchMembers();
    } catch (error) {
      console.error("Could not fetch Members");
    }
  }, [fetchMembers]);
  return (
    <MembersContext.Provider value={{ ...state, fetchMembers, createMember }}>
      {children}
    </MembersContext.Provider>
  );
};

const useMembers = () => {
  const context = useContext(MembersContext);

  return context;
};

export { useMembers, MembersProvider };
