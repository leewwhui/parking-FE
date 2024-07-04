import axios from "axios";

export const axios_instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});