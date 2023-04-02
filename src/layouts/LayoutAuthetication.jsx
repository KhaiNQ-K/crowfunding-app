import { ErrorComponent } from "components/common";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
function LayoutAuthetication({ children, heading = "" }) {
  return (
    <div className="w-full  mx-auto min-h-screen bg-lite p-10 dark:bg-darkbg relative isolate">
      <img
        src="/img/ellipse.png"
        alt=""
        className="absolute right-0 bottom-0  pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img src="/img/logo.png" alt="crowfunding-app" />
      </Link>
      <div
        className="w-full max-w-[556px] px-5 py-8 lg:px-14 
        lg:py-16 bg-white mx-auto  rounded-xl
         dark:bg-darkSecondary"
      >
        <h1 className="font-semibold text-center text-text1 text-lg lg:text-xl mb-1 lg:mb-3 dark:text-white">
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
