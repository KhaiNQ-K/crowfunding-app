import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "components/common";
function LayoutAuthetication({ children, heading = "" }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-lite p-10">
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="/img/logo.png" alt="crowfunding-app" />
      </Link>
      <div
        className="w-full max-w-[556px] px-5 py-8 lg:px-14 
        lg:py-16 bg-white mx-auto  rounded-xl"
      >
        <h1 className="font-semibold text-center text-text1 text-lg lg:text-xl mb-1 lg:mb-3">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
}
LayoutAuthetication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthetication, {
  FallbackComponent: ErrorComponent,
});
