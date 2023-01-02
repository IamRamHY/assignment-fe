import { api } from "../helpers";
import { GET_USERS } from "../constants";
import { iUser } from "../types";

export const getUsers = async (skip: number): Promise<Array<iUser>> => {
  try {
    const args = {
      url: GET_USERS,
      body: {
        id: "1",
        skip,
        limit: 10,
      },
    };
    const response = await api.post(args);
    if (response) {
      return response;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
