import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  isDrawerOpen: true,
};

// Actions
const actionTypes = {
  OPEN_DRAWER: "OPEN_DRAWER",
  CLOSE_DRAWER: "CLOSE_DRAWER",
  TOGGLE_DRAWER: "TOGGLE_DRAWER",
};

// Reducer function
const sideDrawerReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.OPEN_DRAWER:
      return { ...state, isDrawerOpen: true };
    case actionTypes.CLOSE_DRAWER:
      return { ...state, isDrawerOpen: false };
    case actionTypes.TOGGLE_DRAWER:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    default:
      return state;
  }
};

// Context
const SideDrawerContext = createContext();

// Custom hook to use the SideDrawerContext
const useSideDrawer = () => {
  const context = useContext(SideDrawerContext);
  if (!context) {
    throw new Error("useSideDrawer must be used within a SideDrawerProvider");
  }
  return context;
};

// Provider component
const SideDrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sideDrawerReducer, initialState);

  const openDrawer = () => dispatch({ type: actionTypes.OPEN_DRAWER });
  const closeDrawer = () => dispatch({ type: actionTypes.CLOSE_DRAWER });
  const toggleDrawer = () => dispatch({ type: actionTypes.TOGGLE_DRAWER });

  const value = {
    isDrawerOpen: state.isDrawerOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };

  return (
    <SideDrawerContext.Provider value={value}>
      {children}
    </SideDrawerContext.Provider>
  );
};

export { SideDrawerProvider, useSideDrawer };
