"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import {
  RegisterErrorResponse,
  RegisterRequestData,
  RegisterResponse,
} from "@/types/api";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ErrorMessage } from "./error-message";
import { Loading } from "@/components/loading";
import { register } from "@/api/auth";

export const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    values: RegisterRequestData,
    helpers: FormikHelpers<RegisterRequestData>
  ) => {
    try {
      setLoading(true);
      const data = (await register(values)) as RegisterResponse;
      toast.success(data.message);
      router.replace("/login");
    } catch (error: any) {
      const errorData = error.response.data as RegisterErrorResponse;
      const name = errorData.errors?.name || [""];
      const email = errorData.errors?.email || [""];
      const password = errorData.errors?.password || [""];
      const confirm = errorData.errors?.password_confirmation || [""];

      helpers.setErrors({
        name: name[0],
        email: email[0],
        password: password[0],
        password_confirmation: confirm[0],
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik<RegisterRequestData>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: onSubmit,
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        {formik.errors.name && <ErrorMessage message={formik.errors.name} />}
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <ErrorMessage message={formik.errors.email} />}
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Password</Label>
        <PasswordInput
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <ErrorMessage message={formik.errors.password} />
        )}
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password_confimation">Confirm Password</Label>
        <PasswordInput
          id="password_confirmation"
          name="password_confirmation"
          onChange={formik.handleChange}
          value={formik.values.password_confirmation}
        />
        {formik.errors.password_confirmation && (
          <ErrorMessage message={formik.errors.password_confirmation} />
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        variant="default"
        disabled={loading}
      >
        <Loading loading={loading} />
        Submit
      </Button>
    </form>
  );
};
