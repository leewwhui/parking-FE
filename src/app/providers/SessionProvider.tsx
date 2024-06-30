"use client";

import React, { FC, useEffect, useState } from "react";
import { UserDataResponse } from "@/types/api";
import { axios_instance } from "@/app/api";
import { SessionContext } from "@/app/hooks/useSession";
import { fetchUser } from "../api/auth";

interface SessionProviderProps {
  children: React.ReactNode;
}

type UserData = UserDataResponse | null;

export const SessionProvider: FC<SessionProviderProps> = (props) => {
  const { children } = props;

  const [user, setUser] = useState<UserData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(process.env.AUTH_TOKEN as string);
    if (token) {
      fetchUser(token)
        .then((data) => setUser(data))
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }
    setLoading(false);
  }, []);

  if (loading) return null;

  const login = async (email: string, password: string) => {
    const data = await axios_instance.post("/login", { email, password });
    return data.data;
  };

  return (
    <SessionContext.Provider
      value={{ user, login, setUser: (user: UserData) => setUser(user) }}
    >
      {children}
    </SessionContext.Provider>
  );
};
