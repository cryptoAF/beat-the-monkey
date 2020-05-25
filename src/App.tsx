import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./components/Home";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Splash}>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App