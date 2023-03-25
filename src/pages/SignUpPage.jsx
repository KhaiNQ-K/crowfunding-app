import { Label } from "components/common/label";
import { Input } from "components/Input";
import LayoutAuthetication from "layouts/LayoutAuthetication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignUpPage() {
  const { handleSubmit, control } = useForm();
  return (
    <LayoutAuthetication heading="Sign Up">
      <p className="font-normal text-xs lg:text-sm text-text3 px-3 py-8 ">
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
      <form>
        <div className="flex flex-col gap-y-3 items-start">
          <Label>Fullname*</Label>
          <Input control={control} name="fullname" />
        </div>
      </form>
    </LayoutAuthetication>
  );
}

export default SignUpPage;
