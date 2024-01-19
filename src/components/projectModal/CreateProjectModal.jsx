import Modal from "../ui/modal/Modal";

const CreateProjectModal = ({ isOpen, onClose }) => {
  console.log(isOpen);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        vero.
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
