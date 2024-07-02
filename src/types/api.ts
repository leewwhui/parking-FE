export interface UserDataResponse {
  name: string;
  email: string;
}

export interface LoginResponse {
  data: UserDataResponse;
  token: string;
  type: "login";
  code: 200;
}

export interface LoginErrorResponse {
  message: string;
  errors: {
    email: string[];
    password: string[];
  };
}

export interface RegisterErrorResponse {
  message: string;
  errors: {
    name: string[];
    email: string[];
    password: string[];
    password_confirmation: string[];
  };
}

export interface RegisterResponse {
  message: string;
}

export interface LoginRequestData {
  email: string;
  password: string;
}

export interface RegisterRequestData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
