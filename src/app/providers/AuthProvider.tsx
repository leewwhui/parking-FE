"use client";

import React, { FC, Fragment, ReactNode } from "react";
import { redirect } from "next/navigation";
import { useSessionStore } from "../store";

interface AuthProviderProps {
  children: ReactNode;
  isRedirect?: boolean;
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children, isRedirect = true } = props;

  const user = useSessionStore((state) => state.user);

  if (!user && isRedirect) return redirect("/");
  if (!user && !isRedirect) return null;

  return <Fragment>{children}</Fragment>;
};
