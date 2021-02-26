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
  let userArray = [];
  if (users) {
    userArray = Object.keys(users).map((key) => {
      let value = users[key];
      return value;
    });
  }

  return (
    <>
      <h1>Login</h1>
      <div>
        {userArray &&
          userArray.map((user) => <li key={user.id}>{user.name}</li>)}
      </div>
      <select>
        <option></option>
      </select>
    </>
  );
};

export default Login;
