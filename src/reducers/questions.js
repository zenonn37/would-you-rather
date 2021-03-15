import { GET_QUESTIONS } from "../types/types";
const initState = {
  answered: [],
  unanswered: [],
  questions: [],
};

export const questions = (state = initState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      // const { question } = action.payload;
      const questions = action.payload;
      const answered = questions.filter(
        (q) => q.optionOne.votes.length > 0 || q.optionTwo.votes.length
      );
      const unanswered = questions.filter(
        (q) => !q.optionOne.votes.length > 0 && !q.optionTwo.votes.length
      );

      return {
        ...state,
        answered: answered,
        unanswered: unanswered,
        questions: questions,
      };

    default:
      return state;
  }
};
