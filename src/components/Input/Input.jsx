import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { classNames } from "utils";

export function Input({
  control,
  name,
  type = "text",
  error,
  children,
  ...rest
}) {
  const { field } = useController({ control, name, defaultValue: "" });
  const newRest = {
    ...rest,
    placeholder: error?.length > 0 ? "" : rest.placeholder,
  };
  return (
    <div className="w-full relative">
      <input
        type={type}
        name={name}
        id={name}
        {...field}
        {...newRest}
        className={classNames(
          "w-full  py-4 px-6 border  rounded-xl text-sm font-medium text-text1 placeholder:text-tex4 dark:placeholder:text-text2 dark:text-white",
          error?.length > 0 ? "border-error" : "border-strock",
          children ? "pr-16" : "",
          "bg-transparent dark:border-darkStroke"
        )}
      />
      {error?.length > 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-2/4 left-6 pointer-events-none error-focus">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute top-2/4 -translate-y-2/4 right-6  cursor-pointer select-none text-text2">
          {children}
        </span>
      )}
    </div>
  );
}

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};
