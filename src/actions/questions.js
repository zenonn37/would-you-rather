import { GET_QUESTIONS } from "../types/types";

export const questionsAction = (payload) => {
  return {
    type: GET_QUESTIONS,
    payload,
  };
};
