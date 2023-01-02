import { api, appStorage } from "../helpers";
import { LOGIN, LOGOUT } from "../constants";
import { iCreds } from "../types";

export const login = async ({ email, password }: iCreds): Promise<boolean> => {
  try {
    const args = {
      url: LOGIN,
      body: { email, password },
    };
    const response = await api.post(args);
    if (response) {
      appStorage.setItem("isLoggedIn", true);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const logout = async (): Promise<boolean> => {
  try {
    const args = {
      url: LOGOUT,
      body: { id: "1" },
    };
    const response = await api.post(args);
    if (response) {
      appStorage.clear();
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
