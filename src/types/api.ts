export interface UserDataResponse {
  name: string;
  email: string;
}

export interface LoginResponse {
  data: UserDataResponse,
  token: string,
  type: 'login',
  code: 200
}
