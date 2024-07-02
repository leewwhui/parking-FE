"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useState } from "react";
import { login } from "@/app/api/auth";
import { useSessionStore } from "@/app/store";
import { useToken } from "@/app/hooks/useToken";
import { Icons } from "@/components/icons";
import {
  LoginErrorResponse,
  LoginRequestData,
  LoginResponse,
} from "@/types/api";
import { ErrorLabel } from "./error-label";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const store = useSessionStore();
  const { setToken } = useToken();
  const [error, setError] = useState<LoginErrorResponse | null>(null);

  const onSubmit = async (values: LoginRequestData) => {
    setLoading(true);
    try {
      const data = (await login(values)) as LoginResponse;
      setToken(data.token);
      store.login(data.data);
    } catch (error: any) {
      setError(error.response.data);
    }
    setLoading(false);
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
        <ErrorLabel error={error} name="email" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Password</Label>
        <PasswordInput
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <ErrorLabel error={error} name="password" />
      </div>

      <Button
        type="submit"
        className="w-full"
        variant="default"
        disabled={loading}
      >
        <Icons.loading
          className={`mr-2 h-4 w-4 animate-spin ${
            loading ? "block" : "hidden"
          }`}
        />
        Submit
      </Button>
    </form>
  );
};
