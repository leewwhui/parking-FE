"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import { useSessionStore } from "@/store";
import { useToken } from "@/hooks/useToken";
import {
  LoginErrorResponse,
  LoginRequestData,
  LoginResponse,
} from "@/types/api";
import { ErrorMessage } from "./error-message";
import { Loading } from "@/components/loading";
import { login } from "@/api/auth";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const store = useSessionStore();
  const { setToken } = useToken();

  const onSubmit = async (
    values: LoginRequestData,
    helpers: FormikHelpers<LoginRequestData>
  ) => {
    try {
      setLoading(true);
      const data = (await login(values)) as LoginResponse;
      setToken(data.token);
      store.login(data.data);
    } catch (error: any) {
      const errorData = error.response.data as LoginErrorResponse;
      const email = errorData.errors?.email || [""];
      const password = errorData.errors?.password || [""];

      helpers.setErrors({
        email: email[0],
        password: password[0],
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik<LoginRequestData>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onSubmit,
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
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
        {formik.errors.password && <ErrorMessage message={formik.errors.password} />}
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
