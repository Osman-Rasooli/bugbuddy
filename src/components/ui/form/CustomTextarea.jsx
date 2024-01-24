import { useField } from "formik";
import { BsExclamationCircle } from "react-icons/bs";

const CustomTextArea = ({ label, id, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 uppercase text-[12px]">
        {label}
      </label>
      <textarea
        rows={5}
        {...field}
        {...props}
        className={`w-full bg-secondary px-2 py-1 text-sm rounded-sm outline-none`}
      />
      {meta.touched && meta.error && (
        <div className="text-tertiary text-sm mt-1 flex items-center">
          <BsExclamationCircle className="mr-1" />
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default CustomTextArea;
