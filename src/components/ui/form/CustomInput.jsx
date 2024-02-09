// CustomInput.js

import { useField } from "formik";
import { BsExclamationCircle } from "react-icons/bs";

const CustomField = ({ label, id, type, options, className, ...props }) => {
  const [field, meta] = useField(props);

  const inputProps = {
    className: `mt-1 p-2 w-full rounded-md border  ${
      meta.touched && meta.error ? "border-tertiary" : "border-secondaryLight"
    } focus:outline-none focus:ring`,
    id,
    type,
    ...field,
    ...props,
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-1 uppercase text-[12px] text-secondary dark:text-white"
      >
        {label}
      </label>
      {type === "select" ? (
        <select
          {...inputProps}
          className={`w-full bg-white dark:bg-secondary px-2 py-1 text-sm text-secondary dark:text-white rounded-sm outline-none placeholder:text-[#aaa] dark:placeholder:text-[#666] ${className}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...inputProps}
          className={`w-full bg-white dark:bg-secondary px-2 py-1 text-sm text-secondary dark:text-white rounded-sm outline-none placeholder:text-[#aaa] dark:placeholder:text-[#666] ${className} `}
        />
      )}
      {meta.touched && meta.error && (
        <div className="text-tertiary text-sm mt-1 flex items-center">
          <BsExclamationCircle className="mr-1" />
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default CustomField;
