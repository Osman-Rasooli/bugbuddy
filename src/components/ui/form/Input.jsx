import { BsExclamationCircle } from "react-icons/bs";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    { forwardRef, label, id, name, type, placeholder, className, errorText },
    ref
  ) => {
    return (
      <>
        <label htmlFor={id} className="block mb-1 uppercase text-[12px]">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          ref={forwardRef || ref}
          placeholder={placeholder}
          className={`w-full bg-secondary px-2 py-1 rounded-sm outline-none ${className}`}
        />
        {errorText && (
          <small className="flex items-center gap-1 text-[red] mt-1">
            <BsExclamationCircle /> <span>{errorText}</span>
          </small>
        )}
      </>
    );
  }
);

export default Input;
