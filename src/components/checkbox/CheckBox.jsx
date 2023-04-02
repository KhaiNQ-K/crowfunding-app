import React from "react";
import PropTypes from "prop-types";
import { classNames } from "utils";

export function CheckBox({
  checked = false,
  onClick = () => {},
  name = "",
  children,
}) {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={classNames(
          "inline-flex items-center justify-center p-1 text-white w-5 h-5 rounded border cursor-pointer",
          checked ? "bg-primary border-primary" : "border-strock"
        )}
        onClick={onClick}
      >
        <input type="checkbox" className="hidden" name={name} />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label onClick={onClick} className="cursor-pointer">
          {children}
        </label>
      )}
    </div>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
