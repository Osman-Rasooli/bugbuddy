import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalVisible(false);
    onClose && onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className.includes("modalOverlay")) {
      closeModal();
    }
  };

  return modalVisible
    ? createPortal(
        // <div
        //   className="modalOverlay overflow-scroll md:overflow-hidden fixed top-0 left-0 w-full min-h-screen  bg-secondary bg-opacity-70 flex justify-center items-center z-50  transtion"
        //   onClick={handleOverlayClick}
        // >
        <div
          className="modalOverlay overflow-y-scroll md:overflow-hidden fixed top-0 left-0 w-full min-h-screen md:h-screen  bg-secondary bg-opacity-70 flex justify-center items-center z-50  transtion"
          onClick={handleOverlayClick}
        >
          {/* <div className="bg-primary  text-whiteLight max-h-screen py-10 px-8 md:py-12 md:px-14 rounded w-full  md:max-w-2xl md:max-h-2xl md:overflow-y-auto relative"> */}
          <div className="bg-primary max-h-screen  text-whiteLight overflow-y-scroll py-10 px-8 md:py-12 md:px-14 rounded w-full  md:max-w-2xl md:max-h-5/6  relative">
            <span
              className="absolute top-4 right-4 text-2xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            {children}
          </div>
        </div>,
        document.getElementById("portal-dialog")
      )
    : null;
};

export default Modal;
