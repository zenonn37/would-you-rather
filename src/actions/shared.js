//action creators
import { getUsersAction } from "./users";
import { questionsAction } from "./questions";
import { _getUsers, _getQuestions } from "../utils/_DATA";

export const fetchAllusers = () => (dispatch) => {
  _getUsers().then((res) => {
    dispatch(getUsersAction(res));
    console.log(res);
  });
};

export const fetchAllQuestions = () => (dispatch) => {
  _getQuestions().then((res) => {
    const quest = Object.keys(res).map((key) => {
      const value = res[key];
      return value;
    });
    dispatch(questionsAction(quest));
    console.log(quest);
  });
};
