import { GET_ALL_USERS } from "../types/types";

const initState = {
  users: [
    {
      id: 1,
      name: "Jack",
    },
  ],
};

export const users = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};
