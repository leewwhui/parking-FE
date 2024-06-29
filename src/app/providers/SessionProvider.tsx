'use client';

import React, {FC, createContext, useContext} from "react";
import {useSession} from "@/app/hooks/useSession";
import {AuthStatus} from "@/types";
import {UserDataResponse} from "@/types/api";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionContext = createContext<null | UserDataResponse>(null);

export const SessionProvider: FC<SessionProviderProps> = ({children}) => {
  const {status, user} = useSession();

  if (status === AuthStatus.LOADING) return null;

  return (
    <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
  );
};
