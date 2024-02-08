import React, { useEffect } from "react";
import { useToast } from "../../../contexts/toastContext";
import { getColor } from "../../../utils/utils";

import { RiCloseLine } from "react-icons/ri";

const CustomToast = ({ id, message, type }) => {
  const { removeToast } = useToast();

  const handleCloseToast = () => {
    removeToast(id);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000); // Auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  return (
    <div
      className={`fixed top-10 right-10 transform  ${getColor(
        type
      )} text-white px-3 py-3 rounded-md shadow-md z-50 transition-opacity duration-500 opacity-100`}
      style={{ marginTop: "10px" }} // Add marginBottom to stack toasts vertically
      onAnimationEnd={() => removeToast(id)}
    >
      <span className="inline-block mr-4">{message}</span>
      <button
        onClick={handleCloseToast}
        className="inline-block text-white transition-all duration-500"
      >
        <RiCloseLine />
      </button>
    </div>
  );
};

export default CustomToast;
