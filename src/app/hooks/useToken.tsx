import { useLocalStorage } from "usehooks-ts";

export const useToken = () => {
  const key = process.env.AUTH_TOKEN as string;
  const [token, setToken, removeToken] = useLocalStorage(key, '');
  return { token, setToken, removeToken };
};
