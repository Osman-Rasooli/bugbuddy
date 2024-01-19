import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`${className} text-whiteLight bg-tertiary border-[1px] py-2 px-4 rounded-md hover:bg-tertiaryLight transition`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const OutlinedButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={`${className} text-tertiary border-[1px] py-2 px-4 rounded-md hover:text-tertiaryLight transition`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
