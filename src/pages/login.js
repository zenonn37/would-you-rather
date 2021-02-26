//Login Page, Component
import { useEffect, useState } from "react";
import { fetchAllusers } from "../actions/shared";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  console.log(users);

  useEffect(() => {
    dispatch(fetchAllusers());
  }, [dispatch]);

  return (
    <>
      <h1>Login</h1>
      <select>
        {users &&
          Object.keys(users).map((key) => (
            <option key={users[key].id} value={users[key].id}>
              {users[key].name}
            </option>
          ))}
      </select>
    </>
  );
};

export default Login;
