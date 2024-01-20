import { BsExclamationCircle } from "react-icons/bs";

const Input = ({
  label,
  id,
  name,
  type,
  placeholder,
  className,
  errorText,
}) => {
  return (
    <>
      <label htmlFor={id} className="block mb-1 uppercase text-[12px]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`w-full bg-secondary px-2 py-1 rounded-sm outline-none ${className}`}
      />
      <small className="flex items-center gap-1 text-[red] mt-1">
        <BsExclamationCircle /> <span>{errorText}</span>
      </small>
    </>
  );
};

export default Input;
