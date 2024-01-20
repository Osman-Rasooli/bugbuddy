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
        <div
          className="modalOverlay fixed top-0 left-0 w-full h-full bg-secondary bg-opacity-70 flex justify-center items-center z-50  transtion"
          onClick={handleOverlayClick}
        >
          <div className="bg-primary text-whiteLight py-12 px-14 rounded max-w-2xl max-h-2xl overflow-y-auto relative">
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
