"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { login } from "@/app/api/auth";
import { useSessionStore } from "@/app/store";
import { useToken } from "@/app/hooks/useToken";

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const store = useSessionStore();
  const { setToken } = useToken();

  const onSubmit = async (values: FormData) => {
    // setLoading(true);
    try {
      const data = await login(values.email, values.password);
    } catch (error) {
      console.log(error);
    }
    // if (data && data.code === 200) {
    //   setToken(data.token);
    //   store.login(data.data);
    // }
    // setLoading(false);
  };

  const formik = useFormik<FormData>({
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
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Password</Label>
        <PasswordInput
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        variant="default"
        disabled={loading}
      >
        <ReloadIcon
          className={`mr-2 h-4 w-4 animate-spin ${
            loading ? "block" : "hidden"
          }`}
        />
        Submit
      </Button>
    </form>
  );
};
