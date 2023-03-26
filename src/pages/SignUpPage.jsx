import { Button } from "components/button";
import { CheckBox } from "components/checkbox";
import { FormGroup } from "components/common";
import { Input } from "components/Input";
import { Label } from "components/label";
import LayoutAuthetication from "layouts/LayoutAuthetication";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
  fullname: yup.string("").required("This field is required"),
  email: yup
    .string("")
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});
function SignUpPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignUp = (e, data) => {
    e.preventDefault();
    console.log(data);
  };
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggleTerm = (e) => {
    setAcceptTerm(!acceptTerm);
  };
  console.log(errors);
  return (
    <LayoutAuthetication heading="Sign Up">
      <p className="font-normal text-xs text-center lg:text-sm text-text3 px-3 py-8 ">
        Already have an account?{" "}
        <Link
          to="/sign-in"
          className="text-primary underline font-medium mb-6 lg:mb-32"
        >
          Sign in
        </Link>
      </p>
      <button className="w-full  flex  gap-x-3  items-center justify-center mb-5 py-3 border border-strock rounded-xl text-text2 text-base font-semibold">
        <img src="/img/icon-google.png" alt="" />
        <span>Sign up with google</span>
      </button>
      <p className="text-center text-xs lg:text-sm font-normal px-2 py-2 mb-4 lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="fullname">Fullname *</Label>
          <Input
            control={control}
            name="fullname"
            error={errors.fullname?.message}
            placeholder="Jhon Doe"
          />
        </FormGroup>
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
            error={errors.password?.message}
            placeholder="Create a password"
          />
        </FormGroup>

        <CheckBox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
          <p className="text-sm tex-text2 flex-1">
            I agree to the{" "}
            <span className="text-secondary underline">Terms of Use</span> and
            have read and understand the
            <span className="text-secondary underline"> Privacy policy.</span>
          </p>
        </CheckBox>
        <Button className=" bg-primary w-full mt-5" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthetication>
  );
}

export default SignUpPage;
