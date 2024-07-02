import {
  LoginErrorResponse,
  LoginRequestData,
  LoginResponse,
  RegisterErrorResponse,
  RegisterRequestData,
  UserDataResponse,
} from "@/types/api";
import { axios_instance } from "@/app/api/index";

export const fetchUser = async (cookie: string) => {
  const user = await axios_instance.get<{ data: UserDataResponse }>("/user", {
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-Type": "application/json",
    },
  });

  return user.data.data;
};

export const login = async (
  values: LoginRequestData
): Promise<LoginResponse | LoginErrorResponse> => {
  const data = await axios_instance.post("/login", values);
  return data.data;
};

export const register = async (
  values: RegisterRequestData
): Promise<RegisterRequestData | RegisterErrorResponse> => {
  const data = await axios_instance.post("/register", values);
  return data.data;
};
