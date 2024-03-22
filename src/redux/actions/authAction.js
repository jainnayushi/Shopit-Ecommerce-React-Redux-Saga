import { REGISTER, LOGOUT, LOGIN } from "../../constants/constants";

export const registerUser = (data) => ({
  type: REGISTER,
  payload: data,
});

export const loginUser = (data) => ({
  type: LOGIN,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});
