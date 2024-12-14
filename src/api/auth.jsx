import { get, post } from "./index";

export const login = async ({ email, password }) => {
  return post("/signin", { email, password });
};

export const getProfile = async () => {
  return get("/profile");
};
