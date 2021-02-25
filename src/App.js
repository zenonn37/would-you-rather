import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  console.log(users);

  useEffect(() => {}, []);
  return <div className="App">App</div>;
};

export default App;
