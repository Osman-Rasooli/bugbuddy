import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  toasts: [],
};

const ToastContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    default:
      return state;
  }
};

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToast = (toast) => {
    const id = Date.now();
    dispatch({ type: "ADD_TOAST", payload: { ...toast, id } });
  };

  const removeToast = (id) => {
    dispatch({ type: "REMOVE_TOAST", payload: id });
  };

  return (
    <ToastContext.Provider
      value={{ toasts: state.toasts, addToast, removeToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { useToast, ToastProvider };
