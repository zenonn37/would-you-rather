import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector((state) => state.users);

  return (
    <Route
      render={(props) =>
        !isAuth ? <Redirect to="/" /> : <Component {...props} />
      }
      {...rest}
    ></Route>
  );
};

export default ProtectedRoute;
