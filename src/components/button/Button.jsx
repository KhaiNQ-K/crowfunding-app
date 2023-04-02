import React from "react";
import PropTypes from "prop-types";
import { classNames } from "utils";

export function Button({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent  border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={classNames(
        "flex items-center justify-center p-4 text-base font-semibold rounded-xl text-white max-h-[56px]",
        className,
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      )}
      {...rest}
    >
      {child}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
