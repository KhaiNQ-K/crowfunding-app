import React from "react";
import PropTypes from "prop-types";

export function FormGroup({ children }) {
  return (
    <div className="flex flex-col gap-y-3 items-start mb-5">{children}</div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node,
};
