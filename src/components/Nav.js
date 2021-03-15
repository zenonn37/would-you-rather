import { Link } from "react-router-dom";
import { logOut } from "../actions/users";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  const { isAuth, loggedIn } = useSelector((state) => state.users);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      {isAuth ? (
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/new">
            <li>New</li>
          </Link>
          <Link to="/leaders">
            <li>Leaders</li>
          </Link>
          {loggedIn && <li>{loggedIn.name}</li>}

          <li onClick={() => handleLogOut()}>Logout</li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
