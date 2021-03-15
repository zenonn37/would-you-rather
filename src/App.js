import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Leaders from "./pages/Leader";
import ProtectedRoute from "./protectedRoutes";
import Nav from "./components/Nav";
import New from "./pages/New";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/questions" component={Question} />
          <ProtectedRoute path="/leaders" component={Leaders} />
          <ProtectedRoute path="/new" component={New} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
