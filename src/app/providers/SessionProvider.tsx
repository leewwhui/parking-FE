"use client";

import React, { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { useSessionStore } from "../store";
import { fetchUser } from "../api/auth";
import Loading from "../loading";
import { useToken } from "../hooks/useToken";

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = (props) => {
  const { login } = useSessionStore();
  const [loading, setLoading] = useState(true);
  const { token } = useToken();
  const { children } = props;

  useEffect(() => {
    if (!token) setLoading(false);
    else {
      fetchUser(token)
        .then((data) => login(data))
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) return <Loading />;

  return <Fragment>{children}</Fragment>;
};
