import { Button } from "components/button";
import { FormGroup } from "components/common";
import { Label } from "components/label";
import { Input } from "components/Input";
import LayoutAuthetication from "layouts/LayoutAuthetication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignUpPage() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
  };
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
          <Input control={control} name="fullname" placeholder="Jhon Doe" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
          />
        </FormGroup>
        <div className="flex items-start gap-x-5">
          <span className="inline-block w-5 h-5 rounded border border-text4 "></span>
          <p className="text-sm tex-text2 flex-1">
            I agree to the{" "}
            <span className="text-secondary underline">Terms of Use</span> and
            have read and understand the
            <span className="text-secondary underline"> Privacy policy.</span>
          </p>
        </div>
        <Button className=" bg-primary w-full mt-5" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthetication>
  );
}

export default SignUpPage;
