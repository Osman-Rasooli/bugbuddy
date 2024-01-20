import { BsExclamationCircle } from "react-icons/bs";

const Select = ({ label, id, name, className, errorText, options }) => {
  return (
    <>
      <label htmlFor={id} className="block mb-1 uppercase text-[12px]">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className={`w-full bg-secondary px-2 py-[6px] rounded-sm outline-none ${className}`}
      >
        {Array.isArray(options) &&
          options.map((option) => (
            <option key={getOptionKey(option)} value={getOptionValue(option)}>
              {getOptionValue(option)}
            </option>
          ))}
      </select>
      <small className="flex items-center gap-1 text-[red] mt-1">
        <BsExclamationCircle /> <span>{errorText}</span>
      </small>
    </>
  );
};

const getOptionKey = (option) =>
  typeof option === "object" ? option.id : option;
const getOptionValue = (option) =>
  typeof option === "object" ? option.name : option;

export default Select;
