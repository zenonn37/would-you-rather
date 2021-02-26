import { GET_ALL_USERS, SET_LOGGED_USER, LOGOUT } from "../types/types";

export const setLoggedUser = (user) => {
  return {
    type: SET_LOGGED_USER,
    user,
  };
};

export const getUsersAction = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
