//Login Page, Component
import { useEffect } from "react";
import { fetchAllusers } from "../actions/shared";
import { setLoggedUser, logOut } from "../actions/users";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const { users, isAuth } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchAllusers());
  }, [dispatch]);

  const userHandler = (e) => {
    const usersArray = Object.keys(users).map((key) => {
      const value = users[key];
      return value;
    });

    const user = usersArray.find((usr) => usr.id === e.target.value);

    dispatch(setLoggedUser(user));
  };

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isAuth ? (
        <Redirect to="/home" />
      ) : (
        <div>
          <h1>Login</h1>
          {isAuth && <p>Logged in</p>}
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
          <div>
            <button onClick={() => logOutHandler()}>LOGOUT</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
