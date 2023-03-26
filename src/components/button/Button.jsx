import React from "react";
import PropTypes from "prop-types";

export function Button({ type = "button", children, className = "" }) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
