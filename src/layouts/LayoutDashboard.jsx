import React from "react";
import PropTypes from "prop-types";
import { DashboardSideBar, DashboardTopBar } from "modules/dashboard";

function LayoutDashboard({ children }) {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopBar />
      <div>
        <DashboardSideBar />
        <div>{children}</div>
      </div>
    </div>
  );
}

LayoutDashboard.propTypes = {
  children: PropTypes.node,
};

export default LayoutDashboard;
