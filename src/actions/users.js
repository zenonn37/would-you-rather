import { GET_ALL_USERS } from "../types";

export const getUsers = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};
