import React from "react";
import PropTypes from "prop-types";

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-text2 cursor-pointer inline-block dark:text-text3 ${className} `}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
