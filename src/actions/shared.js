//action creators
import { getUsersAction } from "./users";
import { _getUsers } from "../utils/_DATA";

export const fetchAllusers = () => (dispatch) => {
  _getUsers().then((res) => {
    dispatch(getUsersAction(res));
    console.log(res);
  });
};
