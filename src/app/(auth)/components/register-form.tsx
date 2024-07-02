"use client";

import { register } from "@/app/api/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import {
  RegisterErrorResponse,
  RegisterRequestData,
  RegisterResponse,
} from "@/types/api";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ErrorLabel } from "./error-label";

export const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<RegisterErrorResponse | null>(null);

  const onSubmit = async (values: RegisterRequestData) => {
    try {
      const data = (await register(values)) as RegisterResponse;
      toast.success(data.message);
      router.replace("/login");
    } catch (error: any) {
      setError(error.response.data);
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

        <ErrorLabel error={error} name="name" />
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

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password_confimation">Confirm Password</Label>
        <PasswordInput
          id="password_confirmation"
          name="password_confirmation"
          onChange={formik.handleChange}
          value={formik.values.password_confirmation}
        />
        <ErrorLabel error={error} name="password_confirmation" />
      </div>

      <Button type="submit" className="w-full" variant="default">
        Submit
      </Button>
    </form>
  );
};
