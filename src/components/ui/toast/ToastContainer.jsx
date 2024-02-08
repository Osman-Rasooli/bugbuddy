import { useToast } from "../../../contexts/toastContext";
import Toast from "./Toast";

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
