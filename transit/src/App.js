import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ByRoute from "./components/ByRoute/ByRoute";
import ByStopNum from "./components/ByStopNum/ByStopNum";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ByRoute} />
        <Route path="/number" component={ByStopNum} />
      </Switch>
    </Router>
  );
}

export default App;
