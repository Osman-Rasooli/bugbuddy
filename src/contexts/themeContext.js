// ThemeContext.js

import React, { createContext, useReducer, useContext, useEffect } from "react";

// Helper function to get initial dark mode based on system preference
const getInitialDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    el.classList.add("dark");
    return true;
  } else {
    el.classList.remove("dark");
  }
  return false;
};

const el = document.documentElement;

// Initial state
const initialState = {
  isDarkMode: getInitialDarkMode(),
};

// Reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

// Context
const ThemeContext = createContext();

// Context provider component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    // Update the dark mode based on system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event) => {
      dispatch({ type: "TOGGLE_THEME" });
      el.classList.toggle("dark");
    };
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []); // Run this effect only once on component mount

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
    el.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context
export const useTheme = () => {
  return useContext(ThemeContext);
};
