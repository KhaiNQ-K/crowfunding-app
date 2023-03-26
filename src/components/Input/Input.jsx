import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

export function Input({ control, name, type = "text", ...rest }) {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="w-full relative">
      <input
        type={type}
        name={name}
        id={name}
        {...field}
        {...rest}
        className="w-full  py-4 px-6 border border-strock rounded-xl text-sm font-medium text-text1 placeholder:text-tex4"
      />
    </div>
  );
}

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
};
