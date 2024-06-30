"use client";

import React, { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { useSessionStore } from "../store";
import { fetchUser } from "../api/auth";

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = (props) => {
  const { login } = useSessionStore();
  const [loading, setLoading] = useState(true);
  const { children } = props;

  useEffect(() => {
    const auth_token = process.env.AUTH_TOKEN as string;
    const cookie = localStorage.getItem(auth_token);
    if (!cookie) setLoading(false);
    else {
      fetchUser(cookie)
        .then((data) => login(data))
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) return null;

  return <Fragment>{children}</Fragment>;
};
