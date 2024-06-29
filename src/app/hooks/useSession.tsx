import { useCookies } from "react-cookie";
import useSWR from "swr";
import { fetchUser } from "../api/auth";
import { useMemo } from "react";
import { AuthStatus } from "@/types";

export const useSession = () => {
  const [cookies, setCookie] = useCookies(["bearer_token"]);

  const { data, mutate, error } = useSWR("api_user", () =>
    fetchUser(cookies.bearer_token)
  );

  const loading = !data && !error;

  const status = useMemo(() => {
    if (loading) return AuthStatus.LOADING;
    if (!loading && !error) return AuthStatus.AUTHORIZED;
    return AuthStatus.UNAUTHORIZED;
  }, [loading]);

  return {
    status,
    user: data ? data.data : null,
  };
};
