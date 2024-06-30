import {LoginResponse, UserDataResponse} from "@/types/api";
import {AxiosResponse} from 'axios';
import {axios_instance} from "@/app/api/index";

export const fetchUser = async (
  cookie: string
) => {
  const user: AxiosResponse<UserDataResponse> = await axios_instance.get<UserDataResponse>('/user', {
    headers: {
      'Authorization': `Bearer ${cookie}`,
      'Content-Type': 'application/json'
    }
  });

  return user.data;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const data = await axios_instance.post("/login", {email, password});
  return data.data;
}