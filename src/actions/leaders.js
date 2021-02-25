import { GET_LEADERS } from "GET_LEADERS";

export const leadersAction = (leaders) => {
  return {
    type: GET_LEADERS,
    leaders,
  };
};
