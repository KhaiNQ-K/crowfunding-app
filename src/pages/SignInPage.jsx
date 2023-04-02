import React from "react";
import PropTypes from "prop-types";
import LayoutAuthetication from "layouts/LayoutAuthetication";
import { Link } from "react-router-dom";
import { Button } from "components/button";
import { FormGroup } from "components/common";
import { Label } from "components/label";
import { Input } from "components/Input";
import { IconEyeToggle } from "components/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToggleValues } from "hooks";
const schema = yup.object({
  email: yup
    .string("")
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});
function SignInPage(props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, handleTogglePassword] = useToggleValues(false);
  const handleSignIn = () => {};
  return (
    <LayoutAuthetication heading="Welcome Back!">
      <p className="font-normal text-xs text-center lg:text-sm text-text3 px-3 py-8 ">
        Dont have an account?{" "}
        <Link
          to="/sign-up"
          className="text-primary underline font-medium mb-6 lg:mb-32"
        >
          Sign up
        </Link>
      </p>
      <button className="w-full  flex  gap-x-3  items-center justify-center mb-5 py-3 border border-strock rounded-xl text-text2 text-base font-semibold dark:border-darkStoke dark:text-white">
        <img src="/img/icon-google.png" alt="" />
        <span>Sign up with google</span>
      </button>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            error={errors.email?.message}
            placeholder="example@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            error={errors.password?.message}
            placeholder="Create a password"
          >
            <IconEyeToggle
              toggled={showPassword}
              onToggle={handleTogglePassword}
            />
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right w-full">
            <span className="text-sm font-medium text-primary inline-block">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className=" bg-primary w-full mt-5" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthetication>
  );
}

SignInPage.propTypes = {};

export default SignInPage;
