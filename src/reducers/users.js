import { GET_ALL_USERS, SET_LOGGED_USER, LOGOUT } from "../types/types";

const initState = {
  users: [],

  isAuth: false,
  loggedIn: {},
};

export const users = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_LOGGED_USER:
      return {
        ...state,
        loggedIn: action.user,
        isAuth: action.user ? true : false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
