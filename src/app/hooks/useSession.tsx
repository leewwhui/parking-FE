import {LoginResponse, UserDataResponse} from "@/types/api";
import {createContext, useContext} from "react";

type SessionContextValue = {
  user: UserDataResponse | null,
  login: (email: string, password: string) => Promise<LoginResponse>;
  setUser: (user: UserDataResponse | null) => void;
}

// @ts-ignore
export const SessionContext = createContext<SessionContextValue>({});

export const useSessionContext = () => useContext(SessionContext);