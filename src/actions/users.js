import { GET_ALL_USERS } from "../types/types";

export const getUsersAction = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};
