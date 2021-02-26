//Login Page, Component
import { useEffect, useState } from "react";
import { fetchAllusers } from "../actions/shared";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);
  const [loggedUser, setloggedUser] = useState({});

  useEffect(() => {
    dispatch(fetchAllusers());
  }, [dispatch]);

  const userHandler = (e) => {
    console.log(e.target.value);
    setloggedUser(e.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <select value="login" onChange={(e) => userHandler(e)}>
        <option value="login" disabled>
          Login Please
        </option>
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
