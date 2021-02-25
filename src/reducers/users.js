import { GET_ALL_USERS } from "../types";

export default users = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;

    default:
      return state;
  }
};
