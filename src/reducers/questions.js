import { GET_QUESTIONS } from "../types/types";
const initState = {
  questions: [],
};

export const questions = (state = initState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      // const { question } = action.payload;
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};
