import {UserDataResponse} from "@/types/api";

export const fetchUser = async (
  cookie: string
): Promise<{ data: UserDataResponse }> => {
  const data = await fetch("http://127.0.0.1:8000/api/user", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie}`,
    },
  });

  return data.json();
};

// export const loginUser = async (
//   email: string,
//   password: string
// ): Promise<loginResponse> => {
//   const data = await fetch("http://127.0.0.1:8000/api/login", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({email, password}),
//   });
//
//   return data.json();
// };
