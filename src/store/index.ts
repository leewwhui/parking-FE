import { create } from "zustand";
import { UserDataResponse } from "@/types/api";

interface SessionProps {
  user: UserDataResponse | null;
  fetching: boolean;
  login: (user: UserDataResponse) => void;
  logout: () => void;
}

export const useSessionStore = create<SessionProps>((set) => ({
  user: null,
  fetching: true,
  login: (user: UserDataResponse) => set(() => ({ user })),
  logout: () => set(() => ({ user: null })),
}));
