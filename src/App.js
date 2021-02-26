import { useEffect } from "react";
import { fetchAllusers } from "./actions/shared";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  console.log(users);

  useEffect(() => {
    dispatch(fetchAllusers());
  }, [dispatch]);
  return <div className="App">App</div>;
};

export default App;
