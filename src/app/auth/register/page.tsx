import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Shell } from "@/components/ui/shell";
import { RegisterForm } from "../components/register-form";
import { OAuth } from "../components/oauth";

const page = () => {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-3">
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
          <OAuth></OAuth>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              Already have an account?
            </span>
            <Link
              aria-label="Sign up"
              href="/auth/login"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  );
};

export default page;
