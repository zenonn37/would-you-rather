import { GET_QUESTIONS } from "../types";

export const questionsAction = (uestions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};
