"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {PasswordInput} from "@/components/ui/password-input";
import {Label} from "@/components/ui/label";
import {useFormik} from "formik";
import {useToast} from "@/components/ui/use-toast";

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {toast} = useToast();

  const onSubmit = async (values: FormData) => {
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

      <Button type="submit" className="w-full" variant="default">
        Submit
      </Button>
    </form>
  );
};
