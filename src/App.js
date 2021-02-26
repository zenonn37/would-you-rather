import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Leaders from "./pages/Leader";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/questions" component={Question} />
        <Route path="/leaders" component={Leaders} />
      </Switch>
    </Router>
  );
};

export default App;
